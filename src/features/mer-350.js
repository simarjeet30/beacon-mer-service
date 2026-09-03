/**
 * MER-350 — Filter modal doesn't fit the screen
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-350
 */
export const MER350 = {
  ticket: 'MER-350',
  summary: "Filter modal doesn't fit the screen",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-350'] };
  },
};

export default MER350;
