<script lang="ts">
  import { RETRO_BROWSER_BUTTONS, RETRO_BROWSER_MENU, RETRO_BROWSER_STATUS } from "./const/retro.const";
  import RetroField from "./RetroField.svelte";
  import RetroWindow from "./RetroWindow.svelte";
  import type { RetroBrowserProps } from "./types/retro-browser.types";

  let { title, url, width = 640, children }: RetroBrowserProps = $props();
</script>

<RetroWindow
  title="{title} - Microsoft Internet Explorer"
  menu={RETRO_BROWSER_MENU}
  status={RETRO_BROWSER_STATUS}
  {width}
>
  {#snippet toolbar()}
    {#each RETRO_BROWSER_BUTTONS as button (button)}
      <span class="tool">{button}</span>
    {/each}
    <span class="address">Address <RetroField value={url} grow /></span>
  {/snippet}
  <div class="page">{@render children()}</div>
</RetroWindow>

<style lang="scss">
  @use "$styles/mixins" as *;

  .tool {
    padding: 2px 6px;
    color: var(--mock-retro-dark);
  }

  .address {
    display: inline-flex;
    align-items: center;
    flex: 1;
    gap: 6px;
    min-width: 0;
    margin-left: 12px;
  }

  .page {
    margin: -6px;
    @include retro-sunken;
    padding: 2px;
    overflow: hidden;
  }
</style>
