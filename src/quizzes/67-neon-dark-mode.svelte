<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "neon-dark-mode",
    title: "Dark mode, bright headache",
    principle: "Soften colors in dark themes instead of using pure black and full saturation",
    scenario: "An on-call engineer checks the monitoring dashboard several times a night, in a dark room.",
    prompt: "What is the main issue with this dashboard?",
    kind: "single",
    choices: [
      { id: "a", text: "Saturated red, blue and green text on pure black vibrates, so the numbers tire the eyes." },
      { id: "b", text: "The dashboard uses a dark theme, where a light theme would suit a monitoring screen better." },
      { id: "c", text: "Each card shows a small sparkline, where the numbers alone would keep the cards cleaner." },
      { id: "d", text: "The cards are separated by thin borders, where soft shadows would set them apart better." }
    ],
    correct: ["a"],
    explanation: [
      "Fully saturated red, blue and green on pure black seem to shimmer and float at different depths (chromostereopsis), and pure blue barely contrasts with black at all. Glanced at in a dark room at 3 a.m., the numbers smear and tire the eyes.",
      "In dark themes, use dark grey surfaces rather than #000, off-white text rather than pure white, and desaturated, lighter tints for colors, checking each one for contrast.",
      "A dark theme suits a night-time monitoring screen, sparklines add useful trend context, and thin borders are a fine way to separate cards on dark backgrounds."
    ]
  };
</script>

<script lang="ts">
  import type { NeonMetric } from "./types/quiz-mocks.types";

  const metrics: NeonMetric[] = [
    { label: "ERROR RATE", value: "2.4%", tone: "#ff0000", points: "0,18 10,16 20,17 30,9 40,12 50,4 60,6" },
    { label: "LATENCY P95", value: "812 ms", tone: "#0000ff", points: "0,12 10,14 20,8 30,10 40,6 50,9 60,5" },
    { label: "UPTIME", value: "99.97%", tone: "#00ff00", points: "0,6 10,6 20,5 30,6 40,5 50,5 60,4" },
    { label: "QUEUE", value: "1,284", tone: "#ff00ff", points: "0,16 10,12 20,14 30,8 40,9 50,6 60,3" }
  ];
</script>

<div class="ops">
  <div class="ops__head">
    <span class="ops__logo">NIGHTOPS</span>
    <span class="ops__status">● 3 ALERTS · 03:12</span>
  </div>
  <div class="ops__grid">
    {#each metrics as metric (metric.label)}
      <div class="card">
        <span class="card__label">{metric.label}</span>
        <span class="card__value" style:color={metric.tone}>{metric.value}</span>
        <svg viewBox="0 0 60 20" class="card__spark" aria-hidden="true">
          <polyline points={metric.points} fill="none" stroke={metric.tone} stroke-width="1.6" />
        </svg>
      </div>
    {/each}
  </div>
  <div class="log">
    <p><span style:color="#ff0000">ERR</span> payment-api 502 upstream timeout</p>
    <p><span style:color="#0000ff">INFO</span> deploy #4821 rolled out to eu-west</p>
    <p><span style:color="#00ff00">OK</span> health check recovered (search)</p>
  </div>
</div>

<style lang="scss">
  .ops {
    display: grid;
    gap: 14px;
    width: 600px;
    padding: 20px;
    background: #000000;
    color: #ffffff;
    font:
      13px/1.4 "IBM Plex Sans",
      sans-serif;
    box-shadow: var(--mock-shadow-md);

    &__head {
      display: flex;
      justify-content: space-between;
    }

    &__logo {
      font-weight: 700;
      letter-spacing: 0.2em;
    }

    &__status {
      color: #ff0000;
      font-weight: 600;
    }

    &__grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
  }

  .card {
    display: grid;
    gap: 4px;
    padding: 14px;
    border: 1px solid #333333;

    &__label {
      color: #ffffff;
      font-size: 11px;
      letter-spacing: 0.12em;
    }

    &__value {
      font-size: 28px;
      font-weight: 700;
    }

    &__spark {
      width: 100%;
      height: 26px;
    }
  }

  .log {
    display: grid;
    gap: 4px;
    padding: 12px 14px;
    border: 1px solid #333333;
    font:
      12px/1.4 "IBM Plex Mono",
      "Courier New",
      monospace;

    span {
      font-weight: 700;
    }
  }
</style>
