import type { ShortcutAction } from "../types/shortcuts.types";

/**
 * @export
 * @desc Matches the digit keys that pick an option.
 */
export const PICK_KEY: RegExp = /^[1-9]$/;

/**
 * @export
 * @desc Action for a key press that triggers no shortcut.
 */
export const NO_SHORTCUT: ShortcutAction = { type: "none" };

/**
 * @export
 * @desc Selector of answer controls where Enter submits.
 */
export const ANSWER_CONTROLS: string = ".hotspot__target, input[type='radio'], input[type='checkbox']";

/**
 * @export
 * @desc Selector of elements that handle Enter themselves.
 */
export const NATIVE_ENTER_TARGETS: string = "button, a, input";

/**
 * @export
 * @desc Selector of elements that handle arrow keys themselves.
 */
export const NATIVE_ARROW_TARGETS: string = "input";

/**
 * @export
 * @desc Selector of elements whose key presses never trigger shortcuts.
 */
export const IGNORED_TARGETS: string =
  "textarea, select, [contenteditable], dialog, [role='application'], input:not([type='radio']):not([type='checkbox'])";

/**
 * @export
 * @desc Navigation action for each arrow key.
 */
export const ARROW_SHORTCUTS: Readonly<Record<string, ShortcutAction>> = {
  ArrowLeft: { type: "previous" },
  ArrowRight: { type: "next" }
};
