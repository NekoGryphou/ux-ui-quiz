<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "unexplained-empty-history",
    title: "An empty state that explains nothing",
    principle: "Say why it’s empty and what happens next",
    scenario:
      "A freelancer started a 14-day Pro trial of a design tool. Their accountant asks for an invoice, so they open Billing.",
    prompt: "What is the main issue on this page?",
    kind: "single",
    choices: [
      { id: "a", text: "The empty table still shows its column headers, which can look like a loading error." },
      { id: "b", text: "Billing history says “No data” without saying why, or when the first invoice will appear." },
      { id: "c", text: "The plan and the billing history share one page, which makes the page feel crowded." },
      { id: "d", text: "The trial end date sits in small text under the plan name, so it’s easy to miss." }
    ],
    correct: ["b"],
    explanation: [
      "An empty state should answer “why is this empty?” and “what happens next?”. “No data” makes users wonder whether billing is broken or the invoice got lost.",
      "Here the answer is known: “No invoices yet. Your first invoice will be issued on Nov 1, when your trial ends.” Add a useful next step, such as setting the billing email.",
      "The trial date is shown in the plan card, but users looking at the history shouldn’t have to connect the two themselves."
    ]
  };
</script>

<script lang="ts">
  import { Avatar, Badge, BrandTheme, BrowserShell, Card, MockButton, Table, Tabs, Title, TopBar } from "../mock";
</script>

<BrandTheme brand="fintech">
  <BrowserShell url="app.sketchpad.io/settings/billing">
    <TopBar brand="Sketchpad">
      <span class="spacer"></span>
      <Avatar name="Lena Fischer" />
    </TopBar>
    <div class="page">
      <Title>Settings</Title>
      <Tabs items={["Profile", "Team", "Billing"]} active={2} />

      <Card>
        <div class="plan">
          <div class="plan__copy">
            <span class="plan__name">Pro plan <Badge tone="info">Trial</Badge></span>
            <small>Trial ends Nov 1, then €12/month</small>
          </div>
          <MockButton size="sm">Change plan</MockButton>
        </div>
      </Card>

      <div class="history">
        <Title size="sm">Billing history</Title>
        <Table
          columns={[{ label: "Invoice" }, { label: "Date" }, { label: "Status" }, { label: "Amount", align: "end" }]}
          rows={[]}
        />
        <p class="empty">No data</p>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .spacer {
    flex: 1;
  }

  .page {
    display: grid;
    gap: 16px;
    padding: 22px 24px 28px;
  }

  .plan {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    &__copy {
      display: grid;
      gap: 2px;

      small {
        color: var(--mock-muted);
        font-size: 11px;
      }
    }

    &__name {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-weight: 600;
    }
  }

  .history {
    display: grid;
    gap: 10px;
  }

  .empty {
    padding: 24px 0;
    color: var(--mock-muted);
    text-align: center;
  }
</style>
