import { getContext, hasContext, setContext } from "svelte";
import { KEYBOARD_CONTEXT_KEY } from "../const/keyboard.const";
import type { KeyboardContext } from "../types/keyboard.types";

/**
 * @export
 * @desc Shares a keyboard sandbox's focus state with its key targets.
 * Must be called during component initialization.
 *
 * @param context - Focus state to share.
 */
export const provideKeyboardContext = (context: KeyboardContext): void => {
  setContext(KEYBOARD_CONTEXT_KEY, context);
};

/**
 * @export
 * @desc Returns the enclosing keyboard sandbox's focus state.
 * Must be called during component initialization.
 *
 * @returns Focus state, or undefined outside a sandbox.
 */
export const readKeyboardContext = (): KeyboardContext | undefined =>
  hasContext(KEYBOARD_CONTEXT_KEY) ? getContext<KeyboardContext>(KEYBOARD_CONTEXT_KEY) : undefined;

/**
 * @export
 * @desc Returns the stop index reached by one Tab or Shift+Tab press.
 *
 * @param current - Current stop index, -1 when none.
 * @param total - Number of stops.
 * @param backwards - Whether Shift is held.
 *
 * @returns Next index, or null when focus leaves the sandbox.
 */
export const nextStop = (current: number, total: number, backwards: boolean): number | null => {
  const next: number = current + (backwards ? -1 : 1);
  if (backwards && current === -1) return null;
  return next < 0 || next >= total ? null : next;
};
