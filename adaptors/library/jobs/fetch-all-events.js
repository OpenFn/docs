// Fetching all events without pagination
// Be cautious: This can degrade performance if you have a lot of events, use with caution
// Requires DHIS2 server v2.41+, for older version `skipPaging: true`
tracker.export('events', { paging: false });
