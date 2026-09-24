# Update content

Change docs pages and open a PR.

## What to change

- **You were given instructions.** Do what they say.
- **You were given a report from `identify-gaps.md`.** Make every Must change.
  Make Should changes where the right text is clear. Leave Could changes unless
  someone asked for them. Anything you did not do goes in the PR description
  with a reason.
- **You were only told to improve the docs.** Run `identify-gaps.md` on the
  section first, then work from its report here. One loop, one PR.

## How to change it

- Keep each edit small. Match the page's voice and structure. Do not rewrite a
  page and call it a fix.
- Only write a new page or section if the report or the person asked for it.
- If the docs and the code disagree and you cannot tell which is right, ask. Do
  not guess.

## Tidy the pages you touch

While you are on a page, fix these too:

- Terms: replace any spelling listed under `variants` in `glossary.yml` with the
  approved term. It is always "adaptor", never "adapter".
- Internal links are site-absolute (`/documentation/...`), not relative `.md`
  paths, which break the build once one end is translated.
- Front matter has a `title`, and the body has no `#` heading.
- Headings do not skip a level.
- Every fenced code block has a language.
- Every image has alt text that says what it shows.

## Finish

Stop when the section is done or you have changed 20 files, whichever comes
first. Run Prettier on the files you changed, then `yarn build`, which fails on
broken links.

Open a PR using the template in `.github/` and tick "I have used Claude Code".
Say what changed, what you left and why, and any questions. If the work came
from a report, paste the report in, collapsed.

Translations are separate. See `translate.md`.
