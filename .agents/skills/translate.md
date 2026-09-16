# Translate

Translate English docs into Spanish (`es`) and French (`fr`). The English is
always the source of truth. Translations are generated files that live in
this repo, in the `i18n/` folder, mirroring the path of the English page.

Never translate the generated adaptor pages, the job library, or the old v1
docs.

## Before you start

Check these three things. If any fails, stop and ask.

- The locale is enabled in `docusaurus.config.js`. Do not enable it yourself;
  that changes what gets deployed.
- `i18n/` is not in `.gitignore`.
- `glossary.yml` and `translation-rules.yml` are valid YAML.

Translate the English page as it is on disk after any fixes and after
Prettier has run, so the hash you record matches what you translated.

## Front matter

Copy the English page's front matter. Translate only `title` and
`sidebar_label`. Then add:

```yaml
translation_source_hash: <git hash-object of the English file>
translation_review_status: machine
translation_model: <the model you are running as>
```

The hash is the content hash of the English file, from
`git hash-object docs/<path>.md`, not a commit. Commits do not survive squash
merges: a hash pointing at a commit made on a branch dangles as soon as the
branch is squashed onto main. A content hash is the same wherever the file
lives, and it answers the only question the field exists to answer: is the
English still the version this was translated from? To compare, hash the
current English file and check it against the recorded value.

`translation_review_status` can be `machine`, `needs-review`, or
`human-reviewed`. Only a human ever sets `human-reviewed`, and when they do
they also add `translation_reviewer` and `translation_review_date`.

## Decide what to do with each page

- **No translation yet.** Translate the whole page.
- **Translation exists, status is `machine` or `needs-review`.** Translate the
  whole page again, but keep any fenced blocks (see below) exactly as they
  were.
- **Translation exists but has no `translation_review_status`.** Treat it as
  `machine` and regenerate it.
- **Status is `human-reviewed` and the hash matches the current English
  file.** Skip it. It is up to date and approved.
- **Status is `human-reviewed` and the hash no longer matches.** Do not touch
  the file. Recover the English the reviewer saw with
  `git cat-file -p <recorded hash>`, diff it against the current English,
  translate only the changed parts, and open a separate PR with the proposed
  diff for the named reviewer. If the old blob is no longer in the repo,
  say so and offer a full retranslation as the suggested diff instead.

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

Check that the fixed glossary terms (the ones without `product_noun: true`,
such as OpenFn, Lightning, adaptor, webhook) appear as many times as in the
English. Product nouns like "run" and "step" are allowed to differ, since
their ordinary-English uses get translated. Before counting, join each file
into one line with single spaces: Prettier wraps prose at 80 columns, and
English and Spanish wrap at different points, so a multi-word term like "work
order" can sit across a line break in one file and not the other. Check the
code blocks are identical. Check the counts of headings, code blocks,
callouts, images, and tables match. Check the front matter is complete. Check
every fenced block survived. Then build that locale and make sure it passes.

Open one PR per locale per section, separate from the English PR. Translated
files do not count toward the 20-file limit, because a section's translations
are reviewed as a set. If you spot a problem in the English while translating,
note it for the next English pass; do not fix it here.
