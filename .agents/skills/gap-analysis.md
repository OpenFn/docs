# Skill: Gap analysis

Compare what a docs section covers against what exists in the product and
what users ask about. Produce a ranked list of gaps. Do not write the missing
pages unless the user asked for them.

## Inputs

- A section: a sidebar category from `sidebars-main.js` or a directory under
  `docs/`.
- The product repos, cloned to a scratch directory (see the setup block in
  `.agents/skills/accuracy-check.md`).
- Optional, only if the session has access: support channels and search
  analytics (see "Optional sources"). Never assume access; check, and say in
  the output which sources you used.

## Process

### 1. Inventory what the docs cover

For every page in the section, list the concepts, features, commands,
options, and endpoints it documents. Use the page's headings plus any tables.
Write this as a flat list of "covered items", each with the page and heading
where it lives.

```bash
grep -n -E '^#{2,4} ' docs/<section>/*.md
```

Also list every internal link the section makes to pages outside the section.
Those are things the section assumes are documented elsewhere; check that
they actually are.

### 2. Inventory what exists in the product

Pick the inventory that matches the section. Do only the relevant ones.

**Web app features (Platform sections)**: in `$SCRATCH/lightning`

```bash
# routes = user-facing pages and API endpoints
grep -n -E 'live |get |post |put |patch |delete ' lib/lightning_web/router.ex
# LiveView modules = screens
ls lib/lightning_web/live/
# feature flags and config toggles
grep -rn -E 'Application\.(get_env|fetch_env)' lib/ | grep -o -E ':[a-z_]+\]?' | sort -u
grep -n -E 'env!?\(' config/runtime.exs
```

**CLI (CLI section)**: in `$SCRATCH/kit`

```bash
grep -n -E "^\s+'?[a-z-]+'?" packages/cli/src/commands.ts | head -60   # command names
ls -d packages/cli/src/*/                                        # one dir per command
grep -rn -E "^\s+'?[a-z-]+'?:\s*\{" packages/cli/src/options.ts | head -100
npx @openfn/cli --help
```

**Job writing (Write Jobs section)**: in `$SCRATCH/adaptors/packages/common/src/`
for every exported operation, and `$SCRATCH/kit/packages/compiler/` for
syntax transformations (lazy `$` operator, `fn` wrapping, imports).

**Deployment (Deployment section)**: `$SCRATCH/lightning/DEPLOYMENT.md`,
`config/runtime.exs` env vars, `docker-compose.yml`, and the Helm or
Kubernetes manifests if present.

**Adaptors (Adaptors section)**: every `packages/<name>` in
`$SCRATCH/adaptors` should have a generated reference page. Hand-written
overview pages (`adaptors/<name>.md` in this repo) are optional; note which
of the twenty most downloaded adaptors (by `npm view @openfn/language-<name>`
or recent changelog activity) lack one.

**Migration**: compare `docs/migration/` against the v1 to v2 rename list in
`docs/get-started/terminology.md` and the migration tooling in `kit`.

### 3. Diff

For each product item with no covered item that matches:

- Check the whole `docs/` tree, `articles/`, and `adaptors/*.md` before
  declaring a gap. A feature documented in another section is a
  cross-linking gap ("page exists but this section does not point to it"),
  not a missing page.
- Distinguish:
  - **missing page**: nothing in the docs mentions the item.
  - **partial page**: a page exists and is the right home, but does not
    cover this item (a flag, an option, an edge case, an error).
  - **misplaced**: the item is documented, but in a section a user on this
    task would not look in.
  - **stale**: the item is documented for a previous version and the current
    behaviour is different (hand this to the accuracy check if it is not
    already recorded there).

Also record the inverse: covered items that no longer exist in the product.
Those are accuracy failures; note them and move on.

### 4. Optional sources

Use these only if the tools are present in the session and the user has
connected them. Never fabricate examples of user questions.

- **Community forum** (https://community.openfn.org): if you have web access,
  search the last twelve months for the section's key terms. Count threads
  per topic. A topic with three or more threads and no docs page is a
  high-impact gap.
- **Support inbox or Slack** (if a connector is present): search the same
  terms. Record the count, never the content or names of people asking.
- **Search analytics** (Algolia dashboard for index `openfn`, if
  accessible): queries with zero results or with high volume and low
  click-through that contain the section's terms.
- **GitHub issues** on `OpenFn/docs` labelled as documentation requests:
  always available via the GitHub tools. Search for the section's terms.

If none of these are accessible, say so and rank on product evidence alone.

### 5. Rank by user impact

Score each gap 1 to 5 on each of:

- **Reach**: how many users hit this. Core workflow features and the
  getting-started path are 5; niche self-hosting flags are 1 or 2.
- **Severity**: what happens without the doc. Silent data loss or a security
  misconfiguration is 5; slight inconvenience is 1.
- **Evidence**: 5 if support or forum data shows repeated asks; 3 if the
  feature is prominent in the UI or CLI help; 1 if you only found it in code.
- **Effort**: inverted. 5 if a paragraph fixes it; 1 if a whole tutorial is
  needed.

Impact = Reach + Severity + Evidence + Effort. Sort descending. Ties go to
the one with higher Severity.

## Output

```
Section: <name>, N pages, M covered items
Product inventory: lightning@<sha> (R routes, L live views), kit@<sha> (C commands), ...
Sources used: product code; GitHub issues (N matched); forum (not accessible) ...

Gaps (ranked):

1. [missing page] <title of the missing thing> — impact 17/20 (reach 5, severity 4, evidence 4, effort 4)
   What's missing: <two sentences>
   Evidence: <repo/path:line>; <forum thread count or issue link>
   Where it should live: docs/<dir>/<slug>.md, sidebar "<Category>" after "<existing page>"
   Suggested outline:
     - <H2>
       - <H3>
     - <H2>

2. [partial page] docs/<path>.md does not cover <item> — impact 14/20 (...)
   What's missing: ...
   Evidence: ...
   Where it should live: docs/<path>.md, new "## <heading>" after "## <existing heading>"
   Suggested outline: ...

3. [misplaced] ...
   Where it is: docs/<path>.md#<anchor>
   Where this section should link from: docs/<path>.md L<line>

Covered items that no longer exist in the product:
- docs/<path>.md L<line>: <item> (removed in <repo> at <commit>) → handed to accuracy check
```

Write the full list into the PR under "Gaps (ranked)". Cap the PR list at the
top ten and attach the rest as a collapsed `<details>` block.

## Actions you may take

- **fix**: adding a cross-link to an existing page from the obvious place in
  this section, when the target page clearly covers the item. One sentence,
  one link.
- Everything else is a **suggestion**. Do not create pages, sections, or
  sidebar entries unless the user asked for the gap to be filled. If they
  did, write the page following the suggested outline, add it to
  `sidebars-main.js`, and run `yarn build`.

## Do not

- Do not count generated adaptor reference pages as gaps in this repo. A
  missing or thin adaptor function description is a JSDoc gap; note it as a
  draft issue for `OpenFn/adaptors` under "Upstream issues".
- Do not invent user demand. If you have no support or analytics data, the
  Evidence score maxes at 3.
- Do not propose documenting internal, experimental, or feature-flagged
  behaviour. Check for a feature flag or `experimental` marker in the code
  before listing a feature; if present, list it as a **question** ("Is X
  meant to be public yet?") for Brandon's team rather than a gap.
