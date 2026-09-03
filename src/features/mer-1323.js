/**
 * MER-1323 — UX - contract and alignment setup flow
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1323
 */
export const MER1323 = {
  ticket: 'MER-1323',
  summary: "UX - contract and alignment setup flow",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1323'] };
  },
};

export default MER1323;
