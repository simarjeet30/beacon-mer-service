/**
 * MER-823 — UI Build-When we change the End Date in the calendar then changed  month next to changed date becomes disabled and user doesn't have option to select default date again
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-823
 */
export const MER823 = {
  ticket: 'MER-823',
  summary: "UI Build-When we change the End Date in the calendar then changed  month next to changed date becomes disabled and user doesn't have option to select default date again",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-823'] };
  },
};

export default MER823;
