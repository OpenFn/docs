---
name: review-translation
description:
  Checks translated docs pages against the English in a fresh session, fixes
  clear problems (changed meaning, literal phrasing, broken house style rules),
  and reports the rest. Does not commit or open a PR. Use after /translate
  pages, once the section is committed.
disable-model-invocation: true
---

# Review a translation

Run `/review-translation <scope>` in a fresh session, not the one that
translated the pages: a translator is poor at spotting its own mistakes. Commit
the translation first, so the review's fixes show up as their own diff. The
scope is the same as for `/translate pages`: one page, one folder under `docs/`,
or one sidebar category. If no scope is given, ask.

The review checks against the rules the translator followed: "How to translate"
in `.agents/skills/translate/SKILL.md`, the house style in
`.agents/skills/translate/<locale>.md`, the rules for the locale in
`translation-rules.yml`, and `glossary.yml`.

The review fixes clear problems in `machine` and `needs-review` pages and
reports the rest. It does not commit, open a PR, or add rules. Never edit a
`human-reviewed` page or a fenced block; report the problem instead.

## 1. Lay out the pages

Get each block of English next to its translation:

```bash
node .agents/skills/translate/side-by-side.js <locale> docs/<path>.md... --json
```

Then read the rules listed above.

## 2. Search for rule breaks

These need no judgement, so search for them across the whole scope rather than
reading for them:

- Run the glossary check on every block. Leave out `--base`: the translation is
  already committed, so `--base HEAD` would skip every block.

  ```bash
  node .agents/skills/translate/side-by-side.js <locale> docs/<path>.md... --check
  ```

- Every word or phrase `<locale>.md` says not to use, such as the "Not" column
  of a word table.
- Punctuation `<locale>.md` rules out, such as curly quotes.
- English terms kept from `glossary.yml` written with a capital mid-sentence, if
  `<locale>.md` says to lower-case them. Case-sensitive terms (OpenFn, Canvas,
  Inspector) and names of things in the app keep their capitals.
- Every `term` and `avoid` rule for the locale in `translation-rules.yml`.

## 3. Read each block against its English

Check that the translation:

- **Says the same thing.** Nothing added, dropped, or softened. Numbers, dates,
  limits, and "must", "should", and "can" match, and so does who does what.
- **Reads naturally.** No word-for-word phrasing, repeated subjects, stacked
  nouns, or asides that repeat the sentence.
- **Uses the right voice**, as `<locale>.md` sets it. In Spanish, watch for verb
  forms that read as "usted".
- **Keeps names of things in the app** exactly as in the English, and keeps
  links and inline code the same.
- **Is consistent across the scope.** The same English term gets the same
  translation on every page.

Do not flag wording you would only have written differently. If the English
itself is wrong or unclear, note it under "Problems in the English" and leave
the translation matching it.

## 4. Fix what is clear

Fix a block when the problem and the fix are both clear. Change only the words
that are wrong, so the diff shows just the fix. Leave the front matter alone.
Then run `yarn prettier --write <files>` on the pages you changed, and run the
glossary check again.

## 5. Report

Report in the chat, grouped like this, with the file and line for each item:

- **Fixed.** Before and after, and why, one line each.
- **Needs a decision.** Problems you were not sure how to fix, or where the fix
  changes meaning.
- **Problems in the English.**
- **Suggested rules.** A problem found on more than one page, or likely to come
  back in later sections, with the line you would add to `<locale>.md` or
  `translation-rules.yml`. Add it only if asked.
- **Page to spot-check.** The page with the most fixes, and the command to open
  it side by side:

  ```bash
  node .agents/skills/translate/side-by-side.js <locale> docs/<path>.md > review.html
  ```

## Marking a page human-reviewed

Only a person who reads the language well marks a page `human-reviewed`. It
means they checked the meaning against the English, not only that the
translation reads well: a page can read perfectly and still say something
different. Using `review.html`, they check every block for the points in step 3,
fix what is wrong, and then set in the front matter:

```yaml
translation_review_status: human-reviewed
translation_reviewer: <GitHub handle>
translation_review_date: <YYYY-MM-DD>
```

A fix that would apply to other pages goes into `<locale>.md` or
`translation-rules.yml` too. A `human-reviewed` page is never retranslated in
full again; changes to its English come to the reviewer as a separate PR.
