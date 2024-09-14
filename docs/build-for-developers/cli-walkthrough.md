---
title: CLI walkthrough
sidebar_label: CLI walkthrough
slug: /cli-walkthrough
---

### 1. Getting started with the CLI

:::info To get started with @openfn/cli

1. Create a new folder for the repository you'll be working on by running the
   following command: `mkdir devchallenge && cd devchallenge`

2. While you can keep your job scripts anywhere, it's a good practice to store
   `state.json` and `output.json` in a `tmp` folder. To do this, create a new
   directory called `tmp` within your `devchallenge` folder: `mkdir tmp`

3. Since `state.json` and `output.json` may contain sensitive configuration
   information and project data, it's important to never upload them to GitHub.
   To ensure that GitHub ignores these files, add the `tmp` directory to your
   `.gitignore` file: `echo "tmp" >> .gitignore`
4. (Optional) Use the `tree` command to check that your directory structure
   looks correct. Running `tree -a` in your `devchallenge` folder should display
   a structure like this:
   ```bash
    devchallenge
    ├── .gitignore
    └── tmp
        ├── state.json
        └── output.json
   ```

:::

1.  Create a job file called `hello.js` and write the following code.

    ```js
    console.log('Hello World!');
    ```

    <details>
      <summary>What is a job?</summary>
      An OpenFn job is Javascript code which follows a particular set of conventions.
      Typically a job has one or more <i>operations</i> which perform a particular
      task (like pulling information from a database, creating a record, etc.) and
      return state for the next operation to use.
    </details>

    <details>
      <summary>What is console.log?</summary>
      <code>console.log</code> is a core JavaScript language function which lets
      us output messages to the terminal window.
    </details>

2.  Run the job using the CLI

    ```bash
    openfn hello.js -o tmp/output.json
    ```

  <details>
    <summary>View expected output</summary>

    ```bash
    [CLI] ⚠ WARNING: No adaptor provided!
    [CLI] ⚠ This job will probably fail. Pass an adaptor with the -a flag, eg:
              openfn job.js -a common
    [CLI] ✔ Compiled from hello.js
    [R/T] ♦ Starting job job-1
    [JOB] ℹ Hello World!
    [R/T] ✔ Completed job job-1 in 1ms
    [CLI] ✔ State written to tmp/output.json
    [CLI] ✔ Finished in 17ms ✨

    ```

  </details>

Note that our `console.log` statement was printed as `[JOB] Hello world!`. Using
the console like this is helpful for debugging and/or understanding what's
happening inside our steps.

### 2. Using adaptor helper functions

Adaptors are Javascript or [Typescript](https://www.typescriptlang.org/) (a
strongly typed super-set of JavaScript) modules that provide OpenFn users with a
set of helper functions for simplifying communication with a specific external
system. Learn more about adaptors here: [docs.openfn.org/adaptors](/adaptors/)

#### Basic usage:

Let’s use
[@openfn/language-http](https://www.npmjs.com/package/@openfn/language-http)
adaptor to fetch a list of forms from
[https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

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

```bash
openfn getPosts.js -i -a http -o tmp/output.json
```

:::info Understanding CLI arguments

Use `-a` to specify the adaptor; use `-i` to auto-install the necessary adaptor

Run `openfn help` to see the full list of CLI arguments.

:::

Since it is our first time using the `http` adaptor, we are installing the
adaptor using `-i` argument

<details>
  <summary>3. Expand to see expected CLI logs</summary>

```bash
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

:::warning Placeholder Data

The data displayed in this CLI logs is generated from a
[JSONPlaceholder](https://jsonplaceholder.typicode.com/) API and does not
represent real-world information. It is intended for testing and development
purposes only.

For accurate testing, consider using real data from your API or service.

:::

### 3. Understanding `state`

If a job expression is a set of instructions for a chef (a recipe?) then the
initial state is all of the ingredients they need tied up in a perfect little
bundle. See
["It all starts with state​"](/articles/2021/07/05/wrapping-my-head-around-jobs/#it-all-starts-with-state)
in the knowledge base for extra context.

<details>
  <summary>It usually looks something like this</summary>

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

</details>

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

```bash
openfn hello.js -a http -s tmp/state.json -o tmp/output.json
```

<details>
  <summary>Expand to see expected CLI logs</summary>

```
[CLI] ✔ Compiled job from hello.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 876ms
[R/T] ✔ Operation 2 complete in 0ms
[CLI] ✔ Writing output to tmp/output.json
[CLI] ✔ Done in 1.222s! ✨
```

</details>

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

 <details>
    <summary>Expand to see state.json</summary>

    ```json title=state.json
    {
      "configuration": {
        "baseUrl": "https://jsonplaceholder.typicode.com"
      }
    }
    ```

   </details>

Since we have update our configuration in our `state.json` we can now use
`get()` helper function without the need to specify the **baseUrl**—i.e
`get('posts')`

2. Update your `getPosts.js` job to look like this:

   <details>
   <summary>Expand to see getPosts.js</summary>

   ```js title="getPosts.js"
   // Get all posts
   get('posts');

   fn(state => {
     const posts = state.data;
     console.log(posts[0]);
     return state;
   });
   ```

   </details>

3. Now run the job using the following command

   ```bash
   openfn getPosts.js -a http -s tmp/state.json -o tmp/output.json
   ```

   <details>
    <summary>And validate that you see the expected CLI logs:</summary>

   ```bash
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

   </details>

### 4. Clean & Transform Data

In most cases you need to manipulate, clean, or transform data at some step in
your workflow. For example after we get data from the
`https://jsonplaceholder.typicode.com` registry we might need to group the posts
by user id. The example below shows how we can:

1. get all posts and return them in `state.data`
2. group returned posts by `userId`
3. log posts with userId `1`

<details>
<summary>Expand to see example:</summary>

```js title="getPosts.js"
// Get all posts
get('posts');

// Group posts by user id
fn(state => {
  const posts = state.data;

  // Group posts by userId
  const groupPostsByUserId = posts.reduce((acc, post) => {
    const existingValue = acc[post.userId] || [];
    return {
      ...acc,
      [post.userId]: [...existingValue, post],
    };
  }, {});

  console.log(groupPostsByUserId);

  return { ...state, groupPostsByUserId };
});

// Log posts where userId = 1
fn(state => {
  const { groupPostsByUserId } = state;
  console.log('Post with userId 1', groupPostsByUserId[1]);
  return state;
});
```

</details>

<details>
<summary>What is <code>array.reduce</code>?</summary>
The <code>reduce()</code> method applies a function against an accumulator and
each value of the array (from left-to-right) to reduce it to a single value.

Perhaps the easiest-to-understand case for <code>reduce()</code> is to return
the sum of all the elements in an array:

##### JavaScript Demo: `Array.reduce()`

```

// 0 + 1 + 2 + 3 + 4
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial); // Expected output: 10

```

You can learn more about `array.reduce` from
[this article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

</details>

>

<details>
  <summary>Expand to see expected CLI logs</summary>

```

[CLI] ✔ Compiled job from getPosts.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 825ms
[R/T] ✔ Operation 2 complete in 0ms
[JOB] ℹ Post with userId 1 [ //All of posts for userId 1 ]
[R/T] ✔ Operation 3 complete in 12ms
[CLI] ✔ Writing output to tmp/output.json
[CLI] ✔ Done in 1.239s! ✨

```

</details>

### 5. Debugging errors

When debugging, it’s interesting and helpful to use console.log to have a visual
representation of the content of the manipulated objects (such as state).

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

<details>

  <summary>Expand to see debug.js</summary>

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

</details>

##### Run **openfn debug.js -a http**

<details>
  <summary>Expected CLI logs</summary>

```bash
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

</details>

As you can see from our logs that helper function `dataValue` has a TypeError,
to troubleshoot this you can go to the documentation for **dataValue ->
[docs.openfn.org/adaptors/packages/common-docs/#datavaluepath--operation](/adaptors/packages/common-docs/#datavaluepath--operation)
**

According to the docs, dataValue takes a path as input, which is of the string
type. But in our operation we were passing an integer, that’s why we have a
_TypeError_. You can fix the error by passing a string in dataValue i.e
`console.log(dataValue(“1”))`

<details>
  <summary>Expected CLI logs</summary>

```bash
[CLI] ✔ Compiled job from debug.js
GET request succeeded with 200 ✓
[R/T] ✔ Operation 1 complete in 722ms
[JOB] ℹ [Function (anonymous)]
[R/T] ✔ Operation 2 complete in 1ms
[CLI] ✔ Writing output to tmp/output.json
[CLI] ✔ Done in 1.102s ✨
```

</details>

If you need more information for debugging you can pass `-l debug`. This sets
the log level to _debug_, which logs all information about the run.

i.e `openfn debug.js -a http -l debug`

### 6. Each and array iteration

We often have to perform the same operation multiple times for items in an
array. Most of the helper functions for data manipulation are inherited from
@openfn/language-common and are available in most of the adaptors.

##### Modify getPosts.js to group posts by user-ID

<details>
<summary>Expand to see getPosts.js</summary>

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

</details>

Notice how this code uses the `each` function, a helper function defined in
[language-common](/adaptors/packages/common-docs/#eachdatasource-operation--operation)
but accessed from this job that is using `language-http`. Most adaptors import
many functions from `language-common`.

Run **openfn getPosts.js -a http -s tmp/state.json -o tmp/output.json**

<details>
  <summary>Expand to see expected CLI logs</summary>

```bash
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

</details>

### 7. Running Workflows

Running a workflow allows you to define a list of steps and rules for executing
them. You can use a workflow to orchestrate the flow of data between systems in
a structured and automated way.

For example, if you have two steps in your workflow (GET users from system A &
POST users to system B), you can set up your workflow to run all steps in
sequence from start to finish. This imitates the
[flow trigger patterns](/documentation/build/triggers#flow-triggers) on the
OpenFn platform where a second job should run after the first one succeeds,
using the data returned from the first job.

:::info tl;dr

You won't have to assemble the initial state of the next job, the final state of
the upstream job will automatically be passed down to the downstream job as the
initial state.

:::

##### Workflow

A workflow is the execution plan for running several steps in a sequence. It is
defined as a JSON object that consists of the following properties:

```json
{
  "options": {
    "start": "a" // optionally specify the start node (defaults to steps[0])
  },
  "workflow": {
    "steps": [
      {
        "id": "a",
        "expression": "fn((state) => state)", // code or a path
        "adaptor": "@openfn/language-common@1.75", // specifiy the adaptor to use (version optional)
        "state": {
          "data": {} // optionally pre-populate the data object (this will be overriden by keys in in previous state)
        },
        "configuration": {}, // Use this to pass credentials
        "next": {
          // This object defines which steps to call next
          // All edges returning true will run
          // If there are no next edges, the workflow will end
          "b": true,
          "c": {
            "condition": "!state.error" // Note that this is an expression, not a function
          }
        }
      }
    ]
  }
}
```

###### Example of a workflow

<details>
<summary>Here's an example of a simple workflow that consists of three steps:</summary>

```json title="workflow.json"
{
  "options": {
    "start": "getPatients"
  },
  "workflow": {
    "steps": [
      {
        "id": "getPatients",
        "adaptor": "http",
        "expression": "getPatients.js",
        "configuration": "tmp/http-creds.json",
        "next": {
          "getGlobalOrgUnits": true
        }
      },
      {
        "id": "getGlobalOrgUnits",
        "adaptor": "common",
        "expression": "getGlobalOrgUnits.js",
        "next": {
          "createTEIs": true
        }
      },
      {
        "id": "createTEIs",
        "adaptor": "dhis2",
        "expression": "createTEIs.js",
        "configuration": "tmp/dhis2-creds.json"
      }
    ]
  }
}
```

</details>

<details>
  <summary>tmp/http-creds.json</summary>

```json title="tmp/http-creds.json"
{
  "baseUrl": "https://jsonplaceholder.typicode.com"
}
```

</details>

<details>
  <summary>tmp/dhis2-creds.json</summary>

```json title="tmp/dhis2-creds.json"
{
  "hostUrl": "https://play.im.dhis2.org/dev",
  "password": "district",
  "username": "admin"
}
```

</details>

<details>
  <summary>getPatients.js</summary>

```js title="getPatients.js"
// Get users from jsonplaceholder
get('users');

// Prepare new users as new patients
fn(state => {
  const newPatients = state.data;
  return { ...state, newPatients };
});
```

</details>

<details>
  <summary>getGlobalOrgUnits.js</summary>

```js title="getGlobalOrgUnits.js"
// Globals: orgUnits
fn(state => {
  const globalOrgUnits = [
    {
      label: 'Njandama MCHP',
      id: 'g8upMTyEZGZ',
      source: 'Gwenborough',
    },
    {
      label: 'Njandama MCHP',
      id: 'g8upMTyEZGZ',
      source: 'Wisokyburgh',
    },
    {
      label: 'Njandama MCHP',
      id: 'g8upMTyEZGZ',
      source: 'McKenziehaven',
    },
    {
      label: 'Njandama MCHP',
      id: 'g8upMTyEZGZ',
      source: 'South Elvis',
    },
    {
      label: 'Ngelehun CHC',
      id: 'IpHINAT79UW',
      source: 'Roscoeview',
    },
    {
      label: 'Ngelehun CHC',
      id: 'IpHINAT79UW',
      source: 'South Christy',
    },
    {
      label: 'Ngelehun CHC',
      id: 'IpHINAT79UW',
      source: 'Howemouth',
    },
    {
      label: 'Ngelehun CHC',
      id: 'IpHINAT79UW',
      source: 'Aliyaview',
    },
    {
      label: 'Baoma Station CHP',
      id: 'jNb63DIHuwU',
      source: 'Bartholomebury',
    },
    {
      label: 'Baoma Station CHP',
      id: 'jNb63DIHuwU',
      source: 'Lebsackbury',
    },
  ];

  return { ...state, globalOrgUnits };
});
```

</details>

<details>
  <summary>createTEIs.js</summary>

```js title="createTEIs.js"
fn(state => {
  const { newPatients, globalOrgUnits } = state;

  const getOrgUnit = city =>
    globalOrgUnits.find(orgUnit => orgUnit.source === city).id;

  const mappedEntities = newPatients.map(patient => {
    const [firstName = 'Patient', lastName = 'Test'] = (
      patient.name || ''
    ).split(' ');

    const orgUnit = getOrgUnit(patient.address.city);

    const attributes = [
      { attribute: 'w75KJ2mc4zz', value: firstName },
      { attribute: 'zDhUuAYrxNC', value: lastName },
      { attribute: 'cejWyOfXge6', value: 'Male' },
    ];

    return { ...patient, attributes: attributes, orgUnit: orgUnit };
  });

  return { ...state, mappedEntities };
});

each(
  'mappedEntities[*]',
  create('trackedEntityInstances', {
    orgUnit: dataValue('orgUnit'),
    trackedEntityType: 'nEenWmSyUEp',
    attributes: dataValue('attributes'),
  })
);
```

</details>

Run `openfn [path/to/workflow.json]` to execute the workflow.

<details>
<summary>
For example, if you created <code>workflow.json</code> in the root of your
project directory, this would be the project structure:
</summary>

```bash
    devchallenge
    ├── .gitignore
    ├── getPatients.js
    ├── createTEIs.js
    ├── getGlobalOrgUnits.js
    ├── workflow.json
    └── tmp
        ├── http-creds.json
        ├── dhis2-creds.json
        └── output.json
```

</details>

```bash
openfn workflow.json -o tmp/output.json
```

On execution, this workflow will first run the `getPatients.js` job. If is
successful, `getGlobalOrgUnits.js` will run using the final state of
`getPatients.js`. If `getGlobalOrgUnits.js` is successful, `createTEIs.js` will
run using the final state of `getGlobalOrgUnits.js`.

Note that adaptors specified in the `workflow.json` will be auto-installed when
you execute the workflow. To execute the workflow run this command:

```bash
openfn workflow.json -o tmp/output.json
```

On execution, this workflow will first auto-install the adaptors then run the
workflow

:::danger Important

When working with the `workflow.json` file, it is important to handle sensitive
information, such as credentials and initial input data, in a secure manner. To
ensure the protection of your sensitive data, please follow the guidelines
outlined below:

1. Configuration Key: In the `workflow.json` file, specify a path to a git
   ignored configuration file that will contain necessary credentials that will
   be used to access the destination system. For example:

   ```json
   {
      ...
      "configuration": "tmp/openMRS-credentials.json"
    },
   ```

2. Data Key: In case you need to pass initial data to your job, specify a path
   to a gitignored data file
   ```json
   {
   ...
    "state": {
      "data": "tmp/initial-data.json",
    }
   }
   ```

:::
