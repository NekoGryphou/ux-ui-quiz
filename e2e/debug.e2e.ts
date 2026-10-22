import { expect, test } from "@playwright/test";
import { DEBUG_CODE } from "../src/app/const/debug.const";
import { SESSION_STORAGE_KEY } from "../src/engine/const/session.const";
import { openScreen } from "./utils/app.utils";

test("debug opens a question outside the saved run", async ({ page }): Promise<void> => {
  await openScreen(page, "/");
  const saved: string | null = await page.evaluate(
    (key: string): string | null => localStorage.getItem(key),
    SESSION_STORAGE_KEY
  );
  expect(saved).not.toBeNull();
  const order: string[] = (JSON.parse(saved ?? "{}") as { order: string[] }).order;

  await expect(page.locator(".debug-menu")).toHaveCount(0);
  for (const key of DEBUG_CODE) await page.keyboard.press(key);
  const picker: ReturnType<typeof page.getByLabel> = page.getByLabel("Jump to question");
  const options: { value: string; label: string }[] = await picker
    .locator("option")
    .evaluateAll((items: HTMLOptionElement[]) => items.map((item) => ({ value: item.value, label: item.textContent })));
  const missing: { value: string; label: string } | undefined = options.find((option) => !order.includes(option.value));
  if (missing === undefined) throw new Error("Expected a question outside the saved run");
  await picker.selectOption(missing.value);
  await page.getByRole("button", { name: "Go", exact: true }).click();

  await expect(page).toHaveURL(/#\/debug\/\d+$/);
  await expect(page.locator("#quiz-heading")).toBeVisible();
  await expect(page.locator(".debug-menu")).not.toHaveAttribute("open");
  expect(await page.evaluate((key: string): string | null => localStorage.getItem(key), SESSION_STORAGE_KEY)).toBe(
    saved
  );
});

test("debug can be hidden and revealed again", async ({ page }): Promise<void> => {
  await openScreen(page, "/");
  await expect(page.locator(".debug-menu")).toHaveCount(0);
  for (let attempt: number = 0; attempt < 2; attempt++) {
    for (const key of DEBUG_CODE) await page.keyboard.press(key);
    await expect(page.getByLabel("Jump to question")).toBeVisible();
    await page.getByRole("button", { name: "Hide debug" }).click();
    await expect(page.locator(".debug-menu")).toHaveCount(0);
  }
});
