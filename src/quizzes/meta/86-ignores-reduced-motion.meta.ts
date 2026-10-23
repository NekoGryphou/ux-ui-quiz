import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "ignores-reduced-motion",
  kind: "single",
  motion: true,
  title: { en: "The page that won’t sit still", fr: "La page qui ne tient pas en place" },
  principle: {
    en: "Respect the reduce-motion setting",
    fr: "Respecter le réglage de réduction des animations"
  },
  scenario: {
    en: "A visitor prone to motion sickness turned on “Reduce motion” on their phone, then opens a travel page.",
    fr: "Une personne sujette au mal des transports a activé « Réduire les animations » sur son téléphone, puis ouvre une page de voyage."
  },
  prompt: {
    en: "What is the main issue with this page?",
    fr: "Quel est le principal problème de cette page ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "Layers keep sliding and zooming despite the visitor’s reduce-motion setting.",
        fr: "Les calques glissent et zooment sans arrêt malgré le réglage de réduction des animations."
      }
    },
    {
      id: "b",
      text: {
        en: "The headline uses a large display font, where a body-size font would feel calmer.",
        fr: "Le titre utilise une grande police d’affichage, alors qu’une taille de texte courant serait plus sobre."
      }
    },
    {
      id: "c",
      text: {
        en: "The hero shows mountains and clouds, where a single photo would load more quickly.",
        fr: "La bannière montre des montagnes et des nuages, alors qu’une seule photo se chargerait plus vite."
      }
    },
    {
      id: "d",
      text: {
        en: "The call to action is a pill button, where a square one would match the layout.",
        fr: "L’appel à l’action est un bouton arrondi, alors qu’un bouton carré s’accorderait à la mise en page."
      }
    }
  ],
  explanation: {
    en: [
      "The visitor told their device they need less motion, but the page ignores it: background, clouds and text drift at different speeds and zoom in a loop. For people with vestibular disorders, that can trigger dizziness or nausea within seconds.",
      "Honour prefers-reduced-motion: replace parallax, zooms and large movements with simple fades or no animation at all. Decorative motion should never be required to use the page (WCAG 2.3.3 Animation from Interactions).",
      "A large headline, an illustrated hero and a pill button are ordinary design choices."
    ],
    fr: [
      "La personne a indiqué à son appareil qu’elle a besoin de moins de mouvement, mais la page l’ignore : le fond, les nuages et le texte dérivent à des vitesses différentes et zooment en boucle. Pour les personnes atteintes de troubles vestibulaires, cela peut provoquer vertiges ou nausées en quelques secondes.",
      "Respectez prefers-reduced-motion : remplacez le parallaxe, les zooms et les grands mouvements par de simples fondus, voire aucune animation. Une animation décorative ne doit jamais être nécessaire pour utiliser la page (WCAG 2.3.3 Animation résultant d’une interaction).",
      "Un grand titre, une bannière illustrée et un bouton arrondi sont des choix de design ordinaires."
    ]
  },
  links: [
    wcag(
      "2.3.3",
      { en: "Animation from Interactions", fr: "Animation résultant d’une interaction" },
      "animation-from-interactions"
    )
  ]
};
