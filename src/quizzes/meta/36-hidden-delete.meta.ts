import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "hidden-delete",
  kind: "single",
  title: "Delete, between Duplicate and Move",
  principle: "Separate and signal destructive actions",
  scenario: "A designer opens the menu on a shared file to make a copy before editing it.",
  prompt: "What is the main issue with this menu?",
  correct: ["a"],
  choices: [
    { id: "a", text: "Delete sits between everyday actions in the same style, so it’s easy to hit by mistake." },
    { id: "b", text: "The menu opens below the row, where opening above would keep more of the list visible." },
    { id: "c", text: "The menu shows text labels only, where icons would help users find actions faster." },
    { id: "d", text: "The menu lists five actions, where a row of buttons would avoid the extra click." }
  ],
  explanation: [
    "The destructive item looks like its neighbours and sits right under Duplicate, the action this user wants: one slip deletes a file the whole team uses.",
    "Put destructive actions last, behind a divider, in a danger color, and back them with confirmation or undo.",
    "Text labels are clear in menus, and a short overflow menu is a reasonable way to keep rows tidy."
  ]
};
