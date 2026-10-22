/**
 * @export
 * @desc Props of the mock Progress bar.
 *
 * @property value - Percentage.
 * @property label - Caption.
 * @property showValue - Shows the percentage.
 */
export interface ProgressProps {
  /** Percentage, clamped to 0 to 100. */
  value: number;

  /** Caption above the bar. */
  label?: string;

  /** Shows the percentage, false by default. */
  showValue?: boolean;
}
