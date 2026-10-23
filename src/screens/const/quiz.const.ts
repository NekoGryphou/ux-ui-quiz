import type { QuizMode } from "../../app/types/screen.types";
import type { QuizKind } from "../../engine/types/quiz.types";
import type { Localized } from "../../shared/types/locale.types";
import type { NavLabels } from "../types/quiz-screen.types";

/**
 * @export
 * @desc Question heading for each quiz kind.
 */
export const QUESTION_HEADINGS: Readonly<Record<QuizKind, Localized<string>>> = {
  single: { en: "What's wrong with this screen?", fr: "Qu’est-ce qui ne va pas sur cet écran ?" },
  multiple: { en: "What's wrong with this screen?", fr: "Qu’est-ce qui ne va pas sur cet écran ?" },
  hotspot: { en: "Where is the problem?", fr: "Où est le problème ?" },
  compare: { en: "Which version works better?", fr: "Quelle version fonctionne le mieux ?" }
};

/**
 * @export
 * @desc Next and last step button labels for each quiz mode.
 */
export const NAV_LABELS: Readonly<Record<QuizMode, Localized<NavLabels>>> = {
  answer: {
    en: { step: "Next question", end: "See results" },
    fr: { step: "Question suivante", end: "Voir les résultats" }
  },
  review: {
    en: { step: "Next", end: "Back to results" },
    fr: { step: "Suivante", end: "Retour aux résultats" }
  }
};
