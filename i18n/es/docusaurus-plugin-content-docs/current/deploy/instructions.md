---
title: Instrucciones de despliegue
sidebar_label: Instrucciones
translation_source_hash: 7c666ed4db54994ad9e7bcda1f0ab34d1baf79fe
translation_review_status: machine
---

## Primeros pasos {#getting-started}

Para ver las instrucciones de despliegue, consulta la sección
[Getting Started](https://openfn.github.io/lightning/readme.html#getting-started)
del sitio de documentación para desarrolladores de OpenFn.

:::info

El
[sitio de documentación para desarrolladores](https://openfn.github.io/lightning)
se genera automáticamente a partir del
[repositorio de Lightning en GitHub](https://github.com/openfn/lightning). Si lo
prefieres, también puedes consultar directamente el repositorio.

:::

## Consideraciones generales {#general-considerations}

[Deployment](https://openfn.github.io/lightning/deployment.html) tiene
información sobre cifrado, configuración básica de los workers, correo,
almacenamiento, variables de entorno y mucho más.

[Workers](https://openfn.github.io/lightning/workers.html) tiene más información
sobre los workers y la red.

[Adaptors](https://openfn.github.io/lightning/adaptors.html) tiene más
información sobre los adaptors y el uso de registros locales.

## Pruebas de rendimiento {#benchmarking}

[Benchmarking](https://openfn.github.io/lightning/benchmarking.html) contiene
instrucciones para hacer pruebas de carga con k6.

## Actualizaciones {#upgrading}

Actualizar tu despliegue de OpenFn suele ser tan sencillo como cambiar la
etiqueta de imagen de `openfn/lightning` y `openfn/ws-worker` en tu manifiesto,
pero depende por completo de
[cómo hayas decidido desplegarlo](/deploy/options.md). (Por ejemplo, puedes
ejecutar las migraciones a mano, o tus herramientas de despliegue pueden hacerlo
por ti).

En resumen, siempre deberías:

- Hacer una copia de seguridad de tu base de datos
- Leer el
  [changelog de Lightning](https://openfn.github.io/lightning/changelog.html) y
  el
  [changelog del worker](https://github.com/OpenFn/kit/blob/main/packages/ws-worker/CHANGELOG.md)
- Asegurarte de que las versiones de Lightning y del worker que elegiste sean
  compatibles
- Ejecutar las migraciones de la base de datos.

:::tip Soporte del equipo principal

Los colaboradores con un acuerdo de soporte activo tienen acceso a nuevas
versiones que aún están bajo embargo de seguridad y se actualizan según sus SLA.
Si no eres un colaborador con un acuerdo de soporte activo, contacta a tu equipo
de DevOps para saber más sobre cómo actualizar tu instancia.

:::
