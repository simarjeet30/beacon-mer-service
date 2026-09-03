/**
 * MER-1383 — Verify default Alignment in Customer POV Screen.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1383
 */
export const MER1383 = {
  ticket: 'MER-1383',
  summary: "Verify default Alignment in Customer POV Screen.",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1383'] };
  },
};

export default MER1383;
