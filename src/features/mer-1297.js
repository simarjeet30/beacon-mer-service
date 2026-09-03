/**
 * MER-1297 — Previously selected date range displayed on Account Summary screen after discarding changes(IST)
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1297
 */
export const MER1297 = {
  ticket: 'MER-1297',
  summary: "Previously selected date range displayed on Account Summary screen after discarding changes(IST)",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1297'] };
  },
};

export default MER1297;
