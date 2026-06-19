send({
  to_number:
    $.data.Envelope.Body.notifications.Notification.sObject.phone_number__c,
  message_type: 'sms',
  route_id: '',
  content: `Hey there. Your name is ${$.data.Envelope.Body.notifications.Notification.sObject.name__c}.`,
});
