import type { Locale } from "../types/locale.types";
import { STORAGE_PREFIX } from "./storage.const";

/**
 * @export
 * @desc Storage key of the chosen language.
 */
export const LOCALE_STORAGE_KEY: string = `${STORAGE_PREFIX}locale`;

/**
 * @export
 * @desc Language used when the browser prefers none of the supported ones.
 */
export const DEFAULT_LOCALE: Locale = "en";
