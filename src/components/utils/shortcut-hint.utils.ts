import { SHORTCUT_HINT_STORAGE_KEY } from "../const/shortcut-hint.const";

export const readHintDismissed = (): boolean => {
  try {
    return localStorage.getItem(SHORTCUT_HINT_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};

export const storeHintDismissed = (): void => {
  try {
    localStorage.setItem(SHORTCUT_HINT_STORAGE_KEY, "1");
  } catch {
    return;
  }
};
