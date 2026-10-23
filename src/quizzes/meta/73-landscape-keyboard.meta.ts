import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "landscape-keyboard",
  kind: "single",
  title: { en: "A 30-pixel window to type in", fr: "Une fenêtre de 30 pixels pour écrire" },
  principle: {
    en: "Keep fixed bars from eating small screens",
    fr: "Empêcher les barres fixes de dévorer les petits écrans"
  },
  scenario: {
    en: "A traveller turns their phone sideways to type a long delivery note while sitting on a train.",
    fr: "Dans le train, une personne tourne son téléphone à l’horizontale pour taper une longue consigne de livraison."
  },
  prompt: { en: "What is the main issue with this screen?", fr: "Quel est le principal problème de cet écran ?" },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "Fixed bars and the keyboard cover the screen, so only a sliver of the field is left.",
        fr: "Les barres fixes et le clavier couvrent l’écran, si bien qu’il ne reste qu’un filet du champ."
      }
    },
    {
      id: "b",
      text: {
        en: "The note field is a plain text area, where a dropdown of preset notes would be faster.",
        fr: "La consigne est une simple zone de texte, alors qu’une liste de consignes prédéfinies serait plus rapide."
      }
    },
    {
      id: "c",
      text: {
        en: "The promo banner uses a bright color, where a muted tone would feel more trustworthy.",
        fr: "La bannière promo utilise une couleur vive, alors qu’un ton sourd inspirerait plus confiance."
      }
    },
    {
      id: "d",
      text: {
        en: "The chat button sits bottom right, where bottom left would suit right-handed people.",
        fr: "Le bouton de chat est en bas à droite, alors qu’en bas à gauche il conviendrait aux droitiers."
      }
    }
  ],
  explanation: {
    en: [
      "In landscape, the sticky header, the promo strip, the floating chat bar and the keyboard all stay put: together they leave about 30 pixels for the field being typed in, so the traveller types blind.",
      "Let fixed elements step aside on short viewports: hide or collapse sticky bars while typing, avoid stacking several of them, and test pages in landscape with the keyboard open.",
      "A free text area suits a delivery note, the banner color is a brand choice, and a bottom-right chat button is a common placement."
    ],
    fr: [
      "En mode paysage, l’en-tête fixe, le bandeau promo, la barre de chat flottante et le clavier restent tous en place : ensemble, ils laissent environ 30 pixels au champ en cours de saisie, et la personne tape à l’aveugle.",
      "Faites s’effacer les éléments fixes sur les écrans peu hauts : masquez ou réduisez les barres fixes pendant la saisie, évitez d’en empiler plusieurs, et testez les pages en paysage avec le clavier ouvert.",
      "Une zone de texte libre convient à une consigne de livraison, la couleur de la bannière est un choix de marque, et un bouton de chat en bas à droite est un emplacement courant."
    ]
  }
};
