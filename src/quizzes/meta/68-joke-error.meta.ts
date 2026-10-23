import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "joke-error",
  kind: "single",
  title: { en: "Oopsie, your rent", fr: "Oups, votre loyer" },
  principle: { en: "Match the tone of voice to the moment", fr: "Adapter le ton au moment" },
  scenario: {
    en: "A tenant pays this month’s rent from their banking app, the evening before it’s due.",
    fr: "La veille de l’échéance, une personne paie le loyer du mois depuis son application bancaire."
  },
  prompt: { en: "What is the main issue with this screen?", fr: "Quel est le principal problème de cet écran ?" },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "A jokey message announces a failed €1,250 rent payment, so the problem feels belittled.",
        fr: "Un message blagueur annonce l’échec d’un loyer de 1 250 €, ce qui minimise le problème."
      }
    },
    {
      id: "b",
      text: {
        en: "The message has an illustration, where plain text would load a little faster on mobile.",
        fr: "Le message comporte une illustration, alors que du texte seul chargerait plus vite sur mobile."
      }
    },
    {
      id: "c",
      text: {
        en: "The retry button spans the full width, where a smaller one would feel less insistent.",
        fr: "Le bouton pour réessayer occupe toute la largeur, alors qu’un plus petit semblerait moins insistant."
      }
    },
    {
      id: "d",
      text: {
        en: "The screen repeats the payee and amount, where a reference number would be enough.",
        fr: "L’écran rappelle le bénéficiaire et le montant, alors qu’un numéro de référence suffirait."
      }
    }
  ],
  explanation: {
    en: [
      "Rent that may arrive late is stressful. Hamster jokes and “lol” make the bank sound like it doesn’t care, and they push the useful part (what happened, was money taken, what to do now) out of view.",
      "Playful copy works for success and empty states; when money, health or deadlines are involved, switch to calm, plain words: what failed, whether the account was charged, and the next step.",
      "An illustration, a full-width retry button and repeating the payee and amount are all helpful on a failed payment screen."
    ],
    fr: [
      "Un loyer qui risque d’arriver en retard, c’est stressant. Les blagues de hamsters et le « mdr » donnent l’impression que la banque s’en moque, et repoussent hors de vue l’essentiel (ce qui s’est passé, si l’argent a été prélevé, que faire maintenant).",
      "Un ton léger fonctionne pour les succès et les états vides ; quand il est question d’argent, de santé ou d’échéances, passez à des mots calmes et simples : ce qui a échoué, si le compte a été débité, et l’étape suivante.",
      "Une illustration, un bouton pleine largeur pour réessayer et le rappel du bénéficiaire et du montant sont tous utiles sur un écran d’échec de paiement."
    ]
  }
};
