import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "unfolded-stretch",
  kind: "compare",
  title: "A phone app, stretched flat",
  principle: "Adapt layouts to large unfolded screens",
  scenario: "A manager unfolds their phone on the train to read and answer several emails in a row.",
  prompt: "Which version uses the unfolded screen better?",
  correct: ["b"],
  explanation: [
    "Stretching the phone layout gives very long rows with a lot of empty space, and opening an email still replaces the list: the manager keeps going back and forth, exactly as on a small screen.",
    "When the screen unfolds, switch to a layout that uses it: list and detail side by side (one per half), so picking the next email is one tap and the fold sits between the two panes.",
    "Both versions show the same app, emails and controls; only the layout changes with the screen size."
  ]
};
