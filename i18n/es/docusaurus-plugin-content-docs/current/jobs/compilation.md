---
sidebar_label: Compilación
title: Compilación
translation_source_hash: 84aca9c4f6f2ddcb2a23ffb5806b86f9ce720c0d
translation_review_status: machine
---

## Compilación {#compilation}

Técnicamente, el código que escribes no es JavaScript ejecutable. No puedes
simplemente ejecutarlo con Node.js. Hay que transformarlo, o compilarlo, en
código JS estándar y portable.

:::warning

Este es un tema avanzado, pensado sobre todo para desarrolladores de JavaScript
y para quienes sienten curiosidad técnica. Esta documentación no pretende ser
completa: solo es un empujón en la dirección correcta para ayudarte a entender
cómo funcionan los jobs.

:::

Las principales diferencias entre el código de OpenFn y JavaScript son:

- Las funciones del nivel superior del código se ejecutan de forma síncrona (en
  secuencia), aunque contengan código asíncrono.
- El código de OpenFn no contiene instrucciones import (aunque técnicamente
  puede tenerlas). Estas se agregan al compilar.
- El código compilado es un módulo ESM de JavaScript que exporta por defecto un
  array de funciones async. El runtime importa y ejecuta estas funciones.

No debería hacer falta entender la compilación en detalle, pero deberías saber
que el código que escribes no es el código que se ejecuta.

Si eres desarrollador de JavaScript, entender algunos de estos cambios podría
ayudarte a comprender mejor cómo funciona OpenFn. Con la CLI, puedes ejecutar
`openfn compile path/to/job.js -a <adaptor-name>` para ver el código compilado.

Este es un ejemplo de cómo queda un job sencillo al compilarlo:

Este job:

```js
get('/patients');
```

Se compila en este módulo de JavaScript:

```js
import { get } from '@openfn/language-http';
export * from '@openfn/language-http';
export default [get('/patients')];
```
