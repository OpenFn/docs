---
title: Q4 2022] Upsert Supervision - Household Spot Check
sidebar_label: Q4 2022] Upsert Supervision - Household Spot Check
id: Q4-2022-Upsert-Supervision-Household-Spot-Check-2022-08-24
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

- Name: Q4 2022] Upsert Supervision - Household Spot Check
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-salesforce)
- Created 3 months ago
- Updated about 1 month ago
- Score: <b>43</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataValue`, `field`, `fields`, `relationship`, `upsert`

## Expression

```js
//Job to integrate CommCare 'Household Spotcheck' form from the Supervision App
fn(state => {
state.handleMultiSelect = function (state, multiField) {
    return multiField
      ? multiField
          .replace(/ /g, ';')
      : '';
  };
   return {
    ...state
  };
});


upsert(
  'Supervision_Forms__c',
  'CommCare_Form_ID__c',
  fields(
    field('CommCare_Form_ID__c', dataValue('id')),
    relationship('RecordType', 'Name', 'Household Spotcheck Form'),
      relationship('Household_Code__r', 
    'Name',
    dataValue('form.prologue.hh_code')
    ),
    field('Supervisor_Name__c', dataValue('form.prologue.spot_checker_sfid')),
    field('CHW_Name__c', dataValue('form.prologue.chw_sfid')),
      relationship(
      'Village__r',
      'CommCare_User_ID__c',
      dataValue('form.prologue.village')
    ),
    relationship('Catchment__r', 
    'Name',
    dataValue('form.prologue.catchment')
    ),
    field('Form_Date__c',dataValue('form.Date')),
    field('CHW_Name_Identified__c',dataValue('form.chw_awareness.chw_name_reported')),
    field('Knows_where_CHW_lives__c',dataValue('form.chw_awareness.chw_location_confirmation')),
    field('Knows_CHW_contact_number__c',dataValue('form.chw_awareness.chw_contact_number')),
    field('CHW_paid_for_services__c',dataValue('form.chw_awareness.service_fee')),
    field('CHW_Visit_Frequency__c',dataValue('form.chw_awareness.chw_visit_frequency')),
    field('Household_member_reported_fever__c',dataValue('form.iccm.fever_management')),
    field('details_on_chw_conduct__c',dataValue('form.chw_behavior.chw_conduct_detail')),
    field('Tablet_used__c',dataValue('form.chw_behavior.tablet_use_check')),
    field('Other_Recommendations__c',dataValue('form.community_comments.community_recommendations_detail')),
    field('Other_comments__c',dataValue('form.community_comments.do_you_have_any_other_comments_at_this_time')),
    field('CHW_tested_treated_child_for_malaria__c',dataValue('form.iccm.malaria_management')),
    field('If_so_when_Within_the__c',dataValue('form.iccm.malaria_management_timeline')),
    field('CHW_ever_managed_your_child_for_diarrhea__c',dataValue('form.iccm.diarrhea_management')),
    field('CHW_measured_child_s_arm_past_90_days__c',dataValue('form.iccm.muac_check')),
    field('CHW_ever_managed_child_for__c',dataValue('form.iccm.pneumonia_management')),
    field('rate_the_quality_of_services__c',dataValue('form.iccm.chw_service_quality')),
    field('CHW_revisit__c',dataValue('form.referrals_and_follow-up_visits.follow_up_check_1')),
    field('follow_up_within_3_days_of_initial_visit__c',dataValue('form.referrals_and_follow-up_visits.follow_up_check_2')),
    field('does_CHW_revisit_child_for_follow_up__c',dataValue('form.referrals_and_follow-up_visits.follow_up_check_3')),
    field('when_child_is_sick__c',dataValue('form.referrals_and_follow-up_visits.follow_up_check_4')),
    field('CHW_conduct__c',dataValue('form.chw_behavior.chw_conduct_check')),
    field('comfortable_sharing_sensitive_info__c',dataValue('form.chw_behavior.sensitive_info_check')),
    field('Please_explain__c',dataValue('form.chw_behavior.sensitive_info_detail')),
    field('Does_your_CHW_listen_to_your_perspective__c',dataValue('form.chw_behavior.listening_check')),
    field('ever_experienced_a_problem_with_CHW__c', dataValue('form.chw_behavior.problem_check')),
    field('describe_problem_experienced_with_CHW__c',dataValue('form.chw_behavior.problem_detail')),
    field('any_recommendations_for_impr__c',dataValue('form.community_comments.community_recommendations')),
    field('How_was_the_fever_managed__c', state => {
      var choice = dataValue(
        'form.iccm.fever_management_detail'
      )(state);
      return state.handleMultiSelect(state, choice);
    }),
    field('How_was_the_malaria_managed__c', state => {
      var choice = dataValue(
        'form.iccm.malaria_management_detail'
      )(state);
      return state.handleMultiSelect(state, choice);
    }),
    field('How_did_she_he_manage_the_diarrhea__c', state => {
      var choice = dataValue(
        'form.iccm.malaria_management_detail'
      )(state);
      return state.handleMultiSelect(state, choice);
    }),
     field('How_did_she_he_manage_the_pneumonia__c', state => {
      var choice = dataValue(
        'form.iccm.pneumonia_managemnt_detail'
      )(state);
      return state.handleMultiSelect(state, choice);
    }),
     field('COHORT_ONE_Maternal_and_Child_Health__c', state => {
      var choice = dataValue(
        'form.chw_service_provision.cohort_one'
      )(state);
      return state.handleMultiSelect(state, choice);
    }),
     field('COHORT_TWO_Childcare__c', state => {
      var choice = dataValue(
        'form.chw_service_provision.cohort_two'
      )(state);
      return state.handleMultiSelect(state, choice);
    }),
     field('COHORT_THREE_WASH_and_Nutrition__c', state => {
      var choice = dataValue(
        'form.chw_service_provision.cohort_three'
      )(state);
      return state.handleMultiSelect(state, choice);
    }),
     field('COHORT_FOUR_FIVE_Sexual_Reproductive__c', state => {
      var choice = dataValue(
        'form.chw_service_provision.cohort_four_-_five'
      )(state);
      return state.handleMultiSelect(state, choice);
    }),
  )
);  
```