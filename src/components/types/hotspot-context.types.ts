import type { ChoiceOutcome } from "../../engine/types/quiz.types";

export interface HotspotContext {
  readonly interactive: boolean;
  readonly isSelected: (id: string) => boolean;
  readonly outcomeOf: (id: string) => ChoiceOutcome;
  readonly labelOf: (id: string) => string;
  readonly toggle: (id: string) => void;
}
