import { flushSync } from "svelte";
import { subscribeStorage } from "../shared/utils/storage.utils";
import { DARK_SCHEME_QUERY, THEME_STORAGE_KEY } from "./const/theme.const";
import type { Point, ThemeChoice } from "./types/theme.types";
import { animateReveal, applyThemeAttribute, parseTheme, readStoredTheme, storeTheme } from "./utils/theme.utils";
import { runViewTransition } from "./utils/transition.utils";

/**
 * @private
 * @desc System dark color scheme media query.
 */
const darkScheme: MediaQueryList = window.matchMedia(DARK_SCHEME_QUERY);

/**
 * @private
 * @desc Color theme state, synced with storage and the system preference.
 */
class Theme {
  /**
   * @private
   * @desc Stored theme choice; null follows the system.
   */
  private choice: ThemeChoice | null = $state(readStoredTheme());
  /**
   * @private
   * @desc Whether the system prefers dark.
   */
  private systemDark: boolean = $state(darkScheme.matches);

  /**
   * @public
   * @desc Theme in effect.
   */
  public readonly current: ThemeChoice = $derived(this.choice ?? (this.systemDark ? "dark" : "light"));

  /**
   * @public
   * @desc Starts following system and cross-tab theme changes.
   */
  public constructor() {
    darkScheme.addEventListener("change", (event) => {
      this.systemDark = event.matches;
    });
    subscribeStorage((key, value) => {
      if (key === null) this.sync(readStoredTheme());
      else if (key === THEME_STORAGE_KEY) this.sync(parseTheme(value));
    });
  }

  /**
   * @public
   * @desc Switches and stores the theme with a circular reveal.
   *
   * @param origin - Reveal center, top center by default.
   */
  public toggle(origin?: Point): void {
    const next: ThemeChoice = this.current === "dark" ? "light" : "dark";
    storeTheme(next);

    const transition: ViewTransition | null = runViewTransition((): void => {
      flushSync(() => {
        this.choice = next;
      });
      applyThemeAttribute(next);
    });

    transition?.ready
      .then(() => {
        animateReveal(origin ?? { x: window.innerWidth / 2, y: 0 });
      })
      .catch(() => undefined);
  }

  /**
   * @private
   * @desc Applies a theme choice made in another tab.
   *
   * @param choice - New choice, or null for system.
   */
  private sync(choice: ThemeChoice | null): void {
    this.choice = choice;
    applyThemeAttribute(choice);
  }
}

/**
 * @export
 * @desc App-wide theme.
 */
export const theme: Theme = new Theme();
