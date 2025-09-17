---
title: Get started with the OpenFn CLI
sidebar_label: Get started
slug: /cli
---

#### Build and test your automated workflows and integrations via the command line.

The OpenFn CLI is a developer tool to help you build, test, and manage your
workflows directly from the command line. It’s simple to install, works on
macOS, Windows, and Linux, and offers a range of functionality to enhance your
developer experience with OpenFn. You can use the OpenFn CLI to:

- Securely run OpenFn steps and workflows
- Troubleshoot and debug OpenFn steps
- Access adaptor documentation
- Deploy workflows to OpenFn

---

### Before you start

Before you begin with the @openfn/cli, make sure to setup some key tooling:

1. **Code Editor:** Ensure you have a code editor installed on your machine. You
   can use popular editors like [VS Code](https://code.visualstudio.com/) or
   [Sublime](https://www.sublimetext.com/).
2. **Node.js:** Install Node.js (version 18 or later). For Linux, Windows, or
   macOS, use a version manager like [nvm](https://github.com/nvm-sh/nvm) or
   [asdf](https://asdf-vm.com/guide/getting-started.html). Or
   [install Node.js directly](https://kinsta.com/blog/how-to-install-node-js/)
   by following this guide.

You should also **understand OpenFn Basic concepts**, particularly steps and
adaptors. Check out the [Intro section](/documentation) on this site to get
caught up.

---

### Install the CLI

To download the latest version of
[@openfn/cli](https://www.npmjs.com/package/@openfn/cli), on the command line,
run the following command.

```bash
npm install -g @openfn/cli
```

Make sure everything works by running the built-in test workflow:

```bash
openfn test
```

The word `openfn` will invoke the CLI. The word `test` will invoke the test
command.

<details>
<summary>Expand to see the expected output.</summary>

```
[CLI] ♦ Versions:
   ▸ node.js     18.12.1
   ▸ cli         1.0.0
[CLI] ℹ Running test workflow...
[CLI] ℹ Execution plan:
[CLI] ℹ {
   "options": {
     "start": "start"
   },
   "workflow": {
     "steps": [
       {
          "id": "start",
          "state": {
          "data": {
            "defaultAnswer": 42
          }
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
}

[CLI] ✔ Compiled all expressions in workflow
[R/T] ℹ Executing undefined
[R/T] ℹ Starting step start
[JOB] ℹ Starting computer...
[R/T] ✔ Completed step start in 1ms
[R/T] ℹ Starting step calculate
[JOB] ℹ Calculating to life, the universe, and everything..
[R/T] ✔ Completed step calculate in 1ms
[R/T] ℹ Starting step result
[R/T] ✔ Completed step result in 0ms
[CLI] ✔ Result: 42
```

</details>

All other output is the CLI telling us what it is doing internally.

**Check the version**

```bash
openfn -v
```

**Get help**

```bash
openfn help
```

---

### Updating the CLI

To install a new version straight on top of your current installation, run the
following command.

```bash
npm install -g @openfn/cli
```

---

### Troubleshooting

If you encounter installation issues, try uninstalling the current version first
and then re-installing.

```bash
npm uninstall -g @openfn/cli
npm install -g @openfn/cli
```
