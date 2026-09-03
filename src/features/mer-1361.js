/**
 * MER-1361 — UI Changes - Customer POV Enhancements
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1361
 */
export const MER1361 = {
  ticket: 'MER-1361',
  summary: "UI Changes - Customer POV Enhancements",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1361'] };
  },
};

export default MER1361;
