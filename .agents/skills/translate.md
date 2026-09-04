# Skill: Translate

Translate English docs pages into the target locales while respecting the
governance rules: glossary terms stay in English, human-reviewed pages are
never overwritten, and fenced blocks are never retranslated.

English is the canonical source. Translations are generated artefacts that
live in the same repo and branch.

## Target locales

`es` (Spanish) and `fr` (French). Add a locale only when the user asks and
`docusaurus.config.js` lists it under `i18n.locales`.

## Paths

| English source           | Translation                                                        |
| ------------------------ | ------------------------------------------------------------------ |
| `docs/<a>/<b>.md`        | `i18n/<locale>/docusaurus-plugin-content-docs/current/<a>/<b>.md`  |
| `adaptors/<name>.md`     | `i18n/<locale>/docusaurus-plugin-content-docs-adaptors/current/<name>.md` (hand-written overviews only) |
| `adaptors/packages/**`   | never translated                                                   |
| `adaptors/library/**`    | never translated                                                   |
| `articles/**`            | not in scope unless the user asks                                  |
| `versioned_docs/**`      | never translated                                                   |

Keep the same file name and extension as the source.

## Preconditions

Run these before translating anything. Stop with a **question** if any fails.

1. The English section has no open **fix** findings from lint, accuracy, or
   fresh-user evaluation. Translating a page you are about to change wastes
   the run.
2. `docusaurus.config.js` has an `i18n` block whose `locales` includes the
   target locale. If it does not, do not add it yourself: enabling a locale
   changes what `yarn build` produces and deploys. Record the question
   "Enable `<locale>` in `docusaurus.config.js` i18n config?" and stop.
3. `/i18n` is not listed in `.gitignore`. If it is, stop and ask; committed
   translations are the design, and the ignore rule contradicts it.
4. `glossary.yml` and `translation-rules.yml` parse as YAML.

## Front matter fields

Every translated page carries the source page's own front matter (translated
`title` and `sidebar_label`; untouched `id`, `slug`, `keywords`) plus:

```yaml
translation_source_hash: <full git commit SHA of the last commit that touched the English page>
translation_review_status: machine      # machine | human-reviewed | needs-review
translation_reviewer:                   # GitHub handle, only when human-reviewed
translation_review_date:                # YYYY-MM-DD, only when human-reviewed
translation_model: <model identifier you are running as, e.g. the configured model id>
```

Get the source hash with:

```bash
git log -n 1 --format=%H -- docs/<path>.md
```

Use the commit that last touched the file, not `HEAD`, so a repo-wide commit
does not invalidate every translation.

Set `translation_model` to the exact model identifier of the session (not a
marketing name). If you cannot determine it, write `unknown` and flag it.

## Inline override fences

Humans mark translated content that must survive regeneration:

```markdown
<!-- do-not-retranslate -->
Este párrafo fue corregido por un revisor humano.
<!-- /do-not-retranslate -->
```

Rules:

- Everything between the opening and closing marker, including the markers,
  is copied byte for byte into the regenerated page at the same position
  relative to the surrounding structure (same heading, same paragraph
  index).
- If the English content that the fenced block corresponds to was deleted,
  keep the fenced block and add a **question** to the PR: "Fenced block at
  L<line> has no English counterpart any more; delete or keep?"
- If a fence is unclosed, treat everything to end of file as fenced and add
  a **fix** to the PR closing the fence; do not regenerate the page until a
  human confirms.
- Nested fences are invalid. Stop and ask.

## Process, per page and per locale

### 1. Load rules

Read `glossary.yml`. Build the set of terms with `translate: false` and the
`patterns` list. Read `translation-rules.yml` and keep the rules whose
`locale` is the target or `*`.

### 2. Decide the action

```bash
SRC=docs/<path>.md
DST=i18n/<locale>/docusaurus-plugin-content-docs/current/<path>.md
SRC_HASH=$(git log -n 1 --format=%H -- "$SRC")
```

| Translation exists? | `translation_review_status` | `translation_source_hash` == `$SRC_HASH`? | Action                          |
| ------------------- | --------------------------- | ----------------------------------------- | ------------------------------- |
| no                  |                             |                                           | **A. Full translation**         |
| yes                 | `machine` or `needs-review` | any                                       | **B. Regenerate with fences**   |
| yes                 | `human-reviewed`            | yes                                       | **Skip.** Current and approved. |
| yes                 | `human-reviewed`            | no                                        | **C. Suggested diff PR**        |
| yes                 | missing or invalid          |                                           | Treat as `needs-review`; add a **question** noting the missing field |

### 3A. Full translation

1. Split the source into segments: front matter, headings, paragraphs,
   lists, tables, admonitions, code blocks, HTML/JSX blocks, images, links.
2. Translate prose segments. Rules:
   - Glossary terms and pattern matches stay verbatim, including their
     capitalisation. When a glossary entry has `product_noun: true`, keep
     the word untranslated only where it names the OpenFn concept; translate
     ordinary-English uses ("run the command" may be translated; "a Run" may
     not).
   - Apply every matching rule in `translation-rules.yml`.
   - Default register: Spanish "tú", French "vous", unless a rule says
     otherwise.
   - Translate `title`, `sidebar_label`, admonition titles (`:::tip Título`),
     table headers, image alt text, and link text.
   - Do not translate `id`, `slug`, `keywords`, heading anchors set with
     `{#anchor}`, HTML attribute names, or anything inside backticks.
   - Preserve Markdown and MDX structure exactly: same heading levels, same
     list markers, same admonition types, same `<details>`/`<Tabs>`
     components with the same props.
3. Copy code blocks (fenced and inline) byte for byte. Translate only
   comments inside fenced blocks when the block's language is `js`, `bash`,
   `yaml`, or `json` with `//` or `#` comments and the comment is prose, not
   a command. Leave string literals, keys, and identifiers alone.
4. Rewrite internal links:
   - `/documentation/...`, `/adaptors/...` and `/articles/...` become
     `/<locale>/documentation/...` etc. Docusaurus resolves them at build
     time, but explicit locale prefixes keep translated pages linking to
     translated pages. Exception: links into `adaptors/packages/...` stay
     unprefixed, because those pages are English-only.
   - Relative `.md` links stay relative (they resolve inside the locale
     tree).
   - `#fragment` anchors: Docusaurus slugifies the translated heading, so a
     translated heading changes the anchor. Either add an explicit
     `{#original-anchor}` to the translated heading (preferred; keeps
     English anchors stable across locales) or update the fragment. Do the
     former.
5. Write front matter: source fields plus the five translation fields with
   `translation_review_status: machine`.
6. Write the file at `$DST`, creating directories as needed.

### 3B. Regenerate with fences

1. Read the existing translation. Extract every
   `<!-- do-not-retranslate -->` block with its position (the nearest
   preceding heading and the paragraph index under it).
2. Perform 3A on the current English source.
3. Re-insert each fenced block at the matching position. If the position no
   longer exists, append it under the nearest surviving heading and record a
   **question**.
4. Keep `translation_review_status` as it was if it was `needs-review`;
   otherwise set `machine`. Update `translation_source_hash` and
   `translation_model`.

### 3C. Suggested diff for a human-reviewed page

Never write to `$DST`.

1. Compute the English change since the recorded hash:

   ```bash
   OLD=$(grep -m1 translation_source_hash "$DST" | awk '{print $2}')
   git diff "$OLD" "$SRC_HASH" -- "$SRC"
   ```

2. Translate only the changed or added English hunks, following 3A rules.
3. Produce a unified diff against the current `$DST` that applies those
   translated hunks at the corresponding positions and updates
   `translation_source_hash` to `$SRC_HASH`. Leave
   `translation_review_status: human-reviewed`, `translation_reviewer`, and
   `translation_review_date` untouched in the diff; the reviewer decides
   whether to keep the status.
4. Put the diff in a **separate PR** titled
   `translate(<locale>): suggested update for <path> (human-reviewed)`,
   request review from `translation_reviewer`, and reference the English
   commit range in the body. If several human-reviewed pages in the same
   section need updates, one PR for all of them is fine. Do not mix these
   diffs into the main section PR.

## Quality checks

Run on every page you wrote (3A and 3B) before committing. Any failure is a
**fix** you make now.

1. **Glossary**: every `translate: false` term that appears in the English
   prose appears the same number of times, verbatim, in the translated
   prose. Product nouns with `product_noun: true` may appear fewer times
   only if the English used the word in its ordinary sense.

   ```bash
   for t in OpenFn Lightning adaptor workflow; do
     printf '%s: %s -> %s\n' "$t" "$(grep -o -i -w "$t" "$SRC" | wc -l)" "$(grep -o -i -w "$t" "$DST" | wc -l)"
   done
   ```

2. **Code blocks**: extract all fenced blocks from source and translation;
   after stripping comment lines they must be identical, in the same order.

   ```bash
   diff <(awk '/^```/{f=!f; print; next} f && !/^\s*(\/\/|#)/' "$SRC") \
        <(awk '/^```/{f=!f; print; next} f && !/^\s*(\/\/|#)/' "$DST")
   ```

3. **Structure**: same count of headings per level, same count of fenced
   blocks, admonitions, images, and tables.

4. **Links**: every internal link in the translation resolves. Run the
   locale build:

   ```bash
   yarn docusaurus build --locale <locale>
   ```

   `onBrokenLinks: 'throw'` makes this authoritative.

5. **Front matter**: all required translation fields present, hash is 40 hex
   characters, status is one of the three allowed values, model is set.

6. **Fences**: every `<!-- do-not-retranslate -->` in the old file is
   present in the new one, byte for byte.

## Output

```
Locale: es
Pages: N. Full: N. Regenerated: N. Skipped (human-reviewed, current): N. Suggested-diff PRs: N.

| Source | Action | Source hash | Fences kept | Checks |
| ------ | ------ | ----------- | ----------- | ------ |
| docs/jobs/state.md | regenerate | a1b2c3d | 2 | pass |

Questions:
[question] i18n/es/.../state.md L40 — fenced block has no English counterpart since <hash> — keep or delete?
```

Commit translations per locale: `translate(es): <section>`. Count each
translated file toward the 20-file limit in `AGENTS.md`.

## Do not

- Do not translate generated adaptor reference pages, ever.
- Do not translate `versioned_docs/`.
- Do not "improve" the English source while translating. Record the issue as
  a finding for the next English pass.
- Do not change `translation_review_status` to `human-reviewed`. Only a
  human sets that, by hand, with their handle and the date.
- Do not commit a translation whose quality checks fail.
