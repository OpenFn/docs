# Skill: Screenshot triage

Rank screenshots likely to be stale. Never retake, edit, or delete images.
Needs `OpenFn/lightning` cloned with history (`--filter=blob:none`).

1. List `/img/...` references in the section (full triage: all of
   `static/img/`, noting images no page uses).
2. Date each image with `git log -n 1 --format=%cs -- static/img/<file>`,
   skipping bulk re-encode commits.
3. Map each image to a UI area from file name, alt text, and prose, with
   confidence high/medium/low, then to Lightning paths: canvas
   `assets/js/workflow-diagram/`; step editor `lib/lightning_web/live/
   workflow_live/`, `assets/js/collaborative-editor/`; runs and history
   `run_live/`, `dataclip_live/`, `assets/js/log-viewer/`; credentials
   `credential_live/`; project settings `project_live/`, `sandbox_live/`;
   global styling `assets/css/app.css`, `lib/lightning_web/components/`. CLI
   output maps to kit `packages/cli/src/`. Third-party UIs are `external`.
4. Date the UI: newest commit touching the mapped or global styling paths.
   List user-visible commit subjects since the image date.
5. Suspect = UI newer than image. Rank by gap in days, then user-visible
   commits, then Get Started and Tutorials first. Flag low-confidence
   mappings in the top five.

Output a table: image, page:line, image date, UI area (confidence), last UI
change, gap, what likely changed. List external, orphaned, and diagram images
separately. Top fifteen in the PR. The only edit allowed is correcting wrong
alt text.

**Extension point, not implemented**: Lightning has Playwright specs in
`assets/test/e2e/specs/`. When they can emit docs screenshots, add step 6:
look each suspect up in a `screenshot-capture-map.yml` (image → spec, test
title, selector), run it with a capture flag against a seeded local
Lightning, write to `static/img/<same name>`, and present before/after as a
*suggestion*.
