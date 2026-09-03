/**
 * MER-304 — getWACChangeHistory
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-304
 */
export const MER304 = {
  ticket: 'MER-304',
  summary: "getWACChangeHistory",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-304'] };
  },
};

export default MER304;
