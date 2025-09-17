---
title: Manage changes with GitHub branches
sidebar_label: Manage changes
---

In the [Edit Steps Locally](../build/editing-locally.md) section, we walked through
the process of creating and adding your changes to the `main` branch of a
project.

However, most code change to workflows involve sharing and reviewing changes
before deployment. You can do this by creating, testing and sharing your changes
on a new GitHub branch, then, once final, merging them into `main` for
deployment.

:::tip

There are LOTS of different strategies for branching and reviewing code on Git.
(Like [GitHub Flow](https://guides.github.com/introduction/flow/) or
["That Famous @nvie Post"](https://nvie.com/posts/a-successful-git-branching-model/)
for example!) This guide is meant to give you a very brief introduction to
branches in Git, but it is not meant to dictate the "right way".

:::

Let's pick up the workflow when you `git pull` -ed the latest changes of the
repo to your local folder.

1. Running `git checkout -b {branch_name}` will create and switch over to a new
   branch. When you start editing your steps, the changes will be kept on this
   branch, managed separately from `main`.

2. To test the changes locally, check out the
   [The CLI](../build-for-developers/cli-intro.md) docs.

3. Just as you've seen when working on `main`, when you're done check which
   files you changed with `git status`.

4. Then use `git add {filepath}` followed by `git commit -m {change notes}` to
   prepare the changes to be merged into the repo.

5. The following command will push your changes to the remote repository as a
   separate, new branch: `git push --set-upstream origin {branch_name}`.

6. On GitHub, you can create a Pull Request to get your changes reviewed and
   approved.

   ![PR-1](/img/pull-request.webp)

   ![PR-2](/img/pull-request-2.webp)

7. As you keep working with branches, make sure you check which branch you're on
   with `git status`.

![git-status](/img/git-status.webp)

8. To keep your local copy up to date with the remote repo, switch to `main`
   with `git checkout main` and hit `git pull` to pull any changes.

9. If you're still working on your separate branch while `main` has been
   updated remotely and want integrate the remote changes, use `git checkout main`,
   then `git pull`, then `git checkout {working_branch_name}` followed by
   `git merge main` to merge changes from `main` into your working branch.
