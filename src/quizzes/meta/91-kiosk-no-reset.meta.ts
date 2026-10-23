import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "kiosk-no-reset",
  kind: "single",
  title: { en: "The previous customer’s order", fr: "La commande de la personne précédente" },
  principle: {
    en: "Reset shared screens after each person",
    fr: "Réinitialiser les écrans partagés après chaque personne"
  },
  scenario: {
    en: "A traveller walks up to a self-service kiosk at a station café that someone else just used.",
    fr: "Dans le café d’une gare, une personne s’approche d’une borne de commande que quelqu’un vient d’utiliser."
  },
  prompt: { en: "What is the main issue with this kiosk?", fr: "Quel est le principal problème de cette borne ?" },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The last customer’s receipt and loyalty details are still shown to the next person.",
        fr: "Le ticket et la carte de fidélité de la personne précédente restent affichés pour la suivante."
      }
    },
    {
      id: "b",
      text: {
        en: "The screen uses large buttons, where smaller ones would fit more items on the page.",
        fr: "L’écran utilise de grands boutons, alors que de plus petits afficheraient plus d’articles."
      }
    },
    {
      id: "c",
      text: {
        en: "The receipt lists every item, where showing only the total would be more discreet.",
        fr: "Le ticket détaille chaque article, alors qu’afficher seulement le total serait plus discret."
      }
    },
    {
      id: "d",
      text: {
        en: "The kiosk is in portrait, where a landscape screen would feel more like a laptop.",
        fr: "La borne est en portrait, alors qu’un écran paysage rappellerait davantage un ordinateur."
      }
    }
  ],
  explanation: {
    en: [
      "The kiosk never returned to its start screen: the next traveller sees the previous customer’s order, name, loyalty points and the last digits of their card, and could even reuse the open session.",
      "Shared screens should reset on their own: after a completed payment, and after a short inactivity timeout with a visible countdown (“Still there? Resetting in 10 s”), clearing all personal data.",
      "Large buttons suit kiosks, an itemised receipt is expected, and portrait screens are common for ordering."
    ],
    fr: [
      "La borne n’est jamais revenue à son écran d’accueil : la personne suivante voit la commande précédente, le nom, les points de fidélité et les derniers chiffres de la carte bancaire, et pourrait même réutiliser la session ouverte.",
      "Un écran partagé doit se réinitialiser tout seul : après un paiement validé, et après un court délai d’inactivité avec un compte à rebours visible (« Vous êtes toujours là ? Réinitialisation dans 10 s »), en effaçant toutes les données personnelles.",
      "Les grands boutons conviennent aux bornes, un ticket détaillé est attendu et les écrans en portrait sont courants pour commander."
    ]
  }
};
