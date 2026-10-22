import {
  ANSWER_CONTROLS,
  ARROW_SHORTCUTS,
  IGNORED_TARGETS,
  NATIVE_ARROW_TARGETS,
  NATIVE_ENTER_TARGETS,
  NO_SHORTCUT,
  PICK_KEY
} from "../const/shortcuts.const";
import type { ShortcutAction } from "../types/shortcuts.types";

/**
 * @private
 * @desc Whether the target is inside an element matching the selector.
 *
 * @param target - Event target.
 * @param selector - CSS selector.
 *
 * @returns True on a match.
 */
const matches = (target: EventTarget | null, selector: string): boolean =>
  target instanceof Element && target.closest(selector) !== null;

/**
 * @private
 * @desc Whether Ctrl, Meta or Alt is held.
 *
 * @param event - Key event.
 *
 * @returns True if a modifier is held.
 */
const hasModifier = (event: KeyboardEvent): boolean => event.ctrlKey || event.metaKey || event.altKey;

/**
 * @private
 * @desc Whether the key press must not trigger any shortcut.
 *
 * @param event - Key event.
 *
 * @returns True if already handled, modified, or typed in a text field.
 */
const isIgnored = (event: KeyboardEvent): boolean =>
  event.defaultPrevented || hasModifier(event) || matches(event.target, IGNORED_TARGETS);

/**
 * @private
 * @desc Action for Enter, leaving native buttons, links and inputs alone.
 *
 * @param target - Event target.
 *
 * @returns Confirm action, or none.
 */
const enterShortcut = (target: EventTarget | null): ShortcutAction => {
  if (matches(target, ANSWER_CONTROLS)) return { type: "confirm", fromControl: true };
  return matches(target, NATIVE_ENTER_TARGETS) ? NO_SHORTCUT : { type: "confirm", fromControl: false };
};

/**
 * @private
 * @desc Action for left and right arrows, except inside inputs.
 *
 * @param event - Key event.
 *
 * @returns Previous, next, or none.
 */
const arrowShortcut = (event: KeyboardEvent): ShortcutAction =>
  matches(event.target, NATIVE_ARROW_TARGETS) ? NO_SHORTCUT : (ARROW_SHORTCUTS[event.key] ?? NO_SHORTCUT);

/**
 * @export
 * @desc Quiz screen action for a key press.
 *
 * @param event - Key event.
 *
 * @returns Resolved action; pick indexes are zero-based.
 */
export const shortcutFor = (event: KeyboardEvent): ShortcutAction => {
  if (isIgnored(event)) return NO_SHORTCUT;
  if (PICK_KEY.test(event.key)) return { type: "pick", index: Number(event.key) - 1 };
  if (event.key === "Enter") return enterShortcut(event.target);
  return arrowShortcut(event);
};
