<script lang="ts">
  import Button from "../components/Button.svelte";
  import ConfirmDialog from "../components/ConfirmDialog.svelte";
  import { plural, t } from "../shared/locale.svelte";
  import { ANSWER_FORMS } from "./const/run-label.const";
  import { router } from "./router.svelte";
  import { session } from "./session";
  import type { RestartButtonProps } from "./types/restart-button.types";
  import { href } from "./utils/router.utils";

  let { variant = "secondary", size = "md" }: RestartButtonProps = $props();

  let confirming: boolean = $state(false);

  const body: string = $derived(
    t(
      `Your ${String(session.main.answeredCount)} ${plural(session.main.answeredCount, ANSWER_FORMS)} and score will be cleared, and the options reshuffled.`,
      `Vos réponses (${String(session.main.answeredCount)}) et votre score seront effacés, et l’ordre des options sera remélangé.`
    )
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

<Button {variant} {size} iconStart="refresh" onclick={open}>{t("Restart quiz", "Recommencer le quiz")}</Button>

<ConfirmDialog
  bind:open={confirming}
  title={t("Restart the quiz?", "Recommencer le quiz ?")}
  {body}
  confirmLabel={t("Clear progress", "Effacer la progression")}
  onconfirm={restart}
/>
