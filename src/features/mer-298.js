/**
 * MER-298 — getWACContractTemplateDropdown
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-298
 */
export const MER298 = {
  ticket: 'MER-298',
  summary: "getWACContractTemplateDropdown",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-298'] };
  },
};

export default MER298;
