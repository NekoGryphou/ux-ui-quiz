/**
 * @export
 * @desc Pixel avatar image URLs, keyed by file path.
 */
export const PIXEL_AVATARS: Readonly<Record<string, string>> = import.meta.glob<string>("../assets/avatars/*.svg", {
  eager: true,
  query: "?url",
  import: "default"
});
