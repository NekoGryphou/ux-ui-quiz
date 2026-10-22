import { expect, test } from "@playwright/test";
import { answerCurrent, openScreen, startQuick } from "./utils/app.utils";

test.describe("one run at a time", (): void => {
  test("resumes the active Quick 10 and asks before abandoning it", async ({ page }): Promise<void> => {
    await openScreen(page, "/");
    await startQuick(page);
    await answerCurrent(page);
    await page.getByRole("link", { name: "Kanom’UI" }).click();

    await expect(page.getByRole("link", { name: "Resume Quick 10 · 1/10" })).toBeVisible();

    await page.getByRole("button", { name: "Start the quiz" }).click();
    const dialog: ReturnType<typeof page.getByRole> = page.getByRole("dialog", { name: "Abandon your Quick 10?" });
    await expect(dialog).toBeVisible();
    await dialog.getByRole("button", { name: "Abandon and start" }).click();

    await expect(page.locator(".quiz__position")).toHaveText(/^Question 1 of \d+$/);
    await page.getByRole("link", { name: "Kanom’UI" }).click();
    await expect(page.getByRole("link", { name: /Resume/ })).toHaveCount(0);
  });

  test("keeps the active run when the abandon dialog is cancelled", async ({ page }): Promise<void> => {
    await openScreen(page, "/");
    await startQuick(page);
    await answerCurrent(page);
    await page.getByRole("link", { name: "Kanom’UI" }).click();

    await page.getByRole("button", { name: "Start the quiz" }).click();
    await page.getByRole("button", { name: "Cancel" }).click();

    await expect(page.getByRole("link", { name: "Resume Quick 10 · 1/10" })).toBeVisible();
  });

  test("sends main quiz links to the active practice run", async ({ page }): Promise<void> => {
    await openScreen(page, "/");
    await startQuick(page);
    await answerCurrent(page);

    await page.goto("/#/quiz/1");

    await expect(page.locator(".quiz__position")).toHaveText("Practice · Question 2 of 10");
  });

  test("restarts an active Quick 10 after confirming", async ({ page }): Promise<void> => {
    await openScreen(page, "/");
    await startQuick(page);
    await answerCurrent(page);
    await page.getByRole("link", { name: "Kanom’UI" }).click();

    await page.getByRole("button", { name: "Restart Quick 10" }).click();
    await page.getByRole("button", { name: "Abandon and start" }).click();

    await expect(page.locator(".quiz__position")).toHaveText("Practice · Question 1 of 10");
    await expect(page.locator(".header__stats")).toContainText("0/10");
  });
});
