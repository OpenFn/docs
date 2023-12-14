---
title: Using the CLI
sidebar_label: Installation and Updating
slug: /cli-installation
---

## Installation

**To install**

```bash
npm install -g @openfn/cli
```

**Make sure everything works by running the built-in test job**

```bash
openfn test
```

The word `openfn` will invoke the CLI. The word `test` will invoke the test
command.

<details><summary>You should see some output like this:</summary>

    [CLI] ℹ Versions:
            ▸ node.js     18.12.1
            ▸ cli         0.4.11
            ▸ runtime     0.2.2
            ▸ compiler    0.0.38
    [CLI] ℹ Running test job...
    [CLI] ℹ Workflow object:
    [CLI] ℹ {
        "start": "start",
        "jobs": [
        {
            "id": "start",
            "data": {
            "defaultAnswer": 42
            },
            "expression": "const fn = () => (state) => { console.log('Starting computer...'); return state; }; fn()",
            "next": {
            "calculate": "!state.error"
            }
        },
        {
            "id": "calculate",
            "expression": "const fn = () => (state) => { console.log('Calculating to life, the universe, and everything..'); return state }; fn()",
            "next": {
            "result": true
            }
        },
        {
            "id": "result",
            "expression": "const fn = () => (state) => ({ data: { answer: state.data.answer || state.data.defaultAnswer } }); fn()"
        }
        ]
    }

    [CLI] ✔ Compilation complete
    [R/T] ♦ Starting job start
    [JOB] ℹ Starting computer...
    [R/T] ℹ Operation 1 complete in 0ms
    [R/T] ✔ Completed job start in 1ms
    [R/T] ♦ Starting job calculate
    [JOB] ℹ Calculating to life, the universe, and everything..
    [R/T] ℹ Operation 1 complete in 0ms
    [R/T] ✔ Completed job calculate in 1ms
    [R/T] ♦ Starting job result
    [R/T] ℹ Operation 1 complete in 0ms
    [R/T] ✔ Completed job result in 0ms
    [CLI] ✔ Result: 42

</details>
All other output is the CLI telling us what it is doing internally

**Check the version**

```bash
openfn -v
```

**Get help**

```bash
openfn help
```

## Updating

**You should be able to install a new version straight on top of your current
installation**

```bash
npm install -g @openfn/cli
```

**If this fails, try uninstalling the current version first, And then
re-installing.**

```bash
npm uninstall -g @openfn/cli
npm install -g @openfn/cli
```
