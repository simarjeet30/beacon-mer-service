/**
 * MER-833 — Onboarding- Sanchita-Onboarding the testing team
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-833
 */
export const MER833 = {
  ticket: 'MER-833',
  summary: "Onboarding- Sanchita-Onboarding the testing team",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-833'] };
  },
};

export default MER833;
