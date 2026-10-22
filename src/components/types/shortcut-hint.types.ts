/**
 * @export
 * @desc Props of the dismissible keyboard ShortcutHint.
 *
 * @property optionCount - Number of pickable options, 0 hides the number keys.
 * @property ondismiss - Called when the hint is dismissed.
 */
export interface ShortcutHintProps {
  /** Number of pickable options, 0 hides the number keys. */
  optionCount: number;

  /** Called when the hint is dismissed. */
  ondismiss: () => void;
}
