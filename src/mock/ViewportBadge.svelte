<script lang="ts">
    import type {ViewportBadgeProps} from "./types/viewport-badge.types";

    let { label }: ViewportBadgeProps = $props();
</script>

<span class="viewport">{label}</span>

<style lang="scss">
  .viewport {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 3px 10px;
    border-radius: 999px;
    background: var(--pill-bg);
    color: var(--pill-text);
    font: 600 11px/1.4 var(--font-mock);
    letter-spacing: 0.04em;

    &::before {
      content: "↔";
    }
  }
</style>
