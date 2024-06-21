---
title: Collaboration
sidebar_label: Collaboration
slug: /collaboration
---

OpenFn allows technical and non-technical users to effectively collaborate for
alignment in the design and management of workflows within a project. This is
possible through a visual workflow design canvas and other collaboration
features such as version control, adding collaborators and sharing credentials
among others. This guide walks you through how to manage collaborators in a
projects.

### Who are Project Collaborators?

A `Project Collaborator` is any one who has been granted administrative
editing or viewing privileges on a OpenFn Project. Collaborators are granted ONE of
four key roles in a project they that can access as highlighted in the table
below:

| Role   | Description                                                                                                                                                                    |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Owner  | The user who created the project                                                                                                                                               |
| Admin  | A user who is not the owner of a project but has unrestricted access to the project and the workflows included. Also has permission to add other collaborators to the project. |
| Editor | A user with access to a project and is able to edit workflows and project related settings. An editor role is limited compared to the admin                                    |
| Viewer | A user with access to a project but only limited to viewing the project settings and artifacts.                                                                                |

You can learn more about the permissions of each role
[here](../manage-projects/user-roles-permissions.md)

### Add Collaborator(s)

A user with one of the owner, admin or editor roles in a project can invite new
collaborators to their OpenFn project via the project `Settings` page.
Currently, the invited Collaborator must have an OpenFn user account already setup to be able to
be invited as Collaborator. New users can request an account
[here](https://www.openfn.org/register).

To add an existing OpenFn user as a Collaborator:

1. Go to the project `Settings` page, navigate to the `Collaboration` tab 
2. Click the button `Add Collaborator(s`)
3. Enter the email address of the user and select the `Role`(Viewer, Editor
   or Admin)
4. Add more Collaborators by clicking the `Add Additional Collaborator` button
5. Click the `Save Collaborator` button to save your changes

![Collaboration](/img/collaboration.png)

![Add collaborator](/img/add_collab.png)

:::note

A project can have exactly _one_ Ewner and you will not be able to assign an
owner role to another collaborator. If you need to change the project Owner, 
contact your Super Admin or [support@openfn.org](mailto:support@openfn.org).

:::

### Removing a Collaborator

To remove a Collaborator from a project, an owner or admin
can click the `Remove Collaborator` button on the `Collaboration` page and confirm the removal through the pop up window. The owner
of a project cannot be removed.

:::tip
It is also through this page where you can set receiving failure alerts and digests for your projects. Learn more about it [in this guide](../manage-projects/notifications.md).
:::
