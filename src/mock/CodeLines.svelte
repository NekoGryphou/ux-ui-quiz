<script lang="ts">
    import {codeHighlighter} from "./code-highlighter.svelte";
    import type {CodeContext, CodeLinesProps, CodeToken} from "./types/code.types";
    import {readCodeContext} from "./utils/code.utils";

    let { code, start }: CodeLinesProps = $props();

  const context: CodeContext | undefined = readCodeContext();

  const lines: CodeToken[][] = $derived(codeHighlighter.lines(code, context?.language ?? "html"));

  $effect(() => {
    codeHighlighter.load();
  });
</script>

<div class="lines">
  {#each lines as line, index (index)}
    <div class="line">
      <span class="line__number">{start + index}</span>
      <code class="line__code">
        {#each line as token, tokenIndex (tokenIndex)}<span style:color={token.color} class:italic={token.italic}
            >{token.content}</span
          >{/each}
      </code>
    </div>
  {/each}
</div>

<style lang="scss">
  .lines {
    display: grid;
  }

  .line {
    display: grid;
    grid-template-columns: 44px 1fr;
    white-space: pre;

    &__number {
      padding-right: 14px;
      color: var(--mock-code-muted);
      text-align: right;
      user-select: none;
    }

    &__code {
      font: inherit;
    }
  }

  .italic {
    font-style: italic;
  }
</style>
