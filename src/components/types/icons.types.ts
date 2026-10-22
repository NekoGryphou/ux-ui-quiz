/**
 * @export
 * @desc Name of an icon available in the app icon set.
 */
export type IconName =
  | "alert-triangle"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up-down"
  | "bell"
  | "calendar"
  | "cart"
  | "chart"
  | "check"
  | "circle-dot"
  | "chevron-down"
  | "chevron-up"
  | "chevron-left"
  | "chevron-right"
  | "download"
  | "edit"
  | "eye"
  | "external"
  | "file"
  | "filter"
  | "heart"
  | "home"
  | "inbox"
  | "info"
  | "list-checks"
  | "lock"
  | "mail"
  | "maximize"
  | "menu"
  | "message"
  | "moon"
  | "more"
  | "crosshair"
  | "columns"
  | "plus"
  | "refresh"
  | "search"
  | "settings"
  | "mic"
  | "pause"
  | "phone"
  | "play"
  | "share"
  | "video"
  | "star"
  | "sun"
  | "trash"
  | "upload"
  | "user"
  | "x"
  | "zap";

/**
 * @export
 * @desc One SVG element of an icon.
 *
 * @property tag - SVG element name.
 * @property attrs - SVG attributes.
 */
export interface IconShape {
  /** SVG element name. */
  tag: "path" | "circle" | "rect";

  /** SVG attributes. */
  attrs: Readonly<Record<string, string>>;
}
