---
title: Upsert Coach Support Visit (CSV)
sidebar_label: Upsert Coach Support Visit (CSV)
id: Upsert-Coach-Support-Visit-CSV-2021-04-28
keywords:
  - library
  - job
  - expression
  - salesforce
  - alterState
  - dataValue
  - field
  - fields
  - join
  - map
  - relationship
  - upsert
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Upsert Coach Support Visit (CSV)
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`v2.7.4`](https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4)
- Created over 1 year ago
- Updated 7 months ago
- Score: <b>18</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`alterState`, `dataValue`, `field`, `fields`, `join`, `map`, `relationship`, `upsert`

## Expression

```js
//openfn.org source
alterState(state => {
  function clean(str) {
    console.log('str', str);

    if (!str) return '';

    return str
      .split('_')
      .map(word => {
        let new_word = word.toString().toLowerCase();
        return new_word.slice(0, 1).toUpperCase() + new_word.slice(1);
      })
      .join(' ');
  }
 
  if (state.data.form['step_3_-_the_big_5']  !== undefined ){ 
    state.data.form['step_3_-_the_big_5'].faciliation = clean(state.data.form['step_3_-_the_big_5'].faciliation);
  }
  else{
  state.data.form.step_4_comments.for_each_practice_component_describe_what_the_coach_did_well_and_how_the_co.faciliation = 
  clean(state.data.form.step_4_comments.for_each_practice_component_describe_what_the_coach_did_well_and_how_the_co.faciliation);
  }
  
  function transform(value) {
    if (!value) return;
    switch (value.toString().trim()) {
      case 'copy-1-of-excellent':
        return 'Excellent'; 
      case 'needs_improvement':
        return 'Needs Improvement';      
      case 'meets_expectations':
        return 'Meets Expectations'; 
      case 'excellent':
        return 'Excellent';        
      case 'unsatisfactory':
        return 'Unsatisfactory';
      case 'exceeds_expectations':
        return 'Exceeds Expectations';        
      default:
        return value;
    }
  }

  state.data.form['step_3_-_the_big_5'].builds_personal_connections = 
  transform(state.data.form['step_3_-_the_big_5'].builds_personal_connections)

  state.data.form['step_3_-_the_big_5'].cool_down = 
  transform(state.data.form['step_3_-_the_big_5'].cool_down)
  
  state.data.form['step_3_-_the_big_5'].creates_safe_space = 
  transform(state.data.form['step_3_-_the_big_5'].creates_safe_space)
  
  state.data.form['step_3_-_the_big_5'].faciliation = 
  transform(state.data.form['step_3_-_the_big_5'].faciliation)
  
  state.data.form['step_3_-_the_big_5'].gives_praise = 
  transform(state.data.form['step_3_-_the_big_5'].gives_praise)
  
  state.data.form['step_3_-_the_big_5'].praise = 
  transform(state.data.form['step_3_-_the_big_5'].praise)

  state.data.form['step_3_-_the_big_5'].preparation = 
  transform(state.data.form['step_3_-_the_big_5'].preparation)
  
  state.data.form['step_3_-_the_big_5'].shares_accurate_information_about_hivaids_sexual_reproductive_health_and_ri = 
  transform(state.data.form['step_3_-_the_big_5'].shares_accurate_information_about_hivaids_sexual_reproductive_health_and_ri)
  
  state.data.form['step_3_-_the_big_5'].sparks_vital_conversations = 
  transform(state.data.form['step_3_-_the_big_5'].sparks_vital_conversations)
  
  state.data.form['step_3_-_the_big_5'].time_management = 
  transform(state.data.form['step_3_-_the_big_5'].time_management)
  
   state.data.form['step_3_-_the_big_5'].warm_up = 
  transform(state.data.form['step_3_-_the_big_5'].warm_up)
  

  return state;
});

upsert(
  'Coach_Support_Visit__c',
  'CommCare_Ext_ID__c',
  fields(
    field('CommCare_Ext_ID__c', dataValue('id')),
    relationship('Coach_Person__r', 'CommCare_Ext_ID__c', state => {
      return dataValue('form.step_1_basic_information.select_coach')(state) || 
      dataValue('form.step_1_csv_information.select_coach')(state); 
    }),
    relationship('Venue__r', 'CommCare_Ext_ID__c', state => {
      return dataValue('form.hidden_properties.venue')(state) || 
      dataValue('form.step_1_csv_information.venue')(state); 
    }),
    relationship('Event__r', 'CommCare_Ext_ID__c', state => {
      return dataValue('form.hidden_properties.intervention')(state) || 
      dataValue('form.step_1_csv_information.intervention')(state); 
    }),
    relationship('Curriculum_Aggregate__r', 'CommCare_Ext_ID__c', state => {
      return dataValue('form.hidden_properties.curriculum')(state) || 
      dataValue('form.step_1_csv_information.curriculum')(state); 
    }),    
     relationship('Site_Lookup__r', 'CommCare_Ext_ID__c', state => {
      return dataValue('form.hidden_properties.site')(state) || 
      dataValue('form.step_1_csv_information.site')(state); 
    }), 
    field('Date__c', dataValue('form.step_2_practice_information.date_of_csv')),
    //== TODO: FIx repeated mappings to only reference destination field 1 time ===//
    field(
      'Accurate_Information__c', state => {
      return dataValue('form.step_3_-_the_big_5.shares_accurate_information_about_hivaids_sexual_reproductive_health_and_ri')(state) || 
      dataValue(
          'form.step_3_the_big_five.question1.shares_accurate_information_about_hivaids_sexual_reproductive_health_and_ri'
        )(state); 
    }),
    field('Creates_safe_space__c', state => {
      return dataValue('form.step_3_-_the_big_5.creates_safe_space')(state) || 
      dataValue('form.step_3_the_big_five.question1.creates_safe_space')(state); 
      
    }),
    field('Builds_personal_connections__c', state => {
      return dataValue('form.step_3_-_the_big_5.builds_personal_connections')(state) || 
      dataValue('form.step_3_the_big_five.question1.builds_personal_connections')(state); 
    }),
    field('Gives_praise__c', state => {
      return dataValue('form.step_3_-_the_big_5.gives_praise')(state) ||
      dataValue('form.step_3_the_big_five.question1.gives_powerful_praise')(state); 
    }),
    field('Sparks_vital_conversations__c', state => {
      return dataValue('form.step_3_-_the_big_5.sparks_vital_conversations')(state) || 
      dataValue('form.step_3_the_big_five.question1.sparks_vital_conversations')(state); 
      }),
    field('X2_Warm_Up__c', state => {
      return dataValue('form.step_3_-_the_big_5.warm_up')(state) || 
      dataValue(
          'form.step_4_comments.for_each_practice_component_describe_what_the_coach_did_well_and_how_the_co.warm_up'
        )(state); 
      }),
    field('X3_Activity__c', state => {
      return dataValue('form.step_3_-_the_big_5.activity')(state) || dataValue(
          'form.step_4_comments.for_each_practice_component_describe_what_the_coach_did_well_and_how_the_co.activity'
        )(state); 
      }),
    field('X4_Cool_Down__c', state => {
      return dataValue('form.step_3_-_the_big_5.cool_down')(state) || dataValue(
          'form.step_4_comments.for_each_practice_component_describe_what_the_coach_did_well_and_how_the_co.cool_down'
        )(state); 
      }),
    field('X5_Facilitation__c', state => {
      return dataValue('form.step_3_-_the_big_5.faciliation')(state) || 
      dataValue(
          'form.step_4_comments.for_each_practice_component_describe_what_the_coach_did_well_and_how_the_co.faciliation'
        )(state); 
      }),
    field(
      'X6_Time_Management__c',
      dataValue('form.step_3_-_the_big_5.time_management')
    ),
    field(
      'X1_Preparation__c',
      dataValue('form.step_3_-_the_big_5.preparation')
    ),
    field('Introduces_micromove__c', state => {
      return //dataValue('form.step_3_-_the_big_5.faciliation')(state) || 
      dataValue(
         'form.step_4_comments.for_each_practice_component_describe_what_the_coach_did_well_and_how_the_co.micromove'
      )(state); 
    }),
    field(
      'Notes__c',
      dataValue(
        'form.step_3_-_the_big_5.additional_notes.include_your_obsevations_related_to_preparation_punctuality_process'
      )
    )
  )
);

```