import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "frames-site",
  kind: "single",
  title: { en: "Every page is the homepage", fr: "Chaque page est la page d’accueil" },
  principle: { en: "Give every page its own address", fr: "Donner à chaque page sa propre adresse" },
  scenario: {
    en: "A hiker finds the perfect trail page on a 2001 hiking club site and wants to send the link to a friend.",
    fr: "Une personne trouve la randonnée idéale sur le site d’un club de randonnée de 2001 et veut en envoyer le lien à un ami."
  },
  prompt: {
    en: "What is the main issue with this site?",
    fr: "Quel est le principal problème de ce site ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The site uses frames, so the address bar shows the homepage for every page you visit.",
        fr: "Le site utilise des cadres : la barre d’adresse affiche la page d’accueil quelle que soit la page visitée."
      }
    },
    {
      id: "b",
      text: {
        en: "The left menu is a separate column, where a top bar would leave more width for text.",
        fr: "Le menu de gauche forme une colonne à part, alors qu’une barre en haut laisserait plus de largeur au texte."
      }
    },
    {
      id: "c",
      text: {
        en: "Trail names are underlined links, where buttons would make each one easier to click.",
        fr: "Les randonnées sont des liens soulignés, alors que des boutons seraient plus faciles à cliquer."
      }
    },
    {
      id: "d",
      text: {
        en: "The page uses a serif font, where a sans serif would be easier to read on old screens.",
        fr: "La page utilise une police à empattements, alors qu’une linéale serait plus lisible sur les vieux écrans."
      }
    }
  ],
  explanation: {
    en: [
      "The trail page loads inside a frame, so the address bar still reads index.html. Copying the link, bookmarking it or using Back all lead to the homepage, and search engines can’t point to the trail either.",
      "Every distinct piece of content needs its own URL that reloads exactly that view. That rule still applies to modern single-page apps: update the address as people navigate.",
      "A side menu, underlined links and a serif font are fine, even if dated."
    ],
    fr: [
      "La page de la randonnée se charge dans un cadre, donc la barre d’adresse affiche toujours index.html. Copier le lien, l’ajouter aux favoris ou utiliser Précédent ramène à la page d’accueil, et les moteurs de recherche ne peuvent pas non plus pointer vers la randonnée.",
      "Chaque contenu distinct a besoin de sa propre URL, qui recharge exactement cette vue. La règle vaut toujours pour les applications monopages modernes : mettez à jour l’adresse au fil de la navigation.",
      "Un menu latéral, des liens soulignés et une police à empattements conviennent très bien, même s’ils font daté."
    ]
  }
};
