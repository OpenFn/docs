---
id: translating
title: Translating the Docs
sidebar_label: Translating Docs
---

This site is set up for translation using
[Docusaurus i18n](https://docusaurus.io/docs/i18n/introduction). English is the
source language, and **Spanish (`es`) is currently a proof of concept** — a
handful of pages are translated so we can evaluate the workflow before
committing to full coverage.

Translated content lives under `i18n/<locale>/` and mirrors the structure of the
English source. Anything that has _not_ been translated falls back to the
English page automatically, so a partially translated site is a perfectly valid
state — there are no broken pages and no placeholder content.

:::tip Current status

- `en` — source of truth, complete
- `es` — site chrome (navbar, footer, sidebar labels, homepage) plus **What is
  OpenFn?**, **Try out v2**, **Key Concepts**, and **Get Help**

:::

## How it works

`docusaurus.config.js` declares the locales:

```js
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'es'],
  // ...
}
```

English is served from the site root (`/documentation/...`) and Spanish from a
locale prefix (`/es/documentation/...`). A locale dropdown in the navbar lets
readers switch between them.

There are two separate kinds of translatable content, and they are handled
differently.

### 1. Markdown pages

Copy the English source file to the matching path under
`i18n/es/docusaurus-plugin-content-docs/current/`, then translate it in place.
The path after `current/` must match the path after `docs/` exactly:

| English source             | Spanish translation                                                  |
| -------------------------- | -------------------------------------------------------------------- |
| `docs/get-started/home.md` | `i18n/es/docusaurus-plugin-content-docs/current/get-started/home.md` |
| `docs/get-help/support.md` | `i18n/es/docusaurus-plugin-content-docs/current/get-help/support.md` |

A few rules for the front matter and body:

- **Translate** `title` and `sidebar_label`.
- **Do not change** `id` or `slug` — those define the route, and changing them
  breaks the link between the English page and its translation.
- **Leave links exactly as they are.** Site-absolute links such as
  `/documentation/deploy/options` are automatically prefixed with the locale at
  build time, so a reader on the Spanish site stays on the Spanish site.
- **Translate admonition titles** but not the directive itself:
  `:::tip Something missing?` becomes `:::tip ¿Falta algo?`.
- **Leave code blocks, JSON payloads, and sample data alone.** Readers will
  compare them against real API responses.
- **Keep image paths as-is** and translate the alt text.

### Link to docs with site-absolute paths, not relative `.md` paths

This one bites, and the build will catch it for you. Use:

```md
[Key Concepts](/documentation/get-started/terminology)
```

not:

```md
[Key Concepts](../get-started/terminology.md)
```

Relative `.md` links only resolve when the linking page and the target page come
from the **same** content directory. As soon as one of them is translated and
the other is not, they come from different directories — the translated one from
`i18n/es/`, the untranslated one falling back from `docs/` — and Docusaurus
cannot resolve the path. Because `onBrokenLinks` is set to `throw`, that fails
the build for the Spanish locale while English keeps passing, which is a
confusing thing to debug.

Site-absolute paths sidestep this entirely: they are locale-prefixed at build
time and do not care which directory either page came from.

Four such links were converted when Spanish was added — the ones that already
crossed the boundary. Roughly **100 relative `.md` links remain across ~35
pages** in `docs/`. They are harmless today because both ends of each link are
still English, but each one becomes a build failure the moment either end is
translated. Converting them in bulk is a reasonable follow-up; until then,
expect to fix a few whenever you translate a new page. The build tells you
exactly which.

### 2. Interface strings

Anything that is not markdown — navbar labels, footer columns, sidebar category
names, the homepage — lives in JSON files. Do not write those by hand; generate
them:

```bash
yarn docusaurus write-translations --locale es
```

This scans the site and writes any new or missing keys into `i18n/es/`,
**leaving existing translations untouched**. Then fill in the `message` values:

| File                                           | What it covers                              |
| ---------------------------------------------- | ------------------------------------------- |
| `code.json`                                    | Strings from React components (`src/pages`) |
| `docusaurus-theme-classic/navbar.json`         | Navbar labels                               |
| `docusaurus-theme-classic/footer.json`         | Footer columns and links                    |
| `docusaurus-plugin-content-docs/current.json`  | Sidebar category labels, version label      |
| `docusaurus-plugin-content-blog*/options.json` | Blog and Articles SEO titles                |

If you add user-facing copy to a React component, wrap it so it can be
extracted. Use `<Translate>` in JSX and `translate()` for plain strings like
placeholders and `alt` attributes:

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

The `id` is the translation key, and the child text (or `message`) is the
English default. Always set an explicit `id` — auto-generated ids are derived
from the English text, so they change whenever the English copy is edited and
silently orphan the translation.

## Translation conventions for Spanish

**OpenFn product terms stay in English.** The OpenFn interface and
`project.yaml` files are in English, so translating these nouns would leave a
reader unable to find what the docs describe:

> Project, Workflow, Trigger, Step, Job, Path, Adaptor, Credential, Work Order,
> Run, Collection, Canvas, Inspector, Input, Output

Everything around them is translated, so you get "Crear y gestionar Workflows"
rather than either extreme. Where a term first appears on a page, feel free to
gloss it in Spanish on first use.

**Status values and log output stay in English** (`failed`, `success`) because
that is what the platform displays.

Aim for regionally neutral Spanish rather than a specific national variant —
most OpenFn implementers reading these pages are in Latin America and West
Africa.

## What we deliberately have not translated

- **Adaptor docs** (`/adaptors/`) — generated from adaptor source repos, so
  translating them here would be overwritten.
- **The v1.105 (legacy) docs** — that version is being sunsetted.
- **Articles and blog posts** — long-form and frequently added.

These all fall back to English.

### Sidebar items need a unique `key`

Docusaurus derives a sidebar item's translation key from its `key` if it has
one, and from its **label** otherwise. So two items sharing a label collide, and
the build throws `Multiple docs sidebar items produce the same translation key`
— but only for non-default locales, so this stays invisible until a second
language is added.

`sidebars-adaptors.js` generates one category per adaptor, each containing items
labelled `Functions`, `Configuration`, `Changelog`, `README.md` and `Overview`.
That was ~100 collisions per label, fixed by giving every generated item an
explicit key namespaced by adaptor:

```js
{
  type: 'doc',
  label: 'Overview',
  key: `${a.name}-overview`,
  id: a.name,
}
```

If you add items to a generated sidebar, give them a unique `key`.

## Known gaps

**Search does not cover Spanish yet.** The site uses Algolia DocSearch with
`contextualSearch: true`, which scopes results to the language you are browsing
in. The crawler is still only configured for the English site, so searching from
a `/es/` page will return nothing until the DocSearch crawler config is updated
to include the Spanish routes. Worth resolving before the Spanish site is
promoted anywhere.

**Full builds are slower.** `yarn build` now builds every locale, so build time
scales with the number of languages. Use `--locale` while developing.

## Running it locally

Building every locale is slow, so during development build just the one you care
about:

```bash
yarn start --locale es          # dev server, Spanish only
yarn build --locale es          # production build, Spanish only
```

Plain `yarn build` builds **all** locales, which is what CI and the deploy
workflow do.

:::note Prettier

Translated markdown is formatted by Prettier along with everything else
(`proseWrap: always`, 80 columns). Run your editor's Prettier integration before
opening a PR.

:::

## Adding another language

1. Add the locale to `i18n.locales` and `i18n.localeConfigs` in
   `docusaurus.config.js`.
2. Run `yarn docusaurus write-translations --locale <locale>`.
3. Translate the JSON files, then copy across whichever markdown pages you want
   to cover.
4. Check that `@docusaurus/theme-translations` ships that locale. If it does,
   delete the `theme.*` keys from `code.json` so the site inherits the upstream
   translations and keeps getting improvements on upgrade — keep only the keys
   upstream has left in English.
