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

`translation_review_status` can be `machine`, `needs-review`, or
`human-reviewed`. Only a human sets `human-reviewed`, and adds
`translation_reviewer` and `translation_review_date` with it.

## Decide what to do with each page

- **No translation yet.** Translate the whole page. To retranslate a page from
  scratch on purpose, delete it first.
- **The hash matches the current English.** Skip it, unless the page is
  `machine` or `needs-review` and this lists any commits:

  ```bash
  git log --oneline $(git log -1 --format=%H -- <translated page>)..HEAD -- glossary.yml translation-rules.yml .agents/skills/translate/<locale>.md
  ```

  Then see "When the rules change".
- **The hash does not match, and the status is `machine`, `needs-review`, or
  missing.** See "Updating a page".
- **The hash does not match, and the status is `human-reviewed`.** Leave it out
  of the translation PR. Open a separate PR for the named reviewer: recover the
  English they saw with `git cat-file -p <recorded hash>`, diff it against the
  current English, and translate only what changed. Set the new hash and leave
  the status as `human-reviewed`; the reviewer merging it approves it. If the
  old English is no longer in the repo, say so and offer a full retranslation.

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

Translate only the blocks whose English changed, so the reviewer sees only what
changed:

```bash
node .agents/skills/translate/side-by-side.js <locale> docs/<path>.md --json
```

Each page's `blocks` are the blocks of the current English, each with the
`translation` to reuse, or `null` where the English is new or changed. Write the
page as those blocks in order, separated by blank lines: copy each reused
translation exactly, and work out each `null` block.

A changed block usually has a `previous` field: the old English, its old
translation, and a word `diff` marked `[-removed-]` and `{+added+}`.

- If only links, inline code, or heading anchors changed, copy those changes
  into the old translation.
- If the old translation already says what the new English says, keep it. A typo
  fix often needs nothing.
- Otherwise, translate the block, reusing the old wording where it still fits.

A block with no `previous` is new. Translate it.

If the result has an `error`, or `aligned` is `false`, the old translation
cannot be matched to its English. Translate the whole page again, keeping fenced
blocks, and say so in the PR.

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

Copy fenced blocks exactly, in the same place. In the `--json` output they have
`fenced: true`; put the fence back around them. If `unusedFenced` is not empty,
the English a fenced block belongs to has changed or gone: keep the block and
ask what to do with it. If a fenced block breaks a rule, say so in the PR.

## Page rules

These are on top of the translation rules in `SKILL.md`.

- Keep the same structure: same headings at the same levels, same lists, same
  callouts, same components.
- Keep links exactly as they are in the English. Do not add `/es/`; Docusaurus
  adds it. A relative link like `../deploy/portability.md` breaks the translated
  build, so fix it in the English first (see `STYLE.md`).
- Give each translated heading its English anchor, as `{#anchor}` after the
  heading, so existing links still work. To list the anchors, run this on the
  English page:

  ```bash
  node -e "const s=new (require('github-slugger'))();for(const l of require('fs').readFileSync(process.argv[1],'utf8').split('\n')){const m=l.match(/^#+ (.*?)(?: \{#(.+)\})?$/);if(m)console.log(m[2]||s.slug(m[1]),' ',l)}" docs/<path>.md
  ```

## Check each page

```bash
node .agents/skills/translate/side-by-side.js <locale> docs/<path>.md... --check
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
