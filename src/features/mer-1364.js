/**
 * MER-1364 — UI - Custom discounts
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1364
 */
export const MER1364 = {
  ticket: 'MER-1364',
  summary: "UI - Custom discounts",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1364'] };
  },
};

export default MER1364;
