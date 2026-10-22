<script lang="ts">
    import {BrandTheme, PhoneShell} from "../mock";
</script>

<BrandTheme brand="eco">
  <PhoneShell>
    <div class="screen">
      <span class="setting">Reduce motion: ON</span>
      <div class="hero">
        <span class="hero__sky"></span>
        <span class="hero__cloud hero__cloud--a"></span>
        <span class="hero__cloud hero__cloud--b"></span>
        <span class="hero__far"></span>
        <span class="hero__near"></span>
        <div class="hero__copy">
          <p class="hero__title">Find your wild</p>
          <span class="hero__cta">Plan a trip</span>
        </div>
      </div>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .screen {
    position: relative;
    min-height: 520px;
  }

  .setting {
    position: absolute;
    top: 10px;
    left: 50%;
    z-index: 3;
    padding: 4px 10px;
    border-radius: 999px;
    background: rgb(0 0 0 / 0.75);
    color: #ffffff;
    font-size: 11px;
    font-weight: 700;
    white-space: nowrap;
    translate: -50% 0;
  }

  .hero {
    position: relative;
    height: 520px;
    overflow: hidden;

    span {
      position: absolute;
    }

    &__sky {
      inset: 0;
      background: linear-gradient(180deg, #8fd0ff, #e9f6ff);
      animation: zoom 3s ease-in-out infinite alternate;
    }

    &__cloud {
      width: 120px;
      height: 34px;
      border-radius: 999px;
      background: #ffffff;
      animation: drift 2.4s ease-in-out infinite alternate;

      &--a {
        top: 90px;
        left: 20px;
      }

      &--b {
        top: 150px;
        right: 10px;
        animation-duration: 1.7s;
      }
    }

    &__far {
      right: -40px;
      bottom: 120px;
      left: -40px;
      height: 220px;
      background: #7aa889;
      clip-path: polygon(0 100%, 25% 30%, 45% 60%, 70% 10%, 100% 100%);
      animation: drift 3s ease-in-out infinite alternate-reverse;
    }

    &__near {
      right: -40px;
      bottom: 0;
      left: -40px;
      height: 200px;
      background: #2f6b45;
      clip-path: polygon(0 40%, 30% 10%, 60% 45%, 85% 15%, 100% 30%, 100% 100%, 0 100%);
      animation: drift 1.6s ease-in-out infinite alternate;
    }

    &__copy {
      position: absolute;
      top: 210px;
      right: 0;
      left: 0;
      display: grid;
      justify-items: center;
      gap: 12px;
      animation: zoom 2s ease-in-out infinite alternate;
    }

    &__title {
      color: #ffffff;
      font-size: 34px;
      font-weight: 800;
      text-shadow: 0 2px 10px rgb(0 0 0 / 0.35);
    }

    &__cta {
      position: static !important;
      padding: 10px 20px;
      border-radius: 999px;
      background: var(--mock-primary);
      color: var(--mock-primary-text);
      font-weight: 700;
    }
  }

  @keyframes drift {
    from {
      transform: translateX(-24px) translateY(6px);
    }
    to {
      transform: translateX(24px) translateY(-6px);
    }
  }

  @keyframes zoom {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.12);
    }
  }
</style>
