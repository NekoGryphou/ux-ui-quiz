import type { Corners, RingState, RingStyle } from "../types/hotspot-ring.types";

/**
 * @export
 * @desc Width of the hotspot ring rim, in px.
 */
export const RING_RIM: number = 3;

/**
 * @export
 * @desc Width of the hotspot ring line, in px.
 */
export const RING_LINE: number = 3;

/**
 * @private
 * @desc Width of the band between the ring line and the hotspot, in px.
 */
const RING_BAND: number = 5;

/**
 * @export
 * @desc Distance from the hotspot edge to the ring's outer edge, in px.
 */
export const RING_GAP: number = RING_RIM + RING_LINE + RING_BAND;

/**
 * @export
 * @desc Extra corner radius added to the ring, in px.
 */
export const RING_CORNER_TUCK: number = 1;

/**
 * @export
 * @desc Size of the ring's outcome tag, in px.
 */
export const RING_TAG_SIZE: number = 20;

/**
 * @export
 * @desc Maximum offset for a hotspot edge to count as on the preview edge, in px.
 */
export const CORNER_TOLERANCE: number = 1;

/**
 * @export
 * @desc CSS custom property declaring a hotspot's background brightness.
 */
export const RING_SURFACE_PROPERTY: string = "--ring-surface";

/**
 * @export
 * @desc CSS border-radius properties read for each corner.
 */
export const RING_CORNER_PROPERTIES: Corners<string> = [
  "border-top-left-radius",
  "border-top-right-radius",
  "border-bottom-right-radius",
  "border-bottom-left-radius"
];

/**
 * @export
 * @desc Ring appearance for each ring state.
 */
export const RING_STYLES: Record<RingState, RingStyle> = {
  hover: { tone: "hover", line: "dashed", plate: false, tag: null },
  selected: { tone: "select", line: "solid", plate: false, tag: null },
  correct: { tone: "correct", line: "solid", plate: true, tag: "check" },
  wrong: { tone: "wrong", line: "solid", plate: true, tag: "x" },
  missed: { tone: "correct", line: "dashed", plate: true, tag: "check" }
};
