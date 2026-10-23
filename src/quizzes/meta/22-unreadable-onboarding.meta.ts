import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "unreadable-onboarding",
  kind: "hotspot",
  title: { en: "The fine print of onboarding", fr: "L’onboarding en petits caractères" },
  principle: {
    en: "Keep body text legible: size, contrast and alignment",
    fr: "Garder le texte courant lisible : taille, contraste et alignement"
  },
  scenario: {
    en: "A new user opens a budgeting app on their phone, on a bus, to see what it can do.",
    fr: "Dans le bus, une personne ouvre pour la première fois une app de budget sur son téléphone pour découvrir ce qu’elle propose."
  },
  prompt: {
    en: "Click the part of this screen that will stop people from taking in the message.",
    fr: "Cliquez sur la partie de cet écran qui empêchera de saisir le message."
  },
  correct: ["body"],
  regions: [
    { id: "skip", text: { en: "Skip link", fr: "Lien Passer" } },
    { id: "illustration", text: { en: "Illustration", fr: "Illustration" } },
    { id: "headline", text: { en: "Headline", fr: "Titre" } },
    { id: "body", text: { en: "Description text", fr: "Texte de description" } },
    { id: "progress", text: { en: "Step indicator", fr: "Indicateur d’étapes" } },
    { id: "next", text: { en: "Next button", fr: "Bouton Suivant" } }
  ],
  explanation: {
    en: [
      "The description is set in 10px light-gray justified text: too small and too pale to read on a phone, and justification opens uneven gaps between words.",
      "Body text on mobile should be around 16px, meet 4.5:1 contrast (WCAG 1.4.3), and be left-aligned so word spacing stays even.",
      "Onboarding copy should also be short: one idea per screen, readable in a glance."
    ],
    fr: [
      "La description est en 10 px, gris clair et justifiée : trop petite et trop pâle pour être lue sur un téléphone, et la justification crée des espaces irréguliers entre les mots.",
      "Sur mobile, le texte courant doit faire environ 16 px, atteindre un contraste de 4,5:1 (WCAG 1.4.3) et être aligné à gauche pour garder des espaces réguliers.",
      "Le texte d’onboarding doit aussi rester court : une idée par écran, lisible d’un coup d’œil."
    ]
  },
  links: [wcag("1.4.3", { en: "Contrast (Minimum)", fr: "Contraste (minimum)" }, "contrast-minimum")]
};
