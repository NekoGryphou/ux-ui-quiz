import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "command-recall",
  kind: "single",
  title: "COMMAND ===>",
  principle: "Show the available actions instead of making users recall them",
  scenario: "A warehouse clerk who joined last week needs to put a customer’s order on hold.",
  prompt: "What is the main issue with this screen?",
  correct: ["a"],
  choices: [
    { id: "a", text: "Nothing on screen lists the available commands, so the clerk must remember the right code." },
    {
      id: "b",
      text: "The screen uses green text on black, where dark text on a light background would read better."
    },
    {
      id: "c",
      text: "Every label is in capitals, which reads a little slower than sentence case in long descriptions."
    },
    { id: "d", text: "The order list pages by six lines, where a scrolling list would avoid jumping between pages." }
  ],
  explanation: [
    "The screen shows orders and a “COMMAND ===>” prompt, but no hint of what can be typed there: holding an order means already knowing it’s “HLD” followed by the order number.",
    "Recognition beats recall: list the commands on screen, such as a function-key legend (“F3=Exit F6=Hold F10=Release”), so newcomers can act and experts can still type fast.",
    "Green on black has strong contrast, and capitals and paging are conventions of these terminals rather than blockers."
  ]
};
