import {
  CHOICE_IDS_BY_QUIZ,
  FILE_ORDER,
  FIXED_ORDER_SEED,
  FIXED_ORDER_STORAGE_KEY,
  FULL_RUN_SIZE,
  ORDER_SHUFFLE_KEY,
  QUIZ_BY_ID
} from "../const/session.const";
import type { Answer } from "../types/quiz.types";
import type { Attempt, RunData, RunKind } from "../types/run.types";
import { randomSeed, seededShuffle } from "./shuffle.utils";

const RUN_KINDS: readonly RunKind[] = ["full", "retry", "quick"];

const isRecord = (value: unknown): value is Record<string, unknown> => typeof value === "object" && value !== null;

const isRunKind = (value: unknown): value is RunKind => RUN_KINDS.some((kind) => kind === value);

const stringList = (value: unknown): string[] | null =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : null;

const newRunId = (): string => `${Date.now().toString(36)}-${Math.floor(Math.random() * 1e6).toString(36)}`;

const shuffledOrder = (ids: readonly string[], seed: number): string[] => seededShuffle(ids, seed, ORDER_SHUFFLE_KEY);

export const isFixedOrder = (): boolean => import.meta.env.DEV && readStorage(FIXED_ORDER_STORAGE_KEY) === "1";

const fullRunOrder = (seed: number): string[] =>
  isFixedOrder() ? [...FILE_ORDER] : shuffledOrder(FILE_ORDER, seed).slice(0, FULL_RUN_SIZE);

export const createRun = (kind: RunKind, ids?: readonly string[]): RunData => {
  const seed: number = isFixedOrder() ? FIXED_ORDER_SEED : randomSeed();
  const order: string[] = ids === undefined ? fullRunOrder(seed) : shuffledOrder(ids, seed);
  return { id: newRunId(), kind, seed, answers: {}, order };
};

const reconcileOrder = (stored: readonly string[]): string[] =>
  stored.filter((id, index) => QUIZ_BY_ID.has(id) && stored.indexOf(id) === index);

const sanitizeAnswer = (quizId: string, value: unknown): Answer | null => {
  const choiceIds: ReadonlySet<string> | undefined = CHOICE_IDS_BY_QUIZ.get(quizId);
  if (choiceIds === undefined || !isRecord(value)) return null;
  const { selected, submitted } = value;
  if (!Array.isArray(selected) || typeof submitted !== "boolean") return null;
  const kept: string[] = selected.filter((id): id is string => typeof id === "string" && choiceIds.has(id));
  if (kept.length === 0 || (submitted && kept.length !== selected.length)) return null;
  return { selected: kept, submitted };
};

const sanitizeAnswers = (raw: unknown, allowed: readonly string[]): Record<string, Answer> => {
  if (!isRecord(raw)) return {};
  const answers: Record<string, Answer> = {};
  for (const [quizId, value] of Object.entries(raw)) {
    if (!allowed.includes(quizId)) continue;
    const answer: Answer | null = sanitizeAnswer(quizId, value);
    if (answer !== null) answers[quizId] = answer;
  }
  return answers;
};

const parseJson = (raw: string | null): unknown => {
  if (raw === null) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

export const parseRun = (raw: string | null, fallbackKind: RunKind): RunData | null => {
  const parsed: unknown = parseJson(raw);
  if (!isRecord(parsed)) return null;
  const { seed, answers, order, id, kind } = parsed;
  if (typeof seed !== "number" || !Number.isInteger(seed)) return null;
  const runKind: RunKind = isRunKind(kind) ? kind : fallbackKind;
  const storedOrder: string[] | null = stringList(order);
  const runOrder: string[] = storedOrder === null ? fullRunOrder(seed) : reconcileOrder(storedOrder);
  if (runOrder.length === 0) return null;
  const runAnswers: Record<string, Answer> = sanitizeAnswers(answers, runOrder);
  const unstartedLegacy: boolean =
    runKind === "full" && !isFixedOrder() && runOrder.length !== FULL_RUN_SIZE && Object.keys(runAnswers).length === 0;
  return {
    id: typeof id === "string" ? id : newRunId(),
    kind: runKind,
    seed,
    answers: runAnswers,
    order: unstartedLegacy ? fullRunOrder(seed) : runOrder
  };
};

const parseAttempt = (value: unknown): Attempt | null => {
  if (!isRecord(value)) return null;
  const { runId, kind, finishedAt, score, total, missed } = value;
  const missedIds: string[] | null = stringList(missed);
  if (typeof runId !== "string" || !isRunKind(kind) || typeof finishedAt !== "string") return null;
  if (typeof score !== "number" || typeof total !== "number" || missedIds === null) return null;
  return { runId, kind, finishedAt, score, total, missed: missedIds };
};

export const parseHistory = (raw: string | null): Attempt[] => {
  const parsed: unknown = parseJson(raw);
  if (!Array.isArray(parsed)) return [];
  return parsed.map(parseAttempt).filter((attempt): attempt is Attempt => attempt !== null);
};

export const readStorage = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const writeStorage = (key: string, value: string | null): boolean => {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
};

export const withoutKey = <T>(record: Record<string, T>, key: string): Record<string, T> =>
  Object.fromEntries(Object.entries(record).filter(([entryKey]) => entryKey !== key));

export const quickRunIds = (priority: readonly string[], seed: number, size: number): string[] => {
  const rest: string[] = FILE_ORDER.filter((id) => !priority.includes(id));
  const ranked: string[] = [
    ...seededShuffle(priority, seed, "quick-priority"),
    ...seededShuffle(rest, seed, "quick-rest")
  ];
  return ranked.slice(0, size);
};
