/**
 * @export
 * @desc Quiz screen action resolved from a key press.
 * For confirm, fromControl is true when Enter came from an answer control.
 */
export type ShortcutAction =
  | { type: "pick"; index: number }
  | { type: "confirm"; fromControl: boolean }
  | { type: "next" }
  | { type: "previous" }
  | { type: "none" };
