/**
 * MER-1315 — VAPT Security issue resolution ( BE Library Updates)
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1315
 */
export const MER1315 = {
  ticket: 'MER-1315',
  summary: "VAPT Security issue resolution ( BE Library Updates)",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1315'] };
  },
};

export default MER1315;
