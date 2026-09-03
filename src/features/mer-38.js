/**
 * MER-38 — Create table component for delta values
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-38
 */
export const MER38 = {
  ticket: 'MER-38',
  summary: "Create table component for delta values",
  type: "Sub-task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-38'] };
  },
};

export default MER38;
