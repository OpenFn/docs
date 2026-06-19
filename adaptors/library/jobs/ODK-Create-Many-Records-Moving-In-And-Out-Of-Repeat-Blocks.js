/*
  Create many records from an ODK submission, moving in and out of repeat
  blocks, submitted by Taylor Downs @ OpenFn.
*/

// Step 1: Create a parent ODK record for each submission
each(
  $.data.data,
  create('ODK__c', {
    Event_Type__c: $.data.event_type,
    Training_Type__c: $.data.training_type,
    Event_Leader_ID__c: $.data.leader,
    Event_Date__c: $.data.date,
    metainstanceid__c: $.data['*meta-instance-id*'],
  })
);

// Step 2: Flatten child records across all submissions, attaching the parent ID
fn(state => {
  const parentId = state.references[state.references.length - 1].id;
  return {
    ...state,
    newAttendees: state.data.data.flatMap(sub =>
      (sub.attendee_new || []).map(a => ({ ...a, parentId }))
    ),
    attendees: state.data.data.flatMap(sub =>
      (sub.attendee || []).map(a => ({ ...a, parentId }))
    ),
  };
});

// Step 3: Create child records for new attendees
each(
  $.newAttendees,
  create('ODK_Child_2__c', {
    ODK__c: $.data.parentId,
    Barcode__c: $.data.new_attendee_id,
    First_Name__c: $.data.new_attendee_first_name,
    Last_Name__c: $.data.new_attendee_last_name,
    Phone_Number__c: $.data.new_attendee_phone,
  })
);

// Step 4: Create child records for existing attendees
each(
  $.attendees,
  create('ODK_Child_1__c', {
    ODK__c: $.data.parentId,
    Barcode__c: $.data.attendee_id,
    Late__c: $.data.late,
  })
);
