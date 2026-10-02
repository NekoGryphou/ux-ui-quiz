import { APP_NAME } from "../const/app.const";
import type { Route } from "../types/router.types";

export const pageTitle = (route: Route, total: number): string => {
  switch (route.name) {
    case "home":
      return APP_NAME;
    case "quiz":
      return `${route.run === "main" ? "Question" : "Practice question"} ${String(route.index + 1)} of ${String(total)} · ${APP_NAME}`;
    case "results":
      return `${route.run === "main" ? "Results" : "Practice results"} · ${APP_NAME}`;
    case "review":
      return `Review ${String(route.index + 1)} of ${String(total)} · ${APP_NAME}`;
    case "kit":
      return `Mock kit · ${APP_NAME}`;
  }
};
