# Screenshot triage skill — test run

Cold run of `.agents/skills/screenshot-triage.md` over the whole `OpenFn/docs`
repo, against a full-history clone of `OpenFn/lightning`. 363 images in
`static/img/`, no pre-existing `screenshot-map.yml`.

## Outcome

The skill runs end to end and produces a `screenshot-map.yml` (363 entries,
valid YAML). But the ranking it produces is not usable yet: the top of the list
is dominated by old screenshots of *other* products, and the UI-change signal
that is supposed to drive the ranking contributes nothing.

## What broke

### 1. The UI-change date is the same for every image, so ranking collapses to age

Step 4 says take the newest commit touching the matching code "or the global
styling, whichever is later". In Lightning today:

| area | last change |
|---|---|
| `lib/lightning_web/components` (global) | 2026-08-28 |
| `assets/css` (global) | 2026-07-30 |
| `lib/lightning_web/live/workflow_live` | 2026-08-28 |
| `assets/js/workflow-diagram` | 2026-08-28 |
| `lib/lightning_web/live/run_live` | 2026-07-21 |

Global styling is always at or above every specific area, because
`lib/lightning_web/components` is touched constantly. So "whichever is later"
resolves to the same date for *every* internal image, the gap becomes
`today - image_date`, and the ranking degenerates into "oldest image first".
Classification work in step 3 has no effect on the order.

Worse, the commit setting that global date is
`Close the signup-gate bypass and enforce the confirmation lockout` — a
security fix with no visual change at all.

### 2. The top of the ranking is not Lightning

Because the ranking is pure age, it surfaces the oldest images, which are the
ones least likely to be Lightning UI. Actual top of the list:

| image | what it really is |
|---|---|
| `security-token.webp` | Salesforce settings screen |
| `adaptor_npm.webp` | npmjs.com |
| `how-to-gif.gif` | style-guide illustration |
| `survey_db_tableau.webp` | Tableau |
| `survey_db_powerbi.webp` | Power BI |
| `prettier.webp`, `git_clone_url.webp` | VS Code |
| `pull-request.webp`, `git-status.webp` | GitHub |

Step 3 only names Kobo and DHIS2 as "external". The real external surface is
much wider: Salesforce, Tableau, Power BI, npm, VS Code, GitHub, CommCare.

### 3. Legacy and unused images are ranked alongside live ones

- **73** images are used only under `versioned_docs/version-legacy/`. Those
  document the previous platform and are *supposed* to be frozen. Comparing
  them against current Lightning code will always flag them.
- **107** images no page references at all. The skill says to note unused
  images, but they still enter the ranking.

Together that is 180 of 363 images that nobody should retake.

### 4. The bulk-optimisation fallback does not work as written

Step 2's caveat fires hard — **303 of 363** images have `optimize images (#677)`
as their last commit. But the fallback, "look at the one before it", fails:

- That commit converted `.png` → `.webp`. There is **no** earlier commit on the
  `.webp` path, and `git log --follow` does not bridge it (the content changed,
  so it is not detected as a rename). You have to look up the *same basename
  under a different extension* before the bulk commit.
- It is not one step. Behind `optimize images (#677)` (2025-06-14) sits a second
  bulk commit, `optimize images size` (2023-02-08). The fallback has to recurse.

Applied naively, every one of those 303 images dates to 2025-06-14 and the whole
report is wrong. With a recursive, extension-aware resolver the real dates
spread 2021–2026 (95 images from 2021, 148 from 2024).

### 5. Both repos need full history, not just Lightning

The skill says a full-history clone of Lightning is needed. `OpenFn/docs`
arrived shallow (64 commits) in this environment, and step 2 reads image dates
from *this* repo, so it needs unshallowing too.

## Suggested fixes

1. Drop global styling from the gap calculation, or reduce it to a small
   constant nudge. Rank on the matched area's own last change, and filter
   commits to ones that look visible before counting them.
2. Widen the external list, and let the map's `area: external` exclude an image
   from the ranking entirely.
3. Exclude `status: legacy` and `status: unused` from the ranked table; report
   them as their own sections.
4. Rewrite step 2's fallback: search the basename across image extensions, and
   recurse while the commit still looks like a bulk optimisation.
5. Say both clones need full history.

## Artifact

`screenshot-map.yml` at the repo root — 363 entries, `shows` seeded from alt
text where a page provides one (240 of 363), area/confidence/status per entry.
The repeat-run caching idea works: with the map present, a second run only has
to recompute dates.
