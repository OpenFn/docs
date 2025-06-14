---
title: Paths & Path Conditions
sidebar_label: Paths
---

A Path is both a visual and functional indication defining the sequence of Steps
the Workflow follows when executed. Read on for more about the different types of Paths
and configuration tips.

## Path Conditions

There are four types of Path Conditions that define whether the Workflow will
proceed to the next Step when executed:

1. **Always**: the next Step will always run after the execution of the prior
   Step is completed
2. **On Success**: the next Step will run only if the execution of the prior
   Step _succeeded_
3. **On Failure**: the next Step will run only if the execution of the prior
   Step _failed_
4. **Matches a JavaScript Expression**: the next Step will only run if an
   expression evaluates to be true

![Path Conditions](/img/path_conditions.webp)

## Writing JavaScript Expressions for Custom Path Conditions

Create a **custom condition** with a JavaScript expression. This evaluates
against the state produced by the previous Step.

```
state.data.form['@name'] === "Register New Patient"
```

This is a regular Javsacript expression with `state` in scope. If the expression
evaluates to true (or anything _truthy_), the Path will be followed and the next
Step will be executed.

![Custom Conditions](/img/path_js_expression.webp)

Examples of valid conditions include:

- Run if there are no errors: `!state.errors`
- Run if some value exists on state: `state.has_valid_email_address`
- Run if a data array contains any items: `state.data.length > 0`
- Run if data includes one item which matches criteria:
  `state.data.includes(item => item.age > 18)`
- Run if the last Step received a HTTP error: `state.response.statusCode >= 400`

In a custom expression you **cannot** do any of the following:

- Use adaptor functions
- Use Lazy State references (`$`).
- Use control statements like `if`, `while`, `for`, etc

## Disabling Paths

Disabling a path will prevent any of the downstream Steps from running,
regardless of the condition or state.

This can be a useful way of temporarily deactivating part of your workflow.

To disable a path:

1. Click on the `Path` you want to deactive
2. Select the `Disable this path` checkbox
