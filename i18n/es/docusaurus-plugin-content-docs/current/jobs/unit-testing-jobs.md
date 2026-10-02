---
sidebar_label: Pruebas unitarias de jobs
title: Escribir pruebas unitarias para tus jobs
translation_source_hash: 6499f848fcc9f9c81283ae56a0bafce3bbbe9b03
translation_review_status: machine
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

La mayor parte del código de un job sigue el mismo patrón: obtiene algunos
registros, les cambia la forma y los envía a otro lugar. Pero esa parte de
transformación suele crecer hasta convertirse en lógica compleja: convertir un
texto en un registro estructurado, mapear códigos locales a elementos de datos
de DHIS2 o unificar una docena de formatos de fecha en uno solo.

Hacer pruebas unitarias de esa lógica ayuda a comprobar que el código funciona
correctamente y a evitar errores cuando se modifique más adelante.

:::info Requisitos

Necesitas `@openfn/cli` v1.39.0 o posterior para compilar el código de tus jobs
para las pruebas. Comprueba tu versión con `openfn -v` y actualízala con
`npm install -g @openfn/cli`.

También necesitas un proyecto de OpenFn descargado en tu computadora:

```bash
openfn project pull <uuid>
```

Así obtienes una carpeta con `openfn.yaml`, un directorio `workflows/` y un
archivo `.js` por cada step. Consulta [OpenFn Sync](/documentation/sync) para
saber cómo descargar proyectos, hacer checkout y desplegarlos.

:::

## Paso 1: exporta las funciones auxiliares que quieras probar {#step-1-export-any-helper-you-want-to-test}

Las funciones que quieras probar tienen que estar exportadas:

```js title="testable code"
export const FIELDS = ['id', 'name', 'dob'];

export const parseSms = text =>
  Object.fromEntries(FIELDS.map((f, i) => [f, text.split('#')[i]]));

fn(state => ({ ...state, data: state.data.messages.map(parseSms) }));
```

## Paso 2: compila tus workflows {#step-2-compile-your-workflows}

Desde la raíz de tu proyecto (la carpeta que tiene `openfn.yaml`):

```bash
openfn compile --exports-only
```

```
[CLI] ✔ Compiled 1 step(s) to /path/to/project/dist
```

Los archivos compilados se guardan en `dist/`, con la misma estructura que tus
workflows. **Los archivos de salida usan la extensión `.mjs`.** Node siempre
trata los archivos `.mjs` como módulos ES, así que no necesitas
`"type": "module"` en tu `package.json` para que el código compilado se importe
sin problemas.

:::warning No hagas commit de los archivos `.mjs` generados

La CLI no agrega un `.gitignore` para el directorio compilado, así que agrégalo
tú antes de tu primer commit:

```title=".gitignore"
dist/
```

Los archivos `.mjs` son resultado de la compilación y salen por completo de tus
steps `.js`. Si los incluyes en el repositorio, cada edición te deja diffs
ruidosos y conflictos de merge, y `dist/` puede dejar de coincidir con
`workflows/`.

:::

Otras opciones útiles:

```bash
# Write somewhere other than dist/
openfn compile --exports-only -o workflows

# Wipe the output folder first
openfn compile --exports-only --clean

# Just one workflow, by name
openfn compile sms-parser --exports-only
```

Ejecuta `openfn compile --help` para ver la lista completa.

También puedes definir la carpeta de salida de forma permanente en
`openfn.yaml`:

```yaml title="openfn.yaml"
dirs:
  workflows: workflows
  compiled: workflows
```

## Paso 3: escribe una prueba {#step-3-write-a-test}

Aquí recomendamos el ejecutor de pruebas integrado de Node porque no necesita
dependencias, pero nada de esto es exclusivo de Node. Puedes usar cualquier
ejecutor de pruebas que pueda importar un módulo ES.

:::tip Ponle a tus archivos de prueba la extensión `.test.mjs`

La salida compilada es `.mjs` y no necesita configuración. Pero tus archivos de
_prueba_ son cosa tuya: si les pones la extensión `.js` en un proyecto sin
`"type": "module"`, Node te avisará de que tiene que volver a analizarlos como
módulos ES. Si los llamas `.test.mjs`, evitas el aviso sin tocar tu
`package.json`.

:::

<!-- prettier-ignore -->
<Tabs groupId="write-a-test">
  <TabItem value="source" label="El código del job">
    ```js title="workflows/sms-parser/parse-message.js"
    export const FIELDS = ['id', 'name', 'dob', 'weight'];

    export const parseSms = text => {
      const parts = text.trim().split('#');
      return FIELDS.reduce((record, field, i) => {
        record[field] = parts[i]?.trim() ?? null;
        return record;
      }, {});
    };

    fn(state => ({
      ...state,
      data: state.data.messages.map(parseSms),
    }));
    ```

  </TabItem>
  <TabItem value="output" label="La salida compilada">

    Después de `openfn compile --exports-only`:

    ```js title="dist/sms-parser/parse-message.mjs"
    export const FIELDS = ['id', 'name', 'dob', 'weight'];

    export const parseSms = text => {
      const parts = text.trim().split('#');
      return FIELDS.reduce((record, field, i) => {
        record[field] = parts[i]?.trim() ?? null;
        return record;
      }, {});
    };
    ```
    La operación `fn(...)` desapareció. Las dos exportaciones se conservaron.

  </TabItem>
  <TabItem value="test" label="La prueba">
    Fíjate en la ruta del import: apunta a `dist/`, **no** a tu archivo fuente.

    ```js title="test/parse-message.test.mjs"
    import { test } from 'node:test';
    import assert from 'node:assert/strict';

    import { parseSms } from '../dist/sms-parser/parse-message.mjs';

    test('parses a well-formed message into a record', () => {
      assert.deepEqual(parseSms('P-001#Ada Lovelace#1815-12-10#3.2'), {
        id: 'P-001',
        name: 'Ada Lovelace',
        dob: '1815-12-10',
        weight: '3.2',
      });
    });
    ```

  </TabItem>
</Tabs>

### Ejecutar la prueba {#running-the-test}

```bash
openfn compile --exports-only && node --test
```

```
✔ parses a well-formed message into a record (0.9ms)
ℹ tests 1
ℹ pass 1
ℹ fail 0
```

## Paso 4: ejecuta las pruebas en modo watch {#step-4-running-test-in-watch-mode}

Ejecuta el compilador en modo watch en una terminal:

```bash
openfn compile --exports-only --watch
```

Y tu ejecutor de pruebas en modo watch en otra:

```bash
node --test --watch
```

Ahora, cada vez que editas un step, este se vuelve a compilar, lo que cambia un
archivo en `dist/` y vuelve a ejecutar tus pruebas.

## Páginas relacionadas {#related-pages}

- [Compilación](/documentation/jobs/compilation): qué hace el compilador y por
  qué
- [Buenas prácticas](/documentation/jobs/best-practices): cómo escribir código
  de jobs que valga la pena probar
- [Uso básico de la CLI](/documentation/cli-usage): cómo ejecutar workflows en
  tu computadora
- [OpenFn Sync](/documentation/sync): cómo descargar un proyecto para tener un
  `openfn.yaml` que compilar
