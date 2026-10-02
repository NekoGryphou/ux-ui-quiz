<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "tab-order",
    title: "A tour of the page before the form",
    principle: "Keep keyboard order logical and let users skip repeated blocks",
    scenario:
      "A keyboard user opens a contact page to send a message. Try it: click the preview and press Tab to move through the page as they would.",
    prompt: "Which issues will this keyboard user run into?",
    kind: "multiple",
    choices: [
      { id: "a", text: "Inside the form, focus jumps to Send before the Name and Company fields." },
      { id: "b", text: "Fourteen header links come before the form, with no way to skip past them." },
      { id: "c", text: "The header links are plain text, where icons would make them faster to scan." },
      { id: "d", text: "The form has no placeholder text showing the expected format of each field." }
    ],
    correct: ["a", "b"],
    links: [wcag("2.4.3", "Focus Order", "focus-order"), wcag("2.4.1", "Bypass Blocks", "bypass-blocks")],
    explanation: [
      "Focus order must follow the visual order (WCAG 2.4.3 Focus Order). Positive tabindex values usually cause jumps like this one; keep the DOM in reading order instead.",
      "Before reaching the form, the user presses Tab 14 times through the header. A “Skip to content” link as the first stop solves it (WCAG 2.4.1 Bypass Blocks).",
      "Text links are the clearest navigation, and visible labels already explain each field."
    ]
  };
</script>

<script lang="ts">
  import type { KeyStop } from "../mock/types/keyboard.types";
  import { BrandTheme, BrowserShell, KeyTarget, KeyboardSandbox, MockButton } from "../mock";

  const links: string[] = [
    "Product",
    "Features",
    "Pricing",
    "Customers",
    "Integrations",
    "Docs",
    "API",
    "Blog",
    "Events",
    "Careers",
    "Press",
    "Status",
    "Log in",
    "Sign up"
  ];

  const stops: KeyStop[] = [
    ...links.map((link): KeyStop => ({ id: link, label: `${link} link` })),
    { id: "email", label: "Email field" },
    { id: "send", label: "Send button" },
    { id: "name", label: "Name field" },
    { id: "company", label: "Company field" },
    { id: "message", label: "Message field" }
  ];
</script>

<BrandTheme brand="corporate">
  <KeyboardSandbox {stops}>
    <BrowserShell url="www.relaykit.io/contact">
      <div class="header">
        <span class="brand">Relaykit</span>
        <div class="links">
          {#each links as link (link)}
            <KeyTarget id={link} inline><span class="link">{link}</span></KeyTarget>
          {/each}
        </div>
      </div>
      <div class="page">
        <p class="title">Contact sales</p>
        <div class="row">
          <KeyTarget id="name"><span class="field">Name</span></KeyTarget>
          <KeyTarget id="company"><span class="field">Company</span></KeyTarget>
        </div>
        <KeyTarget id="email"><span class="field">Email</span></KeyTarget>
        <KeyTarget id="message"><span class="field field--area">Message</span></KeyTarget>
        <KeyTarget id="send" inline><MockButton variant="primary">Send</MockButton></KeyTarget>
      </div>
    </BrowserShell>
  </KeyboardSandbox>
</BrandTheme>

<style lang="scss">
  .header {
    display: grid;
    gap: 8px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--mock-border);
    background: var(--mock-surface);
  }

  .brand {
    font-weight: 700;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 14px;
  }

  .link {
    color: var(--mock-muted);
    font-size: 12px;
  }

  .page {
    display: grid;
    gap: 12px;
    max-width: 420px;
    padding: 20px 24px 26px;
  }

  .title {
    font-size: 18px;
    font-weight: 600;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .field {
    display: block;
    padding: 9px 11px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius);
    background: var(--mock-surface);
    color: var(--mock-muted);

    &--area {
      height: 60px;
    }
  }
</style>
