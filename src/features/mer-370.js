/**
 * MER-370 — Add button not enabled
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-370
 */
export const MER370 = {
  ticket: 'MER-370',
  summary: "Add button not enabled",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-370'] };
  },
};

export default MER370;
