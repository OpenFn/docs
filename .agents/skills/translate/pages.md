# Translate pages

Read `SKILL.md` first. It has the checks to run before you start, the
translation rules, and how to build and open the PR.

Save each translation at the same path as the English page, under
`i18n/<locale>/docusaurus-plugin-content-docs/current/`. For example,
`docs/build/triggers.md` goes to
`i18n/es/docusaurus-plugin-content-docs/current/build/triggers.md`. Docusaurus
ignores a file anywhere else without an error, and the page stays English.

Translate the English page exactly as it is on disk, so the hash you record
matches what you translated. Do not reformat it; English changes belong in their
own PR. After writing the translation, run `yarn prettier --write <files>` on
only the files you changed under `i18n/`.

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
English still the version this was translated from? To compare, hash the current
English file and check it against the recorded value.

`translation_review_status` can be `machine`, `needs-review`, or
`human-reviewed`. Only a human ever sets `human-reviewed`, and when they do they
also add `translation_reviewer` and `translation_review_date`.

## Decide what to do with each page

- **No translation yet.** Translate the whole page.
- **The hash matches the current English file.** Skip it, whatever its status.
  The English has not changed since it was translated. The one exception: if
  `glossary.yml` or `translation-rules.yml` was committed more recently than the
  translation (compare `git log -1 --format=%ct -- <file>`), treat a `machine`
  page as if the hash no longer matches, so it picks up the new rules.
- **The hash no longer matches, and the status is `machine`, `needs-review`, or
  missing.** Translate the whole page again, but keep any fenced blocks (see
  below) exactly as they were.
- **The hash no longer matches, and the status is `human-reviewed`.** Leave the
  file out of the translation PR. Instead, open a separate PR for the named
  reviewer that changes only the affected parts. Recover the English the
  reviewer saw with `git cat-file -p <recorded hash>`, diff it against the
  current English, and translate only what changed. In the same PR, set
  `translation_source_hash` to the current English hash and leave the status as
  `human-reviewed`: the reviewer merging it approves it. If the old version is
  no longer in the repo, say so and offer a full retranslation in that PR
  instead.

## Fenced blocks

A human can wrap part of a translation like this:

```markdown
<!-- do-not-retranslate -->

Text a reviewer has corrected by hand.
<!-- /do-not-retranslate -->
```

Copy those blocks into the new translation exactly, in the same place. If the
English they correspond to has been deleted, keep the block anyway and ask what
to do with it.

## Page rules

These are on top of the translation rules in `SKILL.md`.

- Keep the same structure: same headings at the same levels, same lists, same
  callouts, same components.
- Keep links exactly as they are in the English. Do not add the locale, like
  `/es/`; Docusaurus adds it when it builds the page. If the English has a
  relative link like `../deploy/portability.md`, it breaks the translated build,
  so fix it in the English first (see the house style in `AGENTS.md`).
- Give translated headings the original English anchor so existing links still
  work.

## Check each page

Check that the fixed glossary terms (the ones without `product_noun: true`, such
as OpenFn, Lightning, adaptor, webhook) appear as many times as in the English.
Product nouns like "run" and "step" are allowed to differ, since their
ordinary-English uses get translated. Before counting, join each file into one
line with single spaces: Prettier wraps prose at 80 columns, and English and
Spanish wrap at different points, so a multi-word term like "work order" can sit
across a line break in one file and not the other. Check the code blocks are
identical. Check the counts of headings, code blocks, callouts, images, and
tables match. Check the front matter is complete. Check every fenced block
survived. Then build and open the PR as `SKILL.md` describes.
