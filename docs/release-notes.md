# Version 1.2.0 (09-15-2016)

- Users can now select specific adaptor versions for their jobs.
- Jobs will "auto-upgrade" unless locked to a specific version.

**Adaptor versions:**  This means that the code beneath your job, once saved with a specific adaptor version, will never change. This is an important step forward for the whole community, as it enables more rapid progress—especially considering the growing number of outside contributors—without risking introducing instability to existing jobs.

Each new version of an adaptor will have release notes introducing the new features or changes to helper functions. To allow easy upgrades, we will still mandate that all new versions are backwards compatible. 

# Version 1.1.0 (29-08-2016)

New features:

- Users can now run jobs based on **timers** as well as filters.
- Users can now view logs for all runs, not just the most recent.
- Jobs are "aware" of their last running state.
- `get(...)` and `post(...)` are now supported using the language-http adaptor, allowing users to make their own HTTP calls in jobs.


**Timer triggers:** On the triggers tab, users can set the trigger type to "timer" and input a whole number of seconds for the "interval". Any "active" jobs associated with this trigger will run periodically after the interval elapses.

**View logs for all runs:** By clicking on an individual run from either the Activity tab or the Message Inspector, users can view the full logs for that run, regardless of whether or not a more recent run took place with the same job and message.

**Job state:** When a job runs based on a timer, not an incoming message, it will preserve it's state for the next run. This feature is commonly used by language packs like language-surveycto, language-odk, and others to create a "cursor" to offset or limit database queries.

> For example, `fetchSubmissions(...)` in the language-surveycto adaptor takes three arguments: `formId`, `afterDate`, and `postUrl`. The first time this job runs it will only fetch submissions *after* the `afterDate`. If any submissions are received, it will take the last submission from the array (by date) and persist it in the `job_state` as `lastSubmissionDate`. The next time this job runs, say, 300 seconds (5 minutes) later, it will ignore `afterDate` and instead fetch submissions after `lastSubmissionDate`. While this particular helper function is very abstract (it does this one thing well) it's possible to write a job that simply alters the final "state" before completing, passing whatever data you'd like from *THIS RUN* to the *NEXT RUN* of the job.

**get(...) and post(...):** Have a look at this complex job using language-http. See how it is possible to provide a query and a callback for `get` while `post` takes a url and a body object. At the end, the user is setting state.lastSubmissionDate to `submissions[submissions.length-1].SubmissionDate`.

See the functions themselves at [language-http](https://github.com/OpenFn/language-http/blob/master/src/Adaptor.js).

```js
get("forms/data/wide/json/someForm", {
  query: function(state) {
    return { date: state.lastSubmissionDate || "Aug 29, 2016 4:44:26 PM"}
  },
  callback: function(state) {
    // Pick submissions out in order to avoid `post` overwriting `response`.
    var submissions = state.response.body;
    // return submissions
    return submissions.reduce(function(acc, item) {
        // tag submissions as part of the "someForm" form
        item.formId = "someForm"
        return acc.then(
          post(
            "https://www.openfn.org/inbox/some-inbox-uuid",
            { body: item }
          )
        )
      }, Promise.resolve(state))
      .then(function(state) {
        if (submissions.length) {
          state.lastSubmissionDate = submissions[submissions.length-1].SubmissionDate
        }
        return state;
      })
      .then(function(state) {
        delete state.response
        return state;
      })
  }
})
```
