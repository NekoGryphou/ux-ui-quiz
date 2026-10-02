<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "misaligned-amounts",
    title: "Numbers you can’t compare",
    principle: "Right-align numbers and format them consistently",
    scenario: "A finance manager scans this month’s invoices to spot the largest payments.",
    prompt: "Click the part of the table that makes this task hard.",
    kind: "hotspot",
    regions: [
      { id: "page-header", text: "Page title and export" },
      { id: "filters", text: "Date filters" },
      { id: "customer-column", text: "Customer column" },
      { id: "date-column", text: "Date column" },
      { id: "amount-column", text: "Amount column" },
      { id: "pagination", text: "Pagination" }
    ],
    correct: ["amount-column"],
    explanation: [
      "Amounts are left-aligned and use different decimal formats, so digits of the same magnitude never line up: €12,000.00 looks shorter than €1,240.5.",
      "Right-align numeric columns, use the same number of decimals, and use tabular (fixed-width) figures so values can be compared at a glance.",
      "Text columns such as customer names are correctly left-aligned."
    ]
  };
</script>

<script lang="ts">
  import { Badge, BrandTheme, BrowserShell, Hotspot, MockButton, Title, TopBar } from "../mock";

  const customers: string[] = ["North Peak", "Acme Dental", "River Labs", "Blue Harbor", "Kite & Co"];
  const dates: string[] = ["Oct 02", "Oct 05", "Oct 09", "Oct 14", "Oct 21"];
  const amounts: string[] = ["€1,240.5", "€89", "€12,000.00", "€430.10", "€2,315"];
</script>

<BrandTheme brand="corporate">
  <BrowserShell url="books.tallyhq.com/invoices">
    <TopBar brand="Tally" />
    <div class="page">
      <Hotspot id="page-header">
        <div class="head">
          <Title>Invoices</Title>
          <MockButton size="sm" icon="download">Export</MockButton>
        </div>
      </Hotspot>
      <Hotspot id="filters">
        <div class="filters">
          <Badge tone="info">October 2025</Badge>
          <Badge>Status: Paid</Badge>
        </div>
      </Hotspot>
      <div class="table">
        <Hotspot id="customer-column">
          <div class="column">
            <span class="cell cell--head">Customer</span>
            {#each customers as customer (customer)}<span class="cell">{customer}</span>{/each}
          </div>
        </Hotspot>
        <Hotspot id="date-column">
          <div class="column">
            <span class="cell cell--head">Date</span>
            {#each dates as date (date)}<span class="cell">{date}</span>{/each}
          </div>
        </Hotspot>
        <Hotspot id="amount-column">
          <div class="column">
            <span class="cell cell--head">Amount</span>
            {#each amounts as amount (amount)}<span class="cell">{amount}</span>{/each}
          </div>
        </Hotspot>
      </div>
      <Hotspot id="pagination">
        <div class="pagination"><span>1–5 of 42</span><MockButton size="sm" icon="chevron-right" /></div>
      </Hotspot>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    display: grid;
    gap: 16px;
    padding: 20px 24px 24px;
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .filters {
    display: flex;
    gap: 8px;
  }

  .table {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: 14px;
    padding: 4px 14px 8px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius);
    background: var(--mock-surface);
  }

  .column {
    display: grid;
  }

  .cell {
    padding: 8px 0;
    border-top: 1px solid var(--mock-border);

    &--head {
      border-top: 0;
      color: var(--mock-muted);
      font-size: 12px;
      font-weight: 500;
    }
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    color: var(--mock-muted);
    font-size: 12px;
  }
</style>
