import { FULL_RUN_SIZE, ORDER_SHUFFLE_KEY } from "../const/session.const";
import type { QuizCatalog } from "../types/catalog.types";
import type { Answer, QuizMeta } from "../types/quiz.types";
import type { Attempt, RunData, RunKind, RunPlan } from "../types/run.types";
import { randomSeed, seededShuffle } from "./shuffle.utils";

/**
 * @private
 * @desc Every known run kind.
 */
const RUN_KINDS: readonly RunKind[] = ["full", "retry", "quick"];

/**
 * @private
 * @desc Type guard for non-null objects.
 *
 * @param value - Value to check.
 *
 * @returns True for a non-null object.
 */
const isRecord = (value: unknown): value is Record<string, unknown> => typeof value === "object" && value !== null;

/**
 * @private
 * @desc Type guard for {@link RunKind}.
 *
 * @param value - Value to check.
 *
 * @returns True for a known run kind.
 */
const isRunKind = (value: unknown): value is RunKind => RUN_KINDS.some((kind) => kind === value);

/**
 * @private
 * @desc Generates a unique run id from time and randomness.
 *
 * @returns New run id.
 */
const newRunId = (): string => `${Date.now().toString(36)}-${Math.floor(Math.random() * 1e6).toString(36)}`;

/**
 * @private
 * @desc Returns quiz ids in the seeded question order.
 *
 * @param ids - Quiz ids.
 * @param seed - Run seed.
 *
 * @returns Shuffled ids.
 */
const shuffledOrder = (ids: readonly string[], seed: number): string[] => seededShuffle(ids, seed, ORDER_SHUFFLE_KEY);

/**
 * @private
 * @desc Keeps the string items of an array.
 *
 * @param value - Parsed value.
 *
 * @returns Strings, or null when not an array.
 */
const stringList = (value: unknown): string[] | null =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : null;

/**
 * @private
 * @desc Returns the question order of a full run.
 *
 * @param catalog - Quiz pool.
 * @param seed - Run seed.
 *
 * @returns Up to {@link FULL_RUN_SIZE} shuffled quizzes.
 */
const fullRunOrder = (catalog: QuizCatalog<QuizMeta>, seed: number): string[] =>
  shuffledOrder(catalog.order, seed).slice(0, FULL_RUN_SIZE);

/**
 * @private
 * @desc Drops unknown and duplicate ids from a stored order.
 *
 * @param catalog - Current quizzes.
 * @param stored - Stored order.
 *
 * @returns Cleaned order.
 */
const reconcileOrder = (catalog: QuizCatalog<QuizMeta>, stored: readonly string[]): string[] =>
  stored.filter((id, index) => catalog.byId.has(id) && stored.indexOf(id) === index);

/**
 * @private
 * @desc Tells whether a stored score is plausible.
 *
 * @param score - Correct answers.
 * @param total - Question count.
 *
 * @returns True for integers with 0 ≤ score ≤ total and total > 0.
 */
const isValidScore = (score: number, total: number): boolean =>
  Number.isInteger(score) && Number.isInteger(total) && total > 0 && score >= 0 && score <= total;

/**
 * @private
 * @desc Restores one stored answer, keeping only current option ids.
 * A submitted answer with any stale option is dropped, since its grading would change.
 *
 * @param catalog - Current quizzes.
 * @param quizId - Answered quiz id.
 * @param value - Stored answer.
 *
 * @returns Clean answer, or null when unusable.
 */
const sanitizeAnswer = (catalog: QuizCatalog<QuizMeta>, quizId: string, value: unknown): Answer | null => {
  const choiceIds: ReadonlySet<string> | undefined = catalog.choiceIds.get(quizId);
  if (choiceIds === undefined || !isRecord(value)) return null;
  const { selected, submitted } = value;
  if (!Array.isArray(selected) || typeof submitted !== "boolean") return null;
  const kept: string[] = selected.filter((id): id is string => typeof id === "string" && choiceIds.has(id));
  if (kept.length === 0 || (submitted && kept.length !== selected.length)) return null;
  return { selected: kept, submitted };
};

/**
 * @private
 * @desc Restores the stored answers of the quizzes still in the run.
 *
 * @param catalog - Current quizzes.
 * @param raw - Stored answers.
 * @param allowed - Quiz ids in the run.
 *
 * @returns Clean answers by quiz id.
 */
const sanitizeAnswers = (
  catalog: QuizCatalog<QuizMeta>,
  raw: unknown,
  allowed: readonly string[]
): Record<string, Answer> => {
  if (!isRecord(raw)) return {};
  const answers: Record<string, Answer> = {};
  for (const [quizId, value] of Object.entries(raw)) {
    if (!allowed.includes(quizId)) continue;
    const answer: Answer | null = sanitizeAnswer(catalog, quizId, value);
    if (answer !== null) answers[quizId] = answer;
  }
  return answers;
};

/**
 * @private
 * @desc Parses JSON without throwing.
 *
 * @param raw - Stored text.
 *
 * @returns Parsed value, or null when missing or invalid.
 */
const parseJson = (raw: string | null): unknown => {
  if (raw === null) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

/**
 * @private
 * @desc Restores one stored history entry.
 *
 * @param value - Parsed entry.
 *
 * @returns The attempt, or null when malformed.
 */
const parseAttempt = (value: unknown): Attempt | null => {
  if (!isRecord(value)) return null;
  const { runId, kind, finishedAt, score, total, missed } = value;
  const missedIds: string[] | null = stringList(missed);
  if (typeof runId !== "string" || !isRunKind(kind) || typeof finishedAt !== "string") return null;
  if (typeof score !== "number" || typeof total !== "number" || missedIds === null) return null;
  if (!isValidScore(score, total)) return null;
  return { runId, kind, finishedAt, score, total, missed: missedIds };
};

/**
 * @export
 * @desc Returns the current time as an ISO string.
 *
 * @returns ISO timestamp.
 */
export const finishedNow = (): string => new Date().toISOString();

/**
 * @export
 * @desc Creates a fresh, unanswered run from a plan.
 *
 * @param catalog - Quiz pool.
 * @param plan - Run to build.
 *
 * @returns New run data.
 */
export const createRun = (catalog: QuizCatalog<QuizMeta>, plan: RunPlan): RunData => {
  const seed: number = randomSeed();
  let order: string[] = fullRunOrder(catalog, seed);
  if (plan.ids !== undefined) order = plan.ordered === true ? [...plan.ids] : shuffledOrder(plan.ids, seed);
  return { id: newRunId(), kind: plan.kind, seed, answers: {}, order };
};

/**
 * @export
 * @desc Restores a stored run, reconciled with the current catalog.
 *
 * @param catalog - Current quizzes.
 * @param raw - Stored JSON.
 *
 * @returns Run data, or null when missing, malformed or empty.
 */
export const parseRun = (catalog: QuizCatalog<QuizMeta>, raw: string | null): RunData | null => {
  const parsed: unknown = parseJson(raw);
  if (!isRecord(parsed)) return null;
  const { seed, answers, order, id, kind } = parsed;
  const storedOrder: string[] | null = stringList(order);
  if (typeof id !== "string" || !isRunKind(kind) || storedOrder === null) return null;
  if (typeof seed !== "number" || !Number.isInteger(seed)) return null;
  const runOrder: string[] = reconcileOrder(catalog, storedOrder);
  if (runOrder.length === 0) return null;
  return { id, kind, seed, answers: sanitizeAnswers(catalog, answers, runOrder), order: runOrder };
};

/**
 * @export
 * @desc Restores the stored attempt history, skipping malformed entries.
 *
 * @param raw - Stored JSON.
 *
 * @returns Valid attempts.
 */
export const parseHistory = (raw: string | null): Attempt[] => {
  const parsed: unknown = parseJson(raw);
  if (!Array.isArray(parsed)) return [];
  return parsed.map(parseAttempt).filter((attempt): attempt is Attempt => attempt !== null);
};

/**
 * @export
 * @desc Returns a copy of a record without one key.
 *
 * @template T - Value type.
 *
 * @param record - Source record.
 * @param key - Key to drop.
 *
 * @returns New record.
 */
export const withoutKey = <T>(record: Readonly<Record<string, T>>, key: string): Record<string, T> =>
  Object.fromEntries(Object.entries(record).filter(([entryKey]) => entryKey !== key));

/**
 * @export
 * @desc Merges the quiz ids a quick run should ask first, without duplicates.
 *
 * @param wrongIds - Missed in the main run.
 * @param latestMissed - Missed in the latest attempt.
 *
 * @returns Priority ids.
 */
export const quickPriority = (wrongIds: readonly string[], latestMissed: readonly string[]): string[] => [
  ...new Set([...wrongIds, ...latestMissed])
];

/**
 * @export
 * @desc Picks the quiz ids of a quick run, priority ids first, then the rest.
 *
 * @param catalog - Quiz pool.
 * @param priority - Ids to ask first.
 * @param seed - Run seed.
 * @param size - Maximum question count.
 *
 * @returns Quick run order.
 */
export const quickRunIds = (
  catalog: QuizCatalog<QuizMeta>,
  priority: readonly string[],
  seed: number,
  size: number
): string[] => {
  const rest: string[] = catalog.order.filter((id) => !priority.includes(id));
  const ranked: string[] = [
    ...seededShuffle(priority, seed, "quick-priority"),
    ...seededShuffle(rest, seed, "quick-rest")
  ];
  return ranked.slice(0, size);
};
