import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "div-button",
  kind: "compare",
  title: { en: "A button that isn’t one", fr: "Un bouton qui n’en est pas un" },
  principle: { en: "Use native interactive elements", fr: "Utiliser les éléments interactifs natifs" },
  scenario: {
    en: "Two developers implement the close icon of a side panel. Both versions look identical on screen.",
    fr: "Deux équipes de développement intègrent l’icône de fermeture d’un panneau latéral. À l’écran, les deux versions sont identiques."
  },
  prompt: {
    en: "Which implementation works better?",
    fr: "Quelle implémentation fonctionne le mieux ?"
  },
  correct: ["b"],
  explanation: {
    en: [
      "A div with a click handler can’t be reached with Tab or activated with Enter or Space, and screen readers don’t know it’s a button (WCAG 2.1.1 Keyboard, 4.1.2 Name, Role, Value).",
      'A native <button> brings focus, keyboard activation and the button role for free. Because it only shows an icon, it also needs a name: aria-label="Close panel", with the decorative SVG hidden.',
      "Rebuilding all of that on a div (tabindex, key handlers, role) is possible but fragile; the native element is simpler and more robust."
    ],
    fr: [
      "Une div avec un gestionnaire de clic ne s’atteint pas avec Tab, ne s’active ni avec Entrée ni avec Espace, et les lecteurs d’écran ignorent que c’est un bouton (WCAG 2.1.1 Clavier, 4.1.2 Nom, rôle et valeur).",
      'Un <button> natif apporte gratuitement le focus, l’activation au clavier et le rôle de bouton. Comme il n’affiche qu’une icône, il lui faut aussi un nom : aria-label="Fermer le panneau", avec le SVG décoratif masqué.',
      "Tout reconstruire sur une div (tabindex, gestion des touches, rôle) est possible mais fragile ; l’élément natif est plus simple et plus robuste."
    ]
  },
  links: [
    wcag("2.1.1", { en: "Keyboard", fr: "Clavier" }, "keyboard"),
    wcag("4.1.2", { en: "Name, Role, Value", fr: "Nom, rôle et valeur" }, "name-role-value")
  ]
};
