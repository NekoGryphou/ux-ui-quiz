<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "cancel-by-phone",
    title: "Join online, leave by phone",
    principle: "Make leaving as easy as joining",
    scenario: "A member who signed up to a gym online in two minutes wants to cancel their membership.",
    prompt: "What is the main issue with this page?",
    kind: "single",
    choices: [
      { id: "a", text: "Cancelling needs a weekday phone call, while joining took two minutes online." },
      { id: "b", text: "The page lists the plan details, where a short summary would fit on one screen." },
      { id: "c", text: "The pause option comes first, where cancel alone would make the page simpler." },
      { id: "d", text: "The phone number is in bold, where a normal weight would look more professional." }
    ],
    correct: ["a"],
    explanation: [
      "Joining was an online form; leaving means calling during office hours and waiting on hold. This “roach motel” pattern keeps people paying simply because cancelling is a chore.",
      "Offer cancellation in the same channel and with the same effort as sign-up: a clear “Cancel membership” button, one confirmation and an email receipt. Several countries now require exactly this by law.",
      "Showing plan details, offering a pause and highlighting a phone number are all fine on their own."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, BrowserShell, MockButton } from "../mock";
</script>

<BrandTheme brand="eco">
  <BrowserShell url="pulsegym.com/account/membership">
    <div class="page">
      <p class="page__title">Your membership</p>
      <div class="plan">
        <strong>Premium · €39.90/month</strong>
        <span>Member since March 2024 · next payment 1 Dec</span>
      </div>
      <div class="pause">
        <strong>Need a break?</strong>
        <span>Pause your membership for up to 3 months.</span>
        <MockButton variant="primary">Pause membership</MockButton>
      </div>
      <div class="cancel">
        <strong>Want to cancel?</strong>
        <span>
          To cancel, please call our member services on <b>0 800 123 456</b>, Monday to Friday, 10:00–16:00. Please have
          your member number ready.
        </span>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    display: grid;
    gap: 14px;
    padding: 24px 28px;

    &__title {
      font-size: 20px;
      font-weight: 700;
    }
  }

  .plan,
  .pause,
  .cancel {
    display: grid;
    gap: 6px;
    padding: 14px 16px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);

    span {
      color: var(--mock-muted);
    }
  }

  .pause :global(.btn) {
    justify-self: start;
    margin-top: 4px;
  }
</style>
