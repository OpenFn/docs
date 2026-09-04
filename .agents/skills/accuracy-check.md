# Skill: Accuracy check

Verify every claim on a page against the code that implements it.

Where to look: web app, UI, API → `OpenFn/lightning` (`router.ex`,
`lib/lightning_web/live/`, `config/runtime.exs`). CLI, deploy, `project.yaml`,
job syntax → `OpenFn/kit` (`packages/cli`, `packages/deploy`,
`packages/compiler`). Adaptor functions and config → `OpenFn/adaptors`
(`packages/<name>/src/Adaptor.js`, `configuration-schema.json`). Use the
default branch unless the page names a version; record the commit.

## Process

1. Number every actionable claim: code samples, signatures, UI labels, config
   options and defaults, versions, paths, limits. Skip motivation and v1
   history callouts.
2. Check each with evidence (`repo/path:line`). Compile job samples with
   `openfn compile`. Run only read-only commands; never touch a live instance.
   If a name is missing, check `git log -S` for a rename.
3. Mark pass, fail, or uncertain. Uncertain includes deployment-specific
   values, anything needing a live system, and policy or pricing (owner: the
   product team).
4. For failures: *fix* when the right value slots into the sentence;
   *suggestion* when a paragraph must change; *question* when either side
   could be the bug.

## Generated adaptor pages

Never edit `adaptors/packages/**`. Find the JSDoc in `OpenFn/adaptors` and
draft an issue: page URL, source file and line, what docs say, what code does,
suggested JSDoc. Put it in the PR under "Upstream issues"; file only if asked.
If `adaptors/<name>.md` repeats the error, that is a normal fix.

## Output

Per page: commits checked; pass/fail/uncertain counts; a table of claims with
evidence; then findings in the shared format. Apply fixes, run Prettier and
`yarn build`.
