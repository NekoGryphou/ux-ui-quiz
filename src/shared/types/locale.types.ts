/**
 * @export
 * @desc Supported interface language.
 */
export type Locale = "en" | "fr";

/**
 * @export
 * @desc Value given in every supported language.
 *
 * @template T - Translated value.
 */
export type Localized<T> = Readonly<Record<Locale, T>>;
