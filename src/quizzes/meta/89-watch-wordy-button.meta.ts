import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "watch-wordy-button",
  kind: "single",
  title: { en: "A paragraph on your wrist", fr: "Un paragraphe au poignet" },
  principle: {
    en: "Write for the smallest screen it will appear on",
    fr: "Écrire pour le plus petit écran d’affichage"
  },
  scenario: {
    en: "A cyclist glances at their watch at a red light when a delivery notification arrives.",
    fr: "Une personne à vélo jette un œil à sa montre à un feu rouge quand une notification de livraison arrive."
  },
  prompt: {
    en: "What is the main issue with this notification?",
    fr: "Quel est le principal problème de cette notification ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The message and buttons are full sentences, cut off on a screen read in a glance.",
        fr: "Le message et le bouton sont des phrases entières, tronquées sur un écran lu d’un coup d’œil."
      }
    },
    {
      id: "b",
      text: {
        en: "The card is white, where a dark card would save battery on the watch screen.",
        fr: "La carte est blanche, alors qu’une carte sombre économiserait la batterie de la montre."
      }
    },
    {
      id: "c",
      text: {
        en: "The app icon sits at the top, where a smaller icon would leave more room for text.",
        fr: "L’icône de l’app est en haut, alors qu’une icône plus petite laisserait plus de place au texte."
      }
    },
    {
      id: "d",
      text: {
        en: "The action is a round button, where a text link would take less room on the face.",
        fr: "L’action est un bouton arrondi, alors qu’un lien texte prendrait moins de place sur le cadran."
      }
    }
  ],
  explanation: {
    en: [
      "The text was written for a phone: on a watch, the message and the buttons are truncated mid-word, and the cyclist has two seconds at a red light to guess what the action button will do.",
      "Write watch notifications as a headline people can read in a glance (“Parcel at the door”), with one or two very short actions (“Leave”, “Reschedule”). Put the details in the phone app.",
      "A light card, an app icon and a single action button are the normal watch patterns."
    ],
    fr: [
      "Le texte a été écrit pour un téléphone : sur une montre, le message et le bouton sont coupés en plein mot, et la personne n’a que deux secondes au feu rouge pour deviner ce que fera le bouton d’action.",
      "Rédigez les notifications de montre comme un titre lisible d’un coup d’œil (« Colis devant la porte »), avec une ou deux actions très courtes (« Déposer », « Reporter »). Gardez les détails pour l’app du téléphone.",
      "Une carte claire, une icône d’app et un seul bouton d’action sont les modèles habituels sur montre."
    ]
  }
};
