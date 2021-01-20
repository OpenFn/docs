```js
create('Patient__c', fields(
  field('Name', 'John Doe'),
  field('Age__c', state.data.age)
));

// NOTE: After inserts, Salesforce will return an sfID and it will be kept in
// references. I'm using alterState here simply to log the output. It's not
// necessary.
alterState(state => {
  console.log(state.references);
  // References is an array:
  // references: [ { id: 'a0J0B00000QY9TbUAL', success: true, errors: [] } ],
});

//NOTE: We've even got some helper functions for accessing that last refernce ID.
create('Visit__c', fields(
  field('Date__c', state.data.date)
  field('Patient__c', lastReferenceValue('id'))
  // Or write it like this...
  // field(Patient__c, state.references[0].id)
));

// NOTE: You can't work directly with sfIDs on upserts, but you don't need to!
upsert('Patient__c', 'My_Ext_ID__c', fields(
  field('Name', 'John Doe'),
  field('Age__c', state.data.age),
  field('My_Ext_ID__c', state.data.patientNumber)
  // THIS unique ID is how you work with the record in SF.
));

create('Visit__c', fields(
  field('Date__c', state.data.date),
  // Related to the patient you just upserted...
  relationship('Patient__r', 'My_Ext_ID__c', state.data.patientNumber)
));
```
