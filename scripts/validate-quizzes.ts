import type { render as svelteRender } from "svelte/server";
import { createServer, type ViteDevServer } from "vite";
import type { Quiz, QuizMeta } from "../src/engine/types/quiz.types";

interface QuizzesModule {
  quizzes: Quiz[];
}

interface ValidateModule {
  validateQuizzes: (quizzes: readonly Quiz[]) => string[];
  markupRegionErrors: (quiz: QuizMeta, markup: string) => string[];
}

interface ServerModule {
  render: typeof svelteRender;
}

const server: ViteDevServer = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true, hmr: false }
});

try {
  const { quizzes } = (await server.ssrLoadModule("/src/quizzes/index.ts")) as QuizzesModule;
  const { validateQuizzes, markupRegionErrors } = (await server.ssrLoadModule(
    "/src/engine/utils/validate.utils.ts"
  )) as ValidateModule;
  const { render } = (await server.ssrLoadModule("svelte/server")) as ServerModule;

  const errors: string[] = [
    ...validateQuizzes(quizzes),
    ...quizzes.flatMap((quiz) => markupRegionErrors(quiz, render(quiz.visual, { props: {} }).body))
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
