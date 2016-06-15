steps(
   each(
      merge(dataPath("form.ID_cards_given_to_vendor[*]"), fields(
        field("Vendor_Id", dataValue("form.ID_vendor")),
        field("form_finished_time", dataValue("form.meta.timeEnd"))
      )),
      upsert("Small_Packet__c", "sp_id__c", fields(
         field("sp_id__c", sourceValue("$.data.ID_cards_given_to_vendor")),
         lookup("Vendor__r", "Badge_Code__c", "$.data.Vendor_Id"),
         field("Small_Packet_Distribution_Date__c", sourceValue("$.data.form_finished_time"))
      ))
   )
)
