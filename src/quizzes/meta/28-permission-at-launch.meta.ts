import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "permission-at-launch",
  kind: "single",
  title: { en: "Asking before giving", fr: "Demander avant de donner" },
  principle: {
    en: "Ask for permissions in context, once the value is clear",
    fr: "Demander les autorisations en contexte, une fois l’intérêt évident"
  },
  scenario: {
    en: "Someone installs a grocery delivery app and opens it for the very first time.",
    fr: "Une personne installe une app de livraison de courses et l’ouvre pour la toute première fois."
  },
  prompt: {
    en: "What is the main issue with this screen?",
    fr: "Quel est le principal problème de cet écran ?"
  },
  correct: ["b"],
  choices: [
    {
      id: "a",
      text: {
        en: "The prompt uses the system dialog instead of a branded screen that matches the app.",
        fr: "La demande utilise la boîte de dialogue système au lieu d’un écran aux couleurs de l’app."
      }
    },
    {
      id: "b",
      text: {
        en: "The app asks to send notifications at first launch, before showing any value.",
        fr: "L’app demande à envoyer des notifications dès le premier lancement, avant d’avoir montré son intérêt."
      }
    },
    {
      id: "c",
      text: {
        en: "The dialog offers only Allow and Don’t Allow, with no option to decide later.",
        fr: "La boîte de dialogue ne propose que Autoriser et Ne pas autoriser, sans option pour décider plus tard."
      }
    },
    {
      id: "d",
      text: {
        en: "The splash screen behind the dialog shows only the logo, with no loading progress.",
        fr: "L’écran de démarrage derrière la boîte de dialogue n’affiche que le logo, sans progression du chargement."
      }
    }
  ],
  explanation: {
    en: [
      "At first launch the user has no reason to say yes: they don’t know yet what the notifications would be for. Many tap “Don’t Allow”, and on iOS that choice is hard to reverse.",
      "Ask in context, when the benefit is obvious: right after placing an order, “Get notified when your groceries are on their way?”",
      "The system dialog itself can’t be restyled or given extra buttons; what the app controls is when it appears."
    ],
    fr: [
      "Au premier lancement, rien ne pousse à dire oui : on ne sait pas encore à quoi serviraient ces notifications. Beaucoup touchent « Ne pas autoriser », et sur iOS ce choix est difficile à annuler.",
      "Demandez en contexte, quand le bénéfice est évident : juste après une commande, « Recevoir une alerte quand vos courses sont en route ? »",
      "La boîte de dialogue système ne peut être ni restylée ni enrichie de boutons ; ce que l’app maîtrise, c’est le moment où elle apparaît."
    ]
  }
};
