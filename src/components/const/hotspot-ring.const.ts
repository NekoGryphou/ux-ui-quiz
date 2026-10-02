import type { RingState, RingStyle } from "../types/hotspot-ring.types";

export const RING_RIM: number = 3;
export const RING_LINE: number = 3;
const RING_BAND: number = 5;
export const RING_GAP: number = RING_RIM + RING_LINE + RING_BAND;
export const RING_CORNER_TUCK: number = 1;
export const RING_TAG_SIZE: number = 20;
export const CORNER_TOLERANCE: number = 1;

export const RING_SURFACE_PROPERTY: string = "--ring-surface";

export const RING_CORNER_PROPERTIES: string[] = [
  "border-top-left-radius",
  "border-top-right-radius",
  "border-bottom-right-radius",
  "border-bottom-left-radius"
];

export const RING_STYLES: Record<RingState, RingStyle> = {
  hover: { tone: "hover", line: "dashed", plate: false, tag: null },
  selected: { tone: "select", line: "solid", plate: false, tag: null },
  correct: { tone: "correct", line: "solid", plate: true, tag: "check" },
  wrong: { tone: "wrong", line: "solid", plate: true, tag: "x" },
  missed: { tone: "correct", line: "dashed", plate: true, tag: "check" }
};
