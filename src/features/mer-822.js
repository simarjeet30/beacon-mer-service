/**
 * MER-822 — Deployment (Dev)- what is on contract comparison should cascade over to Account Summary.  Should only see the ones selected and not all types (VICs)
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-822
 */
export const MER822 = {
  ticket: 'MER-822',
  summary: "Deployment (Dev)- what is on contract comparison should cascade over to Account Summary.  Should only see the ones selected and not all types (VICs)",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-822'] };
  },
};

export default MER822;
