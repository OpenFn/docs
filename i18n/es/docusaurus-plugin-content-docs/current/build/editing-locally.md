---
title: Editar steps localmente
sidebar_label: Editar steps localmente
translation_source_hash: 17d7dee86170ea20aa87a3e41929b8bcded068d2
translation_review_status: machine
---

Si eres desarrollador, puedes usar tu editor de texto favorito y hacer cambios
sin conexión, con commits y push a GitHub. Esta página explica cómo editar steps
localmente, en lugar de hacerlo en la plataforma con
[el Inspector](/build/steps/step-editor.md).

Primero, asegúrate de que el control de versiones esté configurado para tu
proyecto (consulta [Gestionar proyectos](/manage-projects/platform-mgmt.md) para
saber cómo configurarlo). Cuando esté listo, sigue estos pasos en tu
computadora:

1. Asegúrate de tener
   [git instalado](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. Clona el repositorio desde GitHub. Según cómo te conectes, copia la URL HTTPS
   o SSH del repositorio.

![URL para clonar en GitHub](/img/git_clone_url.webp)

:::tip

Puedes conectarte a GitHub con usuario y contraseña (HTTPS) o con un par de
claves SSH que hayas generado. (Consulta la
[documentación de GitHub](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories)
para más información).

:::

3. Luego, úsala para
   [clonar el repositorio](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
   en tu computadora; para ello, ejecuta este comando en la carpeta donde
   quieras guardar el nuevo repositorio: `git clone {repo URL}` (por ejemplo,
   `git clone https://github.com/OpenFn/Miracle-Feet.git`)

4. Para actualizar tu copia local con los cambios de GitHub, ejecuta `git pull`
   con frecuencia mientras editas.

5. En este tutorial, suponemos que haces los cambios en la rama `main` o
   `master`: la que está desplegada en OpenFn como tu sistema de producción.

6. Para editar tus steps, usa un editor de código. Recomendamos
   [Visual Studio Code](https://code.visualstudio.com/download).

![VS Code](/img/edit_job_vscode.webp)

7. Si usas VS Code, asegúrate de instalar la
   [extensión Prettier para VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   y configurarla como formateador predeterminado en Settings, como se ve abajo.
   Así se aplica el formato de código correcto a los archivos que cambies.

![Prettier](/img/prettier.webp)

8. Cuando termines, puedes ver qué archivos cambiaste con `git status`.

9. Luego, usa `git add {filepath}` y después `git commit -m {change notes}` para
   preparar los cambios para hacer merge en el repositorio.

:::tip

Hay mucho que aprender sobre git.
[Este es un buen punto de partida](https://github.com/git-guides/git-commit).

:::

10. Luego, ejecuta `git push` para subir los archivos al repositorio (consulta
    más en la [documentación de git](https://github.com/git-guides/git-push)).

A partir de ahí, la integración con el control de versiones actualizará los
steps modificados en tu proyecto de OpenFn y podrás probar esos cambios en la
plataforma.

Cuando quieras empezar a ejecutar steps y probar tus cambios _localmente_,
consulta la documentación de la [CLI](/build-for-developers/cli-intro.md).
