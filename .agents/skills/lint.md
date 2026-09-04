# Skill: Style and structure lint

Deterministic checks on docs markdown. Most of this needs no judgement: run
the check, apply the fix, move on. Use this skill first on any section, before
accuracy, fresh-user, or translation work.

## Inputs

- A section: a sidebar category from `sidebars-main.js`, a directory under
  `docs/`, or a single page.
- `glossary.yml` at the repo root (terminology rules).
- `style-exceptions.yml` at the repo root (findings humans have rejected).
- `sidebars-main.js` and `sidebars-adaptors.js` (for orphan detection).
- `docusaurus.config.js` (for redirects and the `onBrokenLinks: 'throw'`
  setting).

## Files you must not lint-fix

- `adaptors/packages/**` and `adaptors/library/jobs/auto/**`: generated at
  build time from `OpenFn/adaptors`. Not in git. Any issue there is an
  upstream JSDoc issue; record it and move on.
- `versioned_docs/**`: frozen v1 docs. Record findings as suggestions only.
- Any page whose front matter contains
  `translation_review_status: human-reviewed`. Record findings as a suggested
  diff only.

## Setup

```bash
yarn install --immutable
```

Then, for each check, work from a file list:

```bash
# Example: the "Write Jobs" section
FILES=$(node -e '
  const s = require("./sidebars-main.js").docs;
  const walk = (items, label) => items.flatMap(i =>
    typeof i === "string" ? (label ? [i] : []) :
    i.type === "category" ? walk(i.items, label || i.label === process.argv[1]) : []);
  console.log(walk(s, false).map(id => `docs/${id}.md`).join("\n"));
' "Write Jobs")
```

Adjust the extension to `.mdx` where the file is MDX. If a sidebar id points to
a file that does not exist with either extension, that is a **fix**: correct
the id or restore the file.

## Checks

Run every check on every file in the section. Load `style-exceptions.yml`
first and drop any finding that matches an exception (`rule` equal, file
matches `scope` glob, and `match` substring or regex present in the finding
text when `match` is set).

### 1. Terminology (`terminology`)

For each entry in `glossary.yml`:

- For every string in `variants`, search the prose (not code blocks, not
  inline code, not URLs, not front matter) for a whole-word match. Replace
  with `term`, preserving sentence-initial capitalisation and plural `s`.
  This is a **fix**.
- If `case_sensitive: true`, also flag case variants of `term` (e.g. "openfn"
  in prose). **Fix**.
- For entries with `product_noun: true`, do not flag ordinary-English use.
  Only flag variants.

Also flag "adapter" anywhere in prose regardless of glossary, since it is the
single most common error. **Fix**.

Strip code before matching:

```bash
# crude but reliable: remove fenced blocks and inline code, then grep
perl -0pe 's/```.*?```//gs; s/`[^`]*`//g' "$f" | grep -n -i -w -E 'adapter|open fn|workorder|data clip'
```

### 2. Heading hierarchy (`heading-hierarchy`, `heading-case`)

- Pages must not contain an `# H1` heading in the body. The title comes from
  front matter `title`. A body H1 is a **fix**: convert to `##` and shift its
  children down one level, unless the front matter has no `title`, in which
  case move the H1 text into `title:` and delete the heading.
- Heading levels must not skip (a `##` followed by `####`). **Fix** by
  promoting the deeper heading.
- Heading case must be consistent within a page. The repo convention is
  sentence case with product nouns capitalised ("Create or edit a Step").
  Flag a page that mixes Title Case and sentence case. Converting case is a
  **suggestion**, not a fix, because headings are link anchors and changing
  them can break inbound `#fragment` links. Exception: if you convert, grep
  the repo for the old anchor first and update every reference in the same
  change; then it is a **fix**.
- Duplicate heading text within one page produces duplicate anchors. **Fix**
  by making the second unique, then update any in-page links to it.

```bash
grep -n -E '^#{1,6} ' "$f"
```

### 3. Internal links (`internal-link`)

Extract every `](...)` and `href="..."` target that starts with `/`, `./`,
`../`, or `#`.

- Site-absolute links (`/documentation/...`, `/adaptors/...`, `/articles/...`)
  must resolve to an existing page id or a redirect `from` in
  `docusaurus.config.js`. Map `/documentation/<a>/<b>` to `docs/<a>/<b>.md`
  or `.mdx`, honouring `slug:` and `id:` front matter overrides.
- Relative `.md` links must resolve on disk.
- `#fragment` links must match a heading in the target page after Docusaurus
  slugification (lower case, spaces to `-`, punctuation removed).
- Links to `/adaptors/packages/...` cannot be checked without running
  `yarn generate-adaptors`. Run it if network allows; otherwise mark
  **uncertain** and list them in the PR.

Broken internal links are a **fix** when the intended target is unambiguous
(one candidate page with matching title or slug). Otherwise a **question**.

The fastest authoritative check is the build, because `onBrokenLinks` is
`throw`:

```bash
yarn build 2>&1 | grep -A3 -i 'broken'
```

### 4. External links (`external-link`)

For every `http://` or `https://` link outside code blocks:

```bash
curl -s -o /dev/null -w '%{http_code} %{redirect_url}\n' -L --max-time 15 -A 'openfn-docs-lint' "$url"
```

- 404, 410, or connection failure on two tries five seconds apart: dead.
  Replacing a dead link is a **fix** only when the page has an obvious
  successor (a 301 target, or the same path on a renamed domain). Otherwise
  a **suggestion**: propose removal or an archive.org link.
- 403 and 429 are not dead. Mark **uncertain** and skip.
- `http://` links that respond on `https://` are a **fix**: upgrade them.
- Do not check links inside code blocks (they are examples, not references).

### 5. Orphaned pages (`orphan-page`)

A page is orphaned when its id appears in no sidebar and no other page links
to it.

```bash
# every doc id on disk
find docs -type f \( -name '*.md' -o -name '*.mdx' \) | sed -E 's|^docs/||; s|\.mdx?$||' | sort > /tmp/ids
# every id referenced in the sidebar
node -e 'console.log(JSON.stringify(require("./sidebars-main.js")))' | grep -o -E '"[a-z0-9/_.-]+"' | tr -d '"' | sort -u > /tmp/sidebar
comm -23 /tmp/ids /tmp/sidebar
```

Then, for each candidate, grep `docs/`, `articles/`, `adaptors/*.md`, and
`src/` for links to it. Honour `id:` and `slug:` overrides. A page that is
genuinely unreachable is a **suggestion** (add to sidebar, or delete), never a
fix: someone may be drafting it. Note in the PR whether the page looks
finished.

Pages under `versioned_docs/` are checked against
`versioned_sidebars/version-legacy-sidebars.json`, and findings are
suggestions only.

### 6. Front matter (`frontmatter`)

Every page in `docs/` and `adaptors/*.md` must have YAML front matter with at
least `title`. **Fix** a missing `title` by using the body H1 (then remove the
H1) or, failing that, the file name in sentence case (record the invented
title as a **suggestion** so a human confirms it).

Every page under `i18n/**` must have all five translation fields:
`translation_source_hash`, `translation_review_status`, `translation_model`,
and, when status is `human-reviewed`, `translation_reviewer` and
`translation_review_date`. A missing field on a translated page is a
**question** unless the translate skill is about to regenerate the page.

Front matter must parse as YAML. Unquoted values containing `:` are the usual
cause of failure. **Fix** by quoting.

### 7. Code block language tags (`code-language`)

Every fenced code block must have a language after the opening fence.

```bash
awk '/^```/{ if (open) { open=0 } else { open=1; if ($0 ~ /^```\s*$/) print FILENAME":"NR": untagged fence" } }' "$f"
```

Infer the language from content and add it. Use these tags: `js` for job
code and JavaScript, `json`, `yaml`, `bash` for shell commands, `text` for
console output, logs, and anything else. This is a **fix**. If you cannot
tell what the block is, tag it `text`.

### 8. Image alt text (`image-alt`)

Every `![...](...)` must have non-empty alt text that describes what the
image shows, not "image" or "screenshot". Every `<img>` must have a
non-empty `alt` attribute.

- Empty alt: **fix**. Write alt text from the surrounding paragraph and the
  file name (`anatomy_of_step.webp` next to "A Step includes these key
  components" becomes "Diagram of a Step showing its name, adaptor, credential,
  and job expression").
- Alt text that is only "image", "screenshot", "img", or the file name:
  **fix** the same way.
- Image path that does not exist under `static/` (for `/img/...` paths) or
  relative to the page: **fix** if there is exactly one file with the same
  base name under `static/img/`; otherwise **question**.

### 9. Admonition spacing (`admonition-spacing`)

`:::tip`, `:::note`, `:::info`, `:::warning`, `:::caution`, and `:::danger`
blocks need a blank line after the opening line and before the closing `:::`,
or MDX renders them wrong. **Fix**.

## Applying fixes

- Apply fixes with minimal edits. Do not reflow paragraphs by hand; run
  Prettier afterwards and let it wrap at 80 columns:

  ```bash
  npx prettier --write <changed files>
  ```

- Do not touch a line for any reason other than the finding.
- After all fixes, run `yarn build` (or `yarn start-offline` when offline) and
  confirm zero broken-link errors and zero MDX compile errors.

## Output

A list of findings in the shared format:

```
[fix|suggestion|question] <file>:<line> — <rule> — <what is wrong> — <what was done or proposed>
```

Group by rule, then by file. Fixes were applied and go under "What changed" in
the PR. Suggestions go under "Suggestions (not applied)" with the proposed
text. Questions go under "Questions". Uncertain external links go under
"Questions" as a single bullet listing the URLs.

Report counts at the top:

```
Files checked: N. Fixes applied: N. Suggestions: N. Questions: N. Suppressed by style-exceptions.yml: N.
```

## When a human rejects one of your fixes

That is a signal for the corrections-capture skill
(`.agents/skills/corrections-capture.md`). Do not argue in the PR. Record the
exception so it is not raised again.
