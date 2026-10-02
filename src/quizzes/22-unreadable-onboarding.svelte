<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "unreadable-onboarding",
    title: "The fine print of onboarding",
    principle: "Keep body text legible: size, contrast and alignment",
    scenario: "A new user opens a budgeting app on their phone, on a bus, to see what it can do.",
    prompt: "Click the part of this screen that will stop people from taking in the message.",
    kind: "hotspot",
    regions: [
      { id: "skip", text: "Skip link" },
      { id: "illustration", text: "Illustration" },
      { id: "headline", text: "Headline" },
      { id: "body", text: "Description text" },
      { id: "progress", text: "Step indicator" },
      { id: "next", text: "Next button" }
    ],
    correct: ["body"],
    links: [wcag("1.4.3", "Contrast (Minimum)", "contrast-minimum")],
    explanation: [
      "The description is set in 10px light-gray justified text: too small and too pale to read on a phone, and justification opens uneven gaps between words.",
      "Body text on mobile should be around 16px, meet 4.5:1 contrast (WCAG 1.4.3), and be left-aligned so word spacing stays even.",
      "Onboarding copy should also be short: one idea per screen, readable in a glance."
    ]
  };
</script>

<script lang="ts">
  import { Hotspot, MockButton, PhoneShell } from "../mock";
</script>

<PhoneShell>
  <div class="screen">
    <Hotspot id="skip"><span class="skip">Skip</span></Hotspot>
    <Hotspot id="illustration"
      ><div class="art" aria-hidden="true"><span></span><span></span><span></span></div></Hotspot
    >
    <Hotspot id="headline"><p class="headline">See where every euro goes</p></Hotspot>
    <Hotspot id="body">
      <p class="body">
        Pennywise automatically sorts every transaction from all of your linked accounts into clear categories, builds a
        monthly budget from your real spending patterns, warns you before you go over a limit, and lets you set savings
        goals that adjust themselves as your income and expenses change over time.
      </p>
    </Hotspot>
    <Hotspot id="progress"><div class="dots"><i class="on"></i><i></i><i></i><i></i></div></Hotspot>
    <Hotspot id="next"><MockButton variant="primary" size="lg" block>Next</MockButton></Hotspot>
  </div>
</PhoneShell>

<style lang="scss">
  .screen {
    display: grid;
    flex: 1;
    align-content: start;
    gap: 16px;
    padding: 8px 22px 30px;
  }

  .skip {
    display: block;
    color: var(--mock-primary);
    font-weight: 500;
    text-align: right;
  }

  .art {
    position: relative;
    height: 170px;
    border-radius: 20px;
    background: linear-gradient(160deg, #dbeafe, #ede9fe);

    span {
      position: absolute;
      bottom: 24px;
      width: 34px;
      border-radius: 8px 8px 0 0;
      background: var(--mock-primary);

      &:nth-child(1) {
        left: 70px;
        height: 50px;
        opacity: 0.5;
      }
      &:nth-child(2) {
        left: 118px;
        height: 90px;
      }
      &:nth-child(3) {
        left: 166px;
        height: 66px;
        opacity: 0.7;
      }
    }
  }

  .headline {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.2;
  }

  .body {
    color: #a3a8b3;
    font-size: 10px;
    line-height: 1.35;
    text-align: justify;
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 6px;

    i {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--mock-control-track);
    }

    .on {
      width: 20px;
      border-radius: 999px;
      background: var(--mock-primary);
    }
  }
</style>
