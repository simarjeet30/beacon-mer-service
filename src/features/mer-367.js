/**
 * MER-367 — Copy functionality missing from Contract Structures screen
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-367
 */
export const MER367 = {
  ticket: 'MER-367',
  summary: "Copy functionality missing from Contract Structures screen",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-367'] };
  },
};

export default MER367;
