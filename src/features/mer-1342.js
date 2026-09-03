/**
 * MER-1342 — API Changes - CST Product Filtering
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1342
 */
export const MER1342 = {
  ticket: 'MER-1342',
  summary: "API Changes - CST Product Filtering",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1342'] };
  },
};

export default MER1342;
