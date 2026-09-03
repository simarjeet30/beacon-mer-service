/**
 * MER-301 — GetProduct
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-301
 */
export const MER301 = {
  ticket: 'MER-301',
  summary: "GetProduct",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-301'] };
  },
};

export default MER301;
