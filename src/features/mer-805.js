/**
 * MER-805 — Deployment (Dev)-Copy button missing in the Customer POV. User should be able to copy out the Customer POV into excel and paste it all back into the UI
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-805
 */
export const MER805 = {
  ticket: 'MER-805',
  summary: "Deployment (Dev)-Copy button missing in the Customer POV. User should be able to copy out the Customer POV into excel and paste it all back into the UI",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-805'] };
  },
};

export default MER805;
