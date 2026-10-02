<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "search-dead-end",
    title: "No results, no way out",
    principle: "Design empty results for recovery",
    scenario: "A sales rep searches the CRM for a customer they spoke to on the phone last week.",
    prompt: "What is the main issue on this search screen?",
    kind: "single",
    choices: [
      { id: "a", text: "Filters from earlier stay active, with no way to remove them or widen the search." },
      { id: "b", text: "The search field keeps the query “acme” after searching, instead of clearing it." },
      { id: "c", text: "The empty result shows a plain “0 results” where an illustration would feel friendlier." },
      { id: "d", text: "The active filters appear as chips, where a dropdown would save horizontal space." }
    ],
    correct: ["a"],
    explanation: [
      "Zero results is normal. The problem is the dead end: three leftover filters narrow the search, and none of them can be removed from here.",
      "Make each chip removable, add “Clear all filters”, and suggest a way out: “No results in Trial · EU · Mia. Search all customers?”",
      "Keeping the query visible is correct (users can refine it), and chips are the clearest way to show active filters. An illustration wouldn’t help anyone recover."
    ]
  };
</script>

<script lang="ts">
  import { Badge, BrandTheme, BrowserShell, EmptyState, Field, TopBar } from "../mock";
</script>

<BrandTheme brand="editorial">
  <BrowserShell url="crm.northpeak.io/customers?q=acme">
    <TopBar brand="Northpeak CRM" />
    <div class="page">
      <Field value="acme" icon="search" state="focus" />
      <div class="filters">
        <span class="filters__label">Filters</span>
        <Badge tone="info">Plan: Trial</Badge>
        <Badge tone="info">Region: EU</Badge>
        <Badge tone="info">Owner: Mia</Badge>
      </div>
      <div class="results">
        <EmptyState icon="search" title="0 results" />
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    display: grid;
    gap: 14px;
    padding: 20px 24px 28px;
  }

  .filters {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;

    &__label {
      color: var(--mock-muted);
      font-size: 12px;
    }
  }

  .results {
    border: 1px solid var(--mock-border);
    border-radius: 12px;
    background: var(--mock-surface);
  }
</style>
