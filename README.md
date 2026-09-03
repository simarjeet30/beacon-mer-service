# beacon-mer-service

Service repository paired with the Jira **MER** board
(https://zstechnology.atlassian.net/jira/software/c/projects/MER/boards/446).

## Environment branches

Work flows in one direction only:

```
dev  →  qa  →  staging  →  prod
```

* `dev` — stories land here individually, one PR per Jira ticket.
* `qa` / `staging` / `prod` — a whole release is promoted at once, by merging its
  `release/<sprint>` branch. A release only appears in an environment once **every** story in that
  sprint has been merged into it.

BEACON reads this history to decide which environment each Jira sprint is currently in — the lanes
on the control tower are derived from merged PRs, not entered by hand.

## Commit convention

```
<type>(<JIRA-KEY>): <summary>
```

e.g. `feat(MER-1376): usability enhancement`. The Jira key in every subject line is what
links a commit back to its ticket.
