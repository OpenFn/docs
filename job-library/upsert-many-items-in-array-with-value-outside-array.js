steps(
   each(
     join("$.data.form.ID_cards_given_to_vendor[*]", "$.data.form.ID_vendor", "Vendor_Id"),
     upsert("Small_Packet__c", "sp_id__c", fields(
       field("sp_id__c", sourceValue("$.data.ID_cards_given_to_vendor")),
       lookup("Vendor__r", "Badge_Code__c", "$.data.Vendor_Id")
     ))
   )
 )
