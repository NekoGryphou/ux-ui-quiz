import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "session-timeout",
  kind: "compare",
  title: "Logged out during a coffee break",
  principle: "Warn before a time limit and let users extend it",
  scenario:
    "A customer fills in a bank transfer, steps away to find the invoice number, and comes back a few minutes later.",
  prompt: "Which version handles the time limit better?",
  correct: ["a"],
  explanation: [
    "Ending the session silently throws away everything the customer typed: they come back to a logout page and must start the transfer again.",
    "Warn before the time runs out and offer a one-click way to extend, with at least 20 seconds to respond (WCAG 2.2.1 Timing Adjustable). Security stays the same; the work survives.",
    "Both versions use the same timeout length and the same bank layout; only the warning differs."
  ],
  links: [wcag("2.2.1", "Timing Adjustable", "timing-adjustable")]
};
