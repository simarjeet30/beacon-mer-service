/**
 * MER-377 — Add a meaningful message for Delete Criteria Pop up and update incorrect header name
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-377
 */
export const MER377 = {
  ticket: 'MER-377',
  summary: "Add a meaningful message for Delete Criteria Pop up and update incorrect header name",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-377'] };
  },
};

export default MER377;
