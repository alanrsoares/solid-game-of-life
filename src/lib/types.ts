export interface Point {
  y: number;
  x: number;
}

export type Cell = { state: () => boolean; toggle: () => void };
export type Row = Cell[];
export type Grid = Row[];
