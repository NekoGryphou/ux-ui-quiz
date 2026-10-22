import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "hidden-password-rules",
  kind: "multiple",
  title: "Secret password rules",
  principle: "Show constraints before input",
  scenario:
    "A user creating an account types a password they like, confirms it and submits. The page updates as shown.",
  prompt: "Which issues does this form have?",
  correct: ["a", "b"],
  choices: [
    { id: "a", text: "The password rules aren’t shown until after the user has submitted the form." },
    { id: "b", text: "The error says the password fails “requirements” without naming which one." },
    { id: "c", text: "The error appears under the field, where a banner at the top would be noticed." },
    { id: "d", text: "The email is shown as plain text, so users can’t correct a typo in it here." }
  ],
  explanation: [
    "Hidden rules turn the form into a guessing game. List the requirements upfront, ideally as a checklist that updates while typing (WCAG 3.3.2 Labels or Instructions).",
    "“Doesn’t meet requirements” gives no next step. Say what’s missing: “Add at least one number.”",
    "An error next to its field is the recommended placement, and confirming the email from a previous step is fine."
  ],
  links: [wcag("3.3.2", "Labels or Instructions", "labels-or-instructions")]
};
