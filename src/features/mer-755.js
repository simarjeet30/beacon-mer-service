/**
 * MER-755 — High Level Requirements
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-755
 */
export const MER755 = {
  ticket: 'MER-755',
  summary: "High Level Requirements",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-755'] };
  },
};

export default MER755;
