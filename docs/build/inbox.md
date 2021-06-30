---
title: The Inbox
sidebar_label: Your Inbox
---

## How it works

On the platform, each project has their own unique inbox URL, something like
`https://www.openfn.org/inbox/54804f1a-4a70-4392-97cb-1f350e98e9c8`. That big
string of numbers and letters is called a `UUID`. It's your address, and the
"place" on the web that you'll send data for processing by OpenFn if you're
doing real-time or "event-based" integration.

Your project will always be listening, and whenever an HTTP request is received
at that URL, we'll respond with a `202/Accepted` and start processing the data
sent either in the `body` or the `parameters` of that request.

## `202/Accepted vs 201/Created`

You've probably heard of `200/OK` or other common "status codes", but the
difference between a `201` and a `202` is very interesting from an integration
perspective.

The `201/Created` means that we've completed processing whatever data was sent
to us by the requester. Usually, this response is accompanied by a payload with
a new `id` for whatever resource what created. This is _not_ what OpenFn does,
instead we send a `202/Accepted` indicating that your request was acceptable and
we'll get to work.

:::tip

OpenFn sends a `202/Accepted` indicating that your request has passed our
initial validation (i.e. the data is valid `JSON` or parseable `XML` and the
inbox URL exists) and that we've enqueued it for processing.

:::

Behind the scenes, we've now a system of simple, durable queues that ensure we
don't "drop" this event at any point in time from here on forward.

1. We'll load it into the database and soon it will appear as a new "message"
   record in your "Inbox" page.
2. We'll check the triggers for all the active jobs in your project and if it
   matches one of those triggers we'll send it to another queue for job running.
3. We'll make sure your project is configured properly and that you haven't
   exceeded your usage limits.
4. We'll start executing a job run, which may itself may hundreds of unique HTTP
   requests to other endpoints.
5. And finally we'll report back on the status of that run and soon it will
   appear as a new "run" in your "Activity History" page.

Depending on how many requests your job makes, how much data is being processed,
and the response time of your other systems, all of this could take quite some
time—anywhere from `200ms` to `20 minutes`!

If the system that sends the data to OpenFn needs to know whether all the
operations in step 4 completed successfully (what do you count as a success with
these various custom actions, by the way?) you should consider implementing a
SAGA pattern, whereby after all this processing is complete you trigger another
request back to the initial system reporting on the downstream tasks. This can
be done in OpenFn with [Flow Triggers](/documentation/jobs/multiple-operations).

## Synchronous vs. Asynchronous Processing

On **OpenFn/platform**, processing is asynchronous by default. Multiple complex workflows may be initiated, error handling and notifications all happen downstream. 
1. If you send data to OpenFn Inbox, you'll receive a `202` if successful (and `502` if we didn't receive your data/bad request). 
2. We'll then load it into the database and soon it will appear as a new "message"
   record in your "Inbox" page.
3. We'll check the triggers for all the active jobs in your project and if it
   matches one of those triggers we'll send it to another queue for job running.
4. We'll make sure your project is configured properly and that you haven't
   exceeded your usage limits.
5. We'll start executing a job run, which may itself may hundreds of unique HTTP
   requests to other endpoints. 
6. _If you want to then send an update back to the source system... you may configure another job to send requests and updates back to the triggering source system._ 

In **OpenFn/microservice** or using open-source tools, you could create a synchronous system. We've created a way to set up inbox endpoints as
"synchronous", meaning they'll actually hold a connection open _until_ all of
the processing above is completed, and then respond with a `2XX`, `4xx`, or
`5XX`. This is not recommended for high volume systems, but may be a requirement
for some implementations; the sprit of **OpenFn/microservice** is to give as much
control as possible to whoever is deploying it on their servers.
