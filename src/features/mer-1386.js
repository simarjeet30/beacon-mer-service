/**
 * MER-1386 — Verify zero Discount in Customer POV Screen
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1386
 */
export const MER1386 = {
  ticket: 'MER-1386',
  summary: "Verify zero Discount in Customer POV Screen",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1386'] };
  },
};

export default MER1386;
