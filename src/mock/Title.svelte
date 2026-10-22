<script lang="ts">
  import type { TitleProps } from "./types/title.types";

  let { size = "md", children }: TitleProps = $props();
</script>

<p class="title title--{size}">{@render children()}</p>

<style lang="scss">
  .title {
    margin: 0;
    // noinspection CssNoGenericFontName
    font-family: var(--mock-heading-font);
    font-weight: var(--mock-heading-weight);
    letter-spacing: var(--mock-heading-tracking);
    line-height: 1.25;

    &--sm {
      font-size: 15px;
    }

    &--md {
      font-size: 18px;
    }

    &--lg {
      font-size: 22px;
    }
  }
</style>
