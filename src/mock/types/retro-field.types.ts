/**
 * @export
 * @desc Props of the mock sunken RetroField.
 *
 * @property value - Displayed text.
 * @property width - Width in pixels.
 * @property grow - Fills the available width.
 */
export interface RetroFieldProps {
  /** Displayed text, empty by default. */
  value?: string;

  /** Width in pixels, 140 by default; ignored when growing. */
  width?: number;

  /** Fills the available width, false by default. */
  grow?: boolean;
}
