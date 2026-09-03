/**
 * MER-1294 — UAT | Customer POV - II
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1294
 */
export const MER1294 = {
  ticket: 'MER-1294',
  summary: "UAT | Customer POV - II",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1294'] };
  },
};

export default MER1294;
