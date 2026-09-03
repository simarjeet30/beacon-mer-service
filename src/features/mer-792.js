/**
 * MER-792 — Deployment (Dev)- The display of the Account name box needs to be expanded to show the full typed value in the search box
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-792
 */
export const MER792 = {
  ticket: 'MER-792',
  summary: "Deployment (Dev)- The display of the Account name box needs to be expanded to show the full typed value in the search box",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-792'] };
  },
};

export default MER792;
