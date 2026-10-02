<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "action-hierarchy",
    title: "Reversed action hierarchy",
    principle: "Align visual emphasis with task priority",
    scenario:
      "An editor has finished writing an article and reviewed it. Their goal now is to make it live on the blog.",
    prompt: "What is the main issue in this editor?",
    kind: "single",
    choices: [
      { id: "a", text: "The “Saved 2 min ago” status sits far from the article, so autosave is easy to miss." },
      { id: "b", text: "Publish is styled as a plain text link, weaker than Save draft, the secondary action." },
      { id: "c", text: "Preview is a ghost button, although editors are expected to check before publishing." },
      { id: "d", text: "The Draft badge stays visible after saving, which suggests the work isn’t stored yet." }
    ],
    correct: ["b"],
    explanation: [
      "Visual hierarchy should point to the main task. Here the filled button is the secondary action, while Publish is a plain text link.",
      "When emphasis is reversed, users hesitate, or click the prominent button and believe the article is live.",
      "One clear primary action per view works best; the others can stay visible as secondary or ghost buttons."
    ]
  };
</script>

<script lang="ts">
  import { Badge, BrandTheme, BrowserShell, MockButton, Skeleton, Title, TopBar } from "../mock";
</script>

<BrandTheme brand="corporate">
  <BrowserShell url="cms.northwind.blog/posts/451/edit">
    <TopBar brand="Northwind CMS">
      <Badge tone="warning">Draft</Badge>
      <span class="saved">Saved 2 min ago</span>
      <span class="spacer"></span>
      <MockButton variant="ghost" icon="eye">Preview</MockButton>
      <MockButton variant="link">Publish</MockButton>
      <MockButton variant="primary">Save draft</MockButton>
    </TopBar>
    <article class="doc">
      <Title size="lg">Designing calmer notifications</Title>
      <p class="meta">By Inès Martin · 6 min read</p>
      <Skeleton lines={3} />
      <div class="figure"></div>
      <Skeleton lines={3} />
    </article>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .saved {
    color: var(--mock-muted);
    font-size: 12px;
  }

  .spacer {
    flex: 1;
  }

  .doc {
    display: grid;
    gap: 14px;
    max-width: 480px;
    margin: 0 auto;
    padding: 28px 20px 36px;
  }

  .meta {
    margin: -8px 0 4px;
    color: var(--mock-muted);
  }

  .figure {
    height: 110px;
    border-radius: 10px;
    background: linear-gradient(135deg, #dbeafe, #ede9fe);
  }
</style>
