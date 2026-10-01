---
id: security-for-devs
title: Consideraciones de seguridad para el desarrollo con OpenFn
sidebar_label: Consideraciones de seguridad
slug: /security-for-devs
translation_source_hash: 82ba4f8c0b4cee7db4d2c18b5d0235b7d72436f6
translation_review_status: machine
---

## Introducción {#introduction}

Aunque las aplicaciones que integras sean seguras, las implementaciones de
integración de datos siguen teniendo muchos riesgos de seguridad. Sigue leyendo
para conocer buenas prácticas y consejos que te ayudarán a lograr la máxima
seguridad al crear workflows de OpenFn.

## Errores comunes y cómo evitarlos {#common-mistakes-and-how-to-avoid-them}

Escribir jobs de OpenFn puede ser sencillo, pero hay errores comunes que los
desarrolladores suelen cometer. Estos son algunos de ellos y consejos para
evitarlos:

### Información sensible escrita en el código {#hardcoding-sensitive-information}

- **Evita escribir credenciales en el código:** en lugar de escribir nombres de
  usuario, contraseñas o claves de API directamente en tus scripts, usa el
  objeto `state` para guardar y obtener la información sensible.

```json
// Store credentials in state.json
{
  "configuration": {
    "username": "your_username",
    "password": "your_password"
  }
}
```

```javascript
// Retrieve credentials from state
const username = state.configuration.username;
const password = state.configuration.password;
```

### Subir datos sensibles a GitHub {#checking-sensitive-data-into-github}

- **Cuida el contenido del repositorio:** cuando trabajes en proyectos de
  clientes, no guardes datos sensibles, como `state.json`, en el repositorio
  público de GitHub del cliente. Revisa siempre el contenido del repositorio y
  elimina u oculta la información sensible antes de hacer commit de tus cambios.

- **Usa directorios específicos para los payloads de prueba:** si guardas
  payloads de prueba en el repositorio de un cliente, usa directorios como
  `sampleData/` y asegúrate de que los nombres de los archivos no se parezcan a
  `state.json`. No incluyas objetos state completos en estos archivos; en su
  lugar, reproduce exactamente el payload de prueba.

- **Revisa el git diff antes de hacer commit:** antes de hacer un commit, lee
  con atención el git diff línea por línea para detectar cambios y logs que no
  querías incluir. Acostúmbrate a hacer commits selectivos
  (`git add ./path/to/file`) en lugar de usar `git add -A`.

- **Crea el hábito de revisar los diffs:** para crear el hábito, lee el primer
  archivo en `git diff` y luego usa `git add ./that_file` si está listo.
  Continúa revisando el diff y agregando archivos según sea necesario. Por
  último, usa `git commit -m "my changes"` y haz push.

### Uso de `console.log()` {#use-of-consolelog}

- **Registra los logs con cuidado:** aunque `console.log()` es fundamental
  durante el desarrollo de un job, es esencial tener cuidado de no registrar
  información sensible. Una vez creados los jobs, los administradores pueden
  desactivar la salida de los logs de consola, pero algunos aspectos del sandbox
  podrían seguir mostrándose.

- **Evita registrar datos sensibles:** ten cuidado al usar `console.log(state)`
  o `console.log(state.configuration)`, sobre todo si contienen información
  sensible como nombres de usuario y contraseñas. En algunos casos, esto puede
  exponer datos sensibles en los logs.

```javascript
// Good practice
console.log('Operation completed successfully.');

// Avoid logging sensitive data
console.log('Received sensitive data:', state.data);
```

- **Logs pensados para auditorías:** ten en cuenta que algunos clientes usan
  `console.log()` con fines de auditoría, incluso en producción. Asegúrate de
  que tu forma de registrar logs se ajuste a los requisitos del cliente y evita
  exponer información confidencial sin querer.

- **Control de los administradores:** ten en cuenta que los administradores
  pueden controlar la visibilidad de los logs de consola en un proyecto de
  OpenFn. Aun así, es fundamental registrar los logs de una forma que responda
  tanto a las necesidades del desarrollo como a las consideraciones de seguridad
  del cliente.

> Estas buenas prácticas en el uso de `console.log()` contribuyen a un
> desarrollo seguro de jobs en OpenFn y reducen el riesgo de exponer datos
> sensibles en los logs sin querer.

### No manejar los errores {#ignoring-error-handling}

- **Maneja los errores de forma controlada:** implementa siempre el manejo de
  errores en tus scripts. Incluye mensajes de error útiles en el objeto `state`
  para facilitar la depuración sin exponer detalles sensibles en las respuestas.

```javascript
// Set custom error message in state
state.error = new Error(
  'Authentication failed. Please check your credentials.'
);

// Log the error in OpenFn
console.error(state.error);
```

### Permisos demasiado amplios en las credenciales {#overly-broad-permissions-on-credentials}

Al agregar credenciales a OpenFn, es imprescindible seguir el principio de
mínimo privilegio. En concreto:

- **Cuentas de usuario especializadas:**

  - **Usuario específico para el cliente:** crea una cuenta de usuario dedicada
    para el sistema del cliente dentro de la aplicación de terceros (por
    ejemplo, Salesforce). Esta cuenta de usuario debería usarse solo para la
    integración con OpenFn.

  - **Acceso limitado a la API:** concede acceso a la API solo a los recursos
    necesarios para las operaciones de OpenFn. Asegúrate de que los permisos se
    limiten a los objetos y campos específicos que requiere el intercambio de
    datos.

- **Ámbitos de OAuth:**

  - **Control de ámbitos con OAuth:** en algunos casos, se usa OAuth para una
    autenticación segura. Aprovecha las capacidades de OAuth para controlar los
    ámbitos de acceso. Define y limita los permisos según los requisitos exactos
    de OpenFn.

- **Ejemplo de Salesforce:**

  - **Restricciones de objetos y campos:** en Salesforce, en concreto, crea una
    cuenta de usuario con acceso a la API limitado a los objetos y campos
    pertinentes. No concedas permisos innecesarios que podrían suponer riesgos
    de seguridad.

    > Con estas prácticas, te aseguras de que las credenciales asociadas a
    > OpenFn tengan permisos definidos y restringidos con precisión. Así se
    > reduce el riesgo de accesos no deseados y se protegen los datos sensibles
    > del cliente durante los procesos de integración.

### Conservar tu proyecto de OpenFn {#retaining-your-openfn-project}

Si tienes requisitos estrictos de residencia de datos, puedes configurar OpenFn
como un pipeline de datos de "retención cero" para garantizar el cumplimiento.
Así, no se conserva ningún dato procesado en los workflows de OpenFn (entradas y
salidas), ni siquiera en la oferta de la plataforma de OpenFn alojada en la
nube.

A muchos usuarios les resulta útil conservar los datos en OpenFn de forma
temporal para resolver problemas. Por ejemplo, si tienes un workflow de 3 steps
y el workflow falla en el step 3, podría ser útil conservar la entrada de ese
step fallido para inspeccionar los datos, resolver el problema rápidamente y
volver a intentarlo desde ese punto. Para tener esta experiencia de resolución
de problemas más sencilla, la mayoría de los usuarios deja activada la retención
temporal de datos, y el superadministrador de OpenFn puede ajustar el periodo de
retención.

### Prácticas de seguridad para adaptors {#adaptors-security-practices}

- **Protección del state del cliente:** los adaptors (paquetes de lenguaje)
  nunca deberían exponer directamente ninguna parte del state de un cliente. Los
  callbacks pueden registrar partes del state, pero deberían evitar registrar la
  configuración o los datos reales, ya que pueden contener información de
  identificación personal (PII).

- **Uso de metadatos:** los adaptors pueden basarse en metadatos sobre el state,
  como registrar el "número de casos obtenidos" en una solicitud. Sin embargo,
  está prohibido registrar la solicitud en sí.

- **Proceso de revisión de seguridad:** a medida que más colaboradores
  participan en los adaptors, las revisiones de seguridad rigurosas de las pull
  requests pasan a ser fundamentales. Asegúrate de que se cumplan las prácticas
  de seguridad descritas durante el proceso de revisión.

:::tip Más información

Para conocer más consideraciones de seguridad y buenas prácticas para todas las
personas que implementan OpenFn (no solo los desarrolladores), consulta la
[Guía de seguridad de OpenFn](/get-started/security.md) completa. Para saber más
sobre cómo escribir jobs, consulta la
[guía para escribir jobs](/jobs/job-writing-guide.md).

:::
