import { REVEAL_FALLBACK_EASING, THEME_REVEAL_MS, THEME_STORAGE_KEY } from "../const/theme.const";
import type { Point, ThemeChoice } from "../types/theme.types";

export const readStoredTheme = (): ThemeChoice | null => {
  try {
    const value: string | null = localStorage.getItem(THEME_STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
};

export const storeTheme = (choice: ThemeChoice): boolean => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, choice);
    return true;
  } catch {
    return false;
  }
};

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
