/**
 * @export
 * @desc Callback for storage changes from another tab; a null key means storage was cleared.
 */
export type StorageListener = (key: string | null, value: string | null) => void;
