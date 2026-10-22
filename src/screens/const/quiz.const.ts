import type { QuizMode } from "../../app/types/screen.types";
import type { QuizKind } from "../../engine/types/quiz.types";
import type { NavLabels } from "../types/quiz-screen.types";

/**
 * @export
 * @desc Question heading for each quiz kind.
 */
export const QUESTION_HEADINGS: Readonly<Record<QuizKind, string>> = {
  single: "What's wrong with this screen?",
  multiple: "What's wrong with this screen?",
  hotspot: "Where is the problem?",
  compare: "Which version works better?"
};

/**
 * @export
 * @desc Next and last step button labels for each quiz mode.
 */
export const NAV_LABELS: Readonly<Record<QuizMode, NavLabels>> = {
  answer: { step: "Next question", end: "See results" },
  review: { step: "Next", end: "Back to results" }
};
