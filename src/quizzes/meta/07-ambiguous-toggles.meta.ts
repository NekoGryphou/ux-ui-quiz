import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "ambiguous-toggles",
  kind: "multiple",
  title: { en: "Switches you can’t read", fr: "Des interrupteurs illisibles" },
  principle: { en: "Make state unambiguous at a glance", fr: "Rendre l’état évident au premier coup d’œil" },
  scenario: {
    en: "A user wants to stop receiving marketing emails but keep security alerts. They open their notification settings.",
    fr: "Une personne veut ne plus recevoir d’e-mails marketing, mais garder les alertes de sécurité. Elle ouvre ses paramètres de notification."
  },
  prompt: {
    en: "Which issues make these settings hard to use?",
    fr: "Quels problèmes rendent ces paramètres difficiles à utiliser ?"
  },
  correct: ["a", "b", "c"],
  choices: [
    {
      id: "a",
      text: {
        en: "On and off switches share the same gray track, so their state can’t be read.",
        fr: "Les interrupteurs activés et désactivés ont le même rail gris, leur état est donc illisible."
      }
    },
    {
      id: "b",
      text: {
        en: "Every label starts with “Disable”, so each switch reads as a double negative.",
        fr: "Chaque libellé commence par « Désactiver », si bien que chaque interrupteur se lit comme une double négation."
      }
    },
    {
      id: "c",
      text: {
        en: "An “all emails” switch sits among the individual ones, so it’s unclear which wins.",
        fr: "Un interrupteur « tous les e-mails » est mêlé aux autres, on ne sait donc pas lequel l’emporte."
      }
    },
    {
      id: "d",
      text: {
        en: "Changes apply immediately, with no Save button to confirm them at the end.",
        fr: "Les modifications s’appliquent immédiatement, sans bouton Enregistrer pour les confirmer à la fin."
      }
    },
    {
      id: "e",
      text: {
        en: "The switches sit at the far right, away from the labels they control.",
        fr: "Les interrupteurs sont tout à droite, loin des libellés qu’ils contrôlent."
      }
    }
  ],
  explanation: {
    en: [
      "A switch’s state must be obvious without comparing it to its neighbours: a strong color for “on” and enough contrast for the track (WCAG 1.4.11 Non-text Contrast).",
      "“Disable marketing emails: on” forces users to compute a double negative. Label the positive thing the switch enables.",
      "A master switch belongs above the group it controls, and should visibly disable or override the individual switches.",
      "Instant-apply switches with labels on the left are the standard pattern and are fine here."
    ],
    fr: [
      "L’état d’un interrupteur doit être évident sans le comparer à ses voisins : une couleur franche pour « activé » et un rail suffisamment contrasté (WCAG 1.4.11 Contraste du contenu non textuel).",
      "« Désactiver les e-mails marketing : activé » oblige à décoder une double négation. Nommez plutôt ce que l’interrupteur active.",
      "Un interrupteur général se place au-dessus du groupe qu’il contrôle et doit visiblement désactiver ou remplacer les interrupteurs individuels.",
      "Des interrupteurs à effet immédiat avec le libellé à gauche sont le modèle standard et ne posent pas problème ici."
    ]
  },
  links: [wcag("1.4.11", { en: "Non-text Contrast", fr: "Contraste du contenu non textuel" }, "non-text-contrast")]
};
