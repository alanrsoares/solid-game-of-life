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

export const calculateFrameRate = (
  ticks = 0,
  startedAt = Date.now(),
  now = Date.now()
) => (startedAt ? Math.ceil(ticks / ((now - startedAt) / 1000)) : null);

export const camelToSnakeCase = (s: string) =>
  s.replace(/([A-Z])/g, (x) => `-${x.toLocaleLowerCase()}`);

/**
 * converts a key-value object into a custom css properties
 *
 * @param obj
 * { foo: "bar", bar: "baz"}
 *
 * @example
 *  toCssProps({ color: "white", background: "black", fontSize: 10 });
 *  // "--color:white;--background:black;--font-size:10"
 */
export const toCssProps = (obj: Record<string, string | number>) =>
  Object.entries(obj)
    .map(([k, v]) => `--${camelToSnakeCase(k)}:${v}`)
    .join(";");
