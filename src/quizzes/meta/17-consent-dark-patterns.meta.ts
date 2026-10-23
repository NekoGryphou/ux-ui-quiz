import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "consent-dark-patterns",
  kind: "multiple",
  title: { en: "Consent by default", fr: "Un consentement par défaut" },
  principle: {
    en: "Ask for consent explicitly and specifically",
    fr: "Demander un consentement explicite et spécifique"
  },
  scenario: {
    en: "A freelancer is signing up for an invoicing tool they want to try for a client project.",
    fr: "Une personne en freelance crée un compte sur un outil de facturation qu’elle veut tester pour un projet client."
  },
  prompt: {
    en: "Which issues does this signup form have?",
    fr: "Quels problèmes ce formulaire d’inscription présente-t-il ?"
  },
  correct: ["a", "b"],
  choices: [
    {
      id: "a",
      text: {
        en: "Both consent boxes are already checked, so users opt in without making a choice.",
        fr: "Les deux cases de consentement sont déjà cochées, donc on accepte sans avoir fait de choix."
      }
    },
    {
      id: "b",
      text: {
        en: "Product tips and partner offers share one checkbox, so users can’t accept just one.",
        fr: "Conseils produit et offres partenaires partagent une seule case, donc on ne peut pas accepter l’un sans l’autre."
      }
    },
    {
      id: "c",
      text: {
        en: "The password field has no strength meter, so weak passwords can go unnoticed.",
        fr: "Le champ mot de passe n’a pas de jauge de robustesse, donc un mot de passe faible peut passer inaperçu."
      }
    },
    {
      id: "d",
      text: {
        en: "The form asks for a full name, where a first name would be enough for an account.",
        fr: "Le formulaire demande le nom complet, alors que le prénom suffirait pour un compte."
      }
    }
  ],
  explanation: {
    en: [
      "Pre-ticked boxes don’t count as consent under the GDPR: consent must be an active, unambiguous choice.",
      "Consent must also be specific. Bundling useful product tips with partner marketing forces an all-or-nothing decision.",
      "Leave consent boxes unchecked and split each purpose into its own option. A strength meter is a nice extra, not a consent issue."
    ],
    fr: [
      "Des cases précochées ne valent pas consentement au sens du RGPD : le consentement doit être un choix actif et univoque.",
      "Le consentement doit aussi être spécifique. Regrouper des conseils produit utiles avec du marketing partenaire impose une décision en tout ou rien.",
      "Laissez les cases de consentement décochées et séparez chaque finalité dans sa propre option. Une jauge de robustesse est un plus, pas un problème de consentement."
    ]
  }
};
