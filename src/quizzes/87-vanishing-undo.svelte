<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "vanishing-undo",
    title: "Undo, for two seconds only",
    principle: "Give people enough time to act on a message",
    scenario: "A user archives the wrong email by accident and reaches for the Undo button. Watch the screen.",
    prompt: "What is the main issue with this screen?",
    kind: "single",
    choices: [
      { id: "a", text: "The Undo toast vanishes after two seconds, before most people can reach and tap it." },
      { id: "b", text: "The toast sits at the bottom, where a banner at the top would be seen more quickly." },
      { id: "c", text: "The toast is dark on a light app, where a light toast would match the theme better." },
      { id: "d", text: "Archiving happens on swipe, where a confirmation dialog would avoid any mistakes." }
    ],
    correct: ["a"],
    explanation: [
      "Undo is the safety net for a quick swipe, but the toast is gone after about two seconds: just enough to read “Archived”, not enough to move a thumb to Undo, and far too short for screen reader or switch users.",
      "Keep undo messages up long enough (5–10 seconds), pause the timer while they’re hovered or focused, and keep the action reachable afterwards (for example in an “Archived” view).",
      "A bottom toast, a dark toast and swipe-to-archive with undo are all common, sound patterns."
    ]
  };
</script>

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
