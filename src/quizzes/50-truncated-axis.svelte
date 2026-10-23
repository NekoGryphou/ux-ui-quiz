<script lang="ts">
  import { BrandTheme, Hotspot, Icon, MockButton } from "../mock";
  import { t } from "../shared/locale.svelte";
  import type { QuarterBar } from "./types/quiz-mocks.types";

  const AXIS_MIN: number = 96;
  const AXIS_MAX: number = 102;
  const ticks: string[] = $derived([
    t("€102k", "102 k€"),
    t("€100k", "100 k€"),
    t("€98k", "98 k€"),
    t("€96k", "96 k€")
  ]);
  const bars: QuarterBar[] = $derived([
    { label: t("Q1", "T1"), value: 97, display: t("€97.0k", "97,0 k€") },
    { label: t("Q2", "T2"), value: 98.5, display: t("€98.5k", "98,5 k€") },
    { label: t("Q3", "T3"), value: 99.2, display: t("€99.2k", "99,2 k€") },
    { label: t("Q4", "T4"), value: 101, display: t("€101.0k", "101,0 k€") }
  ]);

  /**
   * @private
   * @desc Returns the bar height as a percentage of the truncated axis range.
   *
   * @param value - Quarter revenue in thousands of euros.
   *
   * @returns CSS percentage height.
   */
  const heightOf = (value: number): string => `${String(((value - AXIS_MIN) / (AXIS_MAX - AXIS_MIN)) * 100)}%`;
</script>

<BrandTheme brand="corporate">
  <div class="card">
    <div class="head">
      <Hotspot id="title"><p class="title">{t("Revenue by quarter", "Chiffre d’affaires par trimestre")}</p></Hotspot>
      <div class="controls">
        <Hotspot id="period"><span class="select">2025 <Icon name="chevron-down" size={14} /></span></Hotspot>
        <Hotspot id="export"><MockButton size="sm" icon="download">{t("Export", "Exporter")}</MockButton></Hotspot>
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
      <span class="legend"><i></i> {t("Revenue, excl. VAT", "Chiffre d’affaires HT")}</span>
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
