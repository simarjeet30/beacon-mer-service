/**
 * MER-781 — Deployment (Dev)- Filtering by Product Name in Customer POV
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-781
 */
export const MER781 = {
  ticket: 'MER-781',
  summary: "Deployment (Dev)- Filtering by Product Name in Customer POV",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-781'] };
  },
};

export default MER781;
