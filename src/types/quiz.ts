import type { OptionVisual, Theme } from "./visual";

export interface QuizOption {
  id: "A" | "B" | "C" | "D";
  decision: string;
}

export interface Quiz {
  id: number;
  title: string;
  scenario: string;
  prompt: string;
  visual: OptionVisual;
  correctAnswer: QuizOption["id"];
  explanation: string[];
  uxPrinciple: string;
  theme: Theme;
  options: QuizOption[];
}
