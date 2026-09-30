# Translate the interface text

Read `SKILL.md` first. It has the checks to run before you start, the
translation rules, and how to build and open the PR.

The navbar, footer, sidebar headings, and homepage are not pages. Their text
lives in JSON files under `i18n/<locale>/`. Create or update them with:

```bash
yarn docusaurus write-translations --locale <locale>
```

This adds new entries in English and keeps the ones already translated.
Translate the `message` value of each new entry. Leave the keys and
`description` values alone.

It writes more than we want. Keep only these:

| File                                          | Keep                                                                       |
| --------------------------------------------- | -------------------------------------------------------------------------- |
| `code.json`                                   | The `homepage.*` entries                                                   |
| `docusaurus-theme-classic/navbar.json`        | Everything. Leave `title` and `logo.alt` as `OpenFn`                       |
| `docusaurus-theme-classic/footer.json`        | Everything except `copyright`                                              |
| `docusaurus-plugin-content-docs/current.json` | Everything. These are the sidebar headings. Leave `version.label` as it is |

Remove the rest before you commit:

- The `theme.*` entries in `code.json`. Docusaurus already ships them
  translated, and a copy here would override theirs and go stale when Docusaurus
  is upgraded.
- The `copyright` entry in `footer.json`. The site works out the year when it
  builds, and a translated copy would freeze it.
- Every other file: the adaptor sidebar
  (`docusaurus-plugin-content-docs-adaptors/`), the old v1 docs
  (`version-legacy.json`), and blog and articles
  (`docusaurus-plugin-content-blog*/`). Those stay in English.

Then build and open the PR as `SKILL.md` describes.
