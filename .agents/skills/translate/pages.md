# Translate pages

Read `SKILL.md` first. It has the checks to run before you start, the
translation rules, and how to build and open the PR.

Save each translation at the same path as the English page, under
`i18n/<locale>/docusaurus-plugin-content-docs/current/`. For example,
`docs/build/triggers.md` goes to
`i18n/es/docusaurus-plugin-content-docs/current/build/triggers.md`. Docusaurus
silently ignores a file anywhere else.

Translate the English page exactly as it is on disk, so the hash you record
matches what you translated. Do not reformat it; English changes belong in their
own PR. After writing the translation, run `yarn prettier --write <files>` on
only the files you changed under `i18n/`.

## Front matter

Copy the English page's front matter. Translate only `title` and
`sidebar_label`. Then add:

```yaml
translation_source_hash: <git hash-object docs/<path>.md>
translation_review_status: machine
```

The hash is the English file's content hash, not a commit, because commits do
not survive squash merges.

`translation_review_status` is `machine` or `human-reviewed`. Only a human sets
`human-reviewed`, and adds `translation_reviewer` and `translation_review_date`
with it.

## Decide what to do with each page

- **No translation yet.** Translate the whole page. To retranslate a page from
  scratch on purpose, delete it first.
- **The hash matches the current English.** Skip it, unless the page is
  `machine` and this lists any commits:

  ```bash
  git log --oneline $(git log -1 --format=%H -- <translated page>)..HEAD -- glossary.yml translation-rules.yml .agents/skills/translate/<locale>.md
  ```

  Then see "When the rules change".

- **The hash does not match, and the status is `machine` or missing.** See
  "Updating a page".
- **The hash does not match, and the status is `human-reviewed`.** Leave it out
  of the translation PR. Open a separate PR for the named reviewer: diff the
  English they saw against the current English as in "Updating a page", and
  translate only what changed. Set the new hash and leave the status as
  `human-reviewed`; the reviewer merging it approves it. If the old English is
  no longer in the repo, say so and offer a full retranslation.
- **The English page has moved or been deleted.** Move the translation to match
  with `git mv`, or delete it. Docusaurus silently ignores a translation with no
  English page.

## When the rules change

Do not retranslate the page; a reviewer could no longer see what the rules
changed.

1. See what changed in the rules since the page was last committed:

   ```bash
   git diff $(git log -1 --format=%H -- <translated page>) -- glossary.yml translation-rules.yml .agents/skills/translate/<locale>.md
   ```

2. Fix only the text that breaks a new or changed rule. Leave everything else,
   even wording you would now write differently.

If nothing breaks the new rules, there is nothing to commit.

## Updating a page

Change only what the English changed, so the reviewer sees only that. Diff the
English the page was translated from against the current English:

```bash
git diff --word-diff <translation_source_hash> HEAD:docs/<path>.md
```

Edit the existing translation in place, block by block:

- If only links, inline code, or heading anchors changed, copy those changes
  into the translation.
- If the translation already says what the new English says, keep it. A typo fix
  often needs nothing.
- Otherwise, translate the changed text, reusing the old wording where it still
  fits.

If the recorded English is not in the repo (`git diff` fails), translate the
whole page again, keeping fenced blocks, and say so in the PR.

Update `translation_source_hash` even if no translated text changed. In the PR
description, list for each page how many blocks changed and how many needed new
text.

## Fenced blocks

A human can wrap a corrected part of a translation like this:

```markdown
<!-- do-not-retranslate -->

Text a reviewer has corrected by hand.
<!-- /do-not-retranslate -->
```

Leave fenced blocks exactly as they are, in the same place. If the English a
fenced block belongs to has changed or gone, keep the block and ask what to do
with it. If a fenced block breaks a rule, say so in the PR.

## Page rules

These are on top of the translation rules in `SKILL.md`.

- Keep the same structure: same headings at the same levels, same lists, same
  callouts, same components.
- Keep links exactly as they are in the English. Do not add `/es/`; Docusaurus
  adds it. A relative link like `../deploy/portability.md` breaks the translated
  build, so fix it in the English first (see `STYLE.md`).
- Give each translated heading its English anchor, as `{#anchor}` after the
  heading, so existing links still work. To get the anchors, let Docusaurus
  write them into a copy of the English page:

  ```bash
  cp docs/<path>.md <scratch>/page.md
  yarn docusaurus write-heading-ids . <scratch>/page.md
  ```

  It keeps the underscores from `_italic_` text in the anchor, which the site
  does not: `See _Now_` gives `see-_now_`, but the site uses `see-now`. Drop
  them.

## Check each page

```bash
node .agents/skills/translate/check-translation.js <locale> docs/<path>.md...
```

This lists blocks where a fixed glossary term appears fewer times in the
translation than in the English, or that may break a rule in
`translation-rules.yml` or `<locale>.md`. Each is a candidate. If a term was
translated, put the English back. If Spanish just uses it fewer times, for
example by dropping a repeated subject, leave it.

Then check by hand that:

- code blocks are identical to the English
- the counts of headings, code blocks, callouts, images, and tables match
- the front matter is complete
- every fenced block survived

Then build as `SKILL.md` describes, commit, and run `/review-translation` in a
fresh session.
