import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "filename-alt-text",
  kind: "hotspot",
  title: { en: "An image named after its file", fr: "Une image qui porte le nom de son fichier" },
  principle: {
    en: "Give meaningful images a meaningful text alternative",
    fr: "Donner aux images porteuses de sens une alternative textuelle qui a du sens"
  },
  scenario: {
    en: "A developer asks for a quick accessibility review of a product card before it ships.",
    fr: "Avant une mise en production, l’équipe de développement demande une relecture rapide de l’accessibilité d’une fiche produit."
  },
  prompt: {
    en: "Click the part of the markup that fails screen reader users.",
    fr: "Cliquez sur la partie du code qui pose problème aux personnes utilisant un lecteur d’écran."
  },
  correct: ["image"],
  regions: [
    { id: "image", text: { en: "Line 2: image", fr: "Ligne 2 : image" } },
    { id: "name", text: { en: "Line 3: product name", fr: "Ligne 3 : nom du produit" } },
    { id: "price", text: { en: "Line 4: price", fr: "Ligne 4 : prix" } },
    { id: "size", text: { en: "Lines 5–9: size field", fr: "Lignes 5 à 9 : champ de taille" } },
    { id: "button", text: { en: "Line 10: button", fr: "Ligne 10 : bouton" } }
  ],
  explanation: {
    en: [
      "The alt text is the file name, so a screen reader announces “IMG_2041.jpg”: noise instead of information (WCAG 1.1.1 Non-text Content).",
      'Describe what the image adds: alt="Trail Runner 2 in blue, side view". If the image only repeats the heading, an empty alt="" tells assistive tech to skip it.',
      "The rest is solid: a real heading, a label tied to its select with for/id, and a native button with visible text."
    ],
    fr: [
      "Le texte alternatif est le nom du fichier : un lecteur d’écran annonce donc « IMG_2041.jpg », du bruit au lieu d’une information (WCAG 1.1.1 Contenu non textuel).",
      'Décrivez ce que l’image apporte : alt="Trail Runner 2 bleue, vue de profil". Si l’image ne fait que répéter le titre, un alt="" vide indique aux technologies d’assistance de l’ignorer.',
      "Le reste est solide : un vrai titre, un label relié à son select par for/id et un bouton natif avec un texte visible."
    ]
  },
  links: [wcag("1.1.1", { en: "Non-text Content", fr: "Contenu non textuel" }, "non-text-content")]
};
