import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "page-shell-review",
  kind: "hotspot",
  title: { en: "A page shell with two blind spots", fr: "Un gabarit de page avec deux angles morts" },
  principle: {
    en: "Declare the page language and never hide focusable content from assistive tech",
    fr: "Déclarer la langue de la page et ne jamais masquer un contenu focalisable aux technologies d’assistance"
  },
  scenario: {
    en: "A developer reviews the page template that every screen of a customer order portal is built on before it ships.",
    fr: "Avant sa mise en production, une personne de l’équipe de développement relit le gabarit sur lequel repose chaque écran d’un portail de commandes clients."
  },
  prompt: {
    en: "Click every part of the markup that fails screen reader users.",
    fr: "Cliquez sur chaque partie du balisage qui pose problème aux personnes utilisant un lecteur d’écran."
  },
  correct: ["html", "promo"],
  regions: [
    { id: "html", text: { en: "Line 1: html element", fr: "Ligne 1 : élément html" } },
    { id: "head", text: { en: "Lines 2–5: head", fr: "Lignes 2 à 5 : head" } },
    { id: "nav", text: { en: "Lines 7–10: navigation", fr: "Lignes 7 à 10 : navigation" } },
    { id: "main", text: { en: "Lines 11–12: main and heading", fr: "Lignes 11 et 12 : main et titre" } },
    { id: "image", text: { en: "Line 13: divider image", fr: "Ligne 13 : image de séparation" } },
    { id: "promo", text: { en: "Lines 14–17: promo banner", fr: "Lignes 14 à 17 : bandeau promo" } }
  ],
  explanation: {
    en: [
      'The html element has no lang attribute, so screen readers guess the language from the user’s settings: a French user’s reader pronounces this English page with French rules, and braille or translation tools guess too (WCAG 3.1.1 Language of Page). Add lang="en".',
      'The promo is wrapped in aria-hidden="true", yet its Dismiss button still takes keyboard focus: Tab lands on a control that screen readers announce with no name or role, or not at all (WCAG 4.1.2 Name, Role, Value). Remove aria-hidden, or hide the whole block with hidden or inert when it must not be reached.',
      "The rest is solid: a head with a charset and a descriptive title, a labelled nav landmark, a main element with a heading, and a decorative image with an empty alt so it is skipped."
    ],
    fr: [
      'L’élément html n’a pas d’attribut lang, donc les lecteurs d’écran devinent la langue d’après les réglages de la personne : un lecteur configuré en français prononce cette page anglaise avec les règles du français, et les outils de braille ou de traduction devinent aussi (WCAG 3.1.1 Langue de la page). Ajoutez lang="en".',
      'Le bandeau promo est enveloppé dans aria-hidden="true", pourtant son bouton Dismiss reçoit toujours le focus clavier : Tab arrive sur un contrôle que les lecteurs d’écran annoncent sans nom ni rôle, voire pas du tout (WCAG 4.1.2 Nom, rôle et valeur). Retirez aria-hidden, ou masquez tout le bloc avec hidden ou inert s’il ne doit pas être atteint.',
      "Le reste est solide : un head avec un charset et un titre descriptif, un repère nav étiqueté, un élément main avec un titre, et une image décorative avec un alt vide pour qu’elle soit ignorée."
    ]
  },
  links: [
    wcag("3.1.1", { en: "Language of Page", fr: "Langue de la page" }, "language-of-page"),
    wcag("4.1.2", { en: "Name, Role, Value", fr: "Nom, rôle et valeur" }, "name-role-value")
  ]
};
