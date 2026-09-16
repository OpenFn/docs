# Release review

Look at what the product shipped recently and make sure the docs caught up.
With no arguments, review every release in `OpenFn/lightning`, `OpenFn/kit`,
and `OpenFn/adaptors` from the last month. Someone can narrow it to one repo,
a date range, a release tag, or a single PR.

This is the inverse of the accuracy check. That skill starts from a docs page
and looks for the code. This one starts from what changed in the code and
looks for the docs.

## Two repos are involved

The releases live in the product repos. The docs live here. You need both.

- **Running in the docs repo** (the usual case): clone each product repo you
  need into a scratch directory outside this one. Fetch tags. Do not modify
  the product repos.
- **Running inside a product repo** (someone asks "did the docs keep up with
  this release?"): clone `OpenFn/docs` into a scratch directory and do the
  same work. Docs changes always go in a branch and PR on the docs repo.

Say at the top of your report which repos, tags, and dates you covered.

## Steps

1. **Start from the changelogs, not the diffs.** Each repo keeps one:
   Lightning has a single `CHANGELOG.md`; kit and adaptors have one per
   package under `packages/<name>/CHANGELOG.md`. Read every entry released in
   the period. These are already a curated list of user-facing changes, so
   they are cheaper and more reliable than reading every PR. Skip the
   Unreleased section; docs describe what has shipped.

2. **Turn each entry into a plain statement of what changed for a user**: a
   new feature, a renamed button, a new CLI flag, a changed default, a removed
   option, a new setting. Drop entries that are internal (refactors,
   dependency bumps, test changes). If an entry is too vague to act on, open
   the PR it links to and read the diff. Only then.

3. **Find the docs that talk about it.** For each change, search `docs/`,
   `articles/`, and `adaptors/*.md` for the feature, the old and new names,
   the flag, or the setting. Search for things the way a user would type
   them ("openfn pull --beta", not "beta"). Note every page and line.

4. **Decide what each page needs.**
   - **Now wrong.** The docs describe the old behaviour. Fix it if the new
     behaviour is clear and slots into the existing sentence. Otherwise
     suggest wording.
   - **Now incomplete.** The page is still right but does not mention the new
     thing. Suggest where the paragraph or table row goes and draft it.
   - **Nothing in the docs.** A new feature with no home. Suggest a page or
     section and a short outline. Do not write the page unless asked.
   - **Screenshot affected.** The change alters a screen that appears in an
     image. List the image for the retake list. Never retake it.

   A feature behind a feature flag, or a command hidden in code, is not a
   docs gap. Note it and ask the product team if it looks like it should be
   public.

## Adaptors are different

Changes to adaptor functions flow into the docs automatically through the
generated reference pages, so you do not need to chase those. For adaptors,
ask only two questions: is there a new adaptor with no overview page in
`adaptors/`, and did a change break something a tutorial or guide relies on.

## What to report

Start with one paragraph: the repos and period covered, how many releases,
how many user-facing changes, and how many docs pages are affected. Then the
findings in the standard format, grouped by page. Finish with images that
need retaking and new pages that are needed.

Apply the fixes, run Prettier and `yarn build`, and open a docs PR that links
to the releases it covers. Suggestions and questions go in the PR
description. If the period had no user-facing changes, say so and do not open
a PR.

This skill suits a monthly schedule with default arguments, plus a manual run
after any large release.
