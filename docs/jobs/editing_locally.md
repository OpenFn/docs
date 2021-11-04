---
title: Editing jobs locally
---

Make sure you have [git installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Clone repo from GitHub

You can connect to GitHub with username+password (HTTPS) or an SSH keypair you generated. (You can check out the [GitHub docs](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories) for more info.) Depending on how you're connecting, grab the HTTPS or SSH URL of the repository.

![GH Clone URL](/img/git_clone_url.png)

Then use it to [clone the repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to your computer by running this command:

`git clone {repo URL}` 

For example:
`git clone https://github.com/OpenFn/Miracle-Feet.git`

To update your local copy with changes from GitHub, run `git pull` regularly while you're editing.

For this tutorial, we assume you're making changes on the `main` or `master` branch: the one that is deployed as your production system to OpenFn.

To edit your jobs, use a code editor such as [Visual Studio Code](https://code.visualstudio.com/download).

![VS Code](/img/edit_job_vscode.png)

Make sure you install the [Prettier VSCode Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and set is as default formatter in Settings as seen below. This will apply the correct code formatting to the files you change.

![Prettier](/img/prettier.png)

Once you're done, you can check which files you changed with `git status`. Then use `git add {filepath}` [followed])(https://github.com/git-guides/git-commit) by `git commit -m {change notes}` to prepare the changes to be merged into the repo. 

Then run `git push` to upload the files to the repo (see more on [git docs](https://github.com/git-guides/git-push)).