import { flushSync } from "svelte";
import { PAGE_TRANSITION_ATTRIBUTE } from "./const/transition.const";
import type { Route } from "./types/router.types";
import { resolveRoute } from "./utils/router.utils";
import { pageDirection, runViewTransition } from "./utils/transition.utils";

/**
 * @private
 * @desc Hash router holding the current route.
 * Route changes run inside a view transition.
 */
class Router {
  /**
   * @public
   * @desc Current route.
   */
  public route: Route = $state(resolveRoute());
  /**
   * @private
   * @desc View transition in progress, if any.
   */
  private transition: ViewTransition | null = null;

  /**
   * @public
   * @desc Starts listening to hash changes.
   */
  public constructor() {
    window.addEventListener("hashchange", () => {
      this.go(resolveRoute());
    });
  }

  /**
   * @public
   * @desc Navigates to a hash, adding a history entry.
   *
   * @param target - Hash to open.
   */
  public navigate(target: string): void {
    window.location.hash = target;
  }

  /**
   * @public
   * @desc Replaces the URL without a history entry or transition.
   *
   * @param target - URL to show.
   */
  public replace(target: string): void {
    history.replaceState(null, "", target);
    this.route = resolveRoute();
  }

  /**
   * @private
   * @desc Switches to a route with a directional page transition.
   *
   * @param next - Route to show.
   */
  private go(next: Route): void {
    const root: HTMLElement = document.documentElement;
    root.dataset[PAGE_TRANSITION_ATTRIBUTE] = pageDirection(this.route, next);

    const transition: ViewTransition | null = runViewTransition((): void => {
      flushSync(() => {
        this.route = next;
      });
      window.scrollTo({ top: 0 });
    });
    this.transition = transition;

    if (transition === null) {
      Reflect.deleteProperty(root.dataset, PAGE_TRANSITION_ATTRIBUTE);
      return;
    }

    transition.ready.catch(() => undefined);
    transition.finished
      .catch(() => undefined)
      .finally(() => {
        if (this.transition !== transition) return;
        this.transition = null;
        Reflect.deleteProperty(root.dataset, PAGE_TRANSITION_ATTRIBUTE);
      });
  }
}

/**
 * @export
 * @desc App-wide router.
 */
export const router: Router = new Router();
