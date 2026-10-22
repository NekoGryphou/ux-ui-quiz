import type { ChoiceOutcome } from "../../engine/types/quiz.types";

/**
 * @export
 * @desc Tag text for a choice outcome, empty for neutral choices.
 *
 * @param outcome - Choice outcome.
 * @param several - Whether several answers were expected.
 *
 * @returns The tag text.
 */
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
