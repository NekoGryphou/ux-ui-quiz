import { expect, test } from "@playwright/test";
import { COLOR_SCHEMES, SINGLE_QUIZ } from "./const/e2e.const";
import { appA11yViolations, checkFirstChoice, openQuiz, openScreen } from "./utils/app.utils";

for (const colorScheme of COLOR_SCHEMES) {
  test.describe(`accessibility (${colorScheme})`, (): void => {
    test.use({ colorScheme });

    test("home has no violations", async ({ page }): Promise<void> => {
      await openScreen(page, "/");
      expect(await appA11yViolations(page)).toEqual([]);
    });

    test("question and answer reveal have no violations", async ({ page }): Promise<void> => {
      await openQuiz(page, SINGLE_QUIZ);
      expect(await appA11yViolations(page)).toEqual([]);

      await checkFirstChoice(page);
      await page.getByRole("region", { name: "Explanation" }).waitFor();
      expect(await appA11yViolations(page)).toEqual([]);
    });

    test("results have no violations", async ({ page }): Promise<void> => {
      await openScreen(page, "/#/results");
      expect(await appA11yViolations(page)).toEqual([]);
    });
  });
}
