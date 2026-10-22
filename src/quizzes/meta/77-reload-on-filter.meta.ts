import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "reload-on-filter",
  kind: "single",
  motion: true,
  title: "One click, one reload",
  principle: "Let people set several filters before results reload",
  scenario: "A runner narrows down trail shoes by ticking a size, two brands and a colour in the sidebar.",
  prompt: "What is the main issue with these filters?",
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: "Every tick reloads the page and jumps back to the top, so setting four filters means four waits."
    },
    { id: "b", text: "The filters sit in a left sidebar, where a row of chips above the grid would take less room." },
    { id: "c", text: "Each filter shows a product count, where plain labels would keep the long sidebar calmer." },
    { id: "d", text: "Brands are listed alphabetically, where sorting by popularity would surface the big names." }
  ],
  explanation: [
    "The runner wants size 43, two brands and blue. Each tick triggers a full page reload: the grid blanks out, the page jumps to the top, the sidebar loses its scroll position, and the next checkbox has to be found again, four times in a row.",
    "Update results in place without a reload, keep scroll and focus where they were, and show the new count as filters change. On mobile, or when results are slow, collect choices first and apply them with one “Show 42 results” button.",
    "A sidebar, product counts and alphabetical brands are all common and helpful filter patterns."
  ]
};
