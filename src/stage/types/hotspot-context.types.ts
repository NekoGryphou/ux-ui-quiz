import type { ChoiceOutcome } from "../../engine/types/quiz.types";

/**
 * @export
 * @desc Answer state and actions the quiz screen shares with hotspots in a preview.
 *
 * @property interactive - Whether areas can still be toggled.
 * @property isSelected - Whether an area is selected.
 * @property outcomeOf - Scored outcome of an area.
 * @property labelOf - Accessible label of an area.
 * @property toggle - Toggles an area.
 */
export interface HotspotContext {
  /** Whether areas can still be toggled. */
  readonly interactive: boolean;

  /** Whether an area is selected. */
  readonly isSelected: (id: string) => boolean;

  /** Scored outcome of an area. */
  readonly outcomeOf: (id: string) => ChoiceOutcome;

  /** Accessible label of an area. */
  readonly labelOf: (id: string) => string;

  /** Toggles an area. */
  readonly toggle: (id: string) => void;
}
