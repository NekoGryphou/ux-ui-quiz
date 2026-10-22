import { PIXEL_AVATARS } from "../const/avatar.const";

/**
 * @private
 * @desc Glob key of the pixel avatar file for a seed.
 *
 * @param seed - Avatar name, accents and case ignored.
 *
 * @returns The glob key.
 */
const avatarKey = (seed: string): string =>
  `../assets/avatars/${seed
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()}.svg`;

/**
 * @export
 * @desc URL of the bundled pixel avatar for a name.
 * Throws when no avatar file matches.
 *
 * @param seed - Avatar name, accents and case ignored.
 *
 * @returns The avatar URL.
 */
export const pixelAvatar = (seed: string): string => {
  const url: string | undefined = PIXEL_AVATARS[avatarKey(seed)];
  if (url === undefined) throw new Error(`Missing pixel avatar for "${seed}".`);
  return url;
};
