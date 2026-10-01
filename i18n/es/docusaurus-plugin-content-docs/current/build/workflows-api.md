---
title: API de workflows
sidebar_label: API de workflows
translation_source_hash: 770a1a41ea82bd8249b1dfe732d7b21a8710563c
translation_review_status: machine
---

La API de workflows te permite crear y modificar workflows mediante código.

Puedes usar la API de workflows con el adaptor `http` o con curl.

:::info Compatibilidad de versiones

La API de workflows se introdujo en la versión 2.10.10, en enero de 2025

:::

## Autenticación {#authentication}

Todas las solicitudes deben estar autenticadas.

La autenticación usa el encabezado Authorization con un token de acceso personal
(Personal Access Token, PAT) generado en la aplicación.

Si usas el adaptor http, asigna tu PAT al `access_token` de la credencial.

Si usas curl, agrega el bearer token (en el ejemplo de abajo, el token se toma
de una variable de entorno):

```
curl -H "Authorization: Bearer $OPENFN_PAT" https://app.openfn.org/api/projects/<project-id>/workflows
```

## API REST {#rest-api}

La API de workflows tiene la siguiente estructura RESTful:

- `GET /api/projects/:projectId/workflows`: obtiene la lista de workflows de un
  proyecto. Devuelve un array de workflows.
- `GET /api/projects/:projectId/workflows/:workflowId`: obtiene un solo workflow
  por su id. Devuelve un solo workflow.
- `PUT /api/projects/:projectId/workflows`: crea un workflow nuevo. Incluye el
  JSON del workflow en el cuerpo. Devuelve el JSON del workflow actualizado.
- `PUT /api/projects/:projectId/workflows/:workflowId`: actualiza un workflow.
  Reemplaza el workflow existente por el JSON del cuerpo. Devuelve el JSON del
  workflow actualizado.
- `PATCH /api/projects/:projectId/workflows/:workflowId`: actualiza un workflow
  en parte. El workflow existente se actualiza con el JSON del cuerpo.

## Estructura de un workflow {#workflow-structure}

Un workflow tiene la siguiente estructura:

```
{
  "name": "My Workflow",
  "id": "a414cb3b-e387-4c4f-b8de-70d51f1160da",
  "project_id": "79efba60-072a-4d4f-8d6c-22dfd3852176",
  "edges": [
    {
      "id": "759fe475-ed23-4914-8a6d-155968bc0aa1"
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

Al crear un workflow nuevo, el servidor genera UUIDs para el workflow y para
todos sus steps y edges. Al crear nodos y edges nuevos puedes usar cualquier
cadena como id, siempre que la uses de forma coherente.

En una solicitud PUT o PATCH, a los steps y edges nuevos se les DEBEN asignar
UUIDs. Si usas el adaptor `http`, puedes usar `util.uuid()` para hacerlo (ver el
ejemplo de abajo).

DEBES asegurarte de que todos los steps y triggers a los que hace referencia un
edge estén definidos dentro del mismo workflow.

## Ejemplos con el adaptor HTTP {#http-adaptor-examples}

Tienes que crear una credencial con `access_token` igual a tu token de acceso
personal (PAT) y `baseUrl` igual a tu instancia de OpenFn (por ejemplo,
`"https://app.openfn.org"`)

Crear un workflow nuevo:

```js
post(`/api/projects/${$.projectId}/workflows`, {
  body: {
    name: 'My Workflow',
    edges: [
      {
        source_trigger_id: 'trigger-1',
        target_job_id: 'job-1',
        condition_type: 'always',
      },
    ],
    jobs: [
      {
        id: 'job-1',
        name: 'My Job',
        body: '/* job code goes here */',
        adaptor: '@openfn/language-common@latest',
      },
    ],
    triggers: [
      {
        id: 'trigger-1',
        type: 'webhook',
        enabled: true,
      },
    ],
  },
  headers: { 'content-type': 'application/json' },
});
```

El workflow resultante, con los UUIDs y los metadatos actualizados, se escribe
en `state.data.workflow`.

Agregar un step y un edge nuevos a un workflow existente:

```js
fn(state => {
  const jobId = util.uuid();
  state.diff = {
    edges: [
      {
        id: util.uuid(),
        source_job_id: 'c79ce46c-ab0f-4f5b-bf2d-fed52aef2a41',
        target_job_id: jobId,
        condition_type: 'always',
      },
    ],
    jobs: [
      {
        id: jobId,
        body: '/* job code goes here */',
        adaptor: '@openfn/language-common@latest',
      },
    ],
  };
  return state;
});
patch(`/api/projects/${$.projectId}/workflows/${$.workflowId}`, {
  body: $.diff,
  headers: { 'content-type': 'application/json' },
});
```

El workflow resultante se escribe en `state.data.workflow`.
