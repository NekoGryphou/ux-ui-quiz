import type { Localized } from "../../shared/types/locale.types";
import { WCAG_UNDERSTANDING_BASE } from "../const/wcag.const";
import type { LinkSource } from "../types/quiz-source.types";

/**
 * @export
 * @desc {@link LinkSource} to the WCAG Understanding page of a criterion.
 *
 * @param criterion - Criterion number.
 * @param name - Criterion name in every language.
 * @param slug - Understanding page slug.
 *
 * @returns The link.
 */
export const wcag = (criterion: string, name: Localized<string>, slug: string): LinkSource => ({
  label: { en: `WCAG ${criterion} ${name.en}`, fr: `WCAG ${criterion} ${name.fr}` },
  url: `${WCAG_UNDERSTANDING_BASE}${slug}.html`
});
