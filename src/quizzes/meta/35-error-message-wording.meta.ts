import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "error-message-wording",
  kind: "compare",
  title: "An error that explains itself",
  principle: "Say what went wrong and how to fix it",
  scenario: "A customer schedules a grocery delivery and picks a date that isn’t available.",
  prompt: "Which error message works better?",
  correct: ["b"],
  explanation: [
    "A status code and “invalid input” tell the customer something failed, but not what or what to do next.",
    "A good error names the problem in the user’s words and gives the way out: which dates work, with an example (WCAG 3.3.3 Error Suggestion).",
    "Both versions place the message under the field and mark it with color and an icon; only the wording differs."
  ],
  links: [wcag("3.3.3", "Error Suggestion", "error-suggestion")]
};
