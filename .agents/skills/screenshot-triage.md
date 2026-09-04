# Screenshot triage

Find the screenshots most likely to be out of date and rank them so a human
can retake them. You never retake, edit, or delete an image yourself.

You need a clone of `OpenFn/lightning` with full history, because the whole
method is about comparing dates.

## Steps

1. **List the images** the section uses (they are linked as `/img/...`). For
   a whole-site triage, list everything in `static/img/` and note any image no
   page uses.

2. **Find out how old each image is** from its last commit in this repo. If
   the last commit was a bulk optimisation that touched lots of images, look
   at the one before it.

3. **Work out what each image shows.** Use the file name, the alt text, and
   the paragraph around it. Say how confident you are. Then match it to the
   part of the Lightning code that draws that screen. Roughly: the workflow
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

The only edit you may make is correcting alt text that describes the image
wrongly.

## Later: taking screenshots automatically

Not built yet. Lightning already has Playwright browser tests under
`assets/test/e2e/specs/`. When those can produce screenshots, add a final
step: a mapping file that says which test reaches which screenshot, run the
test with a capture flag against a local Lightning, save the result over the
old image, and present the before-and-after in the PR as a suggestion for a
human to approve.
