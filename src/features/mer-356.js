/**
 * MER-356 — Search Functionality missing in the Landing screen
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-356
 */
export const MER356 = {
  ticket: 'MER-356',
  summary: "Search Functionality missing in the Landing screen",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-356'] };
  },
};

export default MER356;
