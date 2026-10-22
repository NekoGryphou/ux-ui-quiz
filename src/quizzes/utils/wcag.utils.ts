import type { QuizLink } from "../../engine/types/quiz.types";
import { WCAG_UNDERSTANDING_BASE } from "../const/wcag.const";

/**
 * @export
 * @desc {@link QuizLink} to the WCAG Understanding page of a criterion.
 *
 * @param criterion - Criterion number.
 * @param name - Criterion name.
 * @param slug - Understanding page slug.
 *
 * @returns The link.
 */
export const wcag = (criterion: string, name: string, slug: string): QuizLink => ({
  label: `WCAG ${criterion} ${name}`,
  url: `${WCAG_UNDERSTANDING_BASE}${slug}.html`
});
