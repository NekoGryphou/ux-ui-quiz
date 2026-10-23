import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "flash-intro",
  kind: "hotspot",
  motion: true,
  title: { en: "Loading the experience… 47%", fr: "Chargement de l’expérience… 47 %" },
  principle: {
    en: "Don’t make people sit through an intro to reach content",
    fr: "Ne pas imposer une intro avant d’accéder au contenu"
  },
  scenario: {
    en: "A visitor clicks a search result to find this architecture studio’s phone number.",
    fr: "Une personne clique sur un résultat de recherche pour trouver le numéro de téléphone de ce studio d’architecture."
  },
  prompt: {
    en: "Click the part of the page that wastes this visitor’s time.",
    fr: "Cliquez sur la partie de la page qui fait perdre son temps à cette personne."
  },
  correct: ["loader"],
  regions: [
    { id: "logo", text: { en: "Studio logo", fr: "Logo du studio" } },
    { id: "loader", text: { en: "Intro loading bar", fr: "Barre de chargement de l’intro" } },
    { id: "sound", text: { en: "Sound toggle", fr: "Bouton du son" } },
    { id: "skip", text: { en: "Skip link", fr: "Lien pour passer" } },
    { id: "tagline", text: { en: "Tagline", fr: "Slogan" } }
  ],
  explanation: {
    en: [
      "Before any content, the site makes everyone wait for a full-screen animated intro to load, then play, and only then shows the real homepage. The phone number is a minute and two screens away.",
      "Let people reach content immediately. If a brand animation matters, keep it short, play it inside the page rather than in front of it, and never gate navigation behind it.",
      "The tiny “skip intro” link at least offers a way out; the problem is the intro itself, which every visitor meets first."
    ],
    fr: [
      "Avant tout contenu, le site fait attendre tout le monde : une intro animée en plein écran doit se charger, puis se jouer, et seulement ensuite la vraie page d’accueil s’affiche. Le numéro de téléphone est à une minute et deux écrans de là.",
      "Donnez accès au contenu immédiatement. Si une animation de marque compte, gardez-la courte, jouez-la dans la page plutôt que devant, et ne bloquez jamais la navigation derrière elle.",
      "Le minuscule lien « passer l’intro » offre au moins une échappatoire ; le problème, c’est l’intro elle-même, que chaque visiteur voit en premier."
    ]
  }
};
