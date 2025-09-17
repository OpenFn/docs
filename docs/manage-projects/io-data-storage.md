---
title: Data Storage
---

In the "Data Storage" section of your Project `Settings`, you can configure what
you'd like OpenFn to do with the actual _data_ (`Inputs` and `Outputs`) that are
processed (or produced) by your workflow runs.

### Why would I store input/output data along with run logs?

Users may configure OpenFn to temporarily store data (e.g., forms fetched from
CommCare mobile app) so that transactions can be easily troubleshooted and
rectified in case of errors (e.g., destination DHIS2 system is down, or a
database constraint/validation blocks a data import). Data retention periods
have a default time period set by the OpenFn instance administrator, but can be
modified according to a specific project's requirements.

One of the most powerful features of the platform is the ability to "replay"
work orders. In the scenario where you have a multi-step workflow (e.g., get
data from Database, transform & map the data, and import to your Health
Information System), this temporary data storage allows OpenFn administrators to
quickly troubleshoot failed work orders and "re-try" the workflow from the
failed step, rather than re-running the workflow from the very beginning. This
allows administrators to reprocess the failed work orders without having to
fetch (or re-send) the data (Inputs) from a source system.

### Why would I chose to _NOT_ store input/output data?

Some of our users are processing incredibly sensitive data (such as medical
records) and might want to ensure that after a workflow is run there is no
patient data left on OpenFn servers.

Enabling this "zero-persistence" feature for Input/Output data is an attractive
option for folks who want to use OpenFn on the cloud but are worried about data
sovereignty.

:::tip

Check out the docs page on
[Security & Compliance](../get-started/security-compliance.md) for more on data
storage and solution architectures that rely on OpenFn "zero-persistence" data
pipelines.

:::

### Export History

Users can also export all work orders and their associated artefacts (runs,
steps, runsteps, input and output data clips) in a project. Work order history
export is managed at a project level and available to all collaborators (viewer,
editor, admin, owner) in a project.

#### How to export work order history

To export work order history for your project, open the project and click on
`History` on the side menu. On the History page, scroll to the bottom of the
work order history table and click on the cloud icon (see image below).

![History Page](/img/history_page_cloud.webp)

Clicking on the download icon will prompt a confirmation modal for the export.
If confirmed, a background process will be initiated for the export.

![Confirm export](/img/confirm_export.webp)

When the export is complete, an email will be sent to your OpenFn user's
associated email address.

:::info FOR LOCAL DEPLOYMENTS

For local deployments, OpenFn uses Swoosh as a mailbox service for development
purposes and can access the mailbox via http://localhost:4000/dev/mailbox. You
can substitute localhost:4000 to match the port hosting your OpenFn instance.

:::

#### Managing Exports

Users can view all history exports via the `History Exports` page in the project
settings. Click on `Settings` on the side menu and click on `History Exports` to
see the list of work order exports in your project.

On the `History Export`s page, you will see the list of exports showing your
latest request and previous requests with the other information such as
filename, date of export, user who requested the export and the status.

![List of history exports ](/img/history_exports_page.webp)

:::caution Configuring storage for exports

OpenFn instance administrators can configure the storage for work order exports
for local deployments. OpenFn currently supports local storage and Google Cloud
Storage as destinations for exporting work orders.

:::
