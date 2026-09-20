const PLACEHOLDER_PATTERNS: RegExp[] = [
  /\+1-XXX-XXX-XXXX/,
  /1XXXXXXXXXX/,
  /XXX/,
  /yourbusiness\.com/,
  /placeholder/,
  /TODO/i,
  /FIXME/i,
  /lorem\s?ipsum/i,
];

export function assertNoPlaceholders(value: string, label: string): void {
  if (process.env.NODE_ENV !== "production") return;
  for (const pattern of PLACEHOLDER_PATTERNS) {
    if (pattern.test(value)) {
      throw new Error(
        `Placeholder detected in ${label}: "${value}" matches pattern ${pattern.source}`,
      );
    }
  }
}
