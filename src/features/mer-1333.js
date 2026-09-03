/**
 * MER-1333 — export improvements
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1333
 */
export const MER1333 = {
  ticket: 'MER-1333',
  summary: "export improvements",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1333'] };
  },
};

export default MER1333;
