# Skill: Translate

Translate English docs into `es` and `fr`. English is canonical; translations
are generated artefacts committed to the same branch.

## Paths

| English                | Translation                                                          |
| ---------------------- | -------------------------------------------------------------------- |
| `docs/<path>.md`       | `i18n/<locale>/docusaurus-plugin-content-docs/current/<path>.md`     |
| `adaptors/<name>.md`   | `i18n/<locale>/docusaurus-plugin-content-docs-adaptors/current/<name>.md` |
| `adaptors/packages/**`, `adaptors/library/**`, `versioned_docs/**` | never translated |

## Preconditions

Stop with a *question* if any fails:

1. The English section has no open fixes from lint, accuracy, or fresh-user
   evaluation.
2. `docusaurus.config.js` lists the locale under `i18n.locales`. Do not add it
   yourself; that changes what the site builds and deploys.
3. `/i18n` is not in `.gitignore`.
4. `glossary.yml` and `translation-rules.yml` parse.

## Front matter

Keep the source page's fields (translate `title` and `sidebar_label`; leave
`id`, `slug`, `keywords` alone) and add:

```yaml
translation_source_hash: <git log -n 1 --format=%H -- docs/<path>.md>
translation_review_status: machine   # machine | human-reviewed | needs-review
translation_reviewer:                # only when human-reviewed
translation_review_date:             # only when human-reviewed
translation_model: <your model identifier>
```

Use the last commit that touched the file, not `HEAD`.

## Fences

Content between `<!-- do-not-retranslate -->` and
`<!-- /do-not-retranslate -->` is copied byte for byte into the regenerated
page at the same position. If its English counterpart was deleted, keep the
block and raise a *question*. Unclosed or nested fences: stop and ask.

## Decide the action

| Translation exists? | Status                      | Hash matches current English? | Action              |
| ------------------- | --------------------------- | ----------------------------- | ------------------- |
| no                  |                             |                               | Full translation    |
| yes                 | `machine` or `needs-review` | any                           | Regenerate, keep fences |
| yes                 | `human-reviewed`            | yes                           | Skip                |
| yes                 | `human-reviewed`            | no                            | Suggested diff      |
| yes                 | missing                     |                               | Treat as `needs-review`, raise a *question* |

## Translating

1. Load `glossary.yml` (terms with `translate: false` and `patterns` stay
   verbatim) and the matching locale's rules from `translation-rules.yml`.
   For `product_noun` terms, keep the word untranslated only where it names
   the OpenFn concept.
2. Translate prose, headings, admonition titles, table headers, alt text, and
   link text. Default register: Spanish "tú", French "vous".
3. Copy code blocks and inline code byte for byte. Translate only prose
   comments inside fenced blocks.
4. Keep Markdown and MDX structure identical: heading levels, list markers,
   admonition types, components and props.
5. Prefix internal links with `/<locale>` except links into
   `adaptors/packages/`, which are English-only. Add `{#original-anchor}` to
   translated headings so English fragment links keep working.
6. Regenerating: extract the fences first, translate the current English,
   then reinsert the fences. Keep `needs-review` status if it was set;
   otherwise `machine`.

## Suggested diff for human-reviewed pages

Never write to the file. Diff the English between the recorded hash and now,
translate only the changed hunks, and produce a patch against the current
translation that applies them and updates `translation_source_hash`. Leave
the review status fields alone. Open a separate PR titled
`translate(<locale>): suggested update for <path>` and request the
`translation_reviewer`.

## Quality checks

Any failure is a fix you make before committing:

- Every `translate: false` glossary term appears as often in the translation
  as in the source.
- Fenced code blocks, minus comment lines, are identical and in the same
  order.
- Same count of headings per level, code blocks, admonitions, images, tables.
- `yarn docusaurus build --locale <locale>` passes (broken links throw).
- All translation front matter fields present; hash is 40 hex characters.
- Every fence from the old file is present in the new one.

## Output

```
Locale: es. Pages: N. Full: N. Regenerated: N. Skipped: N. Suggested-diff PRs: N.

| Source | Action | Hash | Fences kept | Checks |
|--------|--------|------|-------------|--------|

[question] ...
```

Commit per locale: `translate(es): <section>`. Each translated file counts
toward the 20-file limit.

## Do not

- Improve the English while translating. Record it for the next English pass.
- Set `human-reviewed`. Only a human does that.
- Commit a translation that fails a quality check.
