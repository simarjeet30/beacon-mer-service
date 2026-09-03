/**
 * MER-27 — Revisit KTs
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-27
 */
export const MER27 = {
  ticket: 'MER-27',
  summary: "Revisit KTs",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-27'] };
  },
};

export default MER27;
