---
title: Open Data Kit (ODK)
---

## Open Data Kit (ODK) Collect

To bypass ODK Aggregate and submit forms directly to OpenFn make the following
changes in your ODK Collect app.

1. Select `General Settings`.
2. Select `Server Settings`.
3. Under `Type`, select `Other`.
4. Under `URL`, enter `https://www.openfn.org
5. Under `Submission path`, enter `/inbox/your-unique-inbox-url` (you can copy
   this from your OpenFn Inbox).
6. Optional: If you have enabled auth methods on your inbox, enter your
   `username` and `password` on this same screen.

Note that you cannot load forms from OpenFn. Forms must be loaded directly via
[ODK's direct method](https://docs.opendatakit.org/collect-forms/#loading-forms-directly),
which allows you to send forms as files via email/Whatsapp. Users can then
choose to download the files and save them in the `odk/ forms` folder on their
mobile.

Note that if you want to reverse this setup and configure ODK Collect to
re-connect to your Aggregate instance again:`

1. Go back to `General Settings`.
2. Select `Server Settings`.
3. Under `Type`, select `ODK Aggregate`.
4. Under `URL`, enter `Your Aggregate URL`
5. Under `Submission path`, enter `/submissions`.
6. Enter your ODK Aggregate `username` and `password` on this same screen.

## Open Data Kit (ODK) Aggregate

1. To new submissions from ODK in real-time, click the "Form Management" tab at
   the top of your Aggregate interface.
2. Click "Publish" next to the form you'd like to publish to OpenFn.
3. A dialogue box will open.
4. In the "Publish To:" picklist, select `Z-ALPHA JSON Server`.
5. Choose which data to publish in the "Data to Publish:" picklist. You may:
   **"Upload Existing Data ONLY"** (ideal for migrations of finished data sets),
   **"Stream New Submission Data ONLY"** (ideal for new projects), or **"BOTH
   Upload Existing & Stream New Submission Data"** (ideal for connecting ongoing
   projects which are already running).
6. In the "URL to publish to:" text box, enter your OpenFn Inbox UUID. (e.g.,
   `https://www.openfn.org/inbox/8ad63a29-mUCh-sEcRET-cODes-wOW`)
7. Leave "Authorization token:" blank.
8. Leave "Include Media as:" set to "Links(URLs) to Media".
9. Click "Publish" and enter your email address in the dialogue box.
10. Click the "Published Data" tab under "Form Management" and select your form
    to view the status of your publisher. You can also now check your OpenFn
    inbox to see ODK submissions arrive.
