/**
 * MER-420 — Product grid not readable
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-420
 */
export const MER420 = {
  ticket: 'MER-420',
  summary: "Product grid not readable",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-420'] };
  },
};

export default MER420;
