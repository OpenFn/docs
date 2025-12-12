---
title: Keyboard Shortcuts
keywords: [keystrokes, keyboard shortcuts, shortcuts]
---

Keyboard shortcuts (keystrokes) allow you to perform common actions without
taking your hands off the keyboard. 🤓

## Platform Shortcuts

| Command                      | Availability      | Mac              | Linux/Windows      | Notes                                                                                                                        |
| ---------------------------- | ----------------- | ---------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| **Save** Workflow            | Canvas, Inspector | `⌘+s`            | `Ctrl+s`           |                                                                                                                              |
| **Save** & Sync Workflow     | Canvas, Inspector | `⌘+Shift+s`      | `Ctrl+Shift+s`     | When opting to sync, you'll be prompted to either enter a commit message or use the default message provided.                |
| **Run**                      | Canvas, Inspector | `⌘+Return`       | `Ctrl+Enter`       | This will save (but not sync) your workflow and run it from the current step with the default workorder grouping behavior.\* |
| **Run** _(alternate action)_ | Inspector         | `⌘+Shift+Return` | `Ctrl+Shift+Enter` | This will save (but not sync) your workflow and create a new workorder from the current step.                                |
| **Open** Job Editor          | Canvas            | `⌘+e`            | `Ctrl+e`           | Opens the full-screen code editor for the selected job.                                                                      |
| **Toggle** AI Assistant      | Canvas, Inspector | `⌘+k`            | `Ctrl+k`           |                                                                                                                              |
| **Toggle** Run History       | Canvas, Inspector | `⌘+h`            | `Ctrl+h`           | Not available when creating a new workflow.                                                                                  |
| **Toggle** Templates Panel   | Workflow Create   | `⌘+/`            | `Ctrl+/`           | Only available when creating a new workflow.                                                                                 |
| **Toggle** Import Panel      | Workflow Create   | `⌘+\`            | `Ctrl+\`           | Only available when creating a new workflow. Allows importing from YAML.                                                     |
| **Close** Panel/Editor       | Canvas, Inspector | `Escape`         | `Escape`           | Closes the inspector, job editor, or run panel.                                                                              |

\*If you are viewing an existing work order and create a run from the inspector,
that run will be associated with the existing work order—this is the default
behavior. (Think of this as "retrying".) Sometimes, for auditing purposes, it's
helpful to create an entirely new work order. This can be done by using the
alternate run button.

## Selected Editor Shortcuts

See the command pallette (right click or press `F1`) for the full list. Note
that to access these shortcuts you must click into a specific editor—there are
multiple editors in the Inspector interface.

| Command              | Availability          | Mac              | Linux/Windows |
| -------------------- | --------------------- | ---------------- | ------------- |
| View Editor Commands | Inspector, Run Viewer | `F1`             | `F1`          |
| Format Code          | Inspector             | `Shift+Option+F` | `Shift+Alt+F` |
| Comment Code Out/In  | Inspector             | `⌘+/`            | `Ctrl+/`      |
