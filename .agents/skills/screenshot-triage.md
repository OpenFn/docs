# Skill: Screenshot triage

Find screenshots that are probably stale and rank them for a human to retake.
Never retake, edit, or delete an image.

## Inputs

- A section, or all of `static/img/` for a full triage.
- A clone of `OpenFn/lightning` with history (`--filter=blob:none`, not
  `--depth`), and `OpenFn/kit` for CLI screenshots.

## Process

1. **List images in scope.** Grep the section's pages for `/img/...`
   references. For a full triage, also list images referenced by no page.
2. **Date each image**: `git log -n 1 --format=%cs -- static/img/<file>`.
   If the last commit was a bulk re-encode (many images, one commit), use the
   commit before it.
3. **Map each image to a UI area** using the file name, alt text, and the
   surrounding prose. Record confidence (high, medium, low). Then map the
   area to source paths in Lightning:

   | UI area                        | Source paths                                                                 |
   | ------------------------------ | ---------------------------------------------------------------------------- |
   | Canvas                         | `assets/js/workflow-diagram/`, `lib/lightning_web/live/workflow_live/`      |
   | Step editor / Inspector        | `lib/lightning_web/live/workflow_live/`, `assets/js/collaborative-editor/`, `assets/js/picker/` |
   | Runs, history, dataclips       | `lib/lightning_web/live/run_live/`, `lib/lightning_web/live/dataclip_live/`, `assets/js/log-viewer/` |
   | Credentials                    | `lib/lightning_web/live/credential_live/`                                    |
   | Project settings, sandboxes    | `lib/lightning_web/live/project_live/`, `lib/lightning_web/live/sandbox_live/` |
   | Dashboard, profile, tokens     | `lib/lightning_web/live/dashboard_live/`, `profile_live/`, `tokens_live/`   |
   | Everything (global styling)    | `assets/css/app.css`, `lib/lightning_web/components/`                        |
   | CLI output                     | kit `packages/cli/src/`, `packages/logger/src/`                              |
   | Third-party UI (Kobo, DHIS2)   | none; mark `external`                                                        |

   Paths move. If one is missing, follow the rename with
   `git log --diff-filter=R --summary`.
4. **Date the UI code.** Newest commit touching the mapped paths or the
   global styling paths, whichever is later. List user-visible commit
   subjects since the image date (renames, redesigns, new buttons); drop
   refactors and dependency bumps.
5. **Flag suspects**: UI date later than image date. Report `external`
   images, diagrams and logos, and orphaned images separately.
6. **Rank** by gap in days, then by number of user-visible commits, then
   favour "Get Started" and "Tutorials" pages. Say if a low-confidence
   mapping lands in the top five.

## Output

```
Scope: <section>. Images: N. Suspects: N. External: N. Orphans: N.
Lightning checked at <sha>.

| # | Image | Page:line | Image date | UI area (confidence) | Last UI change | Gap (days) | What likely changed |
|---|-------|-----------|------------|----------------------|----------------|------------|---------------------|

External: <list>
Orphaned: <list>
```

Top fifteen go in the PR under "Suspect screenshots"; collapse the rest.

The only edit you may make is correcting alt text that misdescribes the
image. Everything else is a report.

## Extension point: capture (not implemented)

Lightning already has Playwright e2e specs under `assets/test/e2e/specs/`
(config in `assets/playwright.config.ts`). When they can emit docs
screenshots, add a step 7 that takes the ranked list, looks each image up in
a `screenshot-capture-map.yml` (image path → spec file, test title, capture
selector), runs that test with a capture flag against a seeded local
Lightning, and writes the replacement to `static/img/<same name>`. Replacement
images stay a *suggestion* with a before/after in the PR until a human
approves. Until that map and those tests exist, this skill ends at step 6.
