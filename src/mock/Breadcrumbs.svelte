<script lang="ts">
  import Icon from "../components/Icon.svelte";
  import type { BreadcrumbsProps } from "./types/breadcrumbs.types";

  let { items }: BreadcrumbsProps = $props();
</script>

<div class="crumbs">
  {#each items as item, i (i)}
    {#if i > 0}<Icon name="chevron-right" size={12} />{/if}
    <span class:crumbs__current={i === items.length - 1}>{item}</span>
  {/each}
</div>

<style lang="scss">
  .crumbs {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--mock-muted);
    font-size: 12px;

    &__current {
      color: var(--mock-text);
      font-weight: 500;
    }
  }
</style>
