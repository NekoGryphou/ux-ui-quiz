import type { StorageListener } from "../../shared/types/storage.types";
import type { QuizCatalog } from "./catalog.types";

/**
 * @export
 * @desc Key-value persistence injected into {@link Session}.
 *
 * @property read - Reads a value.
 * @property write - Stores or removes a value.
 * @property subscribe - Listens for other tabs' changes.
 */
export interface SessionStore {
  /** Reads a value, null when missing. */
  read: (key: string) => string | null;

  /** Stores a value, removes it when null; returns success. */
  write: (key: string, value: string | null) => boolean;

  /** Listens for changes made in other tabs. */
  subscribe: (listener: StorageListener) => void;
}

/**
 * @export
 * @desc Constructor options of {@link Session}.
 *
 * @property catalog - Quizzes to build runs from.
 * @property store - Persistence backend.
 */
export interface SessionOptions {
  /** Quizzes to build runs from. */
  catalog: QuizCatalog;

  /** Persistence backend. */
  store: SessionStore;
}
