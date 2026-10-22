import type { RunTarget } from "../../app/types/router.types";
import type { QuizMode } from "../../app/types/screen.types";
import { href } from "../../app/utils/router.utils";
import type { QuizKind } from "../../engine/types/quiz.types";
import { NAV_LABELS } from "../const/quiz.const";
import type { NavLabels, QuizNav } from "../types/quiz-screen.types";

/**
 * @private
 * @desc Noun for one selectable item of a quiz kind.
 *
 * @param kind - Quiz kind.
 *
 * @returns Area for hotspots, answer otherwise.
 */
const unitFor = (kind: QuizKind): string => (kind === "hotspot" ? "area" : "answer");

/**
 * @export
 * @desc Label of the check button, counting selections on multi-answer questions.
 *
 * @param kind - Quiz kind.
 * @param several - Whether several answers are allowed.
 * @param selectedCount - Number of selected items.
 *
 * @returns Button label.
 */
export const checkButtonLabel = (kind: QuizKind, several: boolean, selectedCount: number): string => {
  if (!several || selectedCount === 0) return "Check answer";
  const unit: string = unitFor(kind);
  return selectedCount === 1 ? `Check 1 ${unit}` : `Check ${String(selectedCount)} ${unit}s`;
};

/**
 * @private
 * @desc Href of a question in the current mode.
 *
 * @param mode - Answer or review mode.
 * @param target - Run slot.
 * @param index - Zero-based question index.
 *
 * @returns Question href.
 */
const stepHref = (mode: QuizMode, target: RunTarget, index: number): string =>
  mode === "review" ? href.review(index) : href.quiz(target, index);

/**
 * @private
 * @desc Results href reached after the last question.
 *
 * @param mode - Answer or review mode.
 * @param target - Run slot.
 *
 * @returns Results href; review always returns to the main results.
 */
const endHref = (mode: QuizMode, target: RunTarget): string => href.results(mode === "review" ? "main" : target);

/**
 * @export
 * @desc Previous and next links of a question, with the forward label.
 *
 * @param mode - Answer or review mode.
 * @param target - Run slot.
 * @param index - Zero-based question index.
 * @param total - Number of questions in the run.
 *
 * @returns Navigation links and label.
 */
export const quizNav = (mode: QuizMode, target: RunTarget, index: number, total: number): QuizNav => {
  const isLast: boolean = index >= total - 1;
  const labels: NavLabels = NAV_LABELS[mode];
  return {
    previous: index > 0 ? stepHref(mode, target, index - 1) : null,
    next: isLast ? endHref(mode, target) : stepHref(mode, target, index + 1),
    nextLabel: isLast ? labels.end : labels.step
  };
};
