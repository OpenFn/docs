---
title: The CLI (v2, beta)
sidebar_label: CLI (v2, beta)
slug: /cli
---

:::info What is this tutorial?

This tutorial provides a _hands-on_ way to learn about the new OpenFn CLI. By
following the prompts and "challenges", a developer with a bit of Javascript
experience should be able to write, run, and debug complex, multi-step jobs with
OpenFn, using nothing but a text editor and their terminal.

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

:::caution

CLI v0.0.22 has a know incompatibility with Node 19. It's being addressed, but
please use _only_ **Node 18** if you're on CLI v0.0.22.

:::

3. Install [git](https://git-scm.com/)
4. Have a basic understanding of OpenFn—check out jobs and adaptors, at least,
   in the [OpenFn Concepts](getting-started/terminology) of this site.
5. Install the OpenFn CLI with `npm install -g @openfn/cli`

## Walkthrough & Challenges

### 1. Getting started with the CLI

@openfn/cli is a new devtools CLI for running openfn jobs. To get started, Make
sure everything works by running the built-in test job:

```
openfn test
```

You should see the output:

```sh
[CLI] ⚠ No state detected: pass -S <number> to provide some state
[CLI] ✔ Compiled job from const fn = () => state => state \*
2; fn() [R/T] ✔ Operation 1 complete in 0ms
[CLI] ✔ Result: 42
```

#### Tasks:

1.  Create a file called **hello.js** and write the following code

    ```
    fn((state) => { console.log("Hello World!"); return state; });
    ```

2.  Run the job using the cli

    ```
    // Using the short-form name of adaptor
    openfn hello.js -ia http

    ```

    ```
    // Using the long-form name of adaptor
    openfn hello.js -ia @openfn/language-http

    ```

    ```
    // Understanding CLI arguments
    -i and -a -i, --autoinstall Auto-install the language adaptor,
    -a, --adaptors, --adaptor A language adaptor to use for the job,
    Short-form names are allowed. You can also include an explicit path to
    a local adaptor build. Eg: -a http=/home/openfn/adaptors/packages/http
    ```

#### **Challenge:**

Write a job that prints your name

1.  Modify **hello.js** to print your name
2.  Re-run the job by running `openfn hello.js -a http`
3.  Expected output should look like this

    ```
    [CLI] ⚠ Error loading state from ./state.json
    [CLI] ⚠ [Error: ENOENT: no
    such file or directory, open './state.json'] { errno: -2, code: 'ENOENT',
    syscall: 'open', path: './state.json' }
    [CLI] ⚠ Using default state { data: {}, configuration: {} }
    [CLI] ✔ Compiled job from hello.js
    [JOB] ℹ My name is {YourName}
    [R/T] ✔ Operation 1 complete in 0ms
    [CLI] ✔ Writing output to ./output.json [CLI] ✔ Done in 366ms! ✨
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

#### Tasks:

1. Create a file called **getPosts.js** and write the following code

   ```jsx
   get('https://jsonplaceholder.typicode.com/posts');
   fn(state => {
     console.log(state.data[1]);
     return state;
   });
   ```

2. Run the job by running `openfn getPosts.js -a http`
3. See expected output

   ```
   [CLI] ⚠ Error loading state from ./state.json
   [CLI] ⚠ [Error: ENOENT: no such file or directory, open './state.json'] { errno: -2, code: 'ENOENT', syscall:
   'open', path: './state.json' }
   [CLI] ⚠ Using default state { data: {}, configuration: {} }
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

1.  Create file called getUsers.js and write your operation to fetch the user
2.  Run the job using the cli. openfn getUser.js -a http
3.  Expected output

```
[CLI] ⚠ Error loading state from ./state.json
[CLI] ⚠ [Error: ENOENT: no such file or directory, open './state.json'] { errno: -2, code: 'ENOENT', syscall:
'open', path: './state.json' }
[CLI] ⚠ Using default state { data: {}, configuration: {} }
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
    // This is where we put credentials which are used to authorize connection to source/destination systems
  },
  "data": {
    // This is where the data from our source system will wind up
  }
}
```

Using CLI, **state.json** will be loaded automatically from the current directory

Or you can specify the path to the state file by passing the option -s,
--state-path

You can use this command to load the state automatically

```
openfn foo/job.js -a http
```

Or you can specify the path of the state.json file` `

```
openfn foo/job.js -a http -s foo/state.json
```

Expected output

```
[CLI] ✔ Loaded state from foo/state.json
[CLI] ✔ Compiled job from foo/job.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 876ms
[R/T] ✔ Operation 2 complete in 0ms
[CLI] ✔ Writing output to foo/output.json
[CLI] ✔ Done in 1.222s! ✨
```

How can we use state ?

Each adaptor has a configuration schema that you need to use in your state.json.
Here is an example of how you can setup your state configurations for **http
adaptor** (Learn more
[docs.openfn.org/adaptors/packages/http-readme](/adaptors/packages/http-readme))

```json
{
  "username": "<name@email>",
  "password": "<supersecret>",
  "baseUrl": "https://jsonplaceholder.typicode.com"
}
```

#### Tasks:

Update your **state.json** to be like this 

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

##### Update your job (getPosts.js) to be like this

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

> Expected output

```
[CLI] ✔ Loaded state from ./state.json
[CLI] ✔ Compiled job from getPosts.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 460ms
[JOB] ℹ {
  userId: 1,
  id: 2,
  title: 'qui est esse',
  body: 'est rerum tempore vitae\n' +
    'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' +
    'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' +
    'qui aperiam non debitis possimus qui neque nisi nulla'
}
[R/T] ✔ Operation 2 complete in 12ms
[CLI] ✔ Writing output to output.json
[CLI] ✔ Done in 946ms! ✨
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
by user id.

##### Example:

```jsx title="getPosts.js"
// Get all posts
get('posts');

// Group posts by user
fn(state => {
  const posts = state.data;

  //   Group posts by userId
  //   r is an accumulator, a is a currentValue
  const groupPostsByUserId = posts.reduce((r, a) => {
    r[a.userId] = r[a.userId] || [];
    r[a.userId].push(a);
    return r;
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

##### In summary

1. Operation 1: Will get all posts and return response will be in state.data

2. Operation2: Will group returned posts by userId

3. Operation3: Will log posts with userId 1

> Expected output

```
[CLI] ✔ Loaded state from foo/state.json
[CLI] ✔ Compiled job from foo/tmp.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 825ms
[R/T] ✔ Operation 2 complete in 0ms
[JOB] ℹ Post with userId 1 [
 //All of posts for userId 1
]
[R/T] ✔ Operation 3 complete in 12ms
[CLI] ✔ Writing output to foo/output.json
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

1. When you want to inspect the content of state in between operations, this
   snippet might be useful.
   1. firstOperation(...);
   2. fn(state => { console.log(state); return state; });
   3. secondOperation(...);

:::warning Important

Note that `console.log(state)` will display the whole state, but also
configuration elements **(username, and password)**. Remove this log whenever
you're done debugging to avoid accidentally exposing sensitive information when
the job is successful deployed on production

:::

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

> Expected output

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

> Expected output

```
[CLI] ✔ Loaded state from ./state.json
[CLI] ✔ Compiled job from debug.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 722ms
[JOB] ℹ [Function (anonymous)]
[R/T] ✔ Operation 2 complete in 1ms
[CLI] ✔ Writing output to ./output.json
[CLI] ✔ Done in 1.102s!Example: ✨
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

  //   Group posts by userId
  //   r is an accumulator, a is a currentValue
  const groupPostsByUserId = posts.reduce((r, a) => {
    r[a.userId] = r[a.userId] || [];
    r[a.userId].push(a);
    return r;
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

> Expected output

```
[CLI] ✔ Loaded state from ./state.json
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
> file) For example `openfn execute foo/job.js ` Reads foo/job.js, looks for
> state and output in foo

```
-i, --autoinstall Auto-install the language adaptor
-a, --adaptors, --adaptor A language adaptor to use for the job
```

If an adaptor is already installed by auto install, you can use the command
without the `-i` options. i.e `openfn foo/job.js -a http`

### Change log level

You can pass `-l info` or `--log info` to get more feedback about what's
happening, or `--log debug` for more details than you could ever use. Below is
the list of different log levels

```
openfn foo/job.js -a http -l none
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

### Strict Mode

By default CLI will return only the `data` key inside the resulting state after
a successful run. To Allow properties other than data to be returned in you need
to use strict mode.

```sh
openfn foo/job.js -a http --no-strict-output
```

Learn more about CLI
[github.com/OpenFn/kit/](https://github.com/OpenFn/kit/tree/main/packages/cli)
