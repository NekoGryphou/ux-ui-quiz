import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "marquee-news",
  kind: "hotspot",
  motion: true,
  title: { en: "News that won’t sit still", fr: "Des nouvelles qui ne tiennent pas en place" },
  principle: {
    en: "Let users pause, stop or hide moving content",
    fr: "Permettre de mettre en pause, d’arrêter ou de masquer ce qui bouge"
  },
  scenario: {
    en: "A club member opens the chess club’s website to check when this week’s tournament starts.",
    fr: "Une personne membre du club d’échecs ouvre le site du club pour savoir quand commence le tournoi de la semaine."
  },
  prompt: {
    en: "Click the part of the page that keeps this member from getting the information.",
    fr: "Cliquez sur la partie de la page qui empêche cette personne d’obtenir l’information."
  },
  correct: ["ticker"],
  regions: [
    { id: "banner", text: { en: "Site title", fr: "Titre du site" } },
    { id: "menu", text: { en: "Menu buttons", fr: "Boutons du menu" } },
    { id: "ticker", text: { en: "News ticker", fr: "Bandeau d’actualités défilant" } },
    { id: "welcome", text: { en: "Welcome text", fr: "Texte de bienvenue" } },
    { id: "mascot", text: { en: "Animated picture", fr: "Image animée" } },
    { id: "counter", text: { en: "Visitor counter", fr: "Compteur de visites" } },
    { id: "guestbook", text: { en: "Guestbook link", fr: "Lien du livre d’or" } }
  ],
  explanation: {
    en: [
      "The only mention of the new tournament time scrolls past in a marquee: by the time you’ve read “moves to”, the day has already slid out of view, and nothing lets you stop it (WCAG 2.2.2 Pause, Stop, Hide).",
      "Moving text is hard for slow readers, people with attention or vision impairments, and anyone zoomed in. Put key information in static text; if something must move, give it a pause control or stop it within five seconds.",
      "The animated picture, visitor counter and busy decoration look dated, but they don’t stop anyone from finding the time."
    ],
    fr: [
      "Le nouvel horaire du tournoi n’apparaît que dans un texte défilant : le temps de lire « est déplacé au », le jour a déjà quitté l’écran, et rien ne permet d’arrêter le défilement (WCAG 2.2.2 Mettre en pause, arrêter, masquer).",
      "Un texte qui bouge est difficile à lire pour qui lit lentement, pour les personnes ayant des troubles de l’attention ou de la vision, et pour qui utilise le zoom. Mettez l’information clé dans un texte fixe ; si quelque chose doit bouger, ajoutez un bouton pause ou arrêtez-le en moins de cinq secondes.",
      "L’image animée, le compteur de visites et la décoration chargée font daté, mais n’empêchent personne de trouver l’horaire."
    ]
  },
  links: [wcag("2.2.2", { en: "Pause, Stop, Hide", fr: "Mettre en pause, arrêter, masquer" }, "pause-stop-hide")]
};
