/**
 * MER-811 — Deployment (Dev)-Need Product Group & Specialty in Export
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-811
 */
export const MER811 = {
  ticket: 'MER-811',
  summary: "Deployment (Dev)-Need Product Group & Specialty in Export",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-811'] };
  },
};

export default MER811;
