<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "faint-active-nav",
    title: "Where am I?",
    principle: "Make the current location perceivable",
    scenario:
      "A support agent switches between sections of a helpdesk all day. They glance at the screen to check which section they are in.",
    prompt: "Which issues make the current location hard to tell?",
    kind: "multiple",
    choices: [
      { id: "a", text: "The current section is barely highlighted, and its pale text even reads as disabled." },
      { id: "b", text: "The ticket list has no page heading, so only the sidebar could say where you are." },
      { id: "c", text: "The counters use the same gray as the labels, where a brand color would draw the eye." },
      { id: "d", text: "The sidebar shows full labels, where icons alone would leave more room for tickets." }
    ],
    correct: ["a", "b"],
    links: [wcag("1.4.3", "Contrast (Minimum)", "contrast-minimum")],
    explanation: [
      "The active item has a pale background and text lighter than the inactive items, so it reads as disabled rather than selected.",
      "Show the current location with clear contrast or an indicator bar, expose it with aria-current, and repeat it as a page heading.",
      "Colorful counters would compete with the location cue, and icon-only navigation is harder to scan."
    ]
  };
</script>

<script lang="ts">
  import { Avatar, BrowserShell, Field, SideNav } from "../mock";
</script>

<BrowserShell url="desk.supportly.io/tickets/open">
  <div class="layout">
    <aside class="side">
      <span class="brand">Supportly</span>
      <SideNav
        activeStyle="faint"
        items={[
          { label: "Inbox", icon: "inbox", badge: "12" },
          { label: "Open tickets", icon: "message", active: true, badge: "38" },
          { label: "Assigned to me", icon: "user", badge: "5" },
          { label: "Reports", icon: "chart" },
          { label: "Settings", icon: "settings" }
        ]}
      />
    </aside>
    <div class="content">
      <Field placeholder="Search tickets" icon="search" />
      {#each [{ subject: "Refund not received", from: "Léa Moreau", age: "4 min" }, { subject: "Can’t reset password", from: "Tom Becker", age: "12 min" }, { subject: "Invoice shows wrong VAT", from: "Ana Silva", age: "26 min" }, { subject: "App crashes on login", from: "Yuki Sato", age: "41 min" }] as ticket (ticket.subject)}
        <div class="ticket">
          <Avatar name={ticket.from} />
          <span class="subject">{ticket.subject}</span>
          <span class="time">{ticket.age}</span>
        </div>
      {/each}
    </div>
  </div>
</BrowserShell>

<style lang="scss">
  .layout {
    display: grid;
    grid-template-columns: 190px 1fr;
    min-height: 340px;
  }

  .side {
    display: grid;
    align-content: start;
    gap: 14px;
    padding: 16px 10px;
    border-right: 1px solid var(--mock-border);
    background: var(--mock-surface);
  }

  .brand {
    padding: 0 10px;
    font-weight: 600;
  }

  .content {
    display: grid;
    align-content: start;
    gap: 8px;
    padding: 16px;
  }

  .ticket {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border: 1px solid var(--mock-border);
    border-radius: 10px;
    background: var(--mock-surface);
  }

  .subject {
    flex: 1;
    font-weight: 500;
  }

  .time {
    color: var(--mock-muted);
    font-size: 12px;
  }
</style>
