import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "toolbar-bloat",
  kind: "hotspot",
  title: {
    en: "Five search bars and a sliver of web",
    fr: "Cinq barres de recherche et un filet de Web"
  },
  principle: {
    en: "Protect the content area from chrome and add-ons",
    fr: "Préserver la zone de contenu face à l’interface du navigateur et aux extensions"
  },
  scenario: {
    en: "A retiree opens their browser to read the local news, on the family computer in 2007.",
    fr: "Une personne retraitée ouvre son navigateur pour lire l’actualité locale, sur l’ordinateur familial, en 2007."
  },
  prompt: {
    en: "Click every part of the window that eats into the page.",
    fr: "Cliquez sur chaque partie de la fenêtre qui empiète sur la page."
  },
  correct: ["toolbars", "weather"],
  regions: [
    { id: "title", text: { en: "Window title bar", fr: "Barre de titre" } },
    { id: "menu", text: { en: "Menu bar", fr: "Barre de menus" } },
    { id: "address", text: { en: "Address bar", fr: "Barre d’adresse" } },
    { id: "toolbars", text: { en: "Add-on toolbars", fr: "Barres d’outils ajoutées" } },
    { id: "weather", text: { en: "Weather ticker", fr: "Bandeau météo" } },
    { id: "page", text: { en: "News page", fr: "Page d’actualités" } },
    { id: "status", text: { en: "Status bar", fr: "Barre d’état" } }
  ],
  explanation: {
    en: [
      "Four bundled search toolbars and a scrolling weather ticker, installed alongside free downloads, stack on top of the page. The news itself is left with a thin strip at the bottom, and every search box does the same thing.",
      "Chrome should take as little room as possible: one address bar that also searches, add-ons that ask before installing and stay small, and a content area that gets most of the screen.",
      "The title, menu, address and status bars are standard browser chrome of the time."
    ],
    fr: [
      "Quatre barres de recherche, installées en même temps que des logiciels gratuits, et un bandeau météo défilant s’empilent au-dessus de la page. L’actualité elle-même ne dispose plus que d’une mince bande en bas, et tous ces champs de recherche font la même chose.",
      "L’interface du navigateur doit prendre le moins de place possible : une seule barre d’adresse qui sert aussi à rechercher, des extensions qui demandent avant de s’installer et restent discrètes, et une zone de contenu qui occupe l’essentiel de l’écran.",
      "Les barres de titre, de menus, d’adresse et d’état faisaient partie de l’interface standard des navigateurs de l’époque."
    ]
  }
};
