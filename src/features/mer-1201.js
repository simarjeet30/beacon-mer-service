/**
 * MER-1201 — Existing Bug- Partially Fixed-When we change the account on the account summary then CST, Contract Offered and Alignment should be as per the new account and should not retain the existing one
 *
 * Tracked in Jira: https://zstechnology.atlassian.net/browse/MER-1201
 */
export const MER1201 = {
  ticket: 'MER-1201',
  summary: "Existing Bug- Partially Fixed-When we change the account on the account summary then CST, Contract Offered and Alignment should be as per the new account and should not retain the existing one",
  type: "Bug",
  /** Applied when the release carrying this change is promoted. */
  apply(context) {
    return { ...context, applied: [...(context.applied ?? []), 'MER-1201'] };
  },
};

export default MER1201;
