/**
 * MER-1363 — API Changes - Discount Services
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1363
 */
export const MER1363 = {
  ticket: 'MER-1363',
  summary: "API Changes - Discount Services",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1363'] };
  },
};

export default MER1363;
