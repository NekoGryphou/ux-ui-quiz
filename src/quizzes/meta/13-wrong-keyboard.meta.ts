import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "wrong-keyboard",
  kind: "single",
  title: { en: "Letters for a number", fr: "Des lettres pour un numéro" },
  principle: { en: "Match the keyboard to the expected input", fr: "Adapter le clavier à la saisie attendue" },
  scenario: {
    en: "A customer is paying for concert tickets on their phone and taps the card number field.",
    fr: "Une personne paie des billets de concert sur son téléphone et touche le champ du numéro de carte."
  },
  prompt: { en: "What is the main issue on this screen?", fr: "Quel est le principal problème de cet écran ?" },
  correct: ["b"],
  choices: [
    {
      id: "a",
      text: {
        en: "The card number field shows no card network logo to confirm the type of card.",
        fr: "Le champ du numéro de carte n’affiche aucun logo de réseau pour confirmer le type de carte."
      }
    },
    {
      id: "b",
      text: {
        en: "Tapping the card number opens a full letter keyboard instead of a number pad.",
        fr: "Toucher le numéro de carte ouvre un clavier alphabétique complet au lieu d’un pavé numérique."
      }
    },
    {
      id: "c",
      text: {
        en: "The keyboard covers the lower half of the screen, hiding the Pay button below.",
        fr: "Le clavier couvre la moitié basse de l’écran et masque le bouton Payer situé en dessous."
      }
    },
    {
      id: "d",
      text: {
        en: "The field label sits above the input, where a floating label would save space.",
        fr: "Le libellé du champ est placé au-dessus, alors qu’un libellé flottant ferait gagner de la place."
      }
    }
  ],
  explanation: {
    en: [
      "A card number is digits only, yet the user gets a letter keyboard and has to switch layouts for every group of digits.",
      'On the web, set inputmode="numeric" and autocomplete="cc-number": phones then show a number pad and can offer saved cards.',
      "A keyboard covering part of the screen is normal: the page should scroll so the Pay button stays reachable."
    ],
    fr: [
      "Un numéro de carte ne contient que des chiffres, pourtant le clavier affiché est alphabétique : il faut changer de disposition à chaque groupe de chiffres.",
      'Sur le web, définissez inputmode="numeric" et autocomplete="cc-number" : les téléphones affichent alors un pavé numérique et peuvent proposer les cartes enregistrées.',
      "Qu’un clavier couvre une partie de l’écran est normal : la page doit défiler pour que le bouton Payer reste accessible."
    ]
  }
};
