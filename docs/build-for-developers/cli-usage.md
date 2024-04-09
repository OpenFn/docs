---
title: Basic usage of OpenFn CLI
sidebar_label: Basic usage
slug: /cli-usage
---

This page shows common usage examples for the CLI.

Execute a job, run a workflow, adjust logging, maintain adaptors, and save the
state.

---

### Get help

```bash
openfn --help
```

```bash
openfn deploy --help
```

---

### Run a job

To run a single job, you must explicitly specify which adaptor to use. You can
find the list of publicly available [adaptors here](/adaptors). See examples
below.

Adaptors are automatically installed if the specified version is not detected.

**Run a job with the http adaptor:**

```bash
openfn path/to/job.js -a http
```

**Use a specific adaptor version:**

```bash
openfn path/to/job.js -a http@2.0.0
```

**Pass a path to a locally installed adaptor:**

```bash
openfn path/to/job.js -a http=/repo/openfn/adaptors/my-http-build
```

**Use the build in the adaptors monoreo:**

```bash
openfn path/to/job.js -ma http
```

Set a path to the monorepo with the env var OPENFN_REPO_DIR (eg,
`OPENFN_REPO_DIR=~/openfn/repo openfn job.js -ma http`).

Remember to rebuild the adaptor before using it!

**Run from a specific start step**

You can specify a step as an exact id, or a partial substring from the name or
id.

```bash
openfn path/to.job.js --start cf628d9e -s path/to/input.json
```

If you have previously cached this workflow's results, the CLI will
automatically load the cached input if you omit the `-s` argument:

```bash
openfn path/to.job.js --start cf628d9e
```

---

### Handle output state

After the job finishes, the CLI writes the resulting state to disk. By default,
it creates an `output.json` next to the job file.

**You can specify custom paths for the output and state files:**

```bash
openfn path/to/job.js -a adaptor-name -o path/to/output.json -s path/to/state.json
```

**Use `-O` to return the output through stdout:**

```bash
openfn path/to/job.js -a adaptor-name -O
```

**Save all step results to disk**

```bash
openfn path/to/workflow.json --cache-steps
```

Each step will write its output to `./cli-cache/<workflow-name>/<step-id>.json`.
The `.cli-cache` folder will be git-ignored and the cache will be cleared when
the workflow is re-run with `--cache-steps` enabled.

To _always_ cache, set the `OPENFN_ALWAYS_CACHE_STEPS` env var to `"true"`, and
pass `--no-cache-steps` to disable it.

---

### Adjust logging level

You can pass `-l info` or `--log info` to get more feedback about what's
happening during runtime. Below is the list of different log levels

| log level                                     | description                                              |
| --------------------------------------------- | -------------------------------------------------------- |
| `openfn path/to/job.js -a adaptor -l none`    | Quiet mode                                               |
| `openfn path/to/job.js -a adaptor -l default` | Top level information of what is happening               |
| `openfn path/to/job.js -a adaptor -l info`    | Get more feedback about runtime, cli and the job         |
| `openfn path/to/job.js -a adaptor -l debug`   | Get information about runtime, cli, compiler and the job |

---

### Maintain auto-installed adaptors repo

**List the repo contents:**

```bash
openfn repo list
```

**Specify the repo folder using the `OPENFN_REPO_DIR` env var:**

```bash
export OPENFN_REPO_DIR=/path/to/repo
```

**Auto-install adaptors and check if a matching version is found in the repo:**

```bash
openfn path/to/job.js -a adaptor-name
```

**Remove all adaptors from the repo:**

```bash
openfn repo clean
```

---

### Run a workflow

<details>
  <summary>A workflow has a structure like this</summary>

```json
{
  "options": {
    "start": "a" // optionally specify the start node (defaults to steps[0])
  },
  "workflows": {
    "steps": [
      {
        "id": "a",
        "expression": "fn((state) => state)", // code or a path
        "adaptor": "@openfn/language-common@1.75", // specifiy the adaptor to use (version optional)
        "state": {
          "data": {} // optionally pre-populate the data object (this will be overriden by keys in in previous state)
        },
        "configuration": {}, // Use this to pass credentials
        "next": {
          // This object defines which steps to call next
          // All edges returning true will run
          // If there are no next edges, the workflow will end
          "b": true,
          "c": {
            "condition": "!state.error" // Note that this is an expression, not a function
          }
        }
      }
    ]
  }
}
```

</details>

**To run a workflow:**

```bash
openfn path/to/workflow.json -o tmp/output.json
```

Check out this detailed [tutorial](cli-walkthrough#7-running-workflows) on
running workflows via the CLI.

---

### Load adaptor documentation

The CLI can list adaptor documentation in the terminal. Note that it has to
download the adaptor to the repo (if it's not already there), which can take a
moment.

**Print a list of adaptor functions**

```bash
openfn docs http
```

**Show docs for a specific function**

```bash
openfn docs http post
```
