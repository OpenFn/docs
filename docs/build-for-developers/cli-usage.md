---
title: Using the CLI
sidebar_label: CLI Usage
slug: /cli-usage
---

## Prerequisites

1. Ensure you have a code editor installed on your machine (e.g.
   [VS Code](https://code.visualstudio.com/),
   [Sublime](https://www.sublimetext.com/))

2. Install NodeJs **v18 is the minimum version required**

   - To install a specific version of Node.js (in this case, version 18) on
     Linux, Windows, or macOS, you can use a version manager such as nvm (Node
     Version Manager) or any multiple runtime version manager eg:
     [asdf](https://github.com/asdf-vm/asdf). These tools allow you to install
     and switch between multiple versions of Node.js on the same machine. See
     below for instructions for different operating systems.
   - Read this article to learn how to install NodeJs in your machine
     [kinsta.com/blog/how-to-install-node-js/](https://kinsta.com/blog/how-to-install-node-js/)

3. Have a basic understanding of OpenFn—check out jobs and adaptors, at least,
   in the [Intro section](documentation/next) of this site.
4. Install the OpenFn CLI with `npm install -g @openfn/cli`

## CLI Usage - Key Commands

You’ll learn about these commands in the following challenges, but please refer
to this section for the key commands used in working with the CLI.

### Check the version

```bash
openfn version
```

### Get help

```bash
openfn help
```

### Run a job

```bash
openfn path/to/job.js -ia {adaptor-name}
```

Note: You MUST specify which adaptor to use. Pass the `-i` flag to auto-install
that adaptor (it's safe to do this redundantly).

You can find the list of publicly available adaptors [here](/adaptors).

> Path is the job to load the job from (a .js file or a dir containing a job.js
> file) For example `openfn execute hello.js ` Reads hello.js, looks for state
> and output in foo

```bash
-i, --autoinstall Auto-install the language adaptor
-a, --adaptors, --adaptor A language adaptor to use for the job
```

If an adaptor is already installed by auto install, you can use the command
without the `-i` options. i.e `openfn hello.js -a http`

### Change log level

You can pass `-l info` or `--log info` to get more feedback about what's
happening, or `--log debug` for more details than you could ever use. Below is
the list of different log levels

```bash
openfn hello.js -a http -l none
```

| log level    | description                                              |
| ------------ | -------------------------------------------------------- |
| `-l none`    | Quiet mode                                               |
| `-l default` | Top level information of what is happening               |
| `-l info`    | Get more feedback on what is happening openfn            |
| `-l debug`   | Get information about runtime, cli, compiler and the job |

### Compilation

The CLI will attempt to compile your job code into normalized Javascript. It
will do a number of things to make your code robust, portable, and easier to
debug from a pure JS perspective.

```bash
openfn compile [path]
```

Will compile the openfn job and print or save the resulting js.

Learn more about CLI
[github.com/OpenFn/kit/](https://github.com/OpenFn/kit/tree/main/packages/cli)
