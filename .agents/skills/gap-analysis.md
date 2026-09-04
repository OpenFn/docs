# Gap analysis

Work out what a section of the docs should cover but does not. Produce a
ranked list. Do not write the missing pages unless you are asked to.

## Steps

1. **List what the docs cover.** For every page in the section, note what it
   explains, using the headings and tables. Also note where it links out to
   other sections, and check those pages exist.

2. **List what the product has.** Look at the part of the code that matches
   the section. For the web app, that is the routes and screens in
   `OpenFn/lightning`. For the CLI, run `openfn --help` and look at the
   commands in `OpenFn/kit`. For job writing, look at what
   `packages/common` exports in `OpenFn/adaptors`. For deployment, read
   `DEPLOYMENT.md` and the runtime config in Lightning.

3. **Compare the two lists.** Before you call anything a gap, search the
   whole docs folder, the articles, and the adaptor overviews. It might be
   documented somewhere else. Label each gap as one of:
   - **Missing page**: nothing in the docs mentions it.
   - **Partial page**: the right page exists but does not cover this.
   - **Misplaced**: it is documented, but not where a user would look.
   - **Stale**: it describes an old version. Hand these to the accuracy check.

   Also note anything the docs describe that the product no longer has.

4. **Look for user evidence**, if you have access to it: issues on the docs
   repo, the community forum, support channels, search analytics. Count how
   often a topic comes up. Do not quote anyone. If you have no access, say so,
   and do not make up demand.

5. **Rank.** Score each gap from 1 to 5 on four things: how many users it
   affects, how bad it is to be without it, how much evidence you have that
   people want it, and how easy it is to write (5 means a paragraph, 1 means
   a whole tutorial). Add them up and sort.

## What to report

For each gap: its label, its score, what is missing, your evidence, where it
should go (which file, and where in the sidebar or which heading), and a
rough outline. Put the top ten in the PR and collapse the rest.

## What you may change

Only one thing: add a single sentence linking to a page that clearly already
covers the topic. Everything else is a suggestion.

Thin generated adaptor pages are not gaps here; they are code-comment issues
for `OpenFn/adaptors`. If a feature is behind a feature flag, do not propose
documenting it. Ask the product team instead.
