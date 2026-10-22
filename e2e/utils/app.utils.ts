import AxeBuilder from "@axe-core/playwright";
import { expect, type Locator, type Page } from "@playwright/test";
import { RING_GAP } from "../../src/stage/const/hotspot-ring.const";
import { A11Y_TAGS, ANSWER_TARGETS, PREVIEW_SELECTOR, RETRY_TIMEOUT_MS, RING_VIOLATIONS_KEY } from "../const/e2e.const";
import type { RingCheck } from "../types/e2e.types";

/**
 * @export
 * @desc Opens a question of the file-ordered debug run and waits for its preview.
 *
 * @param page - Playwright page.
 * @param position - Quiz file number.
 */
export const openQuiz = async (page: Page, position: number): Promise<void> => {
  await page.goto(`/#/debug/${String(position)}`);
  await page.locator(".frame").first().waitFor();
};

/**
 * @export
 * @desc Locates the hotspot button of an area.
 *
 * @param page - Playwright page.
 * @param area - Hotspot area name.
 *
 * @returns The hotspot button locator.
 */
export const hotspotTarget = (page: Page, area: string): Locator =>
  page.getByRole("button", { name: `Area: ${area}`, exact: true });

/**
 * @export
 * @desc Measures how far the visible ring is from its expected position around an area.
 *
 * @param page - Playwright page.
 * @param area - Hotspot area name.
 *
 * @returns The largest edge offset in pixels, or infinity when missing.
 */
export const ringOffset = (page: Page, area: string): Promise<number> =>
  page.evaluate(
    ({ area: label, gap }: RingCheck): number => {
      const button: HTMLElement | undefined = [...document.querySelectorAll<HTMLElement>(".hotspot__target")].find(
        (element: HTMLElement): boolean => element.getAttribute("aria-label") === `Area: ${label}`
      );
      const target: HTMLElement | null = button?.parentElement ?? null;
      const ring: Element | null = document.querySelector(".ring--visible");
      const frame: HTMLElement | null = document.querySelector<HTMLElement>(".frame");
      if (target === null || ring === null || frame === null) return Number.POSITIVE_INFINITY;
      const scale: number = frame.getBoundingClientRect().width / frame.offsetWidth;
      const area: DOMRect = target.getBoundingClientRect();
      const drawn: DOMRect = ring.getBoundingClientRect();
      return Math.max(
        Math.abs(drawn.left - (area.left - gap * scale)),
        Math.abs(drawn.top - (area.top - gap * scale)),
        Math.abs(drawn.right - (area.right + gap * scale)),
        Math.abs(drawn.bottom - (area.bottom + gap * scale))
      );
    },
    { area, gap: RING_GAP }
  );

/**
 * @export
 * @desc Presses Tab until the focused element matches a selector.
 *
 * @param page - Playwright page.
 * @param selector - CSS selector to reach.
 * @param maxPresses - Maximum Tab presses.
 *
 * @returns Whether the selector was reached.
 */
export const tabUntil = async (page: Page, selector: string, maxPresses: number): Promise<boolean> => {
  for (let press: number = 0; press < maxPresses; press++) {
    await page.keyboard.press("Tab");
    const reached: boolean = await page.evaluate(
      (target: string): boolean => document.activeElement?.matches(target) === true,
      selector
    );
    if (reached) return true;
  }
  return false;
};

/**
 * @export
 * @desc Counts, from page load, every moment a ringed frame has no ring.
 * Read the count with {@link ringViolations}.
 *
 * @param page - Playwright page.
 */
export const watchRingInvariant = async (page: Page): Promise<void> => {
  await page.addInitScript((key: string): void => {
    Reflect.set(window, key, 0);
    /**
     * @private
     * @desc Counts ringed frames that have no ring into the violation counter.
     */
    const check = (): void => {
      const hidden: number = [...document.querySelectorAll(".frame--ringed")].filter(
        (frame: Element): boolean => frame.querySelector(".ring") === null
      ).length;
      if (hidden > 0) Reflect.set(window, key, Number(Reflect.get(window, key)) + hidden);
    };
    new MutationObserver(check).observe(document, { subtree: true, childList: true, attributes: true });
  }, RING_VIOLATIONS_KEY);
};

/**
 * @export
 * @desc Reads the counter set up by {@link watchRingInvariant}.
 *
 * @param page - Playwright page.
 *
 * @returns The number of ring violations seen.
 */
export const ringViolations = (page: Page): Promise<number> =>
  page.evaluate((key: string): number => Number(Reflect.get(window, key)), RING_VIOLATIONS_KEY);

/**
 * @export
 * @desc Runs axe on the app UI, excluding quiz previews.
 *
 * @param page - Page to scan.
 *
 * @returns One "rule: selector" entry per violating node.
 */
export const appA11yViolations = async (page: Page): Promise<string[]> => {
  const results: Awaited<ReturnType<AxeBuilder["analyze"]>> = await new AxeBuilder({ page })
    .exclude(PREVIEW_SELECTOR)
    .withTags(A11Y_TAGS)
    .analyze();
  return results.violations.flatMap((violation) =>
    violation.nodes.map((node): string => `${violation.id}: ${node.target.join(" ")}`)
  );
};

/**
 * @export
 * @desc Opens a screen and waits for its heading.
 *
 * @param page - Page to use.
 * @param hash - Route hash, such as "/#/results".
 */
export const openScreen = async (page: Page, hash: string): Promise<void> => {
  await page.goto(hash);
  await page.getByRole("heading", { level: 1 }).waitFor();
};

/**
 * @export
 * @desc Clicks a control until a check passes, retrying while the app's click guard is active.
 *
 * @param target - Control to click.
 * @param settled - Assertion that the click took effect.
 */
export const clickUntil = async (target: Locator, settled: (timeout: number) => Promise<void>): Promise<void> => {
  await expect(async (): Promise<void> => {
    await target.click();
    await settled(RETRY_TIMEOUT_MS);
  }).toPass();
};

/**
 * @private
 * @desc Selects the first answer choice.
 *
 * @param page - Page showing a choice question.
 */
const selectFirstChoice = async (page: Page): Promise<void> => {
  const choice: Locator = page.locator("label.choice").first();
  await clickUntil(choice, (timeout: number): Promise<void> =>
    expect(choice).toHaveClass(/choice--selected/, { timeout })
  );
};

/**
 * @export
 * @desc Selects the first answer choice and checks it.
 *
 * @param page - Page showing a choice question.
 */
export const checkFirstChoice = async (page: Page): Promise<void> => {
  await selectFirstChoice(page);
  await page.getByRole("button", { name: "Check answer" }).click();
};

/**
 * @export
 * @desc Starts a Quick 10 from the home screen.
 *
 * @param page - Page showing the home screen.
 */
export const startQuick = async (page: Page): Promise<void> => {
  await clickUntil(page.getByRole("button", { name: "Quick 10" }), (timeout: number): Promise<void> =>
    expect(page).toHaveURL(/#\/practice\/1$/, { timeout })
  );
  await page.locator(".frame").first().waitFor();
};

/**
 * @export
 * @desc Answers the current question with its first option, whatever its kind.
 *
 * @param page - Page showing a question.
 */
export const answerCurrent = async (page: Page): Promise<void> => {
  const check: Locator = page.getByRole("button", { name: /^Check/ });
  await clickUntil(page.locator(ANSWER_TARGETS).first(), (timeout: number): Promise<void> =>
    expect(check).toBeEnabled({ timeout })
  );
  await check.click();
  await page.getByRole("region", { name: "Explanation" }).waitFor();
};
