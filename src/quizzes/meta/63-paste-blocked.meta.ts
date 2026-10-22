import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "paste-blocked",
  kind: "single",
  title: "Type it, don’t paste it",
  principle: "Let people paste into login fields",
  scenario: "A customer signs in to their bank, pasting the long password stored in their password manager.",
  prompt: "What is the main issue with this sign-in?",
  correct: ["a"],
  choices: [
    { id: "a", text: "The password field refuses pasting, so a long generated password has to be typed by hand." },
    { id: "b", text: "The username is the customer number, where an email address would be easier to remember." },
    { id: "c", text: "The sign-in card sits on the left, where a centered card would draw the eye more directly." },
    { id: "d", text: "The “Forgot password?” link sits under the button, where beside the field it’s found faster." }
  ],
  explanation: [
    "Blocking paste doesn’t stop attackers; it stops people using password managers. The customer must now retype a 24-character random password, or switch to a short one they can remember, which is exactly what security teams don’t want.",
    "Let people paste and let password managers fill the field. Don’t make sign-in depend on memorising or transcribing a password (WCAG 3.3.8 Accessible Authentication).",
    "A customer number as username, a left-aligned card and the link placement are ordinary choices for a banking app."
  ],
  links: [wcag("3.3.8", "Accessible Authentication (Minimum)", "accessible-authentication-minimum")]
};
