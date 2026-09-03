/**
 * MER-804 — Unit Testing-Copy button missing in the Customer POV. User should be able to copy out the Customer POV into excel and paste it all back into the UI
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-804
 */
export const MER804 = {
  ticket: 'MER-804',
  summary: "Unit Testing-Copy button missing in the Customer POV. User should be able to copy out the Customer POV into excel and paste it all back into the UI",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-804'] };
  },
};

export default MER804;
