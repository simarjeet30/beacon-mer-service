/**
 * MER-364 — Non- admin user can edit Alignment template
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-364
 */
export const MER364 = {
  ticket: 'MER-364',
  summary: "Non- admin user can edit Alignment template",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-364'] };
  },
};

export default MER364;
