---
title: Devtools
---

:::caution Devtools is deprecated

Please note that [OpenFn/devtools](https:\/\/github.com/OpenFn/devtools) are being
deprecated and replaced by [OpenFn/cli](../cli.md). Learn more about
CLI
[github.com/OpenFn/cli/](https:\/\/github.com/OpenFn/kit/tree/main/packages/cli)

:::

OpenFn/Devtools is a set of tools for writing &amp; testing job expressions,
managing OpenFn projects, and developing new adaptors. It's how most people work
with OpenFn from their own command lines, outside of OpenFn.org, Microservice,
or Lightning.

:::info Are you a developer?

The [Devtools](https:\/\/github.com/OpenFn/devtools) repo is a collection of bash
and Node scripts, as well as a _suggested_ (but not necessary) directory
structure for working with OpenFn jobs and adaptors.

To run OpenFn jobs locally, you only need [Core](https:\/\/github.com/OpenFn/core) and at
least one adaptor, e.g. [language-http](https:\/\/github.com/OpenFn/language-http)
and you may prefer to install core globally via `npm install -g @openfn/core`

:::

## Up and running

1. Install [git](https:\/\/git-scm.com/downloads) and
   [Node.js](https:\/\/nodejs.org/en/download/) (version 14 or greater)

2. Clone and install devtools to setup core, language-common, and language-http
   using either SSH or HTTPS:

```mdx-code-block
import CodeBlock from '@theme/CodeBlock';

<Tabs
  defaultValue="ssh"
  values={[
    { label: 'SSH', value: 'ssh' },
    { label: 'HTTPS', value: 'https' },
  ]}
>
  <TabItem value="ssh">
    <CodeBlock>
      git clone git@github.com:OpenFn/devtools.git{'\n'}
      cd devtools{'\n'}
      ./install.sh ssh
    </CodeBlock>
  </TabItem>
  <TabItem value="https">
    <CodeBlock>
      git clone https:\/\/github.com/OpenFn/devtools.git{'\n'}
      cd devtools{'\n'}
      ./install.sh https
    </CodeBlock>
  </TabItem>
</Tabs>
```

_Note: If you get a "permission denied" message when running `./install.sh`, try
`run chmod +x ./install.sh ` then retry the install command._

## Usage

Execute takes:

1. `-l [language-package].Adaptor`: The adaptor being used
2. `-e [expression.js]:` The expression being tested
3. `-s [state.json]`: The message `data: {...}` and credential
   `configuration: {...}`
4. `-o [output.json]`: The file to which the output will be written

### Run a job using bash

```sh
~/devtools/core/bin/core execute \
  -l ~/devtools/adaptors/language-http \
  -s ./tmp/state.json \
  -o ./tmp/output.json \
  -e ./tmp/expression.js
```

### More on Devtools

```mdx-code-block
import ReactPlayer from 'react-player';

<ReactPlayer url="'https:\/\/www.youtube.com/watch?v=fkGI5YLp18s'" />
```

### Install a specific adaptor version

To install specific adaptors, run
`./install.sh ${ssh || https} language-${name}`

When you install a new adaptor, the latest version will be enabled by default.
To switch the adaptor version when running jobs locally, in the root of the
adaptor directory, run:

`git checkout tags/v2.4.15` (substitute `2.4.15` with the adaptor version you
want)

### The `--test` option

```sh
~/devtools/core/bin/core execute \
  -l ~/devtools/adaptors/language-http \
  -s ./tmp/state.json \
  -o ./tmp/output.json \
  -e ./tmp/expression.js \
  --test
```

This intercepts all HTTP requests and displays the request information for
debugging.

#### `.FakeAdaptor`

Adaptors may provide dummy modules for testing. `language-salesforce` has a
built-in `.FakeAdaptor` which allows a user to test expressions on data without
sending them to a real Salesforce server.

Instead of using `-l ./language-salesforce.Adaptor`, use
`-l./language-salesforce.FakeAdaptor` to test expressions offline:
`./core/bin/core execute -l ./language-salesforce.FakeAdaptor -s ./tmp/state.json -o ./tmp/output.json -e ./tmp/expression.js`

#### Offline testing for other adaptors

For most standard adaptors which make use of HTTP requests, you can add `--test`
to the execute command to intercept all HTTP requests and return a `200`.

## Hands-on with devtools and the command line

:::tip

Check out this example workflow for using devtools in your day-to-day.

:::

1. `cd` in the folder containing the repo you're working on.
2. You can keep your job scripts anywhere, but store `state.json` and
   `output.json` in a `tmp` folder. In our repos we always add the `tmp`
   directory in our `.gitignore` file that tells GitHub to ignore the specified
   paths. Make sure you have your `.gitignore` file and you know what's tracked
   by GitHub and what's not. `state` and `config` may contain sensitive
   configuration information and project data so never upload them to GitHub!
3. The devtools command is a mouthful. You can search your command line history
   with `Ctl-r` and typing core to pull it up the devtools command. Notice that
   it’s got line breaks and a flag for all the important bits… `-l` for
   language-package (adaptor), `-s` for state, `-o` for output, and `-e` for
   expression. You can also save your frequently used devtools commands in a
   document and just copy-paste.
4. It's quick the change job names or the adaptor in the command. If you put all
   your adaptors in the same folder `~/devtools/adaptors/language-_________` you
   can quickly swap them in the command, as you can see in the video below. The
   Backspace key deletes characters behind your cursor, Delete deletes them in
   front.
5. You can use the TAB key to auto-complete the file path as you search for a
   job.
6. Once you've changed a couple of characters for the adaptor and expression (in
   the video `state` and `output` stayed the same because we're using the `tmp`
   convention) press enter and see the results.

![devtools](/img/devtools.gif)

## Configure an OpenFn project

The easiest way to configure a project is via the web interface (you can then
export or `openfn pull` the project as code) but you can also run
`./scripts/generate-project.js` helps you build a project config YAML
interactively, adding your triggers, credentials and jobs to the config. You can
read more about the config file
[here](https:\/\/openfn.github.io/microservice/readme.html#sample-configuration)

If you choose `monolith` mode, all your job code will be included in the YAML.
In `URI` mode, you’ll get a config file with URI-s to your defined jobs.

![Generate Project](/img/generate-project.gif)

## Pre-Requisites

1. [Node](https:\/\/nodejs.org/en/download/) is required to run jobs and use many
   of the scripts in Devtools (e.g., `npm run build` is required after changes
   to adaptors).

2. A basic working knowledge of NodeJs, promises and asynchronous functions is
   essential for writing adaptors.

## Scripts

Devtools comes with a collection of scripts to aid in setting up a development
environment for adaptor work, and include commands to quickly clone a large
number of adaptors, create tarballs of adaptors with only production
dependencies included, etc.

For the kitchen sink, run:

```sh
./install ssh
./scripts/bootstrap npm-install
```

In order to run the scripts, ensure you have cd'd into the project directory and
enter `./scripts/<script-name>`

### bootstrap

Installs all adaptors in `repos` file to the `/adaptors` directory and prepares
the working directory. This needs to be run before running any of the other
scripts. Pass `npm-install` to run npm install for each adaptor also.

`./scripts/bootstrap npm-install` - to clone, set up hooks and npm install in
each `./scripts/bootstrap`- to clone and set up hooks in each

### generate-project.js

`./scripts/generate-project.js` interactively generates a YAML project
configuration file that can be used both on the OpenFn platform and in OpenFn
microservice to define projects.

### generate-doclets

Iterates overs all language pack folder names found in the `repos` list and
creates a doclet json file in the `doclets` directory.

### analyse-doclets

Iterates overs all doclets found in `doclets` and gives a tree view of the
doclet structure using [jsdoc-query](https:\/\/github.com/OpenFn/jsdoc-query).

## Building adaptors for platform

All adaptor releases are built inside a `docker container`. The importance of
running the build and release process through a container is to standardize the
build environment across the team. While adaptors can be built and run on lots
of different operating systems and architectures, when we run the platform on
Kubernetes it expects linux boxes running x86... so that's where we build these
official releases.

Here's how to build and release adaptors:

1. Reopen your package in **dev-container** by typing `ctrl+shift+p` (or
   `cmd+shift+p` on mac) and choosing **Remote-Container: Rebuild and Reopen in
   Container**.
2. After the build is finished, open a terminal in vscode and run
   `openfn-devtools release .` to build, tag, and push to
   [npm](https:\/\/www.npmjs.com/).
3. Run `openfn-devtools package-release .` to package everything with production
   dependencies and push to [GitHub](https:\/\/github.com/openfn).

Depending on how you've configured your local environment and your VSCode
installation, you might encounter access issues preventing connections to NPM
and GitHub.

### Troubleshooting

There are a number of issues that you may encounter related to sharing settings
that are responsible for passing ssh keys and local configurations from your
host machine into the VSCode container.

### Git config issues

An issue can pop up about git config not set, To solve this, you should probably
set your email and name globally using the commands below:

```sh
git config --global user.email "youremail@something.com"
git config --global user.name "Your Name"
```

### SSH key issues

You may find that you are unable to access your `ssh` keys from inside the
container.

:::warning Error

permission denied (publickey)

:::

To solve this, first make sure the `ssh agent` is
[up and running](https:\/\/code.visualstudio.com/docs/remote/containers#_sharing-git-credentials-with-your-container).
In MacOS, it is running by default. On Linux you can start the agent using the
command

```sh
eval $(ssh-agent -s)
```

Then you can add these line your `~/.bash_profile` or `~/.zprofile` (for Zsh) to
make it run by default.

```sh
if [ -z "$SSH_AUTH_SOCK" ]; then
   RUNNING_AGENT="`ps -ax | grep 'ssh-agent -s' | grep -v grep | wc -l | tr -d '[:space:]'`"
   if [ "$RUNNING_AGENT" = "0" ]; then
      # Launch a new instance of the agent
      ssh-agent -s &> $HOME/.ssh/ssh-agent
   fi
   eval `cat $HOME/.ssh/ssh-agent`
fi
```

Next, run the command below to add your identity to the ssh agent:

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="linux"
  values={[
    { label: 'Linux', value: 'linux' },
    { label: 'MacOS', value: 'macos' },
  ]}
>
   <TabItem value="linux">

      ssh-add &lt;path-to-your-ssh-file&gt;

   </TabItem>
   <TabItem value="macos">

      ssh-add -A

   </TabItem>
</Tabs>
```

Finally, configure VSCode to share your local ssh keys with the dev container.
In VSCode, go to `Settings`, and in the search bar, type
`terminal.integrated.inherit`. You should see the option in the image below and
check it if it's unchecked.

![vscode settings](/img/vscode-settings.png)

### GitHub token sharing

Our release process relies on a `GH_TOKEN` variable. Set up an
[access token](https:\/\/docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
in GitHub.

In your `~/.bash_profile` or `~/.zshrc` file, export the newly created token by
adding this line:

```sh
export GH_TOKEN=<TOKEN>
```

## Using a new adaptor in an OpenFn/platform instance

1. Add your release to the `scripts/install-lp` script.
2. Add the version number to `priv/adaptors.json`.
3. Add the `bodySchema` to `CredentialView.js`.
