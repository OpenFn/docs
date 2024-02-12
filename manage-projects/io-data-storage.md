---
title: I/O Data Storage
---

In the "Data Storage" section, you can configure what you'd like Lightning to do
with the actual _data_ that's processed (or produced) by your workflow runs.

### Why would I store input/output data along with run logs?

One of the most powerful features of the platform is the ability to "replay"
work orders. If a particular case referral fails, an administrator can find the
failed work order, make a change to the workflow or wait for a destination
system to come online, and then reprocess that work order without having to
fetch (or re-send) the data from a source system.

### Why would I chose to _NOT_ store I/O data?

Some of our users are processing incredibly sensitive data (such as medical
records) and might want to ensure that after a workflow is run there is no
patient data left on OpenFn servers.

Enabling this "zero-persistence" feature for I/O data is an attractive option
for folks who want to use OpenFn on the cloud but are worried about data
sovereignty.
