import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "ambiguous-icons",
  kind: "single",
  title: "Save, sync or upload?",
  principle: "Label icons whose meaning isn’t universal",
  scenario: "A new user finishes editing a document in a notes app and wants to make sure it is saved.",
  prompt: "What is the main issue with this toolbar?",
  correct: ["a"],
  choices: [
    { id: "a", text: "The icons have no labels, and three of them could each mean save, sync or upload." },
    { id: "b", text: "The toolbar sits at the top, where a floating bar near the text would feel closer." },
    { id: "c", text: "The icons are monochrome, where a colour per action would make them recognisable." },
    { id: "d", text: "The toolbar has six buttons, where four would leave more room for the title above." }
  ],
  explanation: [
    "A cloud with an arrow, a pair of circular arrows and a tray with an arrow: each could reasonably mean “save”, “sync” or “upload”. Without labels, the new user can only guess, or hover each one and wait for a tooltip.",
    "Only a handful of icons are universally understood (search, close, home…). Pair the rest with a short text label, at least for primary actions, and keep tooltips as a bonus, not the only explanation.",
    "A top toolbar, monochrome icons and six actions are all common and fine on their own."
  ]
};
