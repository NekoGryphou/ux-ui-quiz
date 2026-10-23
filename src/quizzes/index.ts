import type { Quiz, QuizVisual, QuizVisualLoader } from "../engine/types/quiz.types";
import type { QuizSource } from "./types/quiz-source.types";
import { localizeQuiz } from "./utils/localize.utils";
import { byFileOrder, visualPathFor } from "./utils/registry.utils";

/**
 * @private
 * @desc Lazy quiz visual loaders, keyed by file path.
 */
const visuals: Record<string, QuizVisualLoader> = import.meta.glob<QuizVisual>("./*.svelte", { import: "default" });

/**
 * @private
 * @desc Quiz sources, keyed by file path.
 */
const metas: Record<string, QuizSource> = import.meta.glob<QuizSource>("./meta/*.meta.ts", {
  eager: true,
  import: "meta"
});

/**
 * @private
 * @desc Quiz sources with their paths, in file order.
 */
const entries: [string, QuizSource][] = Object.entries(metas).sort(byFileOrder);

/**
 * @private
 * @desc Visual paths that have no matching meta.
 */
const orphans: string[] = Object.keys(visuals).filter(
  (path: string): boolean => !entries.some(([metaPath]) => visualPathFor(metaPath) === path)
);
if (orphans.length > 0) throw new Error(`Quiz visuals without meta: ${orphans.join(", ")}.`);

/**
 * @export
 * @desc All quizzes in file order, localized and paired with their lazy visual loader.
 */
export const quizzes: Quiz[] = entries.map(([path, meta]): Quiz => {
  const loadVisual: QuizVisualLoader | undefined = visuals[visualPathFor(path)];
  if (loadVisual === undefined) throw new Error(`Quiz "${meta.id}" has no visual at ${visualPathFor(path)}.`);
  return localizeQuiz(meta, loadVisual);
});

// used by scripts/validate-quizzes.ts
// noinspection JSUnusedGlobalSymbols
/**
 * @export
 * @desc Visual file path of each quiz, keyed by quiz id.
 */
export const quizFiles: ReadonlyMap<string, string> = new Map(
  entries.map(([path, meta]): [string, string] => [meta.id, visualPathFor(path)])
);
