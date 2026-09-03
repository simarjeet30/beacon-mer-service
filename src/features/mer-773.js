/**
 * MER-773 — UI - Combination of multiple Performance measures under a criteria
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-773
 */
export const MER773 = {
  ticket: 'MER-773',
  summary: "UI - Combination of multiple Performance measures under a criteria",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-773'] };
  },
};

export default MER773;
