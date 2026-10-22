/**
 * @export
 * @desc Props of the RestartButton component.
 *
 * @property variant - Button style.
 * @property size - Button size.
 */
export interface RestartButtonProps {
  /** Button style, "secondary" by default. */
  variant?: "primary" | "secondary";

  /** Button size, "md" by default. */
  size?: "md" | "lg";
}
