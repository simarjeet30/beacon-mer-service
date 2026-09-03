/**
 * MER-1376 — usability enhancement
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1376
 */
export const MER1376 = {
  ticket: 'MER-1376',
  summary: "usability enhancement",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1376'] };
  },
};

export default MER1376;
