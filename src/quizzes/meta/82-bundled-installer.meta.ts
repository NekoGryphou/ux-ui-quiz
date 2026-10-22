import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "bundled-installer",
  kind: "single",
  title: "Next, Next, Next… and a toolbar",
  principle: "Never pre-select extras the user didn’t ask for",
  scenario: "A parent installs a free PDF reader and clicks through the setup steps to open a school form.",
  prompt: "What is the main issue with this setup step?",
  correct: ["a"],
  choices: [
    { id: "a", text: "Unrelated extras are ticked by default, so clicking Next installs them without asking." },
    { id: "b", text: "The wizard uses a grey system style, where a branded look would feel more trustworthy." },
    { id: "c", text: "Setup shows a step counter, where hiding it would make the install feel shorter." },
    { id: "d", text: "The Back button sits left of Next, where only one button would keep the step simpler." }
  ],
  explanation: [
    "People click Next to get through setup. Here “Next” also installs a toolbar, changes the homepage and sets a new search engine, because those boxes come ticked and are labelled as “recommended”.",
    "Extras must be opt-in: unticked by default, clearly separate from the product and declinable in one click. Better still, don’t bundle them at all.",
    "The system style, step counter and Back/Next pair are the standard installer pattern."
  ]
};
