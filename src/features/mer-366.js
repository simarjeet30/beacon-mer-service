/**
 * MER-366 — Blank Values in Contract Template Dropdown
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-366
 */
export const MER366 = {
  ticket: 'MER-366',
  summary: "Blank Values in Contract Template Dropdown",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-366'] };
  },
};

export default MER366;
