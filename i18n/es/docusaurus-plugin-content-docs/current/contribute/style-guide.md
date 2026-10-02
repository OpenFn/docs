---
id: style-guide
title: Guía de estilo
sidebar_label: Guía de estilo
slug: /style-guide
translation_source_hash: 18fab29195b8958e596ca045c0f84dab79b66de4
translation_review_status: machine
---

Puedes escribir contenido con la
[sintaxis de Markdown de GitHub](https://github.github.com/gfm/).

:::tip

Usamos un archivo `.prettierrc` para aplicar estilos estándar con el formateador
de código "Prettier". Si usas VS Code, puedes instalar Prettier desde
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Asegúrate de formatear tu trabajo antes de abrir una PR.

:::

## Sintaxis de Markdown {#markdown-syntax}

Sirve como página de ejemplo para dar estilo a sitios de Docusaurus basados en
Markdown.

## Encabezados {#headers}

# H1 - Crea la mejor documentación {#h1---create-the-best-documentation}

## H2 - Crea la mejor documentación {#h2---create-the-best-documentation}

### H3 - Crea la mejor documentación {#h3---create-the-best-documentation}

#### H4 - Crea la mejor documentación {#h4---create-the-best-documentation}

##### H5 - Crea la mejor documentación {#h5---create-the-best-documentation}

###### H6 - Crea la mejor documentación {#h6---create-the-best-documentation}

---

## Énfasis {#emphasis}

El énfasis, también llamado cursiva, con _asteriscos_ o _guiones bajos_.

El énfasis fuerte, también llamado negrita, con **asteriscos** o **guiones
bajos**.

Énfasis combinado con **asteriscos y _guiones bajos_**.

El tachado usa dos virgulillas. ~~Tacha esto.~~

---

## Listas {#lists}

1. Primer elemento de la lista ordenada
1. Otro elemento
   - Sublista sin orden.
1. Los números reales no importan, solo que sea un número
   1. Sublista ordenada
1. Y otro elemento.

- La lista sin orden puede usar asteriscos

* O guiones

- O signos más

---

## Enlaces {#links}

[Soy un enlace en línea](https://www.google.com/)

[Soy un enlace en línea con título](https://www.google.com/ 'Página de inicio de Google')

[Soy un enlace de
referencia][texto de referencia arbitrario sin distinción de mayúsculas]

[Puedes usar números para definir enlaces de referencia][1]

O déjalo vacío y usa el [propio texto del enlace].

Las URL, con o sin corchetes angulares, se convierten automáticamente en
enlaces. http://www.example.com/ o &lt;http://www.example.com/&gt; y a veces
example.com (pero no en GitHub, por ejemplo).

Algo de texto para mostrar que los enlaces de referencia pueden ir más adelante.

[texto de referencia arbitrario sin distinción de mayúsculas]:
  https://www.mozilla.org/
[1]: http://slashdot.org/
[propio texto del enlace]: http://www.reddit.com/

---

## Imágenes {#images}

Este es nuestro logo (pasa el cursor por encima para ver el texto del título):

En línea:
![texto alternativo](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Texto del título del logo 1')

De referencia: ![texto alternativo][logo]

<!-- prettier-ignore-start -->
[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png
  'Texto del título del logo 2'
<!-- prettier-ignore-end -->

Puedes usar imágenes de cualquier carpeta indicando la ruta al archivo. La ruta
debe ser relativa al archivo Markdown.

![img](/img/undraw_Portfolio_update_re_jqnp.svg)

### Tamaño y estilo de las imágenes {#image-sizingstyling}

Puedes cambiar el tamaño de las imágenes con HTML en línea.

<img src="/img/undraw_Portfolio_update_re_jqnp.svg" width="200" />

---

## GIF {#gifs}

Los GIF son útiles para mostrar secuencias cortas de acciones del usuario.

![img](/img/how-to-gif.gif)

Hay muchas herramientas que te ayudan a crear GIF:

- [Peek](https://github.com/phw/peek)
- [Capture to a Gif](https://chrome.google.com/webstore/detail/capture-to-a-gif/eapecadlmfblmnfnojebefkbginhggeh)
- [Chrome Capture](https://chrome.google.com/webstore/detail/chrome-capture-screenshot/ggaabchcecdbomdcnbahdfddfikjmphe)

:::note

Si usas un "punto de cursor" animado y una "animación al mostrar o hacer clic",
el código hexadecimal que usamos es **#B53F48**.

:::

---

## Código {#code}

```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

```js {2}
function highlightMe() {
  console.log('This line can be highlighted!');
}
```

---

## Tablas {#tables}

Puedes usar dos puntos para alinear las columnas.

| Las tablas         |          son          | geniales |
| ------------------ | :-------------------: | -------: |
| la col 3 está      | alineada a la derecha |   \$1600 |
| la col 2 está      |       centrada        |     \$12 |
| las rayas de cebra |      quedan bien      |      \$1 |

Debe haber al menos 3 guiones separando cada celda del encabezado. Las barras
verticales exteriores (|) son opcionales, y no hace falta que el Markdown sin
procesar quede bien alineado. También puedes usar Markdown en línea.

| Markdown | menos     | bonito   |
| -------- | --------- | -------- |
| _Aún_    | `renders` | **bien** |
| 1        | 2         | 3        |

---

## Bloques de cita {#blockquotes}

> Los bloques de cita son muy útiles en el correo electrónico para imitar el
> texto de respuesta. Esta línea forma parte de la misma cita.

Corte de cita.

> Esta es una línea muy larga que se seguirá citando correctamente cuando se
> ajuste. Vaya, sigamos escribiendo para asegurarnos de que sea lo bastante
> larga como para que se ajuste en todas las pantallas. Ah, y puedes _poner_
> **Markdown** en un bloque de cita.

---

## HTML en línea {#inline-html}

<dl>
  <dt>Lista de definiciones</dt>
  <dd>Es algo que la gente usa a veces.</dd>

  <dt>Markdown en HTML</dt>
  <dd>*No* funciona **muy** bien. Usa <em>etiquetas</em> HTML.</dd>
</dl>

---

## Saltos de línea {#line-breaks}

Esta es una línea para empezar.

Esta línea está separada de la anterior por dos saltos de línea, así que será un
_párrafo aparte_.

Esta línea también es un párrafo aparte, pero... Esta línea está separada solo
por un salto de línea, así que es una línea aparte en el _mismo párrafo_.

---

## Avisos {#admonitions}

:::note

Esto es una nota

:::

:::tip

Esto es un consejo

:::

:::important

Esto es importante

:::

:::caution

Esto es una precaución

:::

:::warning

Esto es una advertencia

:::
