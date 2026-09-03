/**
 * MER-819 — Deployment (Dev)-Unable to search by Contract Structure Template & Contract Offered in the Account Summary.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-819
 */
export const MER819 = {
  ticket: 'MER-819',
  summary: "Deployment (Dev)-Unable to search by Contract Structure Template & Contract Offered in the Account Summary.",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-819'] };
  },
};

export default MER819;
