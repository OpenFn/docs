---
title: Rastreador de impacto
id: impact
translation_source_hash: 9cd3fac6b83ea2809ad16a7266363b379d84822d
translation_review_status: machine
---

## Introducción {#introduction}

OpenFn es un bien público digital gratuito y de código abierto. Muchos usuarios
no pueden contribuir económicamente ni participar en nuestra comunidad de
desarrollo de producto, pero al enviar cada noche estos informes anónimos de uso
agregado aseguran la sostenibilidad del proyecto a largo plazo, porque:

1. nos permiten entender las necesidades de nuestros usuarios,
2. demuestran mejor nuestro impacto,
3. y nos ayudan a mantener el apoyo de los donantes.

:::success Rastreador de impacto anónimo

Visita [openfn.org/impact](https://www.openfn.org/impact) para verlo en acción.

:::

¿Cómo funciona? Estas métricas ([ver más abajo](#the-data-yes-all-of-it)) son
anónimas y las envían operadores de instancias de todo el mundo. Cuando alguien
inicia OpenFn, lo primero que ve es un mensaje como el de abajo, que explica
exactamente qué datos anónimos agregados envía y adónde los envía.

Según las instrucciones de instalación, los administradores de la instancia
pueden dejar de enviar métricas en cualquier momento con la variable de entorno
`USAGE_TRACKING_ENABLED`, ¡pero la mayoría prefiere contribuir!

## Los datos. (Sí, todos.) {#the-data-yes-all-of-it}

Si el administrador de un cliente de métricas envía datos de uso anónimos a
cualquier instancia de un servidor de métricas, esto es lo que se envía:

```json
{
  "version": "2",
  "instance": {
    "version": "v2.4.2:match:f1bd9ae",
    "hashed_uuid": "4CE189B993247E94FD2A9EDD28CEC9C9D5A7125AB85F4586A6C994D89DCC0979",
    "no_of_users": 137,
    "operating_system": "linux",
    "no_of_active_users": 70
  },
  "projects": [
    {
      "workflows": [
        {
          "no_of_jobs": 1,
          "no_of_runs": 6,
          "hashed_uuid": "C08DD42A9DF75A017001429240D0E6C425BA89AF03C134A05E631CDB0A53FA87",
          "no_of_steps": 6,
          "no_of_active_jobs": 1
        },
        {
          "no_of_jobs": 4,
          "no_of_runs": 6,
          "hashed_uuid": "BD70CCCA4D953D1B59F7803CC24A4EE84CFD21DE4F46CBA85FB3FA41AACA4EAD",
          "no_of_steps": 24,
          "no_of_active_jobs": 4
        },
        ... more workflows
      ],
      "hashed_uuid": "71A5B39B570E1E9156B73997C327E5A2FABD06507CE3FEBF85128016446FCD49",
      "no_of_users": 6,
      "no_of_active_users": 6
    },
    ... more projects
  ],
  "report_date": "2024-04-25",
  "generated_at": "2024-04-26T01:30:00.876776Z"
}
```
