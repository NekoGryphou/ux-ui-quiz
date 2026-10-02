import type { QuizMeta } from "./quiz.types";

export type QuizRule = (quiz: QuizMeta) => string | null;
