/*
  Create many records from an ODK submission, moving in and out of repeat
  blocks, submitted by Taylor Downs @ OpenFn.
*/

beta.each(
  "$.data.data[*]",
  create("ODK__c", fields(
      field("Event_Type__c", dataValue("event_type")),
      field("Training_Type__c", dataValue("training_type")),
      field("Event_Leader_ID__c", dataValue("leader")),
      field("Event_Date__c", dataValue("date")),
      field("metainstanceid__c", dataValue("*meta-instance-id*"))
 ))
),

beta.each(
  merge(dataPath("data[*].attendee_new[*]"), fields(
      field("parentId", lastReferenceValue("id"))
    )),
  create("ODK_Child_2__c", fields(
    field("ODK__c", dataValue("parentId")),
    field("Barcode__c", dataValue("new_attendee_id")),
    field("First_Name__c", dataValue("new_attendee_first_name")),
    field("Last_Name__c", dataValue("new_attendee_last_name")),
    field("Phone_Number__c", dataValue("new_attendee_phone"))
  ))
),

beta.each(
  merge(dataPath("data[*].attendee[*]"), fields(
    field("parentId", function(state){return state.references[state.references.length-1].id}) //gets the sfID of the 1st item created
  )),
  create("ODK_Child_1__c", fields(
    field("ODK__c", dataValue("parentId")),
    field("Barcode__c", dataValue("attendee_id")),
    field("Late__c", dataValue("late"))
  ))
)
