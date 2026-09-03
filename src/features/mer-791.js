/**
 * MER-791 — Unit Testing- The display of the Account name box needs to be expanded to show the full typed value in the search box
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-791
 */
export const MER791 = {
  ticket: 'MER-791',
  summary: "Unit Testing- The display of the Account name box needs to be expanded to show the full typed value in the search box",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-791'] };
  },
};

export default MER791;
