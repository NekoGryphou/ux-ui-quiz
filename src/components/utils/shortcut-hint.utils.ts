import { readStorage, writeStorage } from "../../shared/utils/storage.utils";
import { SHORTCUT_HINT_STORAGE_KEY } from "../const/shortcut-hint.const";

/**
 * @export
 * @desc Whether the shortcut hint was dismissed before.
 *
 * @returns True once dismissed.
 */
export const readHintDismissed = (): boolean => readStorage(SHORTCUT_HINT_STORAGE_KEY) === "1";

/**
 * @export
 * @desc Persists the shortcut hint dismissal in storage.
 */
export const storeHintDismissed = (): void => {
  writeStorage(SHORTCUT_HINT_STORAGE_KEY, "1");
};
