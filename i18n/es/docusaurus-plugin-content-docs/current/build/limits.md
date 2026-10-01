---
title: Límites
translation_source_hash: 322601a39382248bb796b091a3a0c3e3e7273be2
translation_review_status: machine
---

La instancia de OpenFn alojada en la nube tiene varios límites que ayudan a que
todo funcione sin problemas. La siguiente tabla muestra los límites de los
distintos planes. Para ver una lista de límites más detallada, consulta la
[página de precios de OpenFn](https://openfn.org/pricing). En las instancias
autoalojadas, estos límites se pueden configurar. Consulta la
[guía de despliegue](https://openfn.github.io/lightning/deployment.html#limits)
para más detalles.

| Función                               | Descripción                                                                              | DPG          | Free  | Core  | Growth | Scale     | Unlimited |
| ------------------------------------- | ---------------------------------------------------------------------------------------- | ------------ | ----- | ----- | ------ | --------- | --------- |
| Runs                                  | Número máximo de runs permitidos por mes                                                 | Ilimitado    | 100   | 2000  | 5000   | 10 000    | Ilimitado |
| Duración de ejecución del workflow    | Tiempo máximo que puede ejecutarse un workflow antes de que se detenga                   | Configurable | 60 s  | 5 min | 20 min | 30 min    | 30 min    |
| Uso de memoria                        | Memoria máxima permitida por attempt del workflow                                        | Configurable | 128MB | 256MB | 512MB  | 1GB       | 1GB       |
| Tamaño del state                      | Tamaño máximo de los objetos state dentro de la VM del runtime (25 % del uso de memoria) | Dinámico     | 32MB  | 64MB  | 128MB  | 256MB     | 256MB     |
| Tamaño de los dataclips               | Tamaño máximo de los dataclips guardados a partir de la salida de un run                 | Configurable | 512KB | 2MB   | 10MB   | 10MB      | 10MB      |
| AI Assistant                          | Máximo de tokens de IA disponibles                                                       | Configurable | 500K  | 1.5M  | 5M     | 10M       | 10M       |
| Colecciones de datos (almacenamiento) | Almacenamiento máximo para colecciones de datos                                          | Configurable | 1MB   | 5MB   | 10MB   | 50MB      | 50MB      |
| Colecciones de datos (cantidad)       | Número máximo de colecciones de datos por proyecto                                       | Configurable | 2     | 5     | 10     | Ilimitado | Ilimitado |
| Control de concurrencia               | Permite a los usuarios controlar los límites de concurrencia del proyecto                | Configurable | Sí    | Sí    | Sí     | Sí        | Sí        |

<!--
To add this back in the future
| Workflow concurrency limit  | Maximum workflow runs that can be executed in parallel       | Configurable | N/A     | N/A    | N/A     | N/A       | N/A       |
| Project concurrency limit   | Maximum project runs that can be executed in parallel.       | Configurable | N/A     | N/A    | N/A     | N/A       | N/A       | -->

:::tip Aumentar los límites en instancias alojadas en la nube y gestionadas

En los planes estándar, puedes aumentar tus límites mejorando a un plan superior
con las
[instrucciones para mejorar tu plan](/hosted/overview.md#upgrading-your-subscription).

Para límites personalizados o mejoras en despliegues dedicados, escribe a
enterprise@openfn.org.

:::

## Duración de ejecución del workflow (1 hora) {#workflow-execution-duration-1-hour}

Cada attempt de un workflow debe completarse en menos de `1 hour`. Puedes ver la
duración de cada attempt haciendo clic en su ID. Si un attempt supera este
límite, el worker lo detiene y verás la insignia `Killed:Timeout` como estado
del attempt.

> _Los superusuarios de la instancia pueden controlar este límite con la
> variable de entorno `MAX_RUN_DURATION`._

## Uso de memoria (1GB) {#memory-usage-1gb}

Cada attempt de un workflow no puede usar más de `1GB` de memoria. Puedes ver el
uso máximo de memoria de cada attempt haciendo clic en su ID. Si un attempt
supera este límite, el worker lo detiene y verás la insignia `Killed:OOM` como
estado del attempt.

> _Los superusuarios de la instancia pueden controlar este límite con la
> variable de entorno `MAX_RUN_MEMORY`._

Ten en cuenta que el objeto `state` que se devuelve al final de cada step de un
workflow no debe superar el 25 % del límite total de memoria del runtime, o tu
run se detendrá con un error `StateTooLarge`.

## Tamaño de los dataclips (10MB) {#dataclip-size-10mb}

1. Cada **solicitud de webhook** a una URL de trigger no puede superar `10MB`.
2. Si guardas el state final de cada **run** como dataclip, cada dataclip no
   puede superar `10MB`.

<!-- TODO: make final decision on attempt states -->
<!-- 3. If you are persisting the final state of an **attempt** as a dataclip, it may
   not exceed `10MB`. -->

Si envías a una URL de trigger webhook un payload que supera este límite, el
servidor responde con un error `413` y el mensaje `:request_entity_too_large`.

Si los dataclips que genera el state final de los runs y los attempts son
demasiado grandes, no se guardan. El worker igual procesa los steps siguientes,
pero esos steps no se podrán reintentar, porque Lightning no guarda una copia de
los dataclips. Verás el error `ERROR: DataClip too large for storage` en los
logs del attempt.

> _Los superusuarios de la instancia pueden controlar este límite con la
> variable de entorno `MAX_DATACLIP_SIZE`._
