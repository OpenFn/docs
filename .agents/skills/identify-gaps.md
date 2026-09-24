# Identify gaps

Look at the docs and work out what should be improved. The output is a report of
recommendations. This skill does not edit anything; that is the job of
`update-content.md`.

## Input

By default, the whole site. The user can narrow it to a section: one sidebar
category, one folder under `docs/`, or one page.

You may also be handed context, such as the list of product changes from
`release-review.md`. If so, focus on the pages that context points to.

## Four ways to look

For a general review, use all four. When you are given a list of changes, start
with the last one.

### Is it accurate?

Pick out the things a reader would act on: code samples, function names, flags,
button labels, defaults, versions, limits. Check each against the code:
`OpenFn/lightning` for the web app, `OpenFn/kit` for the CLI, `OpenFn/adaptors`
for adaptor functions. Note the file and line. Anything you cannot check from
code, such as pricing, policy, or per-deployment settings, is a question for the
product team.

### Can a newcomer follow it?

Read the page as someone who knows what an API, JSON, and a terminal are, but
has never heard of OpenFn. Try to do what it says. Note every place you had to
guess: an undefined term, a missing prerequisite, steps in the wrong order, no
way to tell you had succeeded.

### What is missing?

Compare what the docs cover with what the product has: commands, screens,
settings. Before calling something missing, search the whole site the way a user
would type it; it may be documented elsewhere. If you can see user evidence
(issues, forum posts), note how often the topic comes up. Do not invent demand.
Feature-flagged or deliberately hidden things are not gaps.

### What has changed?

For each product change you were given, search `docs/`, `articles/`, and
`adaptors/*.md` for it, using both the old and new names. Decide whether each
page it touches is now wrong or now incomplete. A change with no home in the
docs at all is a missing page.

## Classify every recommendation

- **Must change.** A reader following the page will fail or be misled: it
  contradicts the code, the steps do not work, or it describes something that no
  longer exists.
- **Should change.** The page works, but a newcomer will struggle or miss
  something important: a missing prerequisite, an undefined term, a shipped
  feature it does not mention.
- **Could change.** A nice improvement with little evidence of need: an extra
  example, clearer wording, a small gap.

If you are torn between two levels, pick the lower one. If you cannot decide
what is right (the docs and code disagree and either could be wrong), list it
under **Questions** instead.

## The report

Start with one line: what you covered, the repos and commits you checked, and
the count at each level. Then list Must, Should, Could, and Questions, one line
each:

```
[must] docs/build/triggers.md:42 — says the flag is -f; kit's cli.ts:88 says --force — change -f to --force
```

For a missing page, add where it should go and a short outline. Problems in
generated adaptor pages go in their own list, as issues for `OpenFn/adaptors`.
