<script lang="ts">
  import type { SideNavProps } from "./types/side-nav.types";
  import Icon from "../components/Icon.svelte";

  let { items, activeStyle = "default" }: SideNavProps = $props();
</script>

<div class="sidenav sidenav--{activeStyle}">
  {#each items as item, i (i)}
    <span class="sidenav__item" class:sidenav__item--active={item.active}>
      {#if item.icon}<Icon name={item.icon} size={16} />{/if}
      <span class="sidenav__label">{item.label}</span>
      {#if item.badge}<span class="sidenav__badge">{item.badge}</span>{/if}
    </span>
  {/each}
</div>

<style lang="scss">
  .sidenav {
    display: grid;
    gap: 2px;
    align-content: start;

    &__item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 7px 10px;
      border-radius: 6px;
      color: var(--mock-muted);
      font-weight: 500;
    }

    &__label {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &__badge {
      padding: 0 6px;
      border-radius: 999px;
      background: var(--mock-track);
      color: var(--mock-text);
      font-size: 11px;
    }

    &--default &__item--active {
      background: var(--mock-primary-soft);
      color: var(--mock-primary-strong);
    }

    &--faint &__item--active {
      background: #f3f4f6;
      color: #8a909c;
    }
  }
</style>
