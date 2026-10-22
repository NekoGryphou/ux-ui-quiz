import { expect, type Page, test } from "@playwright/test";
import { SINGLE_QUIZ } from "./const/e2e.const";
import { openQuiz, openScreen, selectFirstChoice } from "./utils/app.utils";

test.describe("cross-tab sync", (): void => {
  test("follows a theme change made in another tab", async ({ context }): Promise<void> => {
    const first: Page = await context.newPage();
    const second: Page = await context.newPage();
    await first.goto("/");
    await second.goto("/");

    await first.getByRole("button", { name: "Switch to dark theme" }).click();

    await expect(first.locator("html")).toHaveAttribute("data-theme", "dark");
    await expect(second.locator("html")).toHaveAttribute("data-theme", "dark");
    await expect(second.getByRole("button", { name: "Switch to light theme" })).toBeVisible();
  });

  test("starts over when another tab clears storage", async ({ context }): Promise<void> => {
    const first: Page = await context.newPage();
    await openQuiz(first, SINGLE_QUIZ);
    await selectFirstChoice(first);
    await first.goto("/#/");
    await expect(first.getByRole("link", { name: /^Resume quiz/ })).toBeVisible();

    const second: Page = await context.newPage();
    await openScreen(second, "/");
    await second.evaluate((): void => {
      localStorage.clear();
    });

    await expect(first.getByRole("button", { name: "Start the quiz" })).toBeVisible();
  });
});
