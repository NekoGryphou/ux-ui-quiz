import { t } from "../../shared/locale.svelte";
import { APP_NAME } from "../const/app.const";
import type { QuizScreen, Screen } from "../types/screen.types";

/**
 * @private
 * @desc Returns the title part of a quiz screen.
 *
 * @param screen - Quiz screen.
 *
 * @returns The heading, e.g. "Question 3 of 20".
 */
const quizHeading = (screen: QuizScreen): string => {
  const position: string = `${String(screen.index + 1)} ${t("of", "sur")} ${String(screen.run.total)}`;
  if (screen.mode === "review") return `${t("Review", "Revue")} ${position}`;
  return `${screen.target === "main" ? "Question" : t("Practice question", "Question d’entraînement")} ${position}`;
};

/**
 * @export
 * @desc Returns the document title of a screen.
 *
 * @param screen - Screen shown.
 *
 * @returns The document title.
 */
export const pageTitle = (screen: Screen): string => {
  switch (screen.name) {
    case "home":
    case "redirect":
      return APP_NAME;
    case "kit":
      return `Mock kit · ${APP_NAME}`;
    case "quiz":
      return `${quizHeading(screen)} · ${APP_NAME}`;
    case "results":
      return `${screen.target === "main" ? t("Results", "Résultats") : t("Practice results", "Résultats de l’entraînement")} · ${APP_NAME}`;
  }
};
