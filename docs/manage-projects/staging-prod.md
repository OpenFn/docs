---
title: Version Control for Staging and Production Projects
sidebar_label: Version Control for Staging and Production Projects
slug: /staging-prod
---

It's a safe and efficient practice to use separate production and staging/testing projects to build out and test your workflows before starting to use them in production. This can be made seamless using Version Control. This guide walks you through how to set up your OpenFn projects and GitHub repo and gives you an example of how to manage your Staging > Production workflow. 

1. First, create a Production and a Staging project on OpenFn

![Prod and Staging Projects](/img/openfn_prod_staging.png)

2. Choose/create a GitHub repo for your project, and create a staging branch

![Prod and Main Branches](/img/staging_prod_branches_gh.png)

3. Connect your projects to the main and staging respectively - use [this guide](../manage-projects/link-to-gh.md) to set up the connection 
4. In each repo, create an empty .js file for your job. Make sure they have the same name and path on each repo (e.g. `upsert-contacts.js`). These will store the code for the job they'll be linked to in the next step.

5. When you connected the branches to your projects in step 3 above, there was a `spec.yaml` file automatically created on the branch after the first sync (along with two other configuration files). Open these files on GitHub, and locate your job in the file. Replace the contents of `body` with: `path:  {path to the related js file}`. Do this on both your `main` and `staging` branches.

![Configure](/img/path_main.png)
![Configure](/img/path_staging.png)

6. You're now all set up!  
7. To sync a change from your staging project to production, go to your staging project on OpenFn and make edits to your job.
8. Then go to Settings > Synch to GitHub, and click Initiate Sync to Branch
9. Head over to GitHub. On your staging branch you'll see an update that there have been recent changes. Click `Compare & pull request`

![Configure](/img/staging_pushes.png)

 from staging to prod: make change, create PR with only the js
8. Your changes are deployed automatically to your OpenFn prod project when the Pull Request is merged on GitHub.