/**
 * MER-1340 — UI Changes - Product Group Sequencing
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1340
 */
export const MER1340 = {
  ticket: 'MER-1340',
  summary: "UI Changes - Product Group Sequencing",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1340'] };
  },
};

export default MER1340;
