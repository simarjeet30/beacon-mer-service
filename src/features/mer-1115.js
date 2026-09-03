/**
 * MER-1115 — Exisiting Bug : Overlap of tooltips on the headers of the current alignment screen. Heading with edit icon and sorting icon are having overlap in their tooltips.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1115
 */
export const MER1115 = {
  ticket: 'MER-1115',
  summary: "Exisiting Bug : Overlap of tooltips on the headers of the current alignment screen. Heading with edit icon and sorting icon are having overlap in their tooltips.",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1115'] };
  },
};

export default MER1115;
