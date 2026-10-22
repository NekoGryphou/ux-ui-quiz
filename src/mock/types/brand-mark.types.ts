/**
 * @export
 * @desc Silhouette of a generated brand logo.
 */
export type MarkShape = "circle" | "square" | "hex" | "leaf" | "spark";

/**
 * @export
 * @desc Props of the mock BrandMark fake logo.
 *
 * @property name - Brand name.
 * @property size - Size in pixels.
 */
export interface BrandMarkProps {
  /** Brand name; the same name always gives the same logo. */
  name: string;

  /** Width and height in pixels, 22 by default. */
  size?: number;
}

/**
 * @export
 * @desc Look of a generated logo, as returned by {@link markStyle}.
 *
 * @property shape - Logo silhouette.
 * @property hue - Gradient base hue.
 * @property initial - Letter drawn on the logo.
 */
export interface MarkStyle {
  /** Logo silhouette. */
  shape: MarkShape;

  /** Gradient base hue in degrees. */
  hue: number;

  /** Uppercase first letter of the brand name. */
  initial: string;
}
