<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "div-button",
    title: "A button that isn’t one",
    principle: "Use native interactive elements",
    scenario: "Two developers implement the close icon of a side panel. Both versions look identical on screen.",
    prompt: "Which implementation works better?",
    kind: "compare",
    correct: ["b"],
    links: [wcag("2.1.1", "Keyboard", "keyboard"), wcag("4.1.2", "Name, Role, Value", "name-role-value")],
    explanation: [
      "A div with a click handler can’t be reached with Tab or activated with Enter or Space, and screen readers don’t know it’s a button (WCAG 2.1.1 Keyboard, 4.1.2 Name, Role, Value).",
      'A native <button> brings focus, keyboard activation and the button role for free. Because it only shows an icon, it also needs a name: aria-label="Close panel", with the decorative SVG hidden.',
      "Rebuilding all of that on a div (tabindex, key handlers, role) is possible but fragile; the native element is simpler and more robust."
    ]
  };
</script>

<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { CodeEditor, CodeLines } from "../mock";

  let { variant = "a" }: VisualProps = $props();

  const divVersion: string =
    '<div class="icon-btn"\n     onclick="closePanel()">\n  <svg viewBox="0 0 24 24">\n    <path d="M18 6 6 18"/>\n  </svg>\n</div>';
  const buttonVersion: string =
    '<button type="button"\n        class="icon-btn"\n        aria-label="Close panel"\n        onclick="closePanel()">\n  <svg viewBox="0 0 24 24"\n       aria-hidden="true">\n    <path d="M18 6 6 18"/>\n  </svg>\n</button>';
</script>

<CodeEditor filename="Panel.html" compact>
  <CodeLines code={variant === "a" ? divVersion : buttonVersion} start={1} />
</CodeEditor>
