---
title: Linking your Project to GitHub (Version Control)
sidebar_label: Linking your Project to GitHub

---

### Setting up GitHub integration

You can connect your OpenFn project to a Github repository that you have administrator access to. 

//screenshot

Choose which branch to sync changes with. (OpenFn supports a 2-way integration.)

Select Connect Branch - sign in to GH - select repository

Your whole OpenFn project on Lightning can be represented as a project.yaml file.

Using the @openfn/cli you can pull a project config from Lightning to a local folder or repo…
…and you can deploy a change in your project.yaml file from that directory or repo to Lightning.
This “Sync to Github” feature makes use of github actions to automatically deploy (after a commit) or pull (when this button is clicked) to keep a repo in sync with your Lightning project.

