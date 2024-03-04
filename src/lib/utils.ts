import clsx, { ClassValue } from "clsx";
import { range } from "rambda";
import { twMerge } from "tailwind-merge";

import type { Grid } from "./types";

/**
 * Tailwind CSS classnames combiner
 * @param inputs
 * @returns Tailwind CSS classnames
 *
 * @example
 * ```ts
 * import { cn } from "@axelarjs/ui";
 *
 * const className = cn("text-red-500", "bg-blue-500");
 * // className = "text-red-500 bg-blue-500"
 * ```
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const createGrid = (size: number): Grid =>
  range(0, size)
    .map(() => ({ state: () => false, toggle: () => {} }))
    .map((_x, _i, row) => row.slice());

export const createRandomGrid = (size: number): Grid =>
  createGrid(size).map((row) =>
    row.map(() => ({
      state: () => Math.random() >= 0.8,
      toggle: () => {},
    })),
  );

export const truncate = <T>(length: number, xs: T[]) => {
  return xs.length > length ? xs.slice(0, length) : xs;
};
