<script lang="ts">
  import Button from "../components/Button.svelte";
  import ConfirmDialog from "../components/ConfirmDialog.svelte";
  import { router } from "./router.svelte";
  import { session } from "./session";
  import type { RestartButtonProps } from "./types/restart-button.types";
  import { href } from "./utils/router.utils";

  let { variant = "secondary", size = "md" }: RestartButtonProps = $props();

  let confirming: boolean = $state(false);

  const body: string = $derived(
    `Your ${String(session.main.answeredCount)} ${session.main.answeredCount === 1 ? "answer" : "answers"} and score will be cleared, and the options reshuffled.`
  );

  /**
   * @private
   * @desc Asks to confirm the restart.
   */
  const open = (): void => {
    confirming = true;
  };

  /**
   * @private
   * @desc Clears progress and opens the first question of a new main run.
   */
  const restart = (): void => {
    session.restart();
    router.navigate(href.quiz("main", 0));
  };
</script>

<Button {variant} {size} iconStart="refresh" onclick={open}>Restart quiz</Button>

<ConfirmDialog
  bind:open={confirming}
  title="Restart the quiz?"
  {body}
  confirmLabel="Clear progress"
  onconfirm={restart}
/>
