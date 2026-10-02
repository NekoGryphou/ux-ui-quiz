<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "captcha-wall",
    title: "Prove you’re human (third try)",
    principle: "Don’t make people solve puzzles to prove they’re human",
    scenario: "A long-time reader finally signs up to the forum to answer a question about an old console.",
    prompt: "What is the main issue with this sign-up form?",
    kind: "single",
    choices: [
      { id: "a", text: "Signing up means deciphering warped letters, with no audio version or other way to pass." },
      { id: "b", text: "The form asks for a username, where an email address alone would be enough to sign up." },
      { id: "c", text: "The password field has no strength meter, so weak passwords can go through unnoticed." },
      { id: "d", text: "The forum uses a dark blue theme, where a lighter one would feel more welcoming to all." }
    ],
    correct: ["a"],
    links: [wcag("3.3.8", "Accessible Authentication (Minimum)", "accessible-authentication-minimum")],
    explanation: [
      "Distorted-text CAPTCHAs are hard for everyone and impossible for many: blind users get no audio alternative, people with dyslexia or low vision fail repeatedly, and “case sensitive” makes it worse. This reader is on their third try.",
      "Prefer checks that need no puzzle: invisible bot detection, rate limiting, email confirmation or a honeypot field. If a test is unavoidable, offer an accessible alternative (WCAG 3.3.8 Accessible Authentication).",
      "A username is normal for a forum, a strength meter is optional, and the dark theme is the forum’s style."
    ]
  };
</script>

<script lang="ts">
  import type { CaptchaGlyph } from "./types/quiz-mocks.types";

  const glyphs: CaptchaGlyph[] = [
    { char: "q", rotate: -18, dy: 4 },
    { char: "8", rotate: 12, dy: -3 },
    { char: "G", rotate: -6, dy: 2 },
    { char: "l", rotate: 22, dy: -5 },
    { char: "W", rotate: -14, dy: 3 },
    { char: "e", rotate: 9, dy: -2 }
  ];
</script>

<div class="forum">
  <div class="forum__banner">
    <span class="forum__logo">RetroGamers<span>.board</span></span>
    <span class="forum__tag">Since 2003 · 48,211 members</span>
  </div>
  <div class="forum__crumbs">Board index » Register</div>
  <div class="panel">
    <p class="panel__title">Registration</p>
    <p class="panel__error">The confirmation code you entered was incorrect. (Attempt 3 of 5)</p>
    <div class="row"><span>Username:</span><span class="input">pixel_paul</span></div>
    <div class="row"><span>E-mail address:</span><span class="input">paul@mailbox.net</span></div>
    <div class="row"><span>Password:</span><span class="input">••••••••••</span></div>
    <div class="row row--captcha">
      <span>Confirmation code:</span>
      <div class="captcha">
        <div class="captcha__image" aria-hidden="true">
          {#each glyphs as glyph, i (i)}
            <span style:transform="translateY({glyph.dy}px) rotate({glyph.rotate}deg) skewX({glyph.rotate / 2}deg)"
              >{glyph.char}</span
            >
          {/each}
        </div>
        <span class="input input--short"></span>
        <small>Enter the characters exactly as shown. The code is case sensitive.</small>
      </div>
    </div>
    <div class="actions"><span class="btn">Register</span></div>
  </div>
</div>

<style lang="scss">
  .forum {
    width: 560px;
    border: 1px solid #0b1a33;
    background: #10223f;
    color: #dbe6f5;
    font:
      12px/1.45 Verdana,
      Tahoma,
      sans-serif;
    box-shadow: var(--mock-shadow-md);

    &__banner {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding: 14px 14px 10px;
      background:
        repeating-linear-gradient(90deg, rgb(255 255 255 / 0.04) 0 2px, transparent 2px 6px),
        linear-gradient(180deg, #2a5aa8, #102a57);
    }

    &__logo {
      color: #ffffff;
      font:
        italic 700 22px/1 "Trebuchet MS",
        sans-serif;
      text-shadow: 2px 2px 0 #071630;

      span {
        color: #ffb84d;
      }
    }

    &__tag {
      color: #a9c1e6;
      font-size: 10px;
    }

    &__crumbs {
      padding: 6px 14px;
      background: #0b1a33;
      color: #a9c1e6;
      font-size: 11px;
    }
  }

  .panel {
    display: grid;
    gap: 8px;
    margin: 12px;
    padding: 12px;
    border: 1px solid #2e4a78;
    background: #172e52;

    &__title {
      padding-bottom: 6px;
      border-bottom: 1px solid #2e4a78;
      color: #ffb84d;
      font-weight: 700;
    }

    &__error {
      padding: 6px 8px;
      border: 1px solid #b33a3a;
      background: #3a1420;
      color: #ffc2c2;
    }
  }

  .row {
    display: grid;
    grid-template-columns: 130px 1fr;
    align-items: center;
    gap: 10px;

    &--captcha {
      align-items: start;
    }
  }

  .input {
    height: 22px;
    padding: 2px 6px;
    border: 1px solid #5d7aa8;
    background: #ffffff;
    color: #10223f;

    &--short {
      width: 120px;
    }
  }

  .captcha {
    display: grid;
    gap: 6px;

    &__image {
      display: flex;
      align-items: center;
      gap: 2px;
      width: 180px;
      height: 54px;
      padding: 0 12px;
      background:
        repeating-linear-gradient(115deg, rgb(0 0 0 / 0.25) 0 1px, transparent 1px 7px),
        repeating-linear-gradient(35deg, rgb(120 0 90 / 0.3) 0 2px, transparent 2px 9px),
        linear-gradient(90deg, #c9c39a, #9fb59a, #c2a0b4);
      color: #3b3046;
      font:
        700 30px/1 "Courier New",
        monospace;
      filter: blur(0.4px);

      span {
        display: inline-block;
        text-shadow: 2px 1px 0 rgb(255 255 255 / 0.35);
      }
    }

    small {
      color: #a9c1e6;
      font-size: 10px;
    }
  }

  .actions {
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-top: 4px;
  }

  .btn {
    padding: 3px 14px;
    border: 1px solid #5d7aa8;
    background: linear-gradient(180deg, #3a6ab8, #23498a);
    color: #ffffff;
    font-weight: 700;
  }
</style>
