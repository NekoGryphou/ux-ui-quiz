<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "marquee-news",
    title: "News that won’t sit still",
    principle: "Let users pause, stop or hide moving content",
    scenario: "A club member opens the chess club’s website to check when this week’s tournament starts.",
    prompt: "Click the part of the page that keeps this member from getting the information.",
    kind: "hotspot",
    regions: [
      { id: "banner", text: "Site title" },
      { id: "menu", text: "Menu buttons" },
      { id: "ticker", text: "News ticker" },
      { id: "welcome", text: "Welcome text" },
      { id: "mascot", text: "Animated picture" },
      { id: "counter", text: "Visitor counter" },
      { id: "guestbook", text: "Guestbook link" }
    ],
    correct: ["ticker"],
    links: [wcag("2.2.2", "Pause, Stop, Hide", "pause-stop-hide")],
    explanation: [
      "The only mention of the new tournament time scrolls past in a marquee: by the time you’ve read “moves to”, the day has already slid out of view, and nothing lets you stop it (WCAG 2.2.2 Pause, Stop, Hide).",
      "Moving text is hard for slow readers, people with attention or vision impairments, and anyone zoomed in. Put key information in static text; if something must move, give it a pause control or stop it within five seconds.",
      "The animated picture, visitor counter and busy decoration look dated, but they don’t stop anyone from finding the time."
    ]
  };
</script>

<script lang="ts">
  import { Hotspot, RetroBrowser, RetroButton } from "../mock";
  import { CLUB_MASCOT_GIF_URL } from "./const/media.const";
</script>

<RetroBrowser title="~*~ Riverside Chess Club ~*~" url="http://www.geocities.com/riverside_chess/">
  <div class="site">
    <Hotspot id="banner">
      <h1 class="banner">♞ Welcome to the Riverside Chess Club!!! ♞</h1>
    </Hotspot>
    <Hotspot id="menu">
      <div class="menu">
        <RetroButton>Home</RetroButton>
        <RetroButton>Members</RetroButton>
        <RetroButton>Results</RetroButton>
        <RetroButton>Links</RetroButton>
      </div>
    </Hotspot>
    <Hotspot id="ticker">
      <div class="ticker">
        <span class="ticker__track">
          {#each [0, 1] as copy (copy)}
            <span class="ticker__text"
              >*** NEW *** This week’s tournament moves to SATURDAY 2 PM in the library hall · bring your own clock!</span
            >
          {/each}
        </span>
      </div>
    </Hotspot>
    <div class="columns">
      <Hotspot id="welcome">
        <div class="panel">
          <p class="panel__title">About the club</p>
          <p>
            We meet every Thursday evening in the back room of the library. Beginners are always welcome, and boards are
            provided!
          </p>
          <p class="construction"><i></i> Results page under construction <i></i></p>
        </div>
      </Hotspot>
      <div class="side">
        <Hotspot id="mascot">
          <img class="mascot" src={CLUB_MASCOT_GIF_URL} alt="Animated cartoon" width="170" />
        </Hotspot>
        <Hotspot id="counter">
          <div class="counter">
            <span>You are visitor</span>
            <span class="counter__digits">004217</span>
          </div>
        </Hotspot>
        <Hotspot id="guestbook">
          <span class="guestbook">✍ Sign our Guestbook!</span>
        </Hotspot>
      </div>
    </div>
  </div>
</RetroBrowser>

<style lang="scss">
  .site {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
    padding: 14px;
    background: repeating-conic-gradient(#1b2a5c 0% 25%, #22346e 0% 50%) 0 0 / 24px 24px;
    color: #ffffff;
    font-family: var(--mock-retro-serif);
  }

  .banner {
    margin: 0;
    color: #ffef5a;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    text-shadow: 2px 2px 0 #b8003a;
  }

  .menu {
    display: flex;
    justify-content: center;
    gap: 6px;
  }

  .ticker {
    overflow: hidden;
    padding: 5px 0;
    border: 2px ridge #c0c0c0;
    background: #000000;
    color: #ffef5a;
    font: 700 14px/1.3 var(--mock-retro-font);
    white-space: nowrap;

    &__track {
      display: inline-flex;
      animation: scroll 14s linear infinite;
    }

    &__text {
      padding-right: 48px;
    }
  }

  .columns {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 170px;
    gap: 12px;
  }

  .panel {
    display: grid;
    gap: 8px;
    padding: 12px;
    border: 3px double #c0c0c0;
    background: #ffffff;
    color: #000000;
    font-size: 15px;
    line-height: 1.4;

    &__title {
      color: #800000;
      font-size: 17px;
      font-weight: 700;
    }
  }

  .construction {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #5a3d00;
    font-family: var(--mock-retro-font);
    font-size: 12px;
    font-weight: 700;

    i {
      width: 34px;
      height: 12px;
      background: repeating-linear-gradient(-45deg, #ffcc00 0 6px, #000000 6px 12px);
    }
  }

  .mascot {
    display: block;
    width: 100%;
    height: 170px;
    object-fit: contain;
    border: 3px ridge #c0c0c0;
    background: #000000;
  }

  .side {
    display: grid;
    align-content: start;
    gap: 12px;
  }

  .counter {
    display: grid;
    justify-items: center;
    gap: 4px;
    padding: 10px 6px;
    border: 2px ridge #c0c0c0;
    background: #000000;
    font: 12px var(--mock-retro-font);

    &__digits {
      padding: 2px 6px;
      background: #1a1a1a;
      color: #ff4040;
      font: 700 18px/1 var(--mock-terminal-font);
      letter-spacing: 3px;
    }
  }

  .guestbook {
    display: block;
    color: #8cf0ff;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    text-decoration: underline;
  }

  @keyframes scroll {
    to {
      transform: translateX(-50%);
    }
  }
</style>
