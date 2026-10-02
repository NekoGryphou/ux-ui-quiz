export type RunTarget = "main" | "practice";

export interface Href {
  readonly home: string;
  readonly results: (run: RunTarget) => string;
  readonly quiz: (run: RunTarget, index: number) => string;
  readonly review: (index: number) => string;
}

export type Route =
  | { name: "home" }
  | { name: "quiz"; run: RunTarget; index: number }
  | { name: "results"; run: RunTarget }
  | { name: "review"; index: number }
  | { name: "kit" };
