---
title: Keyboard Shortcuts
keywords: [keystrokes, keyboard shortcuts, shortcuts]
---

Keyboard shortcuts (keystrokes) allow you to perform common actions without
taking your hands off the keyboard. 🤓

## Platform Shortcuts

| Command                       | Availability    | Mac              | Linux/Windows      | Notes                                                                                                                        |
| ----------------------------- | --------------- | ---------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| **Switch** Project            | Anywhere        | `⌘+p`            | `Ctrl+p`           | Open the project picker to change between your projects (i.e., secure workspaces)                                            |
| **Expand/Collapse** Side Menu | Anywhere        | `⌘+m`            | `Ctrl+m`           |                                                                                                                              |
| **Toggle** AI Assistant       | Canvas, IDE     | `⌘+k`            | `Ctrl+k`           |                                                                                                                              |
| **Save** Workflow             | Canvas, IDE     | `⌘+s`            | `Ctrl+s`           |                                                                                                                              |
| **Save** & Sync Workflow      | Canvas, IDE     | `⌘+Shift+s`      | `Ctrl+Shift+s`     | When opting to sync, you'll be prompted to either enter a commit message or use the default message provided.                |
| **Run**                       | Canvas, IDE     | `⌘+Return`       | `Ctrl+Enter`       | This will save (but not sync) your workflow and run it from the current step with the default workorder grouping behavior.\* |
| **Run** _(alternate action)_  | Canvas, IDE     | `⌘+Shift+Return` | `Ctrl+Shift+Enter` | This will save (but not sync) your workflow and create a new workorder from the current step.                                |
| **Toggle** IDE (code editor)  | Canvas, IDE     | `⌘+e`            | `Ctrl+e`           | Opens the full-screen code editor for the selected job.                                                                      |
| **Toggle** Run History        | Canvas, IDE     | `⌘+h`            | `Ctrl+h`           | Not available when creating a new workflow.                                                                                  |
| **Close** Panel/IDE           | Canvas, IDE     | `Escape`         | `Escape`           | Closes an open inspector, the IDE, or the run panel.                                                                         |
| **Toggle** Templates Panel    | Workflow Create | `⌘+/`            | `Ctrl+/`           | Only available when creating a new workflow.                                                                                 |
| **Toggle** Import Panel       | Workflow Create | `⌘+\`            | `Ctrl+\`           | Only available when creating a new workflow. Allows importing from YAML.                                                     |

\*If you are viewing an existing run and create a new run from the Canvas or
IDE, that run will be associated with the existing work order—this is the
default behavior. (Think of this as "retrying".) Sometimes, for auditing
purposes, it's helpful to create an entirely new work order. This can be done by
using the alternate run button.

## Selected Editor Shortcuts

See the command pallette (right click or press `F1`) for the full list. Note
that to access these shortcuts you must click into a specific editor—there are
multiple editors in the IDE.

| Command              | Availability    | Mac              | Linux/Windows |
| -------------------- | --------------- | ---------------- | ------------- |
| View Editor Commands | IDE, Run Viewer | `F1`             | `F1`          |
| Format Code          | IDE             | `Shift+Option+F` | `Shift+Alt+F` |
| Comment Code Out/In  | IDE             | `⌘+/`            | `Ctrl+/`      |
