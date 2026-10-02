import { POSITION_LETTERS } from "../const/compare.const";

export const positionLetter = (index: number): string => POSITION_LETTERS[index] ?? String(index + 1);

export const isFromControl = (event: MouseEvent): boolean =>
  event.target instanceof Element && event.target.closest("button, dialog, input, a") !== null;
