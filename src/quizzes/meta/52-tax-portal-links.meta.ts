import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "tax-portal-links",
  kind: "multiple",
  title: "Forty links, one task",
  principle: "Make frequent tasks stand out and every link label specific",
  scenario: "A café owner logs in to the tax portal to pay this quarter’s VAT before tonight’s deadline.",
  prompt: "Which issues make this task harder than it needs to be?",
  correct: ["a", "b"],
  choices: [
    {
      id: "a",
      text: "“VAT” appears under both Declare and Pay with the same label, so the link doesn’t say what it does."
    },
    {
      id: "b",
      text: "Dozens of services share one style and weight, so the frequent tasks don’t stand out from rare ones."
    },
    {
      id: "c",
      text: "Each link starts with an orange arrow, where plain bullets would make the long lists look calmer."
    },
    {
      id: "d",
      text: "The account number shows in the side panel, where hiding it behind a menu would save some space."
    }
  ],
  explanation: [
    "Every service gets the same small link, so paying VAT (the task most visitors come for) hides among property duty and cross-border payments. Worse, “VAT” exists twice with identical labels: only the small heading above says which one pays and which one declares.",
    "Bring the few frequent tasks forward (“Pay VAT”, “File VAT return”) and make each label specific on its own, so it works when scanned, read by a screen reader or found by search.",
    "The arrows are the portal’s link style, and showing the account number helps people check they’re in the right account."
  ]
};
