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

## Proposal v4 `@next`

The portability specification v4 defines how entire projects (groups of
workflows with their associated triggers, credentials and jobs) can be
represented as code. This specification has been written for
[Lightning](/documentation/getting-started/integration-toolkit/#lightning-coming-soon),
the fully open source webb app which extends the OpenFn DPG. It aims to (a)
improve developer experience, allowing them to build and test workflows locally;
(b) enable version control and an audit trail of project changes; and (c) enable
users to port existing workflows from the OpenFn platform to Lightning.

This new specification has been designed and documented thanks to support from a
Digital Square Global Goods grant.

The `project.zip` structure and files:

```
/globals
   sample-clinic-map.json
   sample-translations.json
/workflow-a
   job-1.js
   job-2.js
   job-3.js
/workflow-b
   job-4.js
project.yaml
project.state.yaml
```

The `project.yaml`:

```yaml
name: "My Project" # The project name

globals: # All global constants accessible to this project
  clinic-map: file://./globals/clinic-map.json
  project-expense-codes: file://./globals/project-expense-codes.json
  service-codes:
    body:
      m126: Medical Referral
      g01: General Checkup
      ps: Psycho-social Support

workflows: # All workflows in a project
  CommCare-to-OpenMRS: #The workflow name. Workflow names won't have spaces
    jobs: # All jobs/steps in a workflow
      Coerce-to-FHIR: # The job/step name
        trigger: webhook #webhook urls are uids so are not included
        adaptor: language-fhir
        enabled: true
        credential: my-fihr-credential #looks up credential in state by its name
        # when running locally, the credentials values are taken from the overrides file
        # cli run workflow "CommCare-to-OpenMRS" --overrides ./keys-and-values.yaml
        body: "file://./CommCare-to-OpenMRS/Coerce-to-FHIR.js" # each job job-body is stored in a separate file, within a folder for the whole workflow

      Load-to-openmrs:
        trigger:
          on-success: Coerce-to-FHIR
        adaptor: language-openmrs
        credential: my-other-credential
        enabled: true
        body:
          # no "include", but pathlike doesn't work: if you're doing a uri you need to be explicit about it
          # default to local fs -- no numbering because too complicated if users change the order
          "file://./CommCare-to-OpenMRS/Load-to-openmrs.js"

      Send-Wrap-Up-Reports:
        trigger:
          on-success: Load-to-openmrs
        enabled: true
        adaptor: language-mailgun
        globals:
          - service-codes
          - clinic-map
        body: >
          # this triggers a new workflow
          fn(state => state)
          sendEmail(state => state.emailContent)

  Kobo-to-DHIS2: #This is a second workflow
    Fetch-Kobo-Submissions:
      trigger:
        cron: * 5 * * *
      enabled: true
      adaptor: language-kobotoolbox
      body: "file://./Kobo-to-DHIS2/Fetch-Kobo-Submissions.js"

    Upload-to-DHIS2:
      trigger:
        on-success: Fetch-Kobo-Submissions
      adaptor: language-kobotoolbox
      enabled: false
      body: "file://./Kobo-to-DHIS2/Upload-to-DHIS2.js"
```

The `project.state.yaml`:

```yaml
project:
  - id: '45bffee'
    key: 'My Project'

globals:
  - id: 'sj23n36'
    key: 'clinic-map'
  - id: 'bss522g'
    key: 'project-expense-codes'
  - id: '22aa4st'
    key: 'service-codes'

workflows:
  - id: 'cfd7c68'
    key: 'CommCare-to-OpenMRS' # this is the NAME and the KEY
  - id: 'd1ecc4f'
    key: 'Kobo-to-DHIS2'

jobs:
  - id: 'ns6yw54'
    key: 'Coerce-to-FHIR'
  - id: '12bs52j'
    key: 'Load-to-openmrs'
  - id: 'lk81hs6'
    key: 'Send-Wrap-Up-Reports'

  - id: 'sn26sh2'
    key: 'Fetch-Kobo-Submissions'
  - id: 'sk1722h'
    key: 'Upload-to-DHIS2'

credentials:
  - id: '12ms62y'
    key: 'My FHIR Credential'
```

### Using the CLI to deploy or describe projects projects as code

The project spec and project state above can be used for a variety of reasons,
e.g one could generate the state and spec as backups of the project or one could
generate these files and use them for auditing and record keeping, etc. The
OpenFn [CLI](https://github.com/OpenFn/kit/tree/main/packages/cli) comes with
commands that can be used to pull project configurations down from a running
Lightning server, and to deploy or push updates to existing projects on a
Lightning server.

:::info Don't have the CLI yet?

Install it by running `npm install -g @openfn/cli`

:::

### Generating a project spec and state (pull)

To generate the spec and state files for an existing project, use the
[Kit](https://github.com/OpenFn/kit) command `pull` which works as follows

`openfn pull $OPENFN_PROJECT_ID -c config.json`

- This command assumes you have set up or are passing in your configuration
  which includes your `Endpoint`, `API_KEY`, `StatePath` and `SpecPath`, the
  last two are the file names that will be used when persisting your state and
  spec. Otherwise `Kit` will assume `.projectState.json` and `projectSpec.yaml`.
- The result of this will be a new local set of files for your state and spec,
  which you can now use as you wish.

### Deploying a new project from a project.yaml (deploy)

To deploy a new project to a Lightning Instance from a Project spec file use the 
[Kit](https://github.com/OpenFn/kit) command `deploy` which works as follows

`openfn deploy -c config.json`

- This command assumes you have set up or are passing in your configuration
  which includes your `Endpoint`, `API_KEY`, `StatePath` and `SpecPath`, the
  last two are the file names that will be used when persisting your state and
  spec. Otherwise `Kit` will assume `.projectState.json` and `projectSpec.yaml`.
- The result of this will be a new project on the set instance on Lightning at `Endpoint`.
  
### Updating an existing project with a project.yaml and a projectState.json (deploy)

A common way of consuming the state and spec files is deploying the project
described in them to some Lightning Instance, in order to do this
[Kit](https://github.com/OpenFn/kit) provides a `deploy` command that pushes the
project to the instance described by your `endpoint` and accessed by your
`API_KEY`, the deploy command can be invoked as follows

`openfn deploy`

- This use the current specified endpoint and beam up the project as described
  in the `projectState` and `projectspec` files, the `projectState` file is optional and will
  effectively cause a new project to be deployed whose state will pulled and saved in a new
  `.projectState` file.

### Automated Version Control with Github and Lightning

Since we now have utilities to pull representations of projects as code and
deploy/update projects from those representation as code, your entire project
can be checked into a version control system such as Github.

Lightning comes with a Github App that enables user to sync projects from an
instance to Github using the `openfn pull` command and to do the vice versa
using `openfn deploy`.

To do this one would need to do the following.

1. Create a project repo connection to a github repository, this can be done in
   the `Sync to Github` section of Lightning Project Settings.
2. While doing this you will be guided on how to install the Lightning Github
   app on the repository you need to sync a project to
3. Once you have created a a connection you would need to do some additional
   work on your github repo i.e set up pull and deploy workflows that use openfn
   github actions to do the deploy and well and the pull. See the linked repo and
   workflow examples below.
5. Once you have set up the workflows (examples below) you would be able to now
   sync to Github from Lightning as well as deploy from Github to Lightning.

Secrets The workflows that interact with the OpenFn actions will need the
repository set up with a number of secrets used in the github actions

- OPENFN_API_KEY: This is your API Key as generated from Lightning and will be
  needed for authentication
- OPENFN_PROJECT_ID: This is your Project ID from Lightning this will be used to
  pull from the lightning instance
- A config file that matche the spec outlined by
  [Kit](https://github.com/OpenFn/kit)

Given these you can set up your Github Workflows as follows:

#### Deploy Example [Github Workflow](https://github.com/OpenFn/demo-openhie/blob/main/.github/workflows/deploy.yml#L1)](https://github.com/OpenFn/kit/tree/main/packages/cli#deploying-workflows)

```
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

#### Pull Example [Github Workflow](https://github.com/OpenFn/demo-openhie/blob/main/.github/workflows/pull.yml)

```
on: [repository_dispatch]

jobs:
  pull-from-lightning:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    name: A job to pull changes from Lightning
    steps:
      - env:
          MESSAGE: ${{ github.event.client_payload.message }}
      - name: openfn pull and commit
        uses: OpenFn/cli-pull-action@v0.6.0
        with:
          secret_input: ${{ secrets.OPENFN_API_KEY }}
          project_id_input: ${{ secrets.OPENFN_PROJECT_ID }}
          commit_message_input: $MESSAGE
```

You can see [full example](https://github.com/OpenFn/demo-openhie) of repo and
workflows [this repo](https://github.com/OpenFn/demo-openhie/)

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

The cli package comes with an inbuilt `help` flag and providin the `--help` flag
to a command such as `openfn deploy -- help` will result in a help message
describing the command and the options available when using this command. See an
example below

```
7:45 demo-openhie~>(main)~ openfn deploy --help
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

The full specification can be viewed
[here](https://github.com/OpenFn/projects-as-code).

## Other Versions

- [Portability Proposal v4](portability-versions#proposal-v4)
- [Portability Proposal v3](portability-versions#proposal-v3)
- [Portability Proposal v2](portability-versions#proposal-v2) (`@latest` for
  platform-app/microservice compatibility.)
- [Portability Proposal v1](portability-versions#proposal-v1)
