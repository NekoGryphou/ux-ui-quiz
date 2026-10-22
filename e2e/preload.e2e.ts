import { expect, type Request, test } from "@playwright/test";
import { QUIZ_VISUAL_PATH, SINGLE_QUIZ } from "./const/e2e.const";
import { openQuiz } from "./utils/app.utils";

test("loads the current question and preloads only the next two", async ({ page }): Promise<void> => {
  const loaded: Set<number> = new Set<number>();
  page.on("request", (request: Request): void => {
    const match: RegExpExecArray | null = QUIZ_VISUAL_PATH.exec(request.url());
    if (match?.[1] !== undefined) loaded.add(Number(match[1]));
  });

  await openQuiz(page, SINGLE_QUIZ);
  await expect.poll(() => loaded.size).toBeGreaterThanOrEqual(3);
  await page.waitForLoadState("networkidle");

  expect([...loaded].sort((a: number, b: number): number => a - b)).toEqual([1, 2, 3]);
});
