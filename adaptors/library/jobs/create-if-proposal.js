// Using upsertIf and createIf we can conditionally create or update records if
// some condition in the source data is met.

upsertIf(
  // a path which resolves to true/false
  dataValue('form.legal.allowedToSync'), 
  'Patient__c',
  'Patient_ID__c',
  fields(
    field('Name__c', dataValue('form.name')),
    field('Patient_ID__c', dataValue('form.identification.govId'))
  )
);

createIf(
  // or a function which returns true/false
  state => state.data.form.completedVisit === 'yes',
  'Visit__c',
  fields(
    field('Date__c', dataValue('form.visit.visit_date')),
    field('Type__c', 'checkup'),
    relationship(
      'Patient__r',
      'Patient_ID__c',
      dataValue('form.identification.govId')
    )
  )
);
