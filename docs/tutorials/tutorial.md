---
title: Tutorial
sidebar_label: Workflow QuickStart
---
# Tutorial: Creating your first workflow

# QuickStart: Creating your first workflow
1. Go to your OpenFn Project > `Workflows`
2. Create a new [Workflow](../build/workflows.md)
3. Choose your [Trigger type](../build/triggers.md): Webhook Event (for real-time integration) or Cron Expression (for timer/scheduled-based integration)
3. Name your first `Step` (e.g., "Import form submission") and open it to choose the [Adaptor](/adaptors), Adaptor `Version`, and [Credential](../build/credentials.md)
4. Click the `</>` code button to open the [Inspector](../build/steps/step-editor.md) and add job code to the `Editor` panel to define the specific business logic or transformation rules for this workflow
5. In the `Input` panel on the left, add a custom input (e.g., a payload from a webhook request) or simply add empty brackets (`{}`) to run a Workflow with a cron trigger. See the [Workflow docs](docs/build/workflows.md) for help with running and testing Workflow. 
6. If the Step suceeds, navigate back to the Canvase view and click the `+` icon to add a second Step.
7. If you want to define conditions for if/when this second Step should execute, update the [Path condition](../build/paths.md). 
8. Then repeat the instruction steps #3-6 to finishing configuring this next Step, until the Workflow is complete. 

:::tip

Check out the video and docs on the [Workflows page](../build/workflows.md) in the `Build` docs for in-depth help, or ask your questions on [Community](https://community.openfn.org)!

:::
