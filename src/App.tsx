import { Component, createSignal, Index, batch, Accessor } from "solid-js";
import { inc } from "rambda";

import { SIZES } from "./lib/config";
import { createGrid, createRandomGrid } from "./lib/utils";
import { Cell, Grid } from "./lib/types";
import { getRainbowHSL } from "./lib/colors";
import { nextState } from "./lib/game";

import Profiler from "./components/Profiler";
import GridContainer from "./components/GridContainer";
import CellItem from "./components/CellItem";
import Controls from "./components/Controls";
import { SOLID_LOGO } from "./components/icons";

function truncate<T>(length: number, xs: T[]) {
  return xs.length > length ? xs.slice(0, length) : xs;
}

const App: Component = () => {
  const [sizeIndex, _setSizeIndex] = createSignal(3);
  const gridSize = SIZES[sizeIndex()].grid;

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

  let cursor = 0;
  let history = [];
  let frameId = 0;

  const [isPlaying, setIsPlaying] = createSignal(false);
  const [grid, setGrid] = createSignal(withToggles(createRandomGrid(gridSize)));
  const [getFrames, setFrames] = createSignal(0);
  const [hasHistory, setHasHistory] = createSignal(history.length > 0);

  const handleRandom = () =>
    setGrid(() => withToggles(createRandomGrid(gridSize)));

  const handleNextState = () => {
    if (cursor - 1 in history) {
      batch(() => {
        cursor--;
        setHasHistory(true);
        setGrid(history[cursor]);
      });
    } else {
      const nextGrid = nextState(grid());
      history = [nextGrid, ...truncate(100, history)];
      batch(() => {
        setHasHistory(true);
        setGrid(nextGrid);
      });
    }
  };

  const handlePreviousState = () => {
    if (cursor + 1 in history) {
      cursor++;
      setGrid(() => withToggles(history[cursor]));
    } else {
      setHasHistory(false);
    }
  };

  const handleReset = () => {
    batch(() => {
      history = [];
      setHasHistory(false);
      setGrid(() => withToggles(createGrid(gridSize)));
    });
  };

  const handleTogglePlay = () => {
    if (isPlaying()) {
      window.cancelAnimationFrame(frameId);

      batch(() => {
        setGrid(withToggles);
        setIsPlaying(false);
        setFrames(0);
      });
      return;
    }

    setIsPlaying(true);

    function tick() {
      batch(() => {
        handleNextState();
        setFrames(inc);
      });

      if (isPlaying()) {
        frameId = window.requestAnimationFrame(tick);
      }
    }
    tick();
  };

  const handleCellMouseEvent = (cell: Accessor<Cell>) => (e: MouseEvent) => {
    if (e.button === 0 && e.buttons === 1) cell().toggle();
  };

  return (
    <main className="grid h-screen bg-gradient-to-br from-dark to-primary place-items-center text-light">
      <div className="grid gap-8 place-items-center md:-mt-24 transform ">
        <h1 className="text-4xl w-full ">
          <div className="flex flex-wrap mx-auto justify-evenly items-center">
            {SOLID_LOGO}
            <div className="text-[#d5dce5]">Game of Life</div>
          </div>
        </h1>
        <Controls
          onRandom={handleRandom}
          onTogglePlay={handleTogglePlay}
          onReset={handleReset}
          onPreviousState={handlePreviousState}
          onNextState={handleNextState}
          isPlaying={isPlaying()}
          hasHistory={hasHistory()}
        />
        <GridContainer>
          <div>
            <Index each={grid()}>
              {(row, y) => (
                <div className="flex flex-1">
                  <Index each={row()}>
                    {(cell, x) => (
                      <CellItem
                        onMouseDown={handleCellMouseEvent(cell)}
                        onMouseMove={handleCellMouseEvent(cell)}
                        isAlive={cell().state()}
                        sizeIndex={sizeIndex()}
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
