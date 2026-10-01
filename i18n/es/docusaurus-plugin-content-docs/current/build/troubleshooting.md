---
title: Solución de problemas en integraciones
sidebar_label: Solución de problemas
translation_source_hash: 82afbc334c9cd834780739572f9a016a72b38efa
translation_review_status: machine
---

Así que notaste que algo no anda del todo bien. Aquí tienes una lista de
preguntas, y de complicaciones, que pueden ayudarte a llegar al fondo del
asunto.

:::tip

Consulta la
[página de solución de problemas](/monitor-history/troubleshooting.md) de la
sección "Supervisar el historial" para ver consejos más específicos y errores
comunes.

:::

<!--truncate-->

## La perspectiva de la implementación {#the-implementation-perspective}

Primero, ten a mano esta lista de verificación rápida... responder estas
preguntas _en orden_ hará que dediques el menor tiempo posible a encontrar la
causa del problema, sea grande o pequeño.

### 1. ¿Qué quieres? {#1-what-do-you-desire}

Responder esto podría llevarte toda la vida, pero, en el contexto de la
depuración, puedes acotarlo un poco. De verdad no podemos avanzar hasta que
tengas claro lo que quieres.

### 2. ¿Cómo lo estás pidiendo? {#2-how-are-you-asking-for-it}

¡Muéstrame el issue, las especificaciones, el "requisito"! Asegurémonos de que
esté expresado con claridad y documentado. Si es así, ¡pasa a la pregunta 3!

### 3. ¿Lo que pides va a producir el efecto que quieres? {#3-is-what-youre-asking-for-going-to-produce-the-effect-you-desire}

Esta es difícil y puede requerir al equipo de ingeniería. (De hecho, suele ser
en este momento cuando se llama a ingeniería. Hay un "bug", y antes de mirar
cualquier código tenemos que averiguar si lo que se pide, la especificación,
realmente va a producir los resultados deseados).

### 4. ¿La expresión implementa lo que pides? {#4-does-the-expression-implement-what-youre-asking-for}

¿Estamos _seguros_ de que la especificación va a producir el efecto que
queremos? Bien, perfecto... ahora veamos la expresión del job. ¿La expresión del
job implementa la especificación? ¿Cómo puedes demostrar (con logs, aserciones,
etc.) que lo hace? No avances hasta estar seguro de esto, o seguro de que _no
puede_ hacerlo, dado el adaptor que usas.

:::info Control de tiempo

Nota: un cambio en la expresión del job puede llevar apenas un par de minutos.

:::

### 5. ¿El adaptor permite la implementación de la expresión? {#5-does-the-adaptor-supportenable-the-implementation-in-the-expression}

Bien, si estás seguro de que la expresión hace todo lo que puede con la
especificación... ¡quizás hay un bug en el adaptor! Puede que algo en cómo se
implementó esa función auxiliar no haga lo que pretendía el autor del adaptor, y
eso podría estar produciendo el "bug".

Si empiezas a trabajar en el adaptor, ya _deberías_ haber reducido el problema a
un **_PROBLEMA GENERAL_**, dejando de lado todos los detalles específicos de
esta implementación. Estás empezando a cambiar la forma en que este adaptor
interactúa con la API de destino. Tienes a mano la documentación de la API y
estás enviando solicitudes con cURL directamente a distintos endpoints,
configurando pruebas en el adaptor, etc.

:::info Control de tiempo

Un cambio en el adaptor puede llevar una hora, o quizás unas cuantas. Hablamos
del orden de un día si los cambios son grandes y cuentas el tiempo necesario
para desplegar versiones nuevas.

:::

### 6. ¿La API de destino permite la implementación del adaptor? {#6-does-the-target-api-supportenable-the-implementation-in-the-adaptor}

Uf... si llegaste hasta aquí, estás en terreno "grande y serio". ¡Avanza con
cuidado! Supongo que encontraste muchos hilos de Stack Overflow que describen el
problema que tienes. Lo que estás diciendo es que, _a pesar de_ la documentación
de la API que usamos para construir este adaptor, hay algo distinto en cómo se
comporta realmente la API.

¿Quizás hay una versión nueva de la API con un cambio incompatible?

¿Quizás hay un bug en el sistema de destino?

En cualquier caso, cuando llegas a este nivel estás dedicando MUCHO tiempo y te
estás involucrando con la comunidad open source en general. Deberías publicar en
al menos un foro antes de terminar el día.

:::info Control de tiempo

Escribir un adaptor nuevo para una versión nueva de una API, o corregir un bug
en el sistema de otro desarrollador mediante una pull request... esto lleva
semanas y meses y, peor aún, los plazos suelen estar fuera de nuestro control.

:::

## La perspectiva del producto {#the-product-perspective}

Para complicar las cosas _(¡acepta la complejidad!)_, cuando me pongo el
sombrero de producto, invierto la pirámide. Aunque un problema se pueda resolver
en 15 minutos escribiendo una línea nueva en la `expression` (consulta la
pregunta 4), ¿es un problema generalizable? ¿Podría ahorrarles esos 15 minutos a
_futuros implementadores_ haciendo un cambio en el adaptor (consulta la
pregunta 5) que ofrezca esta corrección o funcionalidad "de serie"?

Mejor aún... ¿podría hacer algún cambio en la plataforma OpenFn (o en Primero,
CommCare o DHIS2) que permitiera adaptors más fáciles o mejores y resolviera
este problema con clics, no con código?

:::tip

¿Recuerdas esos jobs que escribíamos que no hacían nada (simplemente devolvían
el state) si se cumplía una condición? Pues bien, con exactamente este enfoque
incorporamos a OpenFn una funcionalidad de "filtro de exclusión" que permite a
un usuario omitir ciertos mensajes entrantes según unos criterios, en lugar de
tener que evaluar esos mensajes en el job.

Llevó mucho más trabajo que escribir ese único bloque `fn(...)` al principio del
job de un solo cliente, pero ahora le ahorra a _todo el mundo_ escribir esa
línea en el futuro.

:::

## Encontrar el equilibrio, al final {#find-balance-in-the-end}

Estas preguntas siempre me dan vueltas en la cabeza e intento sopesar esta
perspectiva del producto frente a la perspectiva de la implementación. Al final,
todo es cuestión de equilibrio (nada sorprendente) en cómo _resolvemos_ estos
problemas, pero seguir la perspectiva de la implementación en cómo abordas,
entiendes, depuras y estimas pondrá más información sobre la mesa más rápido y
permitirá una mejor conversación del tipo "Bien, ¿cómo deberíamos resolver esto
dadas las limitaciones cronológicas y comerciales actuales?" entre el equipo de
implementación y el equipo de ingeniería.
