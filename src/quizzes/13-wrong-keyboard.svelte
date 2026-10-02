<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "wrong-keyboard",
    title: "Letters for a number",
    principle: "Match the keyboard to the expected input",
    scenario: "A customer is paying for concert tickets on their phone and taps the card number field.",
    prompt: "What is the main issue on this screen?",
    kind: "single",
    choices: [
      { id: "a", text: "The card number field shows no card network logo to confirm the type of card." },
      { id: "b", text: "Tapping the card number opens a full letter keyboard instead of a number pad." },
      { id: "c", text: "The keyboard covers the lower half of the screen, hiding the Pay button below." },
      { id: "d", text: "The field label sits above the input, where a floating label would save space." }
    ],
    correct: ["b"],
    explanation: [
      "A card number is digits only, yet the user gets a letter keyboard and has to switch layouts for every group of digits.",
      'On the web, set inputmode="numeric" and autocomplete="cc-number": phones then show a number pad and can offer saved cards.',
      "A keyboard covering part of the screen is normal: the page should scroll so the Pay button stays reachable."
    ]
  };
</script>

<script lang="ts">
  import { AppBar, BrandTheme, Field, PhoneShell } from "../mock";

  const rows: string[] = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
</script>

<BrandTheme brand="fintech">
  <PhoneShell>
    <AppBar title="Payment" back />
    <div class="form">
      <div class="summary"><span>2 × Standing tickets</span><strong>€96.00</strong></div>
      <Field label="Name on card" value="Jonas Weber" />
      <Field label="Card number" value="4970 1012" state="focus" />
    </div>
    <div class="keyboard" aria-hidden="true">
      {#each rows as row, r (row)}
        <div class="keyboard__row">
          {#if r === 2}<span class="key key--wide">⇧</span>{/if}
          {#each row.split("") as key (key)}
            <span class="key">{key}</span>
          {/each}
          {#if r === 2}<span class="key key--wide">⌫</span>{/if}
        </div>
      {/each}
      <div class="keyboard__row">
        <span class="key key--wide">123</span>
        <span class="key key--space">space</span>
        <span class="key key--wide">return</span>
      </div>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .form {
    display: grid;
    gap: 12px;
    padding: 14px 16px;
  }

  .summary {
    display: flex;
    justify-content: space-between;
    padding: 10px 12px;
    border-radius: 10px;
    background: var(--mock-surface);
    color: var(--mock-muted);

    strong {
      color: var(--mock-text);
    }
  }

  .keyboard {
    display: grid;
    gap: 8px;
    margin-top: auto;
    padding: 8px 3px 26px;
    background: var(--mock-chrome);

    &__row {
      display: flex;
      justify-content: center;
      gap: 4px;
    }
  }

  .key {
    display: grid;
    flex: 0 0 24px;
    place-items: center;
    height: 36px;
    border-radius: 5px;
    background: var(--mock-surface);
    box-shadow: 0 1px 0 var(--mock-control-track);
    font-size: 14px;

    &--wide {
      flex-basis: 38px;
      background: var(--mock-control-track);
      font-size: 11px;
    }

    &--space {
      flex: 1 1 auto;
      max-width: 150px;
      color: var(--mock-muted);
      font-size: 11px;
    }
  }
</style>
