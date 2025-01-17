---
title: Workflows API
sidebar_label: Workflows API
---

The Workflows API allows you to programmatically create and modify Workflows.

You can use the Workflows API with the `http` adaptor or curl.

## Authentication

All requests must be Authenticated.

Authentication uses the Authorization header with a Personal Access Token (PAT)
from the app.

If you're using the http adaptor, set the `access_token` on the credential to
your PAT.

If you are using curl, add a the bearer token (in the example below the token
will be expanded from an env var):

```
curl -H "Authorization: Bearer $OPENFN_PAT" https://app.openfn.org/api/projects/<project-id>/workflows
```

## REST API

The Workflow API has the following RESTful structure:

- `GET /api/projects/:projectId/workflows` - get a list of workflows for a
  project. Returns an array of Workflows.
- `GET /api/projects/:projectId/workflows/:workflowId` - get a single workflow
  by id. Returns a single Workflow.
- `PUT /api/projects/:projectId/workflows` - create a new Workflow. Include
  workflow JSON in the body. Returns the updated Workflow JSON.
- `PUT /api/projects/:projectId/workflows/:workflowId` - update a Workflow. This
  will replace the existing workflow with the JSON in the body. Returns the
  updated Workflow JSON.
- `PATCH /api/projects/:projectId/workflows/:workflowId` - partially update a
  Workflow. The existing workflow will be updated with the JSON in the body.

## Workflow Structure

A Workflow has the following structure:

```
{
  "name": "My Workflow",
  "id": "a414cb3b-e387-4c4f-b8de-70d51f1160da",
  "project_id": "79efba60-072a-4d4f-8d6c-22dfd3852176",
  "edges": [
    {
      "condition_type": "always",
      "enabled": true,
      "source_job_id": null,
      "source_trigger_id": "c79ce46c-ab0f-4f5b-bf2d-fed52aef2a41",
      "target_job_id": "26304a1e-267b-4bc9-940f-171db1905885",
    }
  ],
  "jobs": [
    {
      "id": "26304a1e-267b-4bc9-940f-171db1905885",
      "body": "/* job code goes here */",
      "name": "my-job",
      "adaptor": "@openfn/language-common@latest",
    }
  ],
  "triggers": [
    {
      "id": "c79ce46c-ab0f-4f5b-bf2d-fed52aef2a41",
      "comment": null,
      "custom_path": null,
      "cron_expression": null,
      "type": "webhook",
      "enabled": true
    }
  ],
}
```

When creating a new Workflow, a UUID will be created by the server.

When creating new steps or triggers (including when creating a whole new
workflow), ids will be replaced by the server with UUIDs.

You MUST ensure that all steps and triggers referenced by an edge are defined
within the same workflow.

## HTTP Adaptor Examples

You will need to create a credential with `access_token` set to your Personal
Access Token (PAT) and `baseUrl` set to your OpenFn instance (ie,
`"https://app.openfn.org"`)

Create new Workflow:

```
post(
  `/api/projects/${$.projectId}/workflows`,
  {
    "name": "My Workflow",
    "edges": [
      {
        "source_trigger_id": "c79ce46c-ab0f-4f5b-bf2d-fed52aef2a41",
        "target_job_id": "26304a1e-267b-4bc9-940f-171db1905885",
      }
    ],
    "jobs": [
      {
        "id": "26304a1e-267b-4bc9-940f-171db1905885",
        "body": "/* job code goes here */",
        "adaptor": "@openfn/language-common@latest",
      }
    ],
    "triggers": [
      {
        "id": "c79ce46c-ab0f-4f5b-bf2d-fed52aef2a41",
        "type": "webhook",
        "enabled": true
      }
    ],
  }
)
```

Add a new step to an existing Workflow:

```
patch(
  `/api/projects/${$.projectId}/workflows/${$.workflowId}`,
  {
    "edges": [
      {
        "source_job_id": "c79ce46c-ab0f-4f5b-bf2d-fed52aef2a41",
        "target_job_id": "new-job",
      }
    ],
    "jobs": [
      {
        "id": "new-job",
        "body": "/* job code goes here */",
        "adaptor": "@openfn/language-common@latest",
      }
    ],
  }
)
```
