/**
 * MER-1332 — UI Changes - PPD Metrics Display
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1332
 */
export const MER1332 = {
  ticket: 'MER-1332',
  summary: "UI Changes - PPD Metrics Display",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1332'] };
  },
};

export default MER1332;
