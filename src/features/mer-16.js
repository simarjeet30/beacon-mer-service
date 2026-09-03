/**
 * MER-16 — DB : Insert some default template values for all the market and contract types for the -> selected method -> methods will be(Tiered Market Share,Number of Evaluators)
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-16
 */
export const MER16 = {
  ticket: 'MER-16',
  summary: "DB : Insert some default template values for all the market and contract types for the -> selected method -> methods will be(Tiered Market Share,Number of Evaluators)",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-16'] };
  },
};

export default MER16;
