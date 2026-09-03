/**
 * MER-1320 — Business Logic for market agggregation rules - view by market
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1320
 */
export const MER1320 = {
  ticket: 'MER-1320',
  summary: "Business Logic for market agggregation rules - view by market",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1320'] };
  },
};

export default MER1320;
