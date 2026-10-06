---
title: Gestionar cambios con ramas de GitHub
sidebar_label: Gestionar cambios
translation_source_hash: 550f3cd679d88a41a173cd21cd874d768048f718
translation_review_status: machine
---

En la sección [Editar steps localmente](/build/editing-locally.md), vimos cómo
crear tus cambios y agregarlos a la rama `main` de un proyecto.

Sin embargo, la mayoría de los cambios de código en los workflows implican
compartir y revisar los cambios antes de desplegarlos. Para hacerlo, puedes
crear, probar y compartir tus cambios en una rama nueva de GitHub y, cuando
estén listos, hacer merge en `main` para desplegarlos.

:::tip

Hay MUCHAS estrategias distintas para crear ramas y revisar código en Git. (¡Por
ejemplo, [GitHub Flow](https://guides.github.com/introduction/flow/) o
["ese famoso post de @nvie"](https://nvie.com/posts/a-successful-git-branching-model/)!)
Esta guía busca darte una introducción muy breve a las ramas en Git, pero no
pretende dictar la "forma correcta".

:::

Retomemos el proceso desde el momento en que hiciste `git pull` para traer los
últimos cambios del repositorio a tu carpeta local.

1. Al ejecutar `git checkout -b {branch_name}`, se crea una rama nueva y te
   cambias a ella. Cuando empieces a editar tus steps, los cambios se guardarán
   en esta rama, separados de `main`.

2. Para probar los cambios localmente, consulta la documentación de la
   [CLI](/build-for-developers/cli-intro.md).

3. Igual que cuando trabajas en `main`, cuando termines, revisa qué archivos
   cambiaste con `git status`.

4. Luego, usa `git add {filepath}` y después `git commit -m {change notes}` para
   preparar los cambios para hacer merge en el repositorio.

5. El siguiente comando envía tus cambios al repositorio remoto como una rama
   nueva y separada: `git push --set-upstream origin {branch_name}`.

6. En GitHub, puedes crear una pull request para que revisen y aprueben tus
   cambios.

   ![PR-1](/img/pull-request.webp)

   ![PR-2](/img/pull-request-2.webp)

7. A medida que trabajes con ramas, revisa en qué rama estás con `git status`.

![git-status](/img/git-status.webp)

8. Para mantener tu copia local al día con el repositorio remoto, cámbiate a
   `main` con `git checkout main` y ejecuta `git pull` para traer los cambios.

9. Si sigues trabajando en tu rama aparte mientras `main` se actualizó en el
   remoto y quieres integrar esos cambios remotos, usa `git checkout main`,
   luego `git pull`, luego `git checkout {working_branch_name}` y, por último,
   `git merge main` para hacer merge de los cambios de `main` en tu rama de
   trabajo.
