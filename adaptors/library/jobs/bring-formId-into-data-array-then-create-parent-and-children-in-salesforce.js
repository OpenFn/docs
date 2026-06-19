// Merge a top-level field into each array item using fn() + array.map(),
// then create parent and child records in Salesforce.

// Step 1: Inject formId into each submission item
fn(state => ({
  ...state,
  data: {
    ...state.data,
    data: state.data.data.map(item => ({ ...item, formId: state.data.formId })),
  },
}));

// Step 2: Create a parent ODK submission record for each item
each(
  $.data.data,
  create('ODK_Submission__c', {
    RecordTypeId: '012J00000005hlb',
    Record_Type_Name__c: $.data.record_type_id,
    ODK_Form_Name__c: $.data.formId,
    Site_School_ID_Number__c: $.data.site,
    BT_Staff_ID__c: $.data.recorded_by,
    Date__c: $.data.today,
    Head_of_Household__c: $.data.head_of_household,
    Head_of_Household_Gender__c: $.data.head_of_household_gender,
    Head_of_Household_age__c: $.data.head_of_household_age,
    Light_Source__c: $.data.light_source,
    communication__c: $.data.communication,
    transport__c: $.data.transport,
    number_of_children_in_household__c: $.data.number_of_children,
    school_visits__c: $.data.school_visits,
    school_visit_reason__c: $.data.school_visit_reason,
    Village__c: $.data.village,
    ODK_Key__c: $.data['*meta-instance-id*'],
  })
);

// Step 3: Flatten child individual records, attaching the parent Salesforce ID
fn(state => {
  const parentId = state.references[state.references.length - 1].id;
  return {
    ...state,
    individuals: state.data.data.flatMap((sub, _i) =>
      (sub.individual_na || []).map((child, j) => ({
        ...child,
        metaId: sub['*meta-instance-id*'],
        parentId,
        village: sub.village,
        childIndex: j,
      }))
    ),
  };
});

// Step 4: Create child individual records
each(
  $.individuals,
  create('ODK_Submission__c', {
    RecordTypeId: '012J00000005hla',
    Related_ODK_Submission__c: $.data.parentId,
    family_name__c: $.data.given_name,
    school_coded__c: $.data.school_coded,
    school_type__c: $.data.school_type,
    gender__c: $.data.gender,
    Pays_School_Fees__c: $.data.school_fees_yes_no,
    in_primary_school__c: $.data.in_primary_school,
    School_Fee_Amount__c: $.data.school_fees,
    Age__c: $.data.age,
    surname__c: $.data.surname,
    out_of_school_reason__c: $.data.out_of_school_reason,
    class_level__c: $.data.class_level,
    other_out_of_school_reason__c: $.data.other_out_of_school_reason,
    Village__c: $.data.village,
    // Concatenate unique child ID using parent meta ID and child index
    ODK_Key__c: `${$.data.metaId}(${$.data.childIndex})`,
  })
);
