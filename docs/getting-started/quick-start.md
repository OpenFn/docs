---
title: Quick-start
---

## 1. Create your account

If you haven't already, create an account at
[OpenFn.org](https://www.openfn.org/signup)

## 2. Log In

After logging into your new account, you will see an overview of your current
projects and the job runs associated with that project. This is called the outer
**Dashboard**. Click on one project to start.

## 3. Review the navigation bar

You should now be looking at the OpenFn User dashboard for a particular project.
Review the following navigation tabs: `Jobs` | `Triggers` | `Credentials` |
`Inbox` | `Run History` | `Version Control` | `Access & Security` |
`Project Settings`

### Jobs

A job defines the specific series of tasks or database actions to be performed
when a triggering message is received or a scheduled/recurring time is reached.
Jobs are like the “instructions” you might give a data entry staff member (e.g.,
create new Patient record in the database, send SMS with payment confirmation
number, etc.).

### Triggers

A trigger runs jobs based on events, including incoming messages (this is known
as a `filter` trigger), on a cron schedule (a `cron` trigger) or based on the
success or failure of _another_ job(a `flow` or `catch` trigger).

### Credentials

A credential is used to authorize connection to a destination system (e.g.,
Salesforce username, password & login URL).

### Inbox

Your inbox contains the history of all messages that have passed in to your
project, which may or may not have triggered a specific job. Messages are stored
payloads or data (e.g., an incoming SMS, a submitted CommCare form) that were
sent via HTTP post to your inbox.

### Run History

Runs are OpenFn attempts made on a destination system by running a message
through a job. Runs can be viewed here and re-processed if there were any errors
flagged when running a job.

### Version Control

Sync your project with a GitHub repository so that every change is tracked using
git and jobs can be 'rolled back' to previous commits at the touch of a button.

### Access & Security

Invite other OpenFn users to collaborate with you on your project and create
authentication methods for your project to restrict which applications can send
data to your inbox.

### Project Settings

Monitor your usage and update your project settings here.

## 4. Check your inbox

Click on the Inbox tab to view messages—receipts of data that was sent to your
project inbox. Click on the Inbox tab.

## 5. Run a job

You should see your first message associated with a "sample job". Click on it.
You can now choose to do the following:

- Edit the message (mainly for the purpose of fixing mistakes in data),
- Manually run the job associated with a filter which has identified your first
  message as a trigger. See the `Current Potential` section for all jobs that
  can be run against this message based on their triggers and the message body.

Click run.

## 6. View the Associated Runs

After running the job, view the run logs in this section below.

- Click into a run to see what happened to the data inside of the message. In
  the logs, you should be able to see the status (success/error) of the run.
- Go to the "Run History" navigation tab to also view every job run log and its
  status.

## 7. Familiarize yourself with the other tabs

Navigate to **Triggers**. You can see that the sample filter we provided you
required a message to be sent from OpenFn in order to trigger a job run. Click
on the filter to edit it. Click save when you are done.

Navigate to **Jobs**. Here you can:

- You can click to view the job that was run when triggered by the sample filter
  and sample message.
- Click on "Edit Job" to edit the .js file which executes a specific action
  (job).
- Click on the specified filter to change which filter should trigger that job.

Navigate to **Credentials** to edit the destination system you want to connect
to. By default, we have provided credentials to access the Salesforce sandbox
environment.

Navigate to the **Settings** tab to change the project's name, upgrade your
account for more jobs and runs, add collaborators, and transfer project
ownership.
