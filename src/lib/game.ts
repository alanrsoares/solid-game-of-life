import type { Grid, Point } from "./types";

const newKey = (size: number) => (key: number) => {
  if (key === -1) {
    return size - 1;
  }
  if (key === size) {
    return 0;
  }
  return key;
};

const newKeys = (size: number, keys: number[]) => keys.map(newKey(size));

const combinePositions = ({ y, x }: Point): number[][] =>
  [-1, 0, 1].reduce(
    (acc, $y, _, offset) =>
      offset.reduce((b, $x) => ($x || $y ? [...b, [y + $y, x + $x]] : b), acc),
    []
  );

const getIn = (grid: Grid) => (position: number[]) =>
  (([y, x]) => grid[y][x])(newKeys(grid.length, position));

export const getNeighbours = (grid: Grid, position: Point): number =>
  combinePositions(position)
    .map(getIn(grid))
    .filter((x) => x.state()).length;

export const willLive = (isAlive: boolean, neighbours: number) =>
  isAlive ? neighbours >= 2 && neighbours <= 3 : neighbours === 3;

export const nextState = (grid: Grid): Grid =>
  grid.map((row, y) =>
    row.map((cell, x) => {
      const state = willLive(cell.state(), getNeighbours(grid, { y, x }));

      return {
        state: () => state,
        toggle: () => {},
      };
    })
  );
