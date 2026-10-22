import type { KeyStop } from "../../mock/types/keyboard.types";

/**
 * @export
 * @desc Focus stops of the keyboard sandbox demo in the kit.
 */
export const KIT_KEY_STOPS: readonly KeyStop[] = [
  { id: "kit-email", label: "Email field" },
  { id: "kit-remember", label: "Remember me checkbox" },
  { id: "kit-submit", label: "Sign in button" }
];

/**
 * @export
 * @desc Code sample shown by the code block demos in the kit.
 */
export const KIT_CODE_SAMPLE: string =
  '<button type="button" aria-label="Close">\n  <svg aria-hidden="true"></svg>\n</button>';
