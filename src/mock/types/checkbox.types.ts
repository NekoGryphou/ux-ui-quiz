/**
 * @export
 * @desc Props of the mock Checkbox row.
 *
 * @property label - Control label.
 * @property checked - Drawn as selected.
 * @property radio - Drawn as a radio button.
 * @property hint - Helper text.
 */
export interface CheckboxProps {
  /** Control label. */
  label: string;

  /** Drawn as selected, false by default. */
  checked?: boolean;

  /** Drawn as a radio button, false by default. */
  radio?: boolean;

  /** Helper text under the label. */
  hint?: string;
}
