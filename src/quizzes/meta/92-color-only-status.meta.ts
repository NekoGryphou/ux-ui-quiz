import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "color-only-status",
  kind: "compare",
  title: "Red or green? Ask a colleague",
  principle: "Don’t rely on red and green alone",
  scenario: "An operator with red-green colour blindness (like about 1 in 12 men) checks which servers need attention.",
  prompt: "Which version can this operator use?",
  correct: ["b"],
  explanation: [
    "With red-green colour blindness, the red and green dots look like the same muddy brown: the status column carries no information at all, and the faulty servers hide among the healthy ones.",
    "Never encode meaning in hue alone: add an icon or a shape (✓, ✕, ▲), a text label, or a pattern, and pick colours that also differ in lightness (WCAG 1.4.1 Use of Color).",
    "Both versions use the same servers, layout and colours; one adds icons and labels to the colour."
  ],
  links: [wcag("1.4.1", "Use of Color", "use-of-color")]
};
