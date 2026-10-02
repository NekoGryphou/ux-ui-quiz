<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "destructive-color",
    title: "Destructive action dressed as success",
    principle: "Match visual semantics to consequence",
    scenario:
      "A project owner wants to permanently remove an old project. They open its settings and click “Delete project”.",
    prompt: "What is the main issue with this dialog?",
    kind: "single",
    choices: [
      { id: "a", text: "The delete button is green, a color users read as safe, so the risk is understated." },
      { id: "b", text: "The dialog doesn’t ask users to type the project name, so deleting is too easy." },
      { id: "c", text: "Cancel and Delete sit side by side, so a slip of the pointer can hit the wrong one." },
      { id: "d", text: "The title is phrased as a question, so it’s unclear whether deletion already happened." }
    ],
    correct: ["a"],
    explanation: [
      "Green is learned as “success, go ahead”. On an irreversible delete it sends the opposite signal to the one users need.",
      "Destructive actions should look risky: a red or danger style, explicit wording, and Cancel as the safe default.",
      "Typing the project name is a useful extra safeguard for very high-stakes deletes, but here the color is what misleads."
    ]
  };
</script>

<script lang="ts">
  import { Breadcrumbs, BrowserShell, Card, MockButton, Modal, Skeleton, TopBar } from "../mock";
</script>

<BrowserShell url="app.orbit.io/projects/atlas/settings">
  <TopBar brand="Orbit">
    <Breadcrumbs items={["Projects", "Atlas", "Settings"]} />
  </TopBar>
  <div class="page">
    <Card title="General"><Skeleton lines={2} /></Card>
    <Card title="Danger zone" subtitle="Irreversible actions"><Skeleton lines={1} /></Card>

    <Modal title="Delete project Atlas?" floating>
      <span
        >All 214 files, 12 boards and the full activity history will be permanently removed. This can’t be undone.</span
      >
      {#snippet actions()}
        <MockButton>Cancel</MockButton>
        <MockButton variant="success" icon="trash">Delete project</MockButton>
      {/snippet}
    </Modal>
  </div>
</BrowserShell>

<style lang="scss">
  .page {
    position: relative;
    display: grid;
    gap: 14px;
    min-height: 360px;
    padding: 20px;
  }
</style>
