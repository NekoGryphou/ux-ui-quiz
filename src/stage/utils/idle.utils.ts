import { IDLE_FALLBACK_MS } from "../const/visual-cache.const";

/**
 * @export
 * @desc Schedules a callback for browser idle time, with a timeout fallback.
 *
 * @param callback - Work to run.
 *
 * @returns Cancel function.
 */
export const whenIdle = (callback: () => void): (() => void) => {
  if ("requestIdleCallback" in window) {
    const handle: number = window.requestIdleCallback(callback);
    return (): void => {
      window.cancelIdleCallback(handle);
    };
  }
  const timer: ReturnType<typeof setTimeout> = setTimeout(callback, IDLE_FALLBACK_MS);
  return (): void => {
    clearTimeout(timer);
  };
};
