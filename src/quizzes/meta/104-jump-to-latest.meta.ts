import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "jump-to-latest",
  kind: "compare",
  motion: true,
  title: {
    en: "The scenic route to the latest message",
    fr: "Le chemin des écoliers jusqu’au dernier message"
  },
  principle: {
    en: "Jump straight to the destination; don’t animate long distances",
    fr: "Aller droit à la destination ; ne pas animer les longues distances"
  },
  scenario: {
    en: "A team member scrolled far back in a busy chat to find a link, then taps “4 new messages” to catch up. Watch both versions.",
    fr: "Une personne de l’équipe a remonté loin dans une discussion animée pour retrouver un lien, puis touche « 4 nouveaux messages » pour se remettre à jour. Observez les deux versions."
  },
  prompt: { en: "Which version handles the jump better?", fr: "Quelle version gère le mieux le saut ?" },
  correct: ["b"],
  explanation: {
    en: [
      "Smooth-scrolling through hundreds of messages turns a one-tap shortcut into a long wait: the history streams past for seconds, nothing can be read on the way, and some people tap again or start scrolling, which stops it halfway.",
      "For long distances, jump directly to the destination and use a brief fade or a short slide of the last few items to show where you landed. Keep smooth scrolling for short moves, and respect the reduce-motion setting.",
      "Both versions use the same chat, the same button and the same final position; only the transition differs."
    ],
    fr: [
      "Un défilement fluide à travers des centaines de messages transforme un raccourci en un geste en longue attente : l’historique défile pendant plusieurs secondes, rien n’est lisible en chemin, et certaines personnes touchent à nouveau ou se mettent à faire défiler, ce qui l’arrête à mi-chemin.",
      "Sur une longue distance, sautez directement à la destination et utilisez un bref fondu ou un court glissement des derniers éléments pour montrer où l’on arrive. Réservez le défilement fluide aux petits déplacements et respectez le réglage de réduction des animations.",
      "Les deux versions utilisent la même discussion, le même bouton et la même position finale ; seule la transition change."
    ]
  }
};
