<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "ambiguous-date",
    title: "March 4 or April 3?",
    principle: "Write dates in an unambiguous format",
    scenario: "A traveler from Paris books a flight to New York on a US airline’s website and checks the confirmation.",
    prompt: "What is the main issue with this confirmation?",
    kind: "single",
    choices: [
      { id: "a", text: "The departure date 03/04/2026 reads as March 4 or April 3 depending on the reader." },
      { id: "b", text: "The booking reference is set in capitals, which makes it harder to read aloud." },
      { id: "c", text: "Times use the 24-hour clock, which some travelers find less familiar to read." },
      { id: "d", text: "The total price has no breakdown of taxes and fees next to the amount paid." }
    ],
    correct: ["a"],
    explanation: [
      "Numeric dates mean different things in different countries: 03/04 is March 4 in the US and April 3 in most of Europe. A traveler can show up a month early or late.",
      "For an international audience, spell the month out (“Wed, 4 Mar 2026”) or follow the reader’s locale.",
      "Booking references are conventionally uppercase, and the 24-hour clock is the norm in aviation."
    ]
  };
</script>

<script lang="ts">
  import { Alert, BrandTheme, BrowserShell, Card, MockButton, TopBar } from "../mock";
</script>

<BrandTheme brand="eco">
  <BrowserShell url="www.flyliberty.com/trips/confirmation">
    <TopBar brand="Liberty Air" />
    <div class="page">
      <Alert tone="success" title="Your trip is booked" body="A confirmation has been sent to camille@mail.fr." />
      <Card title="Paris → New York" subtitle="Booking reference K7XQ2P">
        <div class="flight">
          <div><small>Departure</small><strong>03/04/2026</strong><span>CDG 14:35</span></div>
          <span class="line" aria-hidden="true"></span>
          <div><small>Arrival</small><strong>03/04/2026</strong><span>JFK 17:05</span></div>
        </div>
        <div class="footer">
          <span>Total paid <strong>$842.60</strong></span>
          <MockButton size="sm" icon="download">Receipt</MockButton>
        </div>
      </Card>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    display: grid;
    gap: 16px;
    padding: 22px 24px 26px;
  }

  .flight {
    display: flex;
    align-items: center;
    gap: 16px;

    div {
      display: grid;
      gap: 2px;
    }

    small,
    span {
      color: var(--mock-muted);
    }

    strong {
      font-size: 18px;
    }
  }

  .line {
    flex: 1;
    height: 1px;
    background: var(--mock-border);
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 12px;
    border-top: 1px solid var(--mock-border);
    color: var(--mock-muted);

    strong {
      color: var(--mock-text);
    }
  }
</style>
