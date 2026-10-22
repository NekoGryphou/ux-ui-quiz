<script lang="ts">
  import { Avatar, BrandTheme, BrowserShell, Icon, TopBar } from "../mock";

  const items: string[] = ["Rename", "Duplicate", "Delete", "Move to…", "Download"];
</script>

<BrandTheme brand="playful">
  <BrowserShell url="drive.northwind.io/projects/website-2025">
    <TopBar brand="Northwind Drive" />
    <div class="page">
      {#each ["Homepage — final.fig", "Pricing page v4.fig", "Brand guidelines.pdf"] as file, index (file)}
        <div class="row" class:row--active={index === 0}>
          <Icon name="file" size={15} />
          <span class="row__name">{file}</span>
          <Avatar name={["Ana Silva", "Tom Becker", "Léa Moreau"][index] ?? "Ana Silva"} size={22} />
          <span class="row__more"><Icon name="more" size={16} /></span>
          {#if index === 0}
            <div class="menu">
              {#each items as item (item)}<span>{item}</span>{/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    display: grid;
    align-content: start;
    gap: 2px;
    min-height: 320px;
    padding: 18px 20px;
  }

  .row {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border-radius: 8px;
    background: var(--mock-surface);

    &--active {
      background: var(--mock-primary-soft);
    }

    &__name {
      flex: 1;
      font-weight: 500;
    }

    &__more {
      display: grid;
      place-items: center;
      width: 26px;
      height: 26px;
      border-radius: 6px;
    }
  }

  .menu {
    position: absolute;
    top: calc(100% + 4px);
    right: 8px;
    z-index: 1;
    display: grid;
    gap: 2px;
    min-width: 170px;
    padding: 6px;
    border: 1px solid var(--mock-border);
    border-radius: 10px;
    background: var(--mock-surface);
    box-shadow: var(--mock-shadow-md);

    span {
      padding: 7px 10px;
      border-radius: 6px;
    }

    span:nth-child(2) {
      background: var(--mock-fill);
    }
  }
</style>
