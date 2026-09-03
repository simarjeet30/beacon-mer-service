/**
 * MER-1382 — Verify changing Alignment in Customer POV Screen.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1382
 */
export const MER1382 = {
  ticket: 'MER-1382',
  summary: "Verify changing Alignment in Customer POV Screen.",
  type: "Test Case",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1382'] };
  },
};

export default MER1382;
