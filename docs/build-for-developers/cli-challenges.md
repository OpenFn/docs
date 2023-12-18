---
title: CLI Challenges
sidebar_label: CLI Challenges
slug: /cli-challenges
---

#### 🏆 Challenge: Write a job that prints your name

1.  Modify `hello.js` to print your name.
2.  Re-run the job by running `openfn hello.js -a common -o tmp/output.json`.
3.  Validate that you receive the logs below:

```bash
[CLI] ✔ Compiled job from hello.js
[JOB] ℹ My name is { YourName }
[R/T] ✔ Operation 1 complete in 0ms
[CLI] ✔ Writing output to tmp/output.json
[CLI] ✔ Done in 366ms! ✨
```

---

#### 🏆 Challenge: Get and inspect data via HTTP

Using the
[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
API, get a list of users and print the first user object.

1.  Create file called `getUsers.js` and write your operation to fetch the user.
2.  Run the job using the OpenFn/cli
    `openfn getUsers.js -a http -o tmp/output.json`.
3.  Validate that you receive this expected CLI logs:

```bash
openfn getUsers.js -a http -o tmp/output.json
```

<details>
  <summary>Expand to see expected CLI logs</summary>

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

:::warning Placeholder Data

The data displayed in this CLI logs is generated from a
[JSONPlaceholder](https://jsonplaceholder.typicode.com/) API and does not
represent real-world information. It is intended for testing and development
purposes only.

For accurate testing, consider using real data from your API or service.

:::

---

#### 🏆 Challenge: Fetch Covid-19 metadata

1. Using the [disease.sh API](https://disease.sh/), write an operation that
   returns all covid-19 metadata.

:::tip

`https://disease.sh/v3/covid-19/` as your **baseUrl** in `state.configuration`

:::

2. Validate your output: there are a lot of ways you might choose to format or
   display this data. Share your results with your administrator for feedback.

---

#### 🏆 Challenge: Practice CLI arguments and commands

Perform these tasks and submit answers to the discussion questions to your
administrator for feedback.

1. Compile a openfn job (**hello.js**).

   > What's the difference between the job you wrote and the compiled job?

2. Run a job with the log level set to `none`, and then run it again with the
   log level set to `debug`.

   > When is it appropriate to use these different log levels?

---

#### 🏆 Challenge: extract names & emails

Using
[https://jsonplaceholder.typicode.com/posts/1/comments](https://jsonplaceholder.typicode.com/posts/1/comments)
API fetch comments for post with id 1 and extract name and email from each
comment in that post

1. Get post all comments for post id 1
2. Extract name and email from comments
3. Log the extracted data from comments

Discuss the results with your administrator.

---

#### 🏆 Challenge: control error messages

Debug what is causing an error on the following line of code and display the
error message

```jsx
// Get post where id is 180
get('posts/180');
```

Discuss the results with your administrator.

---

#### 🏆 Challenge: Reduce, filter, and map

Using Javascript globals i.e `Array.reduce`, `Array.filter` or `Array.map`,
build function that will get posts by user id.

1. Create a file called job1.js
2. Add the 1st operation which is get all posts
3. Add 2nd operation which has a function that filter posts by id
4. Use the function from 2nd operation to get all post for user id 1

Discuss the results with your administrator.
