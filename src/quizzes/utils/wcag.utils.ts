import type { QuizLink } from "../../engine/types/quiz.types";
import { WCAG_UNDERSTANDING_BASE } from "../const/wcag.const";

export const wcag = (criterion: string, name: string, slug: string): QuizLink => ({
  label: `WCAG ${criterion} ${name}`,
  url: `${WCAG_UNDERSTANDING_BASE}${slug}.html`
});
