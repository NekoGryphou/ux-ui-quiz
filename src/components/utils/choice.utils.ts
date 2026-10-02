import type { ChoiceOutcome } from "../../engine/types/quiz.types";

export const outcomeLabel = (outcome: ChoiceOutcome, several: boolean): string => {
  switch (outcome) {
    case "correct":
      return "Correct";
    case "wrong":
      return "Incorrect";
    case "missed":
      return several ? "Missed" : "Correct answer";
    case "neutral":
      return "";
  }
};
