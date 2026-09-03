/**
 * MER-1125 — Customer POV showing multiple record when WAC or alignment template is updated on contact comparison
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1125
 */
export const MER1125 = {
  ticket: 'MER-1125',
  summary: "Customer POV showing multiple record when WAC or alignment template is updated on contact comparison",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1125'] };
  },
};

export default MER1125;
