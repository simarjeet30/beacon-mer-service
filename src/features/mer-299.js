/**
 * MER-299 — getWACContractTemplateDetails
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-299
 */
export const MER299 = {
  ticket: 'MER-299',
  summary: "getWACContractTemplateDetails",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-299'] };
  },
};

export default MER299;
