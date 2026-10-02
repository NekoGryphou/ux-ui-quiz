import { quizzes } from "../../quizzes";
import type { Quiz } from "../types/quiz.types";
import { optionsOf } from "../utils/quiz.utils";

export const SESSION_STORAGE_KEY: string = "ui-quiz-lab:session:v1";
export const PRACTICE_STORAGE_KEY: string = "ui-quiz-lab:practice:v1";
export const HISTORY_STORAGE_KEY: string = "ui-quiz-lab:history:v1";
export const ORDER_SHUFFLE_KEY: string = "question-order";
export const QUICK_RUN_SIZE: number = 10;
export const FULL_RUN_SIZE: number = 30;
export const FIXED_ORDER_STORAGE_KEY: string = "ui-quiz-lab:debug-fixed-order";
export const FIXED_ORDER_SEED: number = 1;
export const HISTORY_LIMIT: number = 50;

export const FILE_ORDER: readonly string[] = quizzes.map((quiz) => quiz.id);
export const QUIZ_BY_ID: ReadonlyMap<string, Quiz> = new Map(quizzes.map((quiz) => [quiz.id, quiz]));
export const CHOICE_IDS_BY_QUIZ: ReadonlyMap<string, ReadonlySet<string>> = new Map(
  quizzes.map((quiz) => [quiz.id, new Set(optionsOf(quiz).map((choice) => choice.id))])
);
