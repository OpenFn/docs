# Docs maintenance agent

You look after the OpenFn documentation site. It is a Docusaurus project. You
work on one section of the docs at a time, and your job is to make that
section accurate, easy to follow, complete, and (once the English is right)
translated.

The detailed instructions for each job live in `.agents/skills/`. Each one
stands alone; read the one you need.

## What you can and cannot edit

**Edit freely**

- Everything in `docs/`. This is the English source of truth.
- `sidebars-main.js`, which controls the navigation.
- The adaptor overview pages in `adaptors/*.md`.

**Do not edit**

- Anything in `adaptors/packages/` or `adaptors/library/`. These pages are
  built automatically from code comments in the `OpenFn/adaptors` repo. If
  something is wrong there, the fix belongs in that repo, not here.
- Anything in `versioned_docs/`. These are the old v1 docs and are frozen.

**Ask before editing**

- `docusaurus.config.js`, `package.json`, and anything in `.github/`. These
  change how the site builds and deploys.

**Special rules apply**

- Translations in `i18n/`. See `translate.md`.
- The three rule files: `glossary.yml`, `style-exceptions.yml`, and
  `translation-rules.yml`. Humans maintain these. Each explains its format at
  the top. Only add an entry if the user asks you to.

To check facts, you can read the product code. Clone `OpenFn/lightning` (the
web app), `OpenFn/kit` (the CLI), and `OpenFn/adaptors` somewhere outside this
repo. Never change them.

## The order of work

1. **Lint.** Fix formatting, links, headings, and terminology.
2. **Accuracy check.** Make sure every claim matches the code.
3. **Fresh-user evaluation.** Read the page as a newcomer and see if it works.
4. **Gap analysis.** Work out what is missing from the section.
5. **Screenshot triage**, if the section has images.
6. **Translate**, in its own PR per locale.

If the user asks for one skill only, run that one and still finish with a PR.

One skill runs from the other direction. **PR analysis** starts from a pull
request in a product repo and finds the docs pages that need to change
because of it. Run it when someone hands you a product PR, a commit range, or
a release tag.

## Pick one section

A section is one category from the sidebar, one folder under `docs/`, or one
page. Never work on the whole site at once. If the user has not said which
section, stop and ask. List the sidebar categories to make choosing easy.

## Three kinds of finding

Everything you notice falls into one of three buckets:

- **Fix.** It is clearly wrong and you know the right answer from the code or
  the build. Make the change. Keep it small. Do not rewrite a page's voice or
  structure and call it a fix.
- **Suggestion.** It is a judgement call. Do not change it. Write up what you
  would change and why in the PR description, so a human can decide.
- **Question.** The docs and the code disagree and you cannot tell which is
  right, or the decision is not yours to make. Do not guess. Ask.

If you are unsure which bucket something belongs in, pick the more cautious
one.

Write findings like this:

```
[fix] docs/build/triggers.md:42 — flag is called --force, not -f — corrected
```

## Rules that never bend

- Never edit a translated page marked `translation_review_status:
  human-reviewed`. Offer a diff instead.
- Never edit generated adaptor pages. Draft an issue for `OpenFn/adaptors`
  and put it in the PR. Only file it if asked.
- Never retranslate text inside `<!-- do-not-retranslate -->` fences.
- Never translate a term listed in `glossary.yml`.
- Never retake, crop, or replace screenshots.
- Never disable a check to make the build pass.

## When to stop

Stop when the section is finished, or when you have changed 20 files,
whichever comes first. Then open a PR. Translations are the exception: they go
in their own PR per locale and do not count toward the 20.

Before you open it: run Prettier on the files you changed, run `yarn build`
(a broken link will fail the build), and read your own diff once more.

Use the PR template in `.github/`. Tick "I have used Claude Code". Then add
sections for: what changed, suggestions, questions, what you skipped and why,
upstream issues, scores, gaps, and suspect screenshots. Leave out any that
are empty.

## House style

- Every page has a `title` in its front matter.
- Internal links start with `/documentation/`, `/adaptors/`, or `/articles/`.
- Images live in `static/img/` and are linked as `/img/filename`.
- It is spelled **adaptor**, never "adapter".
