# Setting up real-time sources
This section describes how to enable push notifications from selected source applications. Many web apps have some sort of events-based notifications engine. If you don't see yours listed below feel free to add it with a pull request.

## CommCare HQ
1. Go to "Project Settings".
2. Click "Data Forwarding".
3. "Add a forwarding location" for Cases, Forms, or both.
4. Specify JSON, using your OpenFn inbox URL as the target. See the [CommCare documentation](https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128).
2. Create a [message-filter trigger like this](https://openfn.github.io/docs/documentation/#match-a-message-with-a-fragment-inside-another-object-called-form).
3. Set up a `job` running on that filter to process CommCare submissions or case updates.

## Open Data Kit (ODK) Aggregate
1. To new submissions from ODK in real-time, click the "Form Management" tab at the top of your Aggregate interface.
2. Click "Publish" next to the form you'd like to publish to OpenFn.
3. A dialogue box will open.
4. In the "Publish To:" picklist, select `Z-ALPHA JSON Server`.
5. Choose which data to publish in the "Data to Publish:" picklist. You may: **"Upload Existing Data ONLY"** (ideal for migrations of finished data sets), **"Stream New Submission Data ONLY"** (ideal for new projects), or **"BOTH Upload Existing & Stream New Submission Data"** (ideal for connecting ongoing projects which are already running).
6. In the "URL to publish to:" text box, enter your OpenFn Inbox UUID. (e.g., `https://www.openfn.org/inbox/8ad63a29-mUCh-sEcRET-cODes-wOW`)
7. Leave "Authorization token:" blank.
8. Leave "Include Media as:" set to "Links(URLs) to Media".
9. Click "Publish" and enter your email address in the dialogue box.
10. Click the "Published Data" tab under "Form Management" and select your form to view the status of your publisher. You can also now check your OpenFn inbox to see ODK submissions arrive.

## Kobo
1. To push data from Kobo, users must click the projects icon on their left-side nav bar. It's in the shape of a globe.
2. Once selecting a project, the `Project Settings` link will appear at the top left side of the screen. Click it to open the Project Settings page.
3. In the bottom left pane of the project settings page, users must paste their inbox URL from OpenFn into the `Rest Services` `Service URL` input area and select `JSON Post` as the `Service Name`.
4. Click `Add Service` to start forwarding new Kobo submissions to OpenFn.org.

To test to integration, add a submission manually using the `enter data in browser` button. Head back to your history page at OpenFn to view the newly submitted data and write a new `filter` and `job` to map your Kobo data to any destination system on OpenFn.

Here's a sample post from Kobo REST service. Note that questions inside groups are prefixed with `groupname/` rather than sitting inside a group object like ODK:
```json
{
  "meta/instanceID": "uuid:19d72997-8316-4e02-8016-4a8ddf6a2aa4",
  "group1/name": "twenty",
  "group1/age": "19",
  "formhub/uuid": "6f5773a110b046cb97e3d71f6c04e7a6",
  "first_q": "hello",
  "final_q": "why not?",
  "_xform_id_string": "groups",
  "_uuid": "19d72997-8316-4e02-8016-4a8ddf6a2aa4",
  "_userform_id": "taylordowns2000_groups",
  "_tags": [],
  "_submitted_by": null,
  "_submission_time": "2016-04-22T06:38:20",
  "_status": "submitted_via_web",
  "_notes": [],
  "_id": 889409,
  "_geolocation": [
    null,
    null
  ],
  "_bamboo_dataset_id": "",
  "_attachments": []
}
```
