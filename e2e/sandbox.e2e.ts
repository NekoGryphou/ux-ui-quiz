import { expect, type Locator, test } from "@playwright/test";
import { SANDBOX_QUIZ } from "./const/e2e.const";
import { openQuiz } from "./utils/app.utils";

test("Escape releases the keyboard sandbox without losing focus", async ({ page }): Promise<void> => {
  await openQuiz(page, SANDBOX_QUIZ);
  const sandbox: Locator = page.getByRole("application").first();

  await sandbox.focus();
  await page.keyboard.press("Tab");
  await expect(sandbox).toBeFocused();
  await expect(sandbox.locator(".sandbox__status")).toContainText("stop 1 of");

  await page.keyboard.press("Escape");
  await expect(sandbox).toBeFocused();
  await expect(sandbox.locator(".sandbox__status")).toHaveText("");

  await page.keyboard.press("Tab");
  await expect(sandbox).not.toBeFocused();
});
