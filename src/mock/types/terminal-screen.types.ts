export interface TerminalLine {
  text: string;
  bright?: boolean;
}

export interface TerminalScreenProps {
  lines: TerminalLine[];
  prompt?: string;
  model?: string;
  width?: number;
}
