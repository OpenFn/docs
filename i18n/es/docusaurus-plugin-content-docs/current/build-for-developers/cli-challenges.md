---
title: Desafíos de la CLI
sidebar_label: Desafíos de la CLI
slug: /cli-challenges
translation_source_hash: 77369268e959643bb1252b91b59cf8176063c423
translation_review_status: machine
---

#### Resuelve problemas reales y demuestra tus habilidades con la línea de comandos participando en nuestros desafíos de la CLI {#solve-real-world-problems-and-showcase-your-command-line-skills-by-participating-in-our-cli-challenges}

:::tip Notas importantes

- Un desarrollador con algo de experiencia en JavaScript debería poder escribir,
  ejecutar y depurar jobs complejos de varios pasos con OpenFn, usando solo un
  editor de texto y su terminal.
- Si te quedas atascado y necesitas ayuda, publica en
  [community.openfn.org](https://community.openfn.org).
  <details>
  <summary>Expande para ver la plantilla de reporte de errores</summary>

  ```markdown
  Subject: Bug Report - [Brief Description]

  **Description:** [Concise description of the bug.]

  **Steps to Reproduce:**

  1.
  2.
  3.

  **Environment:**

  - OS: [e.g., Windows 10]
  - CLI: [e.g., v0.4.11]
  - Node: [e.g., v 18.17.1]
  - NPM: [e.g., 8.19.2]

  **Attachments:** [Screenshots, error messages, or relevant files.]
  ```

  </details>

:::

### 🏆 Crea un saludo personalizado {#-create-personalized-greeting}

**Descripción general:**

Crea un nuevo job `hello.js` que muestre un saludo personalizado con tu nombre.

**Objetivo:**

Escribe un job de OpenFn con el [adaptor common](/adaptors/packages/common-docs)
que muestre un mensaje de saludo con tu nombre.

**Requisitos:**

1. Instala la última versión del adaptor common.

   ```
   openfn repo install @openfn/language-common
   ```

**Tareas:**

1. Crea un archivo nuevo llamado `hello.js`.
2. Escribe un script de JavaScript en `hello.js` que genere un saludo con tu
   nombre.
3. Ejecuta el job con el comando `openfn hello.js -a common -o tmp/output.json`.
4. Confirma que se ejecutó correctamente.

**Lista de verificación:**

- [ ] Creaste el archivo nuevo `hello.js`.
- [ ] Escribiste en `hello.js` un script de JavaScript para un saludo
      personalizado.
- [ ] Ejecutaste el job con el comando indicado.
- [ ] Comprobaste que los logs de la salida de la CLI son correctos.

---

### 🏆 Obtén e inspecciona datos por HTTP {#-fetch-and-inspect-data-via-http}

**Descripción general:**

Escribe un job que obtenga datos de usuarios de la
[API de JSONPlaceholder](https://jsonplaceholder.typicode.com/users) con el
[adaptor http](/adaptors/packages/http-docs) de OpenFn.

**Objetivo:**

Obtén y muestra los detalles del primer usuario de la API de JSONPlaceholder.

**Requisitos:**

1. Instala la última versión del adaptor http.

```bash
openfn repo install @openfn/language-http
```

2. Usa la [API de JSONPlaceholder](https://jsonplaceholder.typicode.com/users).
3. Crea un archivo llamado `getUsers.js` que contenga el script.

**Tareas:**

1. Crea un archivo (`getUsers.js`) para el script.
2. Obtén una lista de usuarios de la API de JSONPlaceholder.
3. Muestra los detalles del primer usuario.
4. Ejecuta el job con OpenFn/cli:
   `openfn getUsers.js -a http -o tmp/output.json`.
5. Comprueba que los logs de la CLI son los esperados.

**Lista de verificación:**

- [ ] Obtuviste los datos de los usuarios.
- [ ] Mostraste correctamente los detalles del primer usuario.
- [ ] Usaste correctamente las funciones del adaptor http de OpenFn.
- [ ] Comprobaste que los logs de la salida de la CLI son correctos.

---

### 🏆 Obtén metadatos de COVID-19 {#-retrieve-covid-19-metadata}

**Descripción general:**

Obtén y presenta metadatos de COVID-19 con la
[API del COVID Tracking Project de The Atlantic](https://covidtracking.com/data/api).

**Objetivo:**

Escribe un job que obtenga datos de COVID-19 de la API y calcule algunos valores
agregados para el período que elijas.

**Requisitos:**

1. Instala la última versión del adaptor http.

```bash
openfn repo install @openfn/language-http
```

**Tareas:**

1. Escribe una operación de OpenFn que obtenga metadatos de COVID-19 de la
   [API del COVID Tracking Project de The Atlantic](https://covidtracking.com/data/api).
   - Usa `https://api.covidtracking.com` como tu **baseUrl** en
     `state.configuration`.
2. Ejecuta el job con la CLI de OpenFn mediante el comando
   `openfn your_operation_file.js -a http -o tmp/output.json`.
3. Evalúa la salida y prueba distintas formas de dar formato a los datos de
   COVID-19 por región o de presentarlos.

**Lista de verificación:**

- [ ] Creaste un archivo de operación de OpenFn.
- [ ] Escribiste el código para obtener metadatos de COVID-19 de la API
      indicada.
- [ ] Ejecutaste el job con el comando de la CLI indicado.
- [ ] Probaste varias opciones de formato o presentación para los datos
      obtenidos.

> Experimenta con la presentación de los datos para entenderlos mejor. ¡Buena
> suerte! 🌐🦠

---

### 🏆 Extrae nombres y correos electrónicos {#-extract-names--emails}

**Descripción general:**

En este desafío, usarás la API de JSONPlaceholder para obtener los comentarios
de una publicación concreta (la publicación con ID 1). Tu tarea es extraer los
campos "name" y "email" de cada comentario y registrar en el log los datos
extraídos.

**Objetivo:**

Escribe un job que obtenga los comentarios de la publicación con ID 1, extraiga
los campos "name" y "email" de cada comentario y registre en el log los datos
extraídos.

**Requisitos:**

- Conocimientos básicos de JavaScript.
- La CLI de OpenFn instalada en tu computadora.

**Tareas:**

1. **Obtén los comentarios de la publicación:**

   - Agrega una operación que obtenga todos los comentarios de la publicación
     con ID 1 de la
     [API de JSONPlaceholder](https://jsonplaceholder.typicode.com/posts/1/comments).

2. **Extrae el nombre y el correo electrónico:**

   - Escribe una función que extraiga los campos "name" y "email" de cada
     comentario.

3. **Registra los datos extraídos:**
   - Muestra en la consola los datos extraídos (nombre y correo electrónico) de
     cada comentario.

**Lista de verificación:**

- [ ] Obtuviste los comentarios de la publicación con ID 1.
- [ ] Escribiste una función que extrae "name" y "email" de los comentarios.
- [ ] Mostraste en la consola los datos extraídos.

---

### 🏆 Controla los mensajes de error {#-control-error-messages}

Depura qué causa un error en la siguiente línea de código y muestra el mensaje
de error.

```jsx
// Get post where id is 180
get('posts/180');
```

---

### 🏆 Transformación y limpieza de datos {#-data-transformation-and-cleaning}

**Descripción general:**

En este desafío, usarás métodos globales de arrays de JavaScript, en concreto
`Array.reduce`, `Array.filter` o `Array.map`, para crear una serie de
operaciones que obtengan publicaciones y las filtren por ID de usuario.

**Objetivo:**

Escribe un job que obtenga las publicaciones de un ID de usuario concreto, `1`.

**Requisitos:**

1. Usa la API de JSONPlaceholder `https://jsonplaceholder.typicode.com`.
2. Instala la última versión del adaptor http.

```
openfn repo install @openfn/language-http
```

**Tareas:**

1. **Crea el archivo:**

   - Crea un archivo llamado `getPosts.js` para tu job.

2. **Obtén todas las publicaciones:**

   - Agrega la primera operación para obtener todas las publicaciones. Usa la
     API indicada o cualquier otra fuente que elijas que ofrezca una lista de
     publicaciones.

3. **Filtra las publicaciones por ID:**

   - Agrega una segunda operación con una función que filtre las publicaciones
     por ID de usuario. Puedes usar `Array.filter` o cualquier otro método
     adecuado.

4. **Obtén las publicaciones del ID de usuario 1:**

   - Usa la función de la segunda operación para filtrar las publicaciones del
     ID de usuario 1.

**Lista de verificación:**

- [ ] Creaste el archivo `getPosts.js`.
- [ ] Obtuviste todas las publicaciones.
- [ ] Escribiste una función que filtra publicaciones por ID de usuario.
- [ ] Obtuviste las publicaciones del ID de usuario 1.
