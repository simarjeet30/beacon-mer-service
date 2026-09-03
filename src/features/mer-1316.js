/**
 * MER-1316 — VAPT Security issue resolution ( URL Sanitization)
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1316
 */
export const MER1316 = {
  ticket: 'MER-1316',
  summary: "VAPT Security issue resolution ( URL Sanitization)",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1316'] };
  },
};

export default MER1316;
