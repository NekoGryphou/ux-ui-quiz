<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "truncated-axis",
    title: "A 4% rise that looks like a rocket",
    principle: "Start bar charts at zero",
    scenario:
      "A sales director glances at the dashboard before a board meeting to see how this quarter compares with the first one.",
    prompt: "Click the part of the chart that misleads the director.",
    kind: "hotspot",
    regions: [
      { id: "title", text: "Chart title" },
      { id: "period", text: "Year selector" },
      { id: "export", text: "Export button" },
      { id: "axis", text: "Vertical axis" },
      { id: "bars", text: "Bars" },
      { id: "legend", text: "Legend" }
    ],
    correct: ["axis"],
    explanation: [
      "The vertical axis starts at €96k, so Q4’s bar looks about five times taller than Q1’s for a rise of roughly 4%. People read bar length as quantity; cutting the baseline turns a small change into a dramatic one.",
      "Start bar charts at zero. If small differences matter, use a line chart with a clearly labelled range, or show the change itself (“+4.1% since Q1”).",
      "The title, legend and controls are clear; the distortion comes entirely from where the axis begins."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, Hotspot, Icon, MockButton } from "../mock";
  import type { QuarterBar } from "./types/quiz-mocks.types";

  const ticks: string[] = ["€102k", "€100k", "€98k", "€96k"];
  const bars: QuarterBar[] = [
    { label: "Q1", value: 97, display: "€97.0k" },
    { label: "Q2", value: 98.5, display: "€98.5k" },
    { label: "Q3", value: 99.2, display: "€99.2k" },
    { label: "Q4", value: 101, display: "€101.0k" }
  ];
  const AXIS_MIN: number = 96;
  const AXIS_MAX: number = 102;
  const heightOf = (value: number): string => `${String(((value - AXIS_MIN) / (AXIS_MAX - AXIS_MIN)) * 100)}%`;
</script>

<BrandTheme brand="corporate">
  <div class="card">
    <div class="head">
      <Hotspot id="title"><p class="title">Revenue by quarter</p></Hotspot>
      <div class="controls">
        <Hotspot id="period"><span class="select">2025 <Icon name="chevron-down" size={14} /></span></Hotspot>
        <Hotspot id="export"><MockButton size="sm" icon="download">Export</MockButton></Hotspot>
      </div>
    </div>
    <div class="chart">
      <Hotspot id="axis">
        <div class="axis">
          {#each ticks as tick (tick)}
            <span>{tick}</span>
          {/each}
        </div>
      </Hotspot>
      <Hotspot id="bars">
        <div class="series">
          <div class="plot">
            {#each bars as bar (bar.label)}
              <div class="bar">
                <span class="bar__value">{bar.display}</span>
                <span class="bar__fill" style:height={heightOf(bar.value)}></span>
              </div>
            {/each}
          </div>
          <div class="labels">
            {#each bars as bar (bar.label)}
              <span>{bar.label}</span>
            {/each}
          </div>
        </div>
      </Hotspot>
    </div>
    <Hotspot id="legend">
      <span class="legend"><i></i> Revenue, excl. VAT</span>
    </Hotspot>
  </div>
</BrandTheme>

<style lang="scss">
  .card {
    display: grid;
    gap: 18px;
    width: 520px;
    padding: 22px;
    border: 1px solid var(--mock-border);
    border-radius: 14px;
    background: var(--mock-surface);
    box-shadow: var(--mock-shadow-md);
    color: var(--mock-text);
    font-size: 13px;
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
  }

  .controls {
    display: flex;
    gap: 8px;
  }

  .select {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 30px;
    padding: 0 10px;
    border: 1px solid var(--mock-border);
    border-radius: 8px;
  }

  .chart {
    display: grid;
    grid-template-columns: 48px 1fr;
    align-items: start;
    gap: 10px;
  }

  .axis {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 216px;
    margin-top: -7px;
    color: var(--mock-muted);
    font-size: 11px;
    line-height: 14px;
    text-align: right;
  }

  .series {
    display: grid;
    gap: 6px;
  }

  .plot {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 26px;
    height: 202px;
    padding: 0 12px;
    border-bottom: 1px solid var(--mock-control-border);
    background: linear-gradient(var(--mock-border) 1px, transparent 1px) 0 0 / 100% 33.333%;
  }

  .bar {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;

    &__value {
      color: var(--mock-muted);
      font-size: 11px;
    }

    &__fill {
      width: 100%;
      border-radius: 6px 6px 0 0;
      background: var(--mock-primary);
    }
  }

  .labels {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 26px;
    padding: 0 12px;
    font-weight: 600;
    text-align: center;
  }

  .legend {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--mock-muted);

    i {
      width: 12px;
      height: 12px;
      border-radius: 3px;
      background: var(--mock-primary);
    }
  }
</style>
