---
title: Migrate Workflows
---

All workflows can be represented as YAML code. This allows users to export a workflow and import it into another project they have access to.

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
4. Click on the `Copy Code` button to copy the YAML to your clipboard, or the `Download` button to save the YAML as a file.

## Steps to import a workflow
To import a workflow into the target Project:

1. Go to the workflows page in the target project.
2. Click the `Create new workflow` button.
3. Look for a link at the bottom that says `import a YAML file manually` and click on that.
![import YAML](/img/import-yaml.webp)
4. Paste your YAML or import the YAML file if you downloaded it.
![paste YAML](/img/paste-yaml.webp)


:::tip Activate workflows after import

Remember to check if the workflow is active after you import it.

:::

## Migrate Credentials

Credentials are not included in the YAML export. This is intentional, credentials are owned by individual users and scoped to projects.

After importing a workflow, each step that referenced a credential on the
source will need to be reconfigured to restore them.

If you own a credential in the source project and wish to re-use the same in the target project, [see this link for instructions](/manage-users/user-credentials.md#share-credentials).

If you need to create a new credential, go to your credentials page, then create your new credential and include your target project in the `Projects access` section.

:::tip Attach the credentials to each step

After creating a new credential, or giving an existing one access to your target project, you need to go and attach it to those steps that use it in your imported workflow. See screenshot below.

:::

To attach your credential:
1. Click on the target step.
2. On the modal that appears, click on the `Connect` button and select your credential.

![attach credential](/img/attach-credential.webp)

## Common Pitfalls
- **Credential type mismatch.** A step expecting a Salesforce OAuth
  credential will likely fail if linked to a Raw JSON credential. Create the correct
  type on the target.
- **Webhook consumers still pointing at the old URL.** The source workflow
  will keep receiving requests until you update the calling system.
