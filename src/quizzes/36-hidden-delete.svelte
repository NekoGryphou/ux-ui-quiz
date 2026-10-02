<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "hidden-delete",
    title: "Delete, between Duplicate and Move",
    principle: "Separate and signal destructive actions",
    scenario: "A designer opens the menu on a shared file to make a copy before editing it.",
    prompt: "What is the main issue with this menu?",
    kind: "single",
    choices: [
      { id: "a", text: "Delete sits between everyday actions in the same style, so it’s easy to hit by mistake." },
      { id: "b", text: "The menu opens below the row, where opening above would keep more of the list visible." },
      { id: "c", text: "The menu shows text labels only, where icons would help users find actions faster." },
      { id: "d", text: "The menu lists five actions, where a row of buttons would avoid the extra click." }
    ],
    correct: ["a"],
    explanation: [
      "The destructive item looks like its neighbours and sits right under Duplicate, the action this user wants: one slip deletes a file the whole team uses.",
      "Put destructive actions last, behind a divider, in a danger color, and back them with confirmation or undo.",
      "Text labels are clear in menus, and a short overflow menu is a reasonable way to keep rows tidy."
    ]
  };
</script>

<script lang="ts">
  import { Avatar, BrandTheme, BrowserShell, Icon, TopBar } from "../mock";

  const items: string[] = ["Rename", "Duplicate", "Delete", "Move to…", "Download"];
</script>

<BrandTheme brand="playful">
  <BrowserShell url="drive.northwind.io/projects/website-2025">
    <TopBar brand="Northwind Drive" />
    <div class="page">
      {#each ["Homepage — final.fig", "Pricing page v4.fig", "Brand guidelines.pdf"] as file, index (file)}
        <div class="row" class:row--active={index === 0}>
          <Icon name="file" size={15} />
          <span class="row__name">{file}</span>
          <Avatar name={["Ana Silva", "Tom Becker", "Léa Moreau"][index] ?? "Ana Silva"} size={22} />
          <span class="row__more"><Icon name="more" size={16} /></span>
          {#if index === 0}
            <div class="menu">
              {#each items as item (item)}<span>{item}</span>{/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    display: grid;
    align-content: start;
    gap: 2px;
    min-height: 320px;
    padding: 18px 20px;
  }

  .row {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border-radius: 8px;
    background: var(--mock-surface);

    &--active {
      background: var(--mock-primary-soft);
    }

    &__name {
      flex: 1;
      font-weight: 500;
    }

    &__more {
      display: grid;
      place-items: center;
      width: 26px;
      height: 26px;
      border-radius: 6px;
    }
  }

  .menu {
    position: absolute;
    top: calc(100% + 4px);
    right: 8px;
    z-index: 1;
    display: grid;
    gap: 2px;
    min-width: 170px;
    padding: 6px;
    border: 1px solid var(--mock-border);
    border-radius: 10px;
    background: var(--mock-surface);
    box-shadow: var(--mock-shadow-md);

    span {
      padding: 7px 10px;
      border-radius: 6px;
    }

    span:nth-child(2) {
      background: var(--mock-fill);
    }
  }
</style>
