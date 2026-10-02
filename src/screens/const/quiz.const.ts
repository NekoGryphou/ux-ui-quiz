import type { QuizKind } from "../../engine/types/quiz.types";

export const QUESTION_HEADINGS: Readonly<Record<QuizKind, string>> = {
  single: "What's wrong with this screen?",
  multiple: "What's wrong with this screen?",
  hotspot: "Where is the problem?",
  compare: "Which version works better?"
};
