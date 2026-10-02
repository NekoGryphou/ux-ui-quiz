<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "bare-success",
    title: "Success that confirms nothing",
    principle: "Confirm critical outcomes with the details",
    scenario: "A user sends €1,200 for this month’s rent to their landlord in a banking app and taps Confirm.",
    prompt: "What is the main issue with this confirmation?",
    kind: "single",
    choices: [
      { id: "a", text: "The success state relies on a green check, which color-blind users may not perceive." },
      { id: "b", text: "The screen says “Done!” but not the amount, the recipient, or when the money arrives." },
      { id: "c", text: "The OK button spans the full width, so it’s hard to tell apart from a banner." },
      { id: "d", text: "The screen offers no shortcut to send another transfer to the same recipient." }
    ],
    correct: ["b"],
    explanation: [
      "After a high-stakes action, users need proof: the amount, the recipient, the reference, and when it will arrive.",
      "A summary plus a way to keep a record (receipt, share, download) prevents anxious double payments and support calls.",
      "The check icon comes with the word “Done!”, so meaning doesn’t rely on color alone."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, Icon, MockButton, PhoneShell } from "../mock";
</script>

<BrandTheme brand="eco">
  <PhoneShell>
    <div class="done">
      <span class="done__icon"><Icon name="check" size={34} strokeWidth={3} /></span>
      <strong>Done!</strong>
    </div>
    <div class="footer">
      <MockButton variant="primary" size="lg" block>OK</MockButton>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .done {
    display: grid;
    flex: 1;
    place-content: center;
    justify-items: center;
    gap: 16px;

    strong {
      font-size: 24px;
      font-weight: 700;
    }

    &__icon {
      display: grid;
      place-items: center;
      width: 76px;
      height: 76px;
      border-radius: 50%;
      background: var(--mock-success);
      color: var(--mock-on-accent);
    }
  }

  .footer {
    padding: 16px 18px 30px;
  }
</style>
