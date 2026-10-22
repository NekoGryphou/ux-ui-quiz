<script lang="ts">
    import type {CodeEditorProps, CodeLanguage} from "./types/code.types";
    import {languageOf, provideCodeContext} from "./utils/code.utils";

    let { filename, compact = false, children }: CodeEditorProps = $props();

  provideCodeContext({
    get language(): CodeLanguage {
      return languageOf(filename);
    }
  });
</script>

<div class="editor" class:editor--compact={compact}>
  <div class="editor__tabs">
    <span class="editor__tab">{filename}</span>
  </div>
  <div class="editor__body">
    {@render children()}
  </div>
</div>

<style lang="scss">
  .editor {
    --ring-surface: dark;
    width: 600px;
    overflow: hidden;
    border-radius: 12px;
    background: var(--mock-code-bg);
    box-shadow: var(--mock-shadow-lg);
    color: var(--mock-code-text);
    font:
      13px/1.7 "JetBrains Mono",
      ui-monospace,
      "SFMono-Regular",
      Menlo,
      monospace;

    &--compact {
      width: 320px;
      font-size: 12px;
    }

    &__tabs {
      display: flex;
      background: var(--mock-code-chrome);
    }

    &__tab {
      padding: 8px 16px;
      border-top: 2px solid var(--mock-primary);
      background: var(--mock-code-bg);
      color: var(--mock-code-text);
      font-size: 12px;

      &:first-child {
        border-top-left-radius: 12px;
      }
    }

    &__body {
      display: grid;
      gap: 6px;
      padding: 14px 16px 18px 0;
    }
  }
</style>
