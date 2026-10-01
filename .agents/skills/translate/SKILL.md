---
name: translate
description:
  Translates the docs under i18n/ into each language enabled in
  docusaurus.config.js, either a set of English pages or the interface text
  (navbar, footer, sidebar headings, homepage). Respects glossary.yml,
  translation-rules.yml, each locale's house style, review status, and
  do-not-retranslate fences, and opens one PR per locale. Use when asked to
  translate or refresh translations.
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
  `sidebars-main.js`, the navbar or footer in `docusaurus.config.js`, or the
  homepage in `src/pages/` has changed. See `interface.md`.

If you are not told which task, work out which ones are needed from what has
changed in English, say so, and ask before starting.

Never translate the generated adaptor pages, the job library, the old v1 docs,
or articles and blog posts.

## Before you start

Check these five things. If any fails, stop and ask.

- The locale is enabled in `docusaurus.config.js`. Do not enable it yourself;
  that changes what gets deployed.
- `i18n/` is not in `.gitignore`.
- `glossary.yml` and `translation-rules.yml` are valid YAML.
- The locale has a house style guide, `<locale>.md`, in this folder.
- Your branch has everything on `main`. Run `git fetch origin main` and then
  `git merge-base --is-ancestor origin/main HEAD`. If it fails, the English you
  would translate is out of date, and the hashes you record will not match
  `main`. Ask to merge `main` in first. If your branch comes off another branch,
  merge `main` into that one, then that one into yours.

## How to translate

These apply to both tasks.

- Words in `glossary.yml` stay in English. For ordinary words that are also
  product terms, like "run" or "step", keep the English only when the word means
  the OpenFn thing.
- Follow the house style for the locale in `<locale>.md` in this folder, such as
  `es.md`, and any rules for the locale in `translation-rules.yml`.
- Write the way a native writer would, not word for word. Reorder or split a
  sentence when the literal version is awkward, drop a subject the sentence has
  already given, and cut an aside that repeats what the sentence says. Keep the
  meaning and the facts; change only the wording.
- Copy code blocks and inline code exactly. You may translate comments inside
  code.
- Keep the names of things in the app, like buttons, menus, tabs, and field
  labels, exactly as they are in the English. The app is English only, so a
  translated button name points the reader at a button that does not exist.

## Before you open the PR

Build the site and make sure it passes:

```bash
yarn generate-library
yarn generate-adaptors
yarn build
```

Build the whole site, not just your locale. `yarn build --locale <locale>`
builds the locale at the site root, so every correct `/es/...` link shows up as
broken.

Open one PR per locale, separate from the English PR. Translated files do not
count toward the 20-file limit, because a locale's translations are reviewed as
a set. In the PR description, say which tool and model translated the text. If
you spot a problem in the English while translating, list it in the PR
description under "Problems in the English", with the file and line. Do not fix
it in this PR.
