---
layout: post
title: 'Allow Yourself to Fail'
authors: taylor
tags: [how-to, tips]
featured: false
---

Hi all, this is a very short post with a simple message: design for failure.
Even if you've never heard of
[MSSQL](https://www.microsoft.com/en-us/sql-server) (or
[Azure](https://azure.microsoft.com/en-us/), or Microsoft?), I want to talk for
one moment about the importance of upserts and a funny developer term called
"idempotence."

<!--truncate-->

We just extended our
[language-mssql adaptor](https://github.com/OpenFn/language-mssql) with a custom
function that allows upserts (an `upsert` is when you either insert a new record
or update an existing record based on some identifier). Before, you'd need to
write something tedious like:

```js
sql({
  query: `MERGE my_table AS [Target]
          USING (SELECT '8675309' AS some_unique_id, 'writing_blog_posts' AS skill) AS [Source]
          ON [Target].some_unique_id = [Source].some_unique_id
          WHEN MATCHED THEN
            UPDATE SET [Target].some_unique_id=8675309, [Target].skill='writing_blog_posts'
          WHEN NOT MATCHED THEN
            INSERT (some_unique_id, skill) VALUES ([Source].some_unique_id, [Source].skill);`,
});
```

whereas now you can simply write:

```js
upsert('my_table', 'some_unique_id', {
  some_unique_id: 8675309,
  skill: 'writing blog posts',
});
```

For an operation to be idempotent means that it can be repeated time and time
again without producing an unintended result. This is SUPER important for
creating S3 (**S**ecure, **S**table and **S**calable—more on that
[here](https://openfn.org/trust)) integrations because it provides you with two
"get-out-of-jail-free" cards.

1. If a destination application fails, if a connection times out, or if (for
   whatever reason) you're not sure if the `job` was completed (say... making a
   payment to CHW) then an idempotent operation can be RETRIED without fear of
   making a double-payment.

2. If you make some change to how your `job` works, make some modification to
   one of your destination systems, or just because you want to be _extra extra
   sure_ that all the data in a 9 month survey made it to the national public
   health reporting system, you can _REPROCESS_ every single message that's come
   through OpenFn at the click of a button, without having to worry about
   duplicates.

So... when clients let me mess around with their jobs, I _always_ recommend we
design for idempotence. It's common sense when you're passing messages between
two different systems that are bound to evolve, go offline, have a bad day, etc.

— Taylor

[Sign up](https://openfn.org/register) to set up a project today, absolutely
free.

[Reach out](mailto:admin@openfn.org) for more information.
