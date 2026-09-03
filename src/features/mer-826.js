/**
 * MER-826 — Deployment (Dev)-When we change the End Date in the calendar then changed  month next to changed date becomes disabled and user doesn't have option to select default date again
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-826
 */
export const MER826 = {
  ticket: 'MER-826',
  summary: "Deployment (Dev)-When we change the End Date in the calendar then changed  month next to changed date becomes disabled and user doesn't have option to select default date again",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-826'] };
  },
};

export default MER826;
