/**
 * MER-821 — API Build- what is on contract comparison should cascade over to Account Summary.  Should only see the ones selected and not all types (VICs)
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-821
 */
export const MER821 = {
  ticket: 'MER-821',
  summary: "API Build- what is on contract comparison should cascade over to Account Summary.  Should only see the ones selected and not all types (VICs)",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-821'] };
  },
};

export default MER821;
