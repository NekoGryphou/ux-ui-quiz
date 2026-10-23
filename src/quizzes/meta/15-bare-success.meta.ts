import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "bare-success",
  kind: "single",
  title: { en: "Success that confirms nothing", fr: "Un succès qui ne confirme rien" },
  principle: {
    en: "Confirm critical outcomes with the details",
    fr: "Confirmer les résultats critiques avec les détails"
  },
  scenario: {
    en: "A user sends €1,200 for this month’s rent to their landlord in a banking app and taps Confirm.",
    fr: "Dans son appli bancaire, une personne envoie 1 200 € pour le loyer du mois à son propriétaire et touche Confirmer."
  },
  prompt: {
    en: "What is the main issue with this confirmation?",
    fr: "Quel est le principal problème de cette confirmation ?"
  },
  correct: ["b"],
  choices: [
    {
      id: "a",
      text: {
        en: "The success state relies on a green check, which color-blind users may not perceive.",
        fr: "La réussite repose sur une coche verte, que les personnes daltoniennes risquent de ne pas percevoir."
      }
    },
    {
      id: "b",
      text: {
        en: "The screen says “Done!” but not the amount, the recipient, or when the money arrives.",
        fr: "L’écran indique « C’est fait ! » mais ni le montant, ni le bénéficiaire, ni la date d’arrivée des fonds."
      }
    },
    {
      id: "c",
      text: {
        en: "The OK button spans the full width, so it’s hard to tell apart from a banner.",
        fr: "Le bouton OK occupe toute la largeur, si bien qu’on le confond facilement avec une bannière."
      }
    },
    {
      id: "d",
      text: {
        en: "The screen offers no shortcut to send another transfer to the same recipient.",
        fr: "L’écran ne propose aucun raccourci pour refaire un virement au même bénéficiaire."
      }
    }
  ],
  explanation: {
    en: [
      "After a high-stakes action, users need proof: the amount, the recipient, the reference, and when it will arrive.",
      "A summary plus a way to keep a record (receipt, share, download) prevents anxious double payments and support calls.",
      "The check icon comes with the word “Done!”, so meaning doesn’t rely on color alone."
    ],
    fr: [
      "Après une action à fort enjeu, il faut une preuve : le montant, le bénéficiaire, la référence et la date d’arrivée.",
      "Un récapitulatif et un moyen d’en garder une trace (reçu, partage, téléchargement) évitent les doubles paiements par inquiétude et les appels au support.",
      "La coche est accompagnée des mots « C’est fait ! », donc le sens ne repose pas sur la seule couleur."
    ]
  }
};
