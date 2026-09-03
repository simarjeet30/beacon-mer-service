/**
 * MER-1292 — UAT | Customer POV
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1292
 */
export const MER1292 = {
  ticket: 'MER-1292',
  summary: "UAT | Customer POV",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1292'] };
  },
};

export default MER1292;
