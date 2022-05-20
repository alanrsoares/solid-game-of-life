import { range } from "rambda";
import type { Grid } from "./types";

export const createGrid = (size: number): Grid =>
  range(0, size)
    .map(() => ({ state: () => false, toggle: () => {} }))
    .map((_x, _i, row) => row.slice());

export const createRandomGrid = (size: number): Grid =>
  createGrid(size).map((row) =>
    row.map(() => ({
      state: () => Math.random() >= 0.8,
      toggle: () => {},
    }))
  );
