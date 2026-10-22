import type { Snippet } from "svelte";

/**
 * @export
 * @desc Props of the mock Badge pill.
 *
 * @property tone - Color scheme.
 * @property removable - Shows a remove cross.
 * @property children - Label content.
 */
export interface BadgeProps {
  /** Color scheme, "neutral" by default. */
  tone?: "neutral" | "info" | "success" | "warning" | "danger";

  /** Shows a remove cross, false by default. */
  removable?: boolean;

  /** Label content. */
  children: Snippet;
}
