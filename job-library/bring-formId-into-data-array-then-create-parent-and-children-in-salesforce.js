each(
  join("$.data.data[*]", "$.data.formId", "formId"),
  create("ODK_Submission__c", fields(
    //bridgetest sandbox record type, comment out when not in use
    field("RecordTypeId", "012J00000005hlb"),
    //prduction record type, comment out when not in use
    //field("RecordType", "XXXXXXXXXXXXXXXX"),
    // or
    //relationship("RecordType", "name", dataValue("recort_type_name")),
    field("Record_Type_Name__c", dataValue("record_type_id")),
    field("ODK_Form_Name__c", dataValue("formId")),
    field("Site_School_ID_Number__c", dataValue("site")),
    field("BT_Staff_ID__c", dataValue("recorded_by")),
    field("Date__c", dataValue("today")),
    field("Head_of_Household__c", dataValue("head_of_household")),
    field("Head_of_Household_Gender__c", dataValue("head_of_household_gender")),
    field("Head_of_Household_age__c", dataValue("head_of_household_age")),
    field("Light_Source__c", dataValue("light_source")),
    field("communication__c", dataValue("communication")),
    field("transport__c", dataValue("transport")),
    field("number_of_children_in_household__c", dataValue("number_of_children")),
    field("school_visits__c", dataValue("school_visits")),
    field("school_visit_reason__c", dataValue("school_visit_reason")),
    field("Village__c", dataValue("village")),
    field("ODK_Key__c", dataValue("*meta-instance-id*"))
  ))
),
each(
  merge(
    dataPath("individual_na[*]"),
    fields(
      field("metaId", dataValue("*meta-instance-id*")),
      field("parentId", lastReferenceValue("id")),
      field("village", dataValue("$data.village"))
    )
  ),
  create("ODK_Submission__c", fields(
    //bridgetest sandbox record type, comment out when not in use
    field("RecordTypeId", "012J00000005hla"),
    //prduction record type, comment out when not in use
    //field("RecordType", "XXXXXXXXXXXXXXXX"),
    // or
    //relationship("RecordType", "name", dataValue("recort_type_name")),
    field("Related_ODK_Submission__c", dataValue("parentId")),
    field("family_name__c", dataValue("given_name")),
    field("school_coded__c", dataValue("school_coded")),
    field("school_type__c", dataValue("school_type")),
    field("gender__c", dataValue("gender")),
    field("Pays_School_Fees__c", dataValue("school_fees_yes_no")),
    field("in_primary_school__c", dataValue("in_primary_school")),
    field("School_Fee_Amount__c", dataValue("school_fees")),
    field("Age__c", dataValue("age")),
    field("surname__c", dataValue("surname")),
    field("out_of_school_reason__c", dataValue("out_of_school_reason")),
    field("class_level__c", dataValue("class_level")),
    field("other_out_of_school_reason__c", dataValue("other_out_of_school_reason")),
    field("Village__c", dataValue("village")),
    // This is a concatenation, adding the unique child ID.
    field("ODK_Key__c", function(state) {
      return (
        dataValue("metaId")(state).concat(
          "(", index()(state), ")"
        )
      )
    })
  ))
)
