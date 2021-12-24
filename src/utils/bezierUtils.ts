import { Point } from "../typings";

// P = (1-t)P1 + tP2
export const getTPoint = (p1: Point, p2: Point, t: number): Point => {
  return {
    x: (1 - t) * p1.x + t * p2.x,
    y: (1 - t) * p1.y + t * p2.y,
  };
};
