/**
 * MER-1288 — Existing Bug | Regression | Page Refresh on Customer POV Screen Redirects to Landing Page Without URL Update
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1288
 */
export const MER1288 = {
  ticket: 'MER-1288',
  summary: "Existing Bug | Regression | Page Refresh on Customer POV Screen Redirects to Landing Page Without URL Update",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1288'] };
  },
};

export default MER1288;
