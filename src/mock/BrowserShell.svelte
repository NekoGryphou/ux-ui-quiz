<script lang="ts">
    import type {BrowserShellProps} from "./types/browser-shell.types";

    let { url, children }: BrowserShellProps = $props();
</script>

<div class="browser">
  <div class="browser__chrome">
    <span class="browser__dots" aria-hidden="true"><i></i><i></i><i></i></span>
    <span class="browser__url">{url}</span>
  </div>
  <div class="browser__body">
    {@render children()}
  </div>
</div>

<style lang="scss">
  .browser {
    width: 680px;
    overflow: hidden;
    border: 1px solid var(--mock-border);
    border-radius: 14px;
    background: var(--mock-bg);
    box-shadow: var(--mock-shadow-md);
    color: var(--mock-text);
    font-size: 13px;
    line-height: 1.45;

    &__chrome {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 14px;
      background: var(--mock-chrome);
      border-bottom: 1px solid var(--mock-border);
    }

    &__dots {
      display: inline-flex;
      gap: 6px;

      i {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--mock-chrome-dot);
      }
    }

    &__body {
      clip-path: inset(0 round 0 0 13px 13px);
    }

    &__url {
      flex: 1;
      max-width: 340px;
      margin-inline: auto;
      padding: 3px 12px;
      overflow: hidden;
      border-radius: 6px;
      background: var(--mock-surface);
      color: var(--mock-muted);
      font-size: 11px;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
</style>
