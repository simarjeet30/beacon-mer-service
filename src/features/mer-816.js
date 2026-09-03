/**
 * MER-816 — UI Build-Unable to search by Contract Structure Template & Contract Offered in the Account Summary.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-816
 */
export const MER816 = {
  ticket: 'MER-816',
  summary: "UI Build-Unable to search by Contract Structure Template & Contract Offered in the Account Summary.",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-816'] };
  },
};

export default MER816;
