# Test run: gap-analysis skill on the CLI section

Section: **Build for Developers → CLI** (`docs/build-for-developers/cli-*.md`,
`sidebars-main.js:132-137`).

Product code read at `OpenFn/kit@b84f801`, `packages/cli/src/cli.ts` and
`packages/cli/src/commands.ts`.

This is a test of the skill, not a docs change. No docs pages were edited.

## Step 1 — what the docs cover

| Page | Covers |
| --- | --- |
| `cli-intro.md` | Prerequisites, install, update, troubleshooting |
| `cli-usage.md` | `--help`, run a job, output state, log level, `repo`, run a workflow, `docs` |
| `cli-sync.md` | Projects, project/workflow yaml, auth, fetch/checkout/pull/deploy, sandboxes, merge conflicts, GitHub |
| `cli-collections.md` | PAT, server, fetch/upload/remove items |
| `cli-walkthrough.md` | Tutorial: adaptors, state, transforms, debugging, iteration, workflows |
| `cli-challenges.md` | Six practice exercises |

## Step 2 — what the product has

Commands registered in `packages/cli/src/cli.ts:33-50`:

`execute` (default); `compile`; `collections` (get/set/remove); `deploy`;
`install`; `repo` (clean/install/pwd/list); `test`; `docs`; `apollo`;
`metadata`; `docgen`; `pull`; `project(s)` (list/pull/fetch/checkout/deploy/
clean/version/merge); `version`.

## Step 3 — comparison

Every candidate was grepped across `docs/`, `adaptors/*.md` and `articles/`
before being called a gap.

| Gap | Label | Notes |
| --- | --- | --- |
| `openfn apollo` | Missing page | No mention anywhere in docs. Real user-facing command with its own `desc` and examples (`apollo/command.ts:26`). |
| `openfn metadata` | Missing page | No mention. Grep hits on "metadata" are all the ordinary noun; the command itself is undocumented. |
| `openfn test` | Partial page | Named once in `cli-intro.md` as an install smoke-test; never explained as a command. |
| `openfn version` | Missing page | Undocumented. `cli-intro.md` covers updating but not how to report the installed compiler/runtime versions. |
| `openfn pull --beta` | Misplaced | `pull/command.ts:51` sends users to the kit GitHub **wiki** for docs. That content belongs on docs.openfn.org. |
| `openfn project list` | Partial page | `cli-sync.md` covers fetch/checkout/pull/deploy/merge/clean but not `list`. |
| `openfn docgen` | **Not a gap** | `describe: false` (`docgen/command.ts:9`) — deliberately hidden. |

## Step 4 — user evidence

`openfn/docs` issues, semantic search on CLI documentation. Five results,
two open and relevant: **#771** "Re-write CLI walkthrough", **#349** "Add CLI
runtime on docs". No forum, support-channel or search-analytics access in
this session, so demand beyond those issues is unmeasured.

## Step 5 — ranked

Scores: users affected / severity / evidence / ease (5 = a paragraph).

| # | Gap | U | S | E | W | Total |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `pull --beta` docs live in the kit wiki | 4 | 4 | 3 | 4 | **15** |
| 2 | `openfn version` undocumented | 3 | 2 | 1 | 5 | **11** |
| 3 | `openfn project list` missing from cli-sync | 3 | 2 | 1 | 5 | **11** |
| 4 | `openfn metadata` undocumented | 2 | 3 | 2 | 3 | **10** |
| 5 | `openfn test` never explained as a command | 3 | 2 | 1 | 4 | **10** |
| 6 | `openfn apollo` undocumented | 2 | 3 | 1 | 2 | **8** |

Suggested homes: 1 → new `cli-sync` section or its own page under the CLI
category; 2, 5 → `cli-usage.md` under "Get help"; 3 → `cli-sync.md` after
"Aliases"; 4, 6 → `cli-usage.md` as new sections.

## Reverse check

Nothing found that the docs describe and the CLI no longer has.
