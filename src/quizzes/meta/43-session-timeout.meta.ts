import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "session-timeout",
  kind: "compare",
  title: { en: "Logged out during a coffee break", fr: "Déconnexion pendant la pause café" },
  principle: {
    en: "Warn before a time limit and let users extend it",
    fr: "Prévenir avant la fin d’un délai et permettre de le prolonger"
  },
  scenario: {
    en: "A customer fills in a bank transfer, steps away to find the invoice number, and comes back a few minutes later.",
    fr: "Une personne remplit un virement bancaire, s’absente pour retrouver le numéro de facture et revient quelques minutes plus tard."
  },
  prompt: {
    en: "Which version handles the time limit better?",
    fr: "Quelle version gère le mieux la limite de temps ?"
  },
  correct: ["a"],
  explanation: {
    en: [
      "Ending the session silently throws away everything the customer typed: they come back to a logout page and must start the transfer again.",
      "Warn before the time runs out and offer a one-click way to extend, with at least 20 seconds to respond (WCAG 2.2.1 Timing Adjustable). Security stays the same; the work survives.",
      "Both versions use the same timeout length and the same bank layout; only the warning differs."
    ],
    fr: [
      "Fermer la session sans prévenir efface tout ce qui a été saisi : la personne revient sur une page de déconnexion et doit recommencer son virement.",
      "Prévenez avant la fin du délai et proposez de le prolonger en un clic, avec au moins 20 secondes pour réagir (WCAG 2.2.1 Réglage du délai). La sécurité reste la même ; le travail est préservé.",
      "Les deux versions utilisent la même durée de session et la même mise en page ; seul l’avertissement change."
    ]
  },
  links: [wcag("2.2.1", { en: "Timing Adjustable", fr: "Réglage du délai" }, "timing-adjustable")]
};
