import type { Snippet } from "svelte";

/**
 * @export
 * @desc Props of the mock mobile AppBar.
 *
 * @property title - Screen title.
 * @property back - Shows a back chevron.
 * @property large - Large-title layout.
 * @property actions - Trailing actions.
 */
export interface AppBarProps {
  /** Screen title. */
  title: string;

  /** Shows a back chevron, false by default. */
  back?: boolean;

  /** Moves the title to a large heading below the bar, false by default. */
  large?: boolean;

  /** Trailing actions on the end side. */
  actions?: Snippet;
}
