import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "action-hierarchy",
  kind: "single",
  title: "Reversed action hierarchy",
  principle: "Align visual emphasis with task priority",
  scenario: "An editor has finished writing an article and reviewed it. Their goal now is to make it live on the blog.",
  prompt: "What is the main issue in this editor?",
  correct: ["b"],
  choices: [
    { id: "a", text: "The “Saved 2 min ago” status sits far from the article, so autosave is easy to miss." },
    { id: "b", text: "Publish is styled as a plain text link, weaker than Save draft, the secondary action." },
    { id: "c", text: "Preview is a ghost button, although editors are expected to check before publishing." },
    { id: "d", text: "The Draft badge stays visible after saving, which suggests the work isn’t stored yet." }
  ],
  explanation: [
    "Visual hierarchy should point to the main task. Here the filled button is the secondary action, while Publish is a plain text link.",
    "When emphasis is reversed, users hesitate, or click the prominent button and believe the article is live.",
    "One clear primary action per view works best; the others can stay visible as secondary or ghost buttons."
  ]
};
