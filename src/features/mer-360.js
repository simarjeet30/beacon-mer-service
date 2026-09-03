/**
 * MER-360 — Negative WAC % is not captured in the WAC History
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-360
 */
export const MER360 = {
  ticket: 'MER-360',
  summary: "Negative WAC % is not captured in the WAC History",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-360'] };
  },
};

export default MER360;
