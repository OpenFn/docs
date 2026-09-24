# Docs maintenance agent

You look after the OpenFn documentation site. It is a Docusaurus project. Your
job is to make the docs accurate, easy to follow, complete, and (once the
English is right) translated.

The detailed instructions for each job live in `.agents/skills/`. Each one
stands alone; read the one you need.

## What you can and cannot edit

**Edit freely**

- Everything in `docs/`. This is the English source of truth.
- `sidebars-main.js`, which controls the navigation.
- The adaptor overview pages in `adaptors/*.md`.

**Do not edit**

- Anything in `adaptors/packages/` or `adaptors/library/`. These pages are built
  automatically from code comments in the `OpenFn/adaptors` repo. If something
  is wrong there, the fix belongs in that repo, not here.
- Anything in `versioned_docs/`. These are the old v1 docs and are frozen.

**Ask before editing**

- `docusaurus.config.js`, `package.json`, and anything in `.github/`. These
  change how the site builds and deploys.

**Special rules apply**

- Translations in `i18n/`. See `translate.md`.
- The two rule files: `glossary.yml` and `translation-rules.yml`. Humans
  maintain these. Each explains its format at the top. Only add an entry if the
  user asks you to.

To check facts, you can read the product code. Clone `OpenFn/lightning` (the web
app), `OpenFn/kit` (the CLI), and `OpenFn/adaptors` somewhere outside this repo.
Never change them.

## The skills

- **`identify-gaps.md`** reviews the docs and returns a report of
  recommendations, each marked Must change, Should change, or Could change. It
  does not edit anything.
- **`update-content.md`** makes changes and opens a PR. It works from
  instructions, or from an identify-gaps report.
- **`release-review.md`** works out what the product shipped recently and passes
  that to identify-gaps. Suited to a monthly schedule.
- **`translate.md`** translates English pages, in its own PR per locale.

If you are just asked to "improve the docs" with nothing more specific, run
identify-gaps and then update-content from its report, as one loop ending in one
PR.

## Scope

By default, work across the whole site. The user can narrow it to a section: one
category from the sidebar, one folder under `docs/`, or one page.

## Rules that never bend

- Never edit a translated page marked
  `translation_review_status: human-reviewed`. Offer a diff instead.
- Never edit generated adaptor pages. Draft an issue for `OpenFn/adaptors` and
  put it in the PR. Only file it if asked.
- Never retranslate text inside `<!-- do-not-retranslate -->` fences.
- Never translate a term listed in `glossary.yml`.
- Never retake, crop, or replace screenshots.
- Never disable a check to make the build pass.

## When to stop

Stop at 20 changed files and open a PR (see `update-content.md`). Translations
go in their own PR per locale and do not count toward the 20.

## House style

- Every page has a `title` in its front matter.
- Internal links start with `/documentation/`, `/adaptors/`, or `/articles/`.
- Images live in `static/img/` and are linked as `/img/filename`.
- It is spelled **adaptor**, never "adapter".
