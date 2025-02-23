---
title: History & Search in OpenFn
sidebar_label: History & Search
---

For platform administrators, `History` is your central console for monitoring
all activity across your active Workflows. Read on to understand its key
components.

## History

The `History` page provides a list of all of the
[Work Orders](/documentation/get-started/terminology#work-order) and
[Runs](/documentation/get-started/terminology#run) that have been processed in a
Project.

![History](/img/case-referral-history.png)

## Workflow execution: Work Orders and Runs

OpenFn Workflows are executed as follows:

1. A Workflow `Trigger` is activated by a webhook event, cron timer, or manual
   action.
2. This creates a `Work Order` - a request to run a Workflow with a given input
   (e.g, a new form submission or patient record that needs to be processed).
   For a `Work Order` to be completed, it should reach an ending Step
   succesfully (without errors) - this ensures that the processing has been
   completed.
3. A `Run` is then executed to try to complete the Workflow successfully. This
   Run will have a [status code](/documentation/monitor-history/status-codes),
   indicating whether the Workflow Steps were successfully processed.
4. If the 1st `Run` fails, then you can rerun it to "retry" the workflow. A 2nd
   `Run` will be created. If successful, then both the Run and related Work
   Order will be updated with a `success` status.

![History Page](/img/history-page-annotated.png)

Check out the other pages in this docs section to learn more about inspecting
Runs, troubleshooting, and rerunning failed Runs.

## How Search Works

Via the searchbar on the history page you can find work orders whose _related_
input/output dataclips or run logs contain specific text strings. By default,
the system will search run logs only but you can select to search any or all of
three options:

![Search Options](/img/search-options.png)

1. OpenFn UUIDs for workorders, runs, or steps
2. Input/Output dataclip bodies
3. Run logs

If searching for text within an input/output dataclip or run logs, a `tsvector`
search is applied. This method of searching allows you to find work orders
quickly and allows for partial string matches across all text in the run logs
and across the "keys" and "values" of your dataclips.

:::caution Very large/complex input dataclips may not be indexed

It's not currently possible to create `ts_vector` indexes larger than 1MB, and
as a result very large or complex input dataclips may not appear in search
results. This typically won't happen until you're nearing 10MB of JSON, but the
number of distinct lexemes & positions in your JSON will impact the final index
size.

More at the Postgres
["text search limitations" docs page](https://www.postgresql.org/docs/current/textsearch-limitations.html).

:::

Partial string matching works best at the start of words, so if you're looking
for items matching `"newPatient"` it's better to search for `"newPat"` than for
`"tient"`. (When in doubt, whole words or IDs produce the best results.)

## Search & Filter Results

Even though you can search for text strings that appear in specific run logs or
dataclips, it's important to remember that the results returned are still **work
orders**. If the output dataclips of the third step in the first run of work
order "123" matches your text search, you'll see work order "123" in your
results.
