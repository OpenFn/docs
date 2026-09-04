---
id: translating
title: Translating the Docs
sidebar_label: Translating Docs
---

This page covers how translation is **wired into the site**: what the config
does, where files go, and the build behaviour that will bite you. It does not
cover how to translate a page — that is the `translate` skill in
`.agents/skills/translate.md`, and the vocabulary rules live in `glossary.yml`
and `translation-rules.yml`.

Keep it that way. If you find yourself writing a terminology rule here, it
belongs in `glossary.yml` instead.

| Where                         | What it decides                             |
| ----------------------------- | ------------------------------------------- |
| `.agents/skills/translate.md` | How a page gets translated, and when        |
| `glossary.yml`                | Which terms stay in English                 |
| `translation-rules.yml`       | Locale phrasing, register, punctuation      |
| This page                     | How the site is built and served per locale |

English is always the source of truth. Translated content lives under
`i18n/<locale>/` and mirrors the English path. Anything not translated falls
back to the English page automatically, so partial coverage is a valid state —
no broken pages, no placeholders.

:::tip Current status

- `en` — source of truth, complete
- `es` — site chrome (navbar, footer, sidebar labels, homepage) plus **What is
  OpenFn?**, **Try out v2**, **Key Concepts**, and **Get Help**. Every
  translated page is `translation_review_status: machine`; none has been
  human-reviewed yet.
- `fr` — planned, not enabled

:::

## Enabling a locale

`docusaurus.config.js` declares which locales exist:

```js
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'es'],
  // ...
}
```

English is served from the site root (`/documentation/...`), Spanish from a
locale prefix (`/es/documentation/...`). A locale dropdown in the navbar
switches between them.

**Enabling a locale is a human decision, not a translation step** — it changes
what gets built and deployed. The `translate` skill checks that the locale is
already enabled and stops if it is not. Adding French means editing
`i18n.locales` and `i18n.localeConfigs`, then running
`yarn docusaurus write-translations --locale fr`.

## Where files go

The path after `current/` must match the path after `docs/` exactly:

| English source             | Spanish translation                                                  |
| -------------------------- | -------------------------------------------------------------------- |
| `docs/get-started/home.md` | `i18n/es/docusaurus-plugin-content-docs/current/get-started/home.md` |
| `docs/get-help/support.md` | `i18n/es/docusaurus-plugin-content-docs/current/get-help/support.md` |

`id` and `slug` in the front matter define the route, so they must stay
identical to the English page. `title` and `sidebar_label` get translated. The
`translation_*` keys are described in the `translate` skill; Docusaurus ignores
unknown front matter keys, so they are safe to add.

## Three things that will break the build

These are all real failures we hit enabling Spanish, and they only show up on
non-default locales — English keeps passing, which makes them confusing to
debug.

### Link to docs with site-absolute paths, not relative `.md` paths

This is already the house style in `AGENTS.md`, and i18n is why it matters. Use:

```md
[Key Concepts](/documentation/get-started/terminology)
```

not:

```md
[Key Concepts](../get-started/terminology.md)
```

Relative `.md` links only resolve when both pages come from the same content
directory. Once one is translated and the other is not, they come from different
directories — one from `i18n/es/`, the other falling back from `docs/` — and
Docusaurus cannot resolve the path. With `onBrokenLinks` set to `throw`, that
fails the build.

Four such links were converted when Spanish was added. Roughly **100 relative
`.md` links remain across ~35 pages** in `docs/`, which are house-style
violations the `lint` skill should pick up section by section. They are harmless
while both ends are English, and become build failures the moment either end is
translated.

### Translated headings need the English anchor

A heading's anchor is a link target, so translating the text silently breaks
every link pointing at it. Pin the English anchor:

```md
## Nuestros productos {#our-products}
```

Only headings whose text actually changes need this. Glossary product nouns that
stay in English (`## Work Order`, `## Run`) keep their anchors for free — the
whole of Key Concepts needed no pinning for exactly that reason.

### Sidebar items need a unique `key`

Docusaurus derives a sidebar item's translation key from its `key` if it has
one, and from its **label** otherwise, so two items sharing a label collide and
throw `Multiple docs sidebar items produce the same translation key`.

`sidebars-adaptors.js` generates one category per adaptor, each with items
labelled `Functions`, `Configuration`, `Changelog`, `README.md` and `Overview` —
about 100 collisions per label. Every generated item now carries a key
namespaced by adaptor:

```js
{
  type: 'doc',
  label: 'Overview',
  key: `${a.name}-overview`,
  id: a.name,
}
```

If you add items to a generated sidebar, give them a unique `key`.

## Interface strings

Anything that is not markdown — navbar labels, footer columns, sidebar category
names, the homepage — lives in JSON. Do not hand-write those files; generate
them:

```bash
yarn docusaurus write-translations --locale es
```

This writes new or missing keys into `i18n/es/` and **leaves existing
translations untouched**. Then fill in the `message` values:

| File                                           | What it covers                              |
| ---------------------------------------------- | ------------------------------------------- |
| `code.json`                                    | Strings from React components (`src/pages`) |
| `docusaurus-theme-classic/navbar.json`         | Navbar labels                               |
| `docusaurus-theme-classic/footer.json`         | Footer columns and links                    |
| `docusaurus-plugin-content-docs/current.json`  | Sidebar category labels, version label      |
| `docusaurus-plugin-content-blog*/options.json` | Blog and Articles SEO titles                |

Two things worth knowing about these files:

- **Only keep keys we actually own.** `@docusaurus/theme-translations` already
  ships Spanish for the theme's own strings, so `code.json` holds our
  `homepage.*` keys plus the handful of `theme.*` strings upstream has left in
  English. Copying the rest would override upstream and go stale on upgrade.
- **Leave out anything computed.** The footer copyright is built from
  `new Date().getFullYear()`, so translating it would freeze the year. It is
  omitted deliberately and falls back to the source.

:::warning After running write-translations, check your diff

`write-translations` does not know which keys we deliberately left out. It will
re-add roughly 130 `theme.*` keys to `code.json` and the footer `copyright` key,
filled in with values it read from upstream. Committing those silently takes
over maintenance of strings Docusaurus already translates for us, and freezes
the copyright year.

Keep only the keys you actually came to add. If `git diff` on `code.json` shows
more than the strings you were working on, you have picked up the inherited
ones.

:::

If you add user-facing copy to a React component, wrap it so it can be
extracted:

```jsx
import Translate, { translate } from '@docusaurus/Translate';

<h3>
  <Translate id="homepage.newsletter.title">Newsletter</Translate>
</h3>;

<input
  placeholder={translate({
    id: 'homepage.newsletter.emailPlaceholder',
    message: 'Email',
  })}
/>;
```

Always set an explicit `id`. Auto-generated ids are derived from the English
text, so they change whenever the English copy is edited and silently orphan the
translation.

## Not translated, on purpose

- **Adaptor docs** (`/adaptors/`) — generated from adaptor source repos, so
  anything written here would be overwritten.
- **The job library** — same reason.
- **The v1.105 (legacy) docs** — frozen and being sunsetted.
- **Articles and blog posts** — long-form and frequently added.

All of these fall back to English.

## Known gaps

**Search does not cover Spanish.** The site uses Algolia DocSearch with
`contextualSearch: true`, which scopes results to the language being browsed.
The crawler is only configured for the English site, so searching from a `/es/`
page returns nothing until the DocSearch crawler config is updated. Worth
resolving before the Spanish site is promoted anywhere.

**Full builds are slower.** `yarn build` builds every locale, so build time
scales with the number of languages.

## Running it locally

Build just the locale you care about:

```bash
yarn start --locale es          # dev server, Spanish only
yarn build --locale es          # production build, Spanish only
```

Plain `yarn build` builds **all** locales, which is what CI and the deploy
workflow do. Run it before opening a PR — a broken link fails the build, and the
locale-specific failures above will not show up any other way.
