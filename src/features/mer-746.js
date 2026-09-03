/**
 * MER-746 — High Level Requirements
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-746
 */
export const MER746 = {
  ticket: 'MER-746',
  summary: "High Level Requirements",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-746'] };
  },
};

export default MER746;
