import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "step-without-total",
  kind: "single",
  title: { en: "Step 2 of who knows", fr: "Étape 2 sur on ne sait combien" },
  principle: {
    en: "Show where users are in a multi-step task",
    fr: "Montrer où l’on en est dans une tâche en plusieurs étapes"
  },
  scenario: {
    en: "A shopper on their phone moves on to the next step of checkout.",
    fr: "Sur son téléphone, une personne passe à l’étape suivante de sa commande."
  },
  prompt: {
    en: "What is the main issue with this checkout step?",
    fr: "Quel est le principal problème de cette étape de commande ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The header says “Step 2” with no total, so the shopper can’t tell how much of checkout is left.",
        fr: "L’en-tête indique « Étape 2 » sans total, si bien qu’on ne sait pas ce qu’il reste de la commande."
      }
    },
    {
      id: "b",
      text: {
        en: "The back arrow sits in the top corner, where a button at the bottom would be easier to reach.",
        fr: "La flèche de retour est dans le coin supérieur, alors qu’un bouton en bas serait plus facile à atteindre."
      }
    },
    {
      id: "c",
      text: {
        en: "Delivery options are radio buttons, where a dropdown would take less room on a small screen.",
        fr: "Les modes de livraison sont des boutons radio, alors qu’une liste déroulante prendrait moins de place."
      }
    },
    {
      id: "d",
      text: {
        en: "The Continue button spans the full width, where a smaller button would feel less insistent.",
        fr: "Le bouton Continuer occupe toute la largeur, alors qu’un bouton plus petit paraîtrait moins insistant."
      }
    }
  ],
  explanation: {
    en: [
      "“Step 2” alone doesn’t answer the question shoppers ask at every step: how much is left? Without a total, one step to go and five steps to go look the same, and unsure shoppers give up.",
      "Show the position and the total (“Step 2 of 3”), or a stepper that names the remaining steps, so the effort ahead is visible.",
      "A top-left back arrow is the platform convention, radio buttons suit two or three visible options, and a full-width primary button is standard on mobile."
    ],
    fr: [
      "« Étape 2 » seul ne répond pas à la question qu’on se pose à chaque étape : combien en reste-t-il ? Sans total, une étape restante ou cinq se ressemblent, et dans le doute, on abandonne.",
      "Affichez la position et le total (« Étape 2 sur 3 »), ou un indicateur d’étapes qui nomme celles qui restent, pour rendre l’effort à venir visible.",
      "Une flèche de retour en haut à gauche est la convention de la plateforme, des boutons radio conviennent à deux ou trois options visibles, et un bouton principal pleine largeur est la norme sur mobile."
    ]
  }
};
