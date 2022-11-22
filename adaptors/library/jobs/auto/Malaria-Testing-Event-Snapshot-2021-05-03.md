---
title: Malaria Testing Event Snapshot
sidebar_label: Malaria Testing Event Snapshot
id: Malaria-Testing-Event-Snapshot-2021-05-03
keywords:
  - library
  - job
  - expression
  - salesforce
  - dataValue
  - field
  - fields
  - upsert
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Malaria Testing Event Snapshot
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`v2.7.4`](https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4)
- Created over 1 year ago
- Updated 7 months ago
- Score: <b>18</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataValue`, `field`, `fields`, `upsert`

## Expression

```js
// push to production
upsert(
  'Event__c',
  'CommCare_Case_ID__c',
  fields(
    field('Name', dataValue('form.hidden_properties.event_name')),
    field('Date__c', dataValue('form.basic_information.event_details.event_date')),
    field('Testing_Partner_Contact_Persion__c', dataValue('form.event_information.testing_partner__contact_people')),
    field('of_People_in_Attendance_Testing_Events__c', dataValue('form.event_information.number_in_attendance')),
    field('Coordinator__c', dataValue('form.event_information.event_coordinator')),
    field(
      'Did_an_organization_discuss_Malaria__c',
      dataValue('form.malaria_treatment_prevention.info_malaria_treatment')
    ),
    field('What_organization_s_What_topic_s__c', dataValue('form.malaria_treatment_prevention.which_organizations')),
    field(
      'How_was_the_information_presented__c',
      dataValue('form.malaria_treatment_prevention.how_was_info_presented')
    ),
    //field('of_Participants__c', dataValue('form.malaria_treatment_prevention.how_many_total_participants')),
    field(
      'Did_other_organizations_conduct__c',
      dataValue("form.skills_activities['did_other_organisations_eg_youth-friendly_clinic_ministry_of_health_etc_con']")
    ),
    field(
      'What_organization_s_What_topic_s__c',
      dataValue('form.skills_activities.what_organisations_delivered_a_session_and_what_was_the_topic_of_the_sessio')
    ),
    field('Facilitator_1__c', dataValue('form.skills_activities.facilitators')),
    field(
      'How_many_people_attended_the_sessions__c',
      dataValue('form.skills_activities.how_many_people_attended_the_sessions_in_total')
    ),
    field(
      'How_many_people_attended_the_sessions_oh__c',
      dataValue('form.skills_activities.how_many_people_attended_the_sessions_in_total')
    ),
    field(
      'X2_Main_challenges__c',
      dataValue('form.bed_net_distribution.please_describe_highlights_key_challenges_and_main_lessons_learned_from_thi')
    ),
    field(
      'X1_Main_successes__c',
      dataValue('form.bed_net_distribution.please_describe_highlights_key_challenges_and_main_lessons_learned_from_thi')
    ),
    field(
      'Number_of_Bed_Nets_Distributed__c',
      dataValue('form.bed_net_distribution.total_number_of_bed_nets_distributed')
    ),
    //field('Site__c', dataValue('form.event_information.site')),
    //field('Venue__c', dataValue('form.event_information.venue')),
    //field('Curriculum__c', dataValue('form.event_information.curriculum')),
    field('X1_0_Intervention_Name__c', dataValue('form.event_information.intervention')),
    //field('Coach_1__c', dataValue('form.hidden_properties.coach_name')),
    field('CommCare_Case_ID__c', dataValue('form.case.@case_id')),
    field('Date__c', dataValue('form.event_information.event_date')),
    field('Testing_Partner_Contact_Persion__c', dataValue('form.event_information.testing_partner__contact_people')),
    field('of_People_in_Attendance_Testing_Events__c', dataValue('form.event_information.number_in_attendance')),
    field('Coordinator__c', dataValue('form.event_information.event_coordinator'))
  )
);

```