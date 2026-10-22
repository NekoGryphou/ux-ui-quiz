import { POSITION_LETTERS } from "../const/compare.const";

/**
 * @export
 * @desc Display letter of a compare version.
 *
 * @param index - Zero-based position.
 *
 * @returns A or B, else the one-based number.
 */
export const positionLetter = (index: number): string => POSITION_LETTERS[index] ?? String(index + 1);

/**
 * @export
 * @desc Whether a click came from an interactive control inside a compare card.
 *
 * @param event - Click event.
 *
 * @returns True if the card must not handle it.
 */
export const isFromControl = (event: MouseEvent): boolean =>
  event.target instanceof Element && event.target.closest("button, dialog, input, label, a") !== null;
