<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "bundled-installer",
    title: "Next, Next, Next… and a toolbar",
    principle: "Never pre-select extras the user didn’t ask for",
    scenario: "A parent installs a free PDF reader and clicks through the setup steps to open a school form.",
    prompt: "What is the main issue with this setup step?",
    kind: "single",
    choices: [
      { id: "a", text: "Unrelated extras are ticked by default, so clicking Next installs them without asking." },
      { id: "b", text: "The wizard uses a grey system style, where a branded look would feel more trustworthy." },
      { id: "c", text: "Setup shows a step counter, where hiding it would make the install feel shorter." },
      { id: "d", text: "The Back button sits left of Next, where only one button would keep the step simpler." }
    ],
    correct: ["a"],
    explanation: [
      "People click Next to get through setup. Here “Next” also installs a toolbar, changes the homepage and sets a new search engine, because those boxes come ticked and are labelled as “recommended”.",
      "Extras must be opt-in: unticked by default, clearly separate from the product and declinable in one click. Better still, don’t bundle them at all.",
      "The system style, step counter and Back/Next pair are the standard installer pattern."
    ]
  };
</script>

<script lang="ts">
  import { RetroButton, RetroWindow } from "../mock";

  const extras: string[] = [
    "Install SearchMaster Pro toolbar (recommended)",
    "Set SearchMaster as my homepage",
    "Make SearchMaster my default search engine"
  ];
</script>

<RetroWindow title="Setup - FreePDF Reader 7.0" width={460}>
  <div class="wizard">
    <div class="wizard__side">
      <span class="wizard__logo">PDF</span>
    </div>
    <div class="wizard__body">
      <p class="wizard__step">Step 3 of 5</p>
      <p class="wizard__title">Get the most from FreePDF!</p>
      <p>Enhance your experience with these great free tools from our partners.</p>
      {#each extras as extra (extra)}
        <span class="check"><span class="check__box">✓</span>{extra}</span>
      {/each}
      <small>By clicking Next you accept the partner terms of use.</small>
    </div>
  </div>
  <div class="actions">
    <RetroButton>&lt; Back</RetroButton>
    <RetroButton primary>Next &gt;</RetroButton>
    <RetroButton>Cancel</RetroButton>
  </div>
</RetroWindow>

<style lang="scss">
  @use "$styles/mixins" as *;

  .wizard {
    display: grid;
    grid-template-columns: 110px 1fr;
    min-height: 220px;
    background: #ffffff;

    &__side {
      display: grid;
      place-items: center;
      background: linear-gradient(180deg, #8b0000, #d11a1a);
    }

    &__logo {
      color: #ffffff;
      font:
        900 26px/1 Arial,
        sans-serif;
    }

    &__body {
      display: grid;
      align-content: start;
      gap: 6px;
      padding: 12px;
      font: 11px/1.4 var(--mock-retro-font);

      small {
        color: #555555;
        font-size: 9px;
      }
    }

    &__step {
      color: #555555;
    }

    &__title {
      font-size: 13px;
      font-weight: 700;
    }
  }

  .check {
    display: flex;
    align-items: center;
    gap: 6px;

    &__box {
      display: grid;
      place-items: center;
      width: 13px;
      height: 13px;
      @include retro-sunken;
      font-size: 10px;
      font-weight: 700;
    }
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 6px;
    padding: 8px 4px 2px;
  }
</style>
