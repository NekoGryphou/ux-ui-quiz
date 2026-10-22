<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { CodeEditor, CodeLines, Icon } from "../mock";

  let { variant = "a" }: VisualProps = $props();

  const remVersion: string =
    ".recipe-title {\n  font-size: 1.25rem;\n  line-height: 1.25;\n}\n\n.recipe-text {\n  font-size: 1rem;\n  line-height: 1.5;\n}";
  const pxVersion: string =
    ".recipe-title {\n  font-size: 20px;\n  line-height: 1.25;\n}\n\n.recipe-text {\n  font-size: 16px;\n  line-height: 1.5;\n}";
</script>

<div class="version">
  <CodeEditor filename="recipe.css" compact>
    <CodeLines code={variant === "a" ? remVersion : pxVersion} start={1} />
  </CodeEditor>
  <div class="preview" class:preview--rem={variant === "a"}>
    <span class="setting"><Icon name="settings" size={12} />Default font size: 24px</span>
    <p class="recipe-title">Tomato soup</p>
    <p class="recipe-text">Simmer the tomatoes for twenty minutes, then blend until smooth.</p>
  </div>
</div>

<style lang="scss">
  .version {
    display: grid;
    gap: 12px;
    width: 320px;
  }

  .preview {
    display: grid;
    gap: 10px;
    justify-items: start;
    padding: 16px;
    border: 1px solid var(--mock-border);
    border-radius: 12px;
    background: var(--mock-surface);
    box-shadow: var(--mock-shadow-md);
    color: var(--mock-text);

    &--rem {
      .recipe-title {
        font-size: 30px;
      }

      .recipe-text {
        font-size: 24px;
      }
    }
  }

  .setting {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 9px;
    border-radius: 999px;
    background: var(--mock-fill);
    color: var(--mock-muted);
    font-size: 11px;
  }

  .recipe-title {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.25;
  }

  .recipe-text {
    font-size: 16px;
    line-height: 1.5;
  }
</style>
