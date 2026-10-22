/**
 * @export
 * @desc Visual component path matching a quiz meta file path.
 *
 * @param metaPath - Meta file path.
 *
 * @returns The visual file path.
 */
export const visualPathFor = (metaPath: string): string =>
  metaPath.replace(/^\.\/meta\//, "./").replace(/\.meta\.ts$/, ".svelte");

/**
 * @export
 * @desc Sort comparator ordering entries by path with numeric prefixes.
 *
 * @param a - First entry.
 * @param b - Second entry.
 *
 * @returns The comparison result.
 */
export const byFileOrder = ([a]: [string, unknown], [b]: [string, unknown]): number =>
  a.localeCompare(b, undefined, { numeric: true });
