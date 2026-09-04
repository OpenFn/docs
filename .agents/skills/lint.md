# Lint

Run this first on any section. These are mechanical checks. Most of what you
find, you can fix on the spot.

Before you start, read `glossary.yml` (the approved terms) and
`style-exceptions.yml` (things humans have told us not to flag). Skip any
finding that matches an exception.

Do not lint the generated adaptor pages, the old v1 docs, or translations
marked human-reviewed.

## What to check

Only look at prose. Ignore code blocks, URLs, and front matter.

1. **Terminology.** If a page uses a spelling listed under `variants` in the
   glossary, replace it with the approved term. Always change "adapter" to
   "adaptor". Fix. Multi-word terms can be split across a line break by
   Prettier's wrapping, so match against text with newlines collapsed to
   spaces.
2. **Headings.** No `#` headings in the body (the title comes from front
   matter). No jumping from `##` to `####`. No two headings with the same
   text. Fix. If a page mixes Title Case and sentence case, suggest a change
   rather than making it, because headings double as link anchors.
3. **Internal links.** Every link to another docs page must work. The easiest
   way to check is `yarn build`, which fails on broken links. Fix it if the
   right target is obvious. Otherwise ask.
4. **External links.** Try each one twice. A 404 or 410 means it is dead.
   Replace it if there is a clear replacement; otherwise suggest removing it.
   A 403 or 429 does not mean dead, so leave those alone and note them.
5. **Orphan pages.** A page that is not in any sidebar and not linked from
   anywhere. Suggest adding or removing it. Do not decide yourself; someone
   might be drafting it.
6. **Front matter.** Must be valid YAML and must have a `title`. If the title
   is missing, take it from the page's first heading. Fix.
7. **Code blocks.** Every fenced block needs a language: `js`, `json`,
   `yaml`, `bash`, or `text`. Fix.
8. **Alt text.** Every image needs alt text that says what the image shows.
   "Screenshot" does not count. Write it from the surrounding paragraph. Fix.
9. **Callouts.** `:::tip` and similar blocks need a blank line after the
   opening and before the closing. Fix.

## How to fix

Change only the line with the problem. When you are done, run Prettier on the
files you touched, then `yarn build`. Do not commit until both are clean.

## What to report

Give the counts (files checked, fixes, suggestions, questions), then one line
per finding in the standard format.

If a reviewer undoes one of your fixes, do not push back. Suggest they add an
entry to `style-exceptions.yml` so it is not flagged again.
