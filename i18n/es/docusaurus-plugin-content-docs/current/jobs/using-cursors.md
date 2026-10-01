---
sidebar_label: Usar cursores
title: Usar cursores
translation_source_hash: da397a43bea2cd3ef29dc7ba2da3c9fecceeaf7e
translation_review_status: machine
---

## Usar cursores {#using-cursors}

A veces conviene mantener una posición de cursor móvil sobre la fuente de datos
del backend. Por ejemplo, en un workflow con trigger cron, puedes usarla para
consultar en la base de datos los registros nuevos desde el último run.

En un workflow cron, OpenFn pasa el state anterior al siguiente, así que el
state se conserva entre runs. Puedes aprovecharlo para retomar donde te
quedaste.

Para facilitar el manejo del cursor, puedes usar la operación
[`cursor()`](/adaptors/packages/common-docs#cursor), que viene incluida en la
mayoría de los adaptors.

<details>
<summary>Versiones compatibles</summary>

La operación cursor se agregó a <code>@openfn/language-common</code> en la
versión <code>1.13.0</code> (publicada en abril de 2024).

Los adaptors que usan common <code>1.12.0</code> o anterior no admiten la
operación cursor. Considera actualizar a la versión más reciente del adaptor
para aprovechar esta funcionalidad.

</details>

### Definir el valor del cursor {#setting-the-cursor-value}

Para usar un cursor desde una fecha fija, solo agrega una línea como esta al
principio de tu job:

```js
cursor('2024-04-08T12:00:00.0000');
```

Con un valor de texto como este, el cursor usará _siempre_ la fecha que
indicaste.

Si usas un cursor de fecha, también puedes pasarle cadenas en lenguaje natural
como "now", "today", "yesterday", "24 hours ago" o "start" (es decir, la hora en
que empezó el job).

:::tip Zonas horarias

Las fechas relativas como "today" se convierten en un Date de JavaScript con la
configuración regional del sistema.

Si usas la CLI, las horas se calculan con la hora local de tu sistema; si lo
ejecutas en Lightning, se usa la hora del sistema de Lightning (normalmente
UTC).

La función cursor registra en el log la hora exacta que usa, con la zona
horaria.

:::

Para usar un cursor móvil o manual, deberías pasar el valor del cursor desde el
state. Quizás también quieras incluir un valor predeterminado:

```js
cursor(state => state.cursor, { defaultValue: '2024-04-08T12:00:00.0000' });
```

### Usar el cursor {#using-the-cursor}

Para usar el cursor en tu job, solo usa `state.cursor` en tus consultas, como
cualquier otra propiedad del state.

El uso cambia según el adaptor. Así podrías armar una URL con parámetros de
consulta usando el adaptor HTTP:

```js
get(state => `/registrations?since=${state.cursor}`);
fn(/* do something good with your data */);
```

Esto lee el valor del cursor del objeto state, lo inserta en una cadena y lo
pasa a una consulta HTTP.

O quizás quieras incluir el cursor en un objeto:

```js
get('registrations', state => {
  query: {
    fromdate: state.cursor;
  }
});
```

El valor de un cursor puede ser cualquier cosa: una cadena, un Date, un número
de página, un objeto o lo que prefieras.

Quizás quieras avanzar el cursor al final de un job, para dejarlo listo para el
siguiente run:

```js
cursor(state => state.cursor, { defaultValue: 'today' });
get(`/registrations?since={date.cursor}`);
fn(/* do something good with your data */);
cursor('now');
```

### Cursores manuales {#manual-cursors}

A menudo conviene definir la posición del cursor a mano, normalmente al probar o
depurar. Quizás el run de ayer falló y quieres repetirlo, o estás probando una
funcionalidad nueva y quieres experimentar con distintos cursores.

Para hacerlo, define un valor de cursor en el state de entrada, así:

```js
{
  "cursor": "today",
}
```

Puedes hacerlo al iniciar un run manual en el
[Job Inspector](/build/steps/step-editor.md) de la plataforma, o pasando el
state como entrada a la CLI:

```bash
$ openfn job.js -s state.json -a http
```

<details>
<summary>Cursores manuales en v1</summary>

La plataforma v1 no permite definir libremente el state de entrada, así que
definir un cursor manual es un poco más difícil.

Tienes que escribir el cursor manual directamente en el run para que se ignore
el cursor del state:

```js
cursor('2024-03-12');
```

Deberías comentar esta línea en los runs de producción.

También puedes usar la opción defaultValue. Funciona siempre que ejecutes sin
ningún state inicial:

```js
cursor(state => state.cursor, { defaultValue: '2024-03-12' });
```

</details>

### Opciones del cursor {#cursor-options}

El segundo argumento de `cursor()` es un objeto de opciones. Puedes usarlo para
definir el `defaultValue` o la `key` que debe usar el cursor (por defecto,
`cursor`):

```js
cursor(state => state.cursor, { defaultValue: '2024-03-12', key: 'page' });
```

### Dar formato al valor {#formatting-the-value}

Si usas un servicio que no sigue los formatos de fecha estándar, o quieres
convertir varios formatos de entrada a un estándar común, puedes usar la opción
`format`.

`format` recibe una función que toma como argumento el valor actual del cursor y
devuelve un valor con formato o actualizado. Se llama justo antes de asignar el
cursor al state.

Por ejemplo, para usar un Date de JavaScript como cursor:

```js
cursor('today', { format: c => new Date(c) });
```

La función de formato se ejecuta después de procesar el lenguaje natural, así
que puedes interceptar el valor y convertirlo en lo que necesites.

Puedes combinarla con
[`dateFns.format`](https://date-fns.org/v3.6.0/docs/format) para usar una marca
de tiempo personalizada:

```js
cursor('today', { format: c => dateFns.format(new Date(c), 'dd/mm/yyyy') });
```

Puedes agregar toda la lógica que quieras a la función de formato; es una
función normal de JavaScript:

```js
cursor('today', {
  format: c => {
    if (typeof c === 'number') {
      return { page: c, count: 20 };
    }
    return c;
  },
});
```
