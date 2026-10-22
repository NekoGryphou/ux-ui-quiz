import { EMPTY_RUN } from "./const/run.const";
import type { QuizCatalog } from "./types/catalog.types";
import type { Answer, Choice, Quiz } from "./types/quiz.types";
import type { RunData, RunKind } from "./types/run.types";
import { allowsSeveral, optionsOf } from "./utils/quiz.utils";
import { isCorrect } from "./utils/scoring.utils";
import { withoutKey } from "./utils/session.utils";
import { seededShuffle } from "./utils/shuffle.utils";

/**
 * @export
 * @desc Reactive state of one quiz run: its questions, answers and score.
 */
export class Run {
  /**
   * @private
   * @desc Current run data.
   */
  private data: RunData = $state.raw(EMPTY_RUN);

  /**
   * @public
   * @desc Whether any question has an answer.
   */
  public readonly hasStarted: boolean = $derived(Object.keys(this.data.answers).length > 0);

  /**
   * @public
   * @desc Run quizzes in asking order, skipping ids missing from the catalog.
   */
  public readonly order: readonly Quiz[] = $derived(
    this.data.order.map((id) => this.catalog.byId.get(id)).filter((quiz): quiz is Quiz => quiz !== undefined)
  );

  /**
   * @public
   * @desc Question count.
   */
  public readonly total: number = $derived(this.order.length);

  /**
   * @public
   * @desc Submitted answer count.
   */
  public readonly answeredCount: number = $derived(
    this.order.filter((quiz) => this.data.answers[quiz.id]?.submitted === true).length
  );

  /**
   * @public
   * @desc Correct answer count.
   */
  public readonly score: number = $derived(
    this.order.filter((quiz) => isCorrect(quiz, this.data.answers[quiz.id])).length
  );

  /**
   * @public
   * @desc Whether every question is submitted.
   */
  public readonly isComplete: boolean = $derived(this.total > 0 && this.answeredCount === this.total);

  /**
   * @public
   * @desc Whether the run has at least one answer and is not finished.
   */
  public readonly inProgress: boolean = $derived(this.hasStarted && !this.isComplete);

  /**
   * @public
   * @desc Ids of submitted, wrongly answered quizzes.
   */
  public readonly wrongIds: readonly string[] = $derived(
    this.order
      .filter((quiz) => this.data.answers[quiz.id]?.submitted === true && !isCorrect(quiz, this.data.answers[quiz.id]))
      .map((quiz) => quiz.id)
  );

  /**
   * @public
   * @desc Index of the first unsubmitted question, or the last one when complete.
   */
  public readonly resumeIndex: number = $derived.by((): number => {
    const index: number = this.order.findIndex((quiz) => this.data.answers[quiz.id]?.submitted !== true);
    return index === -1 ? this.total - 1 : index;
  });

  /**
   * @private
   * @desc Quiz lookup.
   */
  private readonly catalog: QuizCatalog;

  /**
   * @private
   * @desc Called after each answer change.
   */
  private readonly onchange: () => void;

  /**
   * @public
   * @desc Creates a run from existing data.
   *
   * @param catalog - Quiz lookup.
   * @param data - Initial run data.
   * @param onchange - Called after each answer change.
   */
  public constructor(catalog: QuizCatalog, data: RunData, onchange: () => void) {
    this.catalog = catalog;
    this.onchange = onchange;
    this.load(data);
  }

  /**
   * @public
   * @desc Run id.
   *
   * @returns The id.
   */
  public get id(): string {
    return this.data.id;
  }

  /**
   * @public
   * @desc Run kind.
   *
   * @returns The kind.
   */
  public get kind(): RunKind {
    return this.data.kind;
  }

  /**
   * @public
   * @desc Answers by quiz id.
   *
   * @returns The answers.
   */
  public get answers(): Readonly<Record<string, Answer>> {
    return this.data.answers;
  }

  /**
   * @public
   * @desc Quiz ids in asking order, as stored.
   *
   * @returns The ids.
   */
  public get orderIds(): readonly string[] {
    return this.data.order;
  }

  /**
   * @public
   * @desc Replaces the run data without calling {@link Run.onchange}.
   *
   * @param data - New run data.
   */
  public load(data: RunData): void {
    this.data = data;
  }

  /**
   * @public
   * @desc Returns a detached copy of the run data for persistence.
   *
   * @returns Copied run data.
   */
  public snapshot(): RunData {
    return { ...this.data, answers: { ...this.data.answers }, order: [...this.data.order] };
  }

  /**
   * @public
   * @desc Returns the answer to a quiz, empty when none.
   *
   * @param quiz - Quiz to read.
   *
   * @returns The answer.
   */
  public answerFor(quiz: Quiz): Answer {
    return this.data.answers[quiz.id] ?? { selected: [], submitted: false };
  }

  /**
   * @public
   * @desc Returns a quiz's options in this run's stable shuffled order.
   *
   * @param quiz - Quiz to read.
   *
   * @returns Shuffled options.
   */
  public optionsFor(quiz: Quiz): Choice[] {
    return seededShuffle(optionsOf(quiz), this.data.seed, quiz.id);
  }

  /**
   * @public
   * @desc Selects or deselects an option; single-answer quizzes replace the selection.
   * Ignored once the answer is submitted.
   *
   * @param quiz - Answered quiz.
   * @param choiceId - Option toggled.
   */
  public toggle(quiz: Quiz, choiceId: string): void {
    const answer: Answer = this.answerFor(quiz);
    if (answer.submitted) return;

    const selected: string[] = !allowsSeveral(quiz)
      ? [choiceId]
      : answer.selected.includes(choiceId)
        ? answer.selected.filter((id) => id !== choiceId)
        : [...answer.selected, choiceId];

    this.setAnswers(
      selected.length === 0
        ? withoutKey(this.data.answers, quiz.id)
        : { ...this.data.answers, [quiz.id]: { selected, submitted: false } }
    );
  }

  /**
   * @public
   * @desc Locks in the answer to a quiz.
   * Ignored when already submitted or nothing is selected.
   *
   * @param quiz - Answered quiz.
   */
  public submit(quiz: Quiz): void {
    const answer: Answer = this.answerFor(quiz);
    if (answer.submitted || answer.selected.length === 0) return;
    this.setAnswers({ ...this.data.answers, [quiz.id]: { ...answer, submitted: true } });
  }

  /**
   * @private
   * @desc Replaces the answers and notifies {@link Run.onchange}.
   *
   * @param answers - New answers.
   */
  private setAnswers(answers: Record<string, Answer>): void {
    this.data = { ...this.data, answers };
    this.onchange();
  }
}
