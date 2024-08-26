---
title: Portability
---

## Intent

The portability specification allows for the representations of entire workflow
projects "as code", lets user move between various deployment pathways (cloud,
local, DIY, etc.) and proposes a globally-applicable way of **_specifying
workflow automation_** and **_systems integration_** that might be applied
across workflow-engines/integration platforms across the sector. Nothing about
the spec _must_ be specific to OpenFn or any one of our individual products. We
envision a future in which software built with Lightning, the OpenFn Integration
Toolkit, and entirely new and different integration/workflow tools can adopt
this specification.

If you're interested in contributing to the specification, reach out to OpenFn
via the [community forum](https://community.openfn.org), write to us, or suggest
changes by submitting a pull request here.

## Projects "as code"

Entire projects (groups of workflows with their associated triggers, edges,
credentials and jobs) can be represented as code. This improves the OpenFn
developer experience by (a) allowing workflows to be built and tested locally;
(b) enabling project version control and an audit trail of project changes; and
(c) allowing users to port existing projects between different instances (i.e.,
deployments) of Lightning.

### Directory structure

Many users keep OpenFn projects in git repositories, and this is a common
structure:

```
myProject/
├── workflow-a/
│   ├── job-1.js
│   ├── job-2.js
│   └── job-3.js
├── workflow-b/
│   └── job-4.js
├── project.yaml
├── projectState.json
└── config.json
```

:::info Directory Structure

There are commonly used 3 directory structure for OpenFn projects namely:
standard, production & test, and monorepo. To learn more, please see the OpenFn
[GitHub configuration documentation](/documentation/link-to-GitHub#structuring-your-github-repository).

:::

### The project **_spec_**

The project specification (or "spec") is often saved as a `project.yaml` file.
While most of the spec is written inline, many developers prefer to track their
job bodies in separate `.js` files and they then reference them with a relative
path.

```yaml
name: openhie-project
description: Some sample
credentials:
  jane-smith@test.com-HAPI-FHIR:
    owner: jane-smith@test.com
    name: HAPI FHIR
workflows:
  OpenHIE-Workflow:
    name: OpenHIE Workflow
    jobs:
      FHIR-standard-Data-with-change:
        name: FHIR-standard-Data-with-change
        adaptor: '@openfn/language-http@latest'
        enabled: true
        credential: null
        body:
          path: ./jobs/my-fancy-script.js

      Send-to-OpenHIM-to-route-to-SHR:
        name: Send-to-OpenHIM-to-route-to-SHR
        adaptor: '@openfn/language-http@latest'
        enabled: true
        credential: jane-smith@test.com-HAPI-FHIR
        body: |
          fn(state => {
            console.log("hello github integration")
            return state
          });

      Notify-CHW-upload-successful:
        name: Notify-CHW-upload-successful
        adaptor: '@openfn/language-http@latest'
        enabled: true
        credential: null
        body: fn(state => state);

      Notify-CHW-upload-failed:
        name: Notify-CHW-upload-failed
        adaptor: '@openfn/language-http@latest'
        enabled: true
        credential: null
        body:
          path: ./jobs/notify-failure.js

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

In this spec, you can see the different ways of defining a job's body:

1. Inline body: Used in the `FHIR-standard-Data-with-change` and
   `Send-to-OpenHIM-to-route-to-SHR` jobs. The body is directly written in the
   YAML file.

2. External file reference: Used in both `Notify-CHW-upload-successful` and
   `Notify-CHW-upload-failed` jobs. The body is stored in separate files,
   referenced by the path key. This allows for better organization of complex
   job logic.

When using file paths:

- Paths are relative to the location of the `project.yaml` file.
- Ensure that the referenced files exist and contain valid job body code.
- This method is particularly useful for complex jobs or when you want to reuse
  job bodies across different projects.

### The project **_state_**

The project state is a representation of a particular project as _on a specific
Lightning instance_. It is often saved as `projectState.json` and contains UUIDs
for resources on a particular Lightning deployment.

```json
{
  "id": "8deff39d-8189-4bd7-9dc7-f9f08e7f2c60",
  "name": "openhie-project",
  "description": null,
  "inserted_at": "2023-08-25T08:57:31",
  "updated_at": "2023-08-25T08:57:31",
  "scheduled_deletion": null,
  "requires_mfa": false,
  "project_credentials": {
    "jane-smith@test.com-HAPI-FHIR": {
      "id": "25f48989-d349-4eb8-99c3-923ebba5b116",
      "name": "HAPI FHIR",
      "owner": "jane-smith@test.com"
    }
  },
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
  }
}
```

## Using the CLI interact with projects

The project spec and project state can be used for a variety of reasons, e.g.
one could generate the state and spec as backups of the project or one could
generate these files and use them for auditing and record keeping, etc. The
OpenFn [CLI](https://github.com/OpenFn/kit/tree/main/packages/cli) comes with
commands that can be used to pull project configurations down from a running
Lightning server, and to deploy or push updates to existing projects on a
Lightning server. To learn more about automated version control via pull and
deploy, head over to our [Version Control](../manage-projects/link-to-gh.md)
docs.

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

### `openfn pull` to generate spec & state

To generate the spec and state files for an existing project, use:

```sh
openfn pull {YOUR-PROJECT-UUID} -c ./config.json
```

This command will save (or overwrite) a project spec and state file based on the
path you've set in your configuration.

### `openfn deploy` to create new projects

To deploy a new project to a Lightning instance from a project spec (without a
project state) file use:

```sh
openfn deploy -c config.json
```

### `openfn deploy` to update existing projects

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

## Getting Help with the cli

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

- [Portability Spec v2](portability-versions#v2)
- [Portability Spec v1](portability-versions#v1)
