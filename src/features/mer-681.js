/**
 * MER-681 — High Level Requirements - Expand columns to view the product
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-681
 */
export const MER681 = {
  ticket: 'MER-681',
  summary: "High Level Requirements - Expand columns to view the product",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-681'] };
  },
};

export default MER681;
