/**
 * MER-383 — MergeAccounts
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-383
 */
export const MER383 = {
  ticket: 'MER-383',
  summary: "MergeAccounts",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-383'] };
  },
};

export default MER383;
