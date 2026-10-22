import {
  HISTORY_LIMIT,
  HISTORY_STORAGE_KEY,
  PRACTICE_STORAGE_KEY,
  QUICK_RUN_SIZE,
  SESSION_STORAGE_KEY
} from "./const/session.const";
import { Run } from "./run.svelte";
import type { QuizCatalog } from "./types/catalog.types";
import type { Attempt, RunData, RunKind } from "./types/run.types";
import type { SessionOptions, SessionStore } from "./types/session.types";
import { createRun, finishedNow, parseHistory, parseRun, quickPriority, quickRunIds } from "./utils/session.utils";

/**
 * @export
 * @desc Learner's persisted state: the main run, an optional practice run and the attempt history.
 * Every change is saved to the store and kept in sync across tabs.
 */
export class Session {
  /**
   * @public
   * @desc Main full run.
   */
  public readonly main: Run;
  /**
   * @public
   * @desc Current retry or quick run, if any.
   */
  public practice: Run | null = $state(null);
  /**
   * @public
   * @desc Completed attempts, oldest first.
   */
  public history: Attempt[] = $state([]);

  /**
   * @public
   * @desc Completed full-run attempts.
   */
  public fullAttempts: Attempt[] = $derived(this.history.filter((attempt) => attempt.kind === "full"));
  /**
   * @public
   * @desc Latest full-run attempt.
   */
  public lastFull: Attempt | null = $derived(this.fullAttempts.at(-1) ?? null);
  /**
   * @public
   * @desc Run in progress, practice first: only one run is active at a time.
   */
  public activeRun: Run | null = $derived.by((): Run | null => {
    if (this.practice?.inProgress === true) return this.practice;
    return this.main.inProgress ? this.main : null;
  });
  /**
   * @public
   * @desc Full-run attempt with the best score ratio.
   */
  public bestFull: Attempt | null = $derived(
    this.fullAttempts.reduce<Attempt | null>(
      (best, attempt) => (best === null || attempt.score / attempt.total > best.score / best.total ? attempt : best),
      null
    )
  );

  /**
   * @private
   * @desc Quiz pool.
   */
  private readonly catalog: QuizCatalog;
  /**
   * @private
   * @desc Persistence backend.
   */
  private readonly store: SessionStore;

  /**
   * @public
   * @desc Restores the session from the store, creating a main run when none is stored.
   *
   * @param options - Quiz pool and persistence backend.
   */
  public constructor({ catalog, store }: SessionOptions) {
    this.catalog = catalog;
    this.store = store;

    const storedMain: RunData | null = this.readRun(SESSION_STORAGE_KEY);
    this.main = new Run(catalog, storedMain ?? this.newRun("full"), () => {
      this.onRunChange(this.main, SESSION_STORAGE_KEY);
    });
    this.saveRun(this.main, SESSION_STORAGE_KEY);

    this.syncPractice(store.read(PRACTICE_STORAGE_KEY));
    this.history = parseHistory(store.read(HISTORY_STORAGE_KEY));

    store.subscribe((key, value) => {
      this.syncFromStorage(key, value);
    });
  }

  /**
   * @public
   * @desc Replaces the main run with a fresh one.
   */
  public restart(): void {
    this.main.load(this.newRun("full"));
    this.saveRun(this.main, SESSION_STORAGE_KEY);
  }

  /**
   * @public
   * @desc Starts a practice run of the main run's wrong answers; no-op when there are none.
   */
  public startRetry(): void {
    if (this.main.wrongIds.length === 0) return;
    this.setPractice(this.newRun("retry", this.main.wrongIds));
  }

  /**
   * @public
   * @desc Starts a quick practice run, recently missed questions first.
   */
  public startQuick(): void {
    const priority: string[] = quickPriority(this.main.wrongIds, this.history.at(-1)?.missed ?? []);
    const run: RunData = this.newRun("quick");
    this.setPractice({ ...run, order: quickRunIds(this.catalog, priority, run.seed, QUICK_RUN_SIZE) });
  }

  /**
   * @public
   * @desc Discards the practice run.
   */
  public endPractice(): void {
    this.practice = null;
    this.store.write(PRACTICE_STORAGE_KEY, null);
  }

  /**
   * @public
   * @desc Discards the active run: ends practice, or restarts the main quiz.
   */
  public abandonActive(): void {
    if (this.activeRun === null) return;
    if (this.activeRun === this.main) this.restart();
    else this.endPractice();
  }

  /**
   * @private
   * @desc Creates run data for the requested run kind.
   *
   * @param kind - Run kind.
   * @param ids - Explicit quiz ids.
   *
   * @returns New run data.
   */
  private newRun(kind: RunKind, ids?: readonly string[]): RunData {
    return createRun(
      this.catalog,
      ids === undefined ? { kind } : { kind, ids }
    );
  }

  /**
   * @private
   * @desc Reads a stored run.
   *
   * @param key - Storage key.
   *
   * @returns Run data, or null when unusable.
   */
  private readRun(key: string): RunData | null {
    return parseRun(this.catalog, this.store.read(key));
  }

  /**
   * @private
   * @desc Makes the data the current practice run and saves it.
   *
   * @param data - Practice run data.
   */
  private setPractice(data: RunData): void {
    this.practice = this.createPracticeRun(data);
    this.saveRun(this.practice, PRACTICE_STORAGE_KEY);
  }

  /**
   * @private
   * @desc Wraps data in a {@link Run} persisted under the practice key.
   *
   * @param data - Practice run data.
   *
   * @returns The run.
   */
  private createPracticeRun(data: RunData): Run {
    const run: Run = new Run(this.catalog, data, () => {
      this.onRunChange(run, PRACTICE_STORAGE_KEY);
    });
    return run;
  }

  /**
   * @private
   * @desc Saves a changed run and records it once when complete.
   *
   * @param run - Changed run.
   * @param key - Storage key.
   */
  private onRunChange(run: Run, key: string): void {
    this.saveRun(run, key);
    if (run.isComplete && !this.history.some((attempt) => attempt.runId === run.id)) this.record(run);
  }

  /**
   * @private
   * @desc Appends a completed run to the history, capped at {@link HISTORY_LIMIT}, and saves it.
   *
   * @param run - Completed run.
   */
  private record(run: Run): void {
    const attempt: Attempt = {
      runId: run.id,
      kind: run.kind,
      finishedAt: finishedNow(),
      score: run.score,
      total: run.total,
      missed: [...run.wrongIds]
    };
    this.history = [...this.history, attempt].slice(-HISTORY_LIMIT);
    this.store.write(HISTORY_STORAGE_KEY, JSON.stringify(this.history));
  }

  /**
   * @private
   * @desc Writes a run to the store.
   *
   * @param run - Run to save.
   * @param key - Storage key.
   */
  private saveRun(run: Run, key: string): void {
    this.store.write(key, JSON.stringify(run.snapshot()));
  }

  /**
   * @private
   * @desc Reloads the main run from stored JSON, or starts a new one.
   *
   * @param raw - Stored JSON.
   */
  private syncMain(raw: string | null): void {
    this.main.load(parseRun(this.catalog, raw) ?? this.newRun("full"));
  }

  /**
   * @private
   * @desc Reloads the practice run from stored JSON.
   *
   * @param raw - Stored JSON.
   */
  private syncPractice(raw: string | null): void {
    const next: RunData | null = parseRun(this.catalog, raw);
    this.practice = next === null ? null : this.createPracticeRun(next);
  }

  /**
   * @private
   * @desc Applies a storage change from another tab; a null key reloads everything.
   *
   * @param key - Changed key.
   * @param value - New value.
   */
  private syncFromStorage(key: string | null, value: string | null): void {
    if (key === null) {
      this.syncMain(this.store.read(SESSION_STORAGE_KEY));
      this.syncPractice(this.store.read(PRACTICE_STORAGE_KEY));
      this.history = parseHistory(this.store.read(HISTORY_STORAGE_KEY));
    } else if (key === SESSION_STORAGE_KEY) {
      this.syncMain(value);
    } else if (key === PRACTICE_STORAGE_KEY) {
      this.syncPractice(value);
    } else if (key === HISTORY_STORAGE_KEY) {
      this.history = parseHistory(value);
    }
  }
}
