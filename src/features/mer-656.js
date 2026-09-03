/**
 * MER-656 — User Stories / Technical Stories -  contract comparison should cascade over to Account Summary
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-656
 */
export const MER656 = {
  ticket: 'MER-656',
  summary: "User Stories / Technical Stories -  contract comparison should cascade over to Account Summary",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-656'] };
  },
};

export default MER656;
