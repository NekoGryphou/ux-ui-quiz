<script lang="ts">
  import { BrandTheme, PhoneShell } from "../mock";
  import type { MailItem } from "./types/quiz-mocks.types";

  const mails: MailItem[] = [
    { from: "Landlord", subject: "Rent receipt — November", preview: "Please find attached your receipt…" },
    { from: "Mum", subject: "Sunday lunch?", preview: "Are you coming this weekend? Dad’s…" },
    { from: "Bank", subject: "Your statement is ready", preview: "Your monthly statement for…" },
    { from: "Gym", subject: "New classes in December", preview: "Try our new spin and yoga…" }
  ];
</script>

<BrandTheme brand="corporate">
  <PhoneShell>
    <div class="inbox">
      <p class="inbox__title">Inbox</p>
      <div class="inbox__swiped">
        <div class="row row--gone"><strong>HR Team</strong><span>Your contract renewal — please sign</span></div>
      </div>
      {#each mails as mail (mail.subject)}
        <div class="row"><strong>{mail.from}</strong><span>{mail.subject}</span><small>{mail.preview}</small></div>
      {/each}
      <div class="toast"><span>Conversation archived</span><strong>UNDO</strong></div>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  $loop: 6s;

  .inbox {
    position: relative;
    display: grid;
    align-content: start;
    gap: 2px;
    min-height: 530px;
    padding: 8px 12px;

    &__title {
      margin: 4px 4px 8px;
      font-size: 22px;
      font-weight: 700;
    }

    &__swiped {
      overflow: hidden;
      border-radius: var(--mock-radius);
      background: #2e7d32;
      animation: collapse $loop ease-in-out infinite;
    }
  }

  .row {
    display: grid;
    padding: 10px;
    border-radius: var(--mock-radius);
    background: var(--mock-surface);

    small {
      color: var(--mock-muted);
    }

    &--gone {
      animation: swipe $loop ease-in infinite;
    }
  }

  .toast {
    position: absolute;
    right: 14px;
    bottom: 26px;
    left: 14px;
    display: flex;
    justify-content: space-between;
    padding: 12px 14px;
    border-radius: var(--mock-radius);
    background: #1f2933;
    color: #ffffff;
    opacity: 0;
    animation: toast $loop ease-out infinite;

    strong {
      color: #8ab4ff;
    }
  }

  @keyframes swipe {
    0%,
    15% {
      transform: translateX(0);
    }
    25%,
    100% {
      transform: translateX(-110%);
    }
  }

  @keyframes collapse {
    0%,
    25% {
      max-height: 70px;
    }
    32%,
    94% {
      max-height: 0;
    }
    100% {
      max-height: 70px;
    }
  }

  @keyframes toast {
    0%,
    28% {
      opacity: 0;
      transform: translateY(16px);
    }
    31%,
    62% {
      opacity: 1;
      transform: translateY(0);
    }
    65%,
    100% {
      opacity: 0;
      transform: translateY(16px);
    }
  }
</style>
