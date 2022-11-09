---
title: Release Notes
---

Release notes for **OpenFn/plaform**

## Version 1.94.87 (2021-07-05)

New features:

- **Full text search with Search Console**: Users can now search across message
  bodies, message headers, and run logs via full-text string search.

## Version v1.94.80 (2021-05-25)

New features:

- **Enhanced date selection for inbox and activity history:** Users can now type
  a date string `YYYY-MM-DD HH:mm:ss`, directly into the date field as a filter,
  or select it as before from the date picker.
- **Inbox and Activity History speed enhancements:** Via database structure
  changes, the speed for loading lists of messages and runs has been improved
  significantly.
- **New Export and Reprocess Interfaces:** A unified
  "what-you-see-is-what-you-get" interface has been implemented for exporting
  and reprocessing messages and runs. Now, the bulk query is taken from the
  current filters and a confirmation dialog which displays the query is
  presented to the user. This allows users to have a strong understand of what
  will be exported or reprocessed before executing the bulk request.

## Version 1.92.44 (2021-05-07)

New features:

- **Exclusion filters:** Users can now specify message filter triggers to
  _exclude_ messages matching a certain signature via the same matching rules as
  the standard _inclusion_ filter. Read more in the
  [docs](/documentation/build/triggers#message-filter-triggers)

## Version 1.90.30 (2021-03-31)

New features:

- **Streaming logs:** Users can now view individual logs lines as they are
  emitted by their NodeVM during the execution of a run.
- **Click to find paths:** Users can now click on a node in a sample message in
  the job studio to copy the path to that node. It can then be pasted into the
  expression.
- **Run directly from job studio:** While writing a job in the job studio, it's
  now possible to start a run for that job given the sample message and the logs
  will automatically be streamed back to the Job Studio.

## Version 1.89.29 (2021-03-24)

New features:

- **Sample message explorer:** When writing a job, users can view a selection of
  matching messages which would cause the job to run. Now, that sample
  `state.json` view is more easily browseable as a tree, and by clicking
  individual nodes in the tree users can determine the require `path` to
  accessing source data. For example, clicking on a node at
  `state.data.patient.lastVisitDate` will copy
  `dataValue('patient.lastVisitDate')` to your clipboard for pasting into the
  job expression in the adjacent panel.

Bug Fixes:

- Addressed an issue with the archive service which resulted in incomplete
  archiving of expired data. This impacted users with 365 day retention plans
  and Google Cloud Storage `.zip` archiving for data past its platform expiry.
  _Data stored on the platform itself was unaffected_ but automatic archives for
  data that expired from August 1st, 2019 to March 31st, 2020 only contains a
  subset of the messages and runs from that period.

## Version 1.89.0 (2021-03-15)

New features:

- **Export as yaml or microservice.zip:** Users can now export their project
  configurations (triggers, jobs, credentials) as a `.yaml` file which can be
  run with `OpenFn/microservice` or as a `.zip` file with a prepared
  microservice implementation which can be extracted and started with
  `docker-compose up`.

## Version 1.88.0 (2021-02-22)

New features:

- **Typeahead snippets:** When writing jobs on OpenFn.org, users are now
  prompted with a typeahead (or "autocomplete") dialog which shows them all
  available helper functions and provides rich templates which can be accessed
  at a keystroke. The result is a simpler, more intuitive job writing experience
  that is more tightly coupled to the adaptors themselves.
- **Better IDE mode:** When editing a job, users are now provided with either a
  step-by-step "wizard" mode or a full-screen integrated development environment
  (IDE) which gives them a flexible workspace for viewing sample receipts,
  drafting jobs, and exploring documentation.
- **Direct links to source code:** In the documentation drawer, users now find
  direct links to the source code for each _version_ of the adaptor they're
  using so that they don't need to take extra steps once on GitHub.
- **Save and share searches and filters:** On the **Inbox** and **Activity
  History** pages the current filter (e.g., "Only show messages from the last 7
  days matching trigger X with associated job runs in a failed state") is now
  stored in the URL, allowing users to bookmark particular searches and share
  those searches/filters with colleagues.

## Version 1.87.8 (2021-01-28)

New features:

- **Improved logging on timeouts:** We've enhanced job timeouts significantly,
  splitting into two separate types of timeouts. Exit code `2` is a standard
  timeout which allows us to display the full Javascript logs up to the moment
  of the timeout instead of a mysterious "we timed out your run" message. Exit
  code `4` will be used for when the NodeVM fails to time itself out and becomes
  unresponsive. This second case is extremely rare.

## Version 1.75.0 (2020-07-14)

New features:

- **Scheduled jobs replace timer jobs:** In the past "interval trigger." behaved
  like sand timers, executing your jobs every `x` seconds. This functionality
  has been completely overhauled, giving users much greater control over when
  jobs get executed by introducing `cron` expressions. Learn about `cron` via
  the OpenFn UI, or at
  <a href="https://crontab.guru" target="_blank">crontab.guru</a>.

## Version 1.72.17 (2020-06-21)

New features:

- **Credential sharing:** Users can now share credentials across multiple
  projects _and_ transfer credential ownership to other users.
- **Enhanced credential security:** Project owners can now _disable_ `console`
  for particular jobs in their projects. This can be used to stop unintentional
  or malicious printing of credential data to the logs.
- **Test mode for HTTP jobs:** Users can turn on "test mode" for jobs, which
  will intercept all outbound HTTP requests, print the request parameters to the
  log, and provide a 200 OK response. This can be used to test integrations for
  systems that are still in development.
- **Enhanced debugging/open-source integration:** Now using a new version of
  OpenFn/core which displays the current langauge-package version and Node JS
  version for better debugging and a tighter integration between our
  offline/open-source tools and the platform.
- **Enhanced monitoring:** Queue size monitor allows users to see approximately
  how many runs are in their queue—this is useful for estimating time to
  completing for big bulk reprocessing jobs.

## Version 1.37.0 (2019-10-21)

New features:

- Submit ODK Collect forms (or any OpenRosa compliant form) directly to an
  OpenFn inbox, rather than to ODK Aggregate or some other server before
  forwarding.

## Version 1.36.0 (2019-10-01)

New features:

- Allow messages to be deleted (in accordance with plan retention periods)
  despite having more recent runs related to them. We set the message to "null"
  for these younger runs, but the run logs will still be available until they're
  past the retention period. This allows sensitive data in the initial message
  payload to be purged with the retention period, while less sensitive data in
  the run logs is still kept.
- Added more specific exit codes to runs for non-standard exits. Note that exit
  codes above 2 are _very_ rare. See below for new codes from `v1.36.0` onwards.

Enhanced Error Codes:

- `0`: success (run succeeded, e.g. a destination system responded with a `200`)
- `1`: error (run failed normally, e.g. a destination system responded with a
  `4XX`, `5XX`, or some specialized `RequiredFieldMissing` error.)
- `2`: run timed out (runs >100s only supported in enterprise plans)
- `3`: run could not start due to error (could relate to network traffic, but
  very rare as an error _before_ the run is started will be retried from Redis
  with an exponential backoff for a very long time)
- `5`: unexpected error during job execution
- `10`: error in `core/cli.js execute`

## Version 1.35.0 (2019-10-01)

New features:

- Default navigation drawer to open and grouped nav items for easier access
- Various UI bug-fixes
- Added new indexes on messages and runs for faster search and filter
  performance.
- Enhanced bulk-retry feature for runs
- Enhanced bulk-reprocess feature for messages
- Added user-warning when connecting a job to a GitHub filepath: the contents at
  that filepath will overwrite your current OpenFn job on the next GitHub commit
- Added historical project usage view
- Added activity cleaning, as per www.openfn.org/pricing#plans to better comply
  with data protection regulations and improve UI performance

## Version 1.22.0 (2019-03-10)

New features:

- Allow **filtering by run status (any, success, failed) for bulk retrying
  runs** in the Run Retry modal.
- Hovering over a message/run **displays the full date-time** at which it was
  received/started as well as the relative time (i.e., how long ago) of that
  action.

## Version 1.21.0 (2019-03-09)

New features:

- Added buttons to the Job, Run, and Activity History pages that allow a user to
  **run a time triggered job on demand** so that they don't have to wait for the
  timer to expire to test.

## Version 1.20.0 (2019-03-07)

New features:

- **We've been busy, but negligent on release notes. To explain all that's
  changed we've broken the new features list into multiple sections.**

Messages & the "Inbox" view:

- **Filter messages by body text**. (Be patient, doing `tsvector` searching
  across millions of payloads.)
- Filter by date. (Default inbox view shows last 30 days.)
- **Export messages** as a CSV, based on your currently applied filters.
- **Bulk reprocess messages** in a series.
- All projects on paid plans now have their own job running queues.
- Partial loading to address inbox view performance issues: messages are loaded
  first on the inbox view, and then their related "run states" are calculated
  and loaded in a second action.

Runs & the "Activity History" view:

- **Filter runs by log text**. (This is a full text search and may take some
  time.)
- Filter by date. (Default activity history view shows last 30 days.)
- **Bulk retry runs** in a series. (With the ability to limit retries to a
  certain job.)
- **Export runs** as a CSV, based on your currently applied filters.

Authentication & Security:

- Require basic auth or token auth to make HTTP requests to a project inbox.

Project Settings:

- View the "inbox URL" as text with a click-to-reveal button.
- Show "pace" of estimated usage to determine when a plan upgrade will be
  necessary.

Jobs:

- Ability to create a job, and a trigger all from the same "Wizard" view.

Triggers:

- Ability to create "success" and "failure" triggers so that jobs can be run
  based on the success or failure of another job run.

## Version 1.10.0 (2017-05-04)

New features:

- GitHub integration now generally available for enterprise users. Self-setup
  interface completed.

## Version 1.9.0 (2017-03-07)

New features:

- View matching messages in the job writing interface when a message filter
  trigger is selected.
- "Tree view" exposed for job expression viewing. With valid syntax, you're able
  to see your expression as a syntax tree as we step slowly towards a more
  point-and-click interface.

## Version 1.75.0 (2016-12-08)

New features:

- Hold control while clicking on navigation buttons to open the target in a new
  window.
- Filter messages in your inbox by their content by selecting a message-filter
  trigger.

## Version 1.7.0 (2016-12-05)

#### _1.7 is all about user experience!_

New features:

- Material design—more whitespace and cleaner lines.
- Goto page on inbox and activity tables—save time when processing errors.
- Change number of items per page on inbox and activity table—care with this one
  on slow connections!
- Go to next or previous message or run—makes working through an audit trail
  easier
- Change user profile settings without changing password
- Select syntax style for code editors in user settings—clouds midnight is my
  new favorite
- Filter projects, jobs, triggers by name—on the fly for quick navigation
- Add adaptor logos to credentials list—quick identification
- Specify connection types on "Apps" list—seems there was some confusion about
  this. I know we're missing plenty of apps that have good APIs. Will consider
  logging API documentation as well.
- Shift second top-nav to a collapseable "side nav"—better use of screen
  real-esate.
- Use 'masonry' packing module for jobs, triggers, credentials, and project
  settings boxes—more efficient use of space
- Add material design to _this_ documentation page!

## Version 1.6.0 (2016-11-24)

New features:

- Updated payment receipts to include project names.
- Added `update(...)` to Salesforce adaptor v0.3.0
- Added `fetchWithErrors` to HTTP adaptor v0.3.1

**New Salesforce helper function `update(...)`:** It takes an object and, so
long as you're using the "Id" only updates.

```js
update("Patient__c", fields(
  field("Id", dataValue("pathToSalesforceId"),
  field("Name__c", dataValue("patient.first_name")),
  field(...)
))
```

**New http helper function `fetchWithErrors(...)`:** This function will perform
a get request on an endpoint and return the response to another endpoint,
regardless of whether the first GET suceeded or failed. It's currently being
used to send message receipt confirmations back to a system of origin that uses
OpenFn as an intermediary between it and an SMS gateway. If the SMS message
doesn't get delivered because the phone number is invalid, we'd like that
information the return all the way to Salesforce, rather than erroring out and
staying in OpenFn.

```js
// =============
// We use "fetchWithErrors(...)" so that when the
// SMS gateway returns an error the run does not "fail".
// It "succeeds" and then delivers that error message
// back to Salesforce with the "Update SMS Status" job.
// =============
fetchWithErrors({
  getEndpoint: 'send_to_contact',
  query: function (state) {
    return {
      msisdn:
        state.data.Envelope.Body.notifications.Notification.sObject
          .SMS__Phone_Number__c,
      message:
        state.data.Envelope.Body.notifications.Notification.sObject
          .SMS__Message__c,
      api_key: 'some-secret-key',
    };
  },
  externalId: state.data.Envelope.Body.notifications.Notification.sObject.Id,
  postUrl: 'https://www.openfn.org/inbox/another-secret-key',
});
```

## Version 1.5.0 (2016-10-05)

New features:

- Delete credentials
- Delete triggers
- Archive jobs
- Continual testing from status.openfn.org

**Delete credentials and triggers:** Users can now delete credentials and
triggers.

**Archive jobs:** Users can now archive jobs, rendering them inactive. Click
"view archived jobs" to see and restore old jobs.

**status.openfn.org**: is now live, providing continual testing of key OpenFn
services. We run both message-filter-based and timer-trigger-based jobs every
five minutes to ensure availability, as well as measuring the round-trip time
(in ms) that it takes for a server in a different geographical location to send
valid JSON to OpenFn then receive and process the 200 response. (This time will
vary according to the location of your servers, but it's important to note that
we test the full round trip. Our servers typically send out 200s in about 5-6ms,
but you can expect the round trip to complete in closer to 750ms.)

## Version 1.4.0 (2016-09-26)

New features:

- Run "matches" directly from your inbox view.
- Always display the latest notification, dismiss to scroll back in time.
- Login and signup server responses

**Run "matches" from inbox:** Users can now run matches in a single click from
their inbox, getting notifications that runs have successfully started without
having to navigate to the Message Inspector page for a given message. Look for
the blue "play" button next to each match. Simply click to start running that
job with the message in question.

**Latest notifications:** User notifications will now be displayed
_newest-on-top_ and when there are multiple stacked notifications users will
be... well... notified. Click the small "x" to dismiss the latest notification,
moving backwards in time until all have been read.

**Login/signup errors:** Until now, invalid login messages and duplicate singup
emails had been only displayed in your brower's logs. (That's our fault.) You'll
now see a handy "invalid credentials" or "email already registered" message when
trying to log in or sign up.

## Version 1.3.0 (2016-09-20)

- New version of language-salesforce allows users to `alterState` with a custom
  function.

**alterState:**
[documentation](https://github.com/OpenFn/docs/blob/master/generate-library/alter-state-before-operations.js)

## Version 1.2.0 (2016-09-15)

- Users can now select specific adaptor versions for their jobs.
- Jobs will "auto-upgrade" unless locked to a specific version.

**Adaptor versions:** This means that the code beneath your job, once saved with
a specific adaptor version, will never change. This is an important step forward
for the whole community, as it enables more rapid progress—especially
considering the growing number of outside contributors—without risking
introducing instability to existing jobs.

Each new version of an adaptor will have release notes introducing the new
features or changes to helper functions. To allow easy upgrades, we will still
mandate that all new versions are backwards compatible.

## Version 1.1.0 (2016-08-29)

New features:

- Users can now run jobs based on **timers** as well as filters.
- Users can now view logs for all runs, not just the most recent.
- Jobs are "aware" of their last running state.
- `get(...)` and `post(...)` are now supported using the language-http adaptor,
  allowing users to make their own HTTP calls in jobs.

**Timer triggers:** On the triggers tab, users can set the trigger type to
"timer" and input a whole number of seconds for the "interval". Any "active"
jobs associated with this trigger will run periodically after the interval
elapses.

**View logs for all runs:** By clicking on an individual run from either the
Activity tab or the Message Inspector, users can view the full logs for that
run, regardless of whether or not a more recent run took place with the same job
and message.

**Job state:** When a job runs based on a timer, not an incoming message, it
will preserve it's state for the next run. This feature is commonly used by
language packs like language-surveycto, language-odk, and others to create a
"cursor" to offset or limit database queries.

> For example, `fetchSubmissions(...)` in the language-surveycto adaptor takes
> three arguments: `formId`, `afterDate`, and `postUrl`. The first time this job
> runs it will only fetch submissions _after_ the `afterDate`. If any
> submissions are received, it will take the last submission from the array (by
> date) and persist it in the `job_state` as `lastSubmissionDate`. The next time
> this job runs, say, 300 seconds (5 minutes) later, it will ignore `afterDate`
> and instead fetch submissions after `lastSubmissionDate`. While this
> particular helper function is very abstract (it does this one thing well) it's
> possible to write a job that simply alters the final "state" before
> completing, passing whatever data you'd like from _THIS RUN_ to the _NEXT RUN_
> of the job.

**get(...) and post(...):** Have a look at this complex job using language-http.
See how it is possible to provide a query and a callback for `get` while `post`
takes a url and a body object. At the end, the user is setting
state.lastSubmissionDate to `submissions[submissions.length-1].SubmissionDate`.

See the functions themselves at
[language-http](https://github.com/OpenFn/language-http/blob/master/src/Adaptor.js).

```js
get('forms/data/wide/json/someForm', {
  query: function (state) {
    return { date: state.lastSubmissionDate || 'Aug 29, 2016 4:44:26 PM' };
  },
  callback: function (state) {
    // Pick submissions out in order to avoid `post` overwriting `response`.
    var submissions = state.response.body;
    // return submissions
    return submissions
      .reduce(function (acc, item) {
        // tag submissions as part of the "someForm" form
        item.formId = 'someForm';
        return acc.then(
          post('https://www.openfn.org/inbox/some-inbox-uuid', { body: item })
        );
      }, Promise.resolve(state))
      .then(function (state) {
        if (submissions.length) {
          state.lastSubmissionDate =
            submissions[submissions.length - 1].SubmissionDate;
        }
        return state;
      })
      .then(function (state) {
        delete state.response;
        return state;
      });
  },
});
```
