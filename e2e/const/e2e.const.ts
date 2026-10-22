import type { ViewportSize } from "@playwright/test";

/**
 * @export
 * @desc Storage key that enables the fixed quiz order.
 */
export const FIXED_ORDER_STORAGE_KEY: string = "kanom-ui:debug-fixed-order";

/**
 * @export
 * @desc Number of a single-answer quiz.
 */
export const SINGLE_QUIZ: number = 1;

/**
 * @export
 * @desc Number of the quiz used to test answer shortcuts.
 */
export const KEYBOARD_QUIZ: number = 2;

/**
 * @export
 * @desc Number of a quiz with a keyboard sandbox.
 */
export const SANDBOX_QUIZ: number = 31;

/**
 * @export
 * @desc Number of a hotspot quiz.
 */
export const HOTSPOT_QUIZ: number = 105;

/**
 * @export
 * @desc Label of a hotspot area in {@link HOTSPOT_QUIZ}.
 */
export const HOTSPOT_AREA: string = "Invoices table";

/**
 * @export
 * @desc Narrow viewport size for the enlarged preview test.
 */
export const NARROW_VIEWPORT: ViewportSize = { width: 640, height: 900 };

/**
 * @export
 * @desc Window property holding the ring violation count.
 */
export const RING_VIOLATIONS_KEY: string = "ringViolations";

/**
 * @export
 * @desc Allowed hotspot ring offset, in px.
 */
export const RING_TOLERANCE_PX: number = 1.5;

/**
 * @export
 * @desc Matches a quiz visual request URL and captures its number.
 */
export const QUIZ_VISUAL_PATH: RegExp = /\/src\/quizzes\/(\d+)-[^/?]+\.svelte/;

/**
 * @export
 * @desc Elements holding quiz previews, left out of the accessibility scan because their flaws are intentional.
 */
export const PREVIEW_SELECTOR: string = ".frame";

/**
 * @export
 * @desc WCAG levels checked by axe.
 */
export const A11Y_TAGS: string[] = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

/**
 * @export
 * @desc Color schemes the accessibility scan runs in.
 */
export const COLOR_SCHEMES: ("light" | "dark")[] = ["light", "dark"];

/**
 * @export
 * @desc How long one retried click waits for its effect, in ms.
 */
export const RETRY_TIMEOUT_MS: number = 300;

/**
 * @export
 * @desc First clickable answer of any question kind: choice, compare card or hotspot.
 */
export const ANSWER_TARGETS: string = "label.choice, .compare__card, .hotspot__target";
