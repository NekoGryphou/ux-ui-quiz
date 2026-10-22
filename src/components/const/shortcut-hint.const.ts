import { STORAGE_PREFIX } from "../../shared/const/storage.const";

/**
 * @export
 * @desc Storage key set once the shortcut hint is dismissed.
 */
export const SHORTCUT_HINT_STORAGE_KEY: string = `${STORAGE_PREFIX}shortcut-hint-dismissed`;

/**
 * @export
 * @desc Duration of the shortcut hint collapse, in ms.
 */
export const HINT_DISMISS_MS: number = 260;
