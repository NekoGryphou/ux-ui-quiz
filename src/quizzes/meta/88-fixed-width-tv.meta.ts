import type { QuizMeta } from "../../engine/types/quiz.types";
import { PHOTO_RISOTTO } from "../const/photo.const";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "fixed-width-tv",
  kind: "single",
  title: "A postage stamp on a 65-inch TV",
  principle: "Let layouts scale to the screen they’re on",
  scenario: "A family opens a recipe site on their living-room smart TV to cook along from the sofa.",
  prompt: "What is the main issue with this page on the TV?",
  correct: ["a"],
  choices: [
    { id: "a", text: "The page is fixed at 1024 pixels, so on the TV it is a small strip with tiny text." },
    { id: "b", text: "The recipe photo sits above the steps, where beside them it would use the width." },
    { id: "c", text: "The ingredients are a bulleted list, where a table would align quantities better." },
    { id: "d", text: "The page has a white background, where a dark theme would suit a living room more." }
  ],
  explanation: [
    "The site was built at a fixed 1024px width with 13px text. On a 4K TV seen from three metres away, it sits in a narrow strip in the middle of the screen, and the steps are unreadable from the sofa.",
    "Use fluid layouts and relative units, scale type with the viewport, and consider the viewing distance for TV-like screens: larger text, focusable large targets and fewer, bigger columns.",
    "Photo above the steps, a bulleted ingredient list and a white background are all reasonable recipe layouts.",
    photoCredits([PHOTO_RISOTTO])
  ]
};
