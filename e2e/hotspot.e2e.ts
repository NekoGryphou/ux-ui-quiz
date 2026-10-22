import { expect, type Locator, test } from "@playwright/test";
import { HOTSPOT_AREA, HOTSPOT_QUIZ, NARROW_VIEWPORT, RING_TOLERANCE_PX } from "./const/e2e.const";
import {
  clickUntil,
  hotspotTarget,
  openQuiz,
  ringOffset,
  ringViolations,
  tabUntil,
  watchRingInvariant
} from "./utils/app.utils";

test.describe("hotspot rings", (): void => {
  test.beforeEach(async ({ page }): Promise<void> => {
    await watchRingInvariant(page);
    await openQuiz(page, HOTSPOT_QUIZ);
    await page.evaluate(async (): Promise<void> => {
      await document.fonts.ready;
    });
  });

  test("outline the hovered area once fonts have loaded", async ({ page }): Promise<void> => {
    await hotspotTarget(page, HOTSPOT_AREA).hover();
    await expect.poll(() => ringOffset(page, HOTSPOT_AREA)).toBeLessThanOrEqual(RING_TOLERANCE_PX);
  });

  test("follow an area that moves without changing size", async ({ page }): Promise<void> => {
    const target: Locator = hotspotTarget(page, HOTSPOT_AREA);
    await target.evaluate((button: HTMLElement): void => {
      const area: HTMLElement | null = button.parentElement;
      if (area !== null) area.style.top = "40px";
    });
    await target.hover();
    await expect.poll(() => ringOffset(page, HOTSPOT_AREA)).toBeLessThanOrEqual(RING_TOLERANCE_PX);
  });

  test("show keyboard focus on the ring, with an outline fallback", async ({ page }): Promise<void> => {
    await page.locator("#quiz-heading").focus();
    expect(await tabUntil(page, ".hotspot__target", 10)).toBe(true);

    await expect(page.locator(".ring--focused")).toHaveCount(1);
    const focused: Locator = page.locator(".hotspot__target:focus-visible");
    await expect(focused).toHaveCSS("outline-style", "none");

    await page
      .locator(".frame")
      .first()
      .evaluate((frame: HTMLElement): void => {
        frame.classList.remove("frame--ringed");
      });
    await expect(focused).not.toHaveCSS("outline-style", "none");
  });

  test("toggle the pressed state when an area is clicked", async ({ page }): Promise<void> => {
    const target: Locator = hotspotTarget(page, HOTSPOT_AREA);
    await clickUntil(target, (timeout: number): Promise<void> =>
      expect(target).toHaveAttribute("aria-pressed", "true", { timeout })
    );
    await expect(page.getByText(`Selected: ${HOTSPOT_AREA}`)).toBeVisible();
  });

  test("never hides the focus outline while no ring is drawn", async ({ page }): Promise<void> => {
    await hotspotTarget(page, HOTSPOT_AREA).hover();
    await page.locator("#quiz-heading").focus();
    expect(await tabUntil(page, ".hotspot__target", 10)).toBe(true);
    await page.setViewportSize(NARROW_VIEWPORT);
    await page.getByRole("button", { name: "Enlarge" }).click();
    await expect(page.locator("dialog .frame--ringed")).toBeVisible();

    expect(await ringViolations(page)).toBe(0);
  });
});
