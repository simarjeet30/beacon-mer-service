/**
 * MER-803 — UI Build-Copy button missing in the Customer POV. User should be able to copy out the Customer POV into excel and paste it all back into the UI
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-803
 */
export const MER803 = {
  ticket: 'MER-803',
  summary: "UI Build-Copy button missing in the Customer POV. User should be able to copy out the Customer POV into excel and paste it all back into the UI",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-803'] };
  },
};

export default MER803;
