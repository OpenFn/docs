# Skill: Gap analysis

Compare what a section covers with what exists in the product and what users
ask. Rank the gaps. Write pages only if asked.

1. **Inventory the docs**: what each page covers, from headings and tables.
   Check that links out of the section point at pages that exist.
2. **Inventory the product** for the matching area: routes and LiveViews in
   `OpenFn/lightning`; `packages/cli/src/commands.ts` and `openfn --help` in
   `OpenFn/kit`; `packages/common/src/` exports in `OpenFn/adaptors`;
   `DEPLOYMENT.md` and `config/runtime.exs` for deployment.
3. **Diff.** Search all of `docs/`, `articles/`, and `adaptors/*.md` before
   calling something a gap. Label each: **missing page**, **partial page**
   (right page exists, item absent), **misplaced**, or **stale** (hand to
   `accuracy-check.md`). Note docs items the product no longer has.
4. **User signals**, only if accessible: `OpenFn/docs` issues, the community
   forum, support channels, search analytics. Count, do not quote. Never
   invent demand.
5. **Rank**: score 1 to 5 on reach, severity, evidence (5 repeated asks, 3
   prominent in UI, 1 code only), and effort (5 a paragraph, 1 a tutorial).
   Sum and sort.

Output per gap: label, score, what is missing, evidence, where it should live
(file, sidebar position or heading), suggested outline. Top ten in the PR;
collapse the rest.

Only *fix*: a one-sentence cross-link to a page that clearly exists.
Everything else is a *suggestion*. Thin generated adaptor pages are JSDoc
issues, not gaps. Feature-flagged behaviour is a *question* for the product
team.
