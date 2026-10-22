import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "skeleton-or-spinner",
  kind: "compare",
  title: "Waiting for the feed",
  principle: "Preview the layout while content loads",
  scenario: "A commuter opens a news app on a slow train connection. The feed takes about two seconds to load.",
  prompt: "Which loading state works better here?",
  correct: ["a"],
  explanation: [
    "For content with a known layout, a skeleton shows where things will appear: the wait feels shorter and nothing jumps when the content arrives.",
    "A centered spinner on an empty screen gives no sense of what is coming or how long it takes, and the whole layout shifts once the feed loads.",
    "Spinners still suit short, unpredictable actions such as submitting a form."
  ]
};
