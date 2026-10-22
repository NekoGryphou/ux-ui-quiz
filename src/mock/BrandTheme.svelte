<script lang="ts">
    import type {BrandThemeProps} from "./types/brand-theme.types";
    import {brandStyle} from "./utils/brand.utils";

    let { brand, children }: BrandThemeProps = $props();
</script>

<div class="brand" style={brandStyle(brand)}>{@render children()}</div>

<style lang="scss">
  .brand {
    display: contents;
    // noinspection CssNoGenericFontName
    font-family: var(--mock-font);
  }
</style>
