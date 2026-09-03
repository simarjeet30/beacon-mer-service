/**
 * MER-368 — User unable to delete any Criteria
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-368
 */
export const MER368 = {
  ticket: 'MER-368',
  summary: "User unable to delete any Criteria",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-368'] };
  },
};

export default MER368;
