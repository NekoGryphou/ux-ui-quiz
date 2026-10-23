<script lang="ts">
  import { BrandTheme, Breadcrumbs, BrowserShell, Hotspot, Icon, MockButton, Skeleton, TopBar } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="editorial">
  <BrowserShell url="blog.formfield.io/articles/calmer-forms">
    <div class="page">
      <Hotspot id="site-header">
        <TopBar brand="Formfield">
          <span class="spacer"></span>
          <span class="nav">Articles</span>
          <span class="nav">{t("Courses", "Formations")}</span>
        </TopBar>
      </Hotspot>
      <div class="body">
        <Hotspot id="breadcrumbs" inline><Breadcrumbs items={["Articles", t("Forms", "Formulaires")]} /></Hotspot>
        <Hotspot id="article">
          <article class="article">
            <p class="article__title">
              {t("Seven ways to make forms feel calmer", "Sept façons de rendre vos formulaires plus apaisants")}
            </p>
            <Skeleton lines={6} />
          </article>
        </Hotspot>
      </div>

      <span class="dim" aria-hidden="true"></span>

      <div class="modal">
        <Hotspot id="newsletter">
          <div class="modal__card">
            <span class="modal__close"><Icon name="x" size={14} /></span>
            <strong>{t("Don’t miss a thing", "Ne manquez rien")}</strong>
            <span>{t("Get our best articles every Tuesday.", "Recevez nos meilleurs articles chaque mardi.")}</span>
            <div class="modal__row">
              <span class="modal__input">{t("you@company.com", "vous@entreprise.fr")}</span>
              <MockButton variant="primary" size="sm">{t("Subscribe", "S’abonner")}</MockButton>
            </div>
          </div>
        </Hotspot>
      </div>

      <div class="chat">
        <Hotspot id="chat">
          <div class="chat__bubble">
            <strong>{t("Hi there!", "Bonjour !")}</strong>
            <span>{t("Can I help you find a course?", "Puis-je vous aider à trouver une formation ?")}</span>
          </div>
        </Hotspot>
      </div>

      <div class="cookies">
        <Hotspot id="cookies">
          <div class="cookies__bar">
            <span
              >{t(
                "We use cookies to improve your experience and for marketing.",
                "Nous utilisons des cookies pour améliorer votre expérience et à des fins marketing."
              )}</span
            >
            <MockButton size="sm">{t("Settings", "Paramètres")}</MockButton>
            <MockButton variant="primary" size="sm">{t("Accept all", "Tout accepter")}</MockButton>
          </div>
        </Hotspot>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    position: relative;
    min-height: 400px;
  }

  .spacer {
    flex: 1;
  }

  .nav {
    color: var(--mock-muted);
    font-weight: 500;
  }

  .body {
    display: grid;
    gap: 14px;
    padding: 18px 60px 90px;
  }

  .article {
    display: grid;
    gap: 14px;

    &__title {
      font-size: 22px;
      font-weight: 700;
    }
  }

  .dim {
    position: absolute;
    inset: 0;
    background: var(--mock-overlay);
    pointer-events: none;
  }

  .modal {
    position: absolute;
    top: 70px;
    left: 50%;
    width: 300px;
    transform: translateX(-50%);

    &__card {
      position: relative;
      display: grid;
      gap: 6px;
      padding: 18px;
      border-radius: 12px;
      background: var(--mock-surface);
      box-shadow: var(--mock-shadow-lg);

      strong {
        font-size: 15px;
      }

      span {
        color: var(--mock-muted);
      }
    }

    &__close {
      position: absolute;
      top: 12px;
      right: 12px;
      color: var(--mock-muted);
    }

    &__row {
      display: flex;
      gap: 6px;
      margin-top: 6px;
    }

    &__input {
      flex: 1;
      padding: 5px 8px;
      border: 1px solid var(--mock-border);
      border-radius: 6px;
      font-size: 12px;
    }
  }

  .chat {
    position: absolute;
    right: 16px;
    bottom: 76px;
    width: 190px;

    &__bubble {
      display: grid;
      gap: 2px;
      padding: 12px 14px;
      border-radius: 14px 14px 4px 14px;
      background: var(--mock-primary);
      color: var(--mock-on-accent);
      box-shadow: var(--mock-shadow-md);
    }
  }

  .cookies {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;

    &__bar {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      background: var(--mock-surface);
      box-shadow: 0 -4px 16px rgb(15 18 32 / 0.08);

      span {
        flex: 1;
        font-size: 12px;
      }
    }
  }
</style>
