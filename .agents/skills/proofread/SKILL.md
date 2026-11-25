---
name: proofread
description:
  Fixes basic typos in English docs pages without asking (spelling, doubled
  words, punctuation, stray characters, admonition syntax) and reports anything
  else that looks wrong. Never changes meaning, code, links, or app names. Does
  not commit or open a PR. Use before translating, after editing a page, or to
  sweep a section for typos.
---

# Proofread

Fix basic typos in English pages in `docs/`, and report the rest. The scope is
one page, one folder under `docs/`, or one sidebar category. With no scope,
proofread the pages this branch changes. Never proofread `adaptors/packages/` or
anything in `i18n/`.

A fix here is safe to make without asking because it cannot change what a page
says. Anything that could goes to a person.

## Fix without asking

- A misspelled word, or a word written twice.
- A missing full stop, a doubled punctuation mark, or an unmatched bracket or
  quote.
- British spellings and "adapter", which `STYLE.md` rules out, except in code or
  names.
- A stray character, or an admonition written against `STYLE.md`: `::: tip` for
  `:::tip`, a closing `:::note` for `:::`, or a missing blank line inside the
  colons. Report an admonition with no closing `:::`, since where it ends
  changes what it holds.

Change only the characters that are wrong, so the diff shows just the fix.

## Never touch

- Code blocks, inline code, link targets, and numbers. A typo in link text is
  fine to fix.
- The names of things in the app, even when they look misspelled. Check the
  English in the Lightning code (see `AGENTS.md`) before you report one.
- Front matter.

Never delete a line, even one that looks like a mistake. A line that seems out
of place in an example may be there on purpose.

## Report the rest

Anything else that looks wrong goes in the report, not the page: an unclear
sentence, a wrong fact, a broken rule in `STYLE.md`, or an app name in the wrong
form.

## Finish

Do not run Prettier; whoever commits the fixes formats them first. Report in the
chat, in this order, placing each item by its page URL (such as
`http://localhost:3000/documentation/build/triggers`) and section heading:

1. **Needs a decision.** The sentence in full, what looks wrong, and the fix you
   would make.
2. **Fixed.** Each sentence before and after, in full, with the changed words in
   bold.
3. **Translations affected.** Translated pages of the pages you changed. They
   show as stale in `translate/status.js` until the next `/translate`, which
   usually only needs to update their hash.

Do not commit or open a PR. When you were called by another skill, return the
report to it. To open a PR from a sweep, follow "Finish" in
`update-content/SKILL.md`, with only the proofreading fixes in it.
