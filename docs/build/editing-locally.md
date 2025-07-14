---
title: Edit Steps locally
sidebar_label: Edit Steps locally
---

If you're a developer, you can use your favorite text editor and make changes
offline, committing and pushing to GitHub. This page describes how to edit Steps
locally, instead of on the platform via
[the Inspector](/documentation/build/steps/step-editor).

First, make sure that version control is set up for your Project (see
[Manage Projects](/documentation/manage-projects/platform-mgmt) for more on
configuring this). When that's all done, follow these steps on your local
machine:

1. Make sure you have
   [git installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. Clone the repo from GitHub. Depending on how you're connecting, grab the
   HTTPS or SSH URL of the repository.

![GH Clone URL](/img/git_clone_url.webp)

:::tip

You can connect to GitHub with username+password (HTTPS) or an SSH keypair you
generated. (You can check out the
[GitHub docs](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories)
for more info.)

:::

3. Then use it to
   [clone the repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
   to your computer by running this command in a folder that you'd like to
   contain your new repo: `git clone {repo URL}` (e.g.,
   `git clone https://github.com/OpenFn/Miracle-Feet.git`)

4. To update your local copy with changes from GitHub, run `git pull` regularly
   while you're editing.

5. For this tutorial, we assume you're making changes on the `main` or `master`
   branch: the one that is deployed as your production system to OpenFn.

6. To edit your steps, use a code editor. We recommend
   [Visual Studio Code](https://code.visualstudio.com/download).

![VS Code](/img/edit_job_vscode.webp)

7. When using VS Code, make sure you install the
   [Prettier VSCode Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   and set it as the default formatter in Settings as seen below. This will apply
   the correct code formatting to the files you change.

![Prettier](/img/prettier.webp)

8. Once you're done, you can check which files you changed with `git status`.

9. Then use `git add {filepath}` followed by `git commit -m {change notes}` to
   prepare the changes to be merged into the repo.

:::tip

There's a lot to learn about git.
[Here's a good place to start](https://github.com/git-guides/git-commit).

:::

10. Then run `git push` to upload the files to the repo (see more on
    [git docs](https://github.com/git-guides/git-push)).

From there, the version control integration will update changed steps in your
OpenFn Project and you can test those changes on the platform.

Once you're ready to start running steps and testing your changes _locally_,
head over to the [The CLI](/documentation/cli) docs for guidance.
