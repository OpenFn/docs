---
name: translate
description:
  Translates the docs under i18n/ into each language enabled in
  docusaurus.config.js, either a set of English pages or the interface text
  (navbar, footer, sidebar headings, homepage). Respects glossary.yml,
  translation-rules.yml, each locale's house style, review status, and
  do-not-retranslate fences, runs a review in a fresh subagent, and opens one PR
  per locale when asked. Use when asked to translate or refresh translations.
disable-model-invocation: true
---

# Translate

Translate English docs into each locale in `i18n.locales` in
`docusaurus.config.js`, other than English. The English is always the source of
truth. Translations are generated files that live in this repo, under
`i18n/<locale>/`.

There are two tasks. Each has its own file in this folder; read the one you
need.

- **`/translate pages <scope>`** translates a set of pages. The scope is one
  page, one folder under `docs/`, or one sidebar category. With no scope, it
  covers every page that needs it. See `pages.md`.
- **`/translate interface`** translates the text that is not in a page: the
  navbar, footer, sidebar headings, and homepage. Run it when
  `sidebars-main.js`, the navbar or footer in `docusaurus.config.js`, or any
  `<Translate>` text in `src/` has changed. See `interface.md`.

If you are not told which task, run `status.js` (below) with no scope. It lists
the pages that need work and whether the interface text may have changed. Say
what it found and ask before starting.

Never translate the generated adaptor pages, or articles and blog posts.

## Before you start

```bash
node .agents/skills/translate/status.js <locale> [docs/<path>...]
```

It runs the checks before translating, then lists each page in scope as missing,
stale, up to date, or orphaned, with the diff to read, the hash to record, and
the page's local URL. For a sidebar category, pass its files or folder. If a
check fails, stop and ask. Do not enable a locale yourself; that changes what
gets deployed.

Translate only English that is on `main`. If the English you are asked to
translate is on a branch that has not merged, stop and say so: its PR merges
first.

## Make the locale branch

If you are on `main`, make a branch from it. If you are on another branch, such
as a translation branch like `i18n-es`, ask whether to branch from `main` or
from that branch. Name the branch after the scope plus the locale, such as
`notifications-es`. Everything below is committed on it, and becomes one PR.

## Fix the English first

Settle the English before you translate it. A fix after translating makes the
translation stale. Follow `.agents/skills/proofread/SKILL.md` on the pages
`status.js` lists as missing or stale. Leave up-to-date pages alone; a fix there
would make their translation stale. It fixes basic typos without asking and
reports the rest.

Only those typo fixes go in the locale PR. Anything else it reports, such as a
wrong fact or an unclear sentence, needs its own English PR: list it under
"Problems in the English" and translate the English as it stands. If a problem
is bad enough that the page should not be translated until it is fixed, stop and
ask.

If the English changed, run `yarn prettier --write` on those pages and commit
them on their own, before you translate. Do not push. The fixes change the
English hashes, so run `status.js` again and use the hashes it prints now. Then
translate from the fixed English, and list every fix in the report.

Once the English is committed, leave it alone for the rest of the run. Problems
found later, such as by the review, are follow-ups for the PR description. When
the English is fixed in a later PR, the next `/translate` finds the page stale
and updates only the changed blocks.

## How to translate

These apply to both tasks.

- Terms in `glossary.yml` stay in English, unless the term lists a word for the
  locale under `locales`, such as `es: proyecto`. For ordinary words that are
  also product terms, like "run" or "step", keep the English only when the word
  means the OpenFn thing.
- Follow the house style for the locale in `<locale>.md` in this folder, such as
  `es.md`, and any rules for the locale in `translation-rules.yml`.
- Write the way a native writer would, not word for word. Reorder or split a
  sentence when the literal version is awkward, drop a subject the sentence has
  already given, and cut an aside that repeats what the sentence says. Keep the
  meaning and the facts; change only the wording.
- Copy code blocks and inline code exactly, comments included.
- Keep the names of things in the app, like buttons, menus, tabs, and field
  labels, exactly as they are in the English. The app is English only, so a
  translated button name points the reader at a button that does not exist.
- Before choosing a word for a term, search the existing translations for it, so
  the same English gets the same translation on every page.

For more than three pages, split them across subagents, two or three pages each,
grouped by folder. First read the pages for terms that have no translation yet,
such as a new feature name, and choose a word for each, so every subagent uses
the same one. Give each subagent its pages, those words, the paths to this file
and `pages.md`, and the status line for each page. Each writes its pages and
runs the check.

## Review

When the pages are written and the check is clean, commit them on the locale
branch. Do not push. Then run `/review-translation` in a new subagent, with the
English paths of the pages you just wrote as its scope, not the scope you were
given: read `.agents/skills/review-translation/SKILL.md` and pass it to a fresh
agent, not a fork. A translator is poor at spotting its own mistakes, so the
reviewer must not share your reasoning. It commits its fixes on their own, so
the translation and the review show as separate diffs.

## Build

Build once the review has committed its fixes, so the build covers them.

```bash
yarn generate-adaptors
yarn build
```

Build the whole site, not just your locale. `yarn build --locale <locale>`
builds the locale at the site root, so every correct `/es/...` link shows up as
broken. If `yarn generate-adaptors` hits GitHub's rate limit and
`adaptors/packages/` already exists, build without it. If the build fails on a
sidebar id that no longer exists, run `yarn clear` and build again.

## Report

Report in the chat, in this order. Place each item by its page URL and section
heading, not by file and line.

1. **Needs a decision.** Review items you need the user to decide, and OpenFn
   feature names you translated that are not in `glossary.yml` (with the word
   you chose). For each, give the English sentence, and the translation before
   and after, in full.
2. **Fixed.** Fixes made to the English, then fixes made by the review. The same
   format, with one line on why.
3. **Problems in the English.** What the review found in the English, left for a
   later PR.
4. **What changed.** For each page, how many blocks changed and how many needed
   new text.
5. **Page to spot-check.** The page the review fixed most, with its URL.
6. **Status.** The build result, the branch, the commits (English, translation,
   review), and what is uncommitted.

## Push and open the PR

Push and open the PR only when the user says to. Open it against the branch the
locale branch was made from. The PR holds three commits: the English fixes, the
translation, and the review. Say in the description that it includes English
fixes, so an English reviewer looks at that commit.

While only one locale is enabled, the English fixes go in the locale PR. Once
there are two, put them in their own PR first, so each locale PR does not carry
the same English commit.

Translated files do not count toward the 20-file limit, because a locale's
translations are reviewed as a set. In the PR description, say which tool and
model translated the text, and list anything left from "Needs a decision" and
"Problems in the English".
