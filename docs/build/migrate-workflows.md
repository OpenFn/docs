---
title: Migrate Workflows
---

All workflows can be represented as YAML code. This allows for the users to export a workflow and import it into another project they have access to.

:::info What YAML carries

The YAML export captures the workflow structure: steps, triggers, paths, edge
conditions, adaptor versions, and job code. It does not carry credentials,
run history, work orders, dataclips, or webhook URLs. 

:::

## Steps to export a workflow
To export a workflow from the source Project:

1. Click on the workflow you want to export. 
2. On the top-right corner is a vertical slider button. Click on that.
3. A `View your workflow as YAML code` link will appear on the pop-up. Click on it.
![export YAML](/img/export-yaml.webp)
4. Click on the `Copy Code` button to copy the YAML to your clipboard.
5. If you prefer to store it for later on your computer. Click on the `Download` button.

## Steps to import a workflow
To import a workflow into the target Project:

1. Go to the workflows page in the target project.
2. Click the `Create new workflow` button.
3. Look for a link at the bottom that says `import a YAML file manually` and click on that.
![import YAML](/img/import-yaml.webp)
4. Paste your YAML or import the YAML file if you downloaded it.
![paste YAML](/img/paste-yaml.webp)


:::tip Activate workflows after import

Note that the workflow is disabled on import. Click on `Go live` to activate it.

:::

## Migrate Credentials

Credentials are not included in the YAML export. This is intentional, credentials are owned by individual users and scoped to projects.

After importing a workflow, each step that referenced a credential on the
source will need to be reconfigured to restore them:

If you own a credential in the source project and you wish to re-use the same in the target project:

1. Go to the user section on the top-left corner of your screen and click on the drop-down button.
![credentials](/img/profile-credentials.webp)
2. Click on credentials and find the credential you are looking to re-use.
3. Click the `Actions` button on the credential and select `Edit`.
4. In the pop-up that follows look for a `Projects access` section at the bottom.
![projects access](/img/projects-access.webp)
5. Search for the target project in the dropdown and click on it. See that it is added below the dropdown and click on `Save credential`
![projects access](/img/project-added.webp)

If you need to create a new credential, got to your credentials page, then create your new credential and include your target project in the `Projects access` section.

:::tip Attach the credentials to each step

After creating a new credential, or giving an existing one access to your target project, you need to go and attach it to those steps that use it in your imported workflow. See screenshot below.

:::

![attach credential](/img/attach-credential.webp)

## Common Pitfalls

- **Adaptor version not available on the target.** If the target instance
  doesn't have the adaptor version referenced in the YAML, the import will
  fail or the run will not fail. Confirm adaptor availability before
  importing, or update the adaptor version in the YAML to one supported on
  the target.
- **Credential type mismatch.** A step expecting a Salesforce OAuth
  credential will likely fail if linked to a Raw JSON credential. Create the correct
  type on the target.
- **Webhook consumers still pointing at the old URL.** The source workflow
  will keep receiving requests until you update the calling system.
