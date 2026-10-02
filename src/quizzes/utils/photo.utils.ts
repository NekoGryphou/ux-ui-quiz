import type { StockPhoto } from "../types/quiz-mocks.types";

export const photoCredits = (photos: StockPhoto[]): string =>
  `Photos from Wikimedia Commons: ${[...new Set(photos)].map((photo: StockPhoto): string => `${photo.title} (${photo.license})`).join(", ")}.`;
