/**
 * MER-289 — Modal popup with Div and Grid with textbox and dropdown
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-289
 */
export const MER289 = {
  ticket: 'MER-289',
  summary: "Modal popup with Div and Grid with textbox and dropdown",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-289'] };
  },
};

export default MER289;
