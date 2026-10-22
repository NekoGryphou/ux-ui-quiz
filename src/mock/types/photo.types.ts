/**
 * @export
 * @desc Props of the mock decorative Photo.
 *
 * @property src - Image URL.
 * @property hue - Hue rotation.
 * @property position - Object position.
 * @property fit - Object fit.
 */
export interface PhotoProps {
  /** Image URL. */
  src: string;

  /** Hue rotation in degrees, 0 by default. */
  hue?: number;

  /** CSS object-position, "center" by default. */
  position?: string;

  /** CSS object-fit, "cover" by default. */
  fit?: "cover" | "contain";
}
