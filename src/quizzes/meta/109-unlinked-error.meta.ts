import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "unlinked-error",
  kind: "compare",
  title: { en: "An error only sighted users get", fr: "Une erreur réservée aux personnes voyantes" },
  principle: {
    en: "Tie each error message to its field in the markup",
    fr: "Relier chaque message d’erreur à son champ dans le code HTML"
  },
  scenario: {
    en: "A developer reviews the sign-up email field as it appears after a visitor submits an incomplete address. Both versions look the same on screen.",
    fr: "Une personne de l’équipe front relit le champ e-mail de l’inscription tel qu’il s’affiche après l’envoi d’une adresse incomplète. Les deux versions sont identiques à l’écran."
  },
  prompt: { en: "Which implementation works better?", fr: "Quelle implémentation fonctionne le mieux ?" },
  correct: ["b"],
  explanation: {
    en: [
      "When the error paragraph sits next to the input with no link to it, a screen reader user who returns to the field hears “Email, edit text, camille@” and nothing else: they can’t tell the value was rejected, or why (WCAG 3.3.1 Error Identification, 1.3.1 Info and Relationships).",
      'aria-invalid="true" announces the field as invalid, and aria-describedby pointing at the message id reads the error right after the field’s name. Remove both once the value is fixed.',
      "Both versions show the same red border, icon and message; only the association in the markup differs."
    ],
    fr: [
      "Quand le paragraphe d’erreur se trouve à côté du champ sans lui être relié, une personne qui revient sur le champ avec un lecteur d’écran entend « E-mail, édition, camille@ » et rien d’autre : impossible de savoir que la valeur a été refusée, ni pourquoi (WCAG 3.3.1 Identification des erreurs, 1.3.1 Information et relations).",
      'aria-invalid="true" annonce le champ comme invalide, et aria-describedby pointant vers l’id du message lit l’erreur juste après le nom du champ. Retirez les deux une fois la valeur corrigée.',
      "Les deux versions affichent la même bordure rouge, la même icône et le même message ; seule l’association dans le code HTML diffère."
    ]
  },
  links: [
    wcag("3.3.1", { en: "Error Identification", fr: "Identification des erreurs" }, "error-identification"),
    wcag("1.3.1", { en: "Info and Relationships", fr: "Information et relations" }, "info-and-relationships")
  ]
};
