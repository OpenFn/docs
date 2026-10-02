---
title: Primeros pasos con la CLI de OpenFn
sidebar_label: Primeros pasos
slug: /cli
translation_source_hash: 944be784d36e841ea14f6d763d05830a7da98a18
translation_review_status: machine
---

#### Crea y prueba tus workflows e integraciones automatizadas desde la línea de comandos. {#build-and-test-your-automated-workflows-and-integrations-via-the-command-line}

La CLI de OpenFn es una herramienta para desarrolladores que te ayuda a crear,
probar y gestionar tus workflows directamente desde la línea de comandos. Es
fácil de instalar, funciona en macOS, Windows y Linux, y ofrece muchas
funcionalidades para mejorar tu experiencia de desarrollo con OpenFn. Con la CLI
de OpenFn puedes:

- Sincronizar workflows entre OpenFn y un sistema de archivos local o GitHub
- Ejecutar workflows de OpenFn de forma segura
- Diagnosticar y depurar steps de OpenFn
- [Hacer pruebas unitarias del código de los jobs](/documentation/jobs/unit-testing-jobs)
  con JavaScript estándar
- Leer y escribir datos de colecciones

---

### Antes de empezar {#before-you-start}

Antes de empezar con @openfn/cli, prepara algunas herramientas clave:

1. **Editor de código:** asegúrate de tener un editor de código instalado en tu
   computadora. Puedes usar editores populares como
   [VS Code](https://code.visualstudio.com/) o
   [Sublime](https://www.sublimetext.com/).
2. **Node.js:** instala Node.js (versión 24 o posterior). En Linux, Windows o
   macOS, usa un gestor de versiones como [nvm](https://github.com/nvm-sh/nvm) o
   [asdf](https://asdf-vm.com/guide/getting-started.html). También puedes
   [instalar Node.js directamente](https://kinsta.com/blog/how-to-install-node-js/)
   siguiendo esta guía.

También deberías **entender los conceptos básicos de OpenFn**, en particular los
steps y los adaptors. Consulta la
[sección de introducción](/get-started/home.md) de este sitio para ponerte al
día.

---

### Instalar la CLI {#install-the-cli}

Para descargar la última versión de
[@openfn/cli](https://www.npmjs.com/package/@openfn/cli), ejecuta el siguiente
comando en la línea de comandos.

```bash
npm install -g @openfn/cli
```

Comprueba que todo funciona ejecutando el workflow de prueba incluido:

```bash
openfn test
```

La palabra `openfn` invoca la CLI. La palabra `test` invoca el comando de
prueba.

<details>
<summary>Expande para ver la salida esperada</summary>

```
[CLI] ♦ Versions:
   ▸ node.js     18.12.1
   ▸ cli         1.0.0
[CLI] ℹ Running test workflow...
[CLI] ℹ Execution plan:
[CLI] ℹ {
   "options": {
     "start": "start"
   },
   "workflow": {
     "steps": [
       {
          "id": "start",
          "state": {
          "data": {
            "defaultAnswer": 42
          }
          "expression": "const fn = () => (state) => { console.log('Starting computer...'); return state; }; fn()",
          "next": {
            "calculate": "!state.error"
          }
       },
       {
         "id": "calculate",
         "expression": "const fn = () => (state) => { console.log('Calculating to life, the universe, and everything..'); return state }; fn()",
         "next": {
           "result": true
         }
       },
       {
         "id": "result",
         "expression": "const fn = () => (state) => ({ data: { answer: state.data.answer || state.data.defaultAnswer } }); fn()"
       }
     ]
   }
}

[CLI] ✔ Compiled all expressions in workflow
[R/T] ℹ Executing undefined
[R/T] ℹ Starting step start
[JOB] ℹ Starting computer...
[R/T] ✔ Completed step start in 1ms
[R/T] ℹ Starting step calculate
[JOB] ℹ Calculating to life, the universe, and everything..
[R/T] ✔ Completed step calculate in 1ms
[R/T] ℹ Starting step result
[R/T] ✔ Completed step result in 0ms
[CLI] ✔ Result: 42
```

</details>

El resto de la salida es la CLI contándote lo que hace internamente.

**Consultar la versión**

```bash
openfn -v
```

**Obtener ayuda**

```bash
openfn help
```

---

### Actualizar la CLI {#updating-the-cli}

Para instalar una versión nueva directamente sobre la que tienes instalada,
ejecuta el siguiente comando.

```bash
npm install -g @openfn/cli
```

---

### Solución de problemas {#troubleshooting}

Si tienes problemas con la instalación, intenta desinstalar primero la versión
actual y luego volver a instalarla.

```bash
npm uninstall -g @openfn/cli
npm install -g @openfn/cli
```
