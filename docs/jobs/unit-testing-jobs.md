---
sidebar_label: Unit Testing Jobs
title: Writing unit tests for your jobs
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Most job code goes like this: fetch some records, reshape them, send them
somewhere else. But the reshaping bit often grows into complex logic - parsing
a string into a structured record, mapping local codes onto DHIS2 data
elements, normalising a dozen date formats into one.

Unit testing that logic helps to validate that the code runs correctly, and
helps to prevent errors occurring when the code is modified later.

:::info Requirements

You need `@openfn/cli` v1.39.0 or later to compile your job code for testing.
Check your version with `openfn -v`, and upgrade with
`npm install -g @openfn/cli`.

You also need an OpenFn project checked out locally:

```bash
openfn project pull <uuid>
```

That gives you a folder with `openfn.yaml`, a `workflows/` directory, and one
`.js` file per step. See [OpenFn Sync](/documentation/sync) for pulling,
checking out and deploying projects.

:::


## Step 1: Export any helper you want to test

The functions that you want to test must be exported:
```js title="testable code"
export const FIELDS = ['id', 'name', 'dob'];

export const parseSms = text =>
  Object.fromEntries(FIELDS.map((f, i) => [f, text.split('#')[i]]));

fn(state => ({ ...state, data: state.data.messages.map(parseSms) }));
```
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
  sms-parser/
    sms-parser.yaml
    parse-message.js      # source
    upload.js
dist/
  sms-parser/
    parse-message.mjs     # compiled
```

Two things to note:

- **Output files use the `.mjs` extension.** Node always treats `.mjs` as an ES
  module, so you don't need `"type": "module"` in your `package.json` for the
  compiled code to import cleanly.
- **`upload.js` produced no file.** Steps whose compiled output is empty after
  stripping - which is any step that is only operations - are skipped entirely.
  See [Troubleshooting](#troubleshooting) below.

:::warning Don't commit the generated `.mjs` files

The CLI does not add a `.gitignore` for the compiled directory, so add one
yourself before your first commit:

```title=".gitignore"
dist/
```

The `.mjs` files are build output, derived entirely from your `.js` steps.
Tracking them gives you noisy diffs and merge conflicts on every edit, and lets
`dist/` drift out of sync with `workflows/`. See
[Gitignore the compiled output](#gitignore-the-compiled-output) for more.

:::

Other useful flags:

```bash
# Write somewhere other than dist/
openfn compile --exports-only -o workflows

# Wipe the output folder first
openfn compile --exports-only --clean

# Just one workflow, by name
openfn compile sms-parser --exports-only
```

You can also set the output folder permanently in `openfn.yaml`:

```yaml title="openfn.yaml"
dirs:
  workflows: workflows
  compiled: workflows
```

## Step 3: Write a test

We recommend Node's built-in test runner here because it needs no dependencies, but
nothing about this is Node-specific. You can use any test runner that can import an ES module.

:::tip Name your test files `.test.mjs`

The compiled output is `.mjs` and needs no configuration. Your _test_ files are
yours, though - if you name them `.js` in a project without `"type": "module"`,
Node will warn about reparsing them as ES modules. Naming them `.test.mjs`
avoids the warning without touching your `package.json`.

:::
<Tabs groupId="write-a-test">
  <TabItem value="source" label="The job code">
    ```js title="workflows/sms-parser/parse-message.js"
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
  </TabItem>
  <TabItem value="output" label="The compiled output">
  
    After `openfn compile --exports-only`:

    ```js title="dist/sms-parser/parse-message.mjs"
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
  </TabItem>
  <TabItem value="test" label="The test">
    Note the import path: it points at `dist/`, **not** at your source file.

    ```js title="test/parse-message.test.mjs"
    import { test } from 'node:test';
    import assert from 'node:assert/strict';

    import { parseSms } from '../dist/sms-parser/parse-message.mjs';

    test('parses a well-formed message into a record', () => {
      assert.deepEqual(parseSms('P-001#Ada Lovelace#1815-12-10#3.2'), {
        id: 'P-001',
        name: 'Ada Lovelace',
        dob: '1815-12-10',
        weight: '3.2',
      });
    });
    ```
  </TabItem>
</Tabs>


### Running the test

```bash
openfn compile --exports-only && node --test
```

```
✔ parses a well-formed message into a record (0.9ms)
✔ trims whitespace around each field (0.1ms)
✔ fills missing trailing fields with null (0.1ms)
ℹ tests 1
ℹ pass 1
ℹ fail 0
```


## Step 4: Running test in watch mode

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

## Reference

### `openfn compile` flags
Run `openfn compile --help` for the complete list.

### `openfn.yaml` keys

```yaml
dirs:
  workflows: workflows # where the CLI looks for workflows
  compiled: dist # where openfn compile writes output
```

## Related pages

- [Compilation](/documentation/jobs/compilation) - what the compiler does and
  why
- [Best Practices](/documentation/jobs/best-practices) - writing job code that's
  worth testing
- [CLI basic usage](/documentation/cli-usage) - running workflows locally
- [OpenFn Sync](/documentation/sync) - pulling a project down so you have an
  `openfn.yaml` to compile against
