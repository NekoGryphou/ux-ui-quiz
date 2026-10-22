/**
 * @export
 * @desc Browser-side argument of {@link ringOffset}.
 *
 * @property area - Hotspot area name.
 * @property gap - Expected ring gap in pixels.
 */
export interface RingCheck {
  /** Hotspot area name, without the "Area: " prefix. */
  area: string;

  /** Expected ring gap in unscaled pixels. */
  gap: number;
}
