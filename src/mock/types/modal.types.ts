import type { Snippet } from "svelte";

/**
 * @export
 * @desc Props of the mock Modal dialog.
 *
 * @property title - Dialog title.
 * @property closable - Shows a close cross.
 * @property floating - Floating overlay styling.
 * @property children - Body content.
 * @property actions - Footer actions.
 */
export interface ModalProps {
  /** Dialog title. */
  title: string;

  /** Shows a close cross, true by default. */
  closable?: boolean;

  /** Floating overlay styling, false by default. */
  floating?: boolean;

  /** Body content. */
  children?: Snippet;

  /** Footer actions. */
  actions?: Snippet;
}
