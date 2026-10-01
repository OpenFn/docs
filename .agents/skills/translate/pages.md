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
  `glossary.yml`, `translation-rules.yml`, or the locale's house style
  (`<locale>.md`) was committed more recently than a `machine` or `needs-review`
  page (compare `git log -1 --format=%ct -- <file>`), apply the new rules to it
  (see "When the rules change" below).
- **The hash no longer matches, and the status is `machine`, `needs-review`, or
  missing.** Translate only what changed (see "Updating a page" below).
- **The hash no longer matches, and the status is `human-reviewed`.** Leave the
  file out of the translation PR. Instead, open a separate PR for the named
  reviewer that changes only the affected parts. Recover the English the
  reviewer saw with `git cat-file -p <recorded hash>`, diff it against the
  current English, and translate only what changed. In the same PR, set
  `translation_source_hash` to the current English hash and leave the status as
  `human-reviewed`: the reviewer merging it approves it. If the old version is
  no longer in the repo, say so and offer a full retranslation in that PR
  instead.

## When the rules change

Do not retranslate the page. A full retranslation rewords every block, and a
reviewer can no longer see what the new rules changed.

1. See what changed in the rules since the page was last committed:

   ```bash
   git diff $(git log -1 --format=%H -- <translated page>) -- glossary.yml translation-rules.yml .agents/skills/translate/<locale>.md
   ```

2. Fix only the text that breaks a rule that was added or changed. Leave
   everything else, even wording you would now write differently.
3. Leave fenced blocks as they are. If one breaks a new rule, say so in the PR.

If nothing breaks the new rules, there is nothing to commit, and the page is
checked again on the next run. That is quick, because only the changed rules are
checked.

To retranslate a page from scratch on purpose, for example while tuning the
rules on a first section, delete it first. It then counts as having no
translation.

## Updating a page

Retranslating a whole page rewords text that has not changed, and a reviewer can
no longer see what did. So translate only the blocks whose English changed:

```bash
node .agents/skills/translate/side-by-side.js <locale> docs/<path>.md --json
```

This prints a JSON array with one entry per page. Its `blocks` are the blocks of
the current English. Each has the existing `translation` to reuse, or `null`
where the English is new or changed. Write the page as those blocks in order,
separated by blank lines: copy each reused translation exactly, and work out
each `null` block. Then update the front matter and run Prettier as usual.

A changed block usually has a `previous` field: the old English, its old
translation, and a word `diff` between the old and new English, marked
`[-removed-]` and `{+added+}`. Use the diff to decide:

- If only links, inline code, or heading anchors changed, keep the old
  translation and copy those changes into it.
- If the prose changed but the old translation already says what the new English
  says, keep it as it is. A typo fix in the English often needs nothing.
- Otherwise, translate the block. Reuse the old wording where it still fits, so
  the reviewer sees only what changed.

A block with no `previous` is new, or could not be paired with an old block.
Translate it.

Update `translation_source_hash` even if no translated text changed. It records
that the translation was checked against this English.

- A block with `fenced: true` was inside a `<!-- do-not-retranslate -->` fence.
  Put the fence back around it. If `unusedFenced` is not empty, the English a
  fenced block corresponds to has changed or gone. Keep the block and ask what
  to do with it.
- If the result has an `error`, or `aligned` is `false`, the old translation
  cannot be matched to its English. Translate the whole page again, keeping
  fenced blocks, and say so in the PR.

In the PR description, list for each page how many blocks changed and how many
of those needed new translated text.

## Reviewing

To read a translation next to the English it was translated from:

```bash
node .agents/skills/translate/side-by-side.js <locale> docs/<path>.md... > review.html
```

Add `--base <ref>`, such as `--base origin/i18n`, to highlight the blocks that
changed since the translation at that ref. Put both commands in the PR
description, with the page paths filled in.

To check a translation against the English and fix it, run `/review-translation`
in a fresh session.

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
  so fix it in the English first (see `STYLE.md`).
- Give translated headings the original English anchor so existing links still
  work. Write it after the heading as `{#anchor}`. To list the anchors for a
  page, the way Docusaurus makes them:

  ```bash
  node -e "const s=new (require('github-slugger'))();for(const l of require('fs').readFileSync(process.argv[1],'utf8').split('\n')){const m=l.match(/^#+ (.*?)(?: \{#(.+)\})?$/);if(m)console.log(m[2]||s.slug(m[1]),' ',l)}" docs/<path>.md
  ```

  Run it on the English page, not the translation. A heading that already has
  a `{#anchor}` in the English keeps that anchor.

## Check each page

Check that no fixed glossary term was translated:

```bash
node .agents/skills/translate/side-by-side.js <locale> docs/<path>.md... --check --base HEAD
```

This lists each block where a fixed term (OpenFn, Lightning, adaptor, work
order, and so on) appears fewer times in the translation than in the English.
With `--base HEAD`, it checks only blocks whose English changed since the last
commit, so a block that was already looked at is not raised again. Look at each
one. If the term was translated, put the English term back. If the sentence just
uses it fewer times, for example because Spanish drops a repeated subject, leave
it: do not add the term back to match the count. Check the code blocks are
identical. Check the counts of headings, code blocks, callouts, images, and
tables match. Check the front matter is complete. Check every fenced block
survived. Then build and open the PR as `SKILL.md` describes.
