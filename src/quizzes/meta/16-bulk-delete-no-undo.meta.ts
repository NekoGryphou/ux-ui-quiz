import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "bulk-delete-no-undo",
  kind: "single",
  title: "Gone in one click",
  principle: "Make destructive bulk actions recoverable",
  scenario:
    "A designer tidies a shared project folder: they select what they think are old drafts and press Delete. The page updates as shown.",
  prompt: "What is the main issue with how this delete is handled?",
  correct: ["b"],
  choices: [
    { id: "a", text: "The toast appears in the bottom corner, far from the list where the files were." },
    { id: "b", text: "24 files vanished at once with no undo, so a wrong selection is permanent." },
    { id: "c", text: "The toast gives a count instead of listing the names of the deleted files." },
    { id: "d", text: "The file list re-sorts after deleting, so the user loses their place in it." }
  ],
  explanation: [
    "Bulk actions multiply the cost of a slip: one wrong “select all” removed 24 files from a folder the whole team uses.",
    "Prefer undo over an “Are you sure?” dialog: an Undo button in the toast (kept long enough to use), or a trash that can be restored, lets people recover without slowing them down.",
    "A count is the right summary for a bulk action, and the bottom corner is the conventional place for a toast."
  ]
};
