<script lang="ts">
    import {Hotspot} from "../mock";
</script>

<div class="intro">
  <Hotspot id="logo">
    <div class="intro__logo">
      <span class="intro__mark"></span>
      <span>ARKITEKT<b>.</b>STUDIO</span>
    </div>
  </Hotspot>
  <Hotspot id="tagline"><p class="intro__tagline">space · light · emotion</p></Hotspot>
  <Hotspot id="loader">
    <div class="loader">
      <span class="loader__label">LOADING THE EXPERIENCE</span>
      <span class="loader__track"><i></i></span>
      <span class="loader__pct">47%</span>
    </div>
  </Hotspot>
  <div class="intro__corner">
    <Hotspot id="sound" inline><span class="intro__sound">♪ SOUND ON</span></Hotspot>
    <Hotspot id="skip" inline><span class="intro__skip">skip intro »</span></Hotspot>
  </div>
</div>

<style lang="scss">
  .intro {
    position: relative;
    display: grid;
    justify-items: center;
    align-content: center;
    gap: 22px;
    width: 600px;
    height: 380px;
    overflow: hidden;
    background:
      radial-gradient(circle at 50% 40%, rgb(0 180 255 / 0.25), transparent 55%),
      repeating-linear-gradient(90deg, rgb(255 255 255 / 0.04) 0 1px, transparent 1px 22px), #05070d;
    color: #cfe9ff;
    font-family: "Trebuchet MS", Verdana, sans-serif;
    box-shadow: var(--mock-shadow-md);

    &__logo {
      display: grid;
      justify-items: center;
      gap: 12px;
      font:
        700 24px/1 Verdana,
        sans-serif;
      letter-spacing: 0.4em;

      b {
        color: #00b4ff;
      }
    }

    &__mark {
      width: 70px;
      height: 70px;
      border: 2px solid #00b4ff;
      box-shadow: 0 0 18px #00b4ff;
      animation: spin 3s linear infinite;
    }

    &__tagline {
      color: #7fa7c8;
      font-size: 13px;
      letter-spacing: 0.5em;
    }

    &__corner {
      position: absolute;
      right: 14px;
      bottom: 10px;
      display: flex;
      gap: 14px;
      font-size: 10px;
    }

    &__sound {
      color: #7fa7c8;
    }

    &__skip {
      color: #8aa2b8;
      text-decoration: underline;
    }
  }

  .loader {
    display: grid;
    justify-items: center;
    gap: 8px;
    width: 300px;

    &__label {
      font-size: 10px;
      letter-spacing: 0.35em;
    }

    &__track {
      width: 100%;
      height: 6px;
      border: 1px solid #00b4ff;

      i {
        display: block;
        width: 47%;
        height: 100%;
        background: #00b4ff;
        box-shadow: 0 0 10px #00b4ff;
      }
    }

    &__pct {
      font:
        700 20px/1 "Courier New",
        monospace;
      color: #00b4ff;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
