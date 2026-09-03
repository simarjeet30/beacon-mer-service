/**
 * MER-784 — Deployment (Dev)- Potential Selection dropdown boxes are to be expanded
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-784
 */
export const MER784 = {
  ticket: 'MER-784',
  summary: "Deployment (Dev)- Potential Selection dropdown boxes are to be expanded",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-784'] };
  },
};

export default MER784;
