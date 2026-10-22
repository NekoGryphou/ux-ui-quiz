import { STORAGE_PREFIX } from "../../shared/const/storage.const";

/**
 * @export
 * @desc Storage key of the saved main run.
 */
export const SESSION_STORAGE_KEY: string = `${STORAGE_PREFIX}session:v1`;

/**
 * @export
 * @desc Storage key of the saved practice run.
 */
export const PRACTICE_STORAGE_KEY: string = `${STORAGE_PREFIX}practice:v1`;

/**
 * @export
 * @desc Storage key of the completed runs history.
 */
export const HISTORY_STORAGE_KEY: string = `${STORAGE_PREFIX}history:v1`;

/**
 * @export
 * @desc Shuffle salt for the question order.
 */
export const ORDER_SHUFFLE_KEY: string = "question-order";

/**
 * @export
 * @desc Number of questions in a quick run.
 */
export const QUICK_RUN_SIZE: number = 10;

/**
 * @export
 * @desc Number of questions in a full run.
 */
export const FULL_RUN_SIZE: number = 30;

/**
 * @export
 * @desc Maximum number of completed runs kept in the history.
 */
export const HISTORY_LIMIT: number = 50;
