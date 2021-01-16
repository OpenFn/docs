---
title: Alter state before other operations
---

```js
// Here, we make sure CommCare gives us an array to use in each(merge(...), ...)
alterState((state) => {
  const idCards = state.data.form.ID_cards_given_to_vendor;
  if (!Array.isArray(idCards)) {
    state.data.form.ID_cards_given_to_vendor = [idCards];
  }
  return state;
});

// Now state has been changed, and we carry on...
each(
  merge(dataPath("form.ID_cards_given_to_vendor[*]"), fields(
    field("Vendor_Id", dataValue("form.ID_vendor")),
    field("form_finished_time", dataValue("form.meta.timeEnd"))
  )),
  upsert("Small_Packet__c", "sp_id__c", fields(
     field("sp_id__c", dataValue("ID_cards_given_to_vendor")),
     relationship("Vendor__r", "Badge_Code__c", dataValue("Vendor_Id")),
     field("Small_Packet_Distribution_Date__c", dataValue("form_finished_time"))
  ))
);
```