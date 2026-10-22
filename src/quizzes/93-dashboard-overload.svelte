<script lang="ts">
  import type { DashboardTile } from "./types/quiz-mocks.types";

  const bars: number[] = [62, 74, 55, 80, 68, 90, 72];
  const ticker: string = "EU +2.1% · US −0.4% · APAC +5.7% · LATAM +1.2% · MEA −1.9% · ONLINE +3.3% · RETAIL −0.8%";
  const tiles: DashboardTile[] = [
    { label: "Sessions", value: "1,284,331" },
    { label: "Bounce", value: "41.2%" },
    { label: "NPS", value: "37" },
    { label: "CAC", value: "€48.20" },
    { label: "Churn", value: "2.9%" },
    { label: "Tickets", value: "1,042" },
    { label: "ARPU", value: "€31.70" },
    { label: "MRR Δ", value: "+0.4%" },
    { label: "Sales MoM", value: "+8.1%" },
    { label: "Refunds", value: "312" }
  ];
  const slices: string[] = [
    "#5b8def",
    "#6ea0f2",
    "#7fb0f5",
    "#4f7fd6",
    "#86c5e8",
    "#9ab8f0",
    "#6a96e0",
    "#5ea7d8",
    "#7e9fe6",
    "#4c90cc",
    "#a4c3f3",
    "#5f86d9"
  ];
  const gradient: string = slices
    .map((color: string, i: number): string => `${color} ${String(i * 30)}deg ${String((i + 1) * 30)}deg`)
    .join(", ");
</script>

<div class="dash">
  <div class="dash__head">
    <span>EXECUTIVE OVERVIEW · ALL REGIONS · ALL CHANNELS · LIVE</span>
    <span class="dash__ticker">{ticker}</span>
  </div>
  <div class="dash__grid">
    {#each tiles as tile (tile.label)}
      <div class="tile">
        <span class="tile__label">{tile.label}</span>
        <span class="tile__value">{tile.value}</span>
      </div>
    {/each}
    <div class="panel panel--pie">
      <span class="tile__label">Revenue by product line (12)</span>
      <span class="pie" style:background="conic-gradient({gradient})"></span>
    </div>
    <div class="panel panel--bars">
      <span class="tile__label">Orders / weekday (3D)</span>
      <div class="bars">
        {#each bars as bar, i (i)}<i style:height="{bar}%"></i>{/each}
      </div>
    </div>
    {#each ["Uptime", "Stock", "Quota"] as gauge, i (gauge)}
      <div class="panel panel--gauge">
        <span class="tile__label">{gauge}</span>
        <span class="gauge" style:--angle="{[160, 95, 130][i]}deg"></span>
      </div>
    {/each}
    <div class="panel panel--spark">
      <span class="tile__label">Visitors · 90 days</span>
      <svg viewBox="0 0 120 30" aria-hidden="true">
        <polyline
          points="0,20 8,14 16,22 24,10 32,18 40,8 48,16 56,12 64,24 72,6 80,15 88,9 96,19 104,11 112,17 120,7"
          fill="none"
          stroke="#e8794a"
          stroke-width="1.5"
        />
        <polyline
          points="0,25 8,23 16,26 24,19 32,24 40,17 48,22 56,20 64,27 72,15 80,21 88,18 96,24 104,19 112,22 120,16"
          fill="none"
          stroke="#47b881"
          stroke-width="1.5"
        />
      </svg>
    </div>
  </div>
</div>

<style lang="scss">
  .dash {
    display: grid;
    gap: 8px;
    width: 640px;
    padding: 12px;
    background: #10141c;
    color: #c9d3e3;
    font:
      10px/1.25 "IBM Plex Sans",
      sans-serif;
    box-shadow: var(--mock-shadow-md);

    &__head {
      display: grid;
      gap: 4px;
      font-weight: 700;
      letter-spacing: 0.06em;
    }

    &__ticker {
      overflow: hidden;
      color: #f2c94c;
      font-family: "IBM Plex Mono", monospace;
      white-space: nowrap;
    }

    &__grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 6px;
    }
  }

  .tile,
  .panel {
    display: grid;
    align-content: start;
    gap: 2px;
    padding: 6px;
    border: 1px solid #263044;
    background: #161c28;
  }

  .tile {
    &__label {
      color: #7f8ba3;
      font-size: 9px;
      text-transform: uppercase;
    }

    &__value {
      font-size: 14px;
      font-weight: 700;
    }
  }

  .panel {
    &--pie,
    &--bars {
      grid-column: span 2;
      grid-row: span 2;
    }

    &--spark {
      grid-column: span 3;
    }
  }

  .pie {
    justify-self: center;
    width: 92px;
    height: 92px;
    margin-top: 4px;
    border-radius: 50%;
    transform: perspective(200px) rotateX(35deg);
    box-shadow: 0 8px 0 #2a3a66;
  }

  .bars {
    display: flex;
    align-items: flex-end;
    gap: 5px;
    height: 92px;
    padding: 6px 4px 0;
    transform: perspective(240px) rotateY(-22deg) rotateX(12deg);

    i {
      flex: 1;
      background: linear-gradient(90deg, #4f7fd6, #86b2ff 60%, #2f4f99);
      box-shadow: 4px -4px 0 #2a3a66;
    }
  }

  .gauge {
    justify-self: center;
    width: 54px;
    height: 27px;
    margin-top: 4px;
    border-radius: 54px 54px 0 0;
    background: conic-gradient(
      from -90deg at 50% 100%,
      #47b881 0 var(--angle),
      #2a3346 var(--angle) 180deg,
      transparent 180deg
    );
  }

  .panel--spark svg {
    width: 100%;
    height: 34px;
  }
</style>
