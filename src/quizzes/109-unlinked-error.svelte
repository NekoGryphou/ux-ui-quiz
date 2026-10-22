<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { CodeEditor, CodeLines, Field } from "../mock";

  let { variant = "a" }: VisualProps = $props();

  const message: string = "Add the part after @, like camille@example.com.";
  const unlinkedVersion: string =
    '<label for="email">Email</label>\n<input\n  id="email"\n  type="email"\n  value="camille@"\n>\n<p class="error">\n  Add the part after @, like\n  camille@example.com.\n</p>';
  const linkedVersion: string =
    '<label for="email">Email</label>\n<input\n  id="email"\n  type="email"\n  value="camille@"\n  aria-invalid="true"\n  aria-describedby="email-error"\n>\n<p id="email-error" class="error">\n  Add the part after @, like\n  camille@example.com.\n</p>';
</script>

<div class="version">
  <CodeEditor filename="signup.html" compact>
    <CodeLines code={variant === "a" ? unlinkedVersion : linkedVersion} start={1} />
  </CodeEditor>
  <div class="preview">
    <Field label="Email" value="camille@" state="error" {message} />
  </div>
</div>

<style lang="scss">
  .version {
    display: grid;
    gap: 12px;
    width: 320px;
  }

  .preview {
    padding: 18px 16px;
    border: 1px solid var(--mock-border);
    border-radius: 12px;
    background: var(--mock-surface);
    box-shadow: var(--mock-shadow-md);
    color: var(--mock-text);
    font-size: 13px;
  }
</style>
