<script lang="ts">
    import Icon from "../components/Icon.svelte";
    import type {TabBarProps} from "./types/tab-bar.types";

    let { tabs, iconsOnly = false }: TabBarProps = $props();
</script>

<div class="tabbar" style="--count: {tabs.length}">
  {#each tabs as tab (tab.label)}
    <span class="tabbar__tab" class:tabbar__tab--active={tab.active}>
      <span class="tabbar__icon">
        <Icon name={tab.icon} size={iconsOnly ? 20 : 22} />
        {#if tab.badge}<span class="tabbar__badge">{tab.badge}</span>{/if}
      </span>
      {#if !iconsOnly}<span class="tabbar__label">{tab.label}</span>{/if}
    </span>
  {/each}
</div>

<style lang="scss">
  .tabbar {
    display: grid;
    grid-template-columns: repeat(var(--count), 1fr);
    margin-top: auto;
    padding: 6px 4px 22px;
    border-top: 1px solid var(--mock-border);
    background: var(--mock-surface);

    &__tab {
      display: grid;
      justify-items: center;
      gap: 2px;
      color: var(--mock-muted);

      &--active {
        color: var(--mock-primary);
      }
    }

    &__icon {
      position: relative;
      display: grid;
      place-items: center;
      height: 26px;
    }

    &__badge {
      position: absolute;
      top: -2px;
      right: -9px;
      min-width: 16px;
      padding: 0 4px;
      border-radius: 999px;
      background: var(--mock-danger);
      color: var(--mock-on-accent);
      font-size: 10px;
      font-weight: 600;
      line-height: 16px;
      text-align: center;
    }

    &__label {
      font-size: 10px;
      font-weight: 500;
    }
  }
</style>
