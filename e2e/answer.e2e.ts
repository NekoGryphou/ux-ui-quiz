import { expect, test } from "@playwright/test";
import { KEYBOARD_QUIZ, SINGLE_QUIZ } from "./const/e2e.const";
import { checkFirstChoice, openQuiz } from "./utils/app.utils";

test.describe("answering", (): void => {
  test("checks a pointer answer and moves focus to Next", async ({ page }): Promise<void> => {
    await openQuiz(page, SINGLE_QUIZ);
    await checkFirstChoice(page);

    await expect(page.getByRole("region", { name: "Explanation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Next question" })).toBeFocused();
    await expect(page.getByRole("radio").first()).toBeDisabled();
  });

  test("answers with the number and Enter shortcuts", async ({ page }): Promise<void> => {
    await openQuiz(page, KEYBOARD_QUIZ);
    await page.locator("#quiz-heading").focus();

    await page.keyboard.press("1");
    await expect(page.locator("label.choice--selected")).toHaveCount(1);

    await page.keyboard.press("Enter");
    await expect(page.getByRole("region", { name: "Explanation" })).toBeVisible();
  });
});
