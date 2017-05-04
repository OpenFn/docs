# Setting up GitHub version control
You're ready to manage your jobs via GitHub, the leading hosted version control software on the web? Great, this section describes the steps necessary to get going.

***N.B.: GitHub integration is currently only available for enterprise users. Contact [enterprise@openfn.org](mailto:enterprise@openfn.org) to build a custom plan for your needs.***

## Motivation
Managing large numbers of jobs with multiple contributors is complicated. We developed the GitHub integration so that OpenFn projects can be linked to GitHub repositories. You can work collaboratively on your jobs. When commits are made to a particular branch OpenFn will automatically update the linked job with the new job file from GitHub.

## Setup Steps

1. Github: Settings -> Personal Access Tokens -> [Generate New Token](https://github.com/settings/tokens/new): This token should have full control of private repositories.
2. OpenFn: [User Settings](https://www.openfn.org/account): Once the token is generated, copy and paste it into the "GitHub Access Token" field on your user settings page.
3. OpenFn: Project -> Version Control: Specify the repository owner, repository name and branch for automatic deploys. You'd also select to turn on or off automatic deploys.
5. GitHub: Repoistory -> Settings -> Webhooks -> Add webhook
  6. Copy Payload URL from OpenFn Version Control page and paste into GitHub.
  7. Select `application/json` as the Content Type.
  7. Copy Secret from OpenFn Version Control page into GitHub.
  8. Leave "Just the push event" and "Active" selected, then click "Add Webook".
7. OpenFn: Project -> Jobs -> Job Edit: To link an individual job to a file in a GitHub repo, edit that job and paste in the path to the job from the root of your GitHub repo. If your repo looks like this, you'd type `sample_job_1.js` or `some_folder/some_other_job.js` to link your OpenFn job to the select file in your repo.

## Advanced Version Control

Using this GitHub integration, you can revert to previous version of jobs quickly by resending old GitHub Webhook Events. Access the "Manage Webhook" interface on GitHub to see a list of all past events and send whichever version of the job you'd like deployed to your OpenFn project.
