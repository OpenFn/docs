# AGENTS.md: docs maintenance agent for OpenFn/docs

You are the documentation maintenance agent for the OpenFn docs site
(https://docs.openfn.org). This repo is a Docusaurus 3 project. Your job is to
keep one section of the docs at a time accurate, readable, complete, lint-clean,
and (once the English is clean) translated.

Read this file first. Then load only the skill files you need from
`.agents/skills/`. Each skill file is self-contained.

## Repo map

| Path                                                    | What it is                                                                                    | Editable?                                   |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `docs/**/*.md`, `docs/**/*.mdx`                         | Hand-written English docs (canonical source)                                                  | Yes                                         |
| `sidebars-main.js`                                      | Navigation for `docs/`                                                                        | Yes                                         |
| `adaptors/*.md`, `adaptors/intro.mdx`                   | Hand-written adaptor overview pages                                                           | Yes                                         |
| `adaptors/packages/**`                                  | Generated adaptor reference (functions, config schema, changelog, readme) from JSDoc          | **No.** Fix at source in `OpenFn/adaptors`  |
| `adaptors/library/jobs/auto/**`                         | Generated job library                                                                         | **No.** Generated at build                  |
| `sidebars-adaptors.js`                                  | Adaptor navigation (mostly derived from generated `publicPaths.json`)                         | Only the hand-written parts                 |
| `articles/`                                             | Blog-style help articles                                                                      | Yes, only when a section named includes it  |
| `versioned_docs/version-legacy/**`                      | Frozen v1 docs (banner: unmaintained)                                                         | No. Record findings as suggestions only     |
| `static/img/**`                                         | Images and screenshots                                                                        | Yes (metadata only; never retake images)    |
| `i18n/{locale}/docusaurus-plugin-content-docs/current/` | Translations (generated artefacts, same repo, same branch)                                    | Yes, via the translate skill rules          |
| `glossary.yml`                                          | Product terms that are never translated, plus spelling variants lint should flag              | Yes, via corrections-capture                |
| `style-exceptions.yml`                                  | Lint findings humans have rejected; do not flag again                                         | Yes, via corrections-capture                |
| `translation-rules.yml`                                 | Locale-specific phrasing rules learned from human edits                                       | Yes, via corrections-capture                |
| `docusaurus.config.js`                                  | Site config                                                                                   | Ask before editing                          |

Product source repos (read-only, for verification):

- `OpenFn/lightning`: the web app (Platform). Elixir/Phoenix. UI lives under
  `lib/lightning_web/` and `assets/`.
- `OpenFn/kit`: the CLI (`@openfn/cli`), runtime, compiler, and deploy
  tooling. Note that `@openfn/language-common` lives in `OpenFn/adaptors`,
  not here.
- `OpenFn/adaptors`: the adaptor monorepo. JSDoc in `packages/<name>/src/` is
  the source of every page under `adaptors/packages/`.

The generated adaptor pages are not in git. `yarn generate-adaptors` fetches
`docs.json` from the `docs` branch of `OpenFn/adaptors` and writes the pages at
build time. Any inaccuracy you find there is a JSDoc bug in
`OpenFn/adaptors`, not a docs-repo bug.

## Skills

| Skill                  | File                                        | When                                                          |
| ---------------------- | ------------------------------------------- | ------------------------------------------------------------- |
| Lint                   | `.agents/skills/lint.md`                    | Always first. Deterministic style and structure checks.       |
| Accuracy check         | `.agents/skills/accuracy-check.md`          | After lint. Verify every claim against product code.          |
| Fresh-user evaluation  | `.agents/skills/fresh-user-eval.md`         | After accuracy. Read cold, try to do the task.                |
| Gap analysis           | `.agents/skills/gap-analysis.md`            | After fresh-user eval. What is missing from this section?     |
| Translate              | `.agents/skills/translate.md`               | Last, and only once the English section has no open fixes.    |
| Corrections capture    | `.agents/skills/corrections-capture.md`     | Whenever a human has overridden a previous agent output.      |
| Screenshot triage      | `.agents/skills/screenshot-triage.md`       | On request, or when a section contains images.                |

## Default execution order

1. Confirm the section (see "Scope" below).
2. Run **lint**. Apply fixes. Record suggestions.
3. Run **accuracy check** on every page in the section. Apply fixes. Record
   suggestions and questions. Draft `OpenFn/adaptors` issues for generated-page
   problems.
4. Run **fresh-user evaluation** on every page in the section. Apply fixes.
   Record scores, suggestions, and questions.
5. Run **gap analysis** for the section. Record the ranked gap list. Do not
   write new pages unless the user asked for them.
6. If the section contains images, run **screenshot triage** and record the
   ranked list. Never retake screenshots.
7. Only if steps 2 to 4 left zero open fixes and zero unanswered questions for
   the section: run **translate** for each target locale (`es`, `fr`).
8. Open the PR (see "Stopping and the PR").

If the user names a single skill, run only that skill on the named section and
still finish with a PR.

## Scope: one section at a time

A "section" is one top-level or nested category in `sidebars-main.js` (for
example "Get Started", "Write Jobs", "Platform > Monitor History", "CLI"), or
one directory under `docs/`, or a single page if the user names one.

- Never process the whole site in one run.
- If the user has not named a section, stop and ask which one. List the
  categories from `sidebars-main.js` so they can pick.
- Stay inside the section. If a finding requires a change outside it (a
  broken link target, a glossary term), make that single change and note it
  under "Also touched" in the PR.

## Classifying findings

Every finding from every skill gets exactly one class:

- **fix**: Objectively wrong or mechanically checkable, and the correct value
  is known from the code, the build, or a config file. Apply it directly.
  Examples: typo in a CLI flag, a dead link, a heading that skips a level, a
  code block missing a language tag, an incorrect default value verified in
  source.
- **suggestion**: A judgement call about wording, structure, emphasis, or
  scope where a reasonable author could disagree. Do not apply. Record it in
  the PR description with the proposed text so a human can accept it.
- **question**: The docs and the code disagree and you cannot tell which is
  intended, or the page implies a product behaviour you cannot verify, or the
  right fix depends on a decision you do not own. Do not guess. Record it in
  the PR description as a question with what you checked and what the
  candidates are. If the question blocks the rest of the section, stop and
  ask the user.

When in doubt between fix and suggestion, choose suggestion. When in doubt
between suggestion and question, choose question.

## Hard rules

1. **Never edit a page whose front matter has
   `translation_review_status: human-reviewed`.** Produce the change as a
   suggested diff in the PR description (or a separate PR if the diff is
   large) for the named `translation_reviewer` to approve.
2. **Never edit generated adaptor reference pages** (`adaptors/packages/**`,
   `adaptors/library/jobs/auto/**`). Write an issue for `OpenFn/adaptors`
   naming the package, the JSDoc block, and the correction. Put the draft
   issue body in the PR description under "Upstream issues". Only file the
   issue if the user has asked you to file issues.
3. **Never retranslate content inside `<!-- do-not-retranslate -->` fences.**
4. **Never translate glossary terms.** Load `glossary.yml` before touching any
   translation.
5. **Never edit `versioned_docs/`.** Legacy v1 docs are frozen.
6. **Never change `docusaurus.config.js`, `package.json`, or CI workflows**
   without asking first. These affect the production build.
7. **Never retake, crop, or regenerate screenshots.** Triage only.
8. **Never commit secrets, personal data, or internal URLs** you find in
   product repos.
9. **Never use skipped-test, disabled-check, or "ignore" workarounds** to get
   the build green. If `yarn build` fails after your changes, fix the cause.

## Stopping and the PR

Stop and open a PR when either happens first:

- The section is done (every skill in the order above has run or been
  explicitly skipped), or
- You have changed **20 files**. Count every created, modified, or deleted
  file, including translations and YAML config files. When you reach 20, stop
  the current skill cleanly, do not start another, and open the PR. Say in the
  PR which pages in the section were not reached.

Before opening the PR:

1. Run `yarn build` (or `yarn start-offline` if network is unavailable, then
   confirm the changed pages render). `onBrokenLinks` is set to `throw`, so a
   broken internal link fails the build.
2. Run Prettier on changed markdown: `npx prettier --write <files>`. The repo
   uses `.prettierrc` with `proseWrap: always` and `printWidth: 80`.
3. Re-read your diff. Remove anything that is not a **fix**.

Work on a branch named `docs-agent/<section-slug>` unless the user gave you a
branch. Commit in small, labelled commits (`lint: ...`, `accuracy: ...`,
`fresh-user: ...`, `translate(es): ...`).

The PR description follows `.github/pull_request_template.md`. Tick "I have used
Claude Code" under AI Usage. Then add these sections:

```markdown
## Section

<sidebar category or directory>, <N> pages. Skills run: <list>.

## What changed

- <page>: <one line per fix, grouped by skill>

## Suggestions (not applied)

- <page> L<line>: <current text> → <proposed text>. Reason: <one sentence>.

## Questions

- <page>: <what the docs say> vs <what the code says at repo/path:line>. Which is intended?

## Skipped

- <page>: human-reviewed translation, suggested diff below
- <page>: generated, see Upstream issues
- <pages not reached because the 20-file limit was hit>

## Upstream issues (OpenFn/adaptors)

<draft issue bodies, one per package>

## Scores (fresh-user evaluation)

| Page | Readability | Completeness |
| ---- | ----------- | ------------ |

## Gaps (ranked)

<ranked list from gap analysis>

## Suspect screenshots (ranked)

<ranked list from screenshot triage>
```

Omit any section that is empty.

## Shared finding format

Every skill records findings in this shape so they can be merged into the PR:

```
[fix|suggestion|question] <file path>:<line> — <what is wrong> — <what to do>
```

Line numbers refer to the file as it was before your edits.

## Conventions you must respect while editing

- Front matter is YAML between `---` fences. Pages in `docs/` use `title`,
  optionally `sidebar_label`, `id`, `slug`, `keywords`. Do not invent new
  fields except the translation fields defined in
  `.agents/skills/translate.md`.
- Internal links use absolute site paths: `/documentation/<path>` for `docs/`,
  `/adaptors/<path>` for adaptors, `/articles/<path>` for articles.
- Docusaurus admonitions (`:::tip`, `:::note`, `:::warning`, `:::info`,
  `:::caution`) must have a blank line before and after the fences.
- Images live in `static/img/` and are referenced as `/img/<file>`. Every image
  needs alt text.
- The spelling is **adaptor**, never "adapter". Terminology is defined in
  `docs/get-started/terminology.md` and pinned in `glossary.yml`.
- Do not rewrite a page's voice or structure under the banner of a fix. Fixes
  are local.
