<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "ambiguous-icons",
    title: "Save, sync or upload?",
    principle: "Label icons whose meaning isn’t universal",
    scenario: "A new user finishes editing a document in a notes app and wants to make sure it is saved.",
    prompt: "What is the main issue with this toolbar?",
    kind: "single",
    choices: [
      { id: "a", text: "The icons have no labels, and three of them could each mean save, sync or upload." },
      { id: "b", text: "The toolbar sits at the top, where a floating bar near the text would feel closer." },
      { id: "c", text: "The icons are monochrome, where a colour per action would make them recognisable." },
      { id: "d", text: "The toolbar has six buttons, where four would leave more room for the title above." }
    ],
    correct: ["a"],
    explanation: [
      "A cloud with an arrow, a pair of circular arrows and a tray with an arrow: each could reasonably mean “save”, “sync” or “upload”. Without labels, the new user can only guess, or hover each one and wait for a tooltip.",
      "Only a handful of icons are universally understood (search, close, home…). Pair the rest with a short text label, at least for primary actions, and keep tooltips as a bonus, not the only explanation.",
      "A top toolbar, monochrome icons and six actions are all common and fine on their own."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, Icon } from "../mock";
</script>

<BrandTheme brand="editorial">
  <div class="doc">
    <div class="bar">
      <span class="bar__title">Trip ideas — Portugal</span>
      <div class="bar__icons">
        <span class="ic">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
            ><path d="M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 9.5a4 4 0 0 1-.5 8.5" /><path
              d="M12 12v8M9 15l3-3 3 3"
            /></svg
          >
        </span>
        <span class="ic">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
            ><path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3" /><path d="M18 3v4h-4M6 21v-4h4" /></svg
          >
        </span>
        <span class="ic">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
            ><path d="M4 15v4h16v-4" /><path d="M12 4v11M8 8l4-4 4 4" /></svg
          >
        </span>
        <span class="ic"><Icon name="share" size={18} /></span>
        <span class="ic"><Icon name="trash" size={18} /></span>
        <span class="ic"><Icon name="more" size={18} /></span>
      </div>
    </div>
    <div class="doc__body">
      <p class="doc__h">Lisbon → Porto, 10 days</p>
      <p>Day 1–3: Alfama, tram 28, pastéis in Belém. Day 4: train to Coimbra. Day 5–7: Douro valley…</p>
    </div>
  </div>
</BrandTheme>

<style lang="scss">
  .doc {
    width: 420px;
    border: 1px solid var(--mock-border);
    background: var(--mock-surface);
    color: var(--mock-text);
    box-shadow: var(--mock-shadow-md);

    &__body {
      display: grid;
      gap: 8px;
      padding: 18px;
      font-size: 14px;
      line-height: 1.6;
    }

    &__h {
      font: 700 18px/1.2 var(--mock-heading-font);
    }
  }

  .bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    border-bottom: 1px solid var(--mock-border);

    &__title {
      font-weight: 700;
    }

    &__icons {
      display: flex;
      gap: 4px;
    }
  }

  .ic {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
</style>
