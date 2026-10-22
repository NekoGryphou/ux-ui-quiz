import type { Snippet } from "svelte";

/**
 * @export
 * @desc Props of the mock Card surface.
 *
 * @property title - Header title.
 * @property subtitle - Header subtitle.
 * @property children - Body content.
 * @property actions - Header actions.
 */
export interface CardProps {
  /** Header title. */
  title?: string;

  /** Header subtitle, shown only when a header renders. */
  subtitle?: string;

  /** Body content. */
  children?: Snippet;

  /** Header actions on the end side. */
  actions?: Snippet;
}
