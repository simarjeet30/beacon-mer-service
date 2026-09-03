/**
 * MER-1298 — Existing Bug-Date Issue | Edit Scenario Date Resets to Default on Third Edit and After Reopening
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1298
 */
export const MER1298 = {
  ticket: 'MER-1298',
  summary: "Existing Bug-Date Issue | Edit Scenario Date Resets to Default on Third Edit and After Reopening",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1298'] };
  },
};

export default MER1298;
