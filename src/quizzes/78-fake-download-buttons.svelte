<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "fake-download-buttons",
    title: "Which download is the download?",
    principle: "Never let ads imitate your own controls",
    scenario: "A student wants to download a free image editor from a popular shareware site.",
    prompt: "Click every element that could trick the student.",
    kind: "hotspot",
    regions: [
      { id: "logo", text: "Site logo" },
      { id: "ad-top", text: "Top banner" },
      { id: "ad-side", text: "Side box" },
      { id: "ad-scan", text: "Warning box" },
      { id: "details", text: "Program details" },
      { id: "real", text: "Download link" },
      { id: "nav", text: "Category menu" }
    ],
    correct: ["ad-top", "ad-side", "ad-scan"],
    explanation: [
      "Three ads dress up as the thing the student came for: a giant green DOWNLOAD NOW banner, a “Start download” button in the sidebar and a fake system warning. The real link is a small blue text link under the details, the least prominent download on the page.",
      "Ads must never mimic your controls, wording or system dialogs. Make the real primary action the most visible element on the page, and label ads clearly as ads.",
      "The logo, menu and program details are ordinary page furniture, and the real link at least says exactly what it downloads."
    ]
  };
</script>

<script lang="ts">
  import { Hotspot, RetroBrowser } from "../mock";
</script>

<RetroBrowser title="FreeSoftZone - PixelPaint 3.2" url="http://www.freesoftzone.net/graphics/pixelpaint.html">
  <div class="site">
    <div class="head">
      <Hotspot id="logo" inline><span class="logo">FreeSoft<b>Zone</b>.net</span></Hotspot>
      <Hotspot id="nav" inline>
        <span class="nav">Audio · Graphics · Games · Utilities · Drivers</span>
      </Hotspot>
    </div>
    <Hotspot id="ad-top">
      <div class="banner">
        <span class="banner__arrow">⬇</span>
        <span class="banner__text">DOWNLOAD NOW</span>
        <span class="banner__sub">Fast &amp; Free · Click Here!</span>
      </div>
    </Hotspot>
    <div class="main">
      <div class="content">
        <Hotspot id="details">
          <div class="details">
            <p class="details__title">PixelPaint 3.2</p>
            <p>Free image editor with layers, brushes and filters.</p>
            <p class="details__meta">Size: 8.4 MB · Windows 98/ME/XP · License: Freeware</p>
          </div>
        </Hotspot>
        <Hotspot id="real" inline><span class="real">pixelpaint32_setup.exe (8.4 MB)</span></Hotspot>
      </div>
      <div class="side">
        <Hotspot id="ad-side">
          <div class="side__btn">
            <span>▶ Start Download</span>
            <small>Your file is ready</small>
          </div>
        </Hotspot>
        <Hotspot id="ad-scan">
          <div class="scan">
            <p class="scan__title">⚠ WARNING</p>
            <p>Your PC may be infected! 3 errors found.</p>
            <span class="scan__btn">Scan now</span>
          </div>
        </Hotspot>
      </div>
    </div>
  </div>
</RetroBrowser>

<style lang="scss">
  .site {
    display: grid;
    gap: 10px;
    padding: 10px;
    background: #ffffff;
    color: #000000;
    font:
      12px/1.4 Verdana,
      Tahoma,
      sans-serif;
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 6px;
    border-bottom: 2px solid #ff6600;
  }

  .logo {
    color: #003399;
    font:
      700 18px/1 Arial,
      sans-serif;

    b {
      color: #ff6600;
    }
  }

  .nav {
    color: #003399;
    font-size: 11px;
    text-decoration: underline;
  }

  .banner {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    border: 3px outset #3cbf3c;
    background: linear-gradient(180deg, #6ee36e, #1f9a1f);
    color: #ffffff;
    text-shadow: 1px 1px 0 #0b4d0b;

    &__arrow {
      font-size: 26px;
      animation: bob 0.8s ease-in-out infinite alternate;
    }

    &__text {
      font:
        900 24px/1 "Arial Black",
        Arial,
        sans-serif;
    }

    &__sub {
      margin-left: auto;
      font-weight: 700;
    }
  }

  .main {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 170px;
    gap: 12px;
  }

  .content {
    display: grid;
    align-content: start;
    gap: 8px;
  }

  .details {
    display: grid;
    gap: 4px;
    padding: 8px;
    border: 1px solid #c0c0c0;
    background: #f4f4f4;

    &__title {
      color: #003399;
      font-size: 15px;
      font-weight: 700;
    }

    &__meta {
      color: #555555;
      font-size: 10px;
    }
  }

  .real {
    color: #0000ee;
    font-size: 11px;
    text-decoration: underline;
  }

  .side {
    display: grid;
    align-content: start;
    gap: 10px;

    &__btn {
      display: grid;
      justify-items: center;
      padding: 10px 6px;
      border-radius: 4px;
      background: linear-gradient(180deg, #4d9bff, #0b4fc2);
      color: #ffffff;
      font-weight: 700;
      box-shadow: 0 2px 0 #062c6e;

      small {
        font-weight: 400;
        font-size: 10px;
      }
    }
  }

  .scan {
    display: grid;
    gap: 4px;
    padding: 8px;
    border: 2px solid #cc0000;
    background: #fff4c2;
    font-size: 11px;

    &__title {
      color: #cc0000;
      font-weight: 700;
      animation: blink 1s steps(1) infinite;
    }

    &__btn {
      justify-self: start;
      padding: 2px 10px;
      border: 2px outset #d4d0c8;
      background: #d4d0c8;
    }
  }

  @keyframes bob {
    to {
      transform: translateY(4px);
    }
  }

  @keyframes blink {
    50% {
      opacity: 0.3;
    }
  }
</style>
