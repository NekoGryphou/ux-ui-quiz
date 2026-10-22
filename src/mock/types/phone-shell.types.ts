import type { Snippet } from "svelte";

/**
 * @export
 * @desc Props of the mock PhoneShell device frame.
 *
 * @property time - Status bar clock.
 * @property children - Screen content.
 */
export interface PhoneShellProps {
  /** Status bar clock, "9:41" by default. */
  time?: string;

  /** Screen content. */
  children: Snippet;
}
