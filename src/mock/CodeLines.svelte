<script lang="ts">
  import type { CodeLinesProps } from "./types/code.types";
  import { tokenizeHtml } from "./utils/code.utils";

  let { code, start }: CodeLinesProps = $props();

  const lines: string[] = $derived(code.split("\n"));
</script>

<div class="lines">
  {#each lines as line, index (index)}
    <div class="line">
      <span class="line__number">{start + index}</span>
      <code class="line__code">
        {#each tokenizeHtml(line) as token, tokenIndex (tokenIndex)}<span class="token token--{token.kind}"
            >{token.text}</span
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

  .token {
    &--tag {
      color: var(--mock-code-tag);
    }

    &--attr {
      color: var(--mock-code-attr);
    }

    &--value {
      color: var(--mock-code-value);
    }

    &--punct {
      color: var(--mock-code-muted);
    }
  }
</style>
