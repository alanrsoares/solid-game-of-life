import { inc, map } from "rambda";
import { Accessor, batch, Component, createSignal, Index } from "solid-js";

import styles from "./App.module.css";
import CellItem from "./components/CellItem";
import Controls from "./components/Controls";
import GridContainer from "./components/GridContainer";
import { SOLID_LOGO } from "./components/icons";
import Profiler from "./components/Profiler";
import { getRainbowHSL } from "./lib/colors";
import { SIZES } from "./lib/config";
import { nextState } from "./lib/game";
import { Cell, Row } from "./lib/types";
import { createGrid, createRandomGrid, truncate } from "./lib/utils";

const App: Component = () => {
  const [sizeIndex, _setSizeIndex] = createSignal(3);
  const gridSize = SIZES[sizeIndex()].grid;

  const withToggles = map<Row>(
    map((cell) => {
      const [state, setState] = createSignal(cell.state());

      return {
        state,
        toggle: () => setState(!state()),
      };
    }),
  );

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
    <main class={styles.shell}>
      <div class="grid transform place-items-center gap-8 md:-mt-24">
        <h1 class="w-full text-4xl ">
          <div class="mx-auto flex flex-wrap items-center justify-evenly">
            {SOLID_LOGO}
            <div class="text-[#d5dce5]">Game of Life</div>
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
                <div class="flex flex-1">
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
