---
layout: post
title: Testing a React app, the blurred line between Unit, integration and E2E
author: Chaiwa Berian
author_url: https://github.com/chaiwa-berian
author_image_url: https://avatars.githubusercontent.com/u/7937584?v=4
tags: [how-to, tips, testing, browser-testing, react, elixir]

featured: true
---

Have you ever struggled to layout the strategy for testing your React App? Well,
you are not alone! Here a few hints from the lessons I learned during my
experience testing a `React/Redux` app with a `Phoenix/Elixir` backend.

<!--truncate-->

## The Blurred Line

Because a `React app` is built on `components`, the basic UI units, it is
natural to think and organise your tests around components! And so unit testing,
in this case, would refer to "component testing", which may be confusing at
times, especially when the concept of unit testing is again applied to testing
functions such as `React/Redux reducers` and `Action Creators` or any other
`JavaScript function` in your application.

The other challenge that I often faced was whether to write tests for each
component in isolation or write a test for a feature that encapsulates a set of
related components. The later would be equivalent to writing what I would call
"integration tests".

Finally, one would say "well then you could have just written the tests in a way
that resemble the way the application is used"! This approach is commonly
recommended in the `React community`, but it quickly becomes really complex to
maintain the layers of separation between `unit tests` and `integration tests`
and/or if not `End-to-End tests`.

## What did I learn?

Given a `React/Redux` application, here is how I would organise my testing
strategy:

### Unit Tests

- In a `React app`, `Unit Tests` will largely apply to testing
  `helper functions` and not to testing `components`, as justified in the next
  section. Helper functions, in this case, would refer to functions that live
  outside the components and are neither `Redux Action Creators` nor `Reducers`.
  These functions can be used inside components, action creators, reducers or
  other parts of your application.

- Writing unit tests for `helper functions` would ensure their signatures and
  expected outputs are protected against regressions. This would also ensure
  their use across components or other functions is consistent and as expected.

- Where possible, each `helper function` must have its own `unit test`.

- An example of a unit test would like:

  ```javascript
  const sum = require('../../js/sum');

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  ```

- Write a _thousand_ of these.

### Integration Tests

- In the context of a `React/Redux app`, `component tests` can be equivalent to
  what is known as `integration tests`. This is because `React components` are
  built around features such as `Signup`, `search`, etc. So one React component
  can be a mix of other components to achieve a UI feature set.

- To test a component, write an `integration test` that covers the use of a
  given component for a given UI feature.

- If a component being tested dispatches a `redux action`, this is the right
  place to test those actions and their effect on the UI.

- Pay attention to the concept of `feature isolation` vs `component isolation`
  as it will help you write better `integration tests` and also easily `mock`
  component contexts.

- A classic example of `feature isolation` is when you have a `UserList`
  component which displays a list of users and has a `button` to add a
  `new user`. Writing a test for `UserList` component would be equivalent to
  testing a `feature`.

- In this example, one would be tempted to test `clicking` on the
  `Add User Button` and further test the `new user` form! This is where we draw
  the line! Nope! Only test that the `UserList` renders the `mock users` in the
  list and that the `Add User Button` is present/enabled. The `UserList` feature
  ends there, otherwise you will be sliding into `End-to-End testing` :)! The
  `User` component, although it is invoked by `UserList` component, it is
  isolated enough to be tested in its own `integration test`.

- Testing components this way would make `context mocking` easier for
  components.

- Another important benefit for isolating testing context, as in the example
  above, is that it will be easier to mock the `redux actions` and/or
  `api calls` using tools such as `jest` and `msw` as explained in the
  **Choosing Tools** section.

- The value of writing integration tests for components, in this way, ensures
  that a given component renders the UI consistently, given all possible
  combinations of contexts and interactions. This will also allow you to ensure
  redux actions invoked by the component are called as expected and with the
  correct arguments.

- An example component integration test would look like:

  ```javascript
  // ....other imports
  import { setupServer } from 'msw/node';
  // Tell jest to mock the module
  jest.mock('../js/actions/UserActions', () => ({
    ...jest.requireActual('../js/actions/UserActions'),
    saveUser: jest.fn(),
  }));

  import { saveUser as mockSaveUser } from '../js/actions/UserActions';
  const server = setupServer(...handlers);
    // Enable API mocking before tests
    beforeAll(() => server.listen());
    // Reset any runtime handlers we may add during the tests
    afterEach(() => server.resetHandlers());
    // Disable API mocking after the tests are done.
    afterAll(() => server.close());
    beforeEach(() => {
      jest.clearAllMocks();
    });
  describe('<AddUser/>', () => {

  test('create new user', async () => {
      const {getByPlaceholderText,getByText} = render(<User {...defaultProps} />);
      userEvent.type(getByPlaceholderText('First Name'), 'John');
      userEvent.type(getByPlaceholderText('Last Name'), 'Doe');
      userEvent.click(getByText('Save'));
      expect(mockSaveUser).toHaveBeenCalledTimes(1);
      expect(mockSaveUser).toHaveBeenCalledWith({
        firstName: 'John',
        lastName: 'Doe',
      });
  }

  ```

- Write a _good couple_ of these.

### End-to-End (e2e) Tests

- In a `React/Redux` App, this would mean testing a `full flow` of a given
  feature. `End-to-End tests` would require launching the entire application,
  including the backend, for a given test.

- Note that `End-to-End` tests are different from `Integration Tests` as they
  require the entire App to run and render the full flow to your component under
  test.

- With this understanding, consider writing `e2e` tests per `workflow`.

- An example `e2e` workflow is the `Viewing and adding users` workflow.

- The `e2e` test for this workflow would require the `test runner` to launch the
  App, log-in, navigate to the users list page, verify existing users are in the
  list, click on the Add New User button and confirm that the new user has been
  added to the list.

- As you can see, `e2e` tests have more `dependencies` and require that you
  setup your testing environment in way that closely simulates your real
  application usage.

- An example `e2e` test for a `React/Redux` App with a `Phoenix/Elixir Backend`,
  using `Hound` as a `test runner`, would look like:

```elixir
defmodule OpenFn.UsersTest do
  setup do
    user = insert(:user, confirmed_at: DateTime.utc_now())
    {:ok, user: user, }
  end

  @tag :integration
  test "Sign-up.", %{user: user} do
    navigate_to("/sign-up")
    form = find_element(:id, "sign_up_form")

    form
    |> find_within_element(:id, "first-name")
    |> fill_filed("John")

    form
    |> find_within_element(:id, "last-name")
    |> fill_filed("Doe")

    form
    |> find_within_element(:id, "email")
    |> fill_filed("doe@gmail.com")

    form
    |> find_within_element(:id, "save-button")
    |> click

    assert page_title() === ~s/Welcome to my page/
    end
end
```

- Write _only a few_ of these.

## Choosing Testing Tools

There are many testing tools out there, but for a typical _React/Redux_ app the
following tools should help you accomplish the above taks:

1. [Jest](https://jestjs.io/docs/getting-started) as `test runner` for `Unit`
   and `Integration` tests.
2. [React Testing Library](https://testing-library.com/docs/) used along with
   `Jest` as an `assertion library` for `integration tests`.
3. [MSW](https://mswjs.io/docs/getting-started/install) used along with `Jest`
   as a `REST API Mocking libray`.
4. [Hound](https://hexdocs.pm/hound/readme.html) as a `test runner` for `e2e`
   tests in `Elixir/Phoenix` apps.
   [Puppeteer](https://developers.google.com/web/tools/puppeteer) can also be
   used along with `Jest`.
   - If `Puppeteer` is used, it will work seamlessly with `jest` but only in
     headless browser mode. It also reduces on tech stack since you will only
     need `jest`.
   - `Hound` gives you the ability to run your `e2e` tests both in `headless`
     and `browser` mode.

## Final thoughts and next steps

Testing a `React App` can be really hard, but worth it! By building
`Aria-accessible` components ahead of time, you save yourself `$` and good
health! A few more hints would be:

- Build clean, isolated and plugable components for your better testing
  experience. `God` components can be a `pain` to test!
- Using test runners such as `Jest`, that use `emulated web browser(jsdom)`
  rather than a `real browser`, comes with its own challenges in rendering and
  traversing complex DOM trees, especially if you are using UI libraries such as
  `Material-ui`.
- If using `Jest` for `Integration Tests`, I would recommend the components
  under test have as few dependencies as possible to avoid the complexity
  involved in mocking `http requests` and waiting for
  `asynchronous DOM rendering`.

What would I do differently? Here are my few thoughts:

- Organise and document detailed test cases for `manual click testing`.
- Identify and clearly isolate components for `Integration Tests`.
- Do not `delete slow tests`, instead `re-write` your component to be faster.
  Respect the `linter`'s advice, always!
- Use a commonly supported `frontend testing stack` such as
  `jest/react testing libray/msw/puppeteer` for easier setup and community
  support.
- Setup your test runner to use a `test database`. It helps, especially during
  `End-to-End` testing.
- Always write `all the three types` of tests, whenever applicable.

All this stuff for what?

- Well because `regressions` can be much more `expensive` to your organisation!
  Writing high quality and throuroughly tested software will save you `$` and
  help guarantee a `mantainable` codebase and a `progressive` software
  application.

Still looking for the legend's advice? Gotcha, here you go:

> Swallow your pride and be humble, always do `manual testing`! `Click test`
> your way through the `manual test cases` for every `new deployment`, catching
> `regressions` and locking `fixes` as part of the `Unit Tests`,
> `Integration Tests`, and `End-to-End tests`.

Happy testing,

Chaiwa
