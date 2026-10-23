import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "vanishing-undo",
  kind: "single",
  motion: true,
  title: { en: "Undo, for two seconds only", fr: "Annuler, pendant deux secondes seulement" },
  principle: {
    en: "Give people enough time to act on a message",
    fr: "Laisser le temps d’agir sur un message"
  },
  scenario: {
    en: "A user archives the wrong email by accident and reaches for the Undo button. Watch the screen.",
    fr: "Une personne archive le mauvais e-mail par erreur et cherche à toucher le bouton Annuler. Observez l’écran."
  },
  prompt: {
    en: "What is the main issue with this screen?",
    fr: "Quel est le principal problème de cet écran ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The Undo toast vanishes after two seconds, before most people can reach and tap it.",
        fr: "Le message avec Annuler disparaît après deux secondes, avant que la plupart des gens puissent le toucher."
      }
    },
    {
      id: "b",
      text: {
        en: "The toast sits at the bottom, where a banner at the top would be seen more quickly.",
        fr: "Le message s’affiche en bas, alors qu’un bandeau en haut serait repéré plus rapidement."
      }
    },
    {
      id: "c",
      text: {
        en: "The toast is dark on a light app, where a light toast would match the theme better.",
        fr: "Le message est sombre dans une app claire, alors qu’un message clair s’accorderait mieux au thème."
      }
    },
    {
      id: "d",
      text: {
        en: "Archiving happens on swipe, where a confirmation dialog would avoid any mistakes.",
        fr: "L’archivage se fait d’un balayage, alors qu’une demande de confirmation éviterait toute erreur."
      }
    }
  ],
  explanation: {
    en: [
      "Undo is the safety net for a quick swipe, but the toast is gone after about two seconds: just enough to read “Archived”, not enough to move a thumb to Undo, and far too short for screen reader or switch users.",
      "Keep undo messages up long enough (5–10 seconds), pause the timer while they’re hovered or focused, and keep the action reachable afterwards (for example in an “Archived” view).",
      "A bottom toast, a dark toast and swipe-to-archive with undo are all common, sound patterns."
    ],
    fr: [
      "Annuler est le filet de sécurité d’un balayage rapide, mais le message disparaît au bout de deux secondes environ : juste le temps de lire « Conversation archivée », pas celui d’amener le pouce sur Annuler, et bien trop court pour les personnes qui utilisent un lecteur d’écran ou un contacteur.",
      "Laissez les messages d’annulation affichés assez longtemps (5 à 10 secondes), mettez le minuteur en pause au survol ou au focus, et gardez l’action accessible ensuite (par exemple dans une vue « Archives »).",
      "Un message en bas, un message sombre et l’archivage par balayage avec annulation sont des modèles courants et solides."
    ]
  }
};
