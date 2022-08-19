---
title: The OpenFn Job Studio
---

The OpenFn Job Studio allows you create and test jobs on the platform with easy
access to documentation of [adaptors](/documentation/build/jobs#adaptors),
matching [messages](/documentation/build/inbox) and real-time logs.

```mdx-code-block
import ReactPlayer from 'react-player';

<ReactPlayer url='https://www.youtube.com/watch?v=5KeZTNtnyM0' />
```

## Job Studio Features

When editing a job, you can find messages in the inbox that match your job
trigger by clicking "Find messages matching this trigger". If you navigate to a
field within the message JSON, you can copy the exact path to the field and
paste it as a `dataValue` in your job.

You can find a list of avaible helper functions for your chosen adaptor in the
job writing panel heading. Clicking the function name copies the function code
that you can directly paste into the job.

![Job_Studio_Edit](/img/job_studio_edit.gif)

By clicking "Save and Run" run logs are shown real-time in the Output panel.

![Stream](/img/stream.gif)
