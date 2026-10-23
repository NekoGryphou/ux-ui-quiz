import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "command-recall",
  kind: "single",
  title: { en: "COMMAND ===>", fr: "COMMANDE ===>" },
  principle: {
    en: "Show the available actions instead of making users recall them",
    fr: "Montrer les actions disponibles au lieu de forcer à s’en souvenir"
  },
  scenario: {
    en: "A warehouse clerk who joined last week needs to put a customer’s order on hold.",
    fr: "Une personne arrivée la semaine dernière à l’entrepôt doit mettre en attente une commande client."
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
        en: "Nothing on screen lists the available commands, so the clerk must remember the right code.",
        fr: "Rien à l’écran ne liste les commandes disponibles, il faut donc se souvenir du bon code."
      }
    },
    {
      id: "b",
      text: {
        en: "The screen uses green text on black, where dark text on a light background would read better.",
        fr: "L’écran affiche du texte vert sur noir, alors qu’un texte foncé sur fond clair serait plus lisible."
      }
    },
    {
      id: "c",
      text: {
        en: "Every label is in capitals, which reads a little slower than sentence case in long descriptions.",
        fr: "Tous les libellés sont en capitales, un peu plus lentes à lire que les minuscules dans un long texte."
      }
    },
    {
      id: "d",
      text: {
        en: "The order list pages by six lines, where a scrolling list would avoid jumping between pages.",
        fr: "La liste des commandes avance par pages de six lignes, alors qu’une liste défilante éviterait ces sauts."
      }
    }
  ],
  explanation: {
    en: [
      "The screen shows orders and a “COMMAND ===>” prompt, but no hint of what can be typed there: holding an order means already knowing it’s “HLD” followed by the order number.",
      "Recognition beats recall: list the commands on screen, such as a function-key legend (“F3=Exit F6=Hold F10=Release”), so newcomers can act and experts can still type fast.",
      "Green on black has strong contrast, and capitals and paging are conventions of these terminals rather than blockers."
    ],
    fr: [
      "L’écran affiche des commandes clients et une invite « COMMANDE ===> », sans aucune indication de ce qu’on peut y taper : pour mettre une commande en attente, il faut déjà savoir que c’est « HLD » suivi du numéro de commande.",
      "Reconnaître vaut mieux que se souvenir : listez les commandes à l’écran, par exemple avec une légende des touches de fonction (« F3=Quitter F6=Attente F10=Libérer »), pour que les débuts soient simples sans ralentir la saisie experte.",
      "Le vert sur noir offre un fort contraste, et les capitales comme la pagination sont des conventions de ces terminaux plutôt que des obstacles."
    ]
  }
};
