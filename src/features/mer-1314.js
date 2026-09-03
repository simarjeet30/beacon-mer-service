/**
 * MER-1314 — VAPT Security issue resolution ( UI Library Updates)
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1314
 */
export const MER1314 = {
  ticket: 'MER-1314',
  summary: "VAPT Security issue resolution ( UI Library Updates)",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1314'] };
  },
};

export default MER1314;
