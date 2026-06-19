// Create an SMS record in Salesforce linked to a Contact by phone number
create('SMS__c', {
  text__c: $.data.message_text,
  Contact__r: { Contact_Phone_Number__c: $.data.from_number },
  date__c: $.data.date,
});
