/**
 * MER-1275 — Existing Bug - When user is entering duplicate party id in custom scenario, it should not allow user and should display error e.g. 'Party ID is already added'.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1275
 */
export const MER1275 = {
  ticket: 'MER-1275',
  summary: "Existing Bug - When user is entering duplicate party id in custom scenario, it should not allow user and should display error e.g. 'Party ID is already added'.",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1275'] };
  },
};

export default MER1275;
