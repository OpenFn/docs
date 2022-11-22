---
title: Q4 2022] Upsert Supervision - Accompaniment
sidebar_label: Q4 2022] Upsert Supervision - Accompaniment
id: Q4-2022-Upsert-Supervision-Accompaniment-2022-08-22
keywords:
  - library
  - job
  - expression
  - salesforce
  - dataValue
  - field
  - fields
  - relationship
  - upsert
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Q4 2022] Upsert Supervision - Accompaniment
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-salesforce)
- Created 3 months ago
- Updated about 1 month ago
- Score: <b>47</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataValue`, `field`, `fields`, `relationship`, `upsert`

## Expression

```js
//Job to integrate CommCare 'Accompaniement' form from the Supervision App
fn(state => {
state.handleMultiSelect = function (state, multiField) {
    return multiField
      ? multiField
          .replace(/ /g, ';')
      : '';
  };
  
    state.cleanChoice = function (state, choice) {
    if (choice) {
      return choice.charAt(0).toUpperCase() + choice.slice(1).replace('_', ' ');
    } else {
      return '';
    }
  }

   return {
    ...state
  };
  
});




upsert(
  'Supervision_Forms__c',
  'CommCare_Form_ID__c',
  fields(
    field('CommCare_Form_ID__c', dataValue('id')),
    relationship('RecordType', 'Name', 'Accompanient Form'),
    field('Supervisor_Name__c', dataValue('form.prologue.supervisor_sfid')),
    field('CHW_Name__c', dataValue('form.prologue.chw_sfid')),
      relationship(
      'Village__r',
      'CommCare_User_ID__c',
      dataValue('form.prologue.chw_village')
    ),
    relationship('Household_Code__r', 
    'Name',
    dataValue('form.prologue.hh_code')
    ),
    field('Form_Date__c',dataValue('form.Date')),
    field('Fertile_Women_in_Household__c',dataValue('form.WRA_check')),
    field('CHW_Asked_About_Family_Planning__c',dataValue('form.women_of_reproductive_age.fp_check')),
    field('Contraception_Distributed__c', state => {
      var choice = dataValue(
        'form.women_of_reproductive_age.fp_resources_check'
      )(state);
      return state.handleMultiSelect(state, choice);
    }),
    
    
    field('Household_members_aware_of_CHW_SRH__c',dataValue('form.women_of_reproductive_age.srh_awareness_check')),
    field('Pregnant_Women_in_HH__c',dataValue('form.pregnancy_check')),
    field('CHW_Asked_About_ANC_Visits__c',dataValue('form.pregnant_women.anc_check')),
    field('CHW_Counseled_On_Value_of_ANC_Visits__c',dataValue('form.pregnant_women.anc_counsel_check')),
    field('CHW_Read_Each_Pregnancy_Danger_Sign__c',dataValue('form.pregnant_women.danger_sign_check')),
    field('Household_aware_of_CHW_MCH_Services__c',dataValue('form.pregnant_women.pregnancy_support_awareness_check')),
    field('Pregnant_Woman_Delivered__c',dataValue('form.pregnant_women.delivery_check')),
    field('Used_MCH_Booklet__c',dataValue('form.delivery.vaccination_check')),
    field('Counsel_on_vaccination_schedule__c',dataValue('form.delivery.vaccination_counsel_check')),
    field('Counselled_on_Exclusive_Breastfeeding__c',dataValue('form.delivery.ebf_check')),
    field('Children_Under_5_in_Household__c',dataValue('form.cu5_check')),
    field('All_children_under_5_registered__c',dataValue('form.children_under_5.cu5_enrollment_check')),
    field('MUAC_taken_for_all_children__c',dataValue('form.children_under_5.muac_check')),
    field('Measured_MUAC_circumference_properly__c',dataValue('form.children_under_5.muac_method_check')),
    //     field('Measured_MUAC_circumference_properly__c', state => {
    //   var choice = dataValue(
    //     'form.children_under_5.muac_method_check'
    //   )(state);
    //   return state.cleanChoice(state, choice);
    // }),
    field('HIV_Members_in_the_Household__c',dataValue('form.hiv_check')),
    field('Recorded_HIV_Status_Information__c',dataValue('form.hiv_clients.hiv_info_check')),
    field('Counselled_on_ART_Adherence_HIV_Services__c',dataValue('form.hiv_clients.hiv_counsel_check')),
    field('Sick_Household_Members_at_Visit__c',dataValue('form.illness_check')),
    field('Household_member_reported_fever__c',dataValue('form.illness_referrals.fever_check')),
    field('Conducted_malaria_home_test__c', dataValue('form.illness_referrals.malaria_test_check')),
    field('Malaria_test_protocol_followed__c',dataValue('form.illness_referrals.malaria_test_method_check')),
    field('Sick_person_referred__c',dataValue('form.illness_referrals.referral_accompaniment_check')),
    field('Referral_discussed_with_family__c',dataValue('form.illness_referrals.referral_followup_check')),
    field('Distributed_treatments_medications__c',dataValue('form.distribution_check')),
    field('Stock_is_full__c',dataValue('form.stocks_check')),
    field('Missing_Stock__c', state => {
      var choice = dataValue(
        'form.missing_stocks_details'
      )(state);
      return state.handleMultiSelect(state, choice);
    }),
    field('Other_Missing_Stock__c',dataValue('form.missing_stocks_details_other')),
    field('Demonstrated_active_listening__c',dataValue('form.chw_behavior.active_listening_check')),
    field('Acted_with_respect_courtesy__c',dataValue('form.chw_behavior.respect_check')),
    field('CHW_Rating__c',dataValue('form.chw_behavior.interview_technique_check')),
    field('Tablet_used__c',dataValue('form.chw_behavior.tablet_use_check')),
    field('Tablet_used_effectively__c',dataValue('form.chw_behavior.tablet_competency_check')),
    field('Tablet_problem_observed__c', state => {
      var choice = dataValue(
        'form.chw_behavior.tablet_issues'
      )(state);
      return state.handleMultiSelect(state, choice);
    }),
    field('Visit_Length_Mins__c',dataValue('form.visit_length')),
    field('Accompanient_components_covered__c', state => {
        var choice = dataValue(
          'form.feedback_type'
           )(state);
      return state.handleMultiSelect(state, choice);
    }), 
    field('Other_comments__c',dataValue('form.supervisor_comments')),
        field('Contraception_Distributed__c', state => {
      var choice = dataValue(
        'form.women_of_reproductive_age.fp_resources_check'
      )(state);
      return state.handleMultiSelect(state, choice);
    }),
     )
);  
```