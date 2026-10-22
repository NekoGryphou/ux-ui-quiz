import { Run } from "../engine/run.svelte";
import { Session } from "../engine/session.svelte";
import { createCatalog } from "../engine/utils/catalog.utils";
import { createRun } from "../engine/utils/session.utils";
import { quizzes } from "../quizzes";
import { readStorage, subscribeStorage, writeStorage } from "../shared/utils/storage.utils";

/**
 * @export
 * @desc App-wide quiz session, persisted in local storage.
 */
export const session: Session = new Session({
  catalog: createCatalog(quizzes),
  store: { read: readStorage, write: writeStorage, subscribe: subscribeStorage }
});

/**
 * @export
 * @desc Temporary development run containing every question in file order.
 */
export const debugRun: Run | null = import.meta.env.DEV
  ? new Run(
      createCatalog(quizzes),
      createRun(createCatalog(quizzes), { kind: "full", ids: quizzes.map((quiz) => quiz.id), ordered: true }),
      (): void => undefined
    )
  : null;
