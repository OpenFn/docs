---
title: Q3 2022] Upsert Person Visit
sidebar_label: ✨ Q3 2022] Upsert Person Visit
id: Q3-2022-Upsert-Person-Visit-2022-06-28
keywords:
  - library
  - job
  - expression
  - salesforce
  - dataValue
  - field
  - fields
  - join
  - map
  - query
  - relationship
  - upsertIf
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: Q3 2022] Upsert Person Visit
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-salesforce)
- Created 5 months ago
- Updated 28 days ago
- Score: <b>92</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`dataValue`, `field`, `fields`, `join`, `map`, `query`, `relationship`, `upsertIf`

## Expression

```js
//UPSERT PERSON VISIT
  query(
  `SELECT Id, Parent_Geographic_Area__c, Parent_Geographic_Area__r.Name, Parent_Geographic_Area__r.Parent_Geographic_Area__c FROM Location__c WHERE CommCare_User_ID__c = '${dataValue(
    'properties.owner_id'
  )(state)}'`
);

fn(state => {
  state.cleanChoice = function (state, choice) {
    if (choice) {
      return choice.charAt(0).toUpperCase() + choice.slice(1).replace('_', ' ');
    } else {
      return '';
    }
  };

fn(state => ({
  ...state,
  data: {
    ...state.data,
    catchmentNewId:
      state.references[0].records && state.references[0].records.length !== 0
        ? (state.references[0].records[0].Parent_Geographic_Area__r 
          ? state.references[0].records[0].Parent_Geographic_Area__r.Parent_Geographic_Area__c
          : undefined)
        : undefined,
  },
}));

  state.handleMultiSelect = function (state, multiField) {
    return multiField
      ? multiField
          .replace(/ /gi, ';')
          .toLowerCase()
          .split(';')
          .map(value => {
            return (
              value.charAt(0).toUpperCase() + value.slice(1).replace('_', ' ')
            );
          })
          .join(';')
      : '';
  };

  state.handleMultiSelectOriginal = function (state, multiField) {
    return multiField
      ? multiField
          .replace(/ /gi, ';')
          .toLowerCase()
          .split(';')
          .map(value => {
            return (
              value
            );
          })
          .join(';')
      : '';
  };

  const pregDangerMap = {
    Vaginal_Bleeding: 'Vaginal Bleeding',
    Water_Breaks: 'Water Breaks before Time of Delivery',
    Prolonged_Labour: 'Prolonged Labour over 12 Hours',
    Convulsions: 'Convulsions or Fits',
    Abdominal_Pain: 'Severe Abdominal Pain before Delivery',
    High_Fever: 'High Fever',
    Low_Baby_Movement: 'Feeling the Baby move less or not at all',
    Swelling: 'Swelling of Face and Hands',
    Severe_Headache: 'Severe or Continuous Headache for more than 12 hours',
    Severe_Vomiting: 'Severe or Continuous Vomiting',
    none: 'None',
  };

  const counselMap = {
    anc_visits: 'ANC Visits',
    early_initiation_of_anc_less_than_3_months:
      'Early initiation of ANC (less than 3 months)',
    completing_recomended_anc_visits: 'Completing recomended ANC visits',
    danger_signs: 'Danger signs',
    skilled_birth: 'Skilled birth',
    immunization: 'Immunization',
    individual_birth_plan: 'Individual Birth Plan',
    emergency_preparedness: 'Emergency preparedness',
    childcare_and_affection: 'Childcare and affection',
    nutrition_counseling: 'Nutrition counseling',
    growth_monitoring: 'Growth monitoring',
    exclusive_breastfeeding: 'Exclusive breastfeeding',
    complementary_feeding: 'Complementary feeding',
    sleeping_under_llitn: 'Sleeping under LLITN',
    knowing_hiv_status: 'Knowing HIV status',
    indoor_pollution: 'Indoor pollution',
    personal_hygiene: 'Personal Hygiene',
    safe_drinking_water: 'Safe drinking water',
    safe_disposal_of_human_waste: 'Safe disposal of human waste',
  };

  const serviceMap = {
    Scheduled_PSC_Apt: 'Scheduled PSC Apt',
    Adverse_Drug_Reaction_Side_Effect: 'Adverse Drug Reaction/Side Effect',
    Malnutrition: 'Malnutrition',
    Malaria: 'Malaria',
    TB: 'TB',
    Treatment_for_Other_OIs: 'Treatment for other Ols',
    ARI: 'ARI',
    Anemia: 'Anemia',
    Diarrhea: 'Diarrhea',
    Pregnancy_Care: 'Pregnancy Care (ANC)',
    Family_Planning: 'Family Planning (FP)',
    Preconception_Counseling: 'Preconception Counseling',
    Injury: 'Injury',
    Other: 'Other',
  };

  const reasonMap = {
    lack_of_access_to_fp_information: 'Lack of access to FP information',
    no_access_to_fp_services_hospitals:
      'Lack of hospitals or places where FP services can be accessed',
    not_willing_to_use_fp_due_to_negative_effects_myths_and_misconceptions:
      'Myths and misconceptions',
    barriers_at_service_delivery_points: 'Barriers at service delivery points',
    pregnant: 'The client is pregnant',
    intentions_of_getting_pregnant: 'Intentions of getting pregnant',
    not_sexually_active: 'The client is not sexually active',
    other_barriers_culture_male_partners_parents_etc:
      'Other barriers (culture, male partners, parents, etc)',
  };

  const milestoneTypeMap = {
    cognitive_delays_learning_difficulties:
      'Cognitive Delays Learning Difficulties',
    motor_delays: 'Motor Delays',
    speech_and_language_delay: 'Delay Speech and Language Delay',
    social_and_emotional: 'Social and emotional',
  };

  const milestoneMap = {
    movement: 'Movement',
    hearing: 'Hearing',
    communication: 'Communication',
    seeing: 'Seeing',
    cognitive_delays: 'Cognitive Delays',
    play: 'Play',
  };
  const nutritionMap = {
    severe: 'Severely Malnourished',
    moderate: 'Moderately Malnourished',
    normal: 'Normal',
  };
  
  const fpMethodMap = {
    male_condoms: "Male condoms",
    female_condoms: "Female condoms",
    pop: "POP",
    coc: "COC",
    emergency_pills: "Emergency pills",
    none: "None"
  };

  const symptomsMap = {
    convulsions: 'Convulsions',
    not_able_to_eatdrink: 'Not able to drink or feed at all',
    vomits_everything: 'Vomits everything',
    'chest_in-drawing': 'Chest in - drawing',
    unusually_sleepyunconscious: 'Unusually sleepy or unconscious',
    swelling_of_both_feet: 'Swelling of both feet',
    none: "None",
  };

  const supervisorMap ={
    community_health_nurse: "Community_health_nurse",
    chw_supervisor: "CHW_supervisor",
    chewschas: "Chewschas",
    other: "Other",
    none: "None"
  };
  
  const treatmentDistributionMap = {
    ors_205gltr_sachets: 'ORS (20.5h/ltr): Sachets',
    acts_6s: 'ACTs (6s)',
    acts_12s: 'ACTs (12s)',
    acts_18s: 'ACTs (18s)',
    acts_24s: 'ACTs (24s)',
    albendazole_abz_tabs: 'Albendazole (ABZ): Tabs',
    paracetamol_tabs: 'Tetracycline Eye Ointment (TEO): 1%:tube',
    tetracycline_eye_ointment_teo_1_tube: 'Tetracycline Eye Ointment (TEO): 1%:tube',
    amoxycillin: 'Amoxycillin (125mg/5mls: Bottle',
    none: 'None'
};

const childDangerSignsMap = {
    none: 'None',
    Poor_Breastfeeding: 'Poor Breastfeeding',
    not_able_to_feed_since_birth_or_stopped_feeding_well: 'Not able to feed since birth, or stopped feeding well',
    not_able_to_breastfeed: 'Not able to breastfeed',
    Fever: 'Fever',
    very_low_temperature: 'Very low temperature (35.4 C or less)',
    shivering: 'Shivering',
    Fast_Breathing: 'Fast Breathing',
    Very_Sleepy: 'Very Sleepy',
    Convulsions_and_Fits: 'Convulsions and Fits',
    only_moves_when_stimulated_or_does_not_move_even_on_stimulation: 'Only moves when stimulated, or does not move even on stimulation',
    yellow_solebaby_body_turning_yellow_especially_eyes_palms_soles: 'Yellow sole(Baby body turning yellow especially eyes, palms,soles)',
    bleeding_from_the_umbilical_stump: 'Bleeding from the umbilical stump',
    signs_of_local_infection_umbilicus_is_red_or_draining_pus_skin_boils_or_eye: 'Signs of local infection: umbilicus is red or draining pus, skin boils, or eyes draining pus',
    weight_chart_using_color_coded_scales_if_red_or_yellowweight_below_25kg_or_: 'Weight chart using color coded scales if RED or YELLOW(Weight below 2.5kg or born less than 36 weeks of age)',
    unable_to_cry: 'Unable to cry',
    cyanosis: 'Cyanosis',
    bulging_fontanelle: 'Bulging fontanelle'
}

  return {
    ...state,
    counselMap,
    serviceMap,
    reasonMap,
    milestoneTypeMap,
    milestoneMap,
    nutritionMap,
    pregDangerMap,
    fpMethodMap,
    symptomsMap,
    supervisorMap,
    treatmentDistributionMap,
    childDangerSignsMap
  };
});

upsertIf(
  // state.data.properties.username !== 'openfn.test' &&
    state.data.properties.username !== 'test.2021' &&
    state.data.properties.test_user  !== 'Yes' ,
  'Person_visit__c',
  'CommCare_ID__c',
  fields(
    //field('CommCare_ID__c', dataValue('form.case.@case_id')),
    // field('CommCare_ID__c', dataValue('id')),
    //field('CommCare_ID__c', state => {
    //  var case_id = dataValue('case_id')(state);
    //  var submitted = dataValue('properties.last_form_opened_date_and_time')(state);
    //  return case_id + '_' +  submitted;
    //}),
    field('CommCare_ID__c',dataValue('case_id')),

    relationship(
      'Person__r',
      'CommCare_ID__c',
      dataValue('indices.parent.case_id')
    ),
    /*relationship(
      'Household_CHW__r', 
      'CommCare_ID__c', 
      dataValue('properties.sfid')),*/
    // field('CommCare_Visit_ID__c',dataValue('metadata.instanceID')),
     field('CommCare_Visit_ID__c', state => {
      var case_id = dataValue('case_id')(state);
      var submitted = dataValue('properties.last_form_opened_date_and_time')(state);
      return case_id + '_' +  submitted;
    }),
    field('Date__c',dataValue('properties.Date')),
    field('Form_Submitted__c', dataValue('properties.last_form_opened_name')),
    field('Birth_Status__c',dataValue('properties.child_status')),
    field('Catchment__c', dataValue('catchmentNewId')),
    relationship('RecordType', 'Name', state => {
          var rt = dataValue('properties.RecordType')(state);
          if (rt === 'Unborn' || rt === 'Child') {
            return 'Child Visit';
          };
          if (rt === 'Youth') {
            return 'Youth Visit';
          };
          if (rt === 'Male Adult') {
            return 'Adult Male Visit';
          };
          if (rt === 'Female Adult') {
            return 'Adult Female Visit';
          };
        }),
    field('Use_mosquito_net__c', state => {
      var choice = dataValue(
        'properties.sleep_under_net'
      )(state);
      return state.cleanChoice(state, choice);
    }),
    field(
      'Individual_birth_plan_counselling__c',
      dataValue('properties.individual_birth_plan')
    ),
    field('Reason_for_not_taking_a_pregnancy_test__c', state => {
      var reason = dataValue('properties.No_Preg_Test')(state);
      return reason ? reason.toString().replace(/_/g, ' ') : undefined;
    }),
    field('Pregnancy_danger_signs__c', state => {
      var signs = dataValue(
        'properties.No_Preg_Test'
      )(state);
      return signs ? state.pregDangerMap[signs] : undefined;
    }),
    field('Child_Danger_Signs__c', state => {
      var signs = dataValue(
        'properties.Other_Danger_Signs'
      )(state);
      return signs ? state.childDangerSignsMap[signs] : undefined
    }),
     field('Current_Malaria_Status__c', state => {
      var choice = dataValue(
        'properties.malaria_test_results'
      )(state);
      return state.cleanChoice(state, choice);
    }),
    field('Malaria_Home_Test__c', dataValue('properties.malaria_test_date')),
    /*field('Current_Malaria_Status__c', state => {
      var choice = dataValue(
        'properties.Malaria_Status'
      )(state);
      return state.cleanChoice(state, choice);
    }),*/
    // field('Malaria_Home_Treatment__c',dataValue('form.treatment_and_tracking.home_treatment')),
    field('Malaria_Home_Treatment__c', dataValue('properties.malaria_test_date')),
    field('Persons_symptoms__c', state => {
      var check = dataValue('properties.symptoms_check_other')(state);
      var value =
        check && check !== ''
          ? check
              .replace(/ /gi, ';')
              .split(';')
              .map(value => {
                return state.symptomsMap[value] || value;
              })
          : undefined;
      return value ? value.join(';') : undefined;
    }),
    field('Active_in_Support_Group__c', dataValue('properties.Active_in_Support_Group')),
    field('HAWI_Defaulter__c', state => {
      var hawi = dataValue('properties.default')(state);
      return hawi === 'Yes' ? true : false;
    }),
    field(
      'Date_of_Default__c',
      dataValue('properties.date_of_default')
    ),
    field(
      'Persons_temperature__c',
      dataValue('properties.temperature')
    ),
    field(
      'Days_since_illness_start__c',
      dataValue('properties.duration_of_sickness')
    ),
    field(
      'Newborn_visited_48_hours_of_delivery__c',
      dataValue(
        'properties.newborn_visited_48_hours_of_delivery'
      )
    ),
    field(
      'Newborn_visited_by_a_CHW_within_6_days__c',
      dataValue('properties.visit_6_days_from_delivery')
    ),
    field(
      'Current_Malaria_Status__c',
      dataValue('properties.malaria_test_results')
    ),
    field('Malaria_test__c', state => {
      var choice = dataValue(
        'properties.malaria_test'
      )(state);
      return state.cleanChoice(state, choice);
    }),
    field('Fever__c', state => {
      var choice = dataValue(
        'properties.symptoms_check_fever'
      )(state);
      return state.cleanChoice(state, choice);
    }),
    field('Cough__c', state => {
      var choice = dataValue(
        'properties.symptoms_check_cough'
      )(state);
      return state.cleanChoice(state, choice);
    }),
    field('Diarrhoea__c', state => {
      var choice = dataValue(
       'properties.symptoms_check_diarrhea'
      )(state);
      return state.cleanChoice(state, choice);
    }),
    field(
      'TB_patients_therapy_observed__c',
      dataValue('properties.observed_tb_therapy')
    ),
    field(
      'Injuries_or_wounds__c',
      dataValue('properties.wounds_or_injuries')
    ),
    field('Currently_on_ART_s__c', dataValue('properties.ART')),
    /*field('ART_Regimen__c', state => {
      var choice = dataValue(
       'properties.ARVs'
      )(state);
      return state.cleanChoice(state, choice);
    }),*/
    field(
      'Immediate_Breastfeeding__c',
      dataValue(
        'properties.Breastfeeding_Delivery'
      )
    ),
    field(
      'Exclusive_Breastfeeding__c',
      dataValue(
        'properties.Exclusive_Breastfeeding'
      )
    ),
    field(
      'Counselled_on_Exclusive_Breastfeeding__c',
      dataValue('properties.counseling')
    ),
    field('LMP__c',dataValue('properties.when_was_your_lmp')),
     field('Family_Planning__c', state => {
      var choice = dataValue(
        'properties.family_planning'
      )(state);
      return state.cleanChoice(state, choice);
    }),
    field(
      'Family_Planning_Method__c',
      dataValue('properties.family_planning_method')
    ),
     field('FP_Method_Distributed__c', state => {
          //var status = dataValue('form.treatment_and_tracking.distribution.distributed_treatments')(state);
          var status = dataValue('properties.FP_commodity')(state);
          var value =
            status && status !== ''
              ? status
                  .replace(/ /gi, ';')
                  .split(';')
                  .map(value => {
                    return state.fpMethodMap[value] || value;
                  })
              : undefined;
          return value ? value.join(';') : undefined;
        }),
    field('Reasons_for_not_taking_FP_method__c', state => {
      // var reason = dataValue('form.TT5.Mother_Information.No_FPmethod_reason')(state);
      // return reason ? state.reasonMap[reason] : undefined;
      var status = dataValue('properties.No_FPmethod_reason')(state);
          var value =
            status && status !== ''
              ? status
                  .replace(/ /gi, ';')
                  .split(';')
                  .map(value => {
                    return state.reasonMap[value] || value;
                  })
              : undefined;
          return value ? value.join(';') : undefined;
    }),
    field('Pregnant__c', state => {
      var preg = dataValue('properties.Pregnant')(state);
      return preg === 'Yes' ? true : false;
    }),
    field('Counselled_on_FP_Methods__c', state => {
      var choice = dataValue(
       'properties.CounselledFP_methods'
      )(state);
      return state.cleanChoice(state, choice);
    }),
    field('Client_counselled_on__c', state => {
      var choices =
        dataValue('properties.counsel_topic')(
          state
        ) || dataValue('properties.counsel_topic')(state);
      var choiceGroups = choices ? choices.split(' ') : null;
      var choicesMulti = choiceGroups
        ? choiceGroups
            .map(cg => {
              return state.counselMap[cg];
            })
            .join(';')
        : choiceGroups;
      return choicesMulti;
    }),
    field('Client_provided_with_FP__c', state => {
      var choice = dataValue(
        'properties.was_the_woman_15-49yrs_provided_with_family_planning_commodities_by_chv'
      )(state);
      return state.cleanChoice(state, choice);
    }),
    field(
      'Newborn_visited_48_hours_of_delivery__c',
      dataValue(
        'properties.newborn_visited_48_hours_of_delivery'
      )
    ),
    field('Mother_visit_counselling__c', state => {
      var choice = dataValue(
        'properties.did_you_consel_the_mother_on1'
      )(state);
      return state.handleMultiSelectOriginal(state, choice);
    }),
    field(
      'mother_visited_48_hours_of_the_delivery__c',
      dataValue('properties.visit_mother_48')
    ),
    field('Newborn_visit_counselling__c', state => {
      var choice = dataValue(
        'properties.did_you_consel_the_mother_on2'
      )(state);
      return state.handleMultiSelectOriginal(state, choice);
    }),
    field('Know_HIV_status__c', state => {
      var choice = dataValue(
        'properties.known_hiv_status'
      )(state);
      return state.cleanChoice(state, choice);
    }),
    field('HIV_Status__c', dataValue('properties.hiv_status')),
    field('Treatment_Distribution__c', state => {
          //var status = dataValue('form.treatment_and_tracking.distribution.distributed_treatments')(state);
          var status = dataValue('properties.distributed_treatments')(state);
          var value =
            status && status !== ''
              ? status
                  .replace(/ /gi, ';')
                  .split(';')
                  .map(value => {
                    return state.treatmentDistributionMap[value] || value;
                  })
              : undefined;
          return value ? value.join(';') : undefined;
        }),
    field(
      'Current_Weight__c',
      dataValue('properties.Current_Weight')
    ),
    field(
      'Current_Height__c',
      dataValue('properties.current_height')
    ),
    field(
      'Current_MUAC__c',
      dataValue('properties.MUAC')
    ),
    field('Food_groups_3_times_a_day__c',dataValue('properties.food_groups')),
    field('Nutrition_Case_Managed__c',dataValue('properties.nutrition_case_managed')),
    field('Nutrition_Danger_Signs__c',state => {
      var choice = dataValue(
        'properties.nutrition_danger_signs'
        )(state);
        return state.handleMultiSelectOriginal(state, choice);
        
    }),
  field('Why_was_nutrition_case_not_managed__c',dataValue('properties.nutrition_case_not_managed_why')),
  field('Community_Nutrition_Treatment__c',dataValue('properties.nutrition_treatment_severe')),
  field('Community_Nutrition_Treatment__c',dataValue('properties.nutrition_treatment_moderate')),
  field('Why_was_nutrition_treatment_not_given__c',dataValue('properties.nutrition_treatment_not_given')),
    field('Current_Nutrition_Status__c', state => {
      var status = dataValue(
        'properties.Nutrition_Status'
      )(state);
      return status ? state.nutritionMap[status] : undefined;
    }),
    field('Default_on_TB_treatment__c', state => {
      var choice = dataValue(
       'properties.default_tb_treatment'
      )(state);
      return state.cleanChoice(state, choice);
    }),
    field('Received_pregnancy_test__c', state => {
      var choice = dataValue(
        'properties.did_you_adminsiter_a_pregnancy_test'
      )(state);
      return state.cleanChoice(state, choice);
    }),
    field('Pregnancy_test_result__c', state => {
      var choice = dataValue(
        'properties.pregnancy_test_result'
      )(state);
      return state.cleanChoice(state, choice);
    }),
    field('Chronic_illness__c', state => {
      var choice = dataValue(
        'properties.please_specify_which_chronic_illness_the_person_has'
      )(state);
      var choice2 = state.handleMultiSelect(state, choice);
      return choice2 ? choice2.replace(/_/g, ' ') : '';
    }),
    /*field(
          'Birth_Certificate__c',
          dataValue('form.Status.birth_certificate')
        ),
        field(
          'Child_zinc__c',
          dataValue(
            'form.TT5.Child_Information.Clinical_Services.diarrhea_clinic_treatment_zinc'
          )
        ),
        field(
          'Child_ORS__c',
          dataValue(
            'form.TT5.Child_Information.Clinical_Services.diarrhea_clinic_treatment_ORS'
          )
        ),*/
    field(
      'Childs_breath_per_minute__c',
      dataValue('properties.breaths_per_minuite')
    ),
    field(
      'Child_chest_in_drawing__c',
      dataValue('properties.Child_chest_in_drawing_c')
    ),
    field(
      'Caregiver_counseled_on_delayed_milestone__c',
      dataValue(
        'properties.did_you_counsel_the_caregiver_on_delayed_milestones'
      )
    ),
    field(
      'Delayed_Milestone__c',
      dataValue(
         'properties.does_the_child_has_a_delayed_milestone'
      )
    ),
    field(
      'Child_has_2_or_more_play_items__c',
      dataValue(
         'properties.does_the_child_has_2_or_more_play_items_at_home'
      )
    ),
    field(
      'Child_has_3_more_picture_books__c',
      dataValue(
        'properties.does_the_child_has_3_or_more_picture_books'
      )
    ),
    field('Delayed_Milestones_Counselled_On__c', state => {
      var ms = dataValue(
        'properties.which_delayed_milestone_area_did_you_counsel_the_caregiver_on'
      )(state);
      return ms ? state.milestoneMap[ms] : undefined;
    }),
    field('Delayed_Milestone_Type__c', state => {
      var ms = dataValue('properties.which_delayed_milestone')(
        state
      );
      return ms ? state.milestoneTypeMap[ms] : undefined;
    }),
    field(
      'Caretaker_trained_in_muac__c',
      dataValue('properties.mother_trained_muac')
    ),
    field(
      'Caretaker_screened_for_muac_this__c',
      dataValue(
       'properties.mother_screened_child_muac'
      )
    ),
    field(
      'Caretaker_muac_findings__c',
      dataValue(
        'properties.mother_screened_child_muac_result'
      )
    ),
    field(
      'Caretaker_action_after_muac_screening__c',
      dataValue(
        'properties.mother_screened_muac_action'
      )
    ),
    field(
      'of_Caretaker_MUAC_screenings__c',
      dataValue('properties.mother_nb_screening')
    ),
    field('Pulse_Oximeter__c', dataValue('properties.pulse_oximeter_available')),
    field(
      'Heart_Rate_Pulse_Oximeter__c',
      dataValue('properties.heart_rate_pulse_oximeter')
    ),
    field(
      'Oxygen_Concentration_Pulse_Oximeter__c',
      dataValue('properties.oxygen_concentration')
    ),
    field('Can_child_drink__c', dataValue('properties.can_child_drink')),
    field(
      'Antibiotic_provided_for_fast_breathing__c',
      dataValue('properties.antibiotic_fast_breathing')
    ),
    field(
      'Antibiotic_provided_for_chest_indrawing__c',
      dataValue('properties.antibiotic_chest_indrawing')
    ),
    field('Supervisor_Visit__c', state => {
      var check = dataValue('properties.supervisor_visit')(state);
      var value =
        check && check !== ''
          ? check
              .replace(/ /gi, ';')
              .split(';')
              .map(value => {
                return state.supervisorMap[value] || value;
              })
          : undefined;
      return value ? value.join(';') : undefined;
    }),
    field('Visit_Closed_Date__c', dataValue('date_closed')),
    //field('Case_Closed_Date__c', state => {
    //  var closed = dataValue('date_closed')(state);
    //  var date = dataValue('date_modified')(state);
    //  return closed && closed == true ? date : undefined;
   // })
  )
);

```