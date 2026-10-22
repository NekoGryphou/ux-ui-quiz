import type { IconName } from "./icons.types";

/**
 * @export
 * @desc Props of the SVG Icon; decorative unless {@link IconProps.label} is set.
 *
 * @property name - Icon to draw.
 * @property size - Size in pixels.
 * @property strokeWidth - Stroke width.
 * @property label - Accessible name.
 */
export interface IconProps {
  /** Icon to draw. */
  name: IconName;

  /** Size in pixels. */
  size?: number;

  /** Stroke width. */
  strokeWidth?: number;

  /** Accessible name. */
  label?: string;
}
