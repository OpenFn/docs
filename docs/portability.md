---
title: Portability
---

## Intent

Beyond facilitating portability/transferability between OpenFn's
[platform](deploy/platform), [microservice](/documentation/microservice/home),
and
[lightning](/documentation/getting-started/integration-toolkit/#lightning-coming-soon)
deployment pathways, the portability proposal establishes a simple,
globally-applicable way of **_specifying workflow automation_** and **_systems
integration_** that might be applied across workflow-engines/integration
platforms across the sector. Nothing about the spec _must_ be specific to OpenFn
or any one of our individual products. We envision a future in which software
built with Lightning, the OpenFn Integration Toolkit, and entirely new and
different integration/workflow tools can adopt this specification.

It boils down to several key top-level artifacts: `workflows` (containing jobs
and triggers), `globals`, and `credentials`.

- **Jobs** dictate what tasks or actions must be performed;
- **Triggers** when they must be performed;
- **Globals** are reusable constants, or datasets (like mapping tables) shared
  across jobs;
- and **Credentials** are what, if any, authentication they'll need to perform
  them.

If you're interested in contributing to the specification, reach out to OpenFn
via the [community forum](https://community.openfn.org), write to us, or suggest
changes by submitting a pull request here.

```mdx-code-block
import ReactPlayer from 'react-player';

<ReactPlayer url='https://www.youtube.com/watch?v=9xXK5xoiMgA' />
```

## OpenFn projects as code

The portability specification v4 defines how entire projects (groups of
workflows with their associated triggers, edges, credentials and jobs) can be
represented as code. It improves the OpenFn developer experience, allowing
workflows to be built and tested locally; (b) enables project version control
and an audit trail of project changes; and (c) allows users to port existing
workflows from OpenFn v1 to v2, as well as between instances or deployments of
Lightning.

### Project "spec"

The project specification (or "spec") is often saved as a `project.yaml` file.

```yaml
name: openhie-project
description: Some sample
# credentials:
# globals:
workflows:
  OpenHIE-Workflow:
    name: OpenHIE Workflow
    jobs:
      FHIR-standard-Data-with-change:
        name: FHIR-standard-Data-with-change
        adaptor: '@openfn/language-http@latest'
        enabled: true
        # credential:
        # globals:
        body: |
          fn(state => {
            console.log("hello github integration")
            return state
        });

      Send-to-OpenHIM-to-route-to-SHR:
        name: Send-to-OpenHIM-to-route-to-SHR
        adaptor: '@openfn/language-http@latest'
        enabled: true
        # credential:
        # globals:
        body: |
          fn(state => state);

      Notify-CHW-upload-successful:
        name: Notify-CHW-upload-successful
        adaptor: '@openfn/language-http@latest'
        enabled: true
        # credential:
        # globals:
        body: |
          fn(state => state);

      Notify-CHW-upload-failed:
        name: Notify-CHW-upload-failed
        adaptor: '@openfn/language-http@latest'
        enabled: true
        # credential:
        # globals:
        body: |
          fn(state => state);

    triggers:
      webhook:
        type: webhook
    edges:
      webhook->FHIR-standard-Data-with-change:
        source_trigger: webhook
        target_job: FHIR-standard-Data-with-change
        condition: always
      FHIR-standard-Data-with-change->Send-to-OpenHIM-to-route-to-SHR:
        source_job: FHIR-standard-Data-with-change
        target_job: Send-to-OpenHIM-to-route-to-SHR
        condition: on_job_success
      Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-successful:
        source_job: Send-to-OpenHIM-to-route-to-SHR
        target_job: Notify-CHW-upload-successful
        condition: on_job_success
      Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-failed:
        source_job: Send-to-OpenHIM-to-route-to-SHR
        target_job: Notify-CHW-upload-failed
        condition: on_job_failure
```

### Project "state"

The project state is a representation of a particular project as _on a specific
Lightning instance_. It is often saved as `projectState.json` and contains UUIDs
for resources on a particular Lightning deployment.

```json
{
  "workflows": {
    "OpenHIE-Workflow": {
      "id": "27ae2937-0959-48b8-a597-b1646aae8c14",
      "name": "OpenHIE Workflow",
      "jobs": {
        "Transform-data-to-FHIR-standard": {
          "id": "e44f65bb-5038-4e17-8d93-b63cbe95254a",
          "delete": true
        },
        "Send-to-OpenHIM-to-route-to-SHR": {
          "id": "977b87ff-f347-42b5-832f-6ae2ca726f32",
          "name": "Send-to-OpenHIM-to-route-to-SHR",
          "adaptor": "@openfn/language-http@latest",
          "body": "fn(state => state);\n",
          "enabled": true
        },
        "Notify-CHW-upload-successful": {
          "id": "86b743a3-fd00-4629-b9fb-d5f38fb56d0b",
          "name": "Notify-CHW-upload-successful",
          "adaptor": "@openfn/language-http@latest",
          "body": "fn(state => state);\n",
          "enabled": true
        },
        "Notify-CHW-upload-failed": {
          "id": "be85df30-0abd-4f8e-be17-501f67e18b8d",
          "name": "Notify-CHW-upload-failed",
          "adaptor": "@openfn/language-http@latest",
          "body": "fn(state => state);\n",
          "enabled": true
        },
        "FHIR-standard-Data": {
          "id": "55016dda-42e3-4ee1-8a9c-24e3f23d42f1",
          "delete": true
        },
        "FHIR-standard-Data-with-change": {
          "id": "28dd0846-a6ae-40c0-8ab4-3e0a6b487afe",
          "name": "FHIR-standard-Data-with-change",
          "adaptor": "@openfn/language-http@latest",
          "body": "fn(state => state);\n",
          "enabled": true
        }
      },
      "triggers": {
        "webhook": {
          "id": "530cde0b-0de4-4f68-8834-0a4356a2fe53",
          "type": "webhook"
        }
      },
      "edges": {
        "webhook->Transform-data-to-FHIR-standard": {
          "id": "b2c7407b-0ae9-4ca5-9d6b-ee624976fa54",
          "delete": true
        },
        "Transform-data-to-FHIR-standard->Send-to-OpenHIM-to-route-to-SHR": {
          "id": "d22ed6f4-26a2-4c85-b261-cc110a6851e6",
          "delete": true
        },
        "Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-successful": {
          "id": "26c12f7f-7806-4008-87cd-6747998f95f4",
          "condition": "on_job_success",
          "source_job_id": "977b87ff-f347-42b5-832f-6ae2ca726f32",
          "source_trigger_id": null,
          "target_job_id": "86b743a3-fd00-4629-b9fb-d5f38fb56d0b"
        },
        "Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-failed": {
          "id": "0630ac96-4f67-4de7-8c3d-0bf3f89f80d9",
          "condition": "on_job_failure",
          "source_job_id": "977b87ff-f347-42b5-832f-6ae2ca726f32",
          "source_trigger_id": null,
          "target_job_id": "be85df30-0abd-4f8e-be17-501f67e18b8d"
        },
        "webhook->FHIR-standard-Data": {
          "id": "5ce3a8ed-b9eb-464a-a2cd-ba55adc393c2",
          "delete": true
        },
        "FHIR-standard-Data->Send-to-OpenHIM-to-route-to-SHR": {
          "id": "5f459cd9-2882-4a61-a2cc-ec45e58d4837",
          "delete": true
        },
        "webhook->FHIR-standard-Data-with-change": {
          "id": "75e7f7d8-274b-410d-9600-730bbd535229",
          "condition": "always",
          "source_job_id": null,
          "source_trigger_id": "530cde0b-0de4-4f68-8834-0a4356a2fe53",
          "target_job_id": "28dd0846-a6ae-40c0-8ab4-3e0a6b487afe"
        },
        "FHIR-standard-Data-with-change->Send-to-OpenHIM-to-route-to-SHR": {
          "id": "1e5ba385-2c49-4241-8cd2-042c99a810ec",
          "condition": "on_job_success",
          "source_job_id": "28dd0846-a6ae-40c0-8ab4-3e0a6b487afe",
          "source_trigger_id": null,
          "target_job_id": "977b87ff-f347-42b5-832f-6ae2ca726f32"
        }
      }
    }
  },
  "id": "8deff39d-8189-4bd7-9dc7-f9f08e7f2c60",
  "name": "openhie-project"
}
```

### Using the CLI to deploy or describe projects projects as code

The project spec and project state can be used for a variety of reasons, e.g.
one could generate the state and spec as backups of the project or one could
generate these files and use them for auditing and record keeping, etc. The
OpenFn [CLI](https://github.com/OpenFn/kit/tree/main/packages/cli) comes with
commands that can be used to pull project configurations down from a running
Lightning server, and to deploy or push updates to existing projects on a
Lightning server.

:::info Don't have the CLI yet?

Install it by running `npm install -g @openfn/cli`

:::

Before using the CLI, configure it either by passing in environment variables:

```
OPENFN_ENDPOINT=https://app.openfn.org
OPENFN_API_KEY=yourSecretApiToken
```

Or through a `config.json` file:

```json
{
  // Required, can be overridden or set with `OPENFN_API_KEY` env var
  "apiKey": "***",

  // Optional: can be set using the -p, defaults to project.yaml
  "specPath": "project.yaml",

  // Optional: can be set using -s, defaults to .state.json
  "statePath": ".state.json",

  // Optional: defaults to OpenFn.org's API, can be overridden or set with
  // `OPENFN_ENDPOINT` env var
  "endpoint": "https://app.openfn.org"
}
```

More details on the CLI can be found
[here](https://github.com/OpenFn/kit/tree/main/packages/cli#basic-usage).

### `openfn pull` to generate a project spec and state

To generate the spec and state files for an existing project, use:

```sh
openfn pull {YOUR-PROJECT-UUID} -c ./config.json
```

This command will save (or overwrite) a project spec and state file based on the
path you've set in your configuration.

### `openfn deploy` to create a project on a Lightning instance

To deploy a new project to a Lightning instance from a project spec (without a
project state) file use:

```sh
openfn deploy -c config.json
```

### `openfn deploy` to update an existing project

With a valid project state defined in your `config.json`, the same
`openfn deploy` command will beam up your changes as described by a difference
between your project spec and what's found on the server.

```sh
openfn deploy -c config.json
Checking https://demo.openfn.org/api/provision/4adf2644-ed4e-4f97-a24c-ab35b3cb1efa for existing project.
Project found.
[CLI] ♦ Changes:
 {
   workflows: [
     {
       jobs: [
         {
-          body: "fn(state => {\n  console.log(\"ok\")\n  return state\n});"
+          body: "fn(state => {\n  console.log(\"some changes here!\")\n  return state\n});\n"
         }
         ...
         ...
         ...
       ]
     }
   ]
 }

? Deploy? yes
[CLI] ♦ Deployed.
```

### Automated Version Control with Github and Lightning

Representations of projects as code and pull/deploy functionality allows you to
check your whole project into a version control system such as Github.

Lightning comes with a Github App that enables user to sync projects from an
instance to Github using the `openfn pull` command and to do the vice versa
using `openfn deploy`.

To set up version control:

1. Create a project repo connection to a github repository in **Project Settings
   -> Sync to Github**.
2. Follow the instructions to install the Lightning Github app in your desired
   repository.
3. Once you have created a a connection, set up `pull` and `deploy` workflows
   that use openfn github actions below.
4. Add `OPENFN_API_KEY` and `OPENFN_PROJECT_ID` repository secrets to your
   Github repo as described below.
5. Add a `.config.json` file to your repository which specifies your endpoint
   and paths to project spec and state files.
6. Click the sync to Github button to initiate a sync from Lightning to GitHub.
7. Push a change to your selected branch to push changes from Github to
   Lightning.

#### Github Repository Secrets

The workflows that interact with the OpenFn actions will need the repository set
up with two secrets used in the github actions:

- OPENFN_API_KEY: This is your API Key as generated from Lightning and will be
  needed for authentication
- OPENFN_PROJECT_ID: This is your Project ID from Lightning this will be used to
  pull from the lightning instance

#### Github Repository Structure

Here you can do pretty much what you want, so long as you've got a `config.json`
pointing to your project spec, state, and Lightning endpoint.

#### Example [Deploy Workflow](https://github.com/OpenFn/demo-openhie/blob/main/.github/workflows/deploy.yml) for GitHub

See https://docs.github.com/en/actions/quickstart#creating-your-first-workflow
for more help here.

```yml
on:
  push:
    branches:
      - main

jobs:
  deploy-to-lightning:
    runs-on: ubuntu-latest
    name: A job to deploy to Lightning
    steps:
      - name: openfn deploy
        uses: OpenFn/cli-deploy-action@v0.1.11
        with:
          secret_input: ${{ secrets.OPENFN_API_KEY }}
```

#### Example [Pull Workflow](https://github.com/OpenFn/demo-openhie/blob/main/.github/workflows/pull.yml) for GitHub

See https://docs.github.com/en/actions/quickstart#creating-your-first-workflow
for more help here.

```yml
on: [repository_dispatch]

jobs:
  pull-from-lightning:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    name: A job to pull changes from Lightning
    steps:
      - name: openfn pull and commit
        uses: OpenFn/cli-pull-action@v0.7.0
        with:
          secret_input: ${{ secrets.OPENFN_API_KEY }}
          project_id_input: ${{ secrets.OPENFN_PROJECT_ID }}
          commit_message_input:
            'user ${{ github.event.client_payload.message }}'
```

The Lightning [demo instance](https://demo.openfn.org) is currently connected to
[this repo](https://github.com/OpenFn/demo-openhie/). Feel free to play around
with it.

#### Using version control

##### Lightning to GitHub

Once you have configured version control for a project and a related repository
branch, you can sync changes to GitHub by pressing the "Initiate Sync" button on
the version control page and the Lightning GitHub app will run a `openfn pull`
action to update the versioned representation of your project as code.

##### Github to Lightning

Assuming you've configured a deploy action, any time there are changes made to
that branch in your GitHub repo, those changes will be pushed to your Lightning
project via `openfn deploy`.

### Getting Help with the cli

The cli package comes with an inbuilt `help`. Adding `--help` to a command such
as `openfn deploy --help` will result in a help message describing the command
and the options available when using this command. See an example below

```sh
openfn deploy --help
openfn deploy

Deploy a project's config to a remote Lightning instance

Options:
      --version                Show version number                                                                                                                     [boolean]
      --help                   Show help                                                                                                                               [boolean]
  -c, --config, --config-path  The location of your config file                                                                                      [default: "./.config.json"]
      --no-confirm             Skip confirmation prompts (e.g. 'Are you sure?')                                                                                        [boolean]
      --describe               Downloads the project yaml from the specified instance                                                                                  [boolean]
  -l, --log                    Set the log level                                                                                                                        [string]
      --log-json               Output all logs as JSON objects                                                                                                         [boolean]
  -p, --project-path           The location of your project.yaml file                                                                                                   [string]
  -s, --state-path             Path to the state file
```

## Other Versions

- [Portability Proposal v4](portability-versions#proposal-v4)
- [Portability Proposal v3](portability-versions#proposal-v3)
- [Portability Proposal v2](portability-versions#proposal-v2) (`@latest` for
  platform-app/microservice compatibility.)
- [Portability Proposal v1](portability-versions#proposal-v1)
