---
title: Basic usage of OpenFn CLI
sidebar_label: Basic Usage
slug: /cli-usage
---

#### Execute a job, run a workflow, adjust logging, maintain adaptors, and save the state.

You're probably here to run jobs (expressions) or workflows, which the CLI makes
easy. Keep reading for an outline of the basic usage scenarios of the CLI.

---

### Run a job

To run a single job, you must explicitly specify which adaptor to use. You can
find the list of publicly available [adaptors here](/adaptors). See examples
below.

> Pass the `-i` flag to auto-install that adaptor (it's safe to do this
> redundantly).

**Use a shorthand (e.g., `http`):**

```bash
openfn path/to/job.js -ia http
```

**Use the full package name (e.g., `@openfn/language-http`):**

```bash
openfn path/to/job.js -ia @openfn/language-http
```

**Add a specific version:**

```bash
openfn path/to/job.js -ia http@2.0.0
```

**Pass a path to a locally installed adaptor:**

```bash
openfn path/to/job.js -a http=/repo/openfn/adaptors/my-http-build
```

---

### Write resulting state to disk

After the job finishes, the CLI writes the resulting state to disk. By default,
it creates an `output.json` next to the job file.

**You can specify custom paths for the output and state files:**

```bash
openfn path/to/job.js -ia adaptor-name -o path/to/output.json -s path/to/state.json
```

### Return resulting state through stdout

**Use `-O` to return the output through stdout:**

```bash
openfn path/to/job.js -ia adaptor-name -O
```

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
openfn path/to/job.js -ia adaptor-name
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
  "start": "a", // optionally specify the start node (defaults to jobs[0])
  "jobs": [
    {
      "id": "a",
      "expression": "fn((state) => state)", // code or a path
      "adaptor": "@openfn/language-common@1.75", // specifiy the adaptor to use (version optional)
      "data": {}, // optionally pre-populate the data object (this will be overriden by keys in in previous state)
      "configuration": {}, // Use this to pass credentials
      "next": {
        // This object defines which jobs to call next
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
```

</details>

**To run a workflow:**

```bash
openfn path/to/workflow.json -i
```

Check out this detailed [tutorial](cli-walkthrough#7-running-workflows) on
running workflows via the CLI.
