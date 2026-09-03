/**
 * MER-329 — Contract Structure Layout
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-329
 */
export const MER329 = {
  ticket: 'MER-329',
  summary: "Contract Structure Layout",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-329'] };
  },
};

export default MER329;
