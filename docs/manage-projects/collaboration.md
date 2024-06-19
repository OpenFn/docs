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

### Who are project collaborators?

An OpenFn project collaborator is any one who has been granted administrative
editing or viewing privileges on a project. Collaborators are granted ONE of
four key roles in a project they that can access as highlighted in the table
below:

| Role   | Description                                                                                                                                                                    |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Owner  | The user who created the project                                                                                                                                               |
| Admin  | A user who is not the owner of a project but has unrestricted access to the project and the workflows included. Also has permission to add other collaborators to the project. |
| Editor | A user with access to a project and is able to edit workflows and project related settings. An editor role is limited compared to the admin                                    |
| Viewer | A user with access to a project but only limited to viewing the project settings and artifacts.                                                                                |

You can learn more about the permissions of each role
[here](https://docs.openfn.org/documentation/manage-projects/user-roles-permissions).

### Adding a collaborator

A user with one of the owner, admin or editor roles in a project can invite new
collaborators to their OpenFn project through the project `Settings` page.
Currently the invited user has to have an OpenFn account already to be able to
be invited as collaborator. New users can request an account
[here](https://www.openfn.org/register).

To add this existing user:

1. Go to the project settings, navigate to the collaborators tab and click the
   `Add new collaborator` button
2. From the `Settings` page, follow the steps below: Click on
   `Add Collaborator(s`)
3. Provide the email address of the user and select the `Role`: Viewer, Editor
   or Admin
4. Add more collaborators by clicking the `Add Additional Collaborator` button
5. Save your collaborators by clicking the `Save Collaborator` button

![Collaboration](/img/collaboration.png)

![Add collaborator](/img/add_collab.png)

:::note

A project can have exactly _one_ owner and you will not be able to assign an
owner role to a collaborator.

:::

### Removing a collaborator

To remove a collaborator from a project, a collaborator owner, editor or admin
can click the `Remove Collaborator` button on the `Collaboration` page in the
project `Settings` and confirm the removal through the pop up window. The owner
of a project cannot be removed.
