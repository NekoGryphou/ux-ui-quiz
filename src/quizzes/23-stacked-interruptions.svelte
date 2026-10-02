<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "stacked-interruptions",
    title: "Three interruptions before the first sentence",
    principle: "Don’t stack interruptions on top of the content",
    scenario: "A reader follows a link from a newsletter to read one article on a design blog.",
    prompt: "Click every element that gets between the reader and the article.",
    kind: "hotspot",
    regions: [
      { id: "site-header", text: "Site header" },
      { id: "breadcrumbs", text: "Breadcrumbs" },
      { id: "article", text: "Article" },
      { id: "newsletter", text: "Newsletter sign-up" },
      { id: "chat", text: "Chat message" },
      { id: "cookies", text: "Cookie notice" }
    ],
    correct: ["newsletter", "chat", "cookies"],
    explanation: [
      "Before reading a single line, the visitor must close a newsletter modal, a chat bubble that opened on its own, and a cookie notice covering the bottom of the page.",
      "Each one may be justified alone; stacked on arrival they turn reading into an obstacle course. Space them out: consent first and compact, offers after engagement (e.g. at the end of the article), chat only on request.",
      "The header and breadcrumbs are navigation, not interruptions."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, Breadcrumbs, BrowserShell, Hotspot, Icon, MockButton, Skeleton, TopBar } from "../mock";
</script>

<BrandTheme brand="editorial">
  <BrowserShell url="blog.formfield.io/articles/calmer-forms">
    <div class="page">
      <Hotspot id="site-header">
        <TopBar brand="Formfield">
          <span class="spacer"></span>
          <span class="nav">Articles</span>
          <span class="nav">Courses</span>
        </TopBar>
      </Hotspot>
      <div class="body">
        <Hotspot id="breadcrumbs" inline><Breadcrumbs items={["Articles", "Forms"]} /></Hotspot>
        <Hotspot id="article">
          <article class="article">
            <p class="article__title">Seven ways to make forms feel calmer</p>
            <Skeleton lines={6} />
          </article>
        </Hotspot>
      </div>

      <span class="dim" aria-hidden="true"></span>

      <div class="modal">
        <Hotspot id="newsletter">
          <div class="modal__card">
            <span class="modal__close"><Icon name="x" size={14} /></span>
            <strong>Don’t miss a thing</strong>
            <span>Get our best articles every Tuesday.</span>
            <div class="modal__row">
              <span class="modal__input">you@company.com</span>
              <MockButton variant="primary" size="sm">Subscribe</MockButton>
            </div>
          </div>
        </Hotspot>
      </div>

      <div class="chat">
        <Hotspot id="chat">
          <div class="chat__bubble">
            <strong>Hi there!</strong>
            <span>Can I help you find a course?</span>
          </div>
        </Hotspot>
      </div>

      <div class="cookies">
        <Hotspot id="cookies">
          <div class="cookies__bar">
            <span>We use cookies to improve your experience and for marketing.</span>
            <MockButton size="sm">Settings</MockButton>
            <MockButton variant="primary" size="sm">Accept all</MockButton>
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
