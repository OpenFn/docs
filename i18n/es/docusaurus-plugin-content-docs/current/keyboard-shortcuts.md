---
title: Atajos de teclado
keywords: [keystrokes, keyboard shortcuts, shortcuts]
translation_source_hash: 5d12e36efd8be3046bc306dc66a9aa22d367c006
translation_review_status: machine
---

Los atajos de teclado (combinaciones de teclas) te permiten realizar acciones
comunes sin quitar las manos del teclado. 🤓

## Atajos de la plataforma {#platform-shortcuts}

| Comando                                         | Disponibilidad       | Mac              | Linux/Windows      | Notas                                                                                                                                        |
| ----------------------------------------------- | -------------------- | ---------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cambiar** de proyecto                         | En cualquier lugar   | `⌘+p`            | `Ctrl+p`           | Abre el selector de proyectos para cambiar entre tus proyectos (es decir, espacios de trabajo seguros)                                       |
| **Expandir o contraer** el menú lateral         | En cualquier lugar   | `⌘+m`            | `Ctrl+m`           |                                                                                                                                              |
| **Mostrar u ocultar** el AI Assistant           | Canvas, IDE          | `⌘+k`            | `Ctrl+k`           |                                                                                                                                              |
| **Guardar** el workflow                         | Canvas, IDE          | `⌘+s`            | `Ctrl+s`           |                                                                                                                                              |
| **Guardar** y sincronizar el workflow           | Canvas, IDE          | `⌘+Shift+s`      | `Ctrl+Shift+s`     | Al elegir sincronizar, se te pedirá que escribas un mensaje de commit o que uses el mensaje predeterminado.                                  |
| **Ejecutar**                                    | Canvas, IDE          | `⌘+Return`       | `Ctrl+Enter`       | Guarda tu workflow y lo ejecuta desde el step actual, con el comportamiento predeterminado de agrupación en work orders.\*                   |
| **Ejecutar** _(acción alternativa)_             | Canvas, IDE          | `⌘+Shift+Return` | `Ctrl+Shift+Enter` | Guarda tu workflow y abre el diálogo de entrada personalizada del run o (si ya está abierto) crea una nueva work order desde el step actual. |
| **Mostrar u ocultar** el IDE (editor de código) | Canvas, IDE          | `⌘+e`            | `Ctrl+e`           | Abre el editor de código a pantalla completa para el job seleccionado.                                                                       |
| **Mostrar u ocultar** Run History               | Canvas, IDE          | `⌘+h`            | `Ctrl+h`           | No está disponible al crear un workflow nuevo.                                                                                               |
| **Cerrar** el panel o el IDE                    | Canvas, IDE          | `Escape`         | `Escape`           | Cierra el Inspector, el IDE o el panel del run, si están abiertos.                                                                           |
| **Mostrar u ocultar** el panel Templates        | Creación de workflow | `⌘+/`            | `Ctrl+/`           | Solo está disponible al crear un workflow nuevo.                                                                                             |
| **Mostrar u ocultar** el panel Import           | Creación de workflow | `⌘+\`            | `Ctrl+\`           | Solo está disponible al crear un workflow nuevo. Permite importar desde YAML.                                                                |

\*Si estás viendo un run existente y creas un run nuevo desde el Canvas o el
IDE, ese run se asocia a la work order existente: este es el comportamiento
predeterminado. (Piénsalo como un "reintento"). A veces, por motivos de
auditoría, conviene crear una work order completamente nueva. Para hacerlo, usa
el botón de ejecución alternativa.

## Algunos atajos del editor {#selected-editor-shortcuts}

Consulta la paleta de comandos (haz clic derecho o presiona `F1`) para ver la
lista completa. Para usar estos atajos, tienes que hacer clic dentro de un
editor concreto: el IDE tiene varios editores.

| Comando                       | Disponibilidad  | Mac              | Linux/Windows |
| ----------------------------- | --------------- | ---------------- | ------------- |
| Ver los comandos del editor   | IDE, Run Viewer | `F1`             | `F1`          |
| Formatear el código           | IDE             | `Shift+Option+F` | `Shift+Alt+F` |
| Comentar o descomentar código | IDE             | `⌘+/`            | `Ctrl+/`      |
