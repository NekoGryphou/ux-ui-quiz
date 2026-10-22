import type { Snippet } from "svelte";
import type { IconName } from "../../components/types/icons.types";

/**
 * @export
 * @desc Props of the mock EmptyState placeholder.
 *
 * @property title - Headline.
 * @property icon - Illustration icon.
 * @property body - Explanation text.
 * @property children - Actions.
 */
export interface EmptyStateProps {
  /** Headline. */
  title: string;

  /** Illustration icon, "inbox" by default. */
  icon?: IconName;

  /** Explanation text. */
  body?: string;

  /** Actions below the text. */
  children?: Snippet;
}
