import { LOCALE_STORAGE_KEY } from "./const/locale.const";
import type { Locale, Localized } from "./types/locale.types";
import { parseLocale, preferredLocale } from "./utils/locale.utils";
import { readStorage, subscribeStorage, writeStorage } from "./utils/storage.utils";

/**
 * @private
 * @desc Whether a browser window is available.
 */
const inBrowser: boolean = typeof window !== "undefined";

/**
 * @private
 * @desc Interface language state, synced with storage and the root element.
 */
class LocaleState {
  /**
   * @public
   * @desc Language in effect.
   */
  public current: Locale = $state(
    parseLocale(readStorage(LOCALE_STORAGE_KEY)) ?? preferredLocale(inBrowser ? navigator.languages : [])
  );

  /**
   * @public
   * @desc Applies the language and follows changes made in other tabs.
   */
  public constructor() {
    if (!inBrowser) return;
    this.apply(this.current);
    subscribeStorage((key, value) => {
      if (key === LOCALE_STORAGE_KEY) this.apply(parseLocale(value) ?? this.current);
    });
  }

  /**
   * @public
   * @desc Switches to a language and stores it.
   *
   * @param next - Language to use.
   */
  public set(next: Locale): void {
    writeStorage(LOCALE_STORAGE_KEY, next);
    this.apply(next);
  }

  /**
   * @private
   * @desc Uses a language without storing it.
   *
   * @param next - Language to use.
   */
  private apply(next: Locale): void {
    this.current = next;
    if (inBrowser) document.documentElement.lang = next;
  }
}

/**
 * @export
 * @desc Picks a value in the current language.
 *
 * @template T - Translated value.
 *
 * @param value - Value in every language.
 *
 * @returns The value in the current language.
 */
export const pick = <T>(value: Localized<T>): T => value[locale.current];

/**
 * @export
 * @desc Picks inline text in the current language.
 *
 * @param en - English text.
 * @param fr - French text.
 *
 * @returns The text in the current language.
 */
export const t = (en: string, fr: string): string => (locale.current === "fr" ? fr : en);

/**
 * @export
 * @desc Picks the singular or plural form of a word for a count, in the current language.
 *
 * @param count - Counted amount.
 * @param forms - Singular and plural forms in every language.
 *
 * @returns The matching form.
 */
export const plural = (count: number, forms: Localized<readonly [string, string]>): string => {
  const [one, other]: readonly [string, string] = pick(forms);
  return count === 1 || (locale.current === "fr" && count === 0) ? one : other;
};

/**
 * @export
 * @desc App-wide interface language.
 */
export const locale: LocaleState = new LocaleState();
