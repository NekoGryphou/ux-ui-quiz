import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "focus-indicator",
  kind: "compare",
  title: "Where is the keyboard?",
  principle: "Make keyboard focus clearly visible",
  scenario:
    "A keyboard user tabs through a settings dialog. In both versions, keyboard focus is currently on the Save button.",
  prompt: "Which version shows keyboard focus better?",
  correct: ["b"],
  explanation: [
    "A slightly darker button is almost impossible to spot, so keyboard users lose track of where they are (WCAG 2.4.7 Focus Visible).",
    "A solid ring with a gap around the control stands out on any background. Aim for at least 3:1 contrast against its surroundings, as WCAG 2.4.13 Focus Appearance recommends.",
    "Never remove the browser outline without putting a stronger indicator in its place."
  ],
  links: [wcag("2.4.7", "Focus Visible", "focus-visible"), wcag("2.4.13", "Focus Appearance", "focus-appearance")]
};
