/**
 * @export
 * @desc Props of the SelectionSummary shown under hotspot previews.
 *
 * @property prompt - Quiz prompt.
 * @property labels - Labels of the selected areas.
 * @property several - Whether several areas are expected.
 */
export interface SelectionSummaryProps {
  /** Quiz prompt. */
  prompt: string;

  /** Labels of the selected areas. */
  labels: string[];

  /** Whether several areas are expected. */
  several: boolean;
}
