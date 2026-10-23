import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "stacked-interruptions",
  kind: "hotspot",
  title: {
    en: "Three interruptions before the first sentence",
    fr: "Trois interruptions avant la première phrase"
  },
  principle: {
    en: "Don’t stack interruptions on top of the content",
    fr: "Ne pas empiler les interruptions par-dessus le contenu"
  },
  scenario: {
    en: "A reader follows a link from a newsletter to read one article on a design blog.",
    fr: "Une personne suit le lien d’une newsletter pour lire un article sur un blog de design."
  },
  prompt: {
    en: "Click every element that gets between the reader and the article.",
    fr: "Cliquez sur chaque élément qui s’interpose entre la lecture et l’article."
  },
  correct: ["newsletter", "chat", "cookies"],
  regions: [
    { id: "site-header", text: { en: "Site header", fr: "En-tête du site" } },
    { id: "breadcrumbs", text: { en: "Breadcrumbs", fr: "Fil d’Ariane" } },
    { id: "article", text: { en: "Article", fr: "Article" } },
    { id: "newsletter", text: { en: "Newsletter sign-up", fr: "Inscription à la newsletter" } },
    { id: "chat", text: { en: "Chat message", fr: "Message du chat" } },
    { id: "cookies", text: { en: "Cookie notice", fr: "Bandeau cookies" } }
  ],
  explanation: {
    en: [
      "Before reading a single line, the visitor must close a newsletter modal, a chat bubble that opened on its own, and a cookie notice covering the bottom of the page.",
      "Each one may be justified alone; stacked on arrival they turn reading into an obstacle course. Space them out: consent first and compact, offers after engagement (e.g. at the end of the article), chat only on request.",
      "The header and breadcrumbs are navigation, not interruptions."
    ],
    fr: [
      "Avant de lire une seule ligne, il faut fermer une fenêtre d’inscription à la newsletter, une bulle de chat ouverte d’elle-même et un bandeau cookies qui masque le bas de la page.",
      "Chacun peut se justifier isolément ; empilés dès l’arrivée, ils transforment la lecture en parcours d’obstacles. Échelonnez-les : le consentement d’abord, en format compact, les offres après un premier engagement (par exemple en fin d’article), le chat uniquement à la demande.",
      "L’en-tête et le fil d’Ariane servent à naviguer, ce ne sont pas des interruptions."
    ]
  }
};
