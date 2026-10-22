import type { Snippet } from "svelte";
import type { IconName } from "../../components/types/icons.types";

/**
 * @export
 * @desc Props of the mock static MockButton.
 *
 * @property variant - Visual style.
 * @property size - Size step.
 * @property icon - Leading icon.
 * @property disabled - Disabled styling.
 * @property block - Full width.
 * @property children - Label content.
 */
export interface MockButtonProps {
  /** Visual style, "secondary" by default. */
  variant?: "primary" | "secondary" | "ghost" | "danger" | "success" | "link";

  /** Size step, "md" by default. */
  size?: "sm" | "md" | "lg";

  /** Leading icon; icon-only when there is no label. */
  icon?: IconName;

  /** Disabled styling, false by default. */
  disabled?: boolean;

  /** Full width, false by default. */
  block?: boolean;

  /** Label content. */
  children?: Snippet;
}
