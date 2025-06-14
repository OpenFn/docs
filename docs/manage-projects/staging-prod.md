---
title: Version Control for Staging and Production Projects
sidebar_label: Staging and Production Projects
slug: /staging-prod
---

It's a safe and efficient practice to use separate production and staging/testing projects to build out and test your workflows before starting to use them in production. This can be made seamless using [Version Control](../manage-projects/link-to-gh.md). This guide walks you through how to set up your OpenFn projects and GitHub repo and gives you two examples of how to manage your `Staging > Production` workflow: one for new projects, and one for existing projects where you want to add a staging project and branch.

### Setup for new projects

1. First, create a `Production` and a `Staging` project on OpenFn (2 projects)

![Prod and Staging Projects](/img/openfn_prod_staging.webp)

2. Choose/create a GitHub repo for your project, and create a `staging` branch

![Prod and Main Branches](/img/staging_prod_branches_gh.webp)

3. Connect your projects to the `main` and `staging` respectively - use [this guide](../manage-projects/link-to-gh.md) to set up the connection 
4. In each repo, create an empty `.js` file for your job. Make sure they have the same name and path on each repo (e.g. `upsert-contacts.js`). These will store the code for the job they'll be linked to in the next step.

5. When you connected the branches to your projects in step 3 above, there was a `spec.yaml` file automatically created on the branch after the first sync (along with two other configuration files). Open these files on GitHub, and locate your job in the file. Replace the contents of `body` with: `path:  {path to the related js file}`. Do this on both your `main` and `staging` branches.

![Spec Main](/img/path_main.webp)
![Spec Staging](/img/path_staging.webp)

6. You're now all set up!  
7. To sync a change from your Staging project to Production **using the OpenFn app**, go to your `Staging` project on OpenFn and make edits to your job. Then go to your project's `Settings` > Sync to `GitHub`, and click `Initiate Sync to Branch`.
8. Alternatively, you can make edits directly to the job code on Github, and commit them to the `staging` branch on Github. 
9. Once you've committed edits to your `staging` branch, on Github you'll see an update that there have been recent changes. Click `Compare & pull request`. 

![Create Pull Request](/img/staging_pushes.webp)

10. Create a Pull Request. This will automatically include all changes that happened to the files on the staging branch.

![Save Pull Request](/img/create_pr.webp)


11. Depending on your team's Github workflow, either have someone to approve and merge the Pull Request, or click `Merge pull request`.

12. Your changes will now be automatically deployed to your OpenFn `Production` project (linked to the `main` Github branch).

### Setup for existing projects

1. First, make sure that the code of all your jobs are stored in separate `.js` files (like `Notify-CHW-upload-successful.js`) on Github that are linked in your `spec.yaml` like so:

```yaml

Notify-CHW-upload-successful:
        name: Notify-CHW-upload-successful
        adaptor: '@openfn/language-http@latest'
        enabled: true
        # credential:
        # globals:
        body: |
          path: ./workflow/Notify-CHW-upload-successful.js

```

You can find more information on this setup in our [Github docs](../manage-projects/link-to-gh.md#sync-from-github-to-openfn).

2. When this is set up, create a new `staging` branch on Github based on your existing production `main` branch that stores your current project. To do this, on your Github repo click into `Branches` (where it show `1 Branch` in the screenshot below).

![Branches](/img/1_branch.webp)

3. Click `New branch`, give it a name like `staging`, make sure the source is `main` if you have multiple branches already. Then click `Create new branch`.

![New Branche](/img/new_branch.webp)

4. Navigate over to your new `staging` branch. **Here comes an important step. Note how the new branch now contains the 3 configurations files (`config.json`, `spec.yaml` and `state.json`) that were present on the main branch. Delete these from the `staging` branch.** New ones specific to the staging branch will be created in the subsequent steps.

5. Now head over to OpenFn, and create a new `Staging` project.

6. Following [this guide](../manage-projects/link-to-gh.md), set up Github connection with your `staging` branch, and click `Initiate a sync` (via the project `Settings > Sync to Github` page). This will create the necessary config files in the Github branch.

7. In the newly generated `spec.yaml` file on the `staging` branch on Github, link your job `.js` files as explained in Step 1. 

8. When you initiate a new sync from OpenFn, the job code from the workflows configured in the app will be synced to the individual OpenFn job files on Github.

9. To make future changes to your "Staging" project, see steps #7-12 above in the `Setup for new projects` section of this guide.
