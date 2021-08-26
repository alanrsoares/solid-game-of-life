import {
  Component,
  createSignal,
  Index,
  batch,
  Accessor,
  Show,
} from "solid-js";
import { inc } from "ramda";

import { SIZES } from "./lib/config";
import { createGrid, createRandomGrid } from "./lib/utils";
import { Cell, Grid } from "./lib/types";
import { getRainbowHSL } from "./lib/colors";
import { nextState } from "./lib/game";

import Profiler from "./components/Profiler";
import GridContainer from "./components/GridContainer";
import CellItem from "./components/CellItem";
import Button from "./components/Button";

const App: Component = () => {
  const [getSize, _setSize] = createSignal(1);
  const gridSize = SIZES[getSize()].grid;

  const withToggles = (grid: Grid): Grid => {
    return grid.map((row) =>
      row.map((cell) => {
        const [cellState, setCellState] = createSignal(cell.state());
        return {
          state: cellState,
          toggle: () => setCellState(!cellState()),
        };
      })
    );
  };

  const [getGrid, setGrid] = createSignal(
    withToggles(createRandomGrid(gridSize))
  );
  const [getFrames, setFrames] = createSignal(0);

  const handleRandom = () =>
    setGrid(() => withToggles(createRandomGrid(gridSize)));

  const handleNextState = () => setGrid((grid) => withToggles(nextState(grid)));

  const handleReset = () => {
    setGrid(() => withToggles(createGrid(gridSize)));
  };

  let frameId = 0;
  let [isPlaying, setIsPlaying] = createSignal(false);

  const handleTogglePlay = () => {
    if (isPlaying()) {
      setIsPlaying(false);
      window.cancelAnimationFrame(frameId);

      setFrames(0);
      return;
    }

    setIsPlaying(true);

    function tick() {
      batch(() => {
        setGrid(nextState);
        setFrames(inc);
      });

      if (isPlaying) {
        frameId = window.requestAnimationFrame(tick);
      }
    }
    tick();
  };

  const handleCellMouseEvent = (cell: Accessor<Cell>) => (e: MouseEvent) => {
    if (e.button === 0 && e.buttons === 1) cell().toggle();
  };

  return (
    <main className="grid min-h-screen bg-gray-800 place-items-center text-white">
      <div className="grid gap-8 place-items-center md:-mt-24">
        <h1 className="text-xl">Solid Game of Life</h1>
        <div className="w-full flex justify-between">
          <Button onclick={handleRandom}>Random</Button>
          <Button onclick={handleReset}>Reset</Button>
          <Button onclick={handleNextState}>Next</Button>
          <Button onclick={handleTogglePlay}>
            {isPlaying() ? "Pause" : "Play"}
          </Button>
        </div>
        <GridContainer>
          <div>
            <Index each={getGrid()}>
              {(row, y) => (
                <div className="flex flex-1">
                  <Index each={row()}>
                    {(cell, x) => (
                      <CellItem
                        onMouseDown={handleCellMouseEvent(cell)}
                        onMouseMove={handleCellMouseEvent(cell)}
                        isAlive={cell().state()}
                        sizeIndex={1}
                        bgColor={
                          cell().state()
                            ? getRainbowHSL(y, x, gridSize)
                            : undefined
                        }
                      />
                    )}
                  </Index>
                </div>
              )}
            </Index>
          </div>
        </GridContainer>
        <Profiler frames={getFrames()} />
      </div>
    </main>
  );
};

export default App;
