import { BRAND_TOKENS } from "../const/brand.const";
import type { BrandName } from "../types/brand-theme.types";

export const brandStyle = (brand: BrandName): string =>
  Object.entries(BRAND_TOKENS[brand])
    .map(([property, value]): string => `${property}: ${value}`)
    .join("; ");
