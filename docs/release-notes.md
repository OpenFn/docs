## Version 1.36.0 (2019-10-01)

New features:

- Allow messages to be deleted (in accordance with plan retention periods)
  despite having more recent runs related to them. We set the message to
  "null" for these younger runs, but the run logs will still be available until
  they're past the retention period. This allows sensitive data in the initial
  message payload to be purged with the retention period, while less sensitive
  data in the run logs is still kept.
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
- `4`: run completed but logs could not be saved due to error (could relate to
network traffice but very rare as an error _after_ the run completed will be
retried from Redis with an exponential backoff for a very long time)
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
  that filepath will overwrite your current OpenFn job on the next GitHub
  commit
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

- **Filter messages by body text**. (Be patient, doing `tsvector` searching across millions
  of payloads.)
- Filter by date. (Default inbox view shows last 30 days.)
- **Export messages** as a CSV, based on your currently applied filters.
- **Bulk reprocess messages** in a series.
- All projects on paid plans now have their own job running queues.
- Partial loading to address inbox view performance issues: messages are loaded
  first on the inbox view, and then their related "run states" are calculated and
  loaded in a second action.

Runs & the "Activity History" view:

- **Filter runs by log text**. (This is a full text search and may take some time.)
- Filter by date. (Default activity history view shows last 30 days.)
- **Bulk retry runs** in a series. (With the ability to limit retries to a certain job.)
- **Export runs** as a CSV, based on your currently applied filters.

Authentication & Security:

- Require basic auth or token auth to make HTTP requests to a project inbox.

Project Settings:

- View the "inbox URL" as text with a click-to-reveal button.
- Show "pace" of estimated usage to determine when a plan upgrade will be necessary.

Jobs:

- Ability to create a job, and a trigger all from the same "Wizard" view.

Triggers:

- Ability to create "success" and "failure" triggers so that jobs can
  be run based on the success or failure of another job run.

## Version 1.10.0 (2017-05-04)

New features:

- GitHub integration now generally available for enterprise users. Self-setup interface completed.

## Version 1.9.0 (2017-03-07)

New features:

- View matching messages in the job writing interface when a message filter trigger is selected.
- "Tree view" exposed for job expression viewing. With valid syntax, you're able to see your expression as a syntax tree as we step slowly towards a more point-and-click interface.

## Version 1.75.0 (2016-12-08)

New features:

- Hold control while clicking on navigation buttons to open the target in a new window.
- Filter messages in your inbox by their content by selecting a message-filter trigger.

## Version 1.7.0 (2016-12-05)

#### _1.7 is all about user experience!_

New features:

- Material design—more whitespace and cleaner lines.
- Goto page on inbox and activity tables—save time when processing errors.
- Change number of items per page on inbox and activity table—care with this one on slow connections!
- Go to next or previous message or run—makes working through an audit trail easier
- Change user profile settings without changing password
- Select syntax style for code editors in user settings—clouds midnight is my new favorite
- Filter projects, jobs, triggers by name—on the fly for quick navigation
- Add adaptor logos to credentials list—quick identification
- Specify connection types on "Apps" list—seems there was some confusion about this. I know we're missing plenty of apps that have good APIs. Will consider logging API documentation as well.
- Shift second top-nav to a collapseable "side nav"—better use of screen real-esate.
- Use 'masonry' packing module for jobs, triggers, credentials, and project settings boxes—more efficient use of space
- Add material design to _this_ documentation page!

## Version 1.6.0 (2016-11-24)

New features:

- Updated payment receipts to include project names.
- Added `update(...)` to Salesforce adaptor v0.3.0
- Added `fetchWithErrors` to HTTP adaptor v0.3.1

**New Salesforce helper function `update(...)`:** It takes an object and, so long as you're using the "Id" only updates.

```js
update("Patient__c", fields(
  field("Id", dataValue("pathToSalesforceId"),
  field("Name__c", dataValue("patient.first_name")),
  field(...)
))
```

**New http helper function `fetchWithErrors(...)`:** This function will perform a get request on an endpoint and return the response to another endpoint, regardless of whether the first GET suceeded or failed. It's currently being used to send message receipt confirmations back to a system of origin that uses OpenFn as an intermediary between it and an SMS gateway. If the SMS message doesn't get delivered because the phone number is invalid, we'd like that information the return all the way to Salesforce, rather than erroring out and staying in OpenFn.

```js
// =============
// We use "fetchWithErrors(...)" so that when the
// SMS gateway returns an error the run does not "fail".
// It "succeeds" and then delivers that error message
// back to Salesforce with the "Update SMS Status" job.
// =============
fetchWithErrors({
  getEndpoint: 'send_to_contact',
  query: function(state) {
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

**Delete credentials and triggers:** Users can now delete credentials and triggers.

**Archive jobs:** Users can now archive jobs, rendering them inactive. Click "view archived jobs" to see and restore old jobs.

**status.openfn.org**: is now live, providing continual testing of key OpenFn services. We run both message-filter-based and timer-trigger-based jobs every five minutes to ensure availability, as well as measuring the round-trip time (in ms) that it takes for a server in a different geographical location to send valid JSON to OpenFn then receive and process the 200 response. (This time will vary according to the location of your servers, but it's important to note that we test the full round trip. Our servers typically send out 200s in about 5-6ms, but you can expect the round trip to complete in closer to 750ms.)

## Version 1.4.0 (2016-09-26)

New features:

- Run "matches" directly from your inbox view.
- Always display the latest notification, dismiss to scroll back in time.
- Login and signup server responses

**Run "matches" from inbox:** Users can now run matches in a single click from their inbox, getting notifications that runs have successfully started without having to navigate to the Message Inspector page for a given message. Look for the blue "play" button next to each match. Simply click to start running that job with the message in question.

**Latest notifications:** User notifications will now be displayed _newest-on-top_ and when there are multiple stacked notifications users will be... well... notified. Click the small "x" to dismiss the latest notification, moving backwards in time until all have been read.

**Login/signup errors:** Until now, invalid login messages and duplicate singup emails had been only displayed in your brower's logs. (That's our fault.) You'll now see a handy "invalid credentials" or "email already registered" message when trying to log in or sign up.

## Version 1.3.0 (2016-09-20)

- New version of language-salesforce allows users to `alterState` with a custom function.

**alterState:** [documentation](https://openfn.github.io/docs/documentation/#alterstate-alter-state-to-make-sure-data-is-in-an-array)

## Version 1.2.0 (2016-09-15)

- Users can now select specific adaptor versions for their jobs.
- Jobs will "auto-upgrade" unless locked to a specific version.

**Adaptor versions:** This means that the code beneath your job, once saved with a specific adaptor version, will never change. This is an important step forward for the whole community, as it enables more rapid progress—especially considering the growing number of outside contributors—without risking introducing instability to existing jobs.

Each new version of an adaptor will have release notes introducing the new features or changes to helper functions. To allow easy upgrades, we will still mandate that all new versions are backwards compatible.

## Version 1.1.0 (2016-08-29)

New features:

- Users can now run jobs based on **timers** as well as filters.
- Users can now view logs for all runs, not just the most recent.
- Jobs are "aware" of their last running state.
- `get(...)` and `post(...)` are now supported using the language-http adaptor, allowing users to make their own HTTP calls in jobs.

**Timer triggers:** On the triggers tab, users can set the trigger type to "timer" and input a whole number of seconds for the "interval". Any "active" jobs associated with this trigger will run periodically after the interval elapses.

**View logs for all runs:** By clicking on an individual run from either the Activity tab or the Message Inspector, users can view the full logs for that run, regardless of whether or not a more recent run took place with the same job and message.

**Job state:** When a job runs based on a timer, not an incoming message, it will preserve it's state for the next run. This feature is commonly used by language packs like language-surveycto, language-odk, and others to create a "cursor" to offset or limit database queries.

> For example, `fetchSubmissions(...)` in the language-surveycto adaptor takes three arguments: `formId`, `afterDate`, and `postUrl`. The first time this job runs it will only fetch submissions _after_ the `afterDate`. If any submissions are received, it will take the last submission from the array (by date) and persist it in the `job_state` as `lastSubmissionDate`. The next time this job runs, say, 300 seconds (5 minutes) later, it will ignore `afterDate` and instead fetch submissions after `lastSubmissionDate`. While this particular helper function is very abstract (it does this one thing well) it's possible to write a job that simply alters the final "state" before completing, passing whatever data you'd like from _THIS RUN_ to the _NEXT RUN_ of the job.

**get(...) and post(...):** Have a look at this complex job using language-http. See how it is possible to provide a query and a callback for `get` while `post` takes a url and a body object. At the end, the user is setting state.lastSubmissionDate to `submissions[submissions.length-1].SubmissionDate`.

See the functions themselves at [language-http](https://github.com/OpenFn/language-http/blob/master/src/Adaptor.js).

```js
get('forms/data/wide/json/someForm', {
  query: function(state) {
    return { date: state.lastSubmissionDate || 'Aug 29, 2016 4:44:26 PM' };
  },
  callback: function(state) {
    // Pick submissions out in order to avoid `post` overwriting `response`.
    var submissions = state.response.body;
    // return submissions
    return submissions
      .reduce(function(acc, item) {
        // tag submissions as part of the "someForm" form
        item.formId = 'someForm';
        return acc.then(
          post('https://www.openfn.org/inbox/some-inbox-uuid', { body: item })
        );
      }, Promise.resolve(state))
      .then(function(state) {
        if (submissions.length) {
          state.lastSubmissionDate =
            submissions[submissions.length - 1].SubmissionDate;
        }
        return state;
      })
      .then(function(state) {
        delete state.response;
        return state;
      });
  },
});
```
