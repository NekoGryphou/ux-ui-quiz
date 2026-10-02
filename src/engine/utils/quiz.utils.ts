import { COMPARE_OPTIONS } from "../const/quiz.const";
import type { Choice, Quiz, QuizMeta } from "../types/quiz.types";

export const optionsOf = (quiz: Quiz | QuizMeta): readonly Choice[] => {
  switch (quiz.kind) {
    case "single":
    case "multiple":
      return quiz.choices;
    case "hotspot":
      return quiz.regions;
    case "compare":
      return COMPARE_OPTIONS;
  }
};

export const allowsSeveral = (quiz: Quiz | QuizMeta): boolean =>
  quiz.kind === "multiple" || (quiz.kind === "hotspot" && quiz.correct.length > 1);
