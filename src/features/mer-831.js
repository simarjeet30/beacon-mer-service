/**
 * MER-831 — Deployment (Dev)-Blanks observed in CST when criteria is deleted from a product group and another criteria is added
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-831
 */
export const MER831 = {
  ticket: 'MER-831',
  summary: "Deployment (Dev)-Blanks observed in CST when criteria is deleted from a product group and another criteria is added",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-831'] };
  },
};

export default MER831;
