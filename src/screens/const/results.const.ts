import type { RunKind } from "../../engine/types/run.types";
import type { Localized } from "../../shared/types/locale.types";
import type { Verdict } from "../types/results.types";

/**
 * @export
 * @desc Radius of the results score ring, in SVG units.
 */
export const RING_RADIUS: number = 52;

/**
 * @export
 * @desc Circumference of the results score ring, in SVG units.
 */
export const RING_LENGTH: number = 2 * Math.PI * RING_RADIUS;

/**
 * @export
 * @desc Verdict shown when the score matches no {@link VERDICTS} entry.
 */
export const FALLBACK_VERDICT: Localized<string> = {
  en: "Good start. Revisit the questions below, then try again.",
  fr: "Bon début. Revoyez les questions ci-dessous, puis réessayez."
};

/**
 * @export
 * @desc Score verdicts, from the highest minimum ratio down.
 */
export const VERDICTS: readonly Verdict[] = [
  {
    minRatio: 0.85,
    text: {
      en: "Sharp eye. You'd catch most of these in review.",
      fr: "L’œil affûté. Vous repéreriez la plupart de ces problèmes en revue."
    }
  },
  {
    minRatio: 0.6,
    text: {
      en: "Solid instincts. A few principles are worth revisiting.",
      fr: "De bons réflexes. Quelques principes méritent d’être revus."
    }
  }
];

/**
 * @export
 * @desc Results eyebrow text for each run kind.
 */
export const RUN_EYEBROWS: Readonly<Record<RunKind, Localized<string>>> = {
  full: { en: "Your results", fr: "Vos résultats" },
  retry: { en: "Retry: the ones you missed", fr: "Rattrapage : les questions manquées" },
  quick: { en: "Quick 10", fr: "Quick 10" }
};

/**
 * @export
 * @desc Singular and plural forms of "question".
 */
export const QUESTION_FORMS: Localized<readonly [string, string]> = {
  en: ["question", "questions"],
  fr: ["question", "questions"]
};

/**
 * @export
 * @desc Singular and plural forms of "point".
 */
export const POINT_FORMS: Localized<readonly [string, string]> = {
  en: ["point", "points"],
  fr: ["point", "points"]
};

/**
 * @export
 * @desc Singular and plural score nouns; English uses an invariable "correct".
 */
export const CORRECT_FORMS: Localized<readonly [string, string]> = {
  en: ["correct", "correct"],
  fr: ["bonne réponse", "bonnes réponses"]
};
