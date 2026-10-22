import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "destructive-color",
  kind: "single",
  title: "Destructive action dressed as success",
  principle: "Match visual semantics to consequence",
  scenario:
    "A project owner wants to permanently remove an old project. They open its settings and click “Delete project”.",
  prompt: "What is the main issue with this dialog?",
  correct: ["a"],
  choices: [
    { id: "a", text: "The delete button is green, a color users read as safe, so the risk is understated." },
    { id: "b", text: "The dialog doesn’t ask users to type the project name, so deleting is too easy." },
    { id: "c", text: "Cancel and Delete sit side by side, so a slip of the pointer can hit the wrong one." },
    { id: "d", text: "The title is phrased as a question, so it’s unclear whether deletion already happened." }
  ],
  explanation: [
    "Green is learned as “success, go ahead”. On an irreversible delete it sends the opposite signal to the one users need.",
    "Destructive actions should look risky: a red or danger style, explicit wording, and Cancel as the safe default.",
    "Typing the project name is a useful extra safeguard for very high-stakes deletes, but here the color is what misleads."
  ]
};
