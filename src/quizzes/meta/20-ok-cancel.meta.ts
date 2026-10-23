import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "ok-cancel",
  kind: "single",
  title: { en: "Cancel, or cancel?", fr: "Annuler, ou annuler ?" },
  principle: { en: "Label buttons with what they do", fr: "Nommer les boutons selon ce qu’ils font" },
  scenario: {
    en: "A user clicked “Cancel subscription” to see what would happen, but in the end they want to keep their Pro plan.",
    fr: "Une personne a cliqué sur « Annuler l’abonnement » pour voir ce qui se passerait, mais elle souhaite finalement garder son offre Pro."
  },
  prompt: {
    en: "What is the main issue with this dialog?",
    fr: "Quel est le principal problème de cette boîte de dialogue ?"
  },
  correct: ["b"],
  choices: [
    {
      id: "a",
      text: {
        en: "The title is a question, where a statement would tell users more directly what happens.",
        fr: "Le titre est une question, alors qu’une affirmation dirait plus directement ce qui va se passer."
      }
    },
    {
      id: "b",
      text: {
        en: "“Cancel” and “OK” don’t say what they do, and “Cancel” could mean either choice here.",
        fr: "« Annuler » et « OK » ne disent pas ce qu’ils font, et « Annuler » peut ici désigner les deux choix."
      }
    },
    {
      id: "c",
      text: {
        en: "The two buttons sit side by side, where stacking them would better fit small screens.",
        fr: "Les deux boutons sont côte à côte, alors que les empiler conviendrait mieux aux petits écrans."
      }
    },
    {
      id: "d",
      text: {
        en: "The dialog has both a close icon and a Cancel button, which duplicates the way out.",
        fr: "La boîte de dialogue a une icône de fermeture et un bouton Annuler, ce qui double la sortie."
      }
    }
  ],
  explanation: {
    en: [
      "When the action itself is “cancel”, a Cancel button is ambiguous: does it cancel the dialog or the subscription?",
      "Use labels that state the outcome: “Keep my plan” and “Cancel subscription”. Users should be able to decide from the buttons alone.",
      "A close icon alongside a dismiss button is a common, harmless pattern."
    ],
    fr: [
      "Quand l’action elle-même consiste à « annuler », un bouton Annuler est ambigu : annule-t-il la boîte de dialogue ou l’abonnement ?",
      "Utilisez des libellés qui annoncent le résultat : « Garder mon offre » et « Résilier l’abonnement ». On doit pouvoir choisir en lisant uniquement les boutons.",
      "Une icône de fermeture à côté d’un bouton de fermeture est un modèle courant et sans danger."
    ]
  }
};
