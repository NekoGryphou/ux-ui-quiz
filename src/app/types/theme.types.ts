/**
 * @export
 * @desc Explicit color theme; no choice means following the system.
 */
export type ThemeChoice = "light" | "dark";

/**
 * @export
 * @desc Viewport point in CSS pixels.
 *
 * @property x - Distance from the left edge.
 * @property y - Distance from the top edge.
 */
export interface Point {
  /** Distance from the left edge. */
  x: number;

  /** Distance from the top edge. */
  y: number;
}
