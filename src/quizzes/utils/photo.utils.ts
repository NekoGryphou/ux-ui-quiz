import type { StockPhoto } from "../types/quiz-mocks.types";

/**
 * @export
 * @desc Credit line for the Wikimedia Commons photos used by a quiz.
 *
 * @param photos - Photos to credit.
 *
 * @returns The credit sentence.
 */
export const photoCredits = (photos: StockPhoto[]): string =>
  `Photos from Wikimedia Commons: ${[...new Set(photos)].map((photo: StockPhoto): string => `${photo.title} (${photo.license})`).join(", ")}.`;
