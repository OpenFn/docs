# Translate

Translate English docs into Spanish (`es`) and French (`fr`). The English is
always the source of truth. Translations are generated files that live in
this repo, in the `i18n/` folder, mirroring the path of the English page.

Never translate the generated adaptor pages, the job library, or the old v1
docs.

## Before you start

Check these four things. If any fails, stop and ask.

- The English section has no unfinished fixes. Translating a page you are
  about to change is wasted work.
- The locale is enabled in `docusaurus.config.js`. Do not enable it yourself;
  that changes what gets deployed.
- `i18n/` is not in `.gitignore`.
- `glossary.yml` and `translation-rules.yml` are valid YAML.

## Front matter

Copy the English page's front matter. Translate only `title` and
`sidebar_label`. Then add:

```yaml
translation_source_hash: <the commit that last changed the English page>
translation_review_status: machine
translation_model: <the model you are running as>
```

`translation_review_status` can be `machine`, `needs-review`, or
`human-reviewed`. Only a human ever sets `human-reviewed`, and when they do
they also add `translation_reviewer` and `translation_review_date`.

## Decide what to do with each page

- **No translation yet.** Translate the whole page.
- **Translation exists, status is `machine` or `needs-review`.** Translate the
  whole page again, but keep any fenced blocks (see below) exactly as they
  were.
- **Status is `human-reviewed` and the hash matches the current English
  commit.** Skip it. It is up to date and approved.
- **Status is `human-reviewed` and the hash is older.** Do not touch the
  file. Work out what changed in the English since that hash, translate only
  those parts, and open a separate PR with the proposed diff for the named
  reviewer.

## Fenced blocks

A human can wrap part of a translation like this:

```markdown
<!-- do-not-retranslate -->
Text a reviewer has corrected by hand.
<!-- /do-not-retranslate -->
```

Copy those blocks into the new translation exactly, in the same place. If the
English they correspond to has been deleted, keep the block anyway and ask
what to do with it.

## How to translate

- Words in `glossary.yml` stay in English. For ordinary words that are also
  product terms, like "run" or "step", keep the English only when the word
  means the OpenFn thing.
- Follow any rules for the locale in `translation-rules.yml`. By default,
  Spanish uses "tú" and French uses "vous".
- Copy code blocks and inline code exactly. You may translate comments inside
  code.
- Keep the same structure: same headings at the same levels, same lists,
  same callouts, same components.
- Add the locale to internal links (`/es/documentation/...`), except links
  into the generated adaptor pages, which are English only. Give translated
  headings the original English anchor so existing links still work.

## Before you commit

Check that every glossary term appears as many times as in the English. Check
the code blocks are identical. Check the counts of headings, code blocks,
callouts, images, and tables match. Check the front matter is complete. Check
every fenced block survived. Then build that locale and make sure it passes.

Commit one locale at a time. Each translated file counts toward the 20-file
limit. If you spot a problem in the English while translating, note it for
the next English pass; do not fix it here.
