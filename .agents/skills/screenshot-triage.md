# Skill: Screenshot triage

Find screenshots that are probably out of date and rank them for a human to
retake. This skill never retakes, edits, or deletes an image.

## Inputs

- A section (sidebar category or `docs/` directory), or the whole
  `static/img/` tree if the user asks for a full triage.
- Read access to `OpenFn/lightning` (the web app UI) cloned to a scratch
  directory. For CLI screenshots, `OpenFn/kit`.

```bash
SCRATCH=${SCRATCH:-/tmp/openfn-src}
git clone --filter=blob:none https://github.com/OpenFn/lightning "$SCRATCH/lightning"
git clone --filter=blob:none https://github.com/OpenFn/kit "$SCRATCH/kit"
```

Full history is needed for dates, so do not use `--depth`. `--filter=blob:none`
keeps it fast.

## Where images live

All images are in `static/img/` and referenced from pages as `/img/<file>`.
Formats in use: `.webp`, `.png`, `.gif`, `.svg`, `.jpg`. Treat `.svg` files as
diagrams or logos, not screenshots, unless the alt text says otherwise.

## Process

### 1. List the images in scope

For a section, collect every image referenced by the section's pages:

```bash
grep -h -o -E '\]\(/img/[^)]+\)|src="/img/[^"]+"' docs/<section>/*.md \
  | grep -o -E '/img/[^)"]+' | sort -u
```

For a full triage, list `static/img/` and also compute which images are
referenced nowhere (candidates for deletion; report, do not delete).

### 2. Date each image

Last commit that touched the file in this repo:

```bash
git log -n 1 --format='%H %cs' -- static/img/<file>
```

Also note the referencing page, the line, the alt text, and the two lines
of prose before the image. If the image was optimised in bulk by
`scripts/optimize-images.js` (look for a commit touching many images at
once), use the commit before that bulk commit as the real date; a
re-encode is not a retake.

### 3. Identify the UI the image depicts

Classify each image by combining file name, alt text, surrounding prose, and
the page's section. Map it to a **UI area** and then to **source paths** in
the product repo. Use this table; extend it when you meet an unlisted area.

| UI area                          | Signals in file name / alt / prose                                     | Lightning source paths (relative to repo root)                                                                 |
| -------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Workflow canvas                  | canvas, workflow diagram, nodes, edges, add step, plus icon            | `assets/js/workflow-diagram/`, `lib/lightning_web/live/workflow_live/`                                        |
| Step / job editor (Inspector)    | inspector, editor, job code, adaptor picker, credential picker         | `lib/lightning_web/live/workflow_live/`, `assets/js/collaborative-editor/`, `assets/js/monaco/`, `assets/js/picker/`, `assets/js/adaptor-docs/`, `assets/js/manual-run-panel/` |
| Triggers                         | trigger, webhook URL, cron, kafka                                      | `lib/lightning_web/live/workflow_live/`, `lib/lightning/workflows/trigger.ex`, `lib/lightning/workflows/triggers/`     |
| Runs / history / inspect run     | run, history, work order, log, dataclip, output, rerun                 | `lib/lightning_web/live/run_live/`, `lib/lightning_web/live/dataclip_live/`, `assets/js/log-viewer/`          |
| Credentials                      | credential, OAuth, connect, authorise                                  | `lib/lightning_web/live/credential_live/`, `lib/lightning/credentials/`                                       |
| Project settings                 | settings, collaborators, retention, GitHub sync, webhook auth, VCS     | `lib/lightning_web/live/project_live/`, `lib/lightning_web/components/github_components.ex`                   |
| Sandboxes                        | sandbox, clone project, merge                                          | `lib/lightning_web/live/sandbox_live/`, `lib/lightning_web/components/sandbox_settings_banner.ex`             |
| Channels                         | channel, channel request                                               | `lib/lightning_web/live/channel_live/`, `lib/lightning_web/live/channel_request_live/`, `lib/lightning/channels/` |
| Audit                            | audit, audit log, audit trail                                          | `lib/lightning_web/live/audit_live/`, `lib/lightning/auditing/`                                               |
| Dashboard / project list         | dashboard, projects, metrics, overview                                 | `lib/lightning_web/live/dashboard_live/`, `lib/lightning_web/live/project_live/`                              |
| User profile / tokens            | profile, API token, MFA, password                                      | `lib/lightning_web/live/profile_live/`, `lib/lightning_web/live/tokens_live/`                                 |
| AI Assistant                     | assistant, chat, AI                                                    | `lib/lightning_web/live/ai_assistant/`, `lib/lightning/ai_assistant/`                                         |
| Collections                      | collection, key/value                                                  | `lib/lightning_web/live/collection_live/`, `lib/lightning/collections/`                                       |
| Login / signup / layout / navbar | login, register, sidebar, menu, navbar                                 | `lib/lightning_web/components/layouts/`, `lib/lightning_web/live/user_live/`, `assets/css/`                   |
| Global styling                   | (applies to every screenshot)                                          | `assets/css/app.css`, `assets/tailwind.config.ts`, `lib/lightning_web/components/core_components.ex`, `lib/lightning_web/components/layout_components.ex` |
| CLI terminal output              | terminal, console, `openfn` prompt                                     | `kit/packages/logger/src/`, `kit/packages/cli/src/<command>/`                                                 |
| Third-party UI (Kobo, DHIS2, GSheets, CommCare) | the other product's name                                     | none in OpenFn repos; mark `external`                                                                           |

Paths change. If a listed path does not exist in the checkout, run
`git log --diff-filter=R --summary -- <path>` to follow the rename, or grep
for the LiveView module name.

Confidence: record `high` when file name and alt text agree with the prose,
`medium` when only one of them does, `low` when you inferred from the
section alone.

### 4. Date the UI code

For each mapped source path set, find the newest commit that touched any of
them, excluding pure test and formatting commits:

```bash
cd "$SCRATCH/lightning"
git log -n 1 --format='%H %cs %s' -- <path1> <path2> ...
```

Also record the newest commit touching the **global styling** paths, because
a theme or component-library change re-dates every screenshot. Use the later
of the two dates for each image.

Then list the commit subjects between the image date and today for the
mapped paths, to say what likely changed:

```bash
git log --since=<image-date> --format='%cs %s' -- <paths> | head -20
```

Keep the subjects that sound user-visible (rename, redesign, move, add
button, new page, layout, colour, icon). Drop refactors, test changes, and
dependency bumps.

### 5. Flag suspects

An image is a **suspect** when the UI code date is later than the image
date. Compute the gap in days.

Not suspects, but report them in a separate list:

- `external` images (third-party UIs). Say which product and the image
  date; a human decides.
- Diagrams and logos (`.svg`, or alt text says "diagram").
- Images referenced by no page (orphans).

### 6. Rank

Sort suspects by:

1. Gap size (UI code date minus image date), largest first.
2. Then by number of user-visible commits in the gap, most first.
3. Then by the page's position in the docs: anything under "Get Started" or
   "Tutorials" ranks above the same gap elsewhere.

Do not rank `low` confidence mappings above `high` ones with a similar gap;
if a low-confidence mapping would land in the top five, say so.

## Output

```
Scope: <section or full>. Images: N. Suspects: N. External: N. Diagrams/logos: N. Orphans: N.
Lightning checked at <sha> (<date>). Kit checked at <sha>.

Suspect screenshots (ranked):

| # | Image | Page:line | Image date | UI area (confidence) | Last UI change | Gap (days) | What likely changed |
|---|-------|-----------|------------|----------------------|----------------|------------|---------------------|
| 1 | static/img/4.1_new_job.webp | docs/tutorials/kobo-to-dhis2.md:88 | 2023-02-14 | Step editor (high) | 2026-08-30 | 1293 | Inspector redesigned; adaptor picker moved to header; "Save & Run" renamed |

External (human decides):
- static/img/2.3_kobo_rest.webp — KoboToolbox REST settings — 2023-02-14

Diagrams and logos (skipped): ...

Orphaned images (referenced by no page): ...
```

Put the ranked table in the PR under "Suspect screenshots (ranked)". Cap at
the top fifteen and put the rest in a collapsed `<details>` block.

Actions you may take in the docs repo:

- **fix**: an image whose alt text is wrong about what the image shows (per
  the mapping you just did) gets corrected alt text.
- Everything else is a report. Do not delete orphans, do not replace images,
  do not edit the images.

## Extension point: automated capture (not implemented)

This skill is designed so that capture can plug in later without changing
the triage above. Do not implement any of this now.

`OpenFn/lightning` already has Playwright end-to-end tests: config at
`assets/playwright.config.ts`, specs under `assets/test/e2e/specs/` (a
`smoke/` suite and a `collaborative/` suite at the time of writing). They
cover a subset of the UI areas above and do not yet emit docs screenshots.
When they do, or when a docs-specific capture suite is added, add a step
**7. Capture** after ranking:

- Input: the ranked suspect list from step 6, each row carrying its
  `UI area` and source paths.
- A mapping file in this repo, `screenshot-capture-map.yml` (does not exist
  yet), keyed by image path, that names the Playwright test file and test
  title that reaches the right screen, the selector or viewport to capture,
  and any fixture data needed. Rows without a mapping stay report-only.
- The capture command runs the named test from `assets/` in the Lightning
  checkout with a capture flag (for example
  `npx playwright test test/e2e/specs/<file> -g "<title>"` with a custom
  reporter or a `DOCS_SCREENSHOTS=1` env var the spec checks) against a
  seeded local Lightning instance, writes the new image to
  `static/img/<same file name>` in this repo, and records the Lightning
  commit it was captured at.
- Use the test's own selectors for the capture region so the image tracks
  the UI. Do not hard-code pixel crops.
- Replacement images go into the PR alongside the ranked table, with a
  before/after pair in the description, and stay a **suggestion** until a
  human approves the PR.

Until that mapping file and those tests exist, this skill ends at step 6.
