/**
 * MER-737 — High Level Requirements
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-737
 */
export const MER737 = {
  ticket: 'MER-737',
  summary: "High Level Requirements",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-737'] };
  },
};

export default MER737;
