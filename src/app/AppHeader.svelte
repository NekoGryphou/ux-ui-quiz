<script lang="ts">
  import IconButton from "../components/IconButton.svelte";
  import { locale, t } from "../shared/locale.svelte";
  import { APP_NAME } from "./const/app.const";
  import { theme } from "./theme.svelte";
  import type { AppHeaderProps } from "./types/app-header.types";
  import { href } from "./utils/router.utils";

  let { run, target }: AppHeaderProps = $props();

  const percent: number = $derived(
    run === null || run.total === 0 ? 0 : Math.round((run.answeredCount / run.total) * 100)
  );

  /**
   * @private
   * @desc Toggles the theme, revealed from the button center.
   *
   * @param event - Button click.
   */
  const toggleTheme = (event: MouseEvent & { currentTarget: HTMLButtonElement }): void => {
    const rect: DOMRect = event.currentTarget.getBoundingClientRect();
    theme.toggle({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
  };

  /**
   * @private
   * @desc Switches between English and French.
   */
  const toggleLocale = (): void => {
    locale.set(locale.current === "fr" ? "en" : "fr");
  };
</script>

<header class="header">
  <div class="header__inner">
    <a class="header__brand" href={href.home}>
      <svg class="header__logo" viewBox="0 0 16 16" aria-hidden="true">
        <path class="header__logo-navy" d="M8.34 8.34A7.66 7.66 0 0 0 16 16V8.34H8.34z" />
        <path class="header__logo-violet" d="M5.66 0H0v16h7.66V2a2 2 0 0 0-2-2z" />
        <path class="header__logo-yellow" d="M8.34.01v7.66A7.66 7.66 0 0 0 16 .01H8.34z" />
      </svg>
      {APP_NAME}
    </a>

    <div class="header__end">
      {#if run !== null}
        <div class="header__stats">
          {#if target === "practice"}
            <span class="header__mode">{t("Practice", "Entraînement")}</span>
          {/if}
          <span
            ><strong>{run.answeredCount}</strong>/{run.total}<span class="header__wide"
              >&nbsp;{t("answered", "répondues")}</span
            ></span
          >
          <span class="header__score"><strong>{run.score}</strong> {t("correct", "justes")}</span>
          {#if run.answeredCount > 0}
            <a class="header__link" href={href.results(target)}>{t("Results", "Résultats")}</a>
          {/if}
        </div>
      {/if}
      <IconButton
        text={locale.current.toUpperCase()}
        label={t("EN, language: English. Switch to French", "FR, langue : français. Passer en anglais")}
        onclick={toggleLocale}
      />
      <IconButton
        icon={theme.current === "dark" ? "sun" : "moon"}
        label={theme.current === "dark"
          ? t("Switch to light theme", "Passer au thème clair")
          : t("Switch to dark theme", "Passer au thème sombre")}
        onclick={toggleTheme}
      />
    </div>

    {#if run !== null}
      <div
        class="header__progress"
        role="progressbar"
        aria-label={t("Quiz progress", "Progression du quiz")}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-valuetext={t(
          `${String(run.answeredCount)} of ${String(run.total)} answered`,
          `${String(run.answeredCount)} sur ${String(run.total)} répondues`
        )}
      >
        <span style="width: {percent}%"></span>
      </div>
    {/if}
  </div>
</header>

<style lang="scss">
  @use "$styles/mixins" as *;

  .header {
    position: sticky;
    top: 0;
    z-index: var(--z-header);
    margin-bottom: calc(-1 * var(--header-height));
    @include container;

    &__inner {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-3);
      height: var(--header-height);
      padding-inline: var(--space-4);
      border-radius: 0 0 var(--radius-xl) var(--radius-xl);
      background: var(--header-surface);
      box-shadow: var(--shadow-md);

      @include up(md) {
        padding-inline: var(--space-5);
      }
    }

    &__brand {
      display: inline-flex;
      align-items: center;
      flex: none;
      gap: var(--space-2);
      // noinspection CssNoGenericFontName
      font-family: var(--font-display);
      font-size: var(--text-lg);
      font-weight: 600;
      text-decoration: none;
      white-space: nowrap;
    }

    &__logo {
      width: 22px;
      height: 22px;
      flex: none;
    }

    &__logo-navy {
      fill: var(--brand-navy);
    }

    &__logo-violet {
      fill: var(--brand-violet);
    }

    &__logo-yellow {
      fill: var(--brand-yellow);
    }

    &__end {
      display: flex;
      align-items: center;
      gap: var(--space-3);

      @include up(sm) {
        gap: var(--space-4);
      }
    }

    &__stats {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      color: var(--text-muted);
      font-size: var(--text-sm);
      white-space: nowrap;

      @include up(sm) {
        gap: var(--space-4);
      }

      strong {
        color: var(--text);
        font-variant-numeric: tabular-nums;
      }
    }

    &__score,
    &__wide {
      @include down(sm) {
        display: none;
      }
    }

    &__mode {
      @include pill;
      background: var(--compare-soft);
      color: var(--compare);
    }

    &__link {
      display: inline-flex;
      align-items: center;
      padding: var(--space-1) var(--space-3);
      @include touch-target;
      border-radius: var(--radius-full);
      background: var(--surface-2);
      color: var(--text);
      font-weight: 500;
      text-decoration: none;

      &:hover {
        background: var(--border);
      }
    }

    &__progress {
      position: absolute;
      right: var(--radius-xl);
      bottom: 0;
      left: var(--radius-xl);
      height: 3px;
      overflow: hidden;
      border-radius: var(--radius-full);
      background: var(--surface-2);

      span {
        display: block;
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(90deg, var(--brand-violet), var(--accent-2), var(--brand-yellow));
        transition: width var(--duration-slow) var(--ease);
      }
    }
  }
</style>
