// Using upsertIf and createIf we can conditionally create or update records if
// some condition in the source data is met.

upsertIf(
  $.data.form.legal.allowedToSync,
  'Patient__c',
  'Patient_ID__c',
  {
    Name__c: $.data.form.name,
    Patient_ID__c: $.data.form.identification.govId,
  }
);

createIf(
  $.data.form.completedVisit === 'yes',
  'Visit__c',
  {
    Date__c: $.data.form.visit.visit_date,
    Type__c: 'checkup',
    Patient__r: { Patient_ID__c: $.data.form.identification.govId },
  }
);
