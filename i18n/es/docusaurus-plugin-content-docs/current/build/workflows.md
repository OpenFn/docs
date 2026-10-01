---
title: Workflows
sidebar_label: Workflows
translation_source_hash: 13857c3ec6be5f4b35e8adf71570bb4f22318f05
translation_review_status: machine
---

Los **workflows** son procesos automatizados o conjuntos de instrucciones que
cumplen una tarea. En la configuración de OpenFn, un workflow está formado por
un trigger, steps y paths que definen la lógica de la automatización. Sigue
leyendo para aprender a configurar workflows.

## Crear workflows {#create-workflows}

Para crear un workflow nuevo en tu proyecto:

1. Ve a la página **Workflows**.
2. Haz clic en el botón **Create new workflow**.
3. Dale a tu workflow un `Name` descriptivo (por ejemplo, `Register patients`,
   `Refer cases`, `Monthly payroll`).
4. Elige tu [trigger](/build/triggers.md)
5. Edita tu primer [step](/build/steps/steps.md)
6. Si hace falta, modifica la [condición del path](/build/paths.md) para definir
   _cuándo_ debe pasar el workflow al siguiente step.
7. Configura más steps según lo necesites

Mira el video de presentación de abajo para aprender a crear un workflow.

<iframe width="784" height="441" src="https://www.youtube.com/embed/HmE_wp_g1RY?si=Pud7DPS0BevAjStp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Unir ramas y saltar steps {#merging-branches-and-skipping-steps}

El editor de workflows permite unir ramas y saltar steps. Para unir dos o más
steps en uno solo, o para saltar algunos steps:

1. Pasa el cursor sobre el step que quieres unir o desde el que quieres saltar
2. Verás un ícono de más
3. Haz clic en el ícono de más y arrastra para crear un path
4. Suelta el path nuevo sobre el step que quieras de tu workflow

<iframe width="560" height="315" src="https://www.youtube.com/embed/XWq2uE6l9wI?si=ab--winNS0k3qA1R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

:::note No se admiten bucles

Los workflows con bucles no se admiten, así que tienes que conectar los paths a
steps posteriores. Cuando uses paths que unen ramas o saltan steps, puedes usar
condiciones igual que con cualquier otro step.

:::

## Ejecutar workflows {#run-workflows}

Los workflows se ejecutan automáticamente cuando están "habilitados", es decir,
cuando su trigger está activado. Un trigger webhook ejecuta tu workflow cada vez
que llega una solicitud a la URL de ese trigger, y un trigger cron ejecuta un
workflow cada vez que su programación cron coincide con la hora actual.

:::info

Ten en cuenta que los workflows están deshabilitados de forma predeterminada.
Cuando quieras que tu workflow empiece a ejecutarse, tienes que habilitarlo
manualmente.

:::

### Habilitar o deshabilitar un workflow {#enabling-or-disabling-a-workflow}

Hay dos formas de deshabilitar o habilitar un workflow en tu proyecto de OpenFn:

1. con el interruptor de estado del workflow
2. con el trigger del workflow

#### Con el interruptor de estado del workflow {#via-the-workflow-state-toggle}

Puedes habilitar o deshabilitar tu workflow con el interruptor que está en su
fila de la lista de workflows del proyecto, o con el interruptor de la barra de
navegación del Canvas del workflow.

La captura de pantalla de abajo muestra un workflow habilitado en la lista de
workflows.

![Desde la lista de workflows](/img/workflow_list_toggle.webp)

La captura de pantalla de abajo muestra un workflow deshabilitado en el Canvas
del workflow.

![Desde el Canvas del workflow](/img/workflow_canvas_toggle.webp)

#### Con el trigger del workflow {#via-the-workflow-trigger}

Para habilitar o deshabilitar un workflow desde su trigger, selecciona el ícono
del trigger en el Canvas y usa el interruptor del panel de configuración para
cambiar el estado del workflow.

![Workflow habilitado en el panel del trigger](/img/via-trigger-panel.webp)

### Runs manuales {#manual-runs}

Mira el video para ver un resumen rápido.

<iframe width="784" height="441" src="https://www.youtube.com/embed/dKMtT1QKl-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Puedes ejecutar un workflow manualmente de tres formas:

#### Con una entrada vacía {#with-an-empty-input}

Es el comportamiento predeterminado, y el dataclip de entrada de tu run será
`{}`.

<img src="/img/empty.webp" width="400" />

#### Con una entrada personalizada {#with-a-custom-input}

Puedes escribir, copiar y pegar, o importar (buscándolo en tu sistema de
archivos o arrastrándolo y soltándolo) cualquier archivo con JSON válido.

<img src="/img/custom.webp" width="400" />

#### Con una entrada existente {#with-an-existing-input}

Puedes elegir de una lista de entradas anteriores que se usaron para ejecutar
este step.

<img src="/img/existing.webp" width="400" />

### Dataclips con nombre {#named-dataclips}

Puedes ponerles nombre a los dataclips (entradas personalizadas, resultados de
steps, solicitudes de webhook) para encontrarlos y usarlos más fácilmente en tus
pruebas.

:::info Los dataclips con nombre no se borran

Los dataclips con nombre no se eliminan junto con el resto del historial del
proyecto cuando se cumple el periodo de retención. Se guardan indefinidamente.

:::

Para ponerle un nombre a tu dataclip, haz clic en el campo de la etiqueta.

<img src="/img/name_dataclip.webp" width="500"/>

Después de ponerles nombre a tus entradas, puedes buscarlas por nombre en la
barra de búsqueda.

<img src="/img/search_dataclip_by_name.webp" width="500" />

Para ver solo las entradas con nombre, haz clic en el botón de etiqueta.

<img src="/img/show_only_named_dataclips.webp" width="500" />

## Limitar la concurrencia {#limit-concurrency}

La **concurrencia** de un workflow es la cantidad de runs que se permiten para
ese workflow **_al mismo tiempo_**. En OpenFn, los propietarios y
administradores del proyecto pueden limitar la cantidad máxima de runs de un
workflow que se ejecutan al mismo tiempo. Puede servirte para asegurar un
procesamiento en serie, "de uno en uno", o para evitar que un workflow rápido de
OpenFn supere el límite de solicitudes de la API de otro sistema conectado.

:::info

Comprueba que la ejecución en paralelo no esté deshabilitada en tu proyecto,
porque eso tiene prioridad sobre el límite de concurrencia del workflow.

:::

### ¿Qué pasa cuando un workflow tiene un límite de concurrencia? {#what-happens-when-concurrency-limit-is-set-on-a-workflow}

Cuando un workflow tiene configurado un límite de concurrencia, la cantidad
máxima de runs que se ejecutan a la vez no supera el número fijado para ese
workflow. Por ejemplo:

- **Concurrencia sin configurar (o = 0)**: no se aplica ningún límite
  artificial, y este workflow solo está limitado por la capacidad de cómputo
  total disponible en tu instalación de OpenFn.
- **Concurrencia = 1**: los runs de este workflow se ejecutan de uno en uno.
  Cada run tiene que _terminar_ antes de que empiece el siguiente.
- **Concurrencia = 2**: no se pueden ejecutar más de 2 runs de este workflow a
  la vez, y los demás runs tienen que quedarse en `enqueued`. Si los runs "A",
  "B" y "C" están todos en cola, empiezan a ejecutarse "A" y "B". Cuando termina
  "A", empieza "C". (Nunca más de 2 a la vez).

### Configurar la concurrencia de un workflow {#setting-concurrency-for-a-workflow}

Los límites de concurrencia se configuran en la ventana modal de configuración
del workflow, desde el Canvas del workflow.

1. Haz clic en el ícono de configuración, junto al botón de guardar de tu
   workflow, para abrir la configuración del workflow
2. En la ventana modal, escribe el límite máximo de concurrencia
3. Haz clic en guardar.

![Configuración de la concurrencia](/img/configuring-concurrency.webp)

### Salida de los logs {#log-outputs}

Por motivos de seguridad de los datos y de cumplimiento normativo, puedes
configurar la salida de los logs de un run de workflow para que no registre las
sentencias `console.log()`. Un propietario o administrador del proyecto puede
hacerlo desde la ventana modal de configuración del workflow.

1. Haz clic en el ícono de configuración.
2. En la ventana modal, desactiva el interruptor **Allow `console.log()` usage**
   para dejar de registrar las sentencias `console.log()`. Está activado de
   forma predeterminada.

![Configuración de la salida de los logs](/img/configuring-log-outputs.webp)

## Atajos de teclado {#keyboard-shortcuts}

Desde el Canvas puedes hacer algunas acciones comunes (por ejemplo, guardar) con
el teclado. Consulta la lista completa de atajos de teclado
[aquí](/keyboard-shortcuts.md).
