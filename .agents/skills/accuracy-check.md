# Skill: Accuracy check

Extract every verifiable claim from a docs page and check it against the code
that implements it.

## Inputs

- The page(s) to check.
- Read-only clones of the product repos in a scratch directory (never inside
  this repo):

  | Claim is about                                            | Repo                | Start in                                                                     |
  | --------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------- |
  | Web app UI, triggers, credentials, runs, projects, API    | `OpenFn/lightning`  | `lib/lightning_web/router.ex`, `lib/lightning_web/live/`, `config/runtime.exs` |
  | CLI commands and flags, `openfn deploy`, `project.yaml`  | `OpenFn/kit`        | `packages/cli/src/`, `packages/deploy/`, `packages/project/`                  |
  | Job syntax, `state`, `fn()`, `each()`, `$` operator       | `OpenFn/kit` and `OpenFn/adaptors` | `packages/compiler/`, `packages/runtime/`; `packages/common/src/` in adaptors |
  | Adaptor functions, config schema, versions                | `OpenFn/adaptors`   | `packages/<name>/src/Adaptor.js`, `configuration-schema.json`, `package.json` |

Use the default branch unless the page names a version. Say which commit you
checked in the output.

## Process

1. **List claims.** Read the page once and number every statement a reader
   could act on and be wrong about: code samples, function or endpoint
   signatures, UI labels and menu paths, config options and defaults, version
   numbers, file paths, limits and timeouts. Skip motivation, analogies, and
   v1 history callouts.
2. **Check each claim** and record `repo/path:line` as evidence.
   - Code samples: compile job code with `openfn compile <file> -a <adaptor>`;
     run shell commands where they are read-only (`--help`). Never run anything
     that deploys, deletes, sends, or touches a live OpenFn instance.
   - Names and labels: grep for the exact string. If missing, check
     `git log -S '<name>'` for a rename.
   - Config: find the constant or `System.get_env` / `process.env` read and
     compare the default.
   - Versions: compare against `package.json` or `mix.exs` and the latest tag.
3. **Classify** each claim as pass, fail, or uncertain. Uncertain covers
   deployment-specific values (limits, retention), anything that needs a live
   system, and product policy or pricing (not verifiable from code; the owner
   is the product team).
4. **Decide the action** for each failure:
   - *Fix* when the correct value is in the code and slots into the existing
     sentence (a flag, default, label, version, path).
   - *Suggestion* when the fix needs a rewritten paragraph or the docs may
     describe intended behaviour.
   - *Question* when docs and code disagree and either could be the bug. Say
     which you suspect.

## Generated adaptor pages

Pages under `adaptors/packages/` are rendered from JSDoc in `OpenFn/adaptors`.
Never edit them here. For each failure, find the JSDoc block in
`packages/<name>/src/` and draft an issue:

```markdown
## <name>: docs for `<function>()` do not match behaviour

Page: https://docs.openfn.org/adaptors/packages/<name>-docs#<anchor>
Source: packages/<name>/src/Adaptor.js L<line>
Docs say: <quote>
Code does: <one sentence, with line reference>
Suggested JSDoc: <corrected block>
```

Put drafts under "Upstream issues" in the PR. File them only if the user asked
you to. If a hand-written overview `adaptors/<name>.md` repeats the same
error, that copy is a normal fix.

## Output

```
Page: docs/<path>.md — checked against lightning@<sha>, kit@<sha>, adaptors@<sha>
Claims: N. Pass: N. Fail: N. Uncertain: N.

| # | Claim | Result | Evidence |
|---|-------|--------|----------|

[fix] docs/<path>.md:<line> — docs say X, code does Y (repo/path:line) — changed to Z
[suggestion] ...
[question] ...
```

Apply fixes, run Prettier, confirm `yarn build` passes.
