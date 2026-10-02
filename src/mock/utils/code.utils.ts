import { HTML_TOKEN_PATTERN } from "../const/code.const";
import type { CodeToken, CodeTokenKind } from "../types/code.types";

const kindOf = (match: RegExpMatchArray): CodeTokenKind => {
  if (match[1] !== undefined) return "tag";
  if (match[2] !== undefined) return "attr";
  if (match[3] !== undefined) return "value";
  if (match[4] !== undefined) return "punct";
  return "text";
};

export const tokenizeHtml = (line: string): CodeToken[] =>
  [...line.matchAll(HTML_TOKEN_PATTERN)].map((match): CodeToken => ({ kind: kindOf(match), text: match[0] }));
