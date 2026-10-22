/**
 * @export
 * @desc Props of the ConfirmDialog component.
 *
 * @property title - Dialog heading.
 * @property body - Consequence of confirming.
 * @property confirmLabel - Confirm button text.
 * @property open - Whether the dialog is shown.
 * @property onconfirm - Runs after the user confirms.
 */
export interface ConfirmDialogProps {
  /** Dialog heading. */
  title: string;

  /** Consequence of confirming. */
  body: string;

  /** Confirm button text. */
  confirmLabel: string;

  /** Whether the dialog is shown, bindable; false by default. */
  open?: boolean;

  /** Runs after the user confirms. */
  onconfirm: () => void;
}
