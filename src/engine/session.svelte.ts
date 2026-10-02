import {
  HISTORY_LIMIT,
  FIXED_ORDER_STORAGE_KEY,
  HISTORY_STORAGE_KEY,
  PRACTICE_STORAGE_KEY,
  QUICK_RUN_SIZE,
  SESSION_STORAGE_KEY
} from "./const/session.const";
import { Run } from "./run.svelte";
import type { Attempt, RunData } from "./types/run.types";
import {
  createRun,
  isFixedOrder,
  parseHistory,
  parseRun,
  quickRunIds,
  readStorage,
  writeStorage
} from "./utils/session.utils";

class Session {
  readonly main: Run;
  practice: Run | null = $state(null);
  history: Attempt[] = $state([]);
  fixedOrder: boolean = $state(isFixedOrder());

  fullAttempts: Attempt[] = $derived(this.history.filter((attempt) => attempt.kind === "full"));
  bestFull: Attempt | null = $derived(
    this.fullAttempts.reduce<Attempt | null>(
      (best, attempt) => (best === null || attempt.score / attempt.total > best.score / best.total ? attempt : best),
      null
    )
  );
  lastFull: Attempt | null = $derived(this.fullAttempts.at(-1) ?? null);

  constructor() {
    const storedMain: RunData | null = parseRun(readStorage(SESSION_STORAGE_KEY), "full");
    this.main = new Run(storedMain ?? createRun("full"), () => {
      this.onRunChange(this.main, SESSION_STORAGE_KEY);
    });
    this.saveRun(this.main, SESSION_STORAGE_KEY);

    const storedPractice: RunData | null = parseRun(readStorage(PRACTICE_STORAGE_KEY), "retry");
    if (storedPractice !== null) this.practice = this.createPracticeRun(storedPractice);
    this.history = parseHistory(readStorage(HISTORY_STORAGE_KEY));

    window.addEventListener("storage", (event) => {
      this.syncFromStorage(event.key, event.newValue);
    });
  }

  setFixedOrder(fixed: boolean): void {
    writeStorage(FIXED_ORDER_STORAGE_KEY, fixed ? "1" : null);
    this.fixedOrder = fixed;
    this.endPractice();
    this.restart();
  }

  restart(): void {
    this.main.load(createRun("full"));
    this.saveRun(this.main, SESSION_STORAGE_KEY);
  }

  startRetry(): void {
    if (this.main.missedIds.length === 0) return;
    this.setPractice(createRun("retry", this.main.missedIds));
  }

  startQuick(): void {
    const latestMissed: string[] = this.history.at(-1)?.missed ?? [];
    const priority: string[] = [
      ...new Set([...this.main.missedIds.filter((id) => this.main.answers[id]?.submitted === true), ...latestMissed])
    ];
    const run: RunData = createRun("quick");
    this.setPractice({ ...run, order: quickRunIds(priority, run.seed, QUICK_RUN_SIZE) });
  }

  startFocus(quizId: string): void {
    this.setPractice(createRun("quick", [quizId]));
  }

  endPractice(): void {
    this.practice = null;
    writeStorage(PRACTICE_STORAGE_KEY, null);
  }

  private setPractice(data: RunData): void {
    this.practice = this.createPracticeRun(data);
    this.saveRun(this.practice, PRACTICE_STORAGE_KEY);
  }

  private createPracticeRun(data: RunData): Run {
    const run: Run = new Run(data, () => {
      this.onRunChange(run, PRACTICE_STORAGE_KEY);
    });
    return run;
  }

  private onRunChange(run: Run, key: string): void {
    this.saveRun(run, key);
    if (run.isComplete && !this.history.some((attempt) => attempt.runId === run.id)) this.record(run);
  }

  private record(run: Run): void {
    const attempt: Attempt = {
      runId: run.id,
      kind: run.kind,
      finishedAt: new Date().toISOString(),
      score: run.score,
      total: run.total,
      missed: run.missedIds
    };
    this.history = [...this.history, attempt].slice(-HISTORY_LIMIT);
    writeStorage(HISTORY_STORAGE_KEY, JSON.stringify(this.history));
  }

  private saveRun(run: Run, key: string): void {
    writeStorage(key, JSON.stringify(run.snapshot()));
  }

  private syncFromStorage(key: string | null, value: string | null): void {
    if (key === SESSION_STORAGE_KEY) {
      const next: RunData | null = parseRun(value, "full");
      if (next !== null) this.main.load(next);
    } else if (key === PRACTICE_STORAGE_KEY) {
      const next: RunData | null = parseRun(value, "retry");
      this.practice = next === null ? null : this.createPracticeRun(next);
    } else if (key === HISTORY_STORAGE_KEY) {
      this.history = parseHistory(value);
    }
  }
}

export const session: Session = new Session();
