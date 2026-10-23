import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "faint-active-nav",
  kind: "multiple",
  title: { en: "Where am I?", fr: "Où suis-je ?" },
  principle: { en: "Make the current location perceivable", fr: "Rendre l’emplacement actuel perceptible" },
  scenario: {
    en: "A support agent switches between sections of a helpdesk all day. They glance at the screen to check which section they are in.",
    fr: "Une personne du support passe toute la journée d’une section à l’autre d’un outil d’assistance. Elle jette un œil à l’écran pour vérifier dans quelle section elle se trouve."
  },
  prompt: {
    en: "Which issues make the current location hard to tell?",
    fr: "Quels problèmes rendent l’emplacement actuel difficile à repérer ?"
  },
  correct: ["a", "b"],
  choices: [
    {
      id: "a",
      text: {
        en: "The current section is barely highlighted, and its pale text even reads as disabled.",
        fr: "La section actuelle est à peine mise en évidence, et son texte pâle semble même désactivé."
      }
    },
    {
      id: "b",
      text: {
        en: "The ticket list has no page heading, so only the sidebar could say where you are.",
        fr: "La liste des tickets n’a pas de titre de page, seule la barre latérale peut donc indiquer où l’on est."
      }
    },
    {
      id: "c",
      text: {
        en: "The counters use the same gray as the labels, where a brand color would draw the eye.",
        fr: "Les compteurs ont le même gris que les libellés, là où une couleur de marque attirerait l’œil."
      }
    },
    {
      id: "d",
      text: {
        en: "The sidebar shows full labels, where icons alone would leave more room for tickets.",
        fr: "La barre latérale affiche des libellés complets, là où des icônes seules laisseraient plus de place aux tickets."
      }
    }
  ],
  explanation: {
    en: [
      "The active item has a pale background and text lighter than the inactive items, so it reads as disabled rather than selected.",
      "Show the current location with clear contrast or an indicator bar, expose it with aria-current, and repeat it as a page heading.",
      "Colorful counters would compete with the location cue, and icon-only navigation is harder to scan."
    ],
    fr: [
      "L’élément actif a un fond pâle et un texte plus clair que les éléments inactifs : il semble désactivé plutôt que sélectionné.",
      "Signalez l’emplacement actuel par un contraste net ou une barre indicatrice, exposez-le avec aria-current et reprenez-le en titre de page.",
      "Des compteurs colorés concurrenceraient l’indice d’emplacement, et une navigation faite uniquement d’icônes se parcourt moins facilement."
    ]
  },
  links: [wcag("1.4.3", { en: "Contrast (Minimum)", fr: "Contraste (minimum)" }, "contrast-minimum")]
};
