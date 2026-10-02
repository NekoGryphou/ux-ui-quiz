<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "permission-at-launch",
    title: "Asking before giving",
    principle: "Ask for permissions in context, once the value is clear",
    scenario: "Someone installs a grocery delivery app and opens it for the very first time.",
    prompt: "What is the main issue with this screen?",
    kind: "single",
    choices: [
      { id: "a", text: "The prompt uses the system dialog instead of a branded screen that matches the app." },
      { id: "b", text: "The app asks to send notifications at first launch, before showing any value." },
      { id: "c", text: "The dialog offers only Allow and Don’t Allow, with no option to decide later." },
      { id: "d", text: "The splash screen behind the dialog shows only the logo, with no loading progress." }
    ],
    correct: ["b"],
    explanation: [
      "At first launch the user has no reason to say yes: they don’t know yet what the notifications would be for. Many tap “Don’t Allow”, and on iOS that choice is hard to reverse.",
      "Ask in context, when the benefit is obvious: right after placing an order, “Get notified when your groceries are on their way?”",
      "The system dialog itself can’t be restyled or given extra buttons; what the app controls is when it appears."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, PhoneShell } from "../mock";
</script>

<BrandTheme brand="eco">
  <PhoneShell>
    <div class="splash">
      <span class="logo" aria-hidden="true"></span>
      <strong>Basketly</strong>
    </div>
    <div class="dim" aria-hidden="true"></div>
    <div class="alert">
      <div class="alert__copy">
        <strong>“Basketly” Would Like to Send You Notifications</strong>
        <span>Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.</span>
      </div>
      <div class="alert__actions">
        <span>Don’t Allow</span>
        <span class="alert__allow">Allow</span>
      </div>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .splash {
    display: grid;
    flex: 1;
    place-content: center;
    justify-items: center;
    gap: 12px;
    font-size: 20px;
  }

  .logo {
    width: 72px;
    height: 72px;
    border-radius: 20px;
    background: linear-gradient(135deg, #22c55e, #15803d);
  }

  .dim {
    position: absolute;
    inset: 0;
    background: rgb(0 0 0 / 0.35);
  }

  .alert {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 240px;
    overflow: hidden;
    border-radius: 14px;
    background: rgb(242 242 247 / 0.97);
    text-align: center;
    transform: translate(-50%, -50%);

    &__copy {
      display: grid;
      gap: 4px;
      padding: 16px;

      strong {
        font-size: 14px;
      }

      span {
        color: #3c3c43;
        font-size: 12px;
      }
    }

    &__actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      border-top: 1px solid #c8c8cc;

      span {
        padding: 11px;
        color: #0060df;
        font-size: 15px;
      }

      span + span {
        border-left: 1px solid #c8c8cc;
      }
    }

    &__allow {
      font-weight: 600;
    }
  }
</style>
