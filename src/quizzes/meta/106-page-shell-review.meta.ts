import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "page-shell-review",
  kind: "hotspot",
  title: "A page shell with two blind spots",
  principle: "Declare the page language and never hide focusable content from assistive tech",
  scenario:
    "A developer reviews the page template that every screen of a customer order portal is built on before it ships.",
  prompt: "Click every part of the markup that fails screen reader users.",
  correct: ["html", "promo"],
  regions: [
    { id: "html", text: "Line 1: html element" },
    { id: "head", text: "Lines 2–5: head" },
    { id: "nav", text: "Lines 7–10: navigation" },
    { id: "main", text: "Lines 11–12: main and heading" },
    { id: "image", text: "Line 13: divider image" },
    { id: "promo", text: "Lines 14–17: promo banner" }
  ],
  explanation: [
    'The html element has no lang attribute, so screen readers guess the language from the user’s settings: a French user’s reader pronounces this English page with French rules, and braille or translation tools guess too (WCAG 3.1.1 Language of Page). Add lang="en".',
    'The promo is wrapped in aria-hidden="true", yet its Dismiss button still takes keyboard focus: Tab lands on a control that screen readers announce with no name or role, or not at all (WCAG 4.1.2 Name, Role, Value). Remove aria-hidden, or hide the whole block with hidden or inert when it must not be reached.',
    "The rest is solid: a head with a charset and a descriptive title, a labelled nav landmark, a main element with a heading, and a decorative image with an empty alt so it is skipped."
  ],
  links: [wcag("3.1.1", "Language of Page", "language-of-page"), wcag("4.1.2", "Name, Role, Value", "name-role-value")]
};
