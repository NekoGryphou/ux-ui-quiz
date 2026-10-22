/**
 * @export
 * @desc Props of the mock Switch row.
 *
 * @property label - Setting label.
 * @property checked - Drawn as on.
 * @property hint - Helper text.
 * @property subtle - Low-contrast styling.
 */
export interface SwitchProps {
  /** Setting label. */
  label: string;

  /** Drawn as on, false by default. */
  checked?: boolean;

  /** Helper text under the label. */
  hint?: string;

  /** Low-contrast on/off styling, false by default. */
  subtle?: boolean;
}
