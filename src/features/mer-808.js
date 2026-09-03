/**
 * MER-808 — Deployment (Dev)-Contract Period should not include day.  Currently it shows 2023-08-01 - 2024-07-01.
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-808
 */
export const MER808 = {
  ticket: 'MER-808',
  summary: "Deployment (Dev)-Contract Period should not include day.  Currently it shows 2023-08-01 - 2024-07-01.",
  type: "Task",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-808'] };
  },
};

export default MER808;
