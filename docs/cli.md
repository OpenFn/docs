---
title: The CLI (v2, beta)
sidebar_label: CLI (v2, beta)
slug: /cli
---

:::info What is this tutorial?

- This tutorial provides a _hands-on_ way to learn about the new OpenFn CLI. By
  following the prompts and "challenges", a developer with a bit of Javascript
  experience should be able to write, run, and debug complex, multi-step jobs
  with OpenFn, using nothing but a text editor and their terminal.
- The estimated time to finish this developer challenge is 1 to 2 hours
  (depending on your familiarity with the underlying concepts and tooling)
- If you are stuck and need help, please post in
  [community.openfn.org](https://community.openfn.org/t/about-the-job-writing-category/11/1)

:::

## Intro to the OpenFn CLI

The [@openfn/cli](https://github.com/OpenFn/kit/tree/main/packages/cli) is the
command line interface and developer toolkit for running OpenFn jobs locally.
This enables developers to run, build, and test steps in an OpenFn workflow.

This CLI replaces the old [@openfn/devtools](https://github.com/OpenFn/devtools)
and provides a new suite of features and improvements, including:

- a new runtime and compiler for executing and creating runnable OpenFn jobs,
- customizable logging output,
- automatic installation of language adaptors,
- and support for the adaptors monorepo
  ([@openfn/adaptors](https://github.com/OpenFn/adaptors)) where all OpenFn
  adaptor source code and documentation lives.

These features are designed to make it easier and more convenient for developers
to use OpenFn and automate tasks within their workflow.

## Prerequisites

1. Ensure you have a code editor installed on your machine (e.g.
   [VS Code](https://code.visualstudio.com/),
   [Sublime](https://www.sublimetext.com/))

2. Install NodeJs **v18**

   - To install a specific version of Node.js (in this case, version 18) on
     Linux, Windows, or macOS, you can use a version manager such as nvm (Node
     Version Manager) or any multiple runtime version manager eg:
     [asdf](https://github.com/asdf-vm/asdf). These tools allow you to install
     and switch between multiple versions of Node.js on the same machine. See
     below for instructions for different operating systems.
   - Read this article to learn how to install nodejs in your machine
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

You should see some output like this:

```sh
[CLI] ℹ Versions:
         ▸ node.js     16.18.1
         ▸ cli         0.0.29
         ▸ runtime     0.0.19
         ▸ compiler    0.0.25
[CLI] ℹ Running test job...
[CLI] ✔ Compiled job
[JOB] ℹ Calculating the answer to life, the universe, and everything...
[R/T] ✔ Operation 1 complete in 1ms
[CLI] ✔ Result: 42
```

What we've just done is executed some built in JavaScript, which we call a
_job_. The output prefixed with `[JOB]` comes directly from `console.log`
statements in our job code. All other output is the CLI trying to tell us what
it is doing.

<details>
  <summary>What is a job ?</summary>
A job is simply a bunch of Javascript code. Typically a job has one or more statements or <i>operations</i> which performs a particular task, like pulling information from a database.

The test job we just ran looks like this:

```
const fn = () => (state) => {
  console.log(
    "Calculating the answer to life, the universe, and everything..."
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

> Let's create our own job.

1.  Create a file called `hello.js` and write the following code

    ```js
    console.log('Hello World!');
    ```

<details>
  <summary>What is console.log?</summary>
  <code>console.log</code> is a core JavaScript language function which lets us send messages to the terminal window.
</details>
2.  Run the job using the cli.
```
openfn hello.js
```
Note that our console.log statement was printed as `[JOB] Hello world!`. Using the console like this can be a really helpful tool for debugging and understanding what's happening inside our jobs.

#### **Challenge:**

Write a job that prints your name

1.  Modify `hello.js` to print your name.
2.  Re-run the job by running `openfn hello.js -a http`.
3.  Validate that you receive this expected CLI logs:

    ```
    [CLI] ✔ Compiled job from hello.js
    [JOB] ℹ My name is {YourName}
    [R/T] ✔ Operation 1 complete in 0ms
    [CLI] ✔ Writing output to ./output.json
    [CLI] ✔ Done in 366ms! ✨
    ```

### 2. Using adaptors helper functions

Adaptors are Javascript or Typescript module that provides OpenFn users with a
clean set of helper functions that help communicate with a specific external
system. Learn more about the adaptors -> [docs.openfn.org/adaptors](/adaptors/)

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

   ```jsx
   get('https://jsonplaceholder.typicode.com/posts');
   fn(state => {
     console.log(state.data[1]);
     return state;
   });
   ```

2. Run the job by running `openfn getPosts.js -a http`
3. See expected CLI logs

   ```
   [CLI] ✔ Compiled job from hello.js GET request succeeded with 200 ✓
   [R/T] ✔ Operation 1 complete in 1.072s
   [JOB] ℹ { userId: 1, id: 2,
   title: 'qui est esse', body: 'est rerum tempore vitae\n' + 'sequi sint nihil
   reprehenderit dolor beatae ea dolores neque\n' + 'fugiat blanditiis voluptate
   porro vel nihil molestiae ut reiciendis\n' + 'qui aperiam non debitis possimus
   qui neque nisi nulla' }
   [R/T] ✔ Operation 2 complete in 0ms
   [CLI] ✔ Writing output to ./output.json
   [CLI] ✔ Done in 1.42s! ✨
   ```

#### Challenge:

Using the
[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
get the list of users and print the object of the first user

1.  Create file called `getUsers.js` and write your operation to fetch the user.
2.  Run the job using the cli. `openfn getUsers.js -a http`.
3.  Validate that you receive this expected CLI logs:

```
[CLI] ✔ Compiled job from hello.js GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 581ms
[JOB] ℹ {user details}
[R/T] ✔ Operation 2 complete in 2ms
[CLI] ✔ Writing output to ./output.json [CLI] ✔ Done in 950ms! ✨
```

### 3. Understanding `state`

It
[all starts with state​](/articles/2021/07/05/wrapping-my-head-around-jobs/#it-all-starts-with-state).
If a job is a set of instructions for a chef (a recipe?) then the initial state
is all of the ingredients they need tied up in a perfect little bundle. It
usually looks something like this

```json
{
  "configuration": {
    "hostUrl": "https://moh.kenya.gov.ke/dhis2",
    "username": "taylor",
    "password": "very-secret"
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

This is where we put credentials which are used to authorize connection to
source/destination systems.

#### `state.data`

This is where the data from our source system will wind up.

:::warning Important

Note that `console.log(state)` will display the whole state, but also
configuration elements **(username, and password)**. Remove this log whenever
you're done debugging to avoid accidentally exposing sensitive information when
the job is successful deployed on production

:::

Using CLI, `state.json` will be loaded automatically from the current directory

Or you can specify the path to the state file by passing the option -s,
--state-path

You can use this command to load the state automatically:

```
openfn hello.js -a http
```

Or you can specify the path of the `state.json` file:

```
openfn hello.js -a http -s tmp/state.json
```

Expected CLI logs

```
[CLI] ✔ Compiled job from hello.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 876ms
[R/T] ✔ Operation 2 complete in 0ms
[CLI] ✔ Writing output to ./output.json
[CLI] ✔ Done in 1.222s! ✨
```

#### How can we use state?

Each adaptor has a configuration schema that's recommended for use in your
`state.json`.
[Here is an example](/adaptors/packages/dhis2-configuration-schema) of how to
set up `state.configuration` for `language-http`.

```json
{
  "username": "<name@email>",
  "password": "<supersecret>",
  "baseUrl": "https://jsonplaceholder.typicode.com"
}
```

#### Tasks:

Update your `state.json` to look like this:

```json
{
  "data": {},
  "configuration": {
    "baseUrl": "https://jsonplaceholder.typicode.com"
  }
}
```

Since we have update our configuration in our state.json we can now use `get()`
helper function without the need to specify the **baseUrl**

i.e `get(“posts”)`

##### Update your job (`getPosts.js`) to look like this:

```jsx title="getPosts.js"
// Get all posts
get('posts');

fn(state => {
  const posts = state.data;
  console.log(posts[1]);
  return state;
});
```

##### Now run the job using the following command

```
openfn getPosts.js -a http
```

> Expected CLI logs

```
[CLI] ✔ Compiled job from job.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 120ms
[JOB] ℹ {"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"}
[R/T] ✔ Operation 2 complete in 0ms
[CLI] ✔ Writing output to ./output.json
[CLI] ✔ Done in 470ms! ✨
```

#### Challenge:

Using [disease.sh API](https://disease.sh/), write an operation that return all
covid-19 metadata, using this

[https://disease.sh/v3/covid-19/](https://disease.sh/v3/covid-19/) as you
**baseUrl**

### 4. Additional arguments and commands

#### Challenge:

1. Compile a openfn job (**hello.js**).

   > What's the difference between the job you wrote and the compiled job?

2. Run a job without "strict mode" enabled.

   > What's the difference between the outputs when strict mode is enabled and
   > disabled?

3. Run a job with the log level set to `none`, and then run it again with the
   log level set to `debug`.

   > When is it appropriate to use these different log levels?

### 5. Manipulating data in a sequence of operations

In most cases you need to write a sequence of operations for data manipulation,
cleaning, or transformation. For example after we get data from the
`https://jsonplaceholder.typicode.com` registry we might need to group the posts
by user id. The example below shows how we can

1. get all posts and return response in state.data
2. group returned posts by userId
3. log posts with userId 1

##### Example:

```jsx title="getPosts.js"
// Get all posts
get("posts");

// 
s by user
fn((state) => {
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
fn((state) => {
  const { groupPostsByUserId } = state;
  console.log("Post with userId 1", groupPostsByUserId[1]);
  return state;
});
```

<details>
  <summary>What is <code>array.reduce</code> ?</summary>
  The <code>reduce()</code> method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

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
[CLI] ✔ Writing output to ./output.json
[CLI] ✔ Done in 1.239s! ✨
```

#### Challenge:

Using
[https://jsonplaceholder.typicode.com/posts/1/comments](https://jsonplaceholder.typicode.com/posts/1/comments)
API fetch comments for post with id 1 and extract name and email from each
comment in that post

1. Get post all comments for post id 1
2. Extract name and email from comments
3. Log the extracted data from comments

### 6. Debugging errors

When debugging, it’s interesting to use log to have a visual representation of
the content of the manipulated objects (such as state).

1. When you want to inspect the content of state in between operations, add an
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
operation were passing an integer, that’s why we have a _TypeError_. You can fix
by passing a string in dataValue i.e `console.log(dataValue(“1”))`

> Expected CLI logs

```
[CLI] ✔ Compiled job from debug.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 722ms
[JOB] ℹ [Function (anonymous)]
[R/T] ✔ Operation 2 complete in 1ms
[CLI] ✔ Writing output to ./output.json
[CLI] ✔ Done in 1.102s ✨
```

If you need more information for debugging you can pass -l debug which will give
all information about the run

i.e `openfn debug.js -a http -l debug`

#### Challenge:

Debug what is causing an error on the following line of code and display the
error message

```jsx
// Get post where id is 180
get('posts/180');
```

### 7. Each and array iteration

We often have to perform the same operation multiple times for items in an
array. Most of the helper functions for data manipulation are inherited from
@openfn/language-common and are available in most of the adaptors.

##### Create job.js and add the following codes

```jsx
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

each('posts', state => {
  console.log('Posts', state.data);
});
```

Notice how this code uses the “each” function from common which is a helper
function defined in
[language-common](/adaptors/packages/common-docs/#eachdatasource-operation--operation)
but is accessed in this job that is using language-http

##### Run **openfn job.js -a http**

> Expected CLI logs

```
[CLI] ✔ Compiled job from job.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 730ms
[R/T] ✔ Operation 2 complete in 0ms
[R/T] ✔ Operation 3 complete in 0ms
[JOB] ℹ Posts [
// Posts
]
[R/T] ✔ Operation 4 complete in 10ms
[CLI] ✔ Writing output to output.json
[CLI] ✔ Done in 1.091s! ✨
```

#### Challenge

Using Javascript globals i.e `Array.reduce, Array.filter or Array.map`, build
function that will get posts by user id.

#### Tasks:

1. Create a file called job1.js
2. Add the 1st operation which is get all posts
3. Add 2nd operation which has a function that filter posts by id
4. Use the function from 2nd operation to get all post for user id 1

## CLI Usage - Key Commands

You’ll learn about these commands in the following challenges, but please refer
to this section for the key commands used in working with the CLI.

### Check the version

```
openfn -v
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

Will compile a openfn job and print or save the resulting js

<!--
TODO: @Mtuchi revisit once we have a clear picture of the future of strict-mode
### Strict Mode

By default CLI will return only the `data` key inside the resulting state after
a successful run. To Allow properties other than data to be returned in you need
to use strict mode.

```sh
openfn hello.js -a http --no-strict-output
``` -->

Learn more about CLI
[github.com/OpenFn/kit/](https://github.com/OpenFn/kit/tree/main/packages/cli)
