# Skill: Accuracy verification

Extract every verifiable claim from a docs page and check it against the code
that implements it. The docs describe three products in three repos; you must
look in the right one.

## Inputs

- The page (markdown source) or a section of pages.
- Read access to the product repos. Clone them into a scratch directory, not
  into this repo:

  ```bash
  SCRATCH=${SCRATCH:-/tmp/openfn-src}
  mkdir -p "$SCRATCH"
  git clone --depth 50 https://github.com/OpenFn/lightning "$SCRATCH/lightning"
  git clone --depth 50 https://github.com/OpenFn/kit "$SCRATCH/kit"
  git clone --depth 50 https://github.com/OpenFn/adaptors "$SCRATCH/adaptors"
  ```

  Check out the tag that matches what the docs describe when the page names a
  version. Otherwise use the default branch, and say so in the output.

## Where to look

| Claim is about                                        | Repo                | Start here                                                                        |
| ----------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------- |
| Web app UI, triggers, credentials, projects, runs, history, permissions, limits, API endpoints | `OpenFn/lightning`  | `lib/lightning_web/router.ex` for routes; `lib/lightning_web/live/` for pages; `lib/lightning/` for domain logic; `config/runtime.exs` for env vars; `priv/repo/migrations/` for schema |
| Webhook auth, provisioning API, workflows API         | `OpenFn/lightning`  | `lib/lightning_web/controllers/api/` (`provisioning_controller.ex`, `workflows_controller.ex`, `run_controller.ex`, ...), `lib/lightning_web/controllers/webhooks_controller.ex`, `lib/lightning/workflows/webhook_auth_method.ex` |
| CLI commands and flags                                | `OpenFn/kit`        | `packages/cli/src/commands.ts` (command list), `packages/cli/src/<command>/` (one dir per command: `deploy`, `execute`, `pull`, `docs`, `collections`, `projects`, ...), `packages/cli/src/options.ts`, `packages/cli/README.md` |
| `openfn deploy`, `project.yaml`, project spec format  | `OpenFn/kit`        | `packages/deploy/src/`, `packages/project/src/`                                   |
| Job syntax, `state`, `$` lazy operator, `fn()`, `each()`, cursors, compilation | `OpenFn/kit`        | `packages/compiler/`, `packages/runtime/`; common operations are in `OpenFn/adaptors` at `packages/common/src/` |
| Adaptor functions, configuration schema, versions     | `OpenFn/adaptors`   | `packages/<name>/src/Adaptor.js` (JSDoc), `packages/<name>/configuration-schema.json`, `packages/<name>/CHANGELOG.md`, `packages/<name>/package.json` |
| Docs site itself (build commands, contributing)       | this repo           | `package.json`, `README.md`, `.github/workflows/`                                 |

If a claim is about hosted-plan pricing, limits that are set per deployment,
roadmap, or policy, it is not verifiable from code. Mark it **uncertain** and
name Brandon's team (product) as the owner in the output. Do not guess.

## Process

### 1. Extract claims

Read the page once and list every statement a reader could act on and be
wrong about. Number them. Categories:

- **Code sample**: any fenced block the reader is meant to run or copy.
- **API behaviour**: a function, operation, endpoint, event, or command exists
  and behaves as described (signature, arguments, defaults, return shape,
  error behaviour).
- **UI behaviour**: a button, menu, page, or setting exists with the stated
  name and does the stated thing.
- **Configuration**: an option, env var, front matter key, `project.yaml`
  field, or credential schema key exists with the stated name, type, default,
  and constraints.
- **Version**: a version number, "since v2.x", "as of", "latest", or a
  compatibility statement.
- **Path or URL**: a file path, route, or link that must exist.
- **Quantity**: a limit, timeout, size, retention period, count.

Skip marketing sentences, motivation, and analogies. Skip claims inside
`:::note In OpenFn V1 ...` history callouts unless the page is a migration
page.

### 2. Check each claim

For each claim, find the implementing code and record `repo/path:line`.

**Code samples**

- Job expressions (JavaScript using adaptor operations): run them with the
  CLI against a stub state to confirm they compile and the named operations
  exist.

  ```bash
  cd "$SCRATCH" && npm i -g @openfn/cli
  echo '{"configuration":{}, "data":{}}' > state.json
  openfn compile sample.js -a <adaptor>        # must compile
  openfn sample.js -a <adaptor> -s state.json  # runs if no network call
  ```

  Where a sample needs a live system, stop at `compile` and check each
  operation's signature in the adaptor JSDoc. Confirm the described output
  matches the return shape in the code.

- Shell commands: run them where safe (`openfn --help`, `openfn <cmd> --help`)
  and compare flags to the page.
- JSON/YAML config: validate against the schema (`configuration-schema.json`
  for credentials; the `project.yaml` schema in `packages/deploy` for
  projects).
- Do not run anything that deploys, deletes, sends email, or contacts a live
  OpenFn instance.

**API and UI behaviour**

- Grep for the exact name the docs use. If it is not found, grep for
  synonyms and look at recent commits (`git log -S '<name>'`) to see whether
  it was renamed. A rename is a **fix** if the new name is unambiguous;
  otherwise a **question**.
- For Lightning UI text, search `priv/gettext/` and `lib/lightning_web/` for
  the label string. Button labels and menu names in the docs must match the
  code exactly, including capitalisation.
- For routes, confirm in `router.ex`.

**Configuration options**

- Env vars: `grep -rn "System.get_env(\"NAME\"" config/ lib/` in Lightning,
  or `process.env.NAME` in kit. Compare defaults.
- Confirm every option listed in a table exists, and note options that exist
  in code but are missing from the table (report those to the gap analysis
  skill, not as accuracy failures).

**Versions**

- Compare against `package.json` (kit, adaptors) or `mix.exs` (Lightning) on
  the default branch, and against the latest git tag. A doc that says
  "latest" and gives a stale number is a **fix** only if the page is about
  installing that version; otherwise a **suggestion** to remove the number.

**Quantities**

- Find the constant or config value. Values that are set per deployment
  (rate limits, retention, payload size) are **uncertain** unless the docs
  page is explicitly about the hosted app and the value is in
  `config/runtime.exs` defaults.

### 3. Classify

- **pass**: code matches the docs.
- **fail**: code contradicts the docs. Record expected (docs) vs actual
  (code, with path and line).
- **uncertain**: could not find the implementing code, or the behaviour is
  deployment-specific, or requires a live system to verify.

Then, for each **fail**, decide the action:

- **fix** when the correct value is in the code and the surrounding sentence
  still makes sense after the change (a flag name, a default, a menu label, a
  version, a path).
- **suggestion** when fixing requires rewriting a paragraph or the docs might
  be describing intended-but-unshipped behaviour.
- **question** when the docs and code disagree and either could be the bug.
  Say which you suspect and why.

## Generated adaptor reference pages

Pages under `adaptors/packages/` (`<name>-docs`, `<name>-configuration-schema`,
`<name>-changelog`, `<name>-readme`) are rendered at build time from JSDoc in
`OpenFn/adaptors`. Never edit them here.

When a claim on a generated page fails:

1. Locate the JSDoc block in `$SCRATCH/adaptors/packages/<name>/src/` (usually
   `Adaptor.js`). The function name in the page heading is the JSDoc
   `@function` or export name. Configuration pages come from
   `packages/<name>/configuration-schema.json`.
2. Draft an issue body in this exact shape and put it in the output under
   "Upstream issues":

   ```markdown
   ## <name> adaptor: docs for `<function>()` do not match behaviour

   **Page:** https://docs.openfn.org/adaptors/packages/<name>-docs#<anchor>
   **Source:** `packages/<name>/src/Adaptor.js` L<line> (JSDoc for `<function>`)
   **Adaptor version:** <from packages/<name>/package.json>

   ### What the docs say

   <quoted JSDoc text or rendered docs text>

   ### What the code does

   <one or two sentences, with the line reference>

   ### Suggested JSDoc change

   ```js
   /**
    * <corrected JSDoc>
    */
   ```

   Found by the docs accuracy check while reviewing <docs section>.
   ```

3. Also check whether a hand-written overview page `adaptors/<name>.md`
   repeats the same wrong claim. If it does, that copy is editable here and
   is a normal **fix**.

Do not file the issue unless the user has asked you to file issues. Draft
only.

## Output

```
Page: docs/<path>.md
Repo(s) checked: lightning@<sha>, kit@<sha>, adaptors@<sha>
Claims: N checked. Pass: N. Fail: N. Uncertain: N.

| # | Claim (short) | Category | Result | Evidence |
|---|---------------|----------|--------|----------|
| 1 | `openfn deploy` reads `project.yaml` by default | config | pass | kit/packages/deploy/src/index.ts:42 |
| 2 | Retention default is 7 days | quantity | uncertain | deployment-specific; config/runtime.exs:210 has no default |

Failures:
[fix] docs/<path>.md:L<line> — docs say "<expected>"; code does "<actual>" (repo/path:line) — changed to "<new text>"
[suggestion] ...
[question] ...

Upstream issues (OpenFn/adaptors):
<draft bodies>
```

Apply the fixes, run Prettier on changed files, and confirm `yarn build`
still passes. Hand suggestions, questions, and upstream drafts to the PR
description.
