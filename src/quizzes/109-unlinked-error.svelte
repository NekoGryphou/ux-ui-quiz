<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { CodeEditor, CodeLines, Field } from "../mock";
  import { t } from "../shared/locale.svelte";

  let { variant = "a" }: VisualProps = $props();

  const label: string = $derived(t("Email", "E-mail"));
  const message: string = $derived(
    t("Add the part after @, like camille@example.com.", "Ajoutez la partie après @, par exemple camille@example.com.")
  );
  const errorLines: string = $derived(
    t(
      "  Add the part after @, like\n  camille@example.com.",
      "  Ajoutez la partie après @,\n  par exemple camille@example.com."
    )
  );
  const unlinkedVersion: string = $derived(
    `<label for="email">${label}</label>\n<input\n  id="email"\n  type="email"\n  value="camille@"\n>\n<p class="error">\n${errorLines}\n</p>`
  );
  const linkedVersion: string = $derived(
    `<label for="email">${label}</label>\n<input\n  id="email"\n  type="email"\n  value="camille@"\n  aria-invalid="true"\n  aria-describedby="email-error"\n>\n<p id="email-error" class="error">\n${errorLines}\n</p>`
  );
</script>

<div class="version">
  <CodeEditor filename="signup.html" compact>
    <CodeLines code={variant === "a" ? unlinkedVersion : linkedVersion} start={1} />
  </CodeEditor>
  <div class="preview">
    <Field {label} value="camille@" state="error" {message} />
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
