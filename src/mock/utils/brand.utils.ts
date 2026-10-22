import { BRAND_TOKENS } from "../const/brand.const";
import type { BrandName } from "../types/brand-theme.types";

/**
 * @export
 * @desc Returns a brand's tokens as an inline style string.
 *
 * @param brand - Brand theme.
 *
 * @returns CSS declarations.
 */
export const brandStyle = (brand: BrandName): string =>
  Object.entries(BRAND_TOKENS[brand])
    .map(([property, value]): string => `${property}: ${value}`)
    .join("; ");
