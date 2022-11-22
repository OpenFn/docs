---
title: HIV Testing Event Statistics
sidebar_label: HIV Testing Event Statistics
id: HIV-Testing-Event-Statistics-2021-05-03
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

- Name: HIV Testing Event Statistics
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
    field('Name', dataValue('form.event_name')),
    field('CommCare_Case_ID__c', dataValue('form.case.@case_id')),
    field('Tested_Negative_Males_0_9__c', dataValue('form.table_1_testing_results.male_hiv_negative.question2')),
    field('Tested_Negative_Males_10_14__c', dataValue('form.table_1_testing_results.male_hiv_negative.question7')),
    field('Tested_Negative_Males_15_19__c', dataValue('form.table_1_testing_results.male_hiv_negative.question13')),
    field('Tested_Negative_Males_20_24__c', dataValue('form.table_1_testing_results.male_hiv_negative.question18')),
    field('Tested_Negative_Males_25_49__c', dataValue('form.table_1_testing_results.male_hiv_negative.question28')),
    field('Tested_Negative_Males_50__c', dataValue('form.table_1_testing_results.male_hiv_negative.question32')),
    field('Tested_Positive_Males_0_9__c', dataValue('form.table_1_testing_results.question33.question36')),
    field('Tested_Positive_Males_10_14__c', dataValue('form.table_1_testing_results.question33.question41')),
    field('Tested_Positive_Males_15_19__c', dataValue('form.table_1_testing_results.question33.question45')),
    field('Tested_Positive_Males_20_24__c', dataValue('form.table_1_testing_results.question33.question50')),
    field('Tested_Positive_Males_25_49__c', dataValue('form.table_1_testing_results.question33.question56')),
    field('Tested_Positive_Males_50__c', dataValue('form.table_1_testing_results.question33.question60')),
    field('Tested_Negative_Females_0_9__c', dataValue('form.table_1_testing_results.question61.question65')),
    field('Tested_Negative_Females_10_14__c', dataValue('form.table_1_testing_results.question61.question69')),
    field('Tested_Negative_Females_15_19__c', dataValue('form.table_1_testing_results.question61.question73')),
    field('Tested_Negative_Females_20_24__c', dataValue('form.table_1_testing_results.question61.question78')),
    field('Tested_Negative_Females_25_49__c', dataValue('form.table_1_testing_results.question61.question84')),
    field('Tested_Negative_Females_50__c', dataValue('form.table_1_testing_results.question61.question88')),
    field('Tested_Positive_Females_0_9__c', dataValue('form.table_1_testing_results.question89.question92')),
    field('Tested_Positive_Females_10_14__c', dataValue('form.table_1_testing_results.question89.question97')),
    field('Tested_Positive_Females_15_19__c', dataValue('form.table_1_testing_results.question89.question101')),
    field('Tested_Positive_Females_20_24__c', dataValue('form.table_1_testing_results.question89.question106')),
    field('Tested_Positive_Females_25_49__c', dataValue('form.table_1_testing_results.question89.question112')),
    field('Tested_Positive_Females_50__c', dataValue('form.table_1_testing_results.question89.question116')),
    field(
      'Pregnant_Women_Tested_0_9__c',
      dataValue(
        'form.table_3_pregnant_women_tested.enter_the_number_of_pregnant_women_tested_for_each_following_age_group.question120'
      )
    ),
    field(
      'Pregnant_Women_Tested_10_14__c',
      dataValue(
        'form.table_3_pregnant_women_tested.enter_the_number_of_pregnant_women_tested_for_each_following_age_group.question124'
      )
    ),
    field(
      'Pregnant_Women_Tested_15_19__c',
      dataValue(
        'form.table_3_pregnant_women_tested.enter_the_number_of_pregnant_women_tested_for_each_following_age_group.question129'
      )
    ),
    field(
      'Pregnant_Women_Tested_20_24__c',
      dataValue(
        'form.table_3_pregnant_women_tested.enter_the_number_of_pregnant_women_tested_for_each_following_age_group.question134'
      )
    ),
    field(
      'Pregnant_Women_Tested_25_49__c',
      dataValue(
        'form.table_3_pregnant_women_tested.enter_the_number_of_pregnant_women_tested_for_each_following_age_group.question140'
      )
    ),
    field(
      'Pregnant_Women_Tested_50__c',
      dataValue(
        'form.table_3_pregnant_women_tested.enter_the_number_of_pregnant_women_tested_for_each_following_age_group.question144'
      )
    ),
    //field(
    //  'Total_Pregnant_Women_Tested__c',
    //  dataValue(
    //    'form.table_3_pregnant_women_tested.enter_the_number_of_pregnant_women_tested_for_each_following_age_group.total_tested_pregnant'
    //  )
    //),
    field(
      'First_Time_Females_0_9__c',
      state =>
        dataValue('form.table_4_first_time_testers.question61.question65')(state) +
        dataValue('form.table_4_first_time_testers.question89.question92')(state)
    ),
    field(
      'First_Time_Females_10_14__c',
      state =>
        dataValue('form.table_4_first_time_testers.question61.question69')(state) +
        dataValue('form.table_4_first_time_testers.question89.question97')(state)
    ),
    field(
      'First_Time_Females_15_19__c',
      state =>
        dataValue('form.table_4_first_time_testers.question61.question73')(state) +
        dataValue('form.table_4_first_time_testers.question89.question101')(state)
    ),
    field(
      'First_Time_Females_20_24__c',
      state =>
        dataValue('form.table_4_first_time_testers.question61.question78')(state) +
        dataValue('form.table_4_first_time_testers.question89.question106')(state)
    ),
    field(
      'First_Time_Females_25_49__c',
      state =>
        dataValue('form.table_4_first_time_testers.question61.question84')(state) +
        dataValue('form.table_4_first_time_testers.question89.question112')(state)
    ),
    field(
      'First_Time_Females_50__c',
      state =>
        dataValue('form.table_4_first_time_testers.question61.question88')(state) +
        dataValue('form.table_4_first_time_testers.question89.question116')(state)
    ),
    field(
      'First_Time_Males_0_9__c',
      state =>
        dataValue('form.table_4_first_time_testers.male_hiv_negative.question2')(state) +
        dataValue('form.table_4_first_time_testers.question33.question36')(state)
    ),
    field(
      'First_Time_Males_10_14__c',
      state =>
        dataValue('form.table_4_first_time_testers.male_hiv_negative.question7')(state) +
        dataValue('form.table_4_first_time_testers.question33.question41')(state)
    ),
    field(
      'First_Time_Males_15_19__c',
      state =>
        dataValue('form.table_4_first_time_testers.male_hiv_negative.question13')(state) +
        dataValue('form.table_4_first_time_testers.question33.question45')(state)
    ),
    field(
      'First_Time_Males_20_24__c',
      state =>
        dataValue('form.table_4_first_time_testers.male_hiv_negative.question18')(state) +
        dataValue('form.table_4_first_time_testers.question33.question50')(state)
    ),
    field(
      'First_Time_Males_25_49__c',
      state =>
        dataValue('form.table_4_first_time_testers.male_hiv_negative.question28')(state) +
        dataValue('form.table_4_first_time_testers.question33.question56')(state)
    ),
    field(
      'First_Time_Males_50__c',
      state =>
        dataValue('form.table_4_first_time_testers.male_hiv_negative.question32')(state) +
        dataValue('form.table_4_first_time_testers.question33.question60')(state)
    ),
    field(
      'of_Males_Referred_to_Sexual_Abuse__c',
      dataValue(
        'form.table5_referrals.enter_the_number_of_men_and_women_referred_for_each_referral_tye_and_the_or.abuseviolence_referral'
      )
    ),
    field(
      'of_Males_Referred_to_Family_Referral__c',
      dataValue(
        'form.table5_referrals.enter_the_number_of_men_and_women_referred_for_each_referral_tye_and_the_or.family_planning_referral'
      )
    ),
    field(
      'of_Males_Referred_for_HIV_Positive__c',
      dataValue(
        'form.table5_referrals.enter_the_number_of_men_and_women_referred_for_each_referral_tye_and_the_or.hiv_positive_referral'
      )
    ),
    field(
      'of_Males_Referred_to_MMC_Referral__c',
      dataValue(
        'form.table5_referrals.enter_the_number_of_men_and_women_referred_for_each_referral_tye_and_the_or.medical_male_circumcision_referral'
      )
    ),
    field(
      'of_Males_Referred_to_STI__c',
      dataValue(
        'form.table5_referrals.enter_the_number_of_men_and_women_referred_for_each_referral_tye_and_the_or.sexually_transmitted_infection_sti_referral'
      )
    ),
    field(
      'of_Males_Referred_to_Tuberculosis__c',
      dataValue(
        'form.table5_referrals.enter_the_number_of_men_and_women_referred_for_each_referral_tye_and_the_or.tuberculosis_tb_referral'
      )
    ),
    field(
      'of_Females_Referred_to_Sexual_Abuse__c',
      dataValue('form.table5_referrals.women_referred_number.abuseviolence_referral_women')
    ),
    field(
      'of_Females_Referred_to_Antenatal_Care__c',
      dataValue('form.table5_referrals.women_referred_number.antenatal_care_anc_referral_women')
    ),
    field(
      'of_Females_Referred_to_Family_Referral__c',
      dataValue('form.table5_referrals.women_referred_number.family_planning_referral_women')
    ),
    field(
      'of_Females_Referred_for_HIV_Positive__c',
      dataValue('form.table5_referrals.women_referred_number.hiv_positive_referral_women')
    ),
    field(
      'of_Females_Referred_to_PMTCT__c',
      dataValue('form.table5_referrals.women_referred_number.prevention_of_mother-to-child_transmission_women')
    ),
    field(
      'of_Females_Referred_to_STI__c',
      dataValue('form.table5_referrals.women_referred_number.sexually_transmitted_infection_sti_referral_women')
    ),
    field(
      'of_Females_Referred_to_Tuberculosis__c',
      dataValue('form.table5_referrals.women_referred_number.tuberculosis_tb_referral_women')
    ),
    
    field('Community_Members__c', dataValue('form.table_2_tested_profile.enter_the_number_tested_for_each_following_profile.community_members')),
    field('GRS_Coaches__c', dataValue('form.table_2_tested_profile.enter_the_number_tested_for_each_following_profile.skillz_coaches')),
    field('GRS_Participants__c', dataValue('form.table_2_tested_profile.enter_the_number_tested_for_each_following_profile.skillz_participants')),
    field('GRS_Staff__c', dataValue('form.table_2_tested_profile.enter_the_number_tested_for_each_following_profile.staff')),
    //field('Total_Tested__c', dataValue('form.table_2_tested_profile.enter_the_number_tested_for_each_following_profile.total_tested')),
  )
);

```