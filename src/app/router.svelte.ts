import { flushSync } from "svelte";
import { PAGE_TRANSITION_ATTRIBUTE, REDUCED_MOTION_QUERY_PAGE } from "./const/transition.const";
import type { Route } from "./types/router.types";
import { resolveRoute } from "./utils/router.utils";
import { pageDirection } from "./utils/transition.utils";

const reducedMotion: MediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY_PAGE);

class Router {
  route: Route = $state(resolveRoute());
  #transition: ViewTransition | null = null;

  constructor() {
    window.addEventListener("hashchange", () => {
      this.go(resolveRoute());
    });
  }

  replace(target: string): void {
    history.replaceState(null, "", target);
    this.route = resolveRoute();
  }

  private go(next: Route): void {
    const apply = (): void => {
      flushSync(() => {
        this.route = next;
      });
      window.scrollTo({ top: 0 });
    };

    if (!("startViewTransition" in document) || reducedMotion.matches) {
      apply();
      return;
    }

    const root: HTMLElement = document.documentElement;
    root.dataset[PAGE_TRANSITION_ATTRIBUTE] = pageDirection(this.route, next);
    const transition: ViewTransition = document.startViewTransition(apply);
    this.#transition = transition;
    transition.ready.catch(() => undefined);
    transition.finished
      .catch(() => undefined)
      .finally(() => {
        if (this.#transition !== transition) return;
        this.#transition = null;
        Reflect.deleteProperty(root.dataset, PAGE_TRANSITION_ATTRIBUTE);
      });
  }
}

export const router: Router = new Router();
