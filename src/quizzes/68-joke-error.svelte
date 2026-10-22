<script lang="ts">
    import {BrandTheme, MockButton, PhoneShell} from "../mock";
</script>

<BrandTheme brand="playful">
  <PhoneShell>
    <div class="screen">
      <svg class="hamster" viewBox="0 0 160 120" aria-hidden="true">
        <path
          d="M4 103 C 34 110, 62 94, 92 98 S 124 100, 136 99"
          stroke="#3a3a46"
          stroke-width="5"
          fill="none"
          stroke-linecap="round"
        />
        <rect x="134" y="93" width="16" height="12" rx="3" fill="#3a3a46" />
        <rect x="150" y="95.5" width="7" height="2.4" rx="1" fill="#9a9aa8" />
        <rect x="150" y="100.5" width="7" height="2.4" rx="1" fill="#9a9aa8" />
        <g transform="rotate(-14 74 62)">
          <ellipse cx="74" cy="66" rx="38" ry="32" fill="#e89a5c" />
          <ellipse cx="74" cy="76" rx="24" ry="20" fill="#fbe4cc" />
          <circle cx="48" cy="38" r="10" fill="#e89a5c" />
          <circle cx="48" cy="38" r="5.5" fill="#f6b3b8" />
          <circle cx="98" cy="36" r="10" fill="#e89a5c" />
          <circle cx="98" cy="36" r="5.5" fill="#f6b3b8" />
          <circle cx="62" cy="56" r="5.6" fill="#ffffff" stroke="#2b1d16" stroke-width="1.2" />
          <circle cx="86" cy="56" r="5.6" fill="#ffffff" stroke="#2b1d16" stroke-width="1.2" />
          <circle cx="65.2" cy="57" r="2.8" fill="#2b1d16" />
          <circle cx="82.8" cy="57" r="2.8" fill="#2b1d16" />
          <ellipse cx="56" cy="66" rx="6" ry="4" fill="#f6b3b8" opacity="0.8" />
          <ellipse cx="92" cy="66" rx="6" ry="4" fill="#f6b3b8" opacity="0.8" />
          <path d="M71 63 L77 63 L74 67 Z" fill="#c4626a" />
          <path
            d="M74 67 q-4 5 -8 2 M74 67 q4 5 8 2"
            stroke="#2b1d16"
            stroke-width="1.6"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M60 68 l-14 -3 M60 71 l-13 2 M88 68 l14 -3 M88 71 l13 2"
            stroke="#a0603a"
            stroke-width="1.1"
            stroke-linecap="round"
          />
          <ellipse cx="40" cy="70" rx="7" ry="5" fill="#f2b98c" transform="rotate(-40 40 70)" />
          <ellipse cx="108" cy="58" rx="7" ry="5" fill="#f2b98c" transform="rotate(30 108 58)" />
          <ellipse cx="62" cy="97" rx="9" ry="5" fill="#f2b98c" />
          <ellipse cx="90" cy="99" rx="9" ry="5" fill="#f2b98c" transform="rotate(20 90 99)" />
        </g>
        <path d="M118 22 l3 6 6 1 -5 4 2 6 -6 -3 -6 3 2 -6 -5 -4 6 -1 z" fill="#ffd166" />
        <path d="M28 18 l2 4 4 .6 -3 2.8 .8 4 -3.8 -2 -3.8 2 .8 -4 -3 -2.8 4 -.6 z" fill="#ffd166" />
      </svg>
      <p class="screen__title">Oopsie daisy!</p>
      <p class="screen__copy">
        Our hamsters tripped over a cable and your payment kinda didn’t go through, lol. These things happen!
      </p>
      <div class="screen__details">
        <span>To <strong>Rivoli Lettings</strong></span>
        <span>Amount <strong>€1,250.00</strong></span>
        <span>Reference <strong>Rent November</strong></span>
      </div>
      <MockButton variant="primary" block>Try again, pretty please</MockButton>
      <MockButton variant="ghost" block>Back to accounts</MockButton>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .screen {
    display: grid;
    justify-items: center;
    align-content: start;
    gap: 12px;
    min-height: 520px;
    padding: 40px 22px 24px;
    text-align: center;

    &__title {
      font-size: 22px;
      font-weight: 800;
    }

    &__copy {
      color: var(--mock-muted);
    }

    &__details {
      display: grid;
      gap: 6px;
      width: 100%;
      padding: 14px;
      border-radius: var(--mock-radius);
      background: var(--mock-fill);
      text-align: left;

      span {
        display: flex;
        justify-content: space-between;
        color: var(--mock-muted);
      }

      strong {
        color: var(--mock-text);
      }
    }
  }

  .hamster {
    width: 170px;
    height: 128px;
  }
</style>
