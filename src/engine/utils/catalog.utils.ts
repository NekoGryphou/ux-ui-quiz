import type { QuizCatalog } from "../types/catalog.types";
import type { QuizMeta } from "../types/quiz.types";
import { optionsOf } from "./quiz.utils";

/**
 * @export
 * @desc Builds the {@link QuizCatalog} index of a quiz list.
 *
 * @template T - Quiz shape.
 *
 * @param quizzes - Quizzes in file order.
 *
 * @returns The catalog.
 */
export const createCatalog = <T extends QuizMeta>(quizzes: readonly T[]): QuizCatalog<T> => ({
  order: quizzes.map((quiz) => quiz.id),
  byId: new Map(quizzes.map((quiz) => [quiz.id, quiz])),
  choiceIds: new Map(quizzes.map((quiz) => [quiz.id, new Set(optionsOf(quiz).map((choice) => choice.id))]))
});
