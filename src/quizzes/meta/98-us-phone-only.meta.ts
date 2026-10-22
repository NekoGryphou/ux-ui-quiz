import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "us-phone-only",
  kind: "single",
  title: "Please enter a valid phone number",
  principle: "Accept international formats for phone numbers and addresses",
  scenario: "A customer in Lyon enters their mobile number at checkout so the courier can reach them.",
  prompt: "What is the main issue with this field?",
  correct: ["a"],
  choices: [
    { id: "a", text: "The field only accepts the US (XXX) XXX-XXXX pattern, so a valid French number is refused." },
    { id: "b", text: "The field shows an example under it, where a placeholder inside would keep the form shorter." },
    { id: "c", text: "The error appears in red under the field, where a toast would make the problem more visible." },
    { id: "d", text: "The form asks for a phone number at all, where an email address would be enough for delivery." }
  ],
  explanation: [
    "“06 12 34 56 78” is a perfectly valid French mobile number, but the validation expects ten digits in the US pattern and refuses it. The customer can’t complete checkout without inventing a number.",
    "Accept numbers as people write them: allow spaces, dots, dashes and a leading “+”, offer a country code selector, and validate with a library that knows international rules (libphonenumber), not a single regex.",
    "An example under the field, an inline error and asking for a phone number for delivery are all reasonable."
  ]
};
