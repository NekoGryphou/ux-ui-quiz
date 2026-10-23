import { expect, test } from "@playwright/test";
import { appA11yViolations, openQuiz, openScreen } from "./utils/app.utils";

test.describe("language", (): void => {
  test("switches the interface to French and keeps it after a reload", async ({ page }): Promise<void> => {
    await openScreen(page, "/");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");

    await page.getByRole("button", { name: /Switch to French/ }).click();

    await expect(page.locator("html")).toHaveAttribute("lang", "fr");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Repérez le problème");
    expect(await appA11yViolations(page)).toEqual([]);
    await page.reload();
    await expect(page.getByRole("button", { name: "Commencer le quiz" })).toBeVisible();
  });

  test("translates the quiz and its mock", async ({ page }): Promise<void> => {
    await openQuiz(page, 1);
    await page.getByRole("button", { name: /Switch to French/ }).click();

    await expect(page.locator("#quiz-heading")).toContainText("Qu’est-ce qui ne va pas sur cet écran");
    await expect(page.locator(".frame").first()).toContainText("Supprimer le projet");
    expect(await appA11yViolations(page)).toEqual([]);
  });
});
