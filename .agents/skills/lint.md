# Skill: Lint

Deterministic style and structure checks on docs markdown. Run this first on
any section. Most findings are fixes you apply directly.

## Inputs

- A section: a sidebar category in `sidebars-main.js`, a directory under
  `docs/`, or a single page.
- `glossary.yml` (terminology) and `style-exceptions.yml` (findings humans
  have rejected). Load both before you start. Drop any finding that matches an
  exception.

## Never lint-fix

- `adaptors/packages/**` and `adaptors/library/**`: generated from
  `OpenFn/adaptors` at build time. Record as an upstream issue.
- `versioned_docs/**`: frozen v1 docs. Suggestions only.
- Pages with `translation_review_status: human-reviewed`. Suggested diff only.

## Checks

Prose only: skip code blocks, inline code, URLs, and front matter when
matching text.

1. **Terminology.** Replace every `variants` spelling from `glossary.yml`
   with its `term`, keeping capitalisation and plurals. Flag case variants
   when `case_sensitive` is true. Skip ordinary-English uses of
   `product_noun` terms. Always fix "adapter" → "adaptor". *Fix.*
2. **Heading hierarchy.** No H1 in the body (the title comes from front
   matter). No skipped levels. No duplicate heading text in one page. *Fix.*
   Mixed heading case within a page is a *suggestion*, because headings are
   anchors; only convert if you also update every inbound `#fragment` link.
3. **Internal links.** Every `/documentation/...`, `/adaptors/...`,
   `/articles/...`, relative `.md`, and `#fragment` link must resolve. The
   build is authoritative: `onBrokenLinks` is `throw`, so run `yarn build`.
   *Fix* when the intended target is unambiguous, otherwise *question*.
4. **External links.** Check each `http(s)` link with `curl -IL`. 404 or 410
   after two tries is dead: *fix* if there is an obvious successor, else
   *suggestion*. 403 and 429 are not dead; mark uncertain. Upgrade `http://`
   to `https://` where it works.
5. **Orphaned pages.** A page in `docs/` that appears in no sidebar and is
   linked from no other page. *Suggestion* (add to sidebar or delete); never
   auto-fix, someone may be drafting it.
6. **Front matter.** Every page needs valid YAML with at least `title`.
   Translated pages also need the fields listed in `translate.md`. Missing
   `title`: *fix* from the body H1. Unparseable YAML: *fix* by quoting.
7. **Code block language.** Every fence needs a tag. Use `js`, `json`,
   `yaml`, `bash`, or `text`. *Fix.*
8. **Image alt text.** Every image needs alt text that says what it shows,
   not "image" or the file name. Write it from the surrounding paragraph.
   Missing image file: *fix* if exactly one match exists in `static/img/`,
   else *question*.
9. **Admonitions.** `:::tip` and friends need a blank line inside both
   fences. *Fix.*

## Applying fixes

- Change only the line the finding is about.
- Run `npx prettier --write` on changed files, then `yarn build` (or
  `yarn start-offline` when offline). Zero errors before you commit.

## Output

```
Files checked: N. Fixes: N. Suggestions: N. Questions: N. Suppressed: N.

[fix] docs/<path>.md:<line> — <rule> — <what was wrong> — <what you did>
[suggestion] docs/<path>.md:<line> — <rule> — <proposed change>
[question] docs/<path>.md:<line> — <rule> — <what you need to know>
```

Fixes go under "What changed" in the PR, suggestions and questions under
their own headings.

If a human later rejects one of your fixes, do not argue. Hand it to
`corrections-capture.md` so it becomes an exception.
