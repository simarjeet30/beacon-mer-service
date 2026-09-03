/**
 * MER-1336 — Identify deliverables
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1336
 */
export const MER1336 = {
  ticket: 'MER-1336',
  summary: "Identify deliverables",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1336'] };
  },
};

export default MER1336;
