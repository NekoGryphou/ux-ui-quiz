import { readFile } from "node:fs/promises";
import type { render as svelteRender } from "svelte/server";
import { createServer, type ViteDevServer } from "vite";
import type { CompareChoice, Quiz, QuizMeta, QuizVisual, VisualProps } from "../src/engine/types/quiz.types";

/**
 * @private
 * @desc Shape of the SSR-loaded quizzes module.
 *
 * @property quizzes - All quizzes.
 * @property quizFiles - Source file name per quiz id.
 */
interface QuizzesModule {
  /** All quizzes. */
  quizzes: Quiz[];

  /** Source file name per quiz id. */
  quizFiles: ReadonlyMap<string, string>;
}

/**
 * @private
 * @desc Shape of the SSR-loaded validation utils module.
 *
 * @property validateQuizzes - Checks quiz data.
 * @property markupRegionErrors - Checks rendered regions.
 * @property motionErrors - Checks motion in source.
 * @property headingErrors - Checks rendered headings.
 */
interface ValidateModule {
  /** Checks quiz data. */
  validateQuizzes: (quizzes: readonly Quiz[]) => string[];

  /** Checks rendered regions. */
  markupRegionErrors: (quiz: QuizMeta, markup: string) => string[];

  /** Checks motion in source. */
  motionErrors: (quiz: QuizMeta, source: string) => string[];

  /** Checks rendered headings. */
  headingErrors: (quiz: QuizMeta, markup: string) => string[];
}

/**
 * @private
 * @desc Shape of the SSR-loaded quiz constants module.
 *
 * @property COMPARE_OPTIONS - Variants of a compare quiz.
 */
interface QuizConstModule {
  /** Variants of a compare quiz. */
  COMPARE_OPTIONS: readonly CompareChoice[];
}

/**
 * @private
 * @desc Shape of the SSR-loaded svelte/server module.
 *
 * @property render - Svelte server renderer.
 */
interface ServerModule {
  /** Svelte server renderer. */
  render: typeof svelteRender;
}

/**
 * @private
 * @desc Vite dev server used to load the quiz modules.
 */
const server: ViteDevServer = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true, hmr: false }
});

try {
  const { quizzes, quizFiles } = (await server.ssrLoadModule("/src/quizzes/index.ts")) as QuizzesModule;
  const { render } = (await server.ssrLoadModule("svelte/server")) as ServerModule;
  const { COMPARE_OPTIONS } = (await server.ssrLoadModule("/src/engine/const/quiz.const.ts")) as QuizConstModule;
  const { validateQuizzes, markupRegionErrors, motionErrors, headingErrors } = (await server.ssrLoadModule(
    "/src/engine/utils/validate.utils.ts"
  )) as ValidateModule;

  const visuals: QuizVisual[] = await Promise.all(quizzes.map((quiz) => quiz.loadVisual()));

  const sources: string[] = await Promise.all(
    quizzes.map((quiz) => readFile(new URL(`../src/quizzes/${quizFiles.get(quiz.id) ?? ""}`, import.meta.url), "utf8"))
  );

  /**
   * @private
   * @desc Lists the props each visual of a quiz is rendered with.
   *
   * @param quiz - Quiz to render.
   *
   * @returns One props object per variant.
   */
  const renderedProps = (quiz: QuizMeta): VisualProps[] =>
    quiz.kind === "compare" ? COMPARE_OPTIONS.map((option): VisualProps => ({ variant: option.id })) : [{}];

  const errors: string[] = [
    ...validateQuizzes(quizzes),
    ...quizzes.flatMap((quiz, index) => {
      const visual: QuizVisual | undefined = visuals[index];
      if (visual === undefined) return [];
      return renderedProps(quiz).flatMap((props: VisualProps): string[] => {
        const markup: string = render(visual, { props }).body;
        return [...markupRegionErrors(quiz, markup), ...headingErrors(quiz, markup)];
      });
    }),
    ...quizzes.flatMap((quiz, index) => motionErrors(quiz, sources[index] ?? ""))
  ];

  if (errors.length > 0) {
    console.error(`Quiz data has ${String(errors.length)} problem(s):\n  ${errors.join("\n  ")}`);
    process.exitCode = 1;
  } else {
    console.log(`Quiz data OK (${String(quizzes.length)} quizzes).`);
  }
} finally {
  await server.close();
}
