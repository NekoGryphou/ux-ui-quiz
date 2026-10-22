import type { StorageListener } from "../types/storage.types";

/**
 * @export
 * @desc Reads a local storage value, safely.
 *
 * @param key - Storage key.
 *
 * @returns The value, or null when missing or unavailable.
 */
export const readStorage = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

/**
 * @export
 * @desc Writes or removes a local storage value, safely.
 *
 * @param key - Storage key.
 * @param value - Value, or null to remove.
 *
 * @returns Whether the write succeeded.
 */
export const writeStorage = (key: string, value: string | null): boolean => {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
};

/**
 * @export
 * @desc Listens to storage changes made in other tabs.
 *
 * @param listener - Change callback.
 *
 * @returns A function that stops listening.
 */
export const subscribeStorage = (listener: StorageListener): (() => void) => {
  /**
   * @private
   * @desc Forwards a storage event to the listener.
   *
   * @param event - Storage event.
   */
  const onStorage = (event: StorageEvent): void => {
    listener(event.key, event.newValue);
  };
  window.addEventListener("storage", onStorage);
  return (): void => {
    window.removeEventListener("storage", onStorage);
  };
};
