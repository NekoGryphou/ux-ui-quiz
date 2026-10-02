import { QUIZ_BY_ID } from "./const/session.const";
import type { Answer, Choice, Quiz } from "./types/quiz.types";
import type { RunData, RunKind } from "./types/run.types";
import { allowsSeveral, optionsOf } from "./utils/quiz.utils";
import { isCorrect } from "./utils/scoring.utils";
import { withoutKey } from "./utils/session.utils";
import { seededShuffle } from "./utils/shuffle.utils";

export class Run {
  id: string = $state("");
  kind: RunKind = $state("full");
  seed: number = $state(0);
  answers: Record<string, Answer> = $state({});
  orderIds: string[] = $state([]);

  order: Quiz[] = $derived(
    this.orderIds.map((id) => QUIZ_BY_ID.get(id)).filter((quiz): quiz is Quiz => quiz !== undefined)
  );
  total: number = $derived(this.order.length);
  answeredCount: number = $derived(this.order.filter((quiz) => this.answers[quiz.id]?.submitted === true).length);
  score: number = $derived(this.order.filter((quiz) => isCorrect(quiz, this.answers[quiz.id])).length);
  isComplete: boolean = $derived(this.total > 0 && this.answeredCount === this.total);
  hasStarted: boolean = $derived(Object.keys(this.answers).length > 0);
  missedIds: string[] = $derived(
    this.order.filter((quiz) => !isCorrect(quiz, this.answers[quiz.id])).map((quiz) => quiz.id)
  );

  resumeIndex: number = $derived.by((): number => {
    const index: number = this.order.findIndex((quiz) => this.answers[quiz.id]?.submitted !== true);
    return index === -1 ? this.total - 1 : index;
  });

  readonly #onchange: () => void;

  constructor(data: RunData, onchange: () => void) {
    this.#onchange = onchange;
    this.load(data);
  }

  load(data: RunData): void {
    this.id = data.id;
    this.kind = data.kind;
    this.seed = data.seed;
    this.answers = data.answers;
    this.orderIds = data.order;
  }

  snapshot(): RunData {
    return {
      id: this.id,
      kind: this.kind,
      seed: this.seed,
      answers: $state.snapshot(this.answers),
      order: $state.snapshot(this.orderIds)
    };
  }

  answerFor(quiz: Quiz): Answer {
    return this.answers[quiz.id] ?? { selected: [], submitted: false };
  }

  optionsFor(quiz: Quiz): Choice[] {
    return seededShuffle(optionsOf(quiz), this.seed, quiz.id);
  }

  toggle(quiz: Quiz, choiceId: string): void {
    const answer: Answer = this.answerFor(quiz);
    if (answer.submitted) return;

    const selected: string[] = !allowsSeveral(quiz)
      ? [choiceId]
      : answer.selected.includes(choiceId)
        ? answer.selected.filter((id) => id !== choiceId)
        : [...answer.selected, choiceId];

    this.answers =
      selected.length === 0
        ? withoutKey(this.answers, quiz.id)
        : { ...this.answers, [quiz.id]: { selected, submitted: false } };
    this.#onchange();
  }

  submit(quiz: Quiz): void {
    const answer: Answer = this.answerFor(quiz);
    if (answer.submitted || answer.selected.length === 0) return;
    this.answers = { ...this.answers, [quiz.id]: { ...answer, submitted: true } };
    this.#onchange();
  }
}
