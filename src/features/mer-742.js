/**
 * MER-742 — High Level Requirements
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-742
 */
export const MER742 = {
  ticket: 'MER-742',
  summary: "High Level Requirements",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-742'] };
  },
};

export default MER742;
