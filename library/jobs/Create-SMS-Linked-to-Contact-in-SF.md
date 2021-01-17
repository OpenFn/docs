```js
create("SMS__c", fields(
  field("text__c", dataValue("message_text")),
  relationship("Contact__r", "Contact_Phone_Number__c", dataValue("from_number")),
  field("date__c", dataValue("date"))
)
```
