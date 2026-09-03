/**
 * MER-825 — Unit Testing-When we change the End Date in the calendar then changed  month next to changed date becomes disabled and user doesn't have option to select default date again
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-825
 */
export const MER825 = {
  ticket: 'MER-825',
  summary: "Unit Testing-When we change the End Date in the calendar then changed  month next to changed date becomes disabled and user doesn't have option to select default date again",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-825'] };
  },
};

export default MER825;
