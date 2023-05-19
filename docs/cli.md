---
title: The CLI
sidebar_label: CLI
slug: /cli
---

:::info What is this tutorial?

- It's a _hands-on_ way to learn about the new OpenFn CLI. By following the
  prompts and "challenges", a developer with a bit of Javascript experience
  should be able to write, run, and debug complex, multi-step jobs with OpenFn,
  using nothing but a text editor and their terminal.
- The estimated time to finish this developer challenge is 1 to 2 hours
  (depending on your familiarity with the underlying concepts and tooling)
- If you are stuck and need help, please post in
  [community.openfn.org](https://community.openfn.org/t/about-the-job-writing-category/11/1)

:::

## Intro to the OpenFn CLI

The [@openfn/cli](https://github.com/OpenFn/kit/tree/main/packages/cli) is a
command line interface for running OpenFn workflows locally. It enables
developers to run, build, and test steps in an OpenFn workflow.

This CLI replaces [@openfn/devtools](https://github.com/OpenFn/devtools) and
provides a new suite of features and improvements, including:

- a new runtime and compiler for executing and creating runnable OpenFn jobs,
- customizable logging output,
- automatic installation of language adaptors,
- and support for the adaptors monorepo
  ([@openfn/adaptors](https://github.com/OpenFn/adaptors)) where all OpenFn
  adaptor source code and documentation lives.

These features are designed to make it easier and more convenient for developers
to use and understand OpenFn.

:::caution Looking for a way to execute jobs from OpenFn v1 locally? Use Core!

If you're looking for a way to execute jobs running on the OpenFn v1 platform,
please see the documentation for **[@openfn/core](/documentation/core)** and
[Devtools](/documentation/devtools/home).

:::

## Prerequisites

1. Ensure you have a code editor installed on your machine (e.g.
   [VS Code](https://code.visualstudio.com/),
   [Sublime](https://www.sublimetext.com/))

2. Install NodeJs **v18 is the minimum version required**

   - To install a specific version of Node.js (in this case, version 18) on
     Linux, Windows, or macOS, you can use a version manager such as nvm (Node
     Version Manager) or any multiple runtime version manager eg:
     [asdf](https://github.com/asdf-vm/asdf). These tools allow you to install
     and switch between multiple versions of Node.js on the same machine. See
     below for instructions for different operating systems.
   - Read this article to learn how to install NodeJs in your machine
     [kinsta.com/blog/how-to-install-node-js/](https://kinsta.com/blog/how-to-install-node-js/)

3. Have a basic understanding of OpenFn—check out jobs and adaptors, at least,
   in the [OpenFn Concepts](getting-started/terminology) of this site.
4. Install the OpenFn CLI with `npm install -g @openfn/cli`

## Walkthrough & Challenges

### 1. Getting started with the CLI

Let's start by running a simple command with the CLI. Type the following into
your terminal:

```
openfn test
```

The word `openfn` will invoke the CLI. The word `test` will invoke the test
command.

<details>
  <summary>You should see some output like this:</summary>

```sh
[CLI] ℹ Versions:
        ▸ node.js     18.12.1
        ▸ cli         0.0.39
        ▸ runtime     0.0.24
        ▸ compiler    0.0.32
[CLI] ℹ Running test job...
[CLI] ℹ Workflow object:
[CLI] ℹ {
  "start": "start",
  "jobs": [
    {
      "id": "start",
      "data": {
        "defaultAnswer": 42
      },
      "expression": "const fn = () => (state) => { console.log('Starting computer...'); return state; }; fn()",
      "next": {
        "calculate": "!state.error"
      }
    },
    {
      "id": "calculate",
      "expression": "const fn = () => (state) => { console.log('Calculating to life, the universe, and everything..'); return state }; fn()",
      "next": {
        "result": true
      }
    },
    {
      "id": "result",
      "expression": "const fn = () => (state) => ({ data: { answer: state.data.answer || state.data.defaultAnswer } }); fn()"
    }
  ]
}

[CLI] ✔ Compilation complete
[R/T] ♦ Starting job start
[JOB] ℹ Starting computer...
[R/T] ℹ Operation 1 complete in 0ms
[R/T] ✔ Completed job start in 1ms
[R/T] ♦ Starting job calculate
[JOB] ℹ Calculating to life, the universe, and everything..
[R/T] ℹ Operation 1 complete in 0ms
[R/T] ✔ Completed job calculate in 1ms
[R/T] ♦ Starting job result
[R/T] ℹ Operation 1 complete in 0ms
[R/T] ✔ Completed job result in 0ms
[CLI] ✔ Result: 42

```

</details>

What we've just done is executed a JavaScript expression, which we call a _job_.
The output prefixed with `[JOB]` comes directly from `console.log` statements in
our job code. All other output is the CLI trying to tell us what it is doing.

<details>
<summary>What is a job?</summary>
A job Javascript code which follows a particular set of conventions. Typically a
job has one or more <i>operations</i> which perform a particular task (like
pulling information from a database, creating a record, etc.) and return state
for the next operation to use.

The test job we just ran looks like this:

```js
const fn = () => state => {
  console.log(
    'Calculating the answer to life, the universe, and everything...'
  );
  return state * 2;
};
export default [fn()];
```

You can see this (and a lot more detail) by running the test command with
debug-level logging:

```
openfn test --log debug
```

</details>

#### Tasks:

:::info To get started with @openfn/cli

1. Create a new folder for the repository you'll be working on by running the
   following command: `mkdir devchallenge && cd devchallenge`

2. While you can keep your job scripts anywhere, it's a good practice to store
   `state.json` and `output.json` in a `tmp` folder. To do this, create a new
   directory called `tmp` within your `devchallenge` folder: `mkdir tmp`

3. Since `state.json` and `output.json` may contain sensitive configuration
   information and project data, it's important to never upload them to Github.
   To ensure that Github ignores these files, add the `tmp` directory to your
   `.gitignore` file: `echo "tmp" >> .gitignore`
4. (Optional) Use the `tree` command to check that your directory structure
   looks correct. Running `tree -a` in your `devchallenge` folder should display
   a structure like this:
   ```
    devchallenge
    ├── .gitignore
    └── tmp
        ├── state.json
        └── output.json
   ```

:::

1.  Create a file called `hello.js` and write the following code.

    ```js
    console.log('Hello World!');
    ```

    <details>
    <summary>What is console.log?</summary>
    <code>console.log</code> is a core JavaScript language function which lets
    us send messages to the terminal window.
    </details>

1.  Run the job using the CLI

    ```sh
    openfn hello.js -o tmp/output.json
    ```

    <details>
    <summary>View expected output</summary>

    ```
    [CLI] ⚠ WARNING: No adaptor provided!
    [CLI] ⚠ This job will probably fail. Pass an adaptor with the -a flag, eg:
              openfn job.js -a common
    [CLI] ✔ Compiled from helo.js
    [R/T] ♦ Starting job job-1
    [JOB] ℹ Hello World!
    [R/T] ✔ Completed job job-1 in 1ms
    [CLI] ✔ State written to tmp/output.json
    [CLI] ✔ Finished in 17ms ✨

    ```

    </details>

Note that our `console.log` statement was printed as `[JOB] Hello world!`. Using
the console like this is helpful for debugging and/or understanding what's
happening inside our jobs.

#### 🏆 Challenge: Write a job that prints your name

1.  Modify `hello.js` to print your name.
2.  Re-run the job by running `openfn hello.js -a common -o tmp/output.json`.
3.  Validate that you receive the logs below:

    ```
    [CLI] ✔ Compiled job from hello.js
    [JOB] ℹ My name is { YourName }
    [R/T] ✔ Operation 1 complete in 0ms
    [CLI] ✔ Writing output to tmp/output.json
    [CLI] ✔ Done in 366ms! ✨
    ```

### 2. Using adaptor helper functions

Adaptors are Javascript or Typescript modules that provide OpenFn users with a
set of helper functions for simplifying communication with a specific external
system. Learn more about adaptors here: [docs.openfn.org/adaptors](/adaptors/)

#### Basic usage:

Let’s use
[@openfn/language-http](https://www.npmjs.com/package/@openfn/language-http)
adaptor to fetch a list of forms from
[https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

:::info Understanding CLI arguments

Use `-a` to specify the adaptor; use `-i` to auto-install the necessary adaptor

Run `openfn help` to see the full list of CLI arguments.

:::

#### Tasks:

1. Create a file called `getPosts.js` and write the following code

   ```jsx title=getPosts.js
   get('https://jsonplaceholder.typicode.com/posts');
   fn(state => {
     console.log(state.data[0]);
     return state;
   });
   ```

2. Run the job by running

```sh
openfn getPosts.js -i -a http -o tmp/output.json
```

Since it is our first time using the `http` adaptor, we are installing the
adaptor using `-i` argument

<details>
  <summary>3. See expected CLI logs</summary>

```
  [CLI] ✔ Installing packages...
  [CLI] ✔ Installed @openfn/language-http@4.2.8
  [CLI] ✔ Installation complete in 14.555s
  [CLI] ✔ Compiled from getPosts.js
  [R/T] ♦ Starting job job-1
  GET request succeeded with 200 ✓
  [JOB] ℹ {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\n' +
      'suscipit recusandae consequuntur expedita et cum\n' +
      'reprehenderit molestiae ut ut quas totam\n' +
      'nostrum rerum est autem sunt rem eveniet architecto'
  }
  [R/T] ✔ Completed job job-1 in 872ms
  [CLI] ✔ State written to tmp/output.json
  [CLI] ✔ Finished in 15.518s ✨

```

</details>

#### 🏆 Challenge: Get and inspect data via HTTP

Using the
[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
API, get a list of users and print the first user object.

1.  Create file called `getUsers.js` and write your operation to fetch the user.
2.  Run the job using the OpenFn/cli
    `openfn getUsers.js -a http -o tmp/output.json`.
3.  Validate that you receive this expected CLI logs:

```sh
openfn getUsers.js -a http -o tmp/output.json
```

<details>
<summary>See expected CLI logs:</summary>

```
[CLI] ✔ Compiled job from hello.js GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 581ms
[JOB] ℹ {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: { lat: '-37.3159', lng: '81.1496' }
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
  }
}
[R/T] ✔ Operation 2 complete in 2ms
[CLI] ✔ Writing output to tmp/output.json [CLI] ✔ Done in 950ms! ✨
```

</details>

### 3. Understanding `state`

If a job expression is a set of instructions for a chef (a recipe?) then the
initial state is all of the ingredients they need tied up in a perfect little
bundle. See
["It all starts with state​"](/articles/2021/07/05/wrapping-my-head-around-jobs/#it-all-starts-with-state)
in the knowledge base for extra context.

It usually looks something like this

```json
{
  "configuration": {
    "hostUrl": "https://moh.kenya.gov.ke/dhis2",
    "username": "someone",
    "password": "something-secret"
  },
  "data": {
    "type": "registration",
    "patient": {
      "age": 24,
      "gender": "M",
      "nationalId": "321cs7"
    }
  }
}
```

#### `state.configuration`

This key is where we put credentials which are used to authorize connections to
any authenticated system that the job will interact with. (Note that this part
of `state` is usually overwritten at runtime with a real "credential" when using
the OpenFn platform, rather than the CLI.)

:::warning Important

Note that `console.log(state)` will display the whole state, including
`state.configuration` elements such as **username and password**. Remove this
log whenever you're done debugging to avoid accidentally exposing sensitive
information when the job is successfully deployed on production.

The OpenFn platform has built in protections to "scrub" state from the logs, but
when you're using the CLI directly you're on your own!

:::

#### `state.data`

This key is where we put data related to a specific job run. On the platform,
it's the work-order-specific data from a triggering HTTP request or some bit of
information that's passed from one job to another.

Using CLI, `state.json` will be loaded automatically from the current directory

Or you can specify the path to the state file by passing the option -s,
--state-path

Specify a path to your `state.json` file with this command:

```sh
openfn hello.js -a http -s tmp/state.json -o tmp/output.json
```

Expected CLI logs

```
[CLI] ✔ Compiled job from hello.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 876ms
[R/T] ✔ Operation 2 complete in 0ms
[CLI] ✔ Writing output to tmp/output.json
[CLI] ✔ Done in 1.222s! ✨
```

#### How can we use state?

Each adaptor has a configuration schema that's recommended for use in your
`state.json`. [Here is an example](/adaptors/packages/http-configuration-schema)
of how to set up `state.configuration` for `language-http`.

```json
{
  "username": "name@email",
  "password": "supersecret",
  "baseUrl": "https://jsonplaceholder.typicode.com"
}
```

#### Tasks:

1. Update your `state.json` to look like this:

   ```json title=state.json
   {
     "configuration": {
       "baseUrl": "https://jsonplaceholder.typicode.com"
     }
   }
   ```

   Since we have update our configuration in our `state.json` we can now use
   `get()` helper function without the need to specify the **baseUrl**—i.e
   `get('posts')`

2. Update your `getPosts.js` job to look like this:

   ```js title="getPosts.js"
   // Get all posts
   get('posts');

   fn(state => {
     const posts = state.data;
     console.log(posts[0]);
     return state;
   });
   ```

3. Now run the job using the following command

   ```sh
   openfn getPosts.js -a http -s tmp/state.json -o tmp/output.json
   ```

   And validate that you see the expected CLI logs:

   ```sh
   [CLI] ✔ Compiled job from getPosts.js
   GET request succeeded with 200 ✓
   [R/T] ✔ Operation 1 complete in 120ms
   [JOB] ℹ {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\n' +
      'suscipit recusandae consequuntur expedita et cum\n' +
      'reprehenderit molestiae ut ut quas totam\n' +
      'nostrum rerum est autem sunt rem eveniet architecto'
   }
   [R/T] ✔ Operation 2 complete in 0ms
   [CLI] ✔ Writing output to tmp/output.json
   [CLI] ✔ Done in 470ms! ✨
   ```

#### 🏆 Challenge: Fetch Covid-19 metadata

1. Using the [disease.sh API](https://disease.sh/), write an operation that
   returns all covid-19 metadata.

:::tip

`https://disease.sh/v3/covid-19/` as your **baseUrl** in `state.configuration`

:::

2. Validate your output: there are a lot of ways you might choose to format or
   display this data. Share your results with your administrator for feedback.

### 4. Additional arguments and commands

#### 🏆 Challenge: Practice CLI arguments and commands

Perform these tasks and submit answers to the discussion questions to your
administrator for feedback.

1. Compile a openfn job (**hello.js**).

   > What's the difference between the job you wrote and the compiled job?

2. Run a job without "strict mode" enabled.

   > What's the difference between the outputs when strict mode is enabled and
   > disabled?

3. Run a job with the log level set to `none`, and then run it again with the
   log level set to `debug`.

   > When is it appropriate to use these different log levels?

### 5. Manipulating data in a sequence of operations

In most cases you need to manipulate, clean, or transform data at some step in
your workflow. For example after we get data from the
`https://jsonplaceholder.typicode.com` registry we might need to group the posts
by user id. The example below shows how we can:

1. get all posts and return them in `state.data`
2. group returned posts by `userId`
3. log posts with userId 1

##### Example:

```js title="getPosts.js"
// Get all posts
get('posts');

// Group posts by user id
fn(state => {
  const posts = state.data;

  // Group posts by userId
  const groupPostsByUserId = posts.reduce((acc, post) => {
    const existingValue = acc[post.userId] || [];
    return { ...acc, [post.userId]: [...existingValue, post] };
  }, {});

  // console.log(groupPostsByUserId);
  return { ...state, groupPostsByUserId };
});

// Log posts where userId = 1
fn(state => {
  const { groupPostsByUserId } = state;
  console.log('Post with userId 1', groupPostsByUserId[1]);
  return state;
});
```

<details>
<summary>What is <code>array.reduce</code>?</summary>
The <code>reduce()</code> method applies a function against an accumulator and
each value of the array (from left-to-right) to reduce it to a single value.

Perhaps the easiest-to-understand case for <code>reduce()</code> is to return
the sum of all the elements in an array:

##### JavaScript Demo: `Array.reduce()`

```
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

```

You can learn more about `array.reduce` from
[this article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

</details>

> Expected CLI logs

```
[CLI] ✔ Compiled job from getPosts.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 825ms
[R/T] ✔ Operation 2 complete in 0ms
[JOB] ℹ Post with userId 1 [
 //All of posts for userId 1
]
[R/T] ✔ Operation 3 complete in 12ms
[CLI] ✔ Writing output to tmp/output.json
[CLI] ✔ Done in 1.239s! ✨
```

#### 🏆 Challenge: extract names & emails

Using
[https://jsonplaceholder.typicode.com/posts/1/comments](https://jsonplaceholder.typicode.com/posts/1/comments)
API fetch comments for post with id 1 and extract name and email from each
comment in that post

1. Get post all comments for post id 1
2. Extract name and email from comments
3. Log the extracted data from comments

Discuss the results with your administrator.

### 6. Debugging errors

When debugging, it’s interesting to use log to have a visual representation of
the content of the manipulated objects (such as state).

When you want to inspect the content of state in between operations, add an
`fn()` block with a `console.log`:

```js
// firstOperation(...);

fn(state => {
  console.log(state);
  return state;
});

// secondOperation(...);
```

##### Create **debug.js** and paste the code below

```jsx title="debug.js"
// Get all posts
get('posts');

// Get post by index helper function
fn(state => {
  // const getPostbyIndex = (index) => dataValue(index)(state);
  console.log(dataValue(1));

  return { ...state };
});
```

##### Run **openfn debug.js -a http**

> Expected CLI logs

```
[CLI] ✘ TypeError: path.match is not a function
    at dataPath (/tmp/openfn/repo/node_modules/@openfn/language-common/dist/index.cjs:258:26)
    at dataValue (/tmp/openfn/repo/node_modules/@openfn/language-common/dist/index.cjs:262:22)
    at getPostbyIndex (vm:module(0):5:37)
    at vm:module(0):18:36
    at /tmp/openfn/repo/node_modules/@openfn/language-common/dist/index.cjs:241:12
    at file:///home/openfn/.asdf/installs/nodejs/18.12.0/lib/node_modules/@openfn/cli/node_modules/@openfn/runtime/dist/index.js:288:26
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/openfn/.asdf/installs/nodejs/18.12.0/lib/node_modules/@openfn/cli/node_modules/@openfn/runtime/dist/index.js:269:18)
    at async executeHandler (file:///home/openfn/.asdf/installs/nodejs/18.12.0/lib/node_modules/@openfn/cli/dist/process/runner.js:388:20)
```

As you can see from our logs that helper function `dataValue` has a TypeError,
To troubleshoot this you can go to the documentation for **dataValue ->
[docs.openfn.org/adaptors/packages/common-docs/#datavaluepath--operation](/adaptors/packages/common-docs/#datavaluepath--operation)
**

According to the docs, dataValue take path which is a string type. But in our
operation we were passing an integer, that’s why we have a _TypeError_. You can
fix the error by passing a string in dataValue i.e `console.log(dataValue(“1”))`

> Expected CLI logs

```
[CLI] ✔ Compiled job from debug.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 722ms
[JOB] ℹ [Function (anonymous)]
[R/T] ✔ Operation 2 complete in 1ms
[CLI] ✔ Writing output to tmp/output.json
[CLI] ✔ Done in 1.102s ✨
```

If you need more information for debugging you can pass -l debug which will give
all information about the run

i.e `openfn debug.js -a http -l debug`

#### 🏆 Challenge: control error messages

Debug what is causing an error on the following line of code and display the
error message

```jsx
// Get post where id is 180
get('posts/180');
```

Discuss the results with your administrator.

### 7. Each and array iteration

We often have to perform the same operation multiple times for items in an
array. Most of the helper functions for data manipulation are inherited from
@openfn/language-common and are available in most of the adaptors.

##### Modify getPosts.js to group posts by user-ID

```js title="getPosts.js"
// Get all posts
get('posts');

// Group posts by user
fn(state => {
  const posts = state.data;

  // Group posts by userId
  const groupPostsByUserId = posts.reduce((acc, post) => {
    const existingValue = acc[post.userId] || [];
    return { ...acc, [post.userId]: [...existingValue, post] };
  }, {});

  // console.log(groupPostsByUserId);
  return { ...state, groupPostsByUserId };
});

// Log posts where userId = 1
fn(state => {
  const { groupPostsByUserId } = state;
  const posts = groupPostsByUserId[1];

  // console.log("Post with userId 1", groupPostsByUserId[1]);
  return { ...state, posts };
});

each('posts[*]', state => {
  console.log('Post', JSON.stringify(state.data, null, 2));
  return state;
});
```

Notice how this code uses the `each` function, a helper function defined in
[language-common](/adaptors/packages/common-docs/#eachdatasource-operation--operation)
but accessed from this job that is using language-http. Most adaptors import and
export many functions from `language-common`.

##### Run **openfn getPosts.js -a http -o tmp/output.json**

> Expected CLI logs

```sh
[CLI] ✔ Compiled job from getPosts.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 730ms
[R/T] ✔ Operation 2 complete in 0ms
[R/T] ✔ Operation 3 complete in 0ms
[JOB] ℹ Posts [
// Posts
]
[R/T] ✔ Operation 4 complete in 10ms
[CLI] ✔ Writing output to tmp/output.json
[CLI] ✔ Done in 1.091s! ✨
```

#### 🏆 Challenge: Reduce, filter, and map

Using Javascript globals i.e `Array.reduce`, `Array.filter` or `Array.map`,
build function that will get posts by user id.

1. Create a file called job1.js
2. Add the 1st operation which is get all posts
3. Add 2nd operation which has a function that filter posts by id
4. Use the function from 2nd operation to get all post for user id 1

Discuss the results with your administrator.

### 8. Using Execution Plan

Execution plan is a powerful feature of `@openfn/cli` that allows you to define
a list of jobs and rules for executing them. You can use an Execution Plan to
orchestrate the flow of data between systems, and to handle errors and retries
in a structured and automated way.

##### Workflow Plan Structure

A workflow plan is a JSON object that consists of the following properties:

- `start` (required): The ID of the job that should be executed first.
- `jobs` (required): An array of job objects, each of which represents a
  specific task to be executed.
  - `id` (required): A unique ID that identifies the job.
  - `configuration`: (optional) Specifies the configuration file associated with
    the job
  - `data` (optional): An object that contains any data that should be passed to
    the job.
  - `adaptor` (required): Specifies the adaptor used for the job
  - `expression` (required): Specifies the JavaScript file associated with the
    job. It can also be a string that contains a JavaScript function to be
    executed as the job.
  - `next` (optional): An object that specifies the next job to be executed
    based on the output of the current job. The object should have one or more
    key-value pairs, where the key is the ID of the next job, and the value is a
    boolean expression that determines whether the next job should be executed.

###### Example of workflow Execution plan

<details>
<summary>Here's an example of a simple workflow plan that consists of three jobs:</summary>

```json title="workflow.json"
{
  "start": "start",
  "jobs": [
    {
      "id": "start",
      "data": {
        "name": "Foo Bar"
      },
      "adaptor": "common",
      "expression": "hello.js",
      "next": {
        "getUsers": "!state.error"
      }
    },
    {
      "id": "getUsers",
      "adaptor": "http",
      "expression": "getUsers.js",
      "configuration": "tmp/http-creds.json",
      "next": {
        "getPosts": true
      }
    },
    {
      "id": "getPosts",
      "adaptor": "http",
      "configuration": "tmp/http-creds.json",
      "expression": "getPosts.js"
    }
  ]
}
```

</details>

To execute the workflow execution plan we run `openfn [path/to/workflow.json]`.

<details>
<summary>
For example if you created <code>workflow.json</code> in root of your project directory
</summary>

```
    devchallenge
    ├── .gitignore
    ├── hello.js
    ├── getUsers.js
    ├── getPosts.js
    ├── workflow.json
    └── tmp
        ├── http-creds.json
        └── output.json
```

</details>

```
openfn workflow.json
```

To execute the workflow execution plan with adaptor autoinstall option

```
openfn workflow.json -i
```

:::danger Important

When working with the `workflow.json` file, it is important to handle sensitive
information, such as credentials and initial input data, in a secure manner. To
ensure the protection of your sensitive data, please follow the guidelines
outlined below:

1. Configuration Key: In the `workflow.json` file, specify a path to a
   gitignored configuration file that will be contain necessary credentials that
   will be used to access the destination system. For example:

   ```
   {
      ...
      "configuration": "tmp/openMRS-credentials.json"
    },
   ```

2. Data Key: Incase you need to path initial data to your job, Specify a path to
   a gitignored data file
   ```
   {
   ...
    "data": "tmp/initial-data.json",
   }
   ```

:::

## CLI Usage - Key Commands

You’ll learn about these commands in the following challenges, but please refer
to this section for the key commands used in working with the CLI.

### Check the version

```
openfn version
```

### Get help

```
openfn help
```

### Run a job

```
openfn path/to/job.js -ia {adaptor-name}
```

Note: You MUST specify which adaptor to use. Pass the `-i` flag to auto-install
that adaptor (it's safe to do this redundantly).

You can find the list of publicly available adaptors [here](/adaptors).

> Path is the job to load the job from (a .js file or a dir containing a job.js
> file) For example `openfn execute hello.js ` Reads hello.js, looks for state
> and output in foo

```
-i, --autoinstall Auto-install the language adaptor
-a, --adaptors, --adaptor A language adaptor to use for the job
```

If an adaptor is already installed by auto install, you can use the command
without the `-i` options. i.e `openfn hello.js -a http`

### Change log level

You can pass `-l info` or `--log info` to get more feedback about what's
happening, or `--log debug` for more details than you could ever use. Below is
the list of different log levels

```
openfn hello.js -a http -l none
```

| log level    | description                                              |
| ------------ | -------------------------------------------------------- |
| `-l none`    | Quiet mode                                               |
| `-l default` | Top level information of what is happening               |
| `-l info`    | Get more feedback on what is happening openfn            |
| `-l debug`   | Get information about runtime, cli, compiler and the job |

### Compilation

The CLI will attempt to compile your job code into normalized Javascript. It
will do a number of things to make your code robust, portable, and easier to
debug from a pure JS perspective.

```
openfn compile [path]
```

Will compile the openfn job and print or save the resulting js.

Learn more about CLI
[github.com/OpenFn/kit/](https://github.com/OpenFn/kit/tree/main/packages/cli)
