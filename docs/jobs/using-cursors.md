---
sidebar_label: Using Cursors
title: Using Cursors
---

## Using Cursors

Sometimes it is useful to maintain a rolling cursor position on the backend
datasource. This can be used in a cron-based workflow, for example, to query the
database for new records since the last run.

In a cron workflow, OpenFn will pass the previous state into the next state - so
state persists across runs. We can take advantage of that to pick up where we
left off.

You can use the [`cursor()`](/adaptors/packages/common-docs#cursor) operation,
which is built-in to most adaptors, to make cursor management easier.

<details>
<summary>Version support</summary>
The cursor operation was introduced to <code>@openfn/language-common</code> in version
<code>1.13.0</code> (released April 2024).
<br />
<br />
Any adaptor which uses common <code>1.12.0</code> or less will not support the
cursor operation. Consider updating to the latest adaptor version to take advantage
of this functionality.

</details>

### Setting the cursor value

To use a cursor from a fixed date, just add a line like this to the top of your
job:

```js
cursor('2024-04-08T12:00:00.0000');
```

Using a string value like this will set the cursor to _always_ use the date you
provided.

If you are using a date cursor, you can also pass in natural language strings
like "now", "today", "yesterday", "24 hours ago" or "start" (ie, the time the
job started).

:::tip Timezones

Relative dates like "today" will be converted into a Javascript Date using the
system locale.

If you're in the CLI that means times will be calculated in your local system
time; or if you're running on Lightning it'll use the Lightning system time
(usually UTC).

The cursor function will log the exact time, including the time zone, it is
using.

:::

To use a rolling or manual cursor, you should pass the cursor value from state.
You might want to include a default value too:

```js
cursor(state => state.cursor, { defaultValue: '2024-04-08T12:00:00.0000' });
```

### Using the cursor

To use the cursor in your job, just use `state.cursor` in your queries like any
other state property.

The usage will be different depending on the adaptor you're using. Here's how
you might build a URL with query parameters with the HTTP adaptor:

```js
get(state => `/registrations?since=${state.cursor}`);
fn(/* do something good with your data */);
```

This will read the cursor value off the state object, insert it into a string,
and pass it into a HTTP query.

Or perhaps you want to build the cursor into an object:

```js
get('registrations', state => {
  query: {
    fromdate: state.cursor;
  }
});
```

The actual value of a cursor is arbitrary. You can use a string, a Date, a page
number or object, or anything you like.

You may want to advance the cursor at the end of a job ready, for the next run:

```js
cursor(state => state.cursor, { defaultValue: 'today' });
get(`/registrations?since={date.cursor}`);
fn(/* do something good with your data */);
cursor('now');
```

### Manual Cursors

It's often useful to manually set the cursor position - usually when testing or
debugging. Maybe yesterday's run failed and you want to repeat it, or maybe
you're testing out some new functionality and you want to experiment with
different cursors.

You can do this by setting a cursor value on input state, like this:

```js
{
  "cursor": "today",
}
```

You can do this by triggering a manual run in the platform's
[Job Inspector](/documentation/build/steps/step-editor), or you can pass the
state as input to the CLI:

```bash
$ openfn job.js -s state.json -a http
```

<details>
<summary>Manual cursors on v1</summary>
Platform v1 does not allow input states to be freely defined, so setting a
manual cursor is a little more difficult.

You have to hard-code the manual cursor into the run so that the state cursor is
ignored:

```js
cursor('2024-03-12');
```

This line should be commented out in production runs.

Alternatively, you can use the defaultValue option. This will work so long you
run without any initial state:

```js
cursor(state => state.cursor, { defaultValue: '2024-03-12' });
```

</details>

### Cursor Options

The second argument to `cursor()` is an options object. You can use this to set
the `defaultValue` or the `key` the cursor should use (defaults to `cursor`)

```js
cursor(state => state.cursor, { defaultValue: '2024-03-12', key: 'page' });
```

### Formatting the value

If you're using a service which doesn't use standard date formats, or you wish
to map a number of input formats into a consistent standard, you can use the
`format` option.

`format` takes a function which accepts the current cursor value as an argument,
and returns a formatted or updated value. This is called just before the cursor
is assigned to state.

For example, to use a Javascript Date as your cursor:

```js
cursor('today', { format: c => new Date(c) });
```

The formatter will run after any natural-language processing, so you can
intercept and convert the value to whatever you need.

You can combine this with
[`dateFns.format`](https://date-fns.org/v3.6.0/docs/format) to use a custom
timestamp:

```js
cursor('today', { format: c => dateFns.format(new Date(c), 'dd/mm/yyyy') });
```

You can add as much logic as you wish to your formatter - it's just a regular
Javascript function

```js
cursor('today', {
  format: c => {
    if (typeof c === 'number') {
      return { page: c, count: 20 };
    }
    return c;
  },
});
```
