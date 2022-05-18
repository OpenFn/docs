​​---
title: Troubleshooting
---
 
:::important
 
Currently, this section is specific to **OpenFn/platform**.
 
:::
 
 
## Runs
 
One of the most helpful pages for troubleshooting on OpenFn platform is the [Activity History](/documentation/getting-started/terminology/#activity-history). This pages provides a list of all of the runs executed in a project and always marks any failed runs red or yellow. Project administrators can troubleshoot errors by clicking into the run to review the run details. Keep reading for all the important parts of a run and how to leverage them during your troubleshooting!
 
 
### Exit codes
 
Every run will have an exit code. The exit code is a way for OpenFn to classify the run status and can help you troubleshoot errors.  Learn more about OpenFn exit codes and what each one means [here](/documentation/jobs/errors).
 
 
### The time it took for the job to fail
The run will also record how long it took before the job failed. This information helps users understand if the job is taking longer than it should and is especially helpful with errors that involve timeouts. You can use the run to determine at which operation the job is timing out and determine if the job performance can be optimized.
 
### Run logs
 
As jobs are developed it is important to log details which will make testing and troubleshooting much easier in the future. Keep reading for the two most important parts of a run log!
 
#### Mappings
The logs should be written so that you can see exactly what was mapped between the source system and the destination system. In cases where data received from the source system is _not_ being posted to the OpenFn inbox (often for security reasons), it can even be helpful to log the data that was received. In summary, the log can have a **"Data received from source system"** section and a **"Data to be uploaded to destination system"** section. 

These logs can help admins verify that the source data and the data being uploaded to the destination system is correct. For example, seeing in the logs that that a unique identifier is being mapped to `undefined` in the destination system can help you understand this Salesforce error message:  

`METHOD_NOT_ALLOWED: HTTP Method 'PATCH' not allowed. Allowed are GET,HEAD,POST at HttpApi.getError`.
 
#### Error messages
 
The run log should also tell us if an error has been thrown, and depending on the destination system, what the error message is. Sometimes the error message is very specific like:
 
`NOT_FOUND: Provided external ID field does not exist or is not accessible`
 
This error from Salesforce usually indicates that `External ID` has not been checked in the field settings in Salesforce.
 
Other error messages are not as clear and can take some time to debug:
 
`TypeError [Error]: Cannot read property 'split' of undefined`
 
**`TypeErrors`** usually indicate that the job received a part of the message that it wasn't expecting, or there is a syntax error in your job code. It means that the job needs to be updated to know how to handle the message. In this case, the job received an old version of the Commcare form which was missing a field which the job called the `split` function on. You can determine this by reviewing the job for which fields the split function is being called on and checking that they are all present in the message.
 
The more you test and troubleshoot with a particular system, the more familiar with it's error messages you become.
 
:::tip
 
OpenFn has outlined several of the more common error messages specific to some of the systems that we have integrated in the past. Explore these systems and their error messages [here](/documentation/apps/anything).
 
:::
 
 
 
## Leveraging search and filtering in OpenFn
Leverage the various search functionalities in OpenFn to find the right messages and runs to support your troubleshooting. You can search in the Inbox, Activity History, and Search Console.
 
1. **[Inbox](/documentation/manage/platform-mgmt/#inbox)** - The inbox contains all the messages that have been sent to your project. Search your project inbox for messages that contain a specific body text.  You can also filter these messages by date, run status and trigger. You can even use filtering to see all the messages whose last run failed, so you can get to troubleshooting! Learn more about inbox filtering [here](/documentation/manage/platform-mgmt/#inbox).
 
2. **[Activity history](/documentation/getting-started/terminology/#activity-history)** - As discussed above, the activity history records all runs for the current project. It has similar search and filtering capabilities as the inbox except it doesn't require valid JSON in the search box. Use the search in activity history instead of inbox when you want to search **_run logs_** instead of messages.
 
 
3. **[Search console](/documentation/manage/platform-mgmt/#search-console)** - The search console will search in both message bodies **_and_** run logs for any string is entered!
 
 
## Bulk reprocessing
Sometimes you'll see several messages in the inbox whose last run failed because of the same error. Once you have resolved the error, you can test it by rerunning the transaction for one failed run. If this passes, you can then leverage **bulk reprocessing** in the OpenFn inbox and activity history to reprocess all messages in the current filtered query. This means OpenFn will rerun all of those transactions in the order they were received. Learn more about bulk reprocessing [here](/documentation/manage/platform-mgmt/#bulk-reprocess-messages).
 
Sometimes you'll have so many messages with failed runs that it will be virtually impossible to open each one and inspect the run logs. In this case, you can resolve the errors and bulk reprocess as you go, each time reducing the number of failures in the inbox and generating a short list of the remaining errors.
 
## Other tips
- **Posting messages to the inbox** - You can post messages directly to the OpenFn inbox by clicking the **plus** icon on the bottom left of the inbox. This feature can come in handy when you have lengthy messages which include several rows of data. You simply copy and paste one row of data from the original message to a new message and post it to the inbox. This allows you to troubleshoot individual rows of data.
- **Editing messages** - Messages in the inbox can be edited by clicking the pencil icon in the message. This is a quick way to update and test any mapping fixes with data that is already in the inbox. Once you verify that the run for the updated message passes, you can make the appropriate updates to the source sytem and post the correct data to the inbox moving forward.
- **Organizing error messages** - When working with various different jobs and error messages, it is helpful to organize all errors in a spreadsheet which links to the last run, error, and status. 
 
## Sign up for email alerts:
You can turn on notifications to receive email alerts when a job fails. When you receive an error email, you can click “inspect & take action” to be taken to the failed run and being troubleshooting!
 
 
 
 
 
