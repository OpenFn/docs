# Skill: Lint

Deterministic checks on a docs section. Run first. Load `glossary.yml` and
`style-exceptions.yml`; skip findings matching an exception. Never touch
generated adaptor pages, `versioned_docs/`, or human-reviewed translations.

Check prose only (not code, URLs, or front matter):

1. **Terminology**: replace glossary `variants` with `term`; always fix
   "adapter" → "adaptor". *Fix.*
2. **Headings**: no body H1, no skipped levels, no duplicates. *Fix.* Mixed
   case is a *suggestion* (headings are anchors).
3. **Internal links**: must resolve. `yarn build` is authoritative
   (`onBrokenLinks: throw`). *Fix* if the target is obvious, else *question*.
4. **External links**: 404/410 after two tries is dead. *Fix* if there is a
   clear successor, else *suggestion*. 403/429 are uncertain, not dead.
5. **Orphans**: pages in no sidebar and linked from nowhere. *Suggestion.*
6. **Front matter**: valid YAML with `title`. *Fix* from the body H1.
7. **Code fences**: need a language (`js`, `json`, `yaml`, `bash`, `text`). *Fix.*
8. **Alt text**: must describe the image, not "screenshot". *Fix* from context.
9. **Admonitions**: blank line inside both `:::` fences. *Fix.*

Change only the offending line. Run Prettier, then `yarn build`, before
committing.

Output: counts, then one line per finding in the shared format. If a human
rejects a fix, hand it to `corrections-capture.md`.
