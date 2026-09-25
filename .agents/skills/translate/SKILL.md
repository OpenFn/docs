---
name: translate
description:
  Translates English docs pages into Spanish and French under i18n/, respecting
  glossary.yml, translation-rules.yml, review status, and do-not-retranslate
  fences, and opens one PR per locale. Use when asked to translate or refresh
  translations.
disable-model-invocation: true
---

# Translate

Translate English docs into Spanish (`es`) and French (`fr`). The English is
always the source of truth. Translations are generated files that live in
this repo. Save each one at the same path as the English page, under
`i18n/<locale>/docusaurus-plugin-content-docs/current/`. For example,
`docs/build/triggers.md` goes to
`i18n/es/docusaurus-plugin-content-docs/current/build/triggers.md`.
Docusaurus ignores a file anywhere else without an error, and the page stays
English.

The sidebar headings come from `sidebars-main.js`, not from the pages. If it
has new or renamed entries, run
`yarn docusaurus write-translations --locale <locale>`. This adds them to
`i18n/<locale>/docusaurus-plugin-content-docs/current.json` in English and
keeps the ones already translated. Translate the new ones.

Never translate the generated adaptor pages, the job library, the old v1
docs, or articles and blog posts.

The build pitfalls that only show up on non-default locales are written up in
`docs/contribute/translating.md`. Read it before your first translation.

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
- **The hash matches the current English file.** Skip it, whatever its
  status. The English has not changed since it was translated. The one
  exception: if `glossary.yml` or `translation-rules.yml` was committed more
  recently than the translation (compare `git log -1 --format=%ct -- <file>`),
  treat a `machine` page as if the hash no longer matches, so it picks up the
  new rules.
- **The hash no longer matches, and the status is `machine`, `needs-review`,
  or missing.** Translate the whole page again, but keep any fenced blocks
  (see below) exactly as they were.
- **The hash no longer matches, and the status is `human-reviewed`.** Leave
  the file out of the translation PR. Instead, open a separate PR for the
  named reviewer that changes only the affected parts. Recover the English the
  reviewer saw with `git cat-file -p <recorded hash>`, diff it against the
  current English, and translate only what changed. In the same PR, set
  `translation_source_hash` to the current English hash and leave the status
  as `human-reviewed`: the reviewer merging it approves it. If the old version
  is no longer in the repo, say so and offer a full retranslation in that PR
  instead.

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
- Keep the names of things in the app, like buttons, menus, tabs, and field
  labels, exactly as they are in the English. The app is English only, so a
  translated button name points the reader at a button that does not exist.
- Keep the same structure: same headings at the same levels, same lists,
  same callouts, same components.
- Keep internal links as they are in the English. Do not add `/es/` or
  `/fr/`; Docusaurus adds the locale when it builds the page.
- The one exception: a relative link like `../deploy/portability.md` breaks
  if the page it points to has no translation yet. Write it as the page's
  full address instead, like `/documentation/deploy/portability`. If the
  target page sets a `slug` in its front matter, the address is
  `/documentation` plus the slug: `slug: /api-tokens` gives
  `/documentation/api-tokens`, not the folder path.
- Give translated headings the original English anchor so existing links
  still work.

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
every fenced block survived. Then build the site and make sure it passes:

```bash
yarn generate-library
yarn generate-adaptors
yarn build
```

Build the whole site, not just your locale. `yarn build --locale <locale>`
builds the locale at the site root, so every correct `/es/...` link shows up
as broken.

Open one PR per locale, separate from the English PR. Translated files do not
count toward the 20-file limit, because a locale's translations are reviewed
as a set. In the PR description, say which tool and model translated the
pages. If you spot a problem in the English while translating, note it for
the next English pass; do not fix it here.
