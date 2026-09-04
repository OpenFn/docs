# Screenshot triage

Find the screenshots most likely to be out of date and rank them so a human
can retake them. You never retake, edit, or delete an image yourself.

By default, scan the whole repo. A ranking only means something across the
whole site. If the user names a page or section, limit the scan to the images
those pages use.

You need a clone of `OpenFn/lightning` with full history, because the whole
method is about comparing dates.

## Remembering what each image shows

Keep a file called `screenshot-map.yml` at the repo root. For each image it
records what the image shows, which UI area that maps to, and how confident
you were. Read it at the start of every run. Only classify images that are
new, renamed, or missing from the file, then add them. Dates are always
recomputed; classifications are not. This makes a repeat scan of the whole
repo cheap.

Humans can edit this file to correct a classification, and the correction
sticks. Put a short comment at the top explaining the format.

## Steps

1. **List the images.** For the whole repo, everything in `static/img/`,
   noting any image no page uses. For a page or section, only the images
   those pages link as `/img/...`.

2. **Find out how old each image is** from its last commit in this repo. If
   the last commit was a bulk optimisation that touched lots of images, look
   at the one before it.

3. **Work out what each image shows**, for images not already in
   `screenshot-map.yml`. Use the file name, the alt text, and the paragraph
   around it. Say how confident you are. Then match it to the part of the
   Lightning code that draws that screen. Roughly: the workflow
   canvas is under `assets/js/workflow-diagram`; the step editor, runs,
   credentials, and project settings each have their own folder under
   `lib/lightning_web/live/`; global styling is in `assets/css` and
   `lib/lightning_web/components`. Screenshots of other products (Kobo,
   DHIS2) have no matching code; mark them "external".

4. **Find out when that part of the UI last changed.** Take the newest commit
   touching the matching code, or the global styling, whichever is later. Skim
   the commit messages since the image was taken and keep the ones that sound
   visible to users (renamed, moved, redesigned, added a button).

5. **Flag and rank.** An image is a suspect if the UI changed after it was
   taken. Sort by the size of the gap, then by how many visible changes
   happened in it, and give pages in Get Started and Tutorials a nudge up the
   list. If you were not confident about what an image shows and it lands
   near the top, say so.

## What to report

A table with: image, page and line, image date, what it shows and your
confidence, date of the last UI change, the gap in days, and what probably
changed. List external, unused, and diagram images separately. Put the top
fifteen in the PR and collapse the rest.

Whole-repo scans are report-only apart from updating `screenshot-map.yml`.
When scoped to a page or section, you may also correct alt text that describes
an image wrongly.

## Later: taking screenshots automatically

Not built yet. Lightning already has Playwright browser tests under
`assets/test/e2e/specs/`. When those can produce screenshots, add a final
step: a mapping file that says which test reaches which screenshot, run the
test with a capture flag against a local Lightning, save the result over the
old image, and present the before-and-after in the PR as a suggestion for a
human to approve.
