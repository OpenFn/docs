---
title: Seguridad de webhooks
sidebar_label: Seguridad de webhooks
slug: /webhook-security
translation_source_hash: dc4bb5877d05c57f51762f307fbc80288cb9db96
translation_review_status: machine
---

Esta página te guía por los pasos para agregar una capa extra de seguridad a tu
webhook.

## Agregar un método de autenticación de webhook {#adding-a-webhook-authentication-method}

En tus proyectos de OpenFn puedes usar webhooks para recibir datos de
aplicaciones externas con un [trigger webhook](/build/triggers.md). Para más
seguridad, cuando usas un webhook puedes exigir que las aplicaciones externas se
autentiquen antes de enviar datos a tu proyecto.

OpenFn admite la autenticación HTTP básica con nombre de usuario y contraseña, y
la autenticación con clave de API mediante el encabezado de solicitud
`x-api-key`.

### Agregar autenticación desde `Project Settings` {#adding-authentication-via-project-settings}

Puedes agregar un método de autenticación nuevo en `Webhook Security`, dentro de
los `Project Settings`. La autenticación que configures aquí se puede usar luego
en cualquiera de los workflows de este proyecto.

![Webhook Security en Project Settings](/img/lightning_auth_project_settings.webp)

Después de hacer clic en `New auth method`, elige el tipo: Basic HTTP o API Key
Authentication.

![Método de autenticación nuevo](/img/lightning_choose_auth_method.webp)

#### Basic Auth

Para Basic Auth, ponle un nombre, elige un nombre de usuario y una contraseña, y
haz clic en `Create Auth Method`.

![Basic Auth](/img/lightning_basic_auth.webp)

#### API Key

Para API Key, solo elige un nombre y haz clic en `Create Auth Method`. Se genera
una clave de API para ti.

![Autenticación con API Key](/img/lightning_api_auth.webp)

En esta página también puedes editar o eliminar tus métodos de autenticación.

// screenshot

Cuando agregas un método de autenticación a un webhook, aparece en
`Linked Triggers`.

![Linked Triggers](/img/lightning_linked_triggers.webp)

![Linked Triggers](/img/lightning_linked_triggers2.webp)

### Agregar autenticación desde un workflow {#adding-authentication-via-a-workflow}

En tus workflows puedes usar los métodos de autenticación que creaste en
`Project Settings`, o crear uno nuevo.

Cuando hagas clic en `Add authentication`, en `Webhook Authentication`,
selecciona uno o varios métodos existentes, o haz clic en
`Create a new webhook auth method`. Consulta las secciones `Basic Auth` y
`API Key` de arriba para ver cómo agregarlos.

Cuando agregas un método de autenticación, aparece en la configuración del
trigger webhook.

![Linked Triggers](/img/lightning_workflow_trigger_added.webp)

Solo las solicitudes que usen estos datos de autenticación obligatorios podrán
enviar datos a tu workflow.
