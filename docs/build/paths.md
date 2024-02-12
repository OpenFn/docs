---
title: Paths & Path Conditions
sidebar_label: Paths
---

A Path is both a visual and functional indication defining the sequence of Steps
the Workflow follows when executed. Read on more on the different types of Paths
and configuration tips.

## Path Conditions

There are 4 types of Path Conditions that define whether the Workflow will
proceed to the next Step when executed:

1. Always (the next Step will always run after the execution of the prior Step
   is completed)
2. On Success (the next Step will run only if the execution of the prior Step
   _succeeded_)
3. On Failure (the next Step will run only if the execution of the prior Step
   _failed_)
4. Matches a JavaScript Expression (the next Step will only run if the condition
   or custom expression evaluates to be true)

![Path Conditions](/img/path_conditions.png)

## Writing JavaScript Expressions for Custom Path Conditions

Write your own JavaScript expression if you want to define a **custom
condition** that evaluates the initial state of the step.

The workflow will only continue to the next step if if the JavaScript expression
evaluates to be true.

![Custom Conditions](/img/path_js_expression.png)

## Disable Paths to deactivate

To "deactivate" part of your Workflow and the Steps that follow a specific Path
sequence:

1. Click on the `Path` you want to deactive
2. Select the `Disable this path` checkbox
