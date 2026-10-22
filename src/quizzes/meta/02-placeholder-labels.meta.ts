import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "placeholder-labels",
  kind: "multiple",
  title: "Placeholders used as labels",
  principle: "Keep field context persistent and legible",
  scenario: "A returning user is signing in to a B2B tool. They have started typing their email address.",
  prompt: "Which issues does this form have?",
  correct: ["a", "b"],
  choices: [
    { id: "a", text: "Field names exist only as placeholders, so they disappear once the user types." },
    { id: "b", text: "The placeholder text is so pale that it’s hard to read against the white field." },
    { id: "c", text: "The form asks for an email address, where a username would be quicker to type." },
    { id: "d", text: "The “Forgot your password?” link sits under the button instead of beside the field." },
    { id: "e", text: "The Sign in button spans the full width, so it reads more like a banner than a button." }
  ],
  explanation: [
    "Placeholders vanish on input: the half-typed email field already has no name, and users who get interrupted or use a screen reader lose the field’s purpose (WCAG 3.3.2 Labels or Instructions).",
    "The very light placeholder gray is about 1.6:1 against white, far below the 4.5:1 minimum for text (WCAG 1.4.3).",
    "Use a visible label above each field, and keep placeholders for optional examples only."
  ],
  links: [
    wcag("3.3.2", "Labels or Instructions", "labels-or-instructions"),
    wcag("1.4.3", "Contrast (Minimum)", "contrast-minimum")
  ]
};
