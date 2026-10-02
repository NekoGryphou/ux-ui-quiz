import { flushSync } from "svelte";
import { DARK_SCHEME_QUERY, REDUCED_MOTION_QUERY } from "./const/theme.const";
import type { Point, ThemeChoice } from "./types/theme.types";
import { animateReveal, readStoredTheme, storeTheme } from "./utils/theme.utils";

const darkScheme: MediaQueryList = window.matchMedia(DARK_SCHEME_QUERY);
const reducedMotion: MediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);

class Theme {
  choice: ThemeChoice | null = $state(readStoredTheme());
  systemDark: boolean = $state(darkScheme.matches);

  current: ThemeChoice = $derived(this.choice ?? (this.systemDark ? "dark" : "light"));

  constructor() {
    darkScheme.addEventListener("change", (event) => {
      this.systemDark = event.matches;
    });
  }

  toggle(origin?: Point): void {
    const next: ThemeChoice = this.current === "dark" ? "light" : "dark";
    const apply = (): void => {
      flushSync(() => {
        this.choice = next;
      });
      document.documentElement.dataset["theme"] = next;
    };

    storeTheme(next);

    if (!("startViewTransition" in document) || reducedMotion.matches) {
      apply();
      return;
    }

    const transition: ViewTransition = document.startViewTransition(apply);
    transition.ready
      .then(() => {
        animateReveal(origin ?? { x: window.innerWidth / 2, y: 0 });
      })
      .catch(() => undefined);
  }
}

export const theme: Theme = new Theme();
