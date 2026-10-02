<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "vague-navigation",
    title: "Where would pricing be?",
    principle: "Name sections by what people look for",
    scenario: "A team lead comparing project tools wants to know what the Team plan costs.",
    prompt: "Which issues make this navigation hard to use?",
    kind: "multiple",
    choices: [
      { id: "a", text: "Platform, Solutions and Products overlap, so it’s unclear where any feature lives." },
      { id: "b", text: "Pricing sits under Company, a section people associate with careers and press." },
      { id: "c", text: "The navigation uses text labels without icons, which makes it slower to scan." },
      { id: "d", text: "The Company menu lists four links, where a single About page would be simpler." }
    ],
    correct: ["a", "b"],
    explanation: [
      "Platform, Solutions and Products are three vague, overlapping words: visitors can’t predict which one contains what they need.",
      "Pricing is one of the most-visited pages on a product site; hidden under Company it’s nearly impossible to find. Give it a top-level link.",
      "Text labels are the clearest option for top navigation, and a short Company menu is fine."
    ]
  };
</script>

<script lang="ts">
  import { BrandMark, BrandTheme, BrowserShell, Icon, MockButton, Skeleton } from "../mock";
</script>

<BrandTheme brand="brutalist">
  <BrowserShell url="www.taskloom.io">
    <div class="nav">
      <span class="brand"><BrandMark name="Taskloom" />Taskloom</span>
      <span class="item">Platform <Icon name="chevron-down" size={12} /></span>
      <span class="item">Solutions <Icon name="chevron-down" size={12} /></span>
      <span class="item">Products <Icon name="chevron-down" size={12} /></span>
      <span class="item">Resources <Icon name="chevron-down" size={12} /></span>
      <span class="item item--open">
        Company <Icon name="chevron-down" size={12} />
        <span class="menu">
          <span>About us</span>
          <span>Careers</span>
          <span>Pricing</span>
          <span>Press</span>
        </span>
      </span>
      <span class="spacer"></span>
      <MockButton variant="primary" size="sm">Get started</MockButton>
    </div>
    <div class="hero">
      <p class="hero__title">Work that flows, together</p>
      <Skeleton lines={2} />
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .nav {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px 20px;
    border-bottom: 1px solid var(--mock-border);
    background: var(--mock-surface);
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
  }

  .item {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 3px;
    color: var(--mock-muted);
    font-weight: 500;

    &--open {
      color: var(--mock-text);
    }
  }

  .menu {
    position: absolute;
    top: calc(100% + 12px);
    left: -12px;
    z-index: 1;
    display: grid;
    gap: 2px;
    min-width: 150px;
    padding: 8px;
    border: 1px solid var(--mock-border);
    border-radius: 10px;
    background: var(--mock-surface);
    box-shadow: var(--mock-shadow-md);

    span {
      padding: 6px 8px;
      border-radius: 6px;
      color: var(--mock-text);
    }
  }

  .spacer {
    flex: 1;
  }

  .hero {
    display: grid;
    gap: 14px;
    padding: 70px 40px 80px;
    text-align: center;

    &__title {
      font-size: 26px;
      font-weight: 700;
    }
  }
</style>
