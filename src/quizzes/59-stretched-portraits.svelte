<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "stretched-portraits",
    title: "The funhouse team page",
    principle: "Keep images in proportion",
    scenario: "A candidate visits a design studio’s team page before a job interview, to put faces to names.",
    prompt: "What is the main issue with this page?",
    kind: "single",
    choices: [
      { id: "a", text: "Two portraits are stretched to fill their frames, so those faces look squashed and odd." },
      { id: "b", text: "The portraits are round, where square photos would show a little more of each person." },
      { id: "c", text: "Job titles sit under the names in grey, where matching colors would make them pop more." },
      { id: "d", text: "The grid shows four people per row, where three per row would give each photo more room." }
    ],
    correct: ["a"],
    explanation: [
      "Two photos were forced into the square frame by stretching instead of cropping: one face is squashed flat, the other pulled tall. Distorted images look careless and, on a team page, a little disrespectful.",
      "Keep the original aspect ratio and crop to fit (object-fit: cover, with a sensible focal point), or prepare images at the right ratio before upload.",
      "Round crops are a common portrait style, grey job titles create a useful hierarchy, and four per row is a normal grid at this width."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme } from "../mock";
  import type { TeamMember } from "./types/quiz-mocks.types";

  const team: TeamMember[] = [
    { name: "Inès Morel", role: "Creative director", skin: "#f1c7a5", hair: "#3b2416", stretch: "none" },
    { name: "Tomás Ruiz", role: "Product designer", skin: "#c98e63", hair: "#1c1410", stretch: "wide" },
    { name: "Aiko Tanaka", role: "UX researcher", skin: "#f3d2b3", hair: "#111111", stretch: "none" },
    { name: "Dev Patel", role: "Design engineer", skin: "#a8714b", hair: "#2a1a10", stretch: "tall" }
  ];
</script>

<BrandTheme brand="editorial">
  <div class="team">
    <p class="team__kicker">STUDIO NORTH</p>
    <p class="team__title">Meet the team</p>
    <div class="team__grid">
      {#each team as member (member.name)}
        <div class="member">
          <div class="member__photo">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="face face--{member.stretch}">
              <rect width="100" height="100" fill="#d9d2c3" />
              <ellipse cx="50" cy="104" rx="38" ry="30" fill="#4a4f63" />
              <ellipse cx="50" cy="52" rx="20" ry="24" fill={member.skin} />
              <path d="M28 48q2-26 22-26t22 26q-6-12-22-12t-22 12z" fill={member.hair} />
              <circle cx="42" cy="54" r="2.4" fill="#1a1a1a" />
              <circle cx="58" cy="54" r="2.4" fill="#1a1a1a" />
              <path d="M43 64q7 5 14 0" stroke="#7a3b2a" stroke-width="2" fill="none" />
            </svg>
          </div>
          <strong>{member.name}</strong>
          <span class="member__role">{member.role}</span>
        </div>
      {/each}
    </div>
  </div>
</BrandTheme>

<style lang="scss">
  .team {
    display: grid;
    gap: 6px;
    width: 600px;
    padding: 28px;
    background: var(--mock-bg);
    color: var(--mock-text);
    box-shadow: var(--mock-shadow-md);

    &__kicker {
      color: var(--mock-muted);
      font-size: 11px;
      letter-spacing: 0.16em;
    }

    &__title {
      margin-bottom: 14px;
      font: 700 26px/1.1 var(--mock-heading-font);
    }

    &__grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
    }
  }

  .member {
    display: grid;
    justify-items: center;
    gap: 4px;
    text-align: center;
    font-size: 13px;

    &__photo {
      width: 110px;
      height: 110px;
      overflow: hidden;
      border-radius: 50%;
      margin-bottom: 8px;
      background: #d9d2c3;
    }

    &__role {
      color: var(--mock-muted);
      font-size: 12px;
    }
  }

  .face {
    display: block;
    width: 100%;
    height: 100%;
    transform-origin: center;

    &--wide {
      transform: scale(1.45, 0.8);
    }

    &--tall {
      transform: scale(0.72, 1.35);
    }
  }
</style>
