/**
 * MER-1334 — Account summary redesign
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1334
 */
export const MER1334 = {
  ticket: 'MER-1334',
  summary: "Account summary redesign",
  type: "Story",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1334'] };
  },
};

export default MER1334;
