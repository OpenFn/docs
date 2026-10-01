---
title: Paths y condiciones de los paths
sidebar_label: Paths
translation_source_hash: f761fd26aaa7d8373dd681c3fd033f90dd0fef8a
translation_review_status: machine
---

Un path es una indicación, visual y funcional a la vez, que define la secuencia
de steps que sigue el workflow cuando se ejecuta. Sigue leyendo para conocer los
distintos tipos de paths y algunos consejos de configuración.

## Condiciones de los paths {#path-conditions}

Hay cuatro tipos de condiciones de path que definen si el workflow pasará al
siguiente step al ejecutarse:

1. **Always**: el siguiente step siempre se ejecuta cuando termina la ejecución
   del step anterior
2. **On Success**: el siguiente step solo se ejecuta si la ejecución del step
   anterior _tuvo éxito_
3. **On Failure**: el siguiente step solo se ejecuta si la ejecución del step
   anterior _falló_
4. **Matches a JavaScript Expression**: el siguiente step solo se ejecuta si una
   expresión se evalúa como verdadera

![Condiciones de los paths](/img/path_conditions.webp)

## Escribir expresiones de JavaScript para condiciones de path personalizadas {#writing-javascript-expressions-for-custom-path-conditions}

Crea una **condición personalizada** con una expresión de JavaScript. Se evalúa
con el state que produjo el step anterior.

```
state.data.form['@name'] === "Register New Patient"
```

Es una expresión normal de JavaScript con `state` en el ámbito. Si la expresión
se evalúa como verdadera (o como cualquier valor _truthy_), se sigue el path y
se ejecuta el siguiente step.

![Condiciones personalizadas](/img/path_js_expression.webp)

Algunos ejemplos de condiciones válidas:

- Ejecutar si no hay errores: `!state.errors`
- Ejecutar si existe algún valor en el state: `state.has_valid_email_address`
- Ejecutar si un array de datos contiene algún elemento: `state.data.length > 0`
- Ejecutar si los datos incluyen un elemento que cumple un criterio:
  `state.data.includes(item => item.age > 18)`
- Ejecutar si el último step recibió un error HTTP:
  `state.response.statusCode >= 400`

En una expresión personalizada **no puedes** hacer nada de lo siguiente:

- Usar funciones de adaptors
- Usar referencias de lazy state (`$`).
- Usar sentencias de control como `if`, `while`, `for`, etc.

## Deshabilitar paths {#disabling-paths}

Deshabilitar un path impide que se ejecute cualquiera de los steps posteriores,
sin importar la condición ni el state.

Es una forma útil de desactivar temporalmente una parte de tu workflow.

Para deshabilitar un path:

1. Haz clic en el `Path` que quieres desactivar
2. Marca la casilla `Disable this path`
