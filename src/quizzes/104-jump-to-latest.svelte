<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "jump-to-latest",
    title: "The scenic route to the latest message",
    principle: "Jump straight to the destination; don’t animate long distances",
    scenario:
      "A team member scrolled far back in a busy chat to find a link, then taps “4 new messages” to catch up. Watch both versions.",
    prompt: "Which version handles the jump better?",
    kind: "compare",
    correct: ["b"],
    explanation: [
      "Smooth-scrolling through hundreds of messages turns a one-tap shortcut into a long wait: the history streams past for seconds, nothing can be read on the way, and some people tap again or start scrolling, which stops it halfway.",
      "For long distances, jump directly to the destination and use a brief fade or a short slide of the last few items to show where you landed. Keep smooth scrolling for short moves, and respect the reduce-motion setting.",
      "Both versions use the same chat, the same button and the same final position; only the transition differs."
    ]
  };
</script>

<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { BrandTheme, PhoneShell } from "../mock";
  import type { ChatMessage } from "./types/quiz-mocks.types";

  let { variant = "a" }: VisualProps = $props();

  const authors: string[] = ["Inès", "Tom", "Aiko", "Dev"];
  const lines: string[] = [
    "Did anyone check the staging build?",
    "Yes, looks fine on my side!",
    "The login page still flickers on Safari",
    "I’ll take a look after lunch",
    "Here’s the link to the spec",
    "Thanks! Reading it now",
    "Can we move standup to 10?",
    "Works for me",
    "Pushed a fix for the date picker",
    "Nice, merging"
  ];
  const messages: ChatMessage[] = Array.from({ length: 36 }, (_, i): ChatMessage => {
    const author: string = authors[i % authors.length] ?? "Tom";
    return { author, text: lines[i % lines.length] ?? "", mine: author === "Tom" };
  });
</script>

<BrandTheme brand="corporate">
  <PhoneShell>
    <div class="chat" class:chat--jump={variant === "b"}>
      <div class="chat__head"><strong># product-team</strong><span>4 members</span></div>
      <div class="chat__viewport">
        <div class="chat__list">
          {#each messages as message, i (i)}
            {#if i === messages.length - 4}<div class="divider"><span>New messages</span></div>{/if}
            <div class="msg" class:msg--mine={message.mine}>
              {#if !message.mine}<span class="msg__author">{message.author}</span>{/if}
              <span class="msg__bubble">{message.text}</span>
            </div>
          {/each}
        </div>
        <span class="chat__pill">↓ 4 new messages</span>
        <svg class="chat__cursor" viewBox="0 0 20 24" aria-hidden="true">
          <path
            d="M3 2.5 L16.5 14 L10.4 14.6 L13.6 21 L10.8 22.3 L7.7 15.9 L3 20 Z"
            fill="#6f52ff"
            stroke="#ffffff"
            stroke-width="1.6"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="chat__composer">Message #product-team</div>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  $loop: 8s;
  $row: 52px;
  $distance: calc(-36 * #{$row} + 405px);

  .chat {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 540px;

    &__head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 8px 14px;
      border-bottom: 1px solid var(--mock-border);

      span {
        color: var(--mock-muted);
        font-size: 11px;
      }
    }

    &__viewport {
      position: relative;
      overflow: hidden;
    }

    &__list {
      display: grid;
      padding: 8px 12px;
      animation: slow $loop ease-in-out infinite;
    }

    &--jump &__list {
      animation-name: jump;
      animation-timing-function: linear;
    }

    &__pill {
      position: absolute;
      bottom: 14px;
      left: 50%;
      padding: 7px 14px;
      border-radius: 999px;
      background: var(--mock-primary);
      color: var(--mock-primary-text);
      font-size: 12px;
      font-weight: 700;
      white-space: nowrap;
      box-shadow:
        0 2px 4px rgb(17 17 63 / 0.18),
        0 6px 14px rgb(17 17 63 / 0.22);
      translate: -50% 0;
      animation: pill $loop ease-out infinite;
    }

    &__cursor {
      position: absolute;
      bottom: 4px;
      left: calc(50% + 10px);
      width: 20px;
      height: 24px;
      filter: drop-shadow(0 2px 3px rgb(17 17 63 / 0.35));
      animation: cursor $loop ease-out infinite;
    }

    &__composer {
      margin: 8px 12px 12px;
      padding: 10px 12px;
      border: 1px solid var(--mock-border);
      border-radius: 999px;
      color: var(--mock-muted);
      font-size: 12px;
    }
  }

  .divider {
    display: flex;
    align-items: center;
    height: 24px;
    color: #c62828;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;

    &::before,
    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background: #c62828;
    }

    span {
      padding: 0 8px;
    }
  }

  .msg {
    display: grid;
    justify-items: start;
    height: $row;
    align-content: center;

    &--mine {
      justify-items: end;
    }

    &__author {
      color: var(--mock-muted);
      font-size: 10px;
      font-weight: 600;
    }

    &__bubble {
      max-width: 82%;
      overflow: hidden;
      padding: 6px 10px;
      border-radius: 12px;
      background: var(--mock-fill);
      font-size: 12px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &--mine &__bubble {
      background: var(--mock-primary);
      color: var(--mock-primary-text);
    }
  }

  @keyframes slow {
    0%,
    22% {
      transform: translateY(0);
      filter: blur(0);
    }
    40% {
      filter: blur(1.2px);
    }
    78% {
      filter: blur(1.2px);
    }
    86%,
    96% {
      transform: translateY($distance);
      filter: blur(0);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes jump {
    0%,
    22% {
      transform: translateY(0);
      opacity: 1;
    }
    24% {
      transform: translateY(0);
      opacity: 0;
    }
    25% {
      transform: translateY(calc(#{$distance} + 40px));
      opacity: 0;
    }
    30%,
    96% {
      transform: translateY($distance);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes pill {
    0%,
    19% {
      opacity: 1;
      scale: 1;
    }
    21% {
      scale: 0.92;
    }
    23%,
    97% {
      opacity: 0;
      scale: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes cursor {
    0%,
    6% {
      opacity: 0;
      translate: 50px 40px;
    }
    9% {
      opacity: 1;
    }
    17%,
    22% {
      opacity: 1;
      translate: 0 0;
    }
    26%,
    100% {
      opacity: 0;
      translate: 0 0;
    }
  }
</style>
