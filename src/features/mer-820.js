/**
 * MER-820 — UI Build- what is on contract comparison should cascade over to Account Summary.  Should only see the ones selected and not all types (VICs)
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-820
 */
export const MER820 = {
  ticket: 'MER-820',
  summary: "UI Build- what is on contract comparison should cascade over to Account Summary.  Should only see the ones selected and not all types (VICs)",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-820'] };
  },
};

export default MER820;
