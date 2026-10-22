import type { Snippet } from "svelte";
import type { IconName } from "./icons.types";

/**
 * @export
 * @desc Props of the app Button, rendered as a link when {@link ButtonProps.href} is set.
 *
 * @property variant - Visual style.
 * @property size - Button size.
 * @property href - Link target.
 * @property iconStart - Leading icon.
 * @property iconEnd - Trailing icon.
 * @property disabled - Disables the button.
 * @property element - Bindable rendered element.
 * @property onclick - Click handler.
 * @property children - Button label.
 */
export interface ButtonProps {
  /** Visual style. */
  variant?: "primary" | "accent" | "secondary" | "ghost" | "danger";

  /** Button size. */
  size?: "md" | "lg";

  /** Link target. */
  href?: string;

  /** Leading icon. */
  iconStart?: IconName;

  /** Trailing icon. */
  iconEnd?: IconName;

  /** Disables the button. */
  disabled?: boolean;

  /** Bindable rendered element. */
  element?: HTMLElement | undefined;

  /** Click handler. */
  onclick?: () => void;

  /** Button label. */
  children: Snippet;
}
