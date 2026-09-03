/**
 * MER-369 — Cancel button and cross icon not working for delete pop up
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-369
 */
export const MER369 = {
  ticket: 'MER-369',
  summary: "Cancel button and cross icon not working for delete pop up",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-369'] };
  },
};

export default MER369;
