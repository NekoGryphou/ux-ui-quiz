import type { QuizMeta } from "./quiz.types";

/**
 * @export
 * @desc Authoring check returning an error message, or null when the quiz passes.
 */
export type QuizRule = (quiz: QuizMeta) => string | null;
