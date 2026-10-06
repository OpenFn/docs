---
title: Colaboración
sidebar_label: Colaboración
slug: /collaboration
translation_source_hash: e1e45b885085466371f4e864cd0b6210f1e153d5
translation_review_status: machine
---

OpenFn permite que usuarios técnicos y no técnicos colaboren de forma eficaz y
se mantengan alineados al diseñar y gestionar los workflows de un proyecto. Esto
es posible gracias al Canvas, un editor visual de workflows, y a otras
funcionalidades de colaboración, como el control de versiones, la incorporación
de colaboradores y el uso compartido de credenciales, entre otras. Esta guía te
explica cómo gestionar los colaboradores de un proyecto.

### ¿Quiénes son los colaboradores de un proyecto? {#who-are-project-collaborators}

Un **colaborador de proyecto** es cualquier persona que tiene permisos
administrativos de edición o de visualización en un proyecto de OpenFn. A cada
colaborador se le asigna UNO de los cuatro roles principales en un proyecto al
que puede acceder, como se resume en la siguiente tabla:

| Rol    | Descripción                                                                                                                                                                              |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Owner  | El usuario que creó el proyecto                                                                                                                                                          |
| Admin  | Un usuario que no es el propietario del proyecto, pero tiene acceso sin restricciones al proyecto y a sus workflows. También tiene permiso para agregar otros colaboradores al proyecto. |
| Editor | Un usuario con acceso a un proyecto que puede editar los workflows y la configuración del proyecto. El rol Editor es más limitado que el rol Admin                                       |
| Viewer | Un usuario con acceso a un proyecto, pero limitado a ver la configuración y los artefactos del proyecto.                                                                                 |

Puedes obtener más información sobre los permisos de cada rol
[aquí](/manage-projects/user-roles-permissions.md).

### Agregar colaboradores al proyecto {#add-project-collaborators}

Un usuario con rol Owner, Admin o Editor en un proyecto puede invitar a nuevos
colaboradores a su proyecto de OpenFn desde la página `Settings` del proyecto.

Para agregar como colaborador a un usuario que ya tiene cuenta en OpenFn:

1. Ve a la página `Settings` del proyecto y abre la pestaña `Collaboration`
2. Haz clic en el botón `Add Collaborator(s)`
3. Escribe el correo electrónico del usuario y selecciona el `Role` (Viewer,
   Editor o Admin).
4. Agrega más colaboradores con el botón `Add Additional Collaborator`. También
   puedes quitar a uno de los colaboradores con el botón de menos (-).
5. Haz clic en el botón `Save Collaborator` para guardar los cambios.

Si alguno de los correos electrónicos que escribiste no tiene una cuenta de
OpenFn asociada, se te pedirá que autorices a OpenFn a crearle una cuenta y
enviarle una invitación a tu proyecto. Haz clic en `Invite new user` para
continuar con la invitación.

![Colaboración](/img/collaboration.webp)

![Agregar colaborador](/img/add_collab.webp)

![Invitar a nuevos usuarios](/img/invite-new-users.webp)

:::note

Un proyecto tiene exactamente _un_ Owner, y no puedes asignar el rol Owner a
otro colaborador. Si necesitas cambiar el Owner del proyecto, contacta a tu
superadministrador o escribe a [support@openfn.org](mailto:support@openfn.org).

:::

### Quitar un colaborador {#removing-a-collaborator}

Para quitar a un colaborador de un proyecto, un Owner o un Admin puede hacer
clic en el botón `Remove Collaborator` de la página `Collaboration` y confirmar
la eliminación en la ventana emergente. No se puede quitar al Owner de un
proyecto.

:::tip

En la página de colaboradores del proyecto también puedes configurar las alertas
de fallos y los resúmenes de tus proyectos. Obtén más información
[en esta guía](/manage-projects/notifications.md).

:::
