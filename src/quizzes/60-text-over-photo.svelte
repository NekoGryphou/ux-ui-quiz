<script lang="ts">
  import { BrandTheme, Icon } from "../mock";
</script>

<BrandTheme brand="eco">
  <div class="site">
    <div class="nav">
      <span class="nav__logo">peakpass</span>
      <span class="nav__links"><span>Resorts</span><span>Deals</span><span>Lessons</span></span>
    </div>
    <div class="hero">
      <div class="hero__photo" aria-hidden="true">
        <span class="sun"></span>
        <span class="cloud cloud--a"></span>
        <span class="cloud cloud--b"></span>
        <span class="mountain mountain--back"></span>
        <span class="mountain mountain--front"></span>
        <span class="snowfield"></span>
      </div>
      <div class="hero__copy">
        <p class="hero__title">Fresh powder, all season long</p>
        <p class="hero__tagline">Lift passes, chalets and lessons in 120 resorts</p>
        <div class="search">
          <Icon name="search" size={16} />
          <span>Where do you want to ski?</span>
          <span class="search__btn">Search</span>
        </div>
      </div>
    </div>
  </div>
</BrandTheme>

<style lang="scss">
  .site {
    width: 620px;
    overflow: hidden;
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);
    color: var(--mock-text);
    box-shadow: var(--mock-shadow-md);
  }

  .nav {
    display: flex;
    justify-content: space-between;
    padding: 14px 20px;

    &__logo {
      color: var(--mock-primary);
      font-size: 17px;
      font-weight: 800;
    }

    &__links {
      display: flex;
      gap: 18px;
      font-weight: 600;
    }
  }

  .hero {
    position: relative;
    height: 330px;

    &__photo {
      position: absolute;
      inset: 0;
      overflow: hidden;
      background: linear-gradient(180deg, #9fd3ff 0%, #d8efff 55%, #f4fbff 100%);
    }

    &__copy {
      position: relative;
      display: grid;
      gap: 10px;
      max-width: 420px;
      padding: 54px 28px;
    }

    &__title {
      color: #ffffff;
      font-size: 34px;
      font-weight: 800;
      line-height: 1.05;
    }

    &__tagline {
      color: #ffffff;
      font-size: 15px;
      font-weight: 600;
    }
  }

  .sun {
    position: absolute;
    top: 30px;
    right: 90px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff 30%, rgb(255 255 255 / 0) 70%);
  }

  .cloud {
    position: absolute;
    width: 180px;
    height: 46px;
    border-radius: 999px;
    background: #ffffff;
    box-shadow:
      40px -18px 0 6px #ffffff,
      90px -6px 0 2px #ffffff;

    &--a {
      top: 74px;
      left: 250px;
    }

    &--b {
      top: 160px;
      left: 90px;
      opacity: 0.9;
    }
  }

  .mountain {
    position: absolute;
    bottom: 60px;
    width: 520px;
    height: 230px;
    background: linear-gradient(180deg, #ffffff 0 42%, #c7d7e6 42% 60%, #8ea8bf 100%);

    &--back {
      left: -80px;
      clip-path: polygon(0 100%, 38% 8%, 62% 46%, 82% 20%, 100% 100%);
      opacity: 0.85;
    }

    &--front {
      right: -120px;
      clip-path: polygon(0 100%, 30% 30%, 48% 52%, 70% 0, 100% 100%);
    }
  }

  .snowfield {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 90px;
    background: linear-gradient(180deg, #f7fbff, #e3eef8);
  }

  .search {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 12px;
    padding: 8px 8px 8px 14px;
    border-radius: 999px;
    background: var(--mock-surface);
    color: var(--mock-muted);
    box-shadow: var(--mock-shadow-md);

    span:first-of-type {
      flex: 1;
    }

    &__btn {
      padding: 8px 16px;
      border-radius: 999px;
      background: var(--mock-primary);
      color: var(--mock-primary-text);
      font-weight: 700;
    }
  }
</style>
