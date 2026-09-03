/**
 * MER-22 — DB & BE: create table  for  saving templates and stored procedure for get template list and save new template
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-22
 */
export const MER22 = {
  ticket: 'MER-22',
  summary: "DB & BE: create table  for  saving templates and stored procedure for get template list and save new template",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-22'] };
  },
};

export default MER22;
