import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "premature-validation",
  kind: "compare",
  title: "Wrong before you’ve finished",
  principle: "Validate when the user is done, not on the first keystroke",
  scenario: "A visitor creates an account and is halfway through typing their email address.",
  prompt: "Which version handles validation better?",
  correct: ["b"],
  explanation: [
    "Flagging “camille.du” as invalid while the visitor is still typing is like correcting someone mid-sentence: the field turns red for an address that is simply unfinished.",
    "Validate when the user leaves the field or submits the form. Once an error is shown, re-check as they type so it clears as soon as the value is fixed.",
    "Both versions use the same field, message style and wording; only the moment of validation differs."
  ]
};
