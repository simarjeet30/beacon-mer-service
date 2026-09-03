/**
 * MER-331 — Contract Structure Functionality- Update the Template and Save the template
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-331
 */
export const MER331 = {
  ticket: 'MER-331',
  summary: "Contract Structure Functionality- Update the Template and Save the template",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-331'] };
  },
};

export default MER331;
