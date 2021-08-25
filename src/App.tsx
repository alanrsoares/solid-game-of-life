import { Component, createSignal, Index } from "solid-js";
import { createStore } from "solid-js/store";

import { createRandomGrid } from "./lib/utils";
import { SIZES } from "./lib/config";

import Controls from "./components/Controls";
import Profiler from "./components/Profiler";
import GridContainer from "./components/GridContainer";
import { getRainbowHSL } from "./lib/colors";
import Cell from "./components/Cell";

const getInitialState = (gridSize: number) => ({
  grid: createRandomGrid(gridSize),
});

const App: Component = () => {
  const [getSize, setSize] = createSignal(1);
  const gridSize = SIZES[getSize()].grid;
  const [store, setState] = createStore(getInitialState(gridSize));

  const handleRandom = () => setState("grid", () => createRandomGrid(gridSize));

  return (
    <main className="grid min-h-screen bg-gray-800 place-items-center text-white">
      <div className="grid gap-8 place-items-center md:-mt-24">
        <h1 className="text-xl">Solid Game of Life</h1>
        <Controls onRandom={handleRandom} />
        <GridContainer>
          <div>
            <Index each={store.grid}>
              {(row, y) => (
                <div className="flex flex-1">
                  <Index each={row()}>
                    {(isAlive, x) => (
                      <Cell
                        isAlive={isAlive()}
                        sizeIndex={1}
                        bgColor={
                          isAlive() ? getRainbowHSL(y, x, gridSize) : undefined
                        }
                      />
                    )}
                  </Index>
                </div>
              )}
            </Index>
          </div>
        </GridContainer>
        <Profiler />
      </div>
    </main>
  );
};

export default App;
