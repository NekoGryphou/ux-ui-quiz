import type { Component } from "svelte";

export type QuizKind = "single" | "multiple" | "hotspot" | "compare";

export type CompareVariant = "a" | "b";

export type CompareLayout = "columns" | "stacked";

export interface QuizLink {
  label: string;
  url: string;
}

export interface Choice {
  id: string;
  text: string;
}

interface QuizBase {
  id: string;
  title: string;
  principle: string;
  scenario: string;
  prompt: string;
  correct: string[];
  explanation: string[];
  links?: QuizLink[];
}

export interface ChoiceQuizMeta extends QuizBase {
  kind: "single" | "multiple";
  choices: Choice[];
}

export interface HotspotQuizMeta extends QuizBase {
  kind: "hotspot";
  regions: Choice[];
}

export interface CompareQuizMeta extends QuizBase {
  kind: "compare";
  layout?: CompareLayout;
}

export type QuizMeta = ChoiceQuizMeta | HotspotQuizMeta | CompareQuizMeta;

export interface VisualProps {
  variant?: CompareVariant;
}

export type QuizVisual = Component<VisualProps>;

export type Quiz = QuizMeta & { visual: QuizVisual };

export interface QuizModule {
  default: QuizVisual;
  meta: QuizMeta;
}

export interface Answer {
  selected: string[];
  submitted: boolean;
}

export type ChoiceOutcome = "correct" | "wrong" | "missed" | "neutral";

export interface HotspotResults {
  correct: string[];
  wrong: string[];
  missed: string[];
}
