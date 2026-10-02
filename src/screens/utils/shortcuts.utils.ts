import { ANSWER_CONTROLS, IGNORED_TARGETS, NATIVE_ARROW_TARGETS, NATIVE_ENTER_TARGETS } from "../const/shortcuts.const";
import type { ShortcutAction } from "../types/shortcuts.types";

const matches = (target: EventTarget | null, selector: string): boolean =>
  target instanceof Element && target.closest(selector) !== null;

export const shortcutFor = (event: KeyboardEvent): ShortcutAction => {
  if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) return { type: "none" };
  if (matches(event.target, IGNORED_TARGETS)) return { type: "none" };
  if (/^[1-9]$/.test(event.key)) return { type: "pick", index: Number(event.key) - 1 };
  if (event.key === "Enter") {
    if (matches(event.target, ANSWER_CONTROLS)) return { type: "confirm", fromControl: true };
    if (!matches(event.target, NATIVE_ENTER_TARGETS)) return { type: "confirm", fromControl: false };
    return { type: "none" };
  }
  if (matches(event.target, NATIVE_ARROW_TARGETS)) return { type: "none" };
  if (event.key === "ArrowRight") return { type: "next" };
  if (event.key === "ArrowLeft") return { type: "previous" };
  return { type: "none" };
};
