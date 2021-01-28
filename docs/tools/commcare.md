---
title: CommCare HQ
---

## Push cases and/or forms from CommCare to OpenFn

1. Go to "Project Settings".
2. Click "Data Forwarding".
3. "Add a forwarding location" for Cases, Forms, or both.
4. Specify JSON, using your OpenFn inbox URL as the target. See the
   [CommCare documentation](https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128).
5. Create a
   [message-filter trigger like this](../build/triggers#match-a-message-with-a-fragment-inside-another-object-called-form).
6. Set up a `job` running on that filter to process CommCare submissions or case
   updates.
