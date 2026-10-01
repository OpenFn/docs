---
title: Roles y permisos de usuario
sidebar_label: Roles de usuario
translation_source_hash: ac3a8fdca96392acaf666020cf7c03ebdf796adf
translation_review_status: machine
---

Cuando invitas a usuarios de OpenFn a trabajar en tu proyecto como
`Collaborators`, se les asigna un `Role` que determina sus permisos. Los cuatro
roles disponibles son: Owner (**solo 1 por proyecto**), Admin, Editor y Viewer.
Consulta la tabla de abajo para ver los permisos de cada rol.

| Contexto  | Acción                                                                       | Owner              | Admin              | Editor             | Viewer             |
| :-------- | :--------------------------------------------------------------------------- | :----------------- | :----------------- | :----------------- | :----------------- |
| Workflows | Crear un workflow                                                            | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x:                |
| Workflows | Editar un job de un workflow                                                 | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x:                |
| Workflows | Agregar o quitar un método de autenticación de webhook de un workflow        | :heavy_check_mark: | :heavy_check_mark: | :x:                | :x:                |
| Workflows | Eliminar un workflow                                                         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x:                |
| Workflows | Ejecutar desde el Inspector                                                  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x:                |
| Workflows | Seleccionar las 5 entradas más recientes de un job de un workflow            | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x:                |
| History   | Ver, buscar y filtrar en la página History                                   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| History   | Ver un run desde el historial de work orders                                 | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| History   | Ver una entrada desde el historial de work orders                            | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| History   | Ejecutar desde el historial de work orders                                   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x:                |
| Settings  | Ver el nombre del proyecto                                                   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Settings  | Editar el nombre del proyecto                                                | :heavy_check_mark: | :heavy_check_mark: | :x:                | :x:                |
| Settings  | Ver la descripción del proyecto                                              | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Settings  | Editar la descripción del proyecto                                           | :heavy_check_mark: | :heavy_check_mark: | :x:                | :x:                |
| Settings  | Exportar el proyecto                                                         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Settings  | Eliminar un proyecto                                                         | :heavy_check_mark: | :x:                | :x:                | :x:                |
| Settings  | Ver las credenciales del proyecto, su tipo y su propietario                  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Settings  | Agregar o quitar un método de autenticación de webhook del proyecto          | :heavy_check_mark: | :heavy_check_mark: | :x:                | :x:                |
| Settings  | Cambiar el requisito de MFA del proyecto                                     | :heavy_check_mark: | :heavy_check_mark: | :x:                | :x:                |
| Settings  | Agregar o quitar colaboradores del proyecto                                  | :heavy_check_mark: | :heavy_check_mark: | :x:                | :x:                |
| Settings  | Ver los colaboradores del proyecto (project_users, rol, resúmenes y alertas) | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Settings  | Editar sus propios resúmenes y alertas                                       | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Settings  | Editar los resúmenes y alertas de otros                                      | :x:                | :x:                | :x:                | :x:                |
| Settings  | Cambiar la política de almacenamiento de dataclips de entrada y salida       | :heavy_check_mark: | :heavy_check_mark: | :x:                | :x:                |
| Settings  | Cambiar el período de retención del historial                                | :heavy_check_mark: | :heavy_check_mark: | :x:                | :x:                |
| Settings  | Actualizar la conexión del proyecto o repositorio de GitHub                  | :heavy_check_mark: | :heavy_check_mark: | :x:                | :x:                |
| Settings  | Iniciar la sincronización con GitHub                                         | :heavy_check_mark: | :heavy_check_mark: | :x:                | :x:                |

### Privilegios de superusuario {#super-user-privileges}

Cada instancia de OpenFn tiene un usuario con el rol de superusuario, que le da
control administrativo total de la plataforma. Esto incluye la gestión de
usuarios, proyectos, el registro de auditoría y la autenticación de terceros,
con los siguientes privilegios de superusuario:

| Aspecto               | Descripción                                                      | Funciones y permisos                                                                        |
| --------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Gestión de usuarios   | La gestión de los usuarios de una instancia de OpenFn            | Crear, editar y eliminar usuarios                                                           |
| Gestión de proyectos  | Cómo se crean y gestionan los proyectos en la instancia          | Crear, eliminar y editar un proyecto, y asignarle usuarios                                  |
| Autenticación         | Gestión del acceso de terceros para los usuarios de la instancia | Configurar OpenID Auth para la instancia                                                    |
| Registro de auditoría | Auditabilidad y gestión de cambios                               | Ver el historial de las acciones relevantes de los usuarios en la instancia para auditorías |

Si usas la plataforma de OpenFn alojada (por ejemplo, app.openfn.org), escribe a
[support@openfn.org](mailto:support@openfn.org) si necesitas contactar al
superusuario para solicitar proyectos nuevos o cambios de configuración.
