<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "ok-cancel",
    title: "Cancel, or cancel?",
    principle: "Label buttons with what they do",
    scenario:
      "A user clicked “Cancel subscription” to see what would happen, but in the end they want to keep their Pro plan.",
    prompt: "What is the main issue with this dialog?",
    kind: "single",
    choices: [
      { id: "a", text: "The title is a question, where a statement would tell users more directly what happens." },
      { id: "b", text: "“Cancel” and “OK” don’t say what they do, and “Cancel” could mean either choice here." },
      { id: "c", text: "The two buttons sit side by side, where stacking them would better fit small screens." },
      { id: "d", text: "The dialog has both a close icon and a Cancel button, which duplicates the way out." }
    ],
    correct: ["b"],
    explanation: [
      "When the action itself is “cancel”, a Cancel button is ambiguous: does it cancel the dialog or the subscription?",
      "Use labels that state the outcome: “Keep my plan” and “Cancel subscription”. Users should be able to decide from the buttons alone.",
      "A close icon alongside a dismiss button is a common, harmless pattern."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, BrowserShell, Card, MockButton, Modal, Skeleton, Tabs, Title } from "../mock";
</script>

<BrandTheme brand="brutalist">
  <BrowserShell url="app.sketchpad.io/settings/billing">
    <div class="page">
      <Title>Settings</Title>
      <Tabs items={["Profile", "Team", "Billing"]} active={2} />
      <Card title="Pro plan" subtitle="€12/month · renews Nov 1"><Skeleton lines={2} /></Card>

      <Modal title="Cancel your subscription?" floating>
        <span>You’ll lose access to Pro features at the end of your billing period on Nov 1.</span>
        {#snippet actions()}
          <MockButton>Cancel</MockButton>
          <MockButton variant="primary">OK</MockButton>
        {/snippet}
      </Modal>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    position: relative;
    display: grid;
    gap: 16px;
    min-height: 340px;
    padding: 22px 24px;
  }
</style>
