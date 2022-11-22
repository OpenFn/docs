---
title: TEST] Bulk Upsert Person Visit
sidebar_label: TEST] Bulk Upsert Person Visit
id: TEST-Bulk-Upsert-Person-Visit-2022-07-11
keywords:
  - library
  - job
  - expression
  - salesforce
  - bulk
  - join
  - map
---

<em>This job was provided by an OpenFn.org user via the job library API.</em>

## Metadata

- Name: TEST] Bulk Upsert Person Visit
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`v2.10.0`](https://www.github.com/openfn/language-salesforce/releases/tag/v2.10.0)
- Created 4 months ago
- Updated about 1 month ago
- Score: <b>61</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`bulk`, `join`, `map`

## Expression

```js
fn(state => {

  const handleMultiSelect = multiField => {
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

  const handleMultiSelectOriginal = multiField => {
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

  // const locationsByUserId = state.references[0].records.reduce((acc, loc) => {
  //   const {
  //     CommCare_User_ID__c,
  //     Id,
  //     Parent_Geographic_Area__c,
  //     Parent_Geographic_Area__r,
  //   } = loc;

  //   return {
  //     ...acc,
  //     [CommCare_User_ID__c]: {
  //       sfId: Id,
  //       area: Parent_Geographic_Area__c,
  //       catchment: Parent_Geographic_Area__r.Parent_Geographic_Area__c,
  //     },
  //   };
  // }, {})



  const transformMultiselect = choice => {
    var choice2 = handleMultiSelect(choice);
    return choice2 ? choice2.replace(/_/g, ' ') : '';
  }

  const yesNoToBoolean = item => {
    return item === 'Yes' ? true : false;
  }

  const transformReason = (reason, map) => {
    return reason ? map[reason] : undefined;
  }

  const checkAlternativePath = (path1, path2) => {
    return path1 == undefined ? path2 : path1
  }

  const joinMap = (status, map) => {
    var value =
      status && status !== ''
        ? status
          .replace(/ /gi, ';')
          .split(';')
          .map(value => {
            return map[value] || value;
          })
        : undefined;
    return value ? value.join(';') : undefined;
  }

  const transformSigns = signs => {
    return signs
      ? signs
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(';')
        .toString()
        .replace(/_/g, ' ')
      : signs;
  }

  const transformChoiceGroups = (x, map) => {
    var choices =
      jsonValue(x, 'form.treatment_and_tracking.counseling.counsel_topic')
      || jsonValue(x, 'form.counseling.counsel_topic')
    var choiceGroups = choices ? choices.split(' ') : null;
    var choicesMulti = choiceGroups
      ? choiceGroups
        .map(cg => {
          return map[cg];
        })
        .join(';')
      : choiceGroups;
    return choicesMulti;
  }

  const cleanChoice = choice => {
    if (choice) {
      return choice.charAt(0).toUpperCase() + choice.slice(1).replace('_', ' ');
    } else {
      return '';
    }
  }

  const transformChoice = choice => {
    return choice ? choice.toString().replace(/_/g, ' ') : undefined;
  }

  const determineRecordType = x => {
    var rt = x.form.RecordType

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
  }

  const getClosedDate = x => {
    var closed = x.form.case.update.closed
    var date = x.server_modified_on
    return closed && closed == true ? date : undefined;
  };

  const lookupMap = (item, map) => {
    return item ? map[item] : undefined;
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

  const supervisorMap = {
    community_health_nurse: "Community_health_nurse",
    chw_supervisor: "CHW_supervisor",
    chewschas: "Chewschas",
    other: "Other",
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
};

  const testusers = ['test.2021', 'test.location', 'test.michel', 'test.nkamagambo', 'anthony.maina', 'anthony', 'beth.test', 'chw_test_sd', 'erinsuptest', 'erintest', 'julia.test', 'lwala', 'lwalachw', 'omondi.george', 'openfn', 'pamela.test', 'paul.odero', 'philip.herman', 'sup_test_sd', 'test_user', 'test.chw', 'tonnie.maina'];

  const visits = state.data.commCareSubmissions.filter(x => {return (!testusers.includes(x.metadata.username))}).map(x => {
    return {
      'Person__r.CommCare_ID__c': x.form.case['@case_id'],
      CommCare_Visit_ID__c: x.metadata.instanceID,
      CommCare_ID__c: x.id,
      Date__c: x.form.Date,
      Birth_Status__c: jsonValue(x, 'form.ANCs.pregnancy_danger_signs.Delivery_Information.child_status'),
      // Catchment__c: locationsByUserId[x.form.owner_id].catchment,
      'Catchment__r.Name': jsonValue(x, 'form.location_info.catchment_name'),
      'RecordType.Name': determineRecordType(x),
      Use_mosquito_net__c: cleanChoice(jsonValue(x, 'form.question1.sleep_under_net')),
      Individual_birth_plan_counselling__c: jsonValue(x, 'form.ANCs.pregnancy_danger_signs.individual_birth_plan'),
      Reason_for_not_taking_a_pregnancy_test__c: transformChoice(jsonValue(x, 'form.TT5.Mother_Information.pregancy_test.No_Preg_Test')),
      Pregnancy_danger_signs__c: lookupMap(jsonValue(x, 'form.ANCs.pregnancy_danger_signs.pregnancy_danger_signs'), pregDangerMap),
      Child_Danger_Signs__c: lookupMap(jsonValue(x, 'form.TT5.Child_Information.Danger_Signs.Other_Danger_Signs'), childDangerSignsMap),
      Current_Malaria_Status__c: cleanChoice(jsonValue(x, 'form.Malaria_Status')),
      Malaria_Home_Test__c: jsonValue(x, 'form.treatment_and_tracking.malaria_test_date'),
      Malaria_Home_Treatment__c: jsonValue(x, 'form.treatment_and_tracking.malaria_test_date'),
      Persons_symptoms__c: joinMap(jsonValue(x, 'form.treatment_and_tracking.symptoms_check_other'), symptomsMap),
      Active_in_Support_Group__c: jsonValue(x, 'form.HAWI.Support_Group'),
      HAWI_Defaulter__c: yesNoToBoolean(jsonValue(x, 'form.HAWI.default')),
      Date_of_Default__c: jsonValue(x, 'form.HAWI.date_of_default'),
      Persons_temperature__c: jsonValue(x, 'form.treatment_and_tracking.temperature'),
      Days_since_illness_start__c: checkAlternativePath(jsonValue(x, 'form.duration_of_sickness'), jsonValue(x, 'form.treatment_and_tracking.duration_of_sickness')),
      Newborn_visited_48_hours_of_delivery__c: jsonValue(x, 'form.TT5.Child_Information.newborn_visited_48_hours_of_delivery'),
      Newborn_visited_by_a_CHW_within_6_days__c: jsonValue(x, 'form.TT5.Child_Information.visit_6_days_from_delivery'),
      Malaria_test__c: cleanChoice(jsonValue(x, 'form.treatment_and_tracking.malaria_test')),
      Fever__c: cleanChoice(jsonValue(x, 'form.treatment_and_tracking.symptoms_check_fever')),
      Cough__c: cleanChoice(jsonValue(x, 'form.treatment_and_tracking.symptoms_check_cough')),
      Diarrhoea__c: cleanChoice(jsonValue(x, 'form.treatment_and_tracking.check_diarrhea')),
      TB_patients_therapy_observed__c: jsonValue(x, 'form.treatment_and_tracking.observed_tb_therapy'),
      Injuries_or_wounds__c: jsonValue(x, 'form.treatment_and_tracking.wounds_or_injuries'),
      Currently_on_ART_s__c: jsonValue(x, 'form.HAWI.ART'),
      Immediate_Breastfeeding__c: jsonValue(x, 'form.ANCs.pregnancy_danger_signs.Delivery_Information.Breastfeeding_Delivery'),
      Exclusive_Breastfeeding__c: jsonValue(x, 'form.TT5.Child_Information.Exclusive_Breastfeeding.Exclusive_Breastfeeding'),
      Counselled_on_Exclusive_Breastfeeding__c: jsonValue(x, 'form.TT5.Child_Information.Exclusive_Breastfeeding.counseling'),
      LMP__c: jsonValue(x, 'form.TT5.Mother_Information.when_was_your_lmp'),
      Family_Planning__c: cleanChoice(jsonValue(x, 'form.TT5.Mother_Information.family_planning')),
      Family_Planning_Method__c: jsonValue(x, 'form.TT5.Mother_Information.family_planning_method'),
      FP_Method_Distributed__c: joinMap(jsonValue(x, 'form.TT5.Mother_Information.FP_commodity'), fpMethodMap),
      Reasons_for_not_taking_FP_method__c: joinMap(jsonValue(x, 'form.TT5.Mother_Information.No_FPmethod_reason'), reasonMap),
      Pregnant__c: yesNoToBoolean(jsonValue(x, 'form.TT5.Mother_Information.Pregnant')),
      Counselled_on_FP_Methods__c: cleanChoice(jsonValue(x, 'form.TT5.Mother_Information.CounselledFP_methods')),
      Client_counselled_on__c: transformChoiceGroups(x, counselMap),
      Client_provided_with_FP__c: cleanChoice(jsonValue(x, 'form.TT5.Mother_Information.was_the_woman_15-49yrs_provided_with_family_planning_commodities_by_chv')),
      Newborn_visited_48_hours_of_delivery__c: jsonValue(x, 'form.TT5.Child_Information.newborn_visited_48_hours_of_delivery'),
      Mother_visit_counselling__c: handleMultiSelectOriginal(jsonValue(x, 'form.TT5.Child_Information.did_you_consel_the_mother_on1')),
      mother_visited_48_hours_of_the_delivery__c: jsonValue(x, 'form.TT5.Child_Information.visit_mother_48'),
      Newborn_visit_counselling__c: handleMultiSelectOriginal(jsonValue(x, 'form.TT5.Child_Information.did_you_consel_the_mother_on2')),
      Know_HIV_status__c: checkAlternativePath(jsonValue(x, 'form.known_hiv_status'), jsonValue(x, 'form.HAWI.known_hiv_status')),
      HIV_Status__c: checkAlternativePath( jsonValue(x, 'form.hiv_status'),jsonValue(x, 'form.HAWI.hiv_status')),
      Treatment_Distribution__c: joinMap(jsonValue(x, 'form.treatment_and_tracking.distribution.distributed_treatments'), treatmentDistributionMap),
      Current_Height__c: jsonValue(x, 'form.TT5.Child_Information.Nutrition.current_height'),
      Current_MUAC__c: jsonValue(x, 'form.TT5.Child_Information.Nutrition.MUAC'),
      Current_Nutrition_Status__c: transformReason(jsonValue(x, 'form.TT5.Child_Information.Nutrition2.Nutrition_Status'), nutritionMap),
      Default_on_TB_treatment__c: cleanChoice(jsonValue(x, 'form.treatment_and_tracking.default_tb_treatment')),
      Received_pregnancy_test__c: jsonValue(x, 'form.TT5.Mother_Information.pregancy_test.did_you_adminsiter_a_pregnancy_test'),
      Pregnancy_test_result__c: jsonValue(x, 'form.TT5.Mother_Information.pregancy_test.pregnancy_test_result'),
      Chronic_illness__c: transformMultiselect(jsonValue(x, 'form.question1.please_specify_which_chronic_illness_the_person_has')),
      Childs_breath_per_minute__c: jsonValue(x, 'form.psbi.breaths_per_minuite'),
      Child_chest_in_drawing__c: jsonValue(x, 'form.psbi.Child_chest_in_drawing_c'),
      Caregiver_counseled_on_delayed_milestone__c: jsonValue(x, 'form.TT5.Child_Information.ecd_milestones.did_you_counsel_the_caregiver_on_delayed_milestones'),
      Delayed_Milestone__c: jsonValue(x, 'form.TT5.Child_Information.ecd_milestones.does_the_child_has_a_delayed_milestone'),
      Child_has_2_or_more_play_items__c: jsonValue(x, 'form.TT5.Child_Information.ecd_milestones.does_the_child_has_2_or_more_play_items_at_home'),
      Child_has_3_more_picture_books__c: jsonValue(x, 'form.TT5.Child_Information.ecd_milestones.does_the_child_has_3_or_more_picture_books'),
      Delayed_Milestones_Counselled_On__c: transformReason(jsonValue(x, 'form.TT5.Child_Information.ecd_milestones.which_delayed_milestone_area_did_you_counsel_the_caregiver_on'), milestoneMap),
      Delayed_Milestone_Type__c: transformReason(jsonValue(x, 'form.TT5.Child_Information.ecd_milestones.which_delayed_milestone'), milestoneTypeMap),
      Caretaker_trained_in_muac__c: jsonValue(x, 'form.TT5.Child_Information.caretaker_muac.mother_trained_muac'),
      Caretaker_screened_for_muac_this__c: jsonValue(x, 'form.TT5.Child_Information.caretaker_muac.mother_screened_child_muac'),
      Caretaker_muac_findings__c: jsonValue(x, 'form.TT5.Child_Information.caretaker_muac.mother_screened_child_muac_result'),
      Caretaker_action_after_muac_screening__c: jsonValue(x, 'form.TT5.Child_Information.caretaker_muac.mother_screened_muac_action'),
      of_Caretaker_MUAC_screenings__c: jsonValue(x, 'form.TT5.Child_Information.caretaker_muac.mother_nb_screening'),
      Pulse_Oximeter__c: jsonValue(x, 'form.psbi.pulse_oximeter_available'),
      Heart_Rate_Pulse_Oximeter__c: jsonValue(x, 'form.psbi.heart_rate_pulse_oximeter'),
      Oxygen_Concentration_Pulse_Oximeter__c: jsonValue(x, 'form.psbi.oxygen_concentration'),
      Can_child_drink__c: jsonValue(x, 'form.psbi.can_child_drink'),
      Antibiotic_provided_for_fast_breathing__c: jsonValue(x, 'form.psbi.antibiotic_fast_breathing'),
      Antibiotic_provided_for_chest_indrawing__c: jsonValue(x, 'form.psbi.antibiotic_chest_indrawing'),
      Supervisor_Visit__c: joinMap(jsonValue(x, 'form.supervisor_visit'), supervisorMap),
      Nutrition_Case_Managed__c: jsonValue(x, 'form.TT5.Child_Information.Nutrition2.nutrition_case_managed'),
      Nutrition_Danger_Signs__c: handleMultiSelectOriginal(jsonValue(x, 'form.TT5.Child_Information.Nutrition2.nutrition_danger_signs')),
      Why_was_nutrition_case_not_managed__c: jsonValue(x, 'form.TT5.Child_Information.Nutrition2.nutrition_case_not_managed_why'),
      Community_Nutrition_Treatment__c: jsonValue(x, 'form.TT5.Child_Information.Nutrition2.nutrition_treatment_severe'),
      Why_was_nutrition_treatment_not_given__c: jsonValue(x, 'form.TT5.Child_Information.Nutrition2.nutrition_treatment_not_given'),
      Bulk_Upload__c: true
      // Case_Closed_Date__c: getClosedDate(x) // Removed from SF?
    }
  }
  );

  return { ...state, visits };
});

bulk(
  'Person_visit__c',
  'upsert',
  {
    extIdField: 'CommCare_ID__c',
    failOnError: true,
    allowNoOp: true,
  },
  state => {
    console.log('Bulk upserting visits.');
    return state.visits;
  }
);  
```