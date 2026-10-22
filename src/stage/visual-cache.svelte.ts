import { SvelteMap } from "svelte/reactivity";
import type { Quiz, QuizVisual } from "../engine/types/quiz.types";
import type { VisualState } from "./types/visual-cache.types";
import { whenIdle } from "./utils/idle.utils";

/**
 * @private
 * @desc Reactive cache of lazily loaded question previews.
 */
class VisualCache {
  /**
   * @private
   * @desc Loading state by quiz id.
   */
  private readonly states: SvelteMap<string, VisualState> = new SvelteMap();
  /**
   * @private
   * @desc In-flight or settled load by quiz id.
   */
  private readonly pending: Map<string, Promise<void>> = new Map();

  /**
   * @public
   * @desc Loading state of a question preview.
   *
   * @param quiz - Question.
   *
   * @returns Its state, loading if never requested.
   */
  public stateOf(quiz: Quiz): VisualState {
    return this.states.get(quiz.id) ?? { status: "loading" };
  }

  /**
   * @public
   * @desc Loads a question preview once.
   * Repeated calls share the same request; a failure allows a later retry.
   *
   * @param quiz - Question.
   *
   * @returns Promise settled when loading ends.
   */
  public load(quiz: Quiz): Promise<void> {
    const pending: Promise<void> | undefined = this.pending.get(quiz.id);
    if (pending !== undefined) return pending;
    const request: Promise<void> = quiz
      .loadVisual()
      .then((visual: QuizVisual): void => {
        this.states.set(quiz.id, { status: "ready", visual });
      })
      .catch((): void => {
        this.pending.delete(quiz.id);
        this.states.set(quiz.id, { status: "failed" });
      });
    this.pending.set(quiz.id, request);
    return request;
  }

  /**
   * @public
   * @desc Resets a question preview to loading and loads it again.
   *
   * @param quiz - Question.
   */
  public retry(quiz: Quiz): void {
    this.states.delete(quiz.id);
    void this.load(quiz);
  }

  /**
   * @public
   * @desc Loads question previews during browser idle time.
   *
   * @param quizzes - Questions to preload.
   *
   * @returns Cancel function.
   */
  public preloadWhenIdle(quizzes: readonly Quiz[]): () => void {
    return whenIdle((): void => {
      quizzes.forEach((quiz: Quiz): void => {
        void this.load(quiz);
      });
    });
  }
}

/**
 * @export
 * @desc Shared question preview cache.
 */
export const visualCache: VisualCache = new VisualCache();
