import type { Snippet } from "svelte";

/**
 * @export
 * @desc Color scheme and icon of an alert.
 */
export type AlertTone = "info" | "success" | "warning" | "danger";

/**
 * @export
 * @desc Props of the mock Alert banner.
 *
 * @property title - Bold headline.
 * @property tone - Color scheme and icon.
 * @property body - Secondary text.
 * @property toast - Floating toast styling.
 * @property action - Trailing content.
 */
export interface AlertProps {
  /** Bold headline. */
  title: string;

  /** Color scheme and icon, "info" by default. */
  tone?: AlertTone;

  /** Secondary text after the title. */
  body?: string;

  /** Floating toast styling, false by default. */
  toast?: boolean;

  /** Trailing content, usually a mock button. */
  action?: Snippet;
}
