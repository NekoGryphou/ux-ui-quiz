import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "checkout-markup",
  kind: "multiple",
  title: { en: "A checkout form that looks fine", fr: "Un formulaire de commande en apparence correct" },
  principle: {
    en: "Give every field its label, input type and autocomplete token",
    fr: "Donner à chaque champ son libellé, son type de saisie et son jeton autocomplete"
  },
  scenario: {
    en: "A developer reviews the pull request for the delivery address step of a checkout before it ships.",
    fr: "Une personne de l’équipe front relit la pull request de l’étape « adresse de livraison » d’un tunnel de commande avant sa mise en production."
  },
  prompt: { en: "Which issues does this form have?", fr: "Quels problèmes ce formulaire présente-t-il ?" },
  correct: ["a", "b", "c"],
  choices: [
    {
      id: "a",
      text: {
        en: "The fields have no autocomplete tokens, so browsers can’t fill in a saved address.",
        fr: "Les champs n’ont aucun jeton autocomplete, donc le navigateur ne peut pas remplir une adresse enregistrée."
      }
    },
    {
      id: "b",
      text: {
        en: 'The email input uses type="text", so phones show no @ key and nothing checks the format.',
        fr: 'Le champ e-mail utilise type="text", donc les téléphones n’affichent pas de touche @ et rien ne vérifie le format.'
      }
    },
    {
      id: "c",
      text: {
        en: "The street label points to “street”, so it isn’t tied to the address input at all.",
        fr: "Le libellé de l’adresse pointe vers « street », donc il n’est pas du tout relié au champ d’adresse."
      }
    },
    {
      id: "d",
      text: {
        en: 'The postcode input uses type="text", so letters can be typed where digits belong.',
        fr: 'Le champ code postal utilise type="text", donc on peut saisir des lettres là où il faut des chiffres.'
      }
    },
    {
      id: "e",
      text: {
        en: "The email hint is a separate paragraph, so screen readers skip it when the field gets focus.",
        fr: "L’aide du champ e-mail est un paragraphe à part, donc les lecteurs d’écran l’ignorent à la prise de focus."
      }
    }
  ],
  explanation: {
    en: [
      "No field carries an autocomplete token (name, email, street-address, postal-code, address-level2, country), so browsers and password managers can’t offer the saved address: every customer retypes it, and people with motor or memory difficulties pay the most (WCAG 1.3.5 Identify Input Purpose).",
      'The email field is type="text": phones show a keyboard without @ and the browser can’t flag “camille.example.com”. Use type="email".',
      'The street label has for="street" but the input’s id is "address": clicking the label doesn’t focus the field and screen readers announce an unlabelled edit box (WCAG 1.3.1 Info and Relationships). Make for and id match.',
      'The rest is right: postcodes in the UK, Canada or the Netherlands contain letters, so type="text" fits, and the email hint is linked with aria-describedby, so it is read when the field gets focus.'
    ],
    fr: [
      "Aucun champ ne porte de jeton autocomplete (name, email, street-address, postal-code, address-level2, country) : navigateurs et gestionnaires de mots de passe ne peuvent pas proposer l’adresse enregistrée. Chaque personne doit la ressaisir, et celles qui ont des difficultés motrices ou de mémoire sont les plus pénalisées (WCAG 1.3.5 Identifier la finalité des champs).",
      'Le champ e-mail est en type="text" : les téléphones affichent un clavier sans @ et le navigateur ne peut pas signaler « camille.example.com ». Utilisez type="email".',
      'Le libellé de l’adresse a for="street" mais l’id du champ est "address" : cliquer sur le libellé ne donne pas le focus au champ, et les lecteurs d’écran annoncent une zone d’édition sans libellé (WCAG 1.3.1 Information et relations). Faites correspondre for et id.',
      'Le reste est correct : les codes postaux du Royaume-Uni, du Canada ou des Pays-Bas contiennent des lettres, donc type="text" convient, et l’aide du champ e-mail est reliée par aria-describedby, donc elle est lue à la prise de focus.'
    ]
  },
  links: [
    wcag("1.3.5", { en: "Identify Input Purpose", fr: "Identifier la finalité des champs" }, "identify-input-purpose"),
    wcag("1.3.1", { en: "Info and Relationships", fr: "Information et relations" }, "info-and-relationships"),
    {
      label: { en: "MDN: the autocomplete attribute", fr: "MDN : l’attribut autocomplete" },
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"
    }
  ]
};
