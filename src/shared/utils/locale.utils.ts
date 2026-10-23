import { DEFAULT_LOCALE } from "../const/locale.const";
import type { Locale } from "../types/locale.types";

/**
 * @export
 * @desc Parses a stored language value.
 *
 * @param value - Raw stored value.
 *
 * @returns The language, or null when invalid.
 */
export const parseLocale = (value: string | null): Locale | null => (value === "en" || value === "fr" ? value : null);

/**
 * @export
 * @desc Picks the first supported language from the browser preferences.
 *
 * @param languages - Browser languages, most preferred first.
 *
 * @returns The matching language, or the default one.
 */
export const preferredLocale = (languages: readonly string[]): Locale => {
  for (const language of languages) {
    const locale: Locale | null = parseLocale(language.slice(0, 2).toLowerCase());
    if (locale !== null) return locale;
  }
  return DEFAULT_LOCALE;
};
