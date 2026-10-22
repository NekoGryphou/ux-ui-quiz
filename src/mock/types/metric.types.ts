/**
 * @export
 * @desc Props of the mock Metric KPI tile.
 *
 * @property label - Metric name.
 * @property value - Main figure.
 * @property delta - Change text.
 * @property trend - Change direction.
 * @property featured - Highlighted styling.
 */
export interface MetricProps {
  /** Metric name. */
  label: string;

  /** Main figure. */
  value: string;

  /** Change text, such as "+4%". */
  delta?: string;

  /** Direction coloring the delta, "flat" by default. */
  trend?: "up" | "down" | "flat";

  /** Highlighted styling, false by default. */
  featured?: boolean;
}
