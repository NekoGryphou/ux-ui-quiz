import type { Snippet } from "svelte";

/**
 * @export
 * @desc One Tab stop of a keyboard sandbox.
 *
 * @property id - Matching key target id.
 * @property label - Announced name.
 */
export interface KeyStop {
  /** ID of the matching KeyTarget. */
  id: string;

  /** Name announced when the stop is focused. */
  label: string;
}

/**
 * @export
 * @desc Props of the mock KeyboardSandbox, a preview the user can Tab through.
 *
 * @property stops - Tab order.
 * @property children - Preview content.
 */
export interface KeyboardSandboxProps {
  /** Stops in Tab order. */
  stops: KeyStop[];

  /** Preview content holding the key targets. */
  children: Snippet;
}

/**
 * @export
 * @desc Props of the mock KeyTarget, an element highlighted when its stop is focused.
 *
 * @property id - Matching stop id.
 * @property inline - Renders as an inline span.
 * @property children - Wrapped content.
 */
export interface KeyTargetProps {
  /** ID of the matching {@link KeyStop}. */
  id: string;

  /** Renders as a span instead of a div, false by default. */
  inline?: boolean;

  /** Wrapped content. */
  children: Snippet;
}

/**
 * @export
 * @desc Focus state a keyboard sandbox shares with its key targets.
 *
 * @property focusedId - Focused stop id.
 */
export interface KeyboardContext {
  /** ID of the focused stop, or null when none. */
  readonly focusedId: string | null;
}
