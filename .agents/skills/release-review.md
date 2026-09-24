# Release review

Work out what the product shipped recently, then hand that list to
`identify-gaps.md` to find the docs that need to catch up.

By default, cover every release in the last month across `OpenFn/lightning`,
`OpenFn/kit`, and `OpenFn/adaptors`. Someone can narrow it to one repo, a date
range, a release tag, or a single PR.

## Get the repos

Clone the product repos you need outside this repo, with tags. Never change
them. If you are running inside a product repo instead, clone `OpenFn/docs` the
same way; docs changes always go in a PR on the docs repo.

## Build the list of changes

1. **Read the changelogs, not the diffs.** Lightning has one `CHANGELOG.md`. Kit
   and adaptors have one per package, under `packages/<name>/CHANGELOG.md`. Read
   every entry released in the period. Skip the Unreleased section.
2. **Rewrite each entry as a change a user would notice**: a new feature, a
   renamed button, a new CLI flag, a changed default, a removed option. Drop
   internal changes like refactors, dependency bumps, and tests. Open the linked
   PR only if an entry is too vague.
3. **For adaptors, keep only two kinds of change**: a new adaptor, and a change
   that could break a tutorial or guide. Adaptor function reference pages are
   generated from code, so they update themselves.

Each item on the list should give the repo, the release, what changed for the
user, and the old and new names if something was renamed.

## Hand it on

Run `identify-gaps.md` with this list as its context. Put the list at the top of
the report, after one line saying which repos, releases, and dates you covered.

If nothing user-facing shipped in the period, say so and stop.

If you were asked to update the docs as well, pass the report to
`update-content.md`.
