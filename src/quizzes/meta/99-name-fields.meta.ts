import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "name-fields",
  kind: "single",
  title: "First name, last name, and other assumptions",
  principle: "Don’t force names into one cultural pattern",
  scenario:
    "A new employee from Indonesia, whose legal name is the single word Sukarni, fills in the HR onboarding form.",
  prompt: "What is the main issue with this form?",
  correct: ["a"],
  choices: [
    { id: "a", text: "Both first and last name are required, so someone with a single name can’t submit." },
    { id: "b", text: "The name fields sit side by side, where stacked fields would read more easily on mobile." },
    { id: "c", text: "The form asks for a preferred name, where the legal name alone would keep it shorter." },
    { id: "d", text: "The labels sit above the fields, where labels to the left would align the form better." }
  ],
  explanation: [
    "Many people have a single name, put the family name first, have several family names or use characters the form rejects. Requiring both a “first” and a “last” name forces Sukarni to invent one, which then ends up on contracts and payslips.",
    "Use one “Full name” field, plus an optional “What should we call you?” if you need a greeting. Accept any characters and lengths, and only split names when a legal system truly requires it.",
    "Side-by-side fields, a preferred-name field and top-aligned labels are all fine choices."
  ]
};
