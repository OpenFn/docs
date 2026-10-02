---
title: Uso de colecciones con la CLI
sidebar_label: Colecciones
slug: /collections-cli
translation_source_hash: da22d0b4b6f41876daff9101ed14f28cd796084d
translation_review_status: machine
---

La CLI de OpenFn permite leer y escribir en
[colecciones](/build/collections.md): un almacén de clave/valor integrado en
OpenFn.

:::caution Versiones

La compatibilidad con colecciones se agregó a la CLI en la versión 1.9.0.

Ejecuta `npm install -g @openfn/cli` para actualizarla o instalarla.

:::

Puedes usar la CLI para:

- Explorar el contenido de las colecciones sin ejecutar un workflow
- Probar la sintaxis de consulta para obtener las claves que necesitas
- Actualizar objetos de mapeo y tablas de búsqueda a partir de archivos locales
  (o bajo control de versiones)
- Eliminar datos manualmente

:::tip

¿Tienes comentarios? ¿Quieres más compatibilidad con colecciones en la CLI?
¡Publica una solicitud de funcionalidad en
[community.openfn.org](https://community.openfn.org/c/feature-requests)!

:::

Empieza a usar la API de colecciones con `openfn collections --help`.

Necesitarás un token de acceso personal (PAT) para acceder a una colección.
También tienes que asegurarte de que la colección exista antes de poder leerla o
escribir en ella. Consulta
[Gestionar colecciones](/build/collections.md#managing-collections).

:::info ¿Quieres usar colecciones en un workflow de la CLI?

Esta documentación explica cómo usar el comando `openfn collections` de la CLI.

Si ejecutas una expresión o un workflow con la CLI, tienes que usar el adaptor
de colecciones. Consulta la
[documentación del adaptor de colecciones](/adaptors/collections#cli-usage) para
más detalles

:::

## Obtener un PAT {#getting-a-pat}

Los datos de las colecciones se guardan de forma segura dentro de un proyecto, y
solo pueden acceder a ellos los usuarios con acceso a ese proyecto. Así que, si
quieres acceder a una colección, tienes que decirle al servidor quién eres.

Para eso usamos los tokens de acceso personal. Consulta
[Crear y administrar tokens de API](/manage-users/api-tokens.md#about-api-tokens)
para más detalles.

Cuando tengas un PAT, tienes que pasárselo a la CLI. La forma más fácil es
definir la variable de entorno `OPENFN_API_KEY` o usar un archivo `.env`. La CLI
usará este valor automáticamente en todas las solicitudes.

También puedes pasar `--token` a la CLI para reemplazar el valor cargado de tu
entorno.

```bash
openfn collections get my-collection \* --token $MY_OPENFN_PAT
```

:::tip

El resto de esta guía da por hecho que la variable de entorno `OPENFN_PAT` está
definida. Si lo está y usas un servidor que tiene una colección `my-collection`,
todos los ejemplos funcionarán.

:::

## Definir un servidor {#setting-a-server}

De forma predeterminada, la CLI apunta a nuestra aplicación en la nube en
https://app.openfn.org.

Si usas la versión de código abierto u otro despliegue, también tendrás que
indicarle a la CLI qué servidor de colecciones usar.

Puedes hacerlo pasando `--endpoint` directamente:

```bash
openfn collections get my-collection \* --endpoint http://localhost:4000
```

O definiendo la variable de entorno `OPENFN_ENDPOINT`.

:::tip

Para ver qué servidor está usando la CLI, pide logs de nivel debug en la salida:

```bash
openfn collections get my-collection \* --log debug
```

:::

## Nombres únicos por proyecto {#project-name-uniqueness}

En las versiones de Lightning anteriores a la 2.17.0, los nombres de las
colecciones eran únicos en toda la instancia.

Desde la 2.17.0, los nombres de las colecciones son únicos dentro de un
proyecto, así que una instancia de OpenFn puede tener varias colecciones con el
mismo nombre.

Cualquier solicitud a la API de colecciones intenta resolver un nombre de
colección a una sola colección. Pero si hay conflictos, el servidor devuelve un
código de error 409.

Para resolverlo, pasa un id de proyecto:

```bash
openfn collections get <collection-name> <key> --project-id 1d28c76c-e4ef-4e58-ac1e-464dc479946c
```

También puedes definir el ID del proyecto con una variable de entorno, o usar el
atajo `-p`.

## Obtener elementos {#fetching-items}

Puedes obtener elementos de una colección pasando un nombre de colección y una
clave, o un patrón de claves (como `*` para "todo", o `2024*` para las claves
que empiezan por `2024`).

```bash
openfn collections get <collection-name> <key>
```

Por ejemplo, para obtener todo de `my-collection`, ejecuta:

```bash
openfn collections get my-collection \*
```

:::tip

En las terminales de Unix (macOS o Linux), el carácter `*` tiene un significado
especial. Así que, si quieres obtener todos los elementos, tienes que escaparlo
o ponerlo entre comillas:

```
openfn collections get my-collection \*
```

Incluir `*` en un patrón debería seguir funcionando:

```
openfn collections get my-collection 2024*
```

:::

Los elementos de las colecciones se guardan como cadenas, pero se serializan a
JSON en la salida.

De forma predeterminada, la CLI muestra los valores descargados en tu terminal.
Para escribirlos en disco, pasa `--output` o `-o` con una ruta de archivo
relativa a tu directorio de trabajo:

```bash
openfn collections get my-collection \* -o /tmp/my_collection.json
```

Para dar formato a la salida y que sea más fácil de leer, agrega la opción
`--pretty`:

```bash
openfn collections get my-collection \* -o /tmp/my_collection.json --pretty
```

Es importante entender que la salida funciona un poco distinto si obtienes un
elemento concreto con una sola clave o si obtienes muchos elementos con un
patrón de claves.

Una sola clave siempre devuelve su valor "en bruto" o "tal cual", sin la clave.
Así que, para una clave `item-1` cuyo valor es un objeto JSON, esto:

```bash
openfn collections get my-collection item-1
```

Descargará y guardará algo como esto:

```js
{
  "id": "item-1"
  /* ... other properties of the value */
}
```

Si usas un patrón de claves para obtener datos, el valor se devuelve en modo
multielemento: un objeto JSON donde la clave es la clave del elemento y el valor
es el valor del elemento.

Así que, si obtenemos todos los elementos cuya clave empieza por `item-`:

```bash
$ openfn collections get my-collection item-1*
```

Los datos resultantes se verán así:

```json
{
  "item-1": {
    "id": "item-1"
    /* ... other properties of the value */
  },
  "item-10": {
    "id": "item-10"
    /* ... other properties of the value */
  }
}
```

## Subir elementos {#uploading-items}

Puedes usar el comando `collections` para subir datos a una colección. Al subir,
los valores siempre vienen de un archivo en disco. En este ejemplo usaremos
archivos JSON, pero si subes un solo valor, no hace falta que sea JSON válido.

El comando `set` tiene dos modos. Para subir un solo elemento, usa:

```bash
openfn collections set <collection-name> <key> <path/to/value.json>
```

Esto lee los datos de `path/to/value.json` como una cadena y hace un upsert con
la clave indicada. No se admiten patrones de claves.

Para hacer un upsert masivo de varios valores, usa:

```bash
openfn collections set <collection-name> --items <path/to/items.json>
```

El archivo `items.json` tiene que contener un objeto JSON donde las claves son
las claves de los elementos y los valores son los valores de los elementos
(igual que lo que devuelve el comando get multielemento):

```json
{
  "item-1": {
    "id": "item-1"
    /* ... other properties of the value */
  },
  "item-10": {
    "id": "item-10"
    /* ... other properties of the value */
  }
}
```

:::tip

Recuerda que las colecciones siempre usan una estrategia de _upsert_ al subir
elementos nuevos.

Es decir, si una clave no existe, se crea y se le asigna un valor. Si ya existe,
se actualiza su valor.

:::

## Eliminar elementos {#removing-items}

También puedes eliminar elementos de una colección con el comando
`collections remove`:

```bash
openfn collections remove <collection-name> <key>
```

Se admiten patrones de claves, que te permiten eliminar varias claves.

Usa `--dry-run` para obtener una lista de las claves que se eliminarían, sin
eliminarlas realmente:

```bash
openfn collections remove my-collection 2024* --dry-run
```

## Solución de problemas {#troubleshooting}

### Error 409: varios nombres de colección coinciden {#error-409-multiple-collection-names-matched}

Esto significa que pediste una colección por su nombre, pero el servidor tiene
varias colecciones con ese nombre.

Tienes que limitar tu solicitud al proyecto correcto incluyendo el id del
proyecto en la solicitud.

Puedes pasarlo directamente:

```
openfn collections get my-collection \* --project-id 1d28c76c-e4ef-4e58-ac1e-464dc479946c
```

O definir una variable de entorno (se admiten archivos `.env`):

```
OPENFN_PROJECT_ID=1d28c76c-e4ef-4e58-ac1e-464dc479946c
```
