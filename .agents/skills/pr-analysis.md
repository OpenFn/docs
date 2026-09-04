# PR analysis

Read a pull request in one of the product repos and make sure the docs still
describe what the product does after it merges. Run this when someone gives
you a PR, or a range of commits or a release tag, from `OpenFn/lightning`,
`OpenFn/kit`, or `OpenFn/adaptors`.

This is the inverse of the accuracy check. That skill starts from a docs page
and looks for the code. This one starts from a code change and looks for the
docs.

## Steps

1. **Read the PR.** Start with the title, description, and any linked issue,
   then the diff. Write down, in plain terms, what changed for a user: a new
   feature, a renamed button, a new CLI flag, a changed default, a removed
   option, a different error message, a new config value. Ignore anything a
   user would never see: refactors, tests, dependency bumps, internal renames.
   If nothing user-facing changed, say so and stop.

2. **Find the docs that talk about it.** For each user-facing change, search
   the docs for the feature, the old and new names, the flag, the setting, and
   any screenshots of that screen. Search `docs/`, `articles/`, and
   `adaptors/*.md`. Note every page and line that mentions it.

3. **Decide what each page needs.** Go through the mentions and sort them:
   - **Now wrong.** The docs describe the old behaviour. This is a fix if the
     new behaviour is clear from the diff and slots into the existing
     sentence (a renamed flag, a changed default). Otherwise it is a
     suggestion with proposed wording.
   - **Now incomplete.** The page is still right but does not mention the new
     thing. Suggest where the new paragraph or table row should go and draft
     it.
   - **Nothing in the docs.** A new feature with no home yet. Suggest which
     page or section it belongs in and give a short outline. Do not write the
     page unless asked.
   - **Screenshot affected.** The change alters a screen that appears in an
     image. List the image so it goes on the retake list. Never retake it.

4. **Check the PR's own docs claims.** If the PR description says "docs
   updated" or links a docs PR, check that what it says matches what the diff
   does. If the PR touches user-facing text in the app (button labels, error
   messages, help text), search the docs for the old text.

5. **Be careful about timing.** If the PR is not merged yet, say so at the top
   of your report, and do not change any docs page. Docs should describe what
   is released. Write everything up as suggestions and note which release the
   change is expected in.

## Adaptor PRs

Changes to function signatures and descriptions in `OpenFn/adaptors` flow
into the docs automatically through the generated reference pages. You do
not need to do anything for those. Look only at the hand-written overview
page (`adaptors/<name>.md`) and at any tutorial or guide that uses the
changed function. If the PR changes a function's behaviour but not its code
comment, that is an upstream issue for the adaptors repo, not a docs fix.

## What to report

Start with one paragraph: what the PR does for users, whether it is merged,
and how many docs pages are affected. Then the findings in the standard
format, grouped by page. Finish with the images that need retaking and any
new pages that are needed.

If you were asked to make the changes and the PR is merged, apply the fixes,
run Prettier and `yarn build`, and open a docs PR that links back to the
product PR. Everything else goes in the PR description as suggestions.
