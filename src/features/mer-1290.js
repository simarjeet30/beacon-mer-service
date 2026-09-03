/**
 * MER-1290 — UAT | Discrepancy In contract period date
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1290
 */
export const MER1290 = {
  ticket: 'MER-1290',
  summary: "UAT | Discrepancy In contract period date",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1290'] };
  },
};

export default MER1290;
