import type { Answer, Quiz } from "../../engine/types/quiz.types";
import type { Attempt } from "../../engine/types/run.types";
import { isCorrect } from "../../engine/utils/scoring.utils";
import { pick, plural, t } from "../../shared/locale.svelte";
import { FALLBACK_VERDICT, POINT_FORMS, QUESTION_FORMS, VERDICTS } from "../const/results.const";
import type { ReviewStatus, RingState } from "../types/results.types";

/**
 * @export
 * @desc Results ring content: score percentage when complete, answered count otherwise.
 *
 * @param score - Correct answers.
 * @param answered - Submitted answers.
 * @param total - Questions in the run.
 * @param complete - Whether the run is finished.
 *
 * @returns Ring value, text and label.
 */
export const ringState = (score: number, answered: number, total: number, complete: boolean): RingState => {
  if (complete) {
    const percent: string = t(
      `${String(Math.round((score / total) * 100))}%`,
      `${String(Math.round((score / total) * 100))} %`
    );
    return { value: score / total, text: percent, label: t(`${percent} correct`, `${percent} de bonnes réponses`) };
  }
  return {
    value: answered / total,
    text: `${String(answered)}/${String(total)}`,
    label: t(`${String(answered)} of ${String(total)} answered`, `${String(answered)} sur ${String(total)} répondues`)
  };
};

/**
 * @export
 * @desc Summary sentence of a run: a score verdict when complete, the remaining count otherwise.
 *
 * @param score - Correct answers.
 * @param answered - Submitted answers.
 * @param total - Questions in the run.
 * @param complete - Whether the run is finished.
 *
 * @returns Summary sentence.
 */
export const verdict = (score: number, answered: number, total: number, complete: boolean): string => {
  if (!complete) {
    const left: string = `${String(total - answered)} ${plural(total - answered, QUESTION_FORMS)}`;
    return t(`${left} left. Pick up where you stopped.`, `Encore ${left}. Reprenez là où vous en étiez.`);
  }
  const ratio: number = score / total;
  return pick(VERDICTS.find((entry) => ratio >= entry.minRatio)?.text ?? FALLBACK_VERDICT);
};

/**
 * @export
 * @desc Review outcome of a question.
 *
 * @param quiz - Question.
 * @param answer - Its answer, if any.
 *
 * @returns Skipped when not submitted, else correct or wrong.
 */
export const reviewStatus = (quiz: Quiz, answer: Answer | undefined): ReviewStatus => {
  if (answer?.submitted !== true) return "skipped";
  return isCorrect(quiz, answer) ? "correct" : "wrong";
};

/**
 * @export
 * @desc Sentence comparing a full run with the previous one, in percentage points.
 *
 * @param current - Current attempt.
 * @param previous - Previous full attempt.
 *
 * @returns The sentence, or null if either attempt is missing.
 */
export const deltaText = (current: Attempt | null, previous: Attempt | null): string | null => {
  if (current === null || previous === null) return null;
  const delta: number = Math.round((current.score / current.total - previous.score / previous.total) * 100);
  if (delta === 0)
    return t("Same score as your previous full run.", "Même score que lors de votre précédent quiz complet.");
  const points: string = `${delta > 0 ? "+" : ""}${String(delta)} ${plural(Math.abs(delta), POINT_FORMS)}`;
  const previousScore: string = `${String(previous.score)}/${String(previous.total)}`;
  return t(
    `${points} vs your previous full run (${previousScore}).`,
    `${points} par rapport à votre précédent quiz complet (${previousScore}).`
  );
};

/**
 * @export
 * @desc Latest full attempt recorded before the given run.
 *
 * @param attempts - Attempt history, oldest first.
 * @param runId - Current run id.
 *
 * @returns The attempt, or null if none.
 */
export const previousFullAttempt = (attempts: readonly Attempt[], runId: string): Attempt | null => {
  const index: number = attempts.findIndex((attempt) => attempt.runId === runId);
  const before: readonly Attempt[] = index === -1 ? attempts : attempts.slice(0, index);
  return before.filter((attempt) => attempt.kind === "full" && attempt.runId !== runId).at(-1) ?? null;
};
