# Skill: Gap analysis

Compare what a docs section covers against what exists in the product and
what users ask about. Produce a ranked list of gaps. Do not write the missing
pages unless asked.

## Inputs

- A section (sidebar category or `docs/` directory).
- Read-only clones of the product repos (see the table in
  `accuracy-check.md` for where things live).
- Optional: GitHub issues on `OpenFn/docs`, the community forum
  (community.openfn.org), support channels, and search analytics. Use only
  what the session actually has access to, and say which in the output. Never
  invent user demand.

## Process

1. **Inventory the docs.** For each page, list what it covers using headings
   and tables. Note links out of the section: those are things it assumes are
   documented elsewhere. Check that they are.
2. **Inventory the product**, choosing what matches the section:
   - Web app: routes in `router.ex`, LiveViews in `lib/lightning_web/live/`,
     env vars in `config/runtime.exs`.
   - CLI: `packages/cli/src/commands.ts` and `openfn --help`.
   - Job writing: exports of `packages/common/src/` in adaptors, transforms in
     `packages/compiler/` in kit.
   - Deployment: `DEPLOYMENT.md`, `docker-compose.yml`, `config/runtime.exs`.
   - Adaptors: hand-written overviews (`adaptors/<name>.md`) missing for
     heavily used adaptors.
3. **Diff.** For each product item with no matching docs item, search the
   whole `docs/`, `articles/`, and `adaptors/*.md` trees before calling it a
   gap. Label each gap:
   - **missing page**: nothing in the docs mentions it.
   - **partial page**: the right page exists but does not cover this item.
   - **misplaced**: documented, but not where a user on this task would look.
   - **stale**: documented for an older version. Hand to `accuracy-check.md`.

   Also note docs items that no longer exist in the product.
4. **Check user signals** if available: issues, forum threads, or support
   questions matching the section's terms. Count them; do not quote people.
5. **Rank** by scoring each gap 1 to 5 on reach (how many users hit it),
   severity (what goes wrong without it), evidence (5 with repeated user asks,
   3 if prominent in the UI or CLI, 1 if only found in code), and effort
   (5 if a paragraph fixes it, 1 if it needs a tutorial). Sum and sort.

## Output

```
Section: <name>, N pages. Product checked: lightning@<sha>, kit@<sha>.
Sources used: <list>.

1. [missing page] <title> — 17/20 (reach 5, severity 4, evidence 4, effort 4)
   Missing: <two sentences>
   Evidence: <repo/path:line>; <issue or thread count>
   Should live: docs/<dir>/<slug>.md, sidebar "<Category>" after "<page>"
   Outline: <H2 list>

2. [partial page] docs/<path>.md lacks <item> — 14/20 (...)
   Should live: new "## <heading>" after "## <existing heading>"
   Outline: ...

Docs items no longer in the product: <list, handed to accuracy check>
```

Put the top ten in the PR under "Gaps (ranked)"; collapse the rest in a
`<details>` block.

## Actions

- *Fix*: add a one-sentence cross-link when the target page clearly exists.
- Everything else is a *suggestion*. Create pages only if the user asked, and
  then add them to `sidebars-main.js` and run `yarn build`.

## Do not

- Count thin generated adaptor pages as gaps here; they are JSDoc issues for
  `OpenFn/adaptors`.
- Propose documenting feature-flagged or experimental behaviour. Raise a
  *question* for the product team instead.
