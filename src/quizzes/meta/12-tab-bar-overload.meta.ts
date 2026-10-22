import type { QuizMeta } from "../../engine/types/quiz.types";
import { PHOTO_PASTA, PHOTO_SALMON, PHOTO_SHAKSHUKA } from "../const/photo.const";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "tab-bar-overload",
  kind: "multiple",
  title: "A tab bar of mystery icons",
  principle: "Keep primary navigation short and labelled",
  scenario: "A new user of a recipe-sharing app wants to find the recipes they saved last week.",
  prompt: "Which issues make this navigation hard to use?",
  correct: ["a", "b"],
  choices: [
    { id: "a", text: "Seven tabs are squeezed into the bar, so each target is narrow and hard to tell apart." },
    { id: "b", text: "The tabs show icons without labels, so users must guess which one holds saved recipes." },
    { id: "c", text: "The tab bar sits at the bottom, far from the screen title that users read first." },
    { id: "d", text: "The active tab is shown in color, where a filled icon would match the platform style." }
  ],
  explanation: [
    "Bottom navigation works for 3 to 5 top-level destinations (Material Design). Beyond that, targets shrink and the bar becomes a puzzle.",
    "Icons alone are ambiguous: is “saved” the heart, the bookmark, or the profile? Short text labels make every destination recognisable.",
    "The bottom position is right on phones: it’s where thumbs reach. Color is a fine way to mark the active tab.",
    photoCredits([PHOTO_PASTA, PHOTO_SALMON, PHOTO_SHAKSHUKA])
  ]
};
