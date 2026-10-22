import { STORAGE_PREFIX } from "../../shared/const/storage.const";

/**
 * @export
 * @desc Storage key of the chosen theme.
 */
export const THEME_STORAGE_KEY: string = `${STORAGE_PREFIX}theme`;

/**
 * @export
 * @desc Duration of the theme reveal animation, in ms.
 */
export const THEME_REVEAL_MS: number = 450;

/**
 * @export
 * @desc Media query matching a dark system color scheme.
 */
export const DARK_SCHEME_QUERY: string = "(prefers-color-scheme: dark)";

/**
 * @export
 * @desc Theme reveal easing used when the --ease token is missing.
 */
export const REVEAL_FALLBACK_EASING: string = "ease-out";
