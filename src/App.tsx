import { Component, createSignal, Index, batch, Accessor } from "solid-js";
import { inc } from "ramda";

import { SIZES } from "./lib/config";
import { createGrid, createRandomGrid } from "./lib/utils";
import { Cell, Grid } from "./lib/types";
import { getRainbowHSL } from "./lib/colors";
import { nextState } from "./lib/game";

import Profiler from "./components/Profiler";
import GridContainer from "./components/GridContainer";
import CellItem from "./components/CellItem";
import Controls from "./components/Controls";

const SOLID_LOGO = (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 166 155.3"
      className="w-12"
    >
      <defs>
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1="27.5"
          y1="3"
          x2="152"
          y2="63.5"
        >
          <stop offset=".1" stop-color="#76b3e1" />
          <stop offset=".3" stop-color="#dcf2fd" />
          <stop offset="1" stop-color="#76b3e1" />
        </linearGradient>
        <linearGradient
          id="b"
          gradientUnits="userSpaceOnUse"
          x1="95.8"
          y1="32.6"
          x2="74"
          y2="105.2"
        >
          <stop offset="0" stop-color="#76b3e1" />
          <stop offset=".5" stop-color="#4377bb" />
          <stop offset="1" stop-color="#1f3b77" />
        </linearGradient>
        <linearGradient
          id="c"
          gradientUnits="userSpaceOnUse"
          x1="18.4"
          y1="64.2"
          x2="144.3"
          y2="149.8"
        >
          <stop offset="0" stop-color="#315aa9" />
          <stop offset=".5" stop-color="#518ac8" />
          <stop offset="1" stop-color="#315aa9" />
        </linearGradient>
        <linearGradient
          id="d"
          gradientUnits="userSpaceOnUse"
          x1="75.2"
          y1="74.5"
          x2="24.4"
          y2="260.8"
        >
          <stop offset="0" stop-color="#4377bb" />
          <stop offset=".5" stop-color="#1a336b" />
          <stop offset="1" stop-color="#1a336b" />
        </linearGradient>
      </defs>
      <path
        d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z"
        fill="#76b3e1"
      />
      <path
        d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z"
        opacity=".3"
        fill="url(#a)"
      />
      <path
        d="m52 35-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z"
        fill="#518ac8"
      />
      <path
        d="m52 35-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z"
        opacity=".3"
        fill="url(#b)"
      />
      <path
        d="M134 80a45 45 0 0 0-48-15L24 85 4 120l112 19 20-36c4-7 3-15-2-23z"
        fill="url(#c)"
      />
      <path
        d="M114 115a45 45 0 0 0-48-15L4 120s53 40 94 30l3-1c17-5 23-21 13-34z"
        fill="url(#d)"
      />
    </svg>
    <svg width="180" viewBox="0 0 63 12.8" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M.8 9.9s1.2 1.3 3.1 1.3c1.3 0 2.3-.8 2.3-2C6.2 6.3.4 7 .4 3.4.4 1.7 1.8.2 4 .2c2 0 3.1 1.1 3.1 1.1l-.5 1s-1-1-2.5-1-2.4 1-2.5 2c0 2.7 5.8 2 5.8 5.8 0 1.7-1.3 3.2-3.5 3.2-2.4 0-3.7-1.5-3.7-1.5zM19.1.3c3.3 0 5.9 2.6 5.9 6s-2.6 6.1-5.9 6.1-5.9-2.7-5.9-6.1 2.6-6 5.9-6zm0 11c2.6 0 4.7-2.2 4.7-5s-2.1-4.9-4.7-4.9-4.7 2.1-4.7 4.9c-.1 2.7 2 5 4.7 5zM31.7.5h1.1v10.6h5.3v1h-6.5zm12.7.1h1.1v11.6h-1.1zm8.6 0h3.7c3.5 0 5.8 2.2 5.8 5.8 0 3.7-2.4 5.8-5.9 5.8h-3.7zm3.6 10.6c2.8 0 4.8-1.6 4.8-4.8 0-3.1-1.9-4.8-4.7-4.8h-2.5v9.6z"
        fill="currentcolor"
      />
    </svg>
  </>
);

function truncate<T>(length: number, xs: T[]) {
  return xs.length > length ? xs.slice(0, length) : xs;
}

const App: Component = () => {
  const [sizeIndex, _setSizeIndex] = createSignal<
    0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
  >(3);
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

  const [grid, setGrid] = createSignal(withToggles(createRandomGrid(gridSize)));

  let cursor = 0;
  let history = [];

  const [getFrames, setFrames] = createSignal(0);

  const handleRandom = () =>
    setGrid(() => withToggles(createRandomGrid(gridSize)));

  const handleNextState = () => {
    if (cursor - 1 in history) {
      cursor--;
      setGrid(history[cursor]);
    } else {
      const nextGrid = nextState(grid());
      history = [nextGrid, ...truncate(100, history)];
      setGrid(nextGrid);
    }
  };

  const handlePreviousState = () => {
    if (cursor < history.length - 1) {
      cursor++;
      setGrid(() => withToggles(history[cursor]));
    }
  };

  const handleReset = () => {
    batch(() => {
      history = [];
      setGrid(() => withToggles(createGrid(gridSize)));
    });
  };

  let frameId = 0;
  let [isPlaying, setIsPlaying] = createSignal(false);

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
      const nextGrid = nextState(grid());
      history = [nextGrid, ...truncate(100, history)];

      batch(() => {
        setGrid(nextGrid);
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
