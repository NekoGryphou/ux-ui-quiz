<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "skeleton-or-spinner",
    title: "Waiting for the feed",
    principle: "Preview the layout while content loads",
    scenario: "A commuter opens a news app on a slow train connection. The feed takes about two seconds to load.",
    prompt: "Which loading state works better here?",
    kind: "compare",
    correct: ["a"],
    explanation: [
      "For content with a known layout, a skeleton shows where things will appear: the wait feels shorter and nothing jumps when the content arrives.",
      "A centered spinner on an empty screen gives no sense of what is coming or how long it takes, and the whole layout shifts once the feed loads.",
      "Spinners still suit short, unpredictable actions such as submitting a form."
    ]
  };
</script>

<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { AppBar, BrandTheme, PhoneShell, Skeleton, Spinner, TabBar } from "../mock";

  let { variant = "a" }: VisualProps = $props();
</script>

<BrandTheme brand="playful">
  <PhoneShell>
    <AppBar title="Today" large />
    {#if variant === "a"}
      <div class="feed">
        {#each [1, 2, 3] as item (item)}
          <div class="card">
            <span class="image" aria-hidden="true"></span>
            <Skeleton lines={2} />
          </div>
        {/each}
      </div>
    {:else}
      <div class="loading"><Spinner size={30} /></div>
    {/if}
    <TabBar
      tabs={[
        { icon: "home", label: "Today", active: true },
        { icon: "search", label: "Search" },
        { icon: "star", label: "Saved" },
        { icon: "user", label: "Profile" }
      ]}
    />
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .feed {
    display: grid;
    gap: 12px;
    padding: 4px 16px;
    overflow: hidden;
  }

  .card {
    display: grid;
    gap: 10px;
    padding: 10px;
    border-radius: 14px;
    background: var(--mock-surface);
  }

  .image {
    height: 80px;
    border-radius: 10px;
    background: var(--mock-track);
  }

  .loading {
    display: grid;
    flex: 1;
    place-items: center;
  }
</style>
