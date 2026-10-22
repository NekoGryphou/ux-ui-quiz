import type { Quiz, QuizMeta } from "./quiz.types";

/**
 * @export
 * @desc Read-only index of the quiz set, built by {@link createCatalog}.
 *
 * @template T - Stored quiz shape.
 *
 * @property order - Quiz ids in file order.
 * @property byId - Quizzes by id.
 * @property choiceIds - Option ids per quiz.
 */
export interface QuizCatalog<T extends QuizMeta = Quiz> {
  /** Quiz ids in file order. */
  readonly order: readonly string[];

  /** Quizzes by id. */
  readonly byId: ReadonlyMap<string, T>;

  /** Selectable option ids per quiz id. */
  readonly choiceIds: ReadonlyMap<string, ReadonlySet<string>>;
}
