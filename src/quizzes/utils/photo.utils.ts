import type { Locale } from "../../shared/types/locale.types";
import type { StockPhoto } from "../types/quiz-mocks.types";

/**
 * @export
 * @desc Credit line for the Wikimedia Commons photos used by a quiz.
 *
 * @param photos - Photos to credit.
 * @param locale - Language of the sentence.
 *
 * @returns The credit sentence.
 */
export const photoCredits = (photos: StockPhoto[], locale: Locale): string => {
  const list: string = [...new Set(photos)]
    .map((photo: StockPhoto): string => `${photo.title} (${photo.license})`)
    .join(", ");
  return locale === "fr" ? `Photos issues de Wikimedia Commons : ${list}.` : `Photos from Wikimedia Commons: ${list}.`;
};
