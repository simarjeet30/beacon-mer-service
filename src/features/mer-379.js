/**
 * MER-379 — Add product details doesn't gets cleared
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-379
 */
export const MER379 = {
  ticket: 'MER-379',
  summary: "Add product details doesn't gets cleared",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-379'] };
  },
};

export default MER379;
