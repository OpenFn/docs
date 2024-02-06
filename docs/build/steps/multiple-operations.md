---
title: Using multiple operations
---

### Reasons to use multiple operations in a single job

- The job must be atomic, you want the whole thing to count as a failure if any
  part of it fails.
- You run steps manually and you want a single button to click to retry the
  entire sequence of operations.
- You update a `cursor` in a series of operations that involve `GET` and `POST`.
  When the `POST` fails, you don't want to update the `cursor` for the
  subsequent job run which contains the `GET`.
