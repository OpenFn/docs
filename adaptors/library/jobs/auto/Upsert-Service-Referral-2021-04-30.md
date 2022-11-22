---
title: Upsert Service Referral
sidebar_label: Upsert Service Referral
id: Upsert-Service-Referral-2021-04-30
keywords:
  - library
  - job
  - expression
  - salesforce
  - alterState
  - dataValue
  - field
  - fields
  - relationship
  - upsert
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Upsert Service Referral
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`v2.7.4`](https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4)
- Created over 1 year ago
- Updated 7 months ago
- Score: <b>18</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`alterState`, `dataValue`, `field`, `fields`, `relationship`, `upsert`

## Expression

```js
alterState(state => {
  function checked(key, str) {
    if (!str) return false;
    return str.split(' ').indexOf(key) >= 0;
  }

  state.helperFunctions = { checked };

  function capitalizeFirstLetter(str) {
    if (!str) return;
    let new_str = str.toString().toLowerCase();
    return new_str.slice(0, 1).toUpperCase() + new_str.slice(1);
  }

  function transform(value) {
    if (!value) return;
    switch (value.toString().trim()) {
      case 'Daughterson':
        return 'Daughter/Son';
      case 'Other_specify':
        return 'Other';
      case 'Single_never_married':
        return 'Single/Never Married';
      case 'Divorced__separated':
        return 'Divorced/separated';
      default:
        return value;
    }
  }

  state.data.form.parent__guardian_information.relationship_to_client = transform(
    capitalizeFirstLetter(state.data.form.parent__guardian_information.relationship_to_client)
  );

  return state;
});

alterState(state => {
  if (!state.data.form.subcase_0) {
    console.log('No referral services to upsert');
    return state;
  }
  return upsert(
    'NewReferral__c',
    'CommCare_Ext_ID__c',
    fields(
      //  field('Enter_Partner_s_Name__c', dataValue('form.referral_information.institution_referred_to')),
      //  field('Type_of_Referral__c', dataValue('form.referral_information.type_of_referral')),
      field('Participants_Full_Name__c', dataValue('form.client_registration.participant_full_name')),
      //field('Parent_Guardian_Contact_Number__c', dataValue('form.client_registration.mobile_number')),
      relationship('Event__r', 'CommCare_Case_ID__c', dataValue('form.event_name')),
      field('CommCare_Ext_ID__c', state => {
        var subid = state.data.form.subcase_0;
        return subid && subid !== '' ? state.data.form.subcase_0.case['@case_id'] : dataValue('id')(state); //Set external id to 'service' subcase if available, otherwise use formid
      }),
      //field('Venue__c', dataValue('form.client_registration.school_name')),
      //field('Grade__c', dataValue('form.client_registration.grade')),
      //field('Class__c', dataValue('form.client_registration.class')),
      field('Parent_Guardian_Full_Name__c', dataValue('form.parent__guardian_information.parent__guardian_full_name')),
      field('Relationship_To_Client__c', dataValue('form.parent__guardian_information.relationship_to_client')),
      field('Parent_Guardian_Contact_Number__c', dataValue('form.parent__guardian_information.contact_number')),
      field('Institution_Referred_To_1__c', dataValue('form.referral_information.institution_referred_to')),
      field('Institution_Referred_To_2__c', dataValue('form.referral_information.copy-1-of-institution_referred_to')),
      field('Institution_Referred_To_3__c', dataValue('form.referral_information.copy-2-of-institution_referred_to')),
      field('Service_Provider_Name__c', dataValue('form.hidden_props.coach_name')),
      field('HIV_Testing_Services_GRS_Staff__c', state =>
        state.helperFunctions.checked(
          'hiv_testing_services',
          dataValue('form.referral_services.hiv_support__care.check_the_services_that_client_was_referred_to')(state)
        )
      ),
      field('VMMC_GRS_Staff__c', state =>
        state.helperFunctions.checked(
          'vmmc',
          dataValue('form.referral_services.hiv_support__care.check_the_services_that_client_was_referred_to')(state)
        )
      ),
      field('TB_Screening_GRS_Staff__c', state =>
        state.helperFunctions.checked(
          'tb_screening_treatment_adherence',
          dataValue('form.referral_services.hiv_support__care.check_the_services_that_client_was_referred_to')(state)
        )
      ),
      field('Post_Exposure_Prophylaxis_GRS_Staff__c', state =>
        state.helperFunctions.checked(
          'post_exposure_prophylaxis',
          dataValue('form.referral_services.hiv_support__care.check_the_services_that_client_was_referred_to')(state)
        )
      ),
      field('PrEP_GRS_Staff__c', state =>
        state.helperFunctions.checked(
          'prep',
          dataValue('form.referral_services.hiv_support__care.check_the_services_that_client_was_referred_to')(state)
        )
      ),
      field('HIV_STI_PREVENTION_Other_GRS_Staff__c', state =>
        state.helperFunctions.checked(
          'other',
          dataValue('form.referral_services.hiv_support__care.check_the_services_that_client_was_referred_to')(state)
        )
      ),
      field('HIV_Other__c', dataValue('form.referral_services.hiv_support__care.please_specify')),
      field('ART_Initiation_GRS_Staff__c', state =>
        state.helperFunctions.checked(
          'art_initiationenrollment',
          dataValue('form.referral_services.art_support_services.check_the_services_that_client_was_referred_to')(state)
        )
      ),
      field('PMTCT_GRS_Staff__c', state =>
        state.helperFunctions.checked(
          'pmtct',
          dataValue('form.referral_services.art_support_services.check_the_services_that_client_was_referred_to')(state)
        )
      ),
      field('SKILLZ_Plus_Club_Support_GRS_Staff__c', state =>
        state.helperFunctions.checked(
          'grs_skillz_plus_club',
          dataValue('form.referral_services.art_support_services.skillz_plus_club_option')(state)
        )
      ),
      field(
        'Victim_Friendly_Services_GRS_Staff__c',
        state =>
          state.helperFunctions.checked(
            'suspected_abuse_reported_police_court_other_authority',
            dataValue(
              'form.referral_services.child_protection_support_services.check_the_services_that_client_was_referred_to'
            )(state)
          ) ||
          state.helperFunctions.checked(
            'post_violence_care_medical_legal_counseling',
            dataValue(
              'form.referral_services.child_protection_support_services.check_the_services_that_client_was_referred_to'
            )(state)
          ) ||
          state.helperFunctions.checked(
            'child_support_grant_social_foster_general_support',
            dataValue(
              'form.referral_services.child_protection_support_services.check_the_services_that_client_was_referred_to'
            )(state)
          ) ||
          state.helperFunctions.checked(
            'other',
            dataValue(
              'form.referral_services.child_protection_support_services.check_the_services_that_client_was_referred_to'
            )(state)
          )
      ),
      field('Business_Unit_Site__c', state => {
        const bu = dataValue('form.business_unit')(state);
        return bu === '65680f0c4c144b03ad0f86bdc46c1ebc'
          ? 'GRS Zambia'
          : bu === '04d98397e28046118fade28ced6b65cb'
          ? 'GRS Zimbabwe'
          : bu === 'ed125ab19ec34aacab79585e59eb76f4'
          ? 'GRS Partnerships'
          : undefined;
      }),
      field(
        'Sexual_and_GBV_Abuse_GRS_Staff__c',
        dataValue('form.referral_services.child_protection_support_services.abuse_reported_to')
      ),

      field('Legal_Other__c', dataValue('form.referral_services.legal_services.please_specify_other_legal')),
      field(
        'Legal_Services_Other_GRS_Staff__c',
        state =>
          state.helperFunctions.checked(
            'other',
            dataValue('form.referral_services.legal_services.legal_services')(state)
          ) ||
          state.helperFunctions.checked(
            'id',
            dataValue('form.referral_services.legal_services.legal_services')(state)
          ) ||
          state.helperFunctions.checked(
            'birth_bertificate',
            dataValue('form.referral_services.legal_services.legal_services')(state)
          )
      ),
      field('STI_Screen_Testing_GRS_Staff__c', state =>
        state.helperFunctions.checked(
          'sti_screening_diagnosis_treatment',
          dataValue('form.referral_services.other_srhr_services.check_the_services_that_client_was_referred_to')(state)
        )
      ),
      field('Contraception_Family_Plan_GRS_Staff__c', state =>
        state.helperFunctions.checked(
          'contraceptivesfamily_planning',
          dataValue('form.referral_services.other_srhr_services.check_the_services_that_client_was_referred_to')(state)
        )
      ),
      field('Cervical_Cancer_Screening_GRS_Staff__c', state =>
        state.helperFunctions.checked(
          'cervical_cancer_screening',
          dataValue('form.referral_services.other_srhr_services.check_the_services_that_client_was_referred_to')(state)
        )
      ),
      field('HPV_vaccine_GRS_Staff__c', state =>
        state.helperFunctions.checked(
          'hpv',
          dataValue('form.referral_services.other_srhr_services.check_the_services_that_client_was_referred_to')(state)
        )
      ),
      field('Antenatal_Care_ANC_GRS_Staff__c', state =>
        state.helperFunctions.checked(
          'antenatal_care_anc',
          dataValue('form.referral_services.other_srhr_services.check_the_services_that_client_was_referred_to')(state)
        )
      ),
      field('Sexual_and_GBV_Abuse_GRS_Staff__c', state =>
        state.helperFunctions.checked(
          'based_violenceabus',
          dataValue('form.referral_services.other_srhr_services.check_the_services_that_client_was_referred_to')(state)
        )
      ),
      field(
        'Psycho_Social_Support_GRS_Staff__c',
        state =>
          state.helperFunctions.checked(
            'drug_or_alcohol_abuse',
            dataValue('form.referral_services.other_srhr_services.check_the_services_that_client_was_referred_to')(
              state
            )
          ) ||
          state.helperFunctions.checked(
            'psychiatric_careintensive_counseling',
            dataValue('form.referral_services.other_srhr_services.check_the_services_that_client_was_referred_to')(
              state
            )
          ) ||
          state.helperFunctions.checked(
            'psychosocial_support',
            dataValue('form.referral_services.other_srhr_services.check_the_services_that_client_was_referred_to')(
              state
            )
          )
      ),
      field('Psycho_Social_Services_Other_GRS_Staff__c', state =>
        state.helperFunctions.checked(
          'other',
          dataValue('form.referral_services.other_srhr_services.check_the_services_that_client_was_referred_to')(state)
        )
      ),
      field('Psycho_Other__c', dataValue('form.referral_services.other_srhr_services.please_specify_srhr_referred')),
      field('Date_Referred__c', dataValue('form.follow-up.date_referred')),
      field('Expected_Visit_Date__c', dataValue('form.follow-up.expected_visit_date')),
      field('Client_Follow_up_Consent_given__c', state =>
        state.helperFunctions.checked('client_follow-up_consent_given', dataValue('form.follow-up.select')(state))
      ),
      field('Client_Linked_to_care__c', state =>
        state.helperFunctions.checked('client_linked_to_care', dataValue('form.follow-up.select')(state))
      )
    )
  )(state);
});

```