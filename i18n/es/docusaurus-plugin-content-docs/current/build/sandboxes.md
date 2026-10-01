---
title: Sandboxes
sidebar_label: Sandboxes
translation_source_hash: 45f6e0cb7820464901f65a1cb95e99a8f3cea5d0
translation_review_status: machine
---

Los sandboxes te permiten desarrollar correcciones y funciones nuevas en tus
workflows sin afectar los runs en vivo, o de "producción".

Un sandbox es, en esencia, un clon de un proyecto, con su propio historial
privado, workflows, colecciones y configuración. Comparte las credenciales y la
facturación del proyecto principal, pero todo lo demás está aislado.

La idea es que puedas desarrollar workflows totalmente aislados del proyecto
principal y, cuando termines, hacer merge de los cambios de vuelta (entiéndase
"enviarlos" o "promoverlos").

:::tip Sandboxes de corta duración

Los sandboxes funcionan mejor cuando duran poco, por eso actualmente se
programan automáticamente para eliminarse después de hacer merge. Aunque puedes
crear todos los sandboxes que quieras (según el límite de uso de tu plan),
recomendamos tener pocos para reducir el riesgo de conflictos al hacer merge.

:::

## Contexto aislado {#isolated-context}

Un sandbox es una copia aislada de tu proyecto original, con su propio contexto.
La mayoría de las cosas de un sandbox son privadas:

- Workflows (jobs, edges y triggers; los triggers se desactivan al crearlo)
- Colecciones (se copian los nombres, no los datos)
- Credenciales de Keychain
- Miembros del proyecto (se copian del proyecto principal al crearlo y después
  son independientes)
- La mayor parte de la configuración del proyecto (también se copia del proyecto
  principal y después es independiente)

El historial de runs y los dataclips no se copian: los sandboxes empiezan con un
historial vacío y acumulan el suyo a medida que se ejecutan los workflows.

Algunas cosas se comparten con el proyecto principal en lugar de copiarse:

- **Credenciales.** Las mismas credenciales siguen disponibles en el sandbox;
  solo se duplica el vínculo entre la credencial y el proyecto. Editar una
  credencial afecta a todos los proyectos que la usan.
- **Suscripción.** Los runs y los tokens de IA que se usan en un sandbox cuentan
  para los límites de uso del proyecto principal.
- **Métodos de autenticación de webhook.** Están en el proyecto principal y se
  comparten: los triggers webhook del sandbox hacen referencia a los métodos del
  proyecto principal. La pestaña Webhook Security del sandbox es de solo lectura
  y enlaza al proyecto principal para gestionarlos. Cada trigger webhook del
  sandbox sigue teniendo su propia URL única.

## Crear sandboxes {#creating-sandboxes}

Para crear un sandbox, debes ser `editor`, `admin` u `owner` del proyecto
principal. Entra al proyecto principal, haz clic en **Sandboxes** en el menú
lateral y luego en **Create Sandbox**.

![Lista de sandboxes](/img/sandboxes_list.webp)

Tienes que ponerle un nombre al sandbox. Debe ser único entre los sandboxes del
proyecto. Si conoces git, trátalo como el nombre de una rama. Si no, puedes
darle un nombre general, como `testing`, o nombrarlo según una función concreta,
como `new-patient-workflow`.

Se elige un color al azar para asociarlo al sandbox. Verás ese color en el
selector de proyectos de la ruta de navegación mientras estés dentro del
sandbox, para que sepas fácilmente dónde estás. Si quieres, puedes elegir otro
color.

![Ventana modal Create Sandbox](/img/create_sandbox_modal.webp)

Cuando estés listo, haz clic en **Create Sandbox**. Entrarás automáticamente al
sandbox.

Al crear el sandbox, se copian los miembros del proyecto principal: quien lo
crea pasa a ser `owner` del sandbox, los propietarios del proyecto principal
pasan a `admin` y los demás miembros mantienen su rol original. A partir de ahí,
el sandbox gestiona sus propios miembros: agregar o quitar a alguien en el
proyecto principal no afecta a los sandboxes que ya existen debajo.

Todos los triggers de workflow del nuevo sandbox empiezan **desactivados**. Así
se evita duplicar runs de producción desde el momento en que existe el sandbox.
Puedes volver a activar cualquier trigger que quieras probar desde la página del
workflow en el sandbox.

Después de crearlo, la acción Edit de la tarjeta de un sandbox te permite
renombrarlo y cambiar su color. Todo lo demás (workflows, credenciales,
miembros, entorno y el resto de la configuración) se gestiona desde dentro del
propio sandbox.

### Límites {#limits}

Hay dos límites prácticos para crear sandboxes:

- **Cantidad de sandboxes activos.** Tu suscripción incluye un tope de sandboxes
  activos (no programados para eliminarse) que puedes tener. Cuando llegas al
  tope, el botón **Create Sandbox** se desactiva y muestra un mensaje emergente
  que explica por qué. Los sandboxes programados para eliminarse no cuentan, así
  que puedes liberar un lugar eliminando uno que ya no necesites.
- **Profundidad de anidamiento.** Un sandbox puede tener a su vez sandboxes
  debajo, y así sucesivamente, hasta una profundidad configurable (5 por
  defecto). Cuando el proyecto principal llega al tope, el botón **Create
  Sandbox** de su página de sandboxes se desactiva y muestra el mensaje
  emergente "Maximum sandbox nesting depth reached".

## Quién puede hacer qué {#who-can-do-what}

El acceso a los sandboxes funciona igual que en los proyectos normales: lo que
puedes ver y hacer depende de tu rol en el proyecto sobre el que actúas. El enum
`User.role` (`:user` / `:superuser`) es un tipo de usuario para las pantallas
globales de gestión de usuarios, no un rol de proyecto.

| Acción                              | Rol necesario                                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------------------------- |
| Ver un sandbox                      | Fila directa en `project_users`, o usuario de soporte con `allow_support_access` en el sandbox |
| Abrir un sandbox                    | Igual que el anterior                                                                          |
| Crear un sandbox                    | `editor`, `admin` u `owner` en el proyecto principal                                           |
| Editar o eliminar un sandbox        | `admin` u `owner` en el propio sandbox, o `admin`/`owner` en la raíz del espacio de trabajo    |
| Hacer merge de un sandbox           | `admin` u `owner` en el origen, y `editor` o superior en el destino del merge                  |
| Cancelar una eliminación programada | Igual que para editar o eliminar                                                               |

El selector global de proyectos oculta los proyectos que no puedes ver.

## Ver un sandbox {#viewing-a-sandbox}

Puedes ver todos los sandboxes de un proyecto en la página **Sandboxes** del
menú lateral. Desde ahí, haz clic en el nombre de un sandbox para entrar.
También puedes entrar a un sandbox desde el selector global de proyectos
(Ctrl/Cmd+P).

Cuando estás dentro de un sandbox, el selector de proyectos de la ruta de
navegación muestra el nombre del sandbox y toma el color elegido para él, así
sabes fácilmente qué versión de tu proyecto estás viendo.

![Ruta de navegación dentro de un sandbox](/img/sandbox_breadcrumb.webp)

Cada sandbox tiene sus propios workflows, colecciones, historial y
configuración, aislados. Al recorrer las páginas, notarás que no aparecen los
datos de tu proyecto original. Esto se debe a que tu sandbox es un clon
independiente del proyecto original.

Cada pestaña de la página Settings muestra un aviso que explica cómo se
relacionan sus cambios con el proyecto principal:

- **Sandbox Identity, Collaboration, Sync to GitHub, Data Storage, History
  Exports**: los cambios son privados del sandbox y no se sincronizan al hacer
  merge.
- **Credentials**: los cambios se sincronizan con el proyecto principal al hacer
  merge.
- **Security**: de solo lectura en el sandbox; se gestiona en el proyecto
  principal.
- **Webhook Security**: lo gestiona el proyecto principal. Los métodos se
  comparten y se aplican a los triggers webhook del sandbox, pero solo se pueden
  crear, editar o eliminar desde el proyecto principal.

![Aviso de configuración del sandbox en la pestaña Credentials](/img/sandbox_settings_banner.webp)

## Entornos {#environments}

Los entornos te permiten ejecutar un workflow con un conjunto especial de
valores de credenciales, separado del de tu proyecto principal. Así puedes usar
servidores, modos y bases de datos de desarrollo mientras trabajas en tu
sandbox, sin interferir con los servicios de producción en vivo.

El entorno es solo una etiqueta, y cada credencial que usa tu workflow tiene un
conjunto de valores asociados a esa etiqueta. Por ejemplo, al conectarte a
DHIS2, tu credencial principal tendrá datos de inicio de sesión privados, pero
tu entorno `dev` podría usar el sandbox público y tener un nombre de usuario y
una contraseña diferentes.

Por defecto, todos los sandboxes reciben el entorno `dev`. Puedes cambiarlo
desde la página Settings.

Todos los entornos se guardan cifrados y de forma segura en nuestra base de
datos, así que es totalmente seguro duplicar credenciales de producción en
varios entornos.

Para cada credencial que use tu workflow, debes asegurarte de que haya un valor
configurado para el entorno de tu sandbox. Si no configuras tus credenciales, el
workflow fallará con instrucciones claras para corregirlo.

## Hacer merge de sandboxes {#merging-sandboxes}

Cuando termines de hacer cambios en tus workflows, es hora de hacer merge de
esos cambios de vuelta en el proyecto principal (o en cualquier otro proyecto en
el que puedas escribir).

Ve a la página **Sandboxes**, busca el sandbox en la lista y haz clic en el
ícono **Merge** de la derecha. Se te pedirá que elijas el proyecto de destino
del merge. Normalmente querrás hacer merge en el proyecto principal original,
que viene seleccionado por defecto.

También puedes elegir qué workflows incluir en el merge. Esto ayuda a reducir
los conflictos con cambios en el proyecto de base y a entender las consecuencias
del merge.

Al hacer merge, reemplazamos el contenido de los workflows del proyecto de
destino con el de tu sandbox. Si renombras un workflow, parecerá que se eliminó
de la base y se agregó un workflow nuevo.

El merge de las colecciones es por relación, no por datos. Una colección que
solo existe en el sandbox se crea vacía en el destino. Una colección que solo
existe en el destino se elimina (junto con sus elementos). Una colección con el
mismo nombre en ambos lados no se toca: no se copian los elementos de ninguno de
los dos.

Para hacer merge de un sandbox, debes ser `admin` u `owner` del **origen** (el
sandbox desde el que haces merge); si no, el botón Merge está desactivado.
También necesitas el rol `editor` o superior en el proyecto de destino; si no,
se rechaza el merge.

Después del merge, el sandbox de origen queda **programado para eliminarse**
tras el período de gracia configurado. Pasa a la sección "Scheduled for
deletion" de la lista de sandboxes, donde puedes restaurarlo durante ese plazo
si cambias de opinión. Los entornos y las credenciales asociados al proyecto no
se ven afectados.

Si el sandbox del que haces merge tiene sus propios sandboxes debajo, también se
programan para eliminarse. La ventana modal de confirmación del merge te muestra
cuántos descendientes se retirarán junto con el origen.

![Ventana modal para hacer merge de un sandbox](/img/merge_sandbox_modal.webp)

## Conflictos {#conflicts}

Si alguna vez trabajaste con un sistema de control de versiones de código, como
git o Subversion, ya conocerás la idea de los conflictos.

Puede haber un conflicto cuando intentas hacer merge de un sandbox en un
proyecto de destino y el destino cambió desde que se creó el sandbox. Por
ejemplo, cambias el adaptor de un step en el sandbox de `common` a `http`,
mientras que un colega cambia el adaptor de ese mismo step en el proyecto
principal a `salesforce`. No hay forma automática de combinar esos cambios.

Para ayudarte a ver qué pasa, la ventana modal de confirmación del merge marca
cada workflow con una de cuatro etiquetas:

- **Changed**: el workflow se modificó en el sandbox y se reemplazará la copia
  del destino.
- **Diverged**: el workflow se modificó en el destino después de crear el
  sandbox. Si lo incluyes en el merge, se sobrescribirán esos cambios del
  destino. Los workflows divergentes se marcan con un ícono de advertencia
  ámbar.
- **New**: el workflow no existe en el destino y se creará.
- **Deleted in sandbox**: el workflow se eliminó en el sandbox. Si lo incluyes,
  se elimina del destino.

Tú eliges qué workflows incluir. Seleccionar uno **Diverged** es decidir de
forma explícita sobrescribir la versión del destino con la del sandbox. No hay
una herramienta para resolver conflictos en la aplicación: o aceptas la versión
del sandbox o dejas el workflow fuera.

Puedes usar git y la CLI para resolver localmente los conflictos de los
workflows divergentes: consulta
[Resolver conflictos de merge](/build-for-developers/cli-sync.md#resolving-merge-conflicts).

Si necesitas combinar cambios de ambos lados, descarga los dos proyectos con la
CLI, resuelve las diferencias localmente y vuelve a enviar el resultado.

## Restaurar un sandbox eliminado {#restoring-a-deleted-sandbox}

Cuando se elimina un sandbox, ya sea de forma explícita o como parte de un
merge, no se borra de inmediato. El sandbox (y cualquier sandbox que tenga
debajo) queda programado para eliminarse, con todos los triggers de sus
workflows desactivados, y un worker lo borra definitivamente cuando termina el
período de gracia configurado.

Durante ese plazo, el sandbox aparece en la sección "Scheduled for deletion", al
final de la lista de sandboxes. Cualquier persona con permisos de `admin` u
`owner` en el sandbox (o en la raíz del espacio de trabajo) puede hacer clic en
**Restore** para cancelar la eliminación programada. Al restaurarlo, se
reactivan el sandbox y sus descendientes; los triggers siguen desactivados y hay
que volver a activarlos a mano.

![Sección Scheduled for deletion](/img/scheduled_for_deletion.webp)

Cuando termina el período de gracia y se ejecuta el worker de purga, el sandbox
desaparece para siempre.

## Editar sandboxes localmente {#editing-sandboxes-locally}

Los sandboxes son totalmente compatibles con la CLI.

Usa `openfn project pull` para descargar un sandbox localmente y
`openfn project push` para enviar los cambios de vuelta al sandbox en la
aplicación.

Puedes usar `openfn project merge` para hacer merge de dos proyectos locales y
luego `openfn project deploy` para sincronizarlos con la aplicación.

Si trabajas con varios sandboxes en un mismo espacio de trabajo, hay dos cosas
que ayudan:

- `openfn project fetch` asigna alias a los sandboxes automáticamente. Cuando
  descargas un sandbox sin indicar `--alias`, la CLI usa el id del sandbox como
  alias, para que varios sandboxes puedan convivir en el mismo espacio de
  trabajo sin chocar con el proyecto principal ni entre sí.
- `openfn project checkout <project>` cambia el proyecto activo del espacio de
  trabajo. Úsalo para pasar de un sandbox a otro entre los que ya descargaste.

## Buenas prácticas {#best-practices}

Los sandboxes se corresponden muy bien con las ramas de git, y las formas de
trabajo que mejor funcionan los tratan de la misma manera.

**Crea un sandbox por cada tarea.** Dale a cada función nueva, corrección o
issue su propio sandbox, en lugar de compartir un único sandbox `testing` de
larga duración entre varias personas y varios cambios. Los sandboxes pequeños y
de corta duración son más fáciles de revisar y es mucho menos probable que
generen conflictos al hacer merge.

**Apila sandboxes cuando un trabajo depende de otro anterior.** Si un sandbox
tiene que existir durante un tiempo (por ejemplo, mientras espera una revisión o
una ventana de lanzamiento) y quieres empezar algo que se apoya en él, crea un
sandbox de ese sandbox en lugar de hacer merge antes de tiempo solo para
desbloquearte. Los sandboxes se pueden anidar hasta la profundidad configurada.
Haz lo mismo en git: crea la rama del trabajo dependiente a partir de la rama de
la función, no de main.

**Evita trabajar directamente en el proyecto principal.** Los cambios que hagas
ahí están en vivo y aparecen como workflow divergente en el merge de todos los
demás sandboxes. Empieza en un sandbox y haz merge cuando el cambio esté listo.
