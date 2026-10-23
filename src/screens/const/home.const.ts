import type { HomeStep } from "../types/home.types";

/**
 * @export
 * @desc How-it-works steps shown on the home screen.
 */
export const HOME_STEPS: readonly HomeStep[] = [
  {
    title: { en: "Inspect", fr: "Observer" },
    body: {
      en: "Each question shows a realistic product screen with one or more UX/UI problems.",
      fr: "Chaque question présente un écran produit réaliste avec un ou plusieurs problèmes d’UX/UI."
    }
  },
  {
    title: { en: "Decide", fr: "Choisir" },
    body: {
      en: "Pick the issue, or select every issue when the question allows several answers.",
      fr: "Désignez le problème, ou tous les problèmes quand la question accepte plusieurs réponses."
    }
  },
  {
    title: { en: "Learn", fr: "Apprendre" },
    body: {
      en: "Get the principle behind each answer, then review the questions you missed.",
      fr: "Découvrez le principe derrière chaque réponse, puis revoyez les questions manquées."
    }
  }
];
