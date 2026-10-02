<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "toolbar-bloat",
    title: "Five search bars and a sliver of web",
    principle: "Protect the content area from chrome and add-ons",
    scenario: "A retiree opens their browser to read the local news, on the family computer in 2007.",
    prompt: "Click every part of the window that eats into the page.",
    kind: "hotspot",
    regions: [
      { id: "title", text: "Window title bar" },
      { id: "menu", text: "Menu bar" },
      { id: "address", text: "Address bar" },
      { id: "toolbars", text: "Add-on toolbars" },
      { id: "weather", text: "Weather ticker" },
      { id: "page", text: "News page" },
      { id: "status", text: "Status bar" }
    ],
    correct: ["toolbars", "weather"],
    explanation: [
      "Four bundled search toolbars and a scrolling weather ticker, installed alongside free downloads, stack on top of the page. The news itself is left with a thin strip at the bottom, and every search box does the same thing.",
      "Chrome should take as little room as possible: one address bar that also searches, add-ons that ask before installing and stay small, and a content area that gets most of the screen.",
      "The title, menu, address and status bars are standard browser chrome of the time."
    ]
  };
</script>

<script lang="ts">
  import { Hotspot, RetroField, RetroWindow } from "../mock";

  const toolbars: string[] = ["AskBar", "SearchMaster Pro", "FunTunes Toolbar", "ShopSaver"];
</script>

<div class="frame">
  <Hotspot id="title"><div class="frame__title">Riverside Gazette - Microsoft Internet Explorer</div></Hotspot>
  <RetroWindow title="" width={600}>
    <Hotspot id="menu">
      <div class="menu"><u>F</u>ile <u>E</u>dit <u>V</u>iew <u>F</u>avorites <u>T</u>ools <u>H</u>elp</div>
    </Hotspot>
    <Hotspot id="address">
      <div class="bar">Address <RetroField value="http://www.riversidegazette.com/" grow /></div>
    </Hotspot>
    <Hotspot id="toolbars">
      <div class="toolbars">
        {#each toolbars as name, i (name)}
          <div class="bar bar--addon" style:--tint="hsl({[200, 30, 300, 120][i]} 70% 45%)">
            <span class="bar__logo">{name}</span>
            <RetroField value="Search the web..." width={170} />
            <span class="bar__btn">Search</span>
            <span class="bar__extra">{["★ Smileys", "♪ Free ringtones", "☺ Screensavers", "$ Coupons"][i]}</span>
          </div>
        {/each}
      </div>
    </Hotspot>
    <Hotspot id="weather">
      <div class="weather">☀ 21°C Riverside · Tomorrow 18°C rain · WIN A FREE iPod! Click here ·</div>
    </Hotspot>
    <Hotspot id="page">
      <div class="page">
        <p class="page__title">Riverside Gazette</p>
        <p>Town hall approves new footbridge over the river…</p>
      </div>
    </Hotspot>
    <Hotspot id="status"><div class="status">Done</div></Hotspot>
  </RetroWindow>
</div>

<style lang="scss">
  @use "$styles/mixins" as *;

  .frame {
    display: grid;
    width: 600px;
    font: 11px/1.4 var(--mock-retro-font);

    &__title {
      padding: 3px 6px;
      background: var(--mock-retro-title);
      color: var(--mock-retro-title-text);
      font-weight: 700;
    }

    :global(.window__title) {
      display: none;
    }
  }

  .menu {
    padding: 2px 6px;
    word-spacing: 8px;
  }

  .bar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 3px 6px;
    border-top: 1px solid var(--mock-retro-light);
    border-bottom: 1px solid var(--mock-retro-shade);

    &--addon {
      background: linear-gradient(180deg, color-mix(in srgb, var(--tint) 25%, #ffffff), var(--mock-retro-face));
    }

    &__logo {
      width: 110px;
      color: var(--tint);
      font-weight: 700;
    }

    &__btn {
      padding: 1px 8px;
      @include retro-raised;
    }

    &__extra {
      margin-left: auto;
      color: #00007a;
    }
  }

  .toolbars {
    display: grid;
  }

  .weather {
    overflow: hidden;
    padding: 3px 6px;
    background: #ffffcc;
    color: #663300;
    white-space: nowrap;
  }

  .page {
    height: 40px;
    overflow: hidden;
    padding: 4px 10px;
    background: #ffffff;
    font: 13px/1.4 var(--mock-retro-serif);

    &__title {
      font-size: 16px;
      font-weight: 700;
      line-height: 1.2;
    }
  }

  .status {
    padding: 2px 6px;
    box-shadow: inset 1px 1px var(--mock-retro-shade);
  }
</style>
