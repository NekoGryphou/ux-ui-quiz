import type { IconName } from "../../components/types/icons.types";

/**
 * @export
 * @desc Props of the mock static form Field.
 *
 * @property label - Field label.
 * @property value - Displayed value.
 * @property placeholder - Text when empty.
 * @property type - Control kind.
 * @property state - Visual state.
 * @property icon - Leading icon.
 * @property required - Shows a required asterisk.
 * @property hint - Helper text.
 * @property message - Validation message.
 */
export interface FieldProps {
  /** Field label. */
  label?: string;

  /** Displayed value, masked for passwords. */
  value?: string;

  /** Text shown when the value is empty. */
  placeholder?: string;

  /** Control kind, "text" by default. */
  type?: "text" | "password" | "select" | "textarea";

  /** Visual state, "default" by default. */
  state?: "default" | "focus" | "error" | "success" | "disabled";

  /** Leading icon. */
  icon?: IconName;

  /** Shows a required asterisk, false by default. */
  required?: boolean;

  /** Helper text, hidden when a message is set. */
  hint?: string;

  /** Validation message, replacing the hint. */
  message?: string;
}
