import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "consent-dark-patterns",
  kind: "multiple",
  title: "Consent by default",
  principle: "Ask for consent explicitly and specifically",
  scenario: "A freelancer is signing up for an invoicing tool they want to try for a client project.",
  prompt: "Which issues does this signup form have?",
  correct: ["a", "b"],
  choices: [
    { id: "a", text: "Both consent boxes are already checked, so users opt in without making a choice." },
    { id: "b", text: "Product tips and partner offers share one checkbox, so users can’t accept just one." },
    { id: "c", text: "The password field has no strength meter, so weak passwords can go unnoticed." },
    { id: "d", text: "The form asks for a full name, where a first name would be enough for an account." }
  ],
  explanation: [
    "Pre-ticked boxes don’t count as consent under the GDPR: consent must be an active, unambiguous choice.",
    "Consent must also be specific. Bundling useful product tips with partner marketing forces an all-or-nothing decision.",
    "Leave consent boxes unchecked and split each purpose into its own option. A strength meter is a nice extra, not a consent issue."
  ]
};
