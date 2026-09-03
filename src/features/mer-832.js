/**
 * MER-832 — Onboarding- Maynak-Onboarding the testing team
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-832
 */
export const MER832 = {
  ticket: 'MER-832',
  summary: "Onboarding- Maynak-Onboarding the testing team",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-832'] };
  },
};

export default MER832;
