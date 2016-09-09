# Introduction to the docs
Thanks for visiting! This documentation is for [OpenFn.org](https://www.openfn.org), and is primarily intended to help users of the site. Technical documentation for OpenFn's open-source integration tools and language-packs can be found in their respective repositories at [Github.com/OpenFn](https://github.com/openfn).

We've broken the documentation into three parts: an introduction, detailed documentation, and release notes.

If you want a new feature or find a bug, please [submit an issue](https://github.com/openfn/docs/issues). If you find an issue with the documentation or want to share your custom functions, please [submit a pull request](https://github.com/OpenFn/docs/compare)!

> *Wait, so, OpenFn does what now?*

Good question:

1. A source application sends **messages** to your project’s **inbox** when something happens.

2. **Jobs** will be triggered, based on your **filters**, and use the data in those messages to attempt specific actions in destination systems.

3. The **logs** are recorded so you can see precisely what happened and when and where it happened to take action in the event of a failed attempt—like editing the job or even the source message and trying it again.

OpenFn has harnessed the extreme  stability and scalability of Erlang to coordinate these actions and provide users with email alerts, project management tools, and an online job writing IDE.

In this guide you'll find documentation to help you write filters and jobs, along with explanations of OpenFn's key concepts.

If you have any questions, please don't hesitate to email [admin@openfn.org](mailto:admin@openfn.org).

# Quick-start guide
Want to get up and running with OpenFn in a few minutes? Follow these steps to set up your project and see the power of OpenFn in action!

**1. Create your account.** If you haven't already, create an account at [OpenFn.org](https://www.openfn.org/signup)

**2. Log In.** After logging into your new account, you will see an overview of your current projects and the job runs associated with that project. This is called the outer **Dashboard**. Click on one to start.

**3. Check your inbox.** You should now be looking at the OpenFn User dashboard for a particular project, made up of the following navigation tabs:

- Jobs
- Triggers
- Credentials
- Inbox
- Activity
- Settings

Click on the Inbox tab.

**4. Run a job.** You should see your first message associated with a "sample job". Click on it. You can now choose to do the following:

- Edit the message (mainly for the purpose of fixing mistakes in data),
- Manually run the job associated with a filter which has identified your first message as a trigger.

Click run.

**5. View the logs.** Wait for the job to finish and then click on "View Logs" to see what happened to the data inside of the message. You can view every job run from the "Activity" tab.

**6. Familiarize yourself with the other tabs.**

Navigate to **Triggers**. You can see that the sample filter we provided you required a message to be sent from OpenFn in order to trigger a job run. Click on the filter to edit it. Click save when you are done.

Navigate to **Jobs**. Here you can:

- You can click to view the job that was run when triggered by the sample filter and sample message.
- Click on "Edit Job" to edit the .js file which executes a specific action (job).
- Click on the specified filter to change which filter should trigger that job.

Navigate to **Credentials** to edit the destination system you want to connect to. By default, we have provided credentials to access the Salesforce sandbox environment.

Navigate to the **Settings** tab to change the project's name, upgrade your account for more jobs and runs, add collaborators, and transfer project ownership.
