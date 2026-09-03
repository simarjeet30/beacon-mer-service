/**
 * MER-751 — High Level Requirements
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-751
 */
export const MER751 = {
  ticket: 'MER-751',
  summary: "High Level Requirements",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-751'] };
  },
};

export default MER751;
