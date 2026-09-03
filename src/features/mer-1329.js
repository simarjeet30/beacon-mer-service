/**
 * MER-1329 — Business logic for ppd and cst metrics calculations
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1329
 */
export const MER1329 = {
  ticket: 'MER-1329',
  summary: "Business logic for ppd and cst metrics calculations",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1329'] };
  },
};

export default MER1329;
