/**
 * MER-728 — High Level Requirements - When we change the end date in calender
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-728
 */
export const MER728 = {
  ticket: 'MER-728',
  summary: "High Level Requirements - When we change the end date in calender",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-728'] };
  },
};

export default MER728;
