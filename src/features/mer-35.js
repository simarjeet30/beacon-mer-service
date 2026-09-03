/**
 * MER-35 — Addition of Product
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-35
 */
export const MER35 = {
  ticket: 'MER-35',
  summary: "Addition of Product",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-35'] };
  },
};

export default MER35;
