export type ShortcutAction =
  | { type: "pick"; index: number }
  | { type: "confirm"; fromControl: boolean }
  | { type: "next" }
  | { type: "previous" }
  | { type: "none" };
