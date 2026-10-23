import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "inconsistent-actions",
  kind: "hotspot",
  title: { en: "Four cards, three ways to save", fr: "Quatre cartes, trois façons d’enregistrer" },
  principle: {
    en: "Keep patterns consistent across a product",
    fr: "Garder des modèles cohérents dans tout le produit"
  },
  scenario: {
    en: "An admin updates several sections of their workspace settings, one card after the other.",
    fr: "Une personne chargée de l’administration met à jour plusieurs sections des paramètres de son espace de travail, carte après carte."
  },
  prompt: {
    en: "Click every place where the interface breaks its own pattern.",
    fr: "Cliquez sur chaque endroit où l’interface rompt avec son propre modèle."
  },
  correct: ["security-actions", "team-actions"],
  regions: [
    { id: "nav", text: { en: "Settings navigation", fr: "Navigation des paramètres" } },
    { id: "profile-actions", text: { en: "Profile card actions", fr: "Actions de la carte Profil" } },
    { id: "billing-actions", text: { en: "Billing card actions", fr: "Actions de la carte Facturation" } },
    { id: "security-actions", text: { en: "Security card actions", fr: "Actions de la carte Sécurité" } },
    { id: "team-actions", text: { en: "Team card actions", fr: "Actions de la carte Équipe" } },
    { id: "page-title", text: { en: "Page title", fr: "Titre de la page" } }
  ],
  explanation: {
    en: [
      "Profile and Billing set the pattern: a filled “Save” button on the right. Security switches to a green outline “Update” on the left, and Team hides the same action in a text link.",
      "Each variation makes users stop and re-read: is “Update” different from “Save”? Is the link even an action? Consistent placement, style and wording let people work on autopilot.",
      "Define the save action once in the design system and reuse it everywhere."
    ],
    fr: [
      "Profil et Facturation posent le modèle : un bouton plein « Enregistrer » à droite. Sécurité passe à un bouton « Mettre à jour » à contour vert, à gauche, et Équipe cache la même action dans un lien texte.",
      "Chaque variante oblige à s’arrêter pour relire : « Mettre à jour » est-il différent d’« Enregistrer » ? Le lien est-il seulement une action ? Un emplacement, un style et un libellé constants permettent de travailler en pilote automatique.",
      "Définissez l’action d’enregistrement une seule fois dans le design system et réutilisez-la partout."
    ]
  }
};
