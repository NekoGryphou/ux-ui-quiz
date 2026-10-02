import type { Quiz, QuizModule } from "../engine/types/quiz.types";

const modules: Record<string, QuizModule> = import.meta.glob<QuizModule>("./*.svelte", { eager: true });

export const quizzes: Quiz[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, module]) => ({ ...module.meta, visual: module.default }));
