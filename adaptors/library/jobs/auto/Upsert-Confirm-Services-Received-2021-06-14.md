---
title: Upsert Confirm Services Received
sidebar_label: Upsert Confirm Services Received
id: Upsert-Confirm-Services-Received-2021-06-14
keywords:
  - library
  - job
  - expression
  - salesforce
  - alterState
  - dataValue
  - field
  - fields
  - upsert
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Upsert Confirm Services Received
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`v2.7.4`](https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4)
- Created over 1 year ago
- Updated 7 months ago
- Score: <b>18</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`alterState`, `dataValue`, `field`, `fields`, `upsert`

## Expression

```js
// Your job goes here.
alterState(state => {
  state.data.external_commcare_id = (
    dataValue('form.hidden_properties.intervention_name')(state) +
    dataValue('form.hidden_properties.participant_first_name')(state) +
    dataValue('form.hidden_properties.participant_surname')(state)
  )
    .toString()
    .toLowerCase()
    .replace(/\s/g, '')
    .trim();

  return state;
});

upsert(
  'NewReferral__c',
  'CommCare_Ext_ID__c',
  fields(
    field('Business_Unit_Site__c', state => {
      const bu = dataValue('form.business_unit')(state);
      return bu === 'X' ? 'GRS Zambia' : bu;
    }),
    field('CommCare_Ext_ID__c', dataValue('form.case.@case_id')),
     field('HIV_Testing_Services_Service_Provider__c', state =>
      Boolean(
        dataValue('form.referral_services.hiv_support__care.check_services_label.hiv_support_care_option1')(state)
      )
    ),
    field('TB_Screening_Service_Provider__c', state =>
      Boolean(
        dataValue('form.referral_services.hiv_support__care.check_services_label.hiv_support_care_option2')(state)
      )
    ),
    field('VMMC_Service_Provider__c', state =>
      Boolean(
        dataValue('form.referral_services.hiv_support__care.check_services_label.hiv_support_care_option3')(state)
      )
    ),
    field('Post_Exposure_Prophylaxis_Service_Provid__c', state =>
      Boolean(
        dataValue(
          'form.referral_services.hiv_support__care.check_services_label.hiv_support_care_option4'
        )(state)
      )
    ),
    field('PrEP_Service_Provider__c', state =>
      Boolean(
        dataValue(
          'form.referral_services.hiv_support__care.check_services_label.hiv_support_care_option5'
        )(state)
      )
    ),
    field('HIV_STI_PREVENTION_Other_Service_Provid__c', state =>
      Boolean(
        dataValue(
          'form.referral_services.hiv_support__care.check_services_label.hiv_support_care_option6'
        )(state)
      )
    ),
    field('ART_Initiation_Service_Provider__c', state =>
      Boolean(
        dataValue('form.referral_services.art_support_services.art_services_group.art_services_option1')(
          state
        )
      )
    ),
    field('SKILLZ_Plus_Club_Support_Service_Provid__c', state =>
      Boolean(
        dataValue('form.referral_services.art_support_services.art_services_group.art_services_option2')(
          state
        )
      )
    ),
    
    field(
      'PMTCT_Service_Provider__c',
      state =>
        Boolean(
          dataValue('form.referral_services.art_support_services.art_services_group.art_services_option3')(
            state
          )
        )
    ), 
    field('IPTG_Health_Facility__c', state =>
      Boolean(
        dataValue('form.referral_services.mental_health_services.confirmation_of_services_provided_label.mental_health_select_services_option1')(
          state
        )
      )
    ),    
    field('IPTG_Specialized_to_SMZ__c', state =>
      Boolean(
        dataValue('form.referral_services.mental_health_services.confirmation_of_services_provided_label.mental_health_select_services_option2')(
          state
        )
      )
    ),   
    
      field('ART_Services_Other_Service_Provider__c', state =>
        Boolean(
          dataValue('form.referral_services.art_support_services.referred_art_support_services')(state)
        )
      ),
      field(
        'Victim_Friendly_Services_Service_Provide__c',
        state =>
          Boolean(
            dataValue(
              'form.referral_services.child_protection_support_services.copy-1-of-check_the_services_that_were_provided.child_protection_option1'
            )(state)
          ) ||
          Boolean(
            dataValue(
              'form.referral_services.child_protection_support_services.copy-1-of-check_the_services_that_were_provided.child_protection_option2'
            )(state)
          ) ||
          Boolean(
            dataValue(
              'form.referral_services.child_protection_support_services.copy-1-of-check_the_services_that_were_provided.child_protection_option3'
            )(state)
          )
      ),
      field('Legal_Services_Other_Service_Provider__c', state =>
        Boolean(
          dataValue(
            'form.referral_services.other_legal_services.confirmation_of_services_provided_label.legal_services_option3'
          )(state)
        )
      ),

    field('STI_Screen_Testing_Service_Provider__c', state =>
        Boolean(dataValue('form.referral_services.other_srhr_services.service_label.srhr_option1')(state))
      ),
    
    field('Contraception_Family_Plan_Servi_Provider__c', state =>
      Boolean(dataValue('form.referral_services.other_srhr_services.service_label.srhr_option2')(state))
    ),
    field('Cervical_Cancer_Screen_Servi_Provider__c', state =>
      Boolean(dataValue('form.referral_services.other_srhr_services.service_label.srhr_option3')(state))
    ),
    field('HPV_vaccine_Service_Provider__c', state =>
      Boolean(dataValue('form.referral_services.other_srhr_services.service_label.srhr_option4')(state))
    ),
    field('Antenatal_Care_ANC_Service_Provider__c', state =>
      Boolean(dataValue('form.referral_services.other_srhr_services.service_label.srhr_option5')(state))
    ),
    field('Sexual_and_GBV_Abuse_Servi_Provider__c', state =>
      Boolean(dataValue('form.referral_services.other_srhr_services.service_label.srhr_option6')(state))
    ),
    field(
        'Psycho_Social_Support_Service_Provider__c',
        state =>
          Boolean(
            dataValue(
              'form.referral_services.other_srhr_services.service_label.srhr_option9'
            )(state)
          ) ||
          Boolean(
            dataValue(
              'form.referral_services.other_srhr_services.service_label.srhr_option8'
            )(state)
          ) ||
          Boolean(
            dataValue(
              'form.referral_services.other_srhr_services.service_label.srhr_option7'
            )(state)
          )
      ),
    field('Psycho_Social_Services_Other_Service_Pro__c', state =>
      Boolean(dataValue('form.referral_services.other_srhr_services.service_label.srhr_option10')(state))
    ),
    field(
        'Legal_Services_Other_Service_Provider__c',
        state =>
          Boolean(
            dataValue('form.referral_services.other_legal_services.confirmation_of_services_provided_label.legal_referral_services')(state)
          ) ||
          Boolean(
            dataValue('form.referral_services.other_legal_services.confirmation_of_services_provided_label.legal_services_option1')(state)
          ) ||
          Boolean(
            dataValue('form.referral_services.other_legal_services.confirmation_of_services_provided_label.legal_services_option2')(state)
          )
      ),
    
  )
);

```