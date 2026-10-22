import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "unlinked-error",
  kind: "compare",
  title: "An error only sighted users get",
  principle: "Tie each error message to its field in the markup",
  scenario:
    "A developer reviews the sign-up email field as it appears after a visitor submits an incomplete address. Both versions look the same on screen.",
  prompt: "Which implementation works better?",
  correct: ["b"],
  explanation: [
    "When the error paragraph sits next to the input with no link to it, a screen reader user who returns to the field hears “Email, edit text, camille@” and nothing else: they can’t tell the value was rejected, or why (WCAG 3.3.1 Error Identification, 1.3.1 Info and Relationships).",
    'aria-invalid="true" announces the field as invalid, and aria-describedby pointing at the message id reads the error right after the field’s name. Remove both once the value is fixed.',
    "Both versions show the same red border, icon and message; only the association in the markup differs."
  ],
  links: [
    wcag("3.3.1", "Error Identification", "error-identification"),
    wcag("1.3.1", "Info and Relationships", "info-and-relationships")
  ]
};
