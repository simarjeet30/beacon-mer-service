/**
 * MER-817 — API Build-Unable to search by Contract Structure Template & Contract Offered in the Account Summary.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-817
 */
export const MER817 = {
  ticket: 'MER-817',
  summary: "API Build-Unable to search by Contract Structure Template & Contract Offered in the Account Summary.",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-817'] };
  },
};

export default MER817;
