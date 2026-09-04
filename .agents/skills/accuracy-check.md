# Accuracy check

Go through a page and check that everything it claims is actually true in the
code.

## Where to look

- Anything about the web app, its screens, settings, or API: `OpenFn/lightning`.
- Anything about the CLI, deploying, `project.yaml`, or how job code is
  compiled: `OpenFn/kit`.
- Anything about a specific adaptor's functions or credentials:
  `OpenFn/adaptors`, under `packages/<adaptor name>/`.

Use the main branch unless the page names a version. Write down which commit
you checked against.

## Steps

1. **List the claims.** Read the page and number every statement a reader
   could act on: code samples, function names and arguments, button and menu
   names, settings and their defaults, version numbers, file paths, limits.
   Skip the motivational text and the "in v1 this used to be" notes.
2. **Check each one.** Find the code that backs it up and note the file and
   line. For job code samples, run `openfn compile` to make sure they at least
   compile. Only run commands that read; never deploy, delete, or hit a live
   OpenFn instance. If a name is missing from the code, look at the git
   history in case it was renamed.
3. **Mark each claim** pass, fail, or uncertain. Uncertain covers things you
   cannot verify from code: values set per deployment, anything that needs a
   running system, pricing, and policy. Those belong to the product team.
4. **Decide what to do about failures.** Fix it if the right value drops
   straight into the sentence (a flag name, a default, a label). Suggest it if
   the paragraph would need rewriting. Ask if you cannot tell whether the docs
   or the code is the one that is wrong, and say which you suspect.

## Generated adaptor pages

The pages under `adaptors/packages/` are built from code comments in
`OpenFn/adaptors`. Do not edit them here. Instead, find the comment in
`packages/<name>/src/` and write up an issue: the page URL, the source file
and line, what the docs say, what the code does, and the corrected comment.
Put it in the PR under "Upstream issues". Only file it if the user asked you
to.

If a hand-written overview page (`adaptors/<name>.md`) repeats the same
mistake, fix that one normally.

## What to report

For each page: the commits you checked, how many claims passed, failed, or
were uncertain, a table of the claims with their evidence, and the findings
in the standard format. Apply your fixes, run Prettier, and run `yarn build`.
