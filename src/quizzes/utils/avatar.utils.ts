import { PIXEL_AVATAR_BASE } from "../const/avatar.const";

export const pixelAvatar = (seed: string): string => `${PIXEL_AVATAR_BASE}${encodeURIComponent(seed)}`;
