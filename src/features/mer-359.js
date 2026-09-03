/**
 * MER-359 — UI Issues | LandingScreen
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-359
 */
export const MER359 = {
  ticket: 'MER-359',
  summary: "UI Issues | LandingScreen",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-359'] };
  },
};

export default MER359;
