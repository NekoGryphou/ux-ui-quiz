<script lang="ts">
    import type {VisualProps} from "../engine/types/quiz.types";
    import {CodeEditor, CodeLines} from "../mock";

    let { variant = "a" }: VisualProps = $props();

  // noinspection JSUnresolvedReference
  const divVersion: string =
    '<div class="icon-btn"\n     onclick="closePanel()">\n  <svg viewBox="0 0 24 24">\n    <path d="M18 6 6 18"/>\n  </svg>\n</div>';
  // noinspection JSUnresolvedReference
  const buttonVersion: string =
    '<button type="button"\n        class="icon-btn"\n        aria-label="Close panel"\n        onclick="closePanel()">\n  <svg viewBox="0 0 24 24"\n       aria-hidden="true">\n    <path d="M18 6 6 18"/>\n  </svg>\n</button>';
</script>

<CodeEditor filename="Panel.html" compact>
  <CodeLines code={variant === "a" ? divVersion : buttonVersion} start={1} />
</CodeEditor>
