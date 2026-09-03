/**
 * MER-297 — API Integration-Part 1
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-297
 */
export const MER297 = {
  ticket: 'MER-297',
  summary: "API Integration-Part 1",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-297'] };
  },
};

export default MER297;
