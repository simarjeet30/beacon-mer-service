/**
 * MER-640 — High Level Requirements - Contract Period should not include day
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-640
 */
export const MER640 = {
  ticket: 'MER-640',
  summary: "High Level Requirements - Contract Period should not include day",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-640'] };
  },
};

export default MER640;
