# Gap analysis

Work out what a section of the docs should cover but does not. Produce a
ranked list. Do not write the missing pages unless you are asked to.

## Steps

1. **List what the docs cover.** For every page in the section, note what it
   explains, using the headings and tables. Also note where it links out to
   other sections, and check those pages exist.

2. **List what the product has.** Look at the part of the code that matches
   the section. For the web app, that is the routes and screens in
   `OpenFn/lightning`. For the CLI, read `packages/cli/src/cli.ts` and
   `commands.ts` in `OpenFn/kit`; that is where commands are registered, and
   it shows things `--help` hides. Use `openfn --help` only as a fallback if
   the CLI happens to be installed. For job writing, look at what
   `packages/common` exports in `OpenFn/adaptors`. For deployment, read
   `DEPLOYMENT.md` and the runtime config in Lightning.

   If you cannot reach the repo you need, say so in the report and skip that
   part. Do not fill the gap from memory.

3. **Compare the two lists.** Before you call anything a gap, search the
   whole docs folder, the articles, and the adaptor overviews. It might be
   documented somewhere else. Search for the thing as a user would type it,
   not the bare noun: "openfn metadata" settles the question in one hit,
   while "metadata" matches twenty pages of ordinary prose. Label each gap
   as one of:
   - **Missing page**: nothing in the docs mentions it.
   - **Partial page**: the right page exists but does not cover this.
   - **Misplaced**: it is documented, but not where a user would look.
   - **Stale**: it describes an old version. Hand these to the accuracy check.

   Also note anything the docs describe that the product no longer has.

4. **Look for user evidence**, if you have access to it: issues on the docs
   repo, the community forum, support channels, search analytics. Count how
   often a topic comes up. Do not quote anyone. If you have no access, say so,
   and do not make up demand.

5. **Rank.** Score each gap from 1 to 5 on three things: how many users it
   affects, how bad it is to be without it, and how much evidence you have
   that people want it. Add those three up; that is the impact score, and
   you sort by it. Separately, score how easy it is to write (5 means a
   paragraph, 1 means a whole tutorial) and show it in its own column. Use
   ease only to break ties. Folding it into the sum lets a trivial gap
   nobody asked for outrank a genuinely undocumented feature.

## What to report

For each gap: its label, its impact score and ease score, what is missing,
your evidence, where it should go (which file, and where in the sidebar or
which heading), and a rough outline. Put the top ten in the PR description
and collapse the rest.

The report is the deliverable. A normal run of this skill opens a PR with an
empty or near-empty diff and a long description. That is expected.

## What you may change

Only one thing: add a single sentence linking to a page that clearly already
covers the topic. Everything else is a suggestion.

Thin generated adaptor pages are not gaps here; they are code-comment issues
for `OpenFn/adaptors`. If a feature is behind a feature flag, or a command is
deliberately hidden in code (for example a CLI command with `describe:
false`), it is not a gap. Do not propose documenting it. Note it and ask the
product team if it looks like it should be public.
