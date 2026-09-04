# Skill: Translate

Translate `docs/**` and `adaptors/*.md` into `es` and `fr`. English is
canonical. Output goes to
`i18n/<locale>/docusaurus-plugin-content-docs/current/<same path>` (adaptor
overviews: `...-content-docs-adaptors/current/`). Never translate
`adaptors/packages/**`, `adaptors/library/**`, or `versioned_docs/**`.

## Preconditions (stop with a *question* if any fails)

English section has no open fixes. `docusaurus.config.js` lists the locale
under `i18n.locales` (do not add it yourself). `/i18n` is not gitignored.
`glossary.yml` and `translation-rules.yml` parse.

## Front matter

Keep the source fields (translate `title` and `sidebar_label` only) and add:

```yaml
translation_source_hash: <git log -n 1 --format=%H -- <english file>>
translation_review_status: machine   # machine | human-reviewed | needs-review
translation_reviewer:                # human-reviewed only
translation_review_date:             # human-reviewed only
translation_model: <your model id>
```

## Action

| Exists? | Status                  | Hash current? | Action                                   |
| ------- | ----------------------- | ------------- | ---------------------------------------- |
| no      |                         |               | Full translation                         |
| yes     | machine / needs-review  | any           | Regenerate, preserving fences            |
| yes     | human-reviewed          | yes           | Skip                                     |
| yes     | human-reviewed          | no            | Translate only the changed English hunks; open a separate PR with the diff for `translation_reviewer`. Never write the file. |

Fences: content between `<!-- do-not-retranslate -->` and
`<!-- /do-not-retranslate -->` is copied byte for byte at the same position.
If its English source is gone, keep it and raise a *question*.

## Rules

- Glossary terms with `translate: false` and `patterns` stay verbatim.
  `product_noun` terms stay only where they name the OpenFn concept.
- Apply the locale's `translation-rules.yml` rules. Default: Spanish "tú",
  French "vous".
- Code blocks and inline code are copied byte for byte (prose comments may be
  translated). Markdown and MDX structure stays identical.
- Prefix internal links with `/<locale>`, except links into
  `adaptors/packages/`. Add `{#original-anchor}` to translated headings.

## Checks before committing

Glossary terms appear as often as in the source. Code blocks identical. Same
counts of headings, fences, admonitions, images, tables. All front matter
fields present. Every old fence preserved. `yarn docusaurus build --locale
<locale>` passes.

Commit per locale (`translate(es): <section>`). Each file counts toward the
20-file limit. Never set `human-reviewed`; never improve the English while
translating.
