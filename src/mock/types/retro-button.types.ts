import type { Snippet } from "svelte";

/**
 * @export
 * @desc Props of the mock bevelled RetroButton.
 *
 * @property primary - Default-button styling.
 * @property children - Label content.
 */
export interface RetroButtonProps {
  /** Default-button styling, false by default. */
  primary?: boolean;

  /** Label content. */
  children: Snippet;
}
