/**
 * MER-807 — Unit Testing-Contract Period should not include day.  Currently it shows 2023-08-01 - 2024-07-01.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-807
 */
export const MER807 = {
  ticket: 'MER-807',
  summary: "Unit Testing-Contract Period should not include day.  Currently it shows 2023-08-01 - 2024-07-01.",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-807'] };
  },
};

export default MER807;
