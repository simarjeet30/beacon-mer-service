/**
 * MER-818 — Unit Testing-Unable to search by Contract Structure Template & Contract Offered in the Account Summary.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-818
 */
export const MER818 = {
  ticket: 'MER-818',
  summary: "Unit Testing-Unable to search by Contract Structure Template & Contract Offered in the Account Summary.",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-818'] };
  },
};

export default MER818;
