import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "search-dead-end",
  kind: "single",
  title: "No results, no way out",
  principle: "Design empty results for recovery",
  scenario: "A sales rep searches the CRM for a customer they spoke to on the phone last week.",
  prompt: "What is the main issue on this search screen?",
  correct: ["a"],
  choices: [
    { id: "a", text: "Filters from earlier stay active, with no way to remove them or widen the search." },
    { id: "b", text: "The search field keeps the query “acme” after searching, instead of clearing it." },
    { id: "c", text: "The empty result shows a plain “0 results” where an illustration would feel friendlier." },
    { id: "d", text: "The active filters appear as chips, where a dropdown would save horizontal space." }
  ],
  explanation: [
    "Zero results is normal. The problem is the dead end: three leftover filters narrow the search, and none of them can be removed from here.",
    "Make each chip removable, add “Clear all filters”, and suggest a way out: “No results in Trial · EU · Mia. Search all customers?”",
    "Keeping the query visible is correct (users can refine it), and chips are the clearest way to show active filters. An illustration wouldn’t help anyone recover."
  ]
};
