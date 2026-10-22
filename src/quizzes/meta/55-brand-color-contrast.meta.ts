import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "brand-color-contrast",
  kind: "compare",
  title: "On brand, off contrast",
  principle: "Check brand colors against the text they carry",
  scenario: "A lemonade brand adds a newsletter sign-up to its homepage, using its signature yellow.",
  prompt: "Which version works better?",
  correct: ["b"],
  explanation: [
    "White on this sunny yellow reaches about 1.6:1: the button label nearly vanishes in daylight, on cheap screens and for anyone with low vision. A brand color isn’t automatically a good background for text.",
    "Keep the brand color and pick the text color for contrast: deep brown on yellow passes 9:1. Check every brand color against the text it carries (WCAG 1.4.3 asks for 4.5:1 for normal text).",
    "Both versions use the same layout, font and yellow; only the label color differs."
  ],
  links: [wcag("1.4.3", "Contrast (Minimum)", "contrast-minimum")]
};
