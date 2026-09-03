/**
 * MER-790 — UI Build- The display of the Account name box needs to be expanded to show the full typed value in the search box
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-790
 */
export const MER790 = {
  ticket: 'MER-790',
  summary: "UI Build- The display of the Account name box needs to be expanded to show the full typed value in the search box",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-790'] };
  },
};

export default MER790;
