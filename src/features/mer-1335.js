/**
 * MER-1335 — Account summary redesign UI Changes
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1335
 */
export const MER1335 = {
  ticket: 'MER-1335',
  summary: "Account summary redesign UI Changes",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1335'] };
  },
};

export default MER1335;
