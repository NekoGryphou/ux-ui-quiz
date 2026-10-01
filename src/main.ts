import "./styles/index.scss";
import { quizzes } from "./data/quizzes";
import { renderHome, renderQuizView, renderShowcase } from "./ui";

type AppState = {
  selections: Map<number, "A" | "B" | "C" | "D">;
  collapsedAnswers: Set<number>;
};

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App container not found.");
}

const state: AppState = {
  selections: new Map(),
  collapsedAnswers: new Set()
};

const parseHash = (): { type: "home" } | { type: "components" } | { type: "quiz"; id: number } => {
  const hash = window.location.hash.replace(/^#/, "");

  if (!hash || hash === "/") {
    return { type: "home" };
  }

  if (hash === "/components") {
    return { type: "components" };
  }

  const match = hash.match(/^\/quiz\/(\d+)$/);
  if (!match) {
    return { type: "home" };
  }

  return { type: "quiz", id: Number(match[1]) };
};

const render = (): void => {
  const route = parseHash();

  if (route.type === "home") {
    app.innerHTML = renderHome(state.selections.size, quizzes.length);
    return;
  }

  if (route.type === "components") {
    app.innerHTML = renderShowcase();
    return;
  }

  const quiz = quizzes.find((entry) => entry.id === route.id);
  if (!quiz) {
    window.location.hash = "#/";
    return;
  }

  app.innerHTML = renderQuizView(
    quiz,
    state.selections.get(quiz.id),
    state.collapsedAnswers.has(quiz.id),
    quizzes.length
  );
};

window.addEventListener("hashchange", render);

app.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const toggleEl = target.closest<HTMLElement>("[data-action='toggle-answer-panel']");

  if (toggleEl) {
    const quizId = Number(toggleEl.dataset.quizId);

    if (!quizId) {
      return;
    }

    if (state.collapsedAnswers.has(quizId)) {
      state.collapsedAnswers.delete(quizId);
    } else {
      state.collapsedAnswers.add(quizId);
    }

    render();
    return;
  }

  const actionEl = target.closest<HTMLElement>("[data-action='answer']");

  if (!actionEl) {
    return;
  }

  const quizId = Number(actionEl.dataset.quizId);
  const optionId = actionEl.dataset.optionId as "A" | "B" | "C" | "D" | undefined;

  if (!quizId || !optionId) {
    return;
  }

  if (state.selections.has(quizId)) {
    return;
  }

  state.selections.set(quizId, optionId);
  state.collapsedAnswers.delete(quizId);
  render();
});

app.addEventListener("keydown", (event) => {
  const target = event.target as HTMLElement;
  const actionEl = target.closest<HTMLElement>("[data-action='answer']");

  if (!actionEl) {
    return;
  }

  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  event.preventDefault();

  const quizId = Number(actionEl.dataset.quizId);
  const optionId = actionEl.dataset.optionId as "A" | "B" | "C" | "D" | undefined;

  if (!quizId || !optionId) {
    return;
  }

  if (state.selections.has(quizId)) {
    return;
  }

  state.selections.set(quizId, optionId);
  state.collapsedAnswers.delete(quizId);
  render();
});

render();
