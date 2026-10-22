<script lang="ts">
    import {Hotspot} from "../mock";
</script>

<div class="car">
  <div class="car__screen">
    <div class="car__top">
      <Hotspot id="clock" inline><span>14:32 · 8°C</span></Hotspot>
      <Hotspot id="drive" inline><span class="car__speed">110 <small>km/h</small></span></Hotspot>
    </div>
    <Hotspot id="map">
      <div class="map">
        <svg class="map__svg" viewBox="0 0 536 190" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="536" height="190" fill="#18202c" />
          <path d="M0 150 C 90 130, 150 175, 240 160 S 420 120, 536 140 L536 190 L0 190 Z" fill="#14324a" />
          <rect x="40" y="20" width="110" height="60" rx="8" fill="#1b3326" />
          <rect x="370" y="150" width="120" height="40" rx="8" fill="#1b3326" />
          <g stroke="#27303e" stroke-width="6" stroke-linecap="round">
            <path d="M0 100 H536" />
            <path d="M0 40 H536" />
            <path d="M120 0 V190" />
            <path d="M430 0 V190" />
            <path d="M190 0 L330 190" />
          </g>
          <g stroke="#323c4d" stroke-width="2">
            <path d="M0 70 H536" />
            <path d="M60 0 V190" />
            <path d="M500 0 V190" />
            <path d="M0 130 H200" />
          </g>
          <path
            d="M268 200 L268 128 Q268 100 296 100 L360 100 Q380 100 392 84 L460 -10"
            fill="none"
            stroke="#0d5ecf"
            stroke-width="12"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M268 200 L268 128 Q268 100 296 100 L360 100 Q380 100 392 84 L460 -10"
            fill="none"
            stroke="#4fa3ff"
            stroke-width="7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g transform="translate(268 160)">
            <circle r="13" fill="#4fa3ff" opacity="0.25" />
            <path
              d="M0 -10 L8 8 L0 4 L-8 8 Z"
              fill="#ffffff"
              stroke="#0d5ecf"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
          </g>
          <text x="140" y="56" fill="#6f7d92" font-size="10">Parc de la Tête d’Or</text>
          <text x="20" y="166" fill="#5a86a8" font-size="10">Rhône</text>
          <text x="300" y="94" fill="#c9d6e8" font-size="10" font-weight="700">A7</text>
        </svg>
        <span class="map__next">↱ 2.4 km · A7 Lyon</span>
        <span class="map__eta">ETA 15:07 · 38 km</span>
      </div>
    </Hotspot>
    <div class="car__bottom">
      <Hotspot id="media">
        <div class="tiny">
          {#each ["«", "▶", "»", "−", "+", "⇄", "↻"] as k (k)}<span>{k}</span>{/each}
          <small>Vol 18</small>
        </div>
      </Hotspot>
      <Hotspot id="climate">
        <div class="tiny">
          {#each ["❄", "−", "+", "A", "⇅", "♨", "◐"] as k (k)}<span>{k}</span>{/each}
          <small>21.5°</small>
        </div>
      </Hotspot>
    </div>
  </div>
</div>

<style lang="scss">
  .car {
    padding: 16px;
    border-radius: 26px;
    background: linear-gradient(180deg, #2a2d33, #121317);
    box-shadow: var(--mock-shadow-lg);

    &__screen {
      display: grid;
      gap: 8px;
      width: 560px;
      padding: 12px;
      border-radius: 12px;
      background: #0b0d12;
      color: #e6ebf2;
      font: 12px/1.3 var(--font-mock);
    }

    &__top {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    &__speed {
      font-size: 22px;
      font-weight: 700;

      small {
        font-size: 11px;
        color: #8a93a3;
      }
    }

    &__bottom {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
  }

  .map {
    position: relative;
    height: 190px;
    overflow: hidden;
    border-radius: 8px;

    &__svg {
      display: block;
      width: 100%;
      height: 100%;
      // noinspection CssNoGenericFontName
      font-family: var(--font-mock);
    }

    &__next,
    &__eta {
      position: absolute;
      padding: 6px 10px;
      border-radius: 6px;
      font-weight: 700;
    }

    &__next {
      top: 10px;
      left: 10px;
      background: #1e6b3a;
    }

    &__eta {
      right: 10px;
      bottom: 10px;
      background: rgb(11 13 18 / 0.85);
      color: #c9d6e8;
      font-weight: 600;
    }
  }

  .tiny {
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 4px;
    border-radius: 6px;
    background: #161a22;

    span {
      display: grid;
      place-items: center;
      width: 20px;
      height: 20px;
      border-radius: 4px;
      background: #252b36;
      font-size: 10px;
    }

    small {
      margin-left: auto;
      color: #8a93a3;
      font-size: 10px;
    }
  }
</style>
