/**
 * MER-330 — Contract Structure Functionality- Populate with Data
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-330
 */
export const MER330 = {
  ticket: 'MER-330',
  summary: "Contract Structure Functionality- Populate with Data",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-330'] };
  },
};

export default MER330;
