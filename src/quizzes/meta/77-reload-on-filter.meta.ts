import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "reload-on-filter",
  kind: "single",
  motion: true,
  title: { en: "One click, one reload", fr: "Un clic, un rechargement" },
  principle: {
    en: "Let people set several filters before results reload",
    fr: "Permettre de régler plusieurs filtres avant de recharger les résultats"
  },
  scenario: {
    en: "A runner narrows down trail shoes by ticking a size, two brands and a colour in the sidebar.",
    fr: "Une personne qui court cherche des chaussures de trail et coche une pointure, deux marques et une couleur dans la barre latérale."
  },
  prompt: {
    en: "What is the main issue with these filters?",
    fr: "Quel est le principal problème de ces filtres ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "Every tick reloads the page and jumps back to the top, so setting four filters means four waits.",
        fr: "Chaque case cochée recharge la page et remonte en haut : régler quatre filtres impose quatre attentes."
      }
    },
    {
      id: "b",
      text: {
        en: "The filters sit in a left sidebar, where a row of chips above the grid would take less room.",
        fr: "Les filtres sont dans une barre latérale, alors qu’une rangée de puces au-dessus de la grille prendrait moins de place."
      }
    },
    {
      id: "c",
      text: {
        en: "Each filter shows a product count, where plain labels would keep the long sidebar calmer.",
        fr: "Chaque filtre affiche un nombre de produits, alors que des libellés seuls allégeraient cette longue barre latérale."
      }
    },
    {
      id: "d",
      text: {
        en: "Brands are listed alphabetically, where sorting by popularity would surface the big names.",
        fr: "Les marques sont classées par ordre alphabétique, alors qu’un tri par popularité ferait ressortir les grands noms."
      }
    }
  ],
  explanation: {
    en: [
      "The runner wants size 43, two brands and blue. Each tick triggers a full page reload: the grid blanks out, the page jumps to the top, the sidebar loses its scroll position, and the next checkbox has to be found again, four times in a row.",
      "Update results in place without a reload, keep scroll and focus where they were, and show the new count as filters change. On mobile, or when results are slow, collect choices first and apply them with one “Show 42 results” button.",
      "A sidebar, product counts and alphabetical brands are all common and helpful filter patterns."
    ],
    fr: [
      "La personne veut du 43, deux marques et du bleu. Chaque case cochée déclenche un rechargement complet : la grille se vide, la page remonte en haut, la barre latérale perd sa position de défilement et il faut retrouver la case suivante, quatre fois de suite.",
      "Mettez les résultats à jour sur place sans recharger, conservez le défilement et le focus, et affichez le nouveau nombre de résultats au fil des filtres. Sur mobile, ou quand les résultats sont lents, collectez d’abord les choix puis appliquez-les avec un seul bouton « Afficher 42 résultats ».",
      "Une barre latérale, le nombre de produits par filtre et des marques triées par ordre alphabétique sont des modèles de filtres courants et utiles."
    ]
  }
};
