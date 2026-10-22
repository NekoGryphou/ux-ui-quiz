/**
 * @private
 * @desc Creates a seeded pseudo-random generator (mulberry32).
 *
 * @param seed - Initial state.
 *
 * @returns Generator of numbers in [0, 1).
 */
const mulberry32 =
  (seed: number): (() => number) =>
  (): number => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t: number = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

/**
 * @private
 * @desc Hashes a string to an unsigned 32-bit integer (FNV-1a).
 *
 * @param value - String to hash.
 *
 * @returns The hash.
 */
const hashString = (value: string): number => {
  let hash: number = 2166136261;
  for (let i: number = 0; i < value.length; i++) {
    hash = Math.imul(hash ^ value.charCodeAt(i), 16777619);
  }
  return hash >>> 0;
};

/**
 * @export
 * @desc Returns a random unsigned 32-bit seed.
 *
 * @returns The seed.
 */
export const randomSeed = (): number => Math.floor(Math.random() * 2 ** 32);

/**
 * @export
 * @desc Returns a shuffled copy, deterministic for a given seed and key.
 * The key lets one seed give independent orders (questions, each quiz's options).
 *
 * @template T - Item type.
 *
 * @param items - Items to shuffle.
 * @param seed - Run seed.
 * @param key - Shuffle purpose.
 *
 * @returns Shuffled copy.
 */
export const seededShuffle = <T>(items: readonly T[], seed: number, key: string): T[] => {
  const random: () => number = mulberry32(seed ^ hashString(key));
  const result: T[] = [...items];
  for (let i: number = result.length - 1; i > 0; i--) {
    const j: number = Math.floor(random() * (i + 1));
    const current: T | undefined = result[i];
    const other: T | undefined = result[j];
    if (current === undefined || other === undefined) continue;
    result[i] = other;
    result[j] = current;
  }
  return result;
};
