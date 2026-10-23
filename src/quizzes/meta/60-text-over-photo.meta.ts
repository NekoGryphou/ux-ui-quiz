import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "text-over-photo",
  kind: "single",
  title: { en: "White on snow", fr: "Blanc sur neige" },
  principle: { en: "Keep text readable over images", fr: "Garder le texte lisible sur les images" },
  scenario: {
    en: "A skier lands on a travel site’s homepage and looks for what it offers before searching.",
    fr: "Une personne qui fait du ski arrive sur la page d’accueil d’un site de voyage et cherche ce qu’il propose avant de lancer une recherche."
  },
  prompt: {
    en: "What is the main issue with this hero?",
    fr: "Quel est le principal problème de ce bandeau d’accueil ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The white headline sits on a bright snowy photo with no overlay, so parts of it disappear.",
        fr: "Le titre blanc est posé sur une photo de neige lumineuse sans voile, si bien qu’une partie disparaît."
      }
    },
    {
      id: "b",
      text: {
        en: "The search bar sits on top of the photo, where a bar below would leave the image clear.",
        fr: "La barre de recherche est posée sur la photo, alors qu’une barre en dessous laisserait l’image dégagée."
      }
    },
    {
      id: "c",
      text: {
        en: "The hero spans the full width, where a smaller image would bring the offers further up.",
        fr: "Le bandeau occupe toute la largeur, alors qu’une image plus petite ferait remonter les offres."
      }
    },
    {
      id: "d",
      text: {
        en: "The headline is left-aligned, where a centered headline would balance the photo better.",
        fr: "Le titre est aligné à gauche, alors qu’un titre centré équilibrerait mieux la photo."
      }
    }
  ],
  explanation: {
    en: [
      "White text on white snow and pale sky has almost no contrast: the headline and tagline fade in and out depending on what’s behind each word, and the photo can change at any time.",
      "Put text where the image is calm and dark, or add a scrim: a gradient or semi-transparent overlay behind the text, strong enough to keep 4.5:1 contrast over the brightest part of any photo.",
      "Search over a hero, full-width imagery and left-aligned headlines are all common, sound layout choices."
    ],
    fr: [
      "Du texte blanc sur de la neige blanche et un ciel pâle n’a presque aucun contraste : le titre et l’accroche apparaissent et disparaissent selon ce qui se trouve derrière chaque mot, et la photo peut changer à tout moment.",
      "Placez le texte là où l’image est calme et sombre, ou ajoutez un voile : un dégradé ou un fond semi-transparent derrière le texte, assez marqué pour garder un contraste de 4,5:1 sur la partie la plus claire de n’importe quelle photo.",
      "Une recherche sur le bandeau, une image pleine largeur et un titre aligné à gauche sont des choix de mise en page courants et solides."
    ]
  }
};
