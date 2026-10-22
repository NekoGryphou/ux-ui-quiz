import { readStorage, writeStorage } from "../../shared/utils/storage.utils";
import { REVEAL_FALLBACK_EASING, THEME_REVEAL_MS, THEME_STORAGE_KEY } from "../const/theme.const";
import type { Point, ThemeChoice } from "../types/theme.types";

/**
 * @export
 * @desc Parses a stored theme value.
 *
 * @param value - Raw stored value.
 *
 * @returns The theme, or null when invalid.
 */
export const parseTheme = (value: string | null): ThemeChoice | null =>
  value === "light" || value === "dark" ? value : null;

/**
 * @export
 * @desc Reads the stored theme choice.
 *
 * @returns The theme, or null when unset.
 */
export const readStoredTheme = (): ThemeChoice | null => parseTheme(readStorage(THEME_STORAGE_KEY));

/**
 * @export
 * @desc Stores the theme choice.
 *
 * @param choice - Theme to store.
 *
 * @returns Whether storage succeeded.
 */
export const storeTheme = (choice: ThemeChoice): boolean => writeStorage(THEME_STORAGE_KEY, choice);

/**
 * @export
 * @desc Sets the theme attribute on the root element.
 *
 * @param choice - Theme, or null to follow the system.
 */
export const applyThemeAttribute = (choice: ThemeChoice | null): void => {
  if (choice === null) Reflect.deleteProperty(document.documentElement.dataset, "theme");
  else document.documentElement.dataset["theme"] = choice;
};

/**
 * @export
 * @desc Animates the new theme as a circle growing from a point.
 * Must run once the view transition is ready.
 *
 * @param origin - Circle center.
 */
export const animateReveal = (origin: Point): void => {
  const { x, y } = origin;
  const radius: number = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
  const easing: string = getComputedStyle(document.documentElement).getPropertyValue("--ease").trim();
  document.documentElement.animate(
    {
      clipPath: [
        `circle(0px at ${String(x)}px ${String(y)}px)`,
        `circle(${String(radius)}px at ${String(x)}px ${String(y)}px)`
      ]
    },
    {
      duration: THEME_REVEAL_MS,
      easing: easing === "" ? REVEAL_FALLBACK_EASING : easing,
      pseudoElement: "::view-transition-new(root)"
    }
  );
};
