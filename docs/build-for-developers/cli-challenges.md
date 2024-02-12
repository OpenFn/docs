---
title: CLI Challenges
sidebar_label: CLI challenges
slug: /cli-challenges
---

#### Solve real-world problems and showcase your command-line skills by participating in our CLI challenges.

:::tip Important Notes

- A developer with a bit of Javascript experience should be able to write, run,
  and debug complex, multi-step jobs with OpenFn, using nothing but a text
  editor and their terminal.
- If you are stuck and need help, please post in
  [community.openfn.org](https://community.openfn.org).
  <details>
  <summary>Expand to see bug report template</summary>

  ```

  Subject: Bug Report - [Brief Description]

  **Description:**
  [Concise description of the bug.]

  **Steps to Reproduce:**
  1.
  2.
  3.

  **Environment:**
  - OS: [e.g., Windows 10]
  - CLI: [e.g., v0.4.11]
  - Node: [e.g., v 18.17.1]
  - NPM: [e.g., 8.19.2]

  **Attachments:**
  [Screenshots, error messages, or relevant files.]

  ```

  </details>

:::

### 🏆 Create personalized greeting

**Overview:**

Create a new `hello.js` job to display a personalized greeting with your name.

**Objective:**

Compose a OpenFn job using [common adaptor](/adaptors/packages/common-docs) that
outputs a greeting message containing your name.

**Requirements:**

1. Install the latest version of common adaptor.

   ```
   openfn repo install @openfn/language-common
   ```

**Tasks:**

1. Create a new file named `hello.js`.
2. Write a JavaScript script in `hello.js` to generate a greeting with your
   name.
3. Run the job using the command `openfn hello.js -a common -o tmp/output.json`.
4. Confirm the successful execution.

**Review Checklist:**

- [ ] Successfully created a new file `hello.js`.
- [ ] Wrote a JavaScript script in `hello.js` for a personalized greeting.
- [ ] Executed the job using the provided command.
- [ ] Verified the correct logs in the CLI output.

---

### 🏆 Fetch and inspect data via HTTP

**Overview:**

Write a job to fetch user data from the
[JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) using OpenFn
[http adaptor](/adaptors/packages/http-docs).

**Objective:**

Fetch and print the details of the first user from the JSONPlaceholder API.

**Requirements:**

1. Utilize the
   [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).
2. Create a file named `getUsers.js` to contain the script.

**Tasks:**

1. Create a file (`getUsers.js`) to house the script.
2. Fetch a list of users from the JSONPlaceholder API.
3. Print the details of the first user.
4. Run the job using OpenFn/cli:
   `openfn getUsers.js -a http -o tmp/output.json`.
5. Validate the expected CLI logs.

**Review Checklist:**

- [ ] Successful retrieval of user data.
- [ ] Correct printing of the first user's details.
- [ ] Proper use of the OpenFn http adaptor functions.
- [ ] Verified the correct logs in the CLI output.

---

### 🏆 Retrieve Covid-19 metadata

**Overview:**

Fetch and present COVID-19 metadata using the
[disease.sh API](https://disease.sh/).

**Objective:**

Write a job that retrieves comprehensive COVID-19 data from the API and group it
by region.

**Requirements:**

1.  Install the latest version of http adaptor.

```
openfn repo install @openfn/language-http
```

**Tasks:**

1. Write an OpenFn operation to pull COVID-19 metadata from the
   [disease.sh API](https://disease.sh/).
   - Utilize `https://disease.sh/v3/covid-19/` as your **baseUrl** in
     `state.configuration`.
2. Run the job using the OpenFn CLI with the command
   `openfn your_operation_file.js -a http -o tmp/output.json`.
3. Evaluate the output and explore different ways to format or present the
   COVID-19 data by region.

**Review Checklist:**

- [ ] Successfully created an OpenFn operation file.
- [ ] Implemented code to retrieve COVID-19 metadata from the provided API.
- [ ] Executed the job using the provided CLI command.
- [ ] Explored various formatting or display options for the obtained data.

> Feel free to experiment with the data presentation to enhance your
> understanding. Good luck! 🌐🦠

---

### 🏆 Extract names & emails

**Overview:**

In this challenge, you will use the JSONPlaceholder API to fetch comments for a
specific post (post ID 1). Your task is to extract the "name" and "email" fields
from each comment and log the extracted data.

**Objective:**

Write a job that retrieves comments for post ID 1, extracts the "name" and
"email" fields from each comment, and logs the extracted data.

**Requirements:**

- Basic knowledge of JavaScript.
- OpenFn CLI installed on your machine.

**Tasks:**

1. **Get Post Comments:**

   - Add an operation to fetch all comments for the post with ID 1 from the
     [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts/1/comments).

2. **Extract Name and Email:**

   - Write a function to extract the "name" and "email" fields from each
     comment.

3. **Log Extracted Data:**
   - Log the extracted data (name and email) from each comment to the console.

**Review Checklist:**

- [ ] Successfully fetched comments for post ID 1.
- [ ] Implemented a function to extract "name" and "email" from comments.
- [ ] Logged the extracted data to the console.

---

### 🏆 Control error messages

Debug what is causing an error on the following line of code and display the
error message

```jsx
// Get post where id is 180
get('posts/180');
```

---

### 🏆 Data transformation and cleaning

**Overview:**

In this challenge, you will use JavaScript global array methods, specifically
`Array.reduce`, `Array.filter`, or `Array.map`, to create a series of operations
that fetch and filter posts by user ID.

**Objective:**

Write a job that retrieves posts by a specified user ID `1`

**Requirements:**

1. Utilize JSONPlaceholder API `https://jsonplaceholder.typicode.com`.
2. Install the latest version of http adaptor.

```
openfn repo install @openfn/language-http
```

**Tasks:**

1. **Create File:**

   - Create a file named `getPosts.js` for your job.

2. **Get All Posts:**

   - Add the first operation to fetch all posts. Use the provided API or any
     other source of your choice that provides a list of posts.

3. **Filter Posts by ID:**

   - Add a second operation with a function that filters posts by user ID. You
     can use `Array.filter` or any other suitable method for this task.

4. **Fetch Posts for User ID 1:**

   - Use the function from the second operation to filter posts for user ID 1.

**Review Checklist:**

- [ ] Created `getPosts.js` file.
- [ ] Successfully fetched all posts.
- [ ] Implemented a function to filter posts by user ID.
- [ ] Retrieved posts for user ID 1.
