<script lang="ts">
  const bars: number[] = [62, 88, 45, 70, 95, 58, 76, 40, 66, 84, 52, 73, 90, 48, 60, 80];
  const TRANSPORT_ICONS: string[] = [
    "M3 3h2v10H3zM13 3v10L6 8z",
    "M5 3v10l8-5z",
    "M4 3h3v10H4zM9 3h3v10H9z",
    "M4 4h8v8H4z",
    "M3 3v10l7-5zM11 3h2v10h-2z"
  ];
</script>

<div class="player">
  <div class="player__shell">
    <div class="player__top">
      <span class="player__brand">NULLAMP 2.95</span>
      <span class="player__winbtns" aria-hidden="true"><i></i><i></i><i></i></span>
    </div>
    <div class="player__body">
      <div class="lcd">
        <div class="lcd__row">
          <span class="lcd__state">▶</span>
          <span class="lcd__time">01:24</span>
          <span class="lcd__bars">
            {#each bars as height, i (i)}
              <i style:height="{height}%" style:animation-delay="{i * 70}ms"></i>
            {/each}
          </span>
        </div>
        <div class="lcd__title">
          <span class="lcd__track">
            {#each [0, 1] as copy (copy)}
              <span class="lcd__text">*** DJ FLOPPY - DIAL-UP LOVE (1999) *** 128 KBPS *** 44 KHZ</span>
            {/each}
          </span>
        </div>
      </div>
      <div class="vents" aria-hidden="true">
        {#each Array.from({ length: 11 }, (_, i) => i) as i (i)}
          <i class:vents__notch={i === 7}></i>
        {/each}
      </div>
    </div>
    <div class="transport">
      {#each TRANSPORT_ICONS as icon (icon)}
        <span class="orb"><svg viewBox="0 0 16 16" aria-hidden="true"><path d={icon} /></svg></span>
      {/each}
      <span class="toggles"><span>EQ</span><span>PL</span></span>
    </div>
  </div>
</div>

<style lang="scss">
  .player {
    padding: 18px;
    // noinspection CssNoGenericFontName
    font-family: var(--mock-retro-font);
  }

  .player__shell {
    width: 420px;
    padding: 14px 18px 18px;
    border: 2px solid #5c2a00;
    border-radius: 48px 18px 60px 24px;
    background:
      radial-gradient(ellipse at 30% 0%, rgb(255 255 255 / 0.55), transparent 55%),
      linear-gradient(160deg, #ffb347 0%, #ff7a00 45%, #b34700 100%);
    box-shadow:
      inset 0 3px 0 rgb(255 255 255 / 0.5),
      inset 0 -8px 16px rgb(80 20 0 / 0.5),
      0 18px 40px rgb(120 40 0 / 0.45);
  }

  .player__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 10px 18px;
  }

  .player__brand {
    color: #3a1500;
    font:
      900 12px/1 "Arial Black",
      var(--mock-retro-font);
    letter-spacing: 0.2em;
    text-shadow: 0 1px 0 rgb(255 255 255 / 0.5);
  }

  .player__winbtns {
    display: flex;
    gap: 4px;

    i {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 30%, #ffe0b0, #a33c00);
      box-shadow: 0 1px 1px rgb(0 0 0 / 0.4);
    }
  }

  .player__body {
    display: grid;
    grid-template-columns: 1fr 74px;
    gap: 12px;
    align-items: center;
  }

  .lcd {
    display: grid;
    gap: 6px;
    padding: 10px 12px;
    border-radius: 14px 6px 18px 6px;
    background: linear-gradient(180deg, #0a1a0a, #031003);
    box-shadow:
      inset 0 3px 8px rgb(0 0 0 / 0.9),
      0 1px 0 rgb(255 255 255 / 0.4);
    color: #7dff5a;
    text-shadow: 0 0 6px rgb(125 255 90 / 0.6);

    &__row {
      display: flex;
      align-items: flex-end;
      gap: 10px;
      height: 34px;
    }

    &__state {
      font-size: 12px;
    }

    &__time {
      font: 700 26px/1 var(--mock-terminal-font);
      letter-spacing: 2px;
    }

    &__bars {
      display: flex;
      flex: 1;
      align-items: flex-end;
      gap: 2px;
      height: 100%;

      i {
        flex: 1;
        background: linear-gradient(0deg, #2bd42b, #f2ff3a 70%, #ff4d2b);
        animation: bounce 0.9s ease-in-out infinite alternate;
        transform-origin: bottom;
      }
    }

    &__title {
      overflow: hidden;
      font: 11px/1.2 var(--mock-terminal-font);
      white-space: nowrap;
    }

    &__track {
      display: inline-flex;
      animation: crawl 12s linear infinite;
    }

    &__text {
      padding-right: 28px;
    }
  }

  .vents {
    display: grid;
    gap: 4px;
    padding: 8px 10px;
    border-radius: 16px;
    background: linear-gradient(180deg, #c45a00, #8a3600);
    box-shadow: inset 0 2px 5px rgb(0 0 0 / 0.5);

    i {
      height: 4px;
      border-radius: 2px;
      background: linear-gradient(180deg, #4a1d00, #ff9a3c);
    }

    &__notch {
      box-shadow: 0 0 0 1px rgb(255 220 160 / 0.35);
    }
  }

  .transport {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 14px;
    padding-left: 10px;
  }

  .orb {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 28%, #fff4e0 0%, #ffb35c 35%, #a83f00 100%);
    box-shadow:
      0 3px 6px rgb(80 20 0 / 0.5),
      inset 0 -2px 3px rgb(0 0 0 / 0.3);
    color: #3a1500;

    svg {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }
  }

  .toggles {
    display: flex;
    gap: 4px;
    margin-left: auto;

    span {
      padding: 3px 7px;
      border-radius: 8px;
      background: #5c2a00;
      color: #ffd29a;
      font: 700 10px/1 var(--mock-retro-font);
    }
  }

  @keyframes bounce {
    from {
      transform: scaleY(0.35);
    }
  }

  @keyframes crawl {
    to {
      transform: translateX(-50%);
    }
  }
</style>
