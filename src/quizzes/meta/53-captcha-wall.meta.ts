import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "captcha-wall",
  kind: "single",
  title: { en: "Prove you’re human (third try)", fr: "Prouvez que vous n’êtes pas un robot (3e essai)" },
  principle: {
    en: "Don’t make people solve puzzles to prove they’re human",
    fr: "Ne pas imposer d’énigme pour prouver qu’on n’est pas un robot"
  },
  scenario: {
    en: "A long-time reader finally signs up to the forum to answer a question about an old console.",
    fr: "Une personne qui lit le forum depuis longtemps s’inscrit enfin pour répondre à une question sur une vieille console."
  },
  prompt: {
    en: "What is the main issue with this sign-up form?",
    fr: "Quel est le principal problème de ce formulaire d’inscription ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "Signing up means deciphering warped letters, with no audio version or other way to pass.",
        fr: "S’inscrire oblige à déchiffrer des lettres déformées, sans version audio ni autre moyen de passer."
      }
    },
    {
      id: "b",
      text: {
        en: "The form asks for a username, where an email address alone would be enough to sign up.",
        fr: "Le formulaire demande un pseudo, alors qu’une adresse e-mail suffirait pour s’inscrire."
      }
    },
    {
      id: "c",
      text: {
        en: "The password field has no strength meter, so weak passwords can go through unnoticed.",
        fr: "Le champ mot de passe n’a pas de jauge de robustesse, donc un mot de passe faible passe inaperçu."
      }
    },
    {
      id: "d",
      text: {
        en: "The forum uses a dark blue theme, where a lighter one would feel more welcoming to all.",
        fr: "Le forum utilise un thème bleu foncé, alors qu’un thème plus clair paraîtrait plus accueillant."
      }
    }
  ],
  explanation: {
    en: [
      "Distorted-text CAPTCHAs are hard for everyone and impossible for many: blind users get no audio alternative, people with dyslexia or low vision fail repeatedly, and “case sensitive” makes it worse. This reader is on their third try.",
      "Prefer checks that need no puzzle: invisible bot detection, rate limiting, email confirmation or a honeypot field. If a test is unavoidable, offer an accessible alternative (WCAG 3.3.8 Accessible Authentication).",
      "A username is normal for a forum, a strength meter is optional, and the dark theme is the forum’s style."
    ],
    fr: [
      "Les CAPTCHA à texte déformé sont difficiles pour tout le monde et impossibles pour beaucoup : les personnes aveugles n’ont pas d’alternative audio, les personnes dyslexiques ou malvoyantes échouent à répétition, et la mention « sensible à la casse » n’arrange rien. Cette personne en est à son troisième essai.",
      "Préférez des vérifications sans énigme : détection invisible des robots, limitation du nombre de tentatives, confirmation par e-mail ou champ piège (honeypot). Si un test est inévitable, proposez une alternative accessible (WCAG 3.3.8 Authentification accessible).",
      "Un pseudo est normal sur un forum, une jauge de robustesse est facultative, et le thème sombre est le style du forum."
    ]
  },
  links: [
    wcag(
      "3.3.8",
      { en: "Accessible Authentication (Minimum)", fr: "Authentification accessible (minimum)" },
      "accessible-authentication-minimum"
    )
  ]
};
