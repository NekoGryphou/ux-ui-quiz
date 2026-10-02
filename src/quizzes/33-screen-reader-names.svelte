<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "screen-reader-names",
    title: "What the screen reader hears",
    principle: "Give every control a name that makes sense on its own",
    scenario:
      "A blind user tabs through their inbox. The panel on the right shows what their screen reader announces at each stop.",
    prompt: "Which issues does this transcript reveal?",
    kind: "multiple",
    choices: [
      { id: "a", text: "The toolbar icons are announced only as “button”, with no name saying what they do." },
      { id: "b", text: "Two links are announced as “click here”, which says nothing about where they lead." },
      { id: "c", text: "The heading is announced with its level, which adds noise before the actual content." },
      { id: "d", text: "Archive is announced as a button, where a link would better describe what it does." }
    ],
    correct: ["a", "b"],
    links: [
      wcag("4.1.2", "Name, Role, Value", "name-role-value"),
      wcag("2.4.4", "Link Purpose (In Context)", "link-purpose-in-context")
    ],
    explanation: [
      'Icon-only buttons need an accessible name (aria-label="Search" or visually hidden text); otherwise users hear “button, button” and must guess (WCAG 4.1.2 Name, Role, Value).',
      "Screen reader users often list all links out of context. “Click here” twice is useless there: use the destination as link text, like “Read the weekly report” (WCAG 2.4.4 Link Purpose).",
      "Announcing heading levels is how screen readers help people navigate, and Archive performs an action on the page, so a button is the right element."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, BrowserShell, Icon } from "../mock";

  const speech: string[] = [
    "Inbox, heading level 1",
    "button",
    "button",
    "Weekly report from Ana, link",
    "click here, link",
    "Archive, button",
    "click here, link"
  ];
</script>

<BrandTheme brand="eco">
  <BrowserShell url="mail.northwind.io/inbox">
    <div class="layout">
      <div class="mail">
        <div class="toolbar">
          <p class="title">Inbox</p>
          <span class="tool"><Icon name="search" size={16} /></span>
          <span class="tool"><Icon name="filter" size={16} /></span>
        </div>
        <div class="message">
          <strong>Weekly report from Ana</strong>
          <span>The numbers are in. To see the full dashboard, <u>click here</u>.</span>
          <div class="message__actions">
            <span class="archive">Archive</span>
            <span>Unsubscribe from these reports: <u>click here</u></span>
          </div>
        </div>
      </div>
      <div class="reader">
        <p class="reader__title">Screen reader</p>
        <ol>
          {#each speech as line, index (index)}
            <li>{line}</li>
          {/each}
        </ol>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .layout {
    display: grid;
    grid-template-columns: 1fr 230px;
    min-height: 300px;
  }

  .mail {
    display: grid;
    align-content: start;
    gap: 14px;
    padding: 18px;
  }

  .toolbar {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .title {
    flex: 1;
    font-size: 18px;
    font-weight: 600;
  }

  .tool {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border: 1px solid var(--mock-border);
    border-radius: 8px;
    background: var(--mock-surface);
  }

  .message {
    display: grid;
    gap: 8px;
    padding: 14px;
    border: 1px solid var(--mock-border);
    border-radius: 10px;
    background: var(--mock-surface);

    u {
      color: var(--mock-primary-strong);
    }

    &__actions {
      display: flex;
      align-items: center;
      gap: 12px;
      color: var(--mock-muted);
      font-size: 12px;
    }
  }

  .archive {
    padding: 4px 10px;
    border: 1px solid var(--mock-border);
    border-radius: 6px;
    color: var(--mock-text);
  }

  .reader {
    padding: 16px;
    background: #1b1d23;
    color: #f1f2f6;
    font:
      12px/1.5 ui-monospace,
      "SFMono-Regular",
      Menlo,
      monospace;

    &__title {
      margin-bottom: 8px;
      color: #c7cad3;
      font-weight: 700;
    }

    ol {
      display: grid;
      gap: 6px;
      margin: 0;
      padding-left: 20px;
    }
  }
</style>
