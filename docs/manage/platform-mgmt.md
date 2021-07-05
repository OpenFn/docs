---
title: Project Management
---

:::important

Currently, this section is specific to **OpenFn/plaform**.

:::

## Activity

In this section of the portal, you can view a list of all "runs" - i.e.
individual job runs. This list is essentially a compilation of all jobs,
messages and credentials flowing through your OpenFn account towards your
destination system(s).

### Runs

Runs are attempts made on a destination system by running a receipt through a
Job Description. Runs can be viewed and re-processed. Each submission has a
`success`, `started_at`, `finsihed_at`, `job_description_id`, and `receipt_id`
attribute. `Started_at` and `finished_at` are the timestamps when the submission
began and ended.

> **Note:** Some runs may take a really long time, particularly if they are
> performing multiple actions in a destination system or if they are fetching
> lots of data from a REST api at the start of a migration. They will appear as
> red if they have failed. In the case of failure, refer to our
> [Troubleshooting](trouble-shooting.md) section below.

### Filter runs in the Activity view

You can filter the run logs in the Activity View by:

- **Text** - Remember to be patient as a full log text search can take time
  process. Leverage this feature to search for runs with specific error messages
  to support with troubleshooting any failed runs.

- **Date** - Filter the view to only show runs that failed in the last few
  hours/ days/ year – or a custom date range! Note that the default activity
  history view shows runs from the last 30 days.

### Bulk reprocess (retry) runs

Need to re-process a series of runs? This could be helpful if you had multiple
runs fail due to an error message.

1. Generate a list of the runs that you want to reprocess by adjusting the
   filters—be sure to specify an exact date range, job, status, etc.

2. Simply click the **Reprocess** button and review the dialog that appears.
   This dialog contains important information about the query that will be used
   for reprocessing and gives you an approximate number of runs that will be
   reprocessed.

![Retry run button](/img/retrybutton.png)

3. Click "Reprocess" when you're happy with the query. You'll get feedback on
   the number of runs enqueued within seconds, and you should see your project
   queue fill up then empty over time as the batch is processed.

![Retry run button](/img/reprocess-runs.png)

:::info

Note that a filtered list of runs will include runs triggered by message
filters, cron, and flow or catch triggers. When you select to reprocess runs
from a filtered list, the runs in that list which can only be triggered by the
successful or failed exit of _another_ run will not be included in the initial
batch. Those jobs will, however, still get run if they are turned on and
successful or failed runs in the batch trigger them. In other words, flow/catch
triggers will behave normally even during a bulk reprocess order.

:::

:::note

Remember that OpenFn plans are run-based, and you can monitor usage in **Project
Settings** to ensure that you don’t hit any run limits when bulk reprocessing!

:::

### Export runs to CSV

You can download and review OpenFn runs data by exporting to a CSV file.

1. In your activity history view, filter the runs you’d like to export to CSV.
   Choose to filter by text, date, job, and status.

2. Click the **Export as CSV** button to review and confirm the desired export.

![Export runs button](/img/exportruns.png)

3. Click the "Export" button to submit the request. A link to download the file
   will be sent to your email address shortly.

![Retry run button](/img/export-runs.png)

## Inbox

Your inbox contains the history of all messages that have passed in to your
project, which may or may not have triggered a specific job. Messages are stored
payloads or data that were sent via HTTP post to your inbox. They can be viewed
in formatted JSON, edited, or manually processed (if they did not match a filter
when they were originally delivered.)

To edit a message, click the "pencil and paper" icon next to that receipt. Be
careful, as no original copy will be persisted.

### Filter messages in your inbox

To help you more quickly find relevant messages, you can now filter your inbox
by:

- **Body Text** - Search your messages for specific text (e.g., find surveys
  that contain “India” in the body). As individual projects may have millions of
  messages containing tens of thousands of lines of JSON each, we’ve implemented
  a “tsvector” search strategy. Please be patient and note that this text-based
  search may take a moment to return results.. If you’re curious about how
  tsvector works from a technical perspective, check out the
  [official documentation](https://www.postgresql.org/docs/10/datatype-textsearch.html#DATATYPE-TSVECTOR).
- **Date** - Choose a relative date range (e.g., “Last 90 Days”) or define a
  custom date range yourself. Note that the default inbox view shows “Last 30
  Days”.

![Image of Inbox Filters](/img/inbox_filter.png)

### Bulk reprocess messages

Need to re-run a series of messages? If you had a job fail because of an error
for multiple messages, or need to re-process the data in OpenFn to re-send to a
destination application, then this feature will help you do so more quickly!

1. Generate a list of the messages that you want to reprocess by adjusting the
   filters—be sure to specify an exact date range, the matching trigger, etc.

2. Simply click the **Reprocess** button and review the dialog that appears.
   This dialog contains important information about the query that will be used
   for reprocessing and gives you an approximate number of messages that will be
   reprocessed.

![Reprocess button](/img/reprocess_msgs.png)

3. Click "Reprocess" when you're happy with the query. You'll get feedback on
   the number of messages enqueued within seconds, and you should see your
   project queue fill up then empty over time as the batch is processed.

![Retry run button](/img/reprocess-messages.png)

#### Note when bulk reprocessing messages

- This simulates the chain of events that starts when messages first arrive in
  your inbox. In other words, reprocessed messages will be handled by message
  filter triggers for any jobs that have the `autoprocess` setting “on”. If
  you've got messages that match certain triggers, but the associated jobs are
  switched "off" they will not be run when those messages are reprocessed.

- Remember that OpenFn plans are run-based, and you can monitor usage in
  **Project Settings** to ensure that you don’t hit any run limits when bulk
  reprocessing! ![Usage stats chart](/img/usage.png)

### Export messages to CSV

You can now download and review OpenFn message data by exporting to a CSV file.

1. In your inbox, filter the messages you’d like to export to CSV. Choose to
   filter by text, date, trigger, and run state.

2. Click the **Export as CSV** button to review and confirm the desired export.

![Export CSV button](/img/exportcsv.png)

3. Click the "Export" button to submit the request. A link to download the file
   will be sent to your email address shortly.

![Retry run button](/img/export-messages.png)

## Search Console

The **Search Console** allows you to search [OpenFn.org](https://openfn.org) for
specific questions such as _Did patient 798123 get successfully referred or Did
CommCare submission 123e4567-e89b-12d3-a456-426614174000 get loaded into DHIS2?_

It is really hard to search for such information using the
[Inbox](./platform-mgmt#inbox) or [Activity History](./platform-mgmt#activity)
sections of the [OpenFn Platform](https://openfn.org), as you're not entirely
sure where to search. It is also difficult for users to easily determine whether
to use `JSONB matching` or `tsvectors`, or whether to search in
[messages(Inbox)](./platform-mgmt#inbox) or in
[run logs(Activity History)](./platform-mgmt#activity)!

The **Search Console** solves this challenge and allows the user to type the
`string` of concern in the **Search Box** of the **Search Console** page, and
[OpenFn](https://openfn.org) will search in `message bodies` and `run logs`, by
default, and/or in `message headers` if otherwise specified.

To use the **Search Console**, follow the below steps:

1. Login to your [OpenFn Account](https://openfn.org/login).
2. Select the project, if your account is linked to multiple projects.
3. On the left menu pane, click on **Search Console** link.
4. While on the **Search Console** page, select the **Date Range** and enter the
   **text** matching your search in the **Search Box**.
5. Press the **Enter Key** on the _Keyboard_ or click the **Search** button to
   search.

:::note

**OpenFn** will limit the results of your search to a maximum of `10` records
per specified search type(i.e. **OpenFn** will return a maximun of `10` results
for matches found in `bodies`, `logs`, or `headers`). It is therefore
recommended to refine your search to a _specific text_ and _date range_ for
which a matching result is expected.

:::

## Account Management

### Add a credit card

OpenFn's hosted iPaaS has a free-forever tier, but if your organization requires
more jobs or runs each month, you can add a credit card and change to a paid
tier. For comprehensive pricing information please visit our
[pricing page](https://openfn.org/pricing).

To enter your credit card information follow these steps:

1. Login to your OpenFn account.
2. Click on your profile icon on the top right corner o f the page and select
   **Billing**.
3. From the **Billing** page select **Add Card** and enter your credit card
   information.

![Credit Card](/img/add_credit_card.gif)

### Change plan

Once your credit card information is entered you can upgrade your plan by
navigating to the Project Settings page and dragging the slider to the right or
left.

To following these steps:

1. Login to your OpenFn account.
2. Click on the **Project Settings** link on the left-hand menu of the project
   you'd like to modify. (_Or_ click your profile icon on the top right corner
   of the page and select **Billing** and select the project that you would like
   to upgrade.)
3. This will take you to the **Project Settings** menu.
4. Scroll down on the **Project Settings** page and change plans using the
   slider.
5. Once you have selected the desired plan, click **Change to _[plan name]_**
   and then confirm the change.

![Change Plans](/img/change_plan.gif)

### Lost password

If at any time you forget the password for your OpenFn account follow these
steps to reset it:

1. Visit https://openfn.org/login .
2. Enter the email address associated with your account.
3. Click on **Recover Password** (see gif below). This will trigger OpenFn to
   send a recovery token to your associated email account.
4. Check your email for the recovery token and make a copy of it.
5. Enter your recovery token and a new password into the OpenFn "Reset Password"
   page.

![Password Reset](/img/recover_password.gif)

## Project settings

(work in progress)

### Change concurrency

**Concurrency** is the number of jobs that will be run at the same time.

:::note

Think of it as the number of workers or employees performing the same task at
your organization. The task may be to convert an inbound patient record to meet
the FHIR standard, then load it into OpenMRS. You could have 10 files waiting to
be processed from separate deliveries. With a concurrency of 10, all ten files
would start to be processed immediately. With a concurrency of 1, they'd be
processed sequentially, the second only being started once your single worker
finished working on the first.

:::

Projects are set to a concurrency of "1" by default. This means that runs will
be processed one-at-a-time and that each subsequent run will be blocked until
the previous run is completed.

If your project is subscribed to a paid plan, you have the option of toggling
concurrency from the default "1" all the way up to a concurrency of "10".

To change the concurrency level for your project follow these steps:

1. Login to your OpenFn account.
2. Click on the **Project Settings** link on the left-hand menu of the project
   you'd like to modify.
3. This will take you to the **Project Settings** menu.
4. On the **Project Settings** page change concurrency to the appropriate level
   using the slider.
5. Once you have selected the desired concurrency, click **Update Project**.

![Change Concurrency](/img/change_concurrency.gif)

## Access & Security

This section covers the **Access & Security** features each OpenFn project has.
To explore these features, on the left hand navigation ribbon click on the
**Access & Security** tab (#1).

_Please refer to the screenshot below for help navigating the functionality of
this page._

![Access&Security Circled](/img/access_security1.png)

### User Access

OpenFn provides users with the ability to **add collaborator access**, **revoke
collaborator access**, and, in the event you get stuck and need help from an
implementation specialist, **grant OpenFn support access**.

#### Add collaborator access

To add collaborator access to your project from the **Access & Security** page:

- Enter the e-mail address of your collaborator in the "Add collaborator by
email" field. Note that you will need to select "add as collaborator," or add as
administrator" to add him/her to the project. See the screenshot above for
reference (#2).
<!-- TODO: @Taylor the only difference between collaborator and admin is billing access right?z -->

#### Revoke collaborator access

To revoke collaborator access to your project from the **Access & Security**
page:

- Find the collaborator's name in the **User** list and in the **Revoke** column
  click on the on the **Revoke** button. See the screenshot above for reference
  (#3).

#### Grant OpenFn support access

To add OpenFn support team's access to your project from the **Access &
Security** page:

- Enable the **Grant support access** toggle (#4).

### Inbox Security

OpenFn project administrators can choose to configure additional authentication
for any inbound requests made to the project's inbox URL. In the "Access &
Security" page of their OpenFn project, Administrators can choose from API Key
and Basic Auth types, which will prompt administrators to either generate an API
token or to setup a username:password credential. Once this inbox authentication
is configured, any HTTP requests made to the OpenFn Inbox URL must include
either this `x-api-key` token or username:password in the request header.
![inbox security](/img/inbox-security.png)

#### Rotating auth methods

Because more than one auth method may be accepted at a given time, some
organizations choose to periodically rotate their auth methods for extra
security and can do so without disrupting live production integrations. To
rotate your inbox auth methods:

1. Create a _second_ valid auth method with a new token or user:pass
   combination.
2. Provide that token to your external systems so that they can start using it
   in their webhooks/requests to OpenFn.
3. Once you are certain that all external services are now using the new auth
   token, _revoke_ the old auth token.

You can repeat this process as frequently as is required by your organization's
internal security protocols.

## GitHub version control

You're ready to manage your jobs via GitHub, the leading hosted version control
software on the web? Great, this section describes the steps necessary to get
going.

**_N.B.: GitHub integration is currently only available for enterprise users.
Contact [enterprise@openfn.org](mailto:enterprise@openfn.org) to build a custom
plan for your needs._**

### Motivation

Managing large numbers of jobs with multiple contributors is complicated. We
developed the GitHub integration so that OpenFn projects can be linked to GitHub
repositories. You can work collaboratively on your jobs. When commits are made
to a particular branch OpenFn will automatically update the linked job with the
new job file from GitHub.

### Setup Steps

1. Github: Settings -> Personal Access Tokens ->
   [Generate New Token](https://github.com/settings/tokens/new): This token
   should have full control of private repositories.
2. OpenFn: [User Settings](https://www.openfn.org/account): Once the token is
   generated, copy and paste it into the "GitHub Access Token" field on your
   user settings page.
3. OpenFn: Project -> Version Control: Specify the repository owner, repository
   name and branch for automatic deploys. You'd also select to turn on or off
   automatic deploys.
4. GitHub: Repoistory -> Settings -> Webhooks -> Add webhook
5. Copy Payload URL from OpenFn Version Control page and paste into GitHub.
6. Select `application/json` as the Content Type.
7. Copy Secret from OpenFn Version Control page into GitHub.
8. Leave "Just the push event" and "Active" selected, then click "Add Webook".
9. OpenFn: Project -> Jobs -> Job Edit: To link an individual job to a file in a
   GitHub repo, edit that job and paste in the path to the job from the root of
   your GitHub repo. If your repo looks like this, you'd type `sample_job_1.js`
   or `some_folder/some_other_job.js` to link your OpenFn job to the select file
   in your repo.

### Advanced Version Control

Using this GitHub integration, you can revert to previous version of jobs
quickly by resending old GitHub Webhook Events. Access the "Manage Webhook"
interface on GitHub to see a list of all past events and send whichever version
of the job you'd like deployed to your OpenFn project.
