---
sidebar_label: Unit Testing Jobs
title: Writing unit tests for your jobs
---

Most job code is glue: fetch some records, reshape them, send them somewhere
else. But the reshaping bit often grows into real logic - parsing an SMS string
into a structured record, mapping local codes onto DHIS2 data elements,
normalising a dozen date formats into one.

That logic deserves tests. This guide shows you how to write them.

:::info Requirements

You need **`@openfn/cli` v1.39.0 or later**, which is when `openfn compile`
gained the ability to write compiled job code to disk. Check your version with
`openfn -v`, and upgrade with `npm install -g @openfn/cli`.

:::

## Why you need to compile first

Job expressions are not valid JavaScript. A step like this:

```js
export const parseSms = text => text.split('#');

fn(state => ({ ...state, data: state.data.map(parseSms) }));
```

...can't be imported into a test runner. There is no `import` for `fn`, and the
bare `fn(...)` call at the top level would execute on import even if there were.
See [Compilation](/documentation/jobs/compilation) for the full explanation.

`openfn compile` turns job expressions into ordinary ES modules on disk. Once
that's done, your test runner can import them like any other JavaScript.

## What you can and can't unit test

|                                                        | Unit testable?                              |
| ------------------------------------------------------ | ------------------------------------------- |
| Pure helper functions you wrote (`parseSms`, `toFhir`) | **Yes** - this is what this guide covers    |
| Operations (`fn`, `get`, `each`, `create`)             | No - they need a runtime and a state object |
| A whole step, end to end                               | No - run it with the CLI instead            |
| A whole workflow                                       | No - run it with the CLI instead            |

Operations are stripped out during compilation, so there is nothing left to
import. To exercise a whole step or workflow, run it with
`openfn path/to/workflow.yaml -s input.json` and inspect the output state.

The trick, then, is to **move your logic out of operations and into functions**,
and then test the functions.

## Step 1: Export any helper you want to test

This is the most important thing on this page.

When you compile with `--exports-only`, the compiler keeps **only exported
declarations**. Everything else - operations, plain `const`s, plain
`function`s - is dropped.

So a helper you want to test must be exported:

```js title="Before - not testable"
const FIELDS = ['id', 'name', 'dob'];

const parseSms = text =>
  Object.fromEntries(FIELDS.map((f, i) => [f, text.split('#')[i]]));

fn(state => ({ ...state, data: state.data.messages.map(parseSms) }));
```

```js title="After - testable"
export const FIELDS = ['id', 'name', 'dob'];

export const parseSms = text =>
  Object.fromEntries(FIELDS.map((f, i) => [f, text.split('#')[i]]));

fn(state => ({ ...state, data: state.data.messages.map(parseSms) }));
```

The job runs identically either way - `export` is a no-op at runtime. It only
changes what survives compilation.

:::warning Export the things your helpers depend on, too

Stripping is per-declaration, not "everything `parseSms` touches". If you export
`parseSms` but leave `const FIELDS` unexported, `FIELDS` is dropped and your
test fails at call time with:

```
ReferenceError: FIELDS is not defined
```

This is easy to miss because the compile step succeeds and the import succeeds.
If a helper references a module-level constant, export that constant as well.

:::

## Step 2: Compile your workflows

From your project root (the folder with `openfn.yaml`):

```bash
openfn compile --exports-only
```

```
[CLI] ✔ Compiled 1 step(s) to /path/to/project/dist
```

Compiled files land in `dist/`, mirroring your workflow structure:

```
workflows/
  sms-intake/
    sms-intake.yaml
    parse-message.js      # source
    upload.js
dist/
  sms-intake/
    parse-message.mjs     # compiled
```

Two things to note:

- **Output files use the `.mjs` extension.** Node always treats `.mjs` as an ES
  module, so you don't need `"type": "module"` in your `package.json` for the
  compiled code to import cleanly.
- **`upload.js` produced no file.** Steps whose compiled output is empty after
  stripping - which is any step that is only operations - are skipped entirely.
  See [Troubleshooting](#troubleshooting) below.

Other useful flags:

```bash
# Write somewhere other than dist/
openfn compile --exports-only -o build

# Wipe the output folder first
openfn compile --exports-only --clean

# Just one workflow, by name
openfn compile sms-intake --exports-only

# Print to stdout instead of writing files (handy for a quick look)
openfn compile workflows/sms-intake/parse-message.js --exports-only -O

# Compile a project in another directory
openfn compile --exports-only --workspace ../other-project
```

You can also set the output folder permanently in `openfn.yaml`:

```yaml title="openfn.yaml"
dirs:
  workflows: workflows
  compiled: dist
```

## Step 3: Write a test

Here's the whole loop, end to end.

### The source

```js title="workflows/sms-intake/parse-message.js"
export const FIELDS = ['id', 'name', 'dob', 'weight'];

export const parseSms = text => {
  const parts = text.trim().split('#');
  return FIELDS.reduce((record, field, i) => {
    record[field] = parts[i]?.trim() ?? null;
    return record;
  }, {});
};

fn(state => ({
  ...state,
  data: state.data.messages.map(parseSms),
}));
```

### The compiled output

After `openfn compile --exports-only`:

```js title="dist/sms-intake/parse-message.mjs"
export const FIELDS = ['id', 'name', 'dob', 'weight'];

export const parseSms = text => {
  const parts = text.trim().split('#');
  return FIELDS.reduce((record, field, i) => {
    record[field] = parts[i]?.trim() ?? null;
    return record;
  }, {});
};
```

The `fn(...)` operation is gone. Both exports survived.

### The test

Note the import path: it points at `dist/`, **not** at your source file.

```js title="test/parse-message.test.mjs"
import { test } from 'node:test';
import assert from 'node:assert/strict';

import { parseSms } from '../dist/sms-intake/parse-message.mjs';

test('parses a well-formed message into a record', () => {
  assert.deepEqual(parseSms('P-001#Ada Lovelace#1815-12-10#3.2'), {
    id: 'P-001',
    name: 'Ada Lovelace',
    dob: '1815-12-10',
    weight: '3.2',
  });
});

test('trims whitespace around each field', () => {
  const record = parseSms('  P-002 # Grace Hopper #1906-12-09#3.5  ');
  assert.equal(record.id, 'P-002');
  assert.equal(record.name, 'Grace Hopper');
});

test('fills missing trailing fields with null', () => {
  assert.equal(parseSms('P-003#Alan Turing').dob, null);
});
```

### Run it

```bash
openfn compile --exports-only && node --test
```

```
✔ parses a well-formed message into a record (0.9ms)
✔ trims whitespace around each field (0.1ms)
✔ fills missing trailing fields with null (0.1ms)
ℹ tests 3
ℹ pass 3
ℹ fail 0
```

We use Node's built-in test runner here because it needs no dependencies, but
nothing about this is Node-specific. Vitest, Jest, Mocha, `node:test` - any
runner that can import an ES module will work.

:::tip Name your test files `.test.mjs`

The compiled output is `.mjs` and needs no configuration. Your _test_ files are
yours, though - if you name them `.js` in a project without `"type": "module"`,
Node will warn about reparsing them as ES modules. Naming them `.test.mjs`
avoids the warning without touching your `package.json`.

:::

## Step 4: The edit → test loop

Run the compiler in watch mode in one terminal:

```bash
openfn compile --exports-only --watch
```

And your test runner in watch mode in another:

```bash
node --test --watch
```

Now editing a step recompiles it, which changes a file in `dist/`, which re-runs
your tests.

## Step 5: Wire it into your project

Add scripts to your project's `package.json`:

```json title="package.json"
{
  "devDependencies": {
    "@openfn/cli": "^1.39.0"
  },
  "scripts": {
    "compile": "openfn compile --exports-only",
    "compile:watch": "openfn compile --exports-only --watch",
    "test": "npm run compile && node --test",
    "test:watch": "node --test --watch"
  }
}
```

Adding `@openfn/cli` as a devDependency pins the version your project builds
with and means CI gets it from `npm ci`, rather than depending on whatever is
installed globally.

Having `test` depend on `compile` matters: your tests import build output, so a
stale `dist/` means you're testing code you no longer have.

### Gitignore the compiled output

**The CLI does not create a `.gitignore` for the compiled directory.** (It does
for `.cli-cache`, which is why you may expect otherwise.) Add it yourself:

```title=".gitignore"
dist/
```

Compiled output is derived from your source, so committing it just creates merge
conflicts and lets `dist/` drift out of sync with `workflows/`.

### Install your adaptors as devDependencies

If any step you compile has an explicit adaptor import, that import is
**preserved** in the compiled file, and the package has to be resolvable when
your test imports it. See [the adaptor gotcha](#adaptor-imports) below for the
two ways to handle this.

### Running in CI

```yaml title=".github/workflows/test.yml"
name: Test job code

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 24
      - run: npm ci
      - run: npm test
```

`npm test` runs `compile` first, so the tests always run against fresh output.

## Troubleshooting

### My helper isn't in the compiled file

It wasn't exported. In `--exports-only` mode, non-exported declarations are
always dropped - there is no warning, the declaration simply isn't there.

Add `export` to the declaration and recompile.

### `ReferenceError: X is not defined` when my test calls a helper

The helper was exported but something it depends on wasn't. Stripping happens
declaration by declaration, so a module-level `const` or `function` your helper
closes over is dropped unless it is _also_ exported.

Export it too.

### No file was written for my step

Steps whose compiled output is empty after stripping are skipped, so no `.mjs`
file is created. Importing it fails with a module-not-found error rather than
anything that explains why:

```
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '.../dist/my-workflow/upload.mjs'
```

This is expected for steps that are only operations - there's nothing in them to
unit test. Check the compile output: `Compiled 1 step(s)` when you have three
steps tells you two were skipped.

### My test fails with `Cannot find package '@openfn/language-...'` {#adaptor-imports}

Adaptor imports are **preserved** in compiled output. A step containing:

```js
import { dateFns } from '@openfn/language-common';

export const formatDate = date => dateFns.format(new Date(date), 'yyyy-MM-dd');
```

compiles to a file that still starts with that import. When your test imports
it, Node has to resolve `@openfn/language-common` - and the CLI's own adaptor
repo isn't on your project's module path. So you get:

```
Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@openfn/language-common'
```

There are two ways to fix this. Pick based on whether the helper actually needs
the adaptor.

**Option A - install the adaptor as a devDependency.** Correct when the helper
genuinely uses adaptor code:

```bash
npm install --save-dev @openfn/language-common@3.3.4
```

Match the version to the one pinned in your `workflow.yaml` so your tests
exercise the same code the runtime will.

**Option B - keep testable helpers free of adaptor imports.** Often the helper
doesn't need the adaptor at all, and the import is only there for the
operations. Operations are stripped, so if you don't write an explicit import,
the compiled file has no adaptor dependency and the test runs with nothing
installed:

```js title="workflows/wf/transform.js"
export const toDhis2Payload = row => ({
  dataElement: row.element,
  value: String(row.value),
  period: row.date.replaceAll('-', '').slice(0, 6),
});

each(
  '$.data[*]',
  create('dataValueSets', state => toDhis2Payload(state.data))
);
```

compiles to just the function - no imports, no adaptor needed to test it:

```js title="dist/wf/transform.mjs"
export const toDhis2Payload = row => ({
  dataElement: row.element,
  value: String(row.value),
  period: row.date.replaceAll('-', '').slice(0, 6),
});
```

Option B is the better default. Pure functions that take data and return data
are easier to test _and_ easier to reuse, and pushing adaptor calls out to the
operations keeps that boundary clean.

### `export default` is missing from the compiled file

That's expected. In `--exports-only` mode the default export is removed, because
it only exists so the runtime can find the list of operations to execute. It has
nothing in it to unit test.

### My tests pass but the workflow still breaks

Unit tests only cover the helpers. Operations, state shape, credentials and
adaptor behaviour are all outside their reach. Run the workflow with the CLI
against realistic input to check those:

```bash
openfn workflows/sms-intake/sms-intake.yaml -s fixture.json
```

## Full compilation

Everything above uses `--exports-only`. Without that flag, `openfn compile`
writes the **full** compiled output for **every** step - all declarations are
kept, adaptor imports are added automatically, and operations are preserved in a
default export:

```js title="dist/sms-intake/upload.mjs"
import { post } from '@openfn/language-http';
export * from '@openfn/language-http';
export default [post('/patients', { body: state.data })];
```

That's the code the runtime actually executes, and it's useful for understanding
or debugging compilation. It is not useful for unit testing: importing it pulls
in the adaptor and evaluates the operations. Use `--exports-only` for tests.

## Reference

### `openfn compile` flags

| Flag                    | Description                                                                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `--exports-only`        | Strip operation calls and keep only exported declarations. Use this for testing                                                                |
| `-o`, `--output-path`   | Write to this path instead of the default output folder                                                                                        |
| `-O`, `--output-stdout` | Print to stdout instead of writing files                                                                                                       |
| `-w`, `--watch`         | Recompile whenever a source file changes                                                                                                       |
| `--clean`               | Remove the output folder before compiling                                                                                                      |
| `--workspace`           | Path to the project root (the folder containing `openfn.yaml`)                                                                                 |
| `-a`, `--adaptor`       | Adaptor to resolve operation imports against when compiling a single `.js` file. Not needed with `--exports-only`, which strips the operations |

Run `openfn compile --help` for the complete list.

### `openfn.yaml` keys

```yaml
dirs:
  workflows: workflows # where the CLI looks for workflows
  compiled: dist # where openfn compile writes output
```

## Next steps

- [Compilation](/documentation/jobs/compilation) - what the compiler does and
  why
- [Best Practices](/documentation/jobs/best-practices) - writing job code that's
  worth testing
- [CLI basic usage](/documentation/cli-usage) - running workflows locally
