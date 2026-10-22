import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "color-only-error",
  kind: "single",
  title: "Error signalled by color alone",
  principle: "Explain errors in words, not only with color",
  scenario: "A customer enters their card details and clicks Pay. The page updates as shown.",
  prompt: "What is the main issue on this payment step?",
  correct: ["c"],
  choices: [
    { id: "a", text: "The Pay button stays enabled while a field is invalid, which invites repeated clicks." },
    { id: "b", text: "The card number is a single input instead of four separate groups of four digits." },
    { id: "c", text: "The card number field turns red, but no message says what is wrong or how to fix it." },
    { id: "d", text: "The card number field shows no network logo, so users can’t confirm the card type." }
  ],
  explanation: [
    "A red border tells users something failed but not what: a typo, an expired card, an unsupported network?",
    "Errors must be identified and described in text (WCAG 3.3.1 Error Identification), and color can’t be the only signal (WCAG 1.4.1 Use of Color).",
    "Pair the visual state with a specific message next to the field, plus an icon, e.g. “This card number is incomplete.”"
  ],
  links: [wcag("3.3.1", "Error Identification", "error-identification"), wcag("1.4.1", "Use of Color", "use-of-color")]
};
