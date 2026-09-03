/**
 * MER-1269 — Existing Bug | Not able to download File in Scenario Attachement
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1269
 */
export const MER1269 = {
  ticket: 'MER-1269',
  summary: "Existing Bug | Not able to download File in Scenario Attachement",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1269'] };
  },
};

export default MER1269;
