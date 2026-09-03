/**
 * MER-644 — User Stories / Technical Stories - Need Product Group & Specialty in Export
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-644
 */
export const MER644 = {
  ticket: 'MER-644',
  summary: "User Stories / Technical Stories - Need Product Group & Specialty in Export",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-644'] };
  },
};

export default MER644;
