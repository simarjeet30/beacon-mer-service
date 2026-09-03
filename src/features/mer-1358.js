/**
 * MER-1358 — Business Logic – Alignment Potential MS% Update Rules and product discount calculations
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1358
 */
export const MER1358 = {
  ticket: 'MER-1358',
  summary: "Business Logic – Alignment Potential MS% Update Rules and product discount calculations",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1358'] };
  },
};

export default MER1358;
