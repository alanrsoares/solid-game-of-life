import { Component, Accessor, Index } from "solid-js";
import { getRainbowHSL } from "../lib/colors";

import type { Grid } from "../lib/types";
import Cell from "./Cell";
import GridContainer from "./GridContainer";

type Props = {
  grid: Grid;
};

const GridComponent: Component<Props> = ({ grid }: Props) => {
  const gridSize = grid.length;

  return (
    <GridContainer>
      <div>
        <Index each={grid}>
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
  );
};

export default GridComponent;
