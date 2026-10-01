import type { Quiz, QuizOption } from "./types";
import { escapeHtml } from "./quiz/render/common";
import { renderVisual } from "./quiz/render/visual";
import { renderShowcase } from "./showcase";

// Debug fallback while the bottom answer drawer navigation is being validated.
const SHOW_RAIL_NAV_DEBUG = true;

const renderOption = (
  quiz: Quiz,
  option: QuizOption,
  selected: QuizOption["id"] | undefined,
  revealed: boolean
): string => {
  const isSelected = selected === option.id;
  const isCorrect = revealed && quiz.correctAnswer === option.id;
  const isIncorrect = revealed && isSelected && !isCorrect;
  const isDimmed = revealed && !isSelected && !isCorrect;

  return `
    <article
      class="choice-card ${revealed ? "choice-card--locked" : ""} ${isSelected ? "choice-card--selected" : ""} ${isCorrect ? "choice-card--correct" : ""} ${isIncorrect ? "choice-card--incorrect" : ""} ${isDimmed ? "choice-card--dimmed" : ""}"
      role="button"
      tabindex="0"
      data-action="answer"
      data-quiz-id="${quiz.id}"
      data-option-id="${option.id}"
      aria-pressed="${isSelected}"
      aria-label="Option ${option.id}. ${escapeHtml(option.decision)}"
    >
      <div class="choice-card__header">
        <span class="option-letter">${option.id}</span>
      </div>
      <p class="choice-card__copy">${escapeHtml(option.decision)}</p>
    </article>
  `;
};

const renderQuizNav = (
  previousQuiz: number | undefined,
  nextQuiz: number | undefined,
  isEmbedded = false
): string => {
  const actionCount = Number(Boolean(previousQuiz)) + 1;
  const actions = [
    previousQuiz
      ? `<a class="hero-btn hero-btn--secondary" href="#/quiz/${previousQuiz}">Previous</a>`
      : "",
    nextQuiz
      ? `<a class="hero-btn hero-btn--primary" href="#/quiz/${nextQuiz}">Next quiz</a>`
      : `<a class="hero-btn hero-btn--primary" href="#/">Back to index</a>`
  ]
    .filter(Boolean)
    .join("");

  return `
  <nav class="quiz-nav ${isEmbedded ? "quiz-nav--embedded" : "quiz-nav--rail"} quiz-nav--count-${actionCount}">
    ${actions}
  </nav>
`;
};

export const renderHome = (completedCount: number, quizCount: number): string => `
  <main class="shell shell--home">
    <section class="hero">
      <div class="hero__copy">
        <p class="kicker">UI/UX Quiz Lab</p>
        <h1>Inspect the interface. Name the UX/UI issue before it ships.</h1>
        <p class="hero__lede">
          ${quizCount} realistic interface critiques covering accessibility, hierarchy, feedback, consistency, dark patterns, and more.
        </p>
        <div class="hero__panel hero__panel--inline">
          <div class="stat-card">
            <span>Questions</span>
            <strong>${quizCount}</strong>
          </div>
          <div class="stat-card">
            <span>Score</span>
            <strong>${completedCount}</strong>
          </div>
        </div>
      </div>
      <div class="hero__actions hero__actions--side">
        <a class="hero-btn hero-btn--primary" href="#/quiz/1">Start</a>
        <a class="hero-btn hero-btn--secondary" href="#/components">Components</a>
      </div>
    </section>
  </main>
`;

export { renderShowcase };

export const renderQuizView = (
  quiz: Quiz,
  selected: QuizOption["id"] | undefined,
  isAnswerCollapsed: boolean,
  total: number
): string => {
  const revealed = Boolean(selected);
  const previousQuiz = quiz.id > 1 ? quiz.id - 1 : undefined;
  const nextQuiz = quiz.id < total ? quiz.id + 1 : undefined;

  return `
    <main class="shell shell--quiz">
      <aside class="quiz-sidebar">
        <div class="quiz-sidebar__panel">
          <p class="kicker">Quiz ${quiz.id} of ${total}</p>
          <h1>${escapeHtml(quiz.title)}</h1>
          <p class="quiz-theme">${escapeHtml(quiz.theme)} · ${escapeHtml(quiz.uxPrinciple)}</p>
          <p class="scenario">${escapeHtml(quiz.scenario)}</p>
        </div>
        ${SHOW_RAIL_NAV_DEBUG ? renderQuizNav(previousQuiz, nextQuiz) : ""}
      </aside>

      <section class="quiz-main ${revealed && isAnswerCollapsed ? "quiz-main--answer-collapsed" : ""}">
        <div class="quiz-stage">
          <section class="question-panel">
            <div class="question-panel__copy">
              <p class="kicker">Simulated Interface</p>
              <p class="question-panel__prompt">${escapeHtml(quiz.prompt)}</p>
            </div>
            <div class="question-panel__visual">
              ${renderVisual(quiz.visual, quiz.visual.accent)}
            </div>
          </section>
          <div class="quiz-canvas">
            <div class="choice-grid choice-grid--count-${quiz.options.length}">
              ${quiz.options
                .map((option) => renderOption(quiz, option, selected, revealed))
                .join("")}
            </div>
          </div>
        </div>
        ${
          revealed
            ? `<div class="answer-panel answer-panel--result ${isAnswerCollapsed ? "answer-panel--collapsed" : ""}">
                  <div class="answer-panel__topbar">
                    <div class="answer-panel__summary">
                      <p class="answer-label">Correct answer</p>
                      <strong>${quiz.correctAnswer}. ${escapeHtml(
                        quiz.options.find((option) => option.id === quiz.correctAnswer)?.decision ?? ""
                      )}</strong>
                    </div>
                    <button
                      class="answer-panel__toggle"
                      type="button"
                      data-action="toggle-answer-panel"
                      data-quiz-id="${quiz.id}"
                      aria-expanded="${isAnswerCollapsed ? "false" : "true"}"
                      aria-label="${isAnswerCollapsed ? "Expand answer panel" : "Collapse answer panel"}"
                    >
                      <span class="answer-panel__toggle-icon" aria-hidden="true">${isAnswerCollapsed ? "↑" : "↓"}</span>
                    </button>
                  </div>
                  <div class="answer-panel__body">
                    <p class="answer-panel__principle">${escapeHtml(quiz.uxPrinciple)}</p>
                    <ul>
                      ${quiz.explanation
                        .map((bullet) => `<li>${escapeHtml(bullet)}</li>`)
                        .join("")}
                    </ul>
                  </div>
              </div>
              <div class="answer-nav-panel">
                ${renderQuizNav(previousQuiz, nextQuiz, true)}
              </div>`
            : ""
        }
      </section>
    </main>
  `;
};
