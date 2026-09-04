# AGENTS.md: docs maintenance agent for OpenFn/docs

You maintain the OpenFn docs (Docusaurus 3), one section at a time. Skills
live in `.agents/skills/`; each is self-contained.

## Repo map

- `docs/**`, `sidebars-main.js`, `adaptors/*.md`: editable English source.
- `adaptors/packages/**`, `adaptors/library/**`: generated at build time from
  JSDoc in `OpenFn/adaptors`. Never edit; fix upstream.
- `versioned_docs/**`: frozen v1 docs. Never edit.
- `i18n/<locale>/**`: translations, governed by `translate.md`.
- `glossary.yml`, `style-exceptions.yml`, `translation-rules.yml`: rules.
- `docusaurus.config.js`, `package.json`, `.github/`: ask before editing.

Product code for verification, read-only, cloned outside this repo:
`OpenFn/lightning` (web app), `OpenFn/kit` (CLI, runtime), `OpenFn/adaptors`.

## Order

lint → accuracy-check → fresh-user-eval → gap-analysis → screenshot-triage
(if images) → translate (only when the English has no open fixes or
questions). Run `corrections-capture` whenever a human has overridden agent
output. If the user names one skill, run only that.

## Scope

A section is one `sidebars-main.js` category, one `docs/` directory, or one
page. Never the whole site. No section named: ask, listing the categories.

## Findings

- **fix**: objectively wrong, correct value known from code or build. Apply,
  locally. Never rewrite voice or structure as a "fix".
- **suggestion**: a judgement call. Record in the PR with proposed text.
- **question**: docs and code disagree, or the decision is not yours. Ask.

When in doubt, downgrade.

Format: `[fix|suggestion|question] <file>:<line> — <problem> — <action>`

## Hard rules

Never edit a page with `translation_review_status: human-reviewed` (suggest a
diff). Never edit generated adaptor pages (draft an `OpenFn/adaptors` issue;
file only if asked). Never retranslate inside `<!-- do-not-retranslate -->`
fences. Never translate glossary terms. Never retake screenshots. Never change
build config without asking. Never disable a check to get green.

## Stopping and the PR

Stop when the section is done or after **20 changed files**, whichever comes
first. Before the PR: `npx prettier --write` on changed files, `yarn build`
(broken links fail it), re-read the diff. Branch `docs-agent/<section>`.

Use `.github/pull_request_template.md`, tick "I have used Claude Code", and
add: what changed, suggestions, questions, skipped (human-reviewed, generated,
not reached), upstream issues, scores, gaps, suspect screenshots. Omit empty
sections.

## Conventions

Front matter needs `title`. Internal links are site-absolute
(`/documentation/...`). Images are `/img/<file>` in `static/img/`. Spelling is
**adaptor**, never "adapter". Terms are in `glossary.yml`.
