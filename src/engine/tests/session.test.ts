import { describe, expect, it } from "vitest";
import type { StorageListener } from "../../shared/types/storage.types";
import { HISTORY_STORAGE_KEY, PRACTICE_STORAGE_KEY, SESSION_STORAGE_KEY } from "../const/session.const";
import type { Run } from "../run.svelte";
import { Session } from "../session.svelte";
import type { SessionStore } from "../types/session.types";
import { CATALOG, quizById } from "./catalog.fixture";

interface MemoryStore extends SessionStore {
  readonly data: Map<string, string>;
  emit: StorageListener;
}

const memoryStore = (): MemoryStore => {
  const data: Map<string, string> = new Map<string, string>();
  const listeners: StorageListener[] = [];
  return {
    data,
    read: (key: string): string | null => data.get(key) ?? null,
    write: (key: string, value: string | null): boolean => {
      if (value === null) data.delete(key);
      else data.set(key, value);
      return true;
    },
    subscribe: (listener: StorageListener): void => {
      listeners.push(listener);
    },
    emit: (key: string | null, value: string | null): void => {
      listeners.forEach((listener: StorageListener): void => {
        listener(key, value);
      });
    }
  };
};

const fixedSession = (store: SessionStore): Session => {
  const session: Session = new Session({ catalog: CATALOG, store });
  return session;
};

const answerAll = (session: Session, wrong: readonly string[]): void => {
  session.main.order.forEach((quiz) => {
    const pick: string | undefined = wrong.includes(quiz.id)
      ? ["a", "b", "r1", "r2"].find((id) => !quiz.correct.some((correct) => correct === id))
      : quiz.correct[0];
    if (pick === undefined) throw new Error(`No pick for ${quiz.id}`);
    session.main.toggle(quiz, pick);
    if (quiz.kind === "multiple" && !wrong.includes(quiz.id)) session.main.toggle(quiz, "b");
    session.main.submit(quiz);
  });
};

describe("Session", (): void => {
  it("retries only the questions answered wrongly", (): void => {
    const session: Session = fixedSession(memoryStore());
    session.main.toggle(quizById("single"), "b");
    session.main.submit(quizById("single"));
    expect(session.main.wrongIds).toEqual(["single"]);

    session.startRetry();
    expect(session.practice?.orderIds).toEqual(["single"]);
  });

  it("records one attempt when a run completes", (): void => {
    const store: MemoryStore = memoryStore();
    const session: Session = fixedSession(store);
    answerAll(session, ["single"]);

    expect(session.history).toHaveLength(1);
    expect(session.history[0]).toMatchObject({ kind: "full", score: 3, total: 4, missed: ["single"] });
    expect(store.read(HISTORY_STORAGE_KEY)).not.toBeNull();
  });

  it("follows another tab clearing storage", (): void => {
    const store: MemoryStore = memoryStore();
    const session: Session = fixedSession(store);
    session.main.toggle(quizById("single"), "a");
    session.startQuick();
    const previousRun: string = session.main.id;

    store.data.clear();
    store.emit(null, null);

    expect(session.main.id).not.toBe(previousRun);
    expect(session.main.hasStarted).toBe(false);
    expect(session.practice).toBeNull();
    expect(store.read(SESSION_STORAGE_KEY)).toBeNull();
    expect(store.read(PRACTICE_STORAGE_KEY)).toBeNull();
  });

  it("keeps a single active run and abandons it on demand", (): void => {
    const session: Session = fixedSession(memoryStore());
    expect(session.activeRun).toBeNull();

    session.main.toggle(quizById("single"), "a");
    session.main.submit(quizById("single"));
    expect(session.activeRun).toBe(session.main);

    session.abandonActive();
    expect(session.main.hasStarted).toBe(false);
    expect(session.activeRun).toBeNull();

    session.startQuick();
    expect(session.activeRun).toBeNull();
    const practice: Run | null = session.practice;
    if (practice === null) throw new Error("Quick run was not created.");
    practice.toggle(practice.order[0] ?? quizById("single"), "a");
    expect(session.activeRun).toBe(practice);
    session.abandonActive();
    expect(session.practice).toBeNull();
  });
});
