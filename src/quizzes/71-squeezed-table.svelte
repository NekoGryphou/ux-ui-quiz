<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "squeezed-table",
    title: "Five columns in a phone",
    principle: "Restructure dense tables for narrow screens",
    scenario: "A customer checks on their phone whether their last order has shipped yet.",
    prompt: "What is the main issue with this screen?",
    kind: "single",
    choices: [
      { id: "a", text: "The desktop table is squeezed into five thin columns, so values break across lines." },
      { id: "b", text: "The header row uses grey text, where black headers would be quicker to pick out." },
      { id: "c", text: "Orders are sorted newest first, where oldest first would show the full history." },
      { id: "d", text: "Each row shows a total price, where the item count alone would keep rows lighter." }
    ],
    correct: ["a"],
    explanation: [
      "The desktop table keeps all five columns on a 360px screen: “Delivered” breaks into two lines, dates wrap, and the eye zigzags to find which status belongs to which order.",
      "On narrow screens, turn rows into cards (order number and status first, details below), or keep only the columns that matter and move the rest into the detail view.",
      "Grey headers, newest-first sorting and showing the total are all reasonable choices for an order history."
    ]
  };
</script>

<script lang="ts">
  import { AppBar, BrandTheme, PhoneShell } from "../mock";

  const rows: string[][] = [
    ["#48211", "12 May 2025", "3", "Shipped", "€84.90"],
    ["#47930", "28 Apr 2025", "1", "Delivered", "€19.00"],
    ["#47112", "03 Apr 2025", "5", "Delivered", "€212.40"],
    ["#46588", "14 Mar 2025", "2", "Refunded", "€45.00"]
  ];
</script>

<BrandTheme brand="eco">
  <PhoneShell>
    <AppBar title="My orders" back />
    <div class="orders">
      <table>
        <thead>
          <tr>
            {#each ["Order", "Date", "Items", "Status", "Total"] as head (head)}<th>{head}</th>{/each}
          </tr>
        </thead>
        <tbody>
          {#each rows as row (row[0])}
            <tr>
              {#each row as cell, i (i)}<td>{cell}</td>{/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .orders {
    padding: 12px 10px;
  }

  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    background: var(--mock-surface);
    font-size: 12px;
  }

  th {
    padding: 8px 4px;
    border-bottom: 1px solid var(--mock-border);
    color: var(--mock-muted);
    font-weight: 600;
    text-align: left;
  }

  td {
    padding: 10px 4px;
    border-bottom: 1px solid var(--mock-border);
    vertical-align: top;
    overflow-wrap: anywhere;
  }
</style>
