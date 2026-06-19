create('Patient__c', {
  Name: 'John Doe',
  Age__c: $.data.age,
});

// NOTE: After inserts, Salesforce returns the new record's sfID in state.references.
fn(state => {
  console.log(state.references);
  // references: [ { id: 'a0J0B00000QY9TbUAL', success: true, errors: [] } ]
  return state;
});

// Access the sfID from the previous insert
create('Visit__c', {
  Date__c: $.data.date,
  Patient__c: $.references[0].id,
});

// NOTE: You can't work directly with sfIDs on upserts — use an external ID instead.
upsert('Patient__c', 'My_Ext_ID__c', {
  Name: 'John Doe',
  Age__c: $.data.age,
  My_Ext_ID__c: $.data.patientNumber,
});

// Relate to the patient you just upserted via their external ID
create('Visit__c', {
  Date__c: $.data.date,
  Patient__r: { My_Ext_ID__c: $.data.patientNumber },
});
