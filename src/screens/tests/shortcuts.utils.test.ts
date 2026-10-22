// @vitest-environment happy-dom
import { describe, expect, it } from "vitest";
import type { ShortcutAction } from "../types/shortcuts.types";
import { shortcutFor } from "../utils/shortcuts.utils";

const press = (key: string, html: string = "<div></div>", init: KeyboardEventInit = {}): ShortcutAction => {
  document.body.innerHTML = html;
  const target: Element = document.body.firstElementChild ?? document.body;
  const event: KeyboardEvent = new KeyboardEvent("keydown", { key, bubbles: true, ...init });
  let action: ShortcutAction = { type: "none" };
  target.addEventListener("keydown", (received: Event): void => {
    if (received instanceof KeyboardEvent) action = shortcutFor(received);
  });
  target.dispatchEvent(event);
  return action;
};

describe("shortcutFor", (): void => {
  it("picks options with digits", (): void => {
    expect(press("3")).toEqual({ type: "pick", index: 2 });
    expect(press("0")).toEqual({ type: "none" });
  });

  it("confirms with Enter unless a native control handles it", (): void => {
    expect(press("Enter")).toEqual({ type: "confirm", fromControl: false });
    expect(press("Enter", '<input type="radio">')).toEqual({ type: "confirm", fromControl: true });
    expect(press("Enter", "<button></button>")).toEqual({ type: "none" });
  });

  it("navigates with arrows outside inputs", (): void => {
    expect(press("ArrowRight")).toEqual({ type: "next" });
    expect(press("ArrowLeft")).toEqual({ type: "previous" });
    expect(press("ArrowRight", '<input type="radio">')).toEqual({ type: "none" });
  });

  it("ignores modified keys and text fields", (): void => {
    expect(press("1", "<div></div>", { ctrlKey: true })).toEqual({ type: "none" });
    expect(press("1", "<textarea></textarea>")).toEqual({ type: "none" });
    expect(press("Enter", '<div role="application"></div>')).toEqual({ type: "none" });
  });
});
