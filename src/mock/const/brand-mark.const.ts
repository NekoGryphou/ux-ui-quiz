import type { MarkShape } from "../types/brand-mark.types";

export const MARK_SHAPES: readonly MarkShape[] = ["circle", "square", "hex", "leaf", "spark"];

export const MARK_PATHS: Record<MarkShape, string> = {
  circle: "M16 2a14 14 0 1 1 0 28a14 14 0 1 1 0-28z",
  square: "M9 2h14a7 7 0 0 1 7 7v14a7 7 0 0 1-7 7H9a7 7 0 0 1-7-7V9a7 7 0 0 1 7-7z",
  hex: "M16 1.5l12.5 7.25v14.5L16 30.5 3.5 23.25V8.75z",
  leaf: "M30 2C30 18 22 30 6 30H2V26C2 10 14 2 30 2z",
  spark: "M16 1l4 9 10 1-7.5 7 2.5 10-9-5.5L7 28l2.5-10L2 11l10-1z"
};
