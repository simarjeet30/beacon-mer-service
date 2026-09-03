/**
 * MER-354 — WAC History doesn't display the correct user name
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-354
 */
export const MER354 = {
  ticket: 'MER-354',
  summary: "WAC History doesn't display the correct user name",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-354'] };
  },
};

export default MER354;
