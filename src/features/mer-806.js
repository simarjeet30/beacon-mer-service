/**
 * MER-806 — UI Build-Contract Period should not include day.  Currently it shows 2023-08-01 - 2024-07-01.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-806
 */
export const MER806 = {
  ticket: 'MER-806',
  summary: "UI Build-Contract Period should not include day.  Currently it shows 2023-08-01 - 2024-07-01.",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-806'] };
  },
};

export default MER806;
