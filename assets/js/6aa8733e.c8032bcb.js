"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[87733],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>y});var t=r(96540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),_=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=_(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=_(r),d=i,y=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return r?t.createElement(y,o(o({ref:n},c),{},{components:r})):t.createElement(y,o({ref:n},c))}));function y(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var _=2;_<a;_++)o[_]=r[_];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3533:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>_});var t=r(58168),i=(r(96540),r(15680));const a={title:"WF4-2. Bulk upsert Services",sidebar_label:"\u2728 WF4-2. Bulk upsert Services",id:"WF4-2-Bulk-upsert-Services-2023-05-19",keywords:["library","job","expression","salesforce","bulk","join","map","query","JSON"]},o=void 0,s={unversionedId:"library/jobs/auto/WF4-2-Bulk-upsert-Services-2023-05-19",id:"library/jobs/auto/WF4-2-Bulk-upsert-Services-2023-05-19",title:"WF4-2. Bulk upsert Services",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/WF4-2-Bulk-upsert-Services-2023-05-19.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/WF4-2-Bulk-upsert-Services-2023-05-19",permalink:"/adaptors/library/jobs/auto/WF4-2-Bulk-upsert-Services-2023-05-19",draft:!1,tags:[],version:"current",frontMatter:{title:"WF4-2. Bulk upsert Services",sidebar_label:"\u2728 WF4-2. Bulk upsert Services",id:"WF4-2-Bulk-upsert-Services-2023-05-19",keywords:["library","job","expression","salesforce","bulk","join","map","query","JSON"]},sidebar:"adaptors",previous:{title:"\u2728 WF2-2. Bulk upsert Persons",permalink:"/adaptors/library/jobs/auto/WF2-2-Bulk-upsert-Persons-2023-05-19"},next:{title:"Q3 2022] Upsert Person Visit",permalink:"/adaptors/library/jobs/auto/Q3-2022-Upsert-Person-Visit-2022-06-28"}},l={},_=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:_},p="wrapper";function u(e){let{components:n,...r}=e;return(0,i.yg)(p,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,i.yg)("h2",{id:"metadata"},"Metadata"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Name: WF4-2. Bulk upsert Services"),(0,i.yg)("li",{parentName:"ul"},"Adaptor: ",(0,i.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,i.yg)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,i.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,i.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,i.yg)("inlineCode",{parentName:"a"},"latest"))),(0,i.yg)("li",{parentName:"ul"},"Created 10 months ago"),(0,i.yg)("li",{parentName:"ul"},"Updated 8 months ago"),(0,i.yg)("li",{parentName:"ul"},"Score: ",(0,i.yg)("b",null,"92")," (an ",(0,i.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,i.yg)("h2",{id:"key-functions"},"Key Functions"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"bulk"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"join"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"map"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"query"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"JSON")),(0,i.yg)("h2",{id:"expression"},"Expression"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"// NOTE: We perform a query before anything else if this is a 'Case'\nfn(state => {\n  // state.type = state.data.indices.parent.case_type;\n  if (state.payloads.length == 0) return { ...state, services: [] };\n\n  const caseType = state.payloads\n    .filter(c => c.indices.parent.case_type === 'Case')\n    .map(c => c.indices.parent.case_id);\n\n   console.log(JSON.stringify(caseType, null, 2));\n\n  if (caseType.length > 0)\n    return query(\n      `SELECT Person__r.CommCare_ID__c FROM Service__c WHERE Service_UID__c IN ('${caseType.join(\n        \"','\"\n      )}')`\n    )(state).then(state => {\n      const { records } = state.references[0];\n      const ccId =\n        records.length == 1 ? records[0].Person__r.CommCare_ID__c : null;\n      return { ...state, ccId };\n    });\n\n  return state;\n});\n\n// NOTE: We construct a facilityMap and populate some conditional relationships\nfn(state => {\n  if (state.payloads.length == 0) return state;\n  const facilityMap = {\n    Lwala_Hospital: 'Lwala Hospital',\n    Minyenya_Dispensary: 'Minyenya Dispensary',\n    Ndege_Oriedo_Dispensary: 'Ndege Oriedo Dispensary',\n    'Rongo_Sub-District_Hospital': 'Rongo Sub-District Hospital',\n    Kangeso_Dispensary: 'Kangeso Dispensary',\n    Ngodhe_Dispensary: 'Ngodhe Dispensary',\n    Ngere_Dispensary: 'Ngere Dispensary',\n    Verna_Health_Center: 'Verna Health Center',\n    Kochola_Dispensary: 'Kochola Dispensary',\n    Ongo_Health_Center: 'Ongo Health Center',\n    Royal_Medical_Center: 'Royal Medical Center',\n    Rosewood_Facility: 'Rosewood Facility',\n    Other: 'Other',\n  };\n\n  const pregDangerMap = {\n    Vaginal_Bleeding: 'Vaginal Bleeding',\n    Water_Breaks: 'Water Breaks before Time of Delivery',\n    Prolonged_Labour: 'Prolonged Labour over 12 Hours',\n    Convulsions: 'Convulsions or Fits',\n    Abdominal_Pain: 'Severe Abdominal Pain before Delivery',\n    High_Fever: 'High Fever',\n    Low_Baby_Movement: 'Feeling the Baby move less or not at all',\n    Swelling: 'Swelling of Face and Hands',\n    Severe_Headache: 'Severe or Continuous Headache for more than 12 hours',\n    Severe_Vomiting: 'Severe or Continuous Vomiting',\n    none: 'None',\n  };\n\n  const serviceMap = {\n    Scheduled_PSC_Apt: 'Scheduled PSC Apt',\n    Adverse_Drug_Reaction_Side_Effect: 'Adverse Drug Reaction/Side Effect',\n    Malnutrition: 'Malnutrition',\n    Malaria: 'Malaria',\n    TB: 'TB',\n    Treatment_for_Other_OIs: 'Treatment for Other OIs',\n    ARI: 'ARI',\n    Anemia: 'Anemia',\n    Diarrhea: 'Diarrhea',\n    Pregnancy_Care: 'Pregnancy Care (ANC)',\n    Family_Planning: 'Family Planning (FP)',\n    Preconception_Counseling: 'Preconception Counseling',\n    Injury: 'Injury',\n    Other: 'Other',\n  };\n\n  const milestoneTypeMap = {\n    cognitive_delays_learning_difficulties:\n      'Cognitive Delays (Learning Difficulties)',\n    motor_delays: 'Motor Delays',\n    speech_and_language_delay: 'Speech and language Delay',\n    social_and_emotional: 'Social and emotional',\n  };\n\n  const symptomsMap = {\n    convulsions: 'Convulsions',\n    not_able_to_eatdrink: 'Not able to eat/drink',\n    vomits_everything: 'Vomits everything',\n    'chest_in-drawing': 'Chest in-drawing',\n    unusually_sleepyunconscious: 'Unusually sleepy/unconscious',\n    swelling_of_both_feet: 'Swelling of both feet',\n  };\n\n  const childSignMap = {\n    Poor_Breastfeeding: 'Poor Breastfeeding (under 6 months old child)',\n    not_able_to_feed_since_birth_or_stopped_feeding_well:\n      'Not able to feed since birth, or stopped feeding well',\n    not_able_to_breastfeed: 'Not able to breastfeed',\n    Fever: 'Fever (37.5 C or more)',\n    very_low_temperature: 'Very low temperature (35.4 C or less)',\n    shivering: 'Shivering',\n    Fast_Breathing: 'Fast Breathing',\n    Very_Sleepy: 'Very Sleepy',\n    Convulsions_and_Fits: 'Convulsions and Fits',\n    only_moves_when_stimulated_or_does_not_move_even_on_stimulation:\n      'Only moves when stimulated, or does not move even on stimulation',\n    yellow_solebaby_body_turning_yellow_especially_eyes_palms_soles:\n      'Yellow sole(Baby body turning yellow especially eyes, palms, soles)',\n    bleeding_from_the_umbilical_stump: 'Bleeding from the umbilical stump',\n    signs_of_local_infection_umbilicus_is_red_or_draining_pus_skin_boils_or_eye:\n      'Signs of local infection: umbilicus is red or draining pus, skin boils, or eyes draining pus',\n    weight_chart_using_color_coded_scales_if_red_or_yellowweight_below_25kg_or_:\n      'Weight chart using color coded scales if RED or YELLOW(Weight below 2.5kg or born less than 36 weeks of age)',\n    unable_to_cry: 'Unable to cry',\n    cyanosis: 'Cyanosis',\n    bulging_fontanelle: 'Bulging fontanelle',\n  };\n\n  const otherReferralMap = {\n    HIV_Testing_and_Counseling: 'HIV Testing and Counseling',\n    Visit_to_Clinician: 'Visit to Clinician',\n    Adverse_Drug_Reaction_Side_Effect: 'Adverse Drug Reaction Side Effect',\n    Malnutrition: 'Malnutrition',\n    Malaria: 'Malaria',\n    PMTCT: 'PMTCT',\n    TB: 'TB',\n    Treatment_for_other_OIs: 'Treatment for other OIs',\n    ARI: 'ARI',\n    Anemia: 'Anemia',\n    Diarrhea: 'Diarrhea',\n    Pregnancy_Care_ANCE: 'Pregnancy Care (ANC)',\n    Family_Planning_FP: 'Family Planning (FP)',\n    Preconception_Counseling: 'Preconception Counseling',\n    Injury: 'Injury',\n    blood_in_stool: 'Blood in Stool',\n    Blood_in_Stool: 'Blood in Stool',\n    Immunization: 'Immunization',\n    Routine_Health_Check_ups: 'Routine Health Check ups',\n    routine_health_check_ups: 'Routine Health Check ups',\n    Other: 'Other',\n    Poor_Breastfeeding: 'Poor Breastfeeding (under 6 months old child)',\n    not_able_to_feed_since_birth_or_stopped_feeding_well:\n      'Not able to feed since birth, or stopped feeding well',\n    not_able_to_breastfeed: 'Not able to breastfeed',\n    Fever: 'Fever (37.5 C or more)',\n    very_low_temperature: 'Very low temperature (35.4 C or less)',\n    shivering: 'Shivering',\n    Fast_Breathing: 'Fast Breathing',\n    Very_Sleepy: 'Very Sleepy',\n    Convulsions_and_Fits: 'Convulsions and Fits',\n    only_moves_when_stimulated_or_does_not_move_even_on_stimulation:\n      'Only moves when stimulated, or does not move even on stimulation',\n    yellow_solebaby_body_turning_yellow_especially_eyes_palms_soles:\n      'Yellow sole(Baby body turning yellow especially eyes, palms, soles)',\n    bleeding_from_the_umbilical_stump: 'Bleeding from the umbilical stump',\n    signs_of_local_infection_umbilicus_is_red_or_draining_pus_skin_boils_or_eye:\n      'Signs of local infection: umbilicus is red or draining pus, skin boils, or eyes draining pus',\n    weight_chart_using_color_coded_scales_if_red_or_yellowweight_below_25kg_or_:\n      'Weight chart using color coded scales if RED or YELLOW(Weight below 2.5kg or born less than 36 weeks of age)',\n    unable_to_cry: 'Unable to cry',\n    cyanosis: 'Cyanosis',\n    bulging_fontanelle: 'Bulging fontanelle',\n  };\n\n  const homeCareMap = {\n    Adherence_Counseling: 'Adherence Counseling',\n    Pill_Count_Monitoring: 'Pill Count Monitoring',\n    Nutrition_Assessment_and_Counseling: 'Nutrition Assessment and Counseling',\n    WASH_Counseling: 'WASH Counseling',\n    Prevention_Counseling: 'Prevention Counseling',\n    Psychosocial_Support: 'Psychosocial Support',\n    Provision_of_Supplies: 'Provision of Supplies',\n    OI_Management_Support: 'OI Management Support',\n  };\n\n  const ecdMap = {\n    physiotherapy: 'Physiotherapy',\n    speech_therapy: 'Speech Therapy',\n    nutrition_education: 'Nutrition Education',\n    play_therapy: 'Play Therapy',\n    assessment: 'Assessment',\n    counselling: 'Counselling',\n    other: 'Other',\n  };\n\n  const clinicalMap = {\n    diarrhea: 'Diarrhea',\n    malnutrition: 'Malnutrition',\n    malaria: 'Malaria',\n    acute_respiratory_infection: 'Acute Respiratoy Infection (ARI)',\n    accident_injury: 'Accident/Injury',\n    other: 'Other',\n  };\n\n  const caseType = state.payloads\n    .filter(c => c.indices.parent.case_type === 'Case')\n    .map(c => c.indices.parent.case_id);\n\n  const personType = state.payloads\n    .filter(c => c.indices.parent.case_type === 'Person')\n    .map(c => c.indices.parent.case_id);\n\n  let relationships = [];\n\n  // If it's a person, add the person relationship\n  if (personType.length > 0) {\n    personType.forEach(case_id => {\n      relationships.push({ 'Person__r.CommCare_ID__c': case_id });\n    });\n  }\n\n  // If it's a service, add the service rship AND a different person rship\n  if (caseType.length > 0) {\n    caseType.forEach(case_id => {\n      relationships.push({ 'Parent_Service__r.Service_UID__c': case_id });\n    });\n\n    relationships.push({ 'Person__r.CommCare_ID__c': state.ccId });\n  }\n\n  return {\n    ...state,\n    facilityMap,\n    relationships,\n    serviceMap,\n    pregDangerMap,\n    milestoneTypeMap,\n    symptomsMap,\n    childSignMap,\n    otherReferralMap,\n    homeCareMap,\n    clinicalMap,\n    ecdMap,\n  };\n});\n\n// NOTE: We finally upsert to the Service__c object in Salesforce\nfn(state => {\n  if (state.payloads.length == 0) return state;\n  const services = state.payloads\n    .filter(r => r.properties.owner_id !== '8e725928e3ce43d19b390dd604097069')\n    .map(r => {\n      // pregnancyDangerSigns\n      const pCheck = r.properties.pregnancy_danger_signs;\n      const pValue =\n        pCheck && pCheck !== ''\n          ? pCheck\n              .replace(/ /gi, ';')\n              .split(';')\n              .map(value => {\n                return state.pregDangerMap[value] || value;\n              })\n          : undefined;\n      const pregnancyDangerSigns = pValue ? pValue.join(';') : undefined;\n\n      // childDangerSigns\n      const cCheck = r.properties.Other_Danger_Signs;\n      const cValue =\n        cCheck && cCheck !== ''\n          ? cCheck\n              .replace(/ /gi, ';')\n              .split(';')\n              .map(value => {\n                return state.childSignMap[value] || value;\n              })\n          : undefined;\n      const childDangerSigns = cValue ? cValue.join(';') : undefined;\n\n      // delayedMilestone\n      const dCheck = r.properties.which_delayed_milestone;\n      const dValue =\n        dCheck && dCheck !== ''\n          ? dCheck\n              .replace(/ /gi, ';')\n              .split(';')\n              .map(value => {\n                return state.milestoneTypeMap[value] || value;\n              })\n          : undefined;\n      const delayedMilestone = dValue ? dValue.join(';') : undefined;\n\n      // seriousSymptoms\n      const sCheck = r.properties.symptoms_check_other;\n      const sValue =\n        sCheck && sCheck !== ''\n          ? sCheck\n              .replace(/ /gi, ';')\n              .split(';')\n              .map(value => {\n                return state.symptomsMap[value] || value;\n              })\n          : undefined;\n      const seriousSymptoms = sValue ? sValue.join(';') : undefined;\n\n      // otherReferralReason\n      const otCheck = r.properties.Other_Referral_Reasons;\n      const otValue =\n        otCheck && otCheck !== ''\n          ? otCheck\n              .replace(/ /gi, ';')\n              .split(';')\n              .map(value => {\n                return state.otherReferralMap[value] || value;\n              })\n          : undefined;\n      const otherReferralReason = otValue ? otValue.join(';') : undefined;\n\n      // homeBasedCareRendered\n      const homeCheck = r.properties.Home_Based_Care_Provided;\n      const homeValue =\n        homeCheck && homeCheck !== ''\n          ? homeCheck\n              .replace(/ /gi, ';')\n              .split(';')\n              .map(value => {\n                return state.homeCareMap[value] || value;\n              })\n          : undefined;\n      const homeBasedCareRendered = homeValue ? homeValue.join(';') : undefined;\n\n      // ecdClinicalService\n      const ecdCheck = r.properties.ECD_Clinical_Service;\n      const ecdValue =\n        ecdCheck && ecdCheck !== ''\n          ? ecdCheck\n              .replace(/ /gi, ';')\n              .split(';')\n              .map(value => {\n                return state.ecdMap[value] || value;\n              })\n          : undefined;\n      const ecdClinicalService = ecdValue ? ecdValue.join(';') : undefined;\n\n      return {\n        'Person__r.CommCare_ID__c':\n          r.indices.parent.case_type === 'Person'\n            ? r.indices.parent.case_id\n            : r.indices.parent.case_type === 'Case'\n            ? state.ccId\n            : undefined,\n        Service_UID__c: r.case_id,\n        CommCare_Code__c: r.case_id,\n        RecordTypeID: '01224000000YAuK',\n        'Household_CHW__r.CommCare_ID__c': r.properties.CHW_ID,\n        Open_Case__c: r.closed === false ? true : false,\n        Case_Closed_Date__c: r.properties.date_closed,\n        Age_Time_of_Service__c: r.properties.age,\n        Source__c: r.properties.Source === '1',\n        Clinical_facility__c: r.properties.Facility_Visited\n          ? state.facilityMap[r.properties.Facility_Visited]\n          : undefined,\n        Client_Received_Services_at_Facility2__c: r.properties.Facility_Visit,\n        Clinical_Visit_Date__c:\n          r.properties.Facility_Date === '' ||\n          r.properties.Facility_Date === undefined\n            ? undefined\n            : r.properties.Facility_Date,\n        CHW_Followed_Up_with_the_Client__c: r['properties.Follow-Up']!== ''\n            ? r['properties.Follow-Up']\n            : undefined,\n        Follow_Up_Date__c: r['properties.Follow-Up_Date'],\n     \n        Person_Complied_w_Referral_in_24_hrs__c:r.properties.referral_compliance,\n        Skillled_Delivery__c: r.properties.skilled_delivery,\n        Child_received_immunizations__c: r.properties.immunization,\n        Received_a_diagnosis_for_PSBI__c: r.properties.psbi_diagnosis !== ''\n            ? r.properties.psbi_diagnosis\n            : undefined, //Form: CHW.Follow-Up.PSBI.psbi_diagnosis\n        Received_antibiotics_per_protocol__c: r.properties.antibiotic_8days, //Form: CHW.Follow-Up.PSBI.antibiotic_8day\n        \n        Distributed_Treatment_on_Last_Visit__c:\n          r.properties.distribute_treatment, //Form: CHW.Follow-Up.distribute_treatment\n        Person_had_an_adverse_drug_reaction__c:\n          r.properties.adverse_drug_reaction,\n        Defaulted__c:\n          r.properties.date_of_default && r.properties.date_of_default !== ''\n            ? true\n            : false,\n        Date_of_Default__c: r.properties.date_of_default,\n        Client_s_Symptoms_Improved__c: r.properties.Client_Improved,\n        Case_Type__c: r.properties.Case_Type,\n        Follow_Up_By_Date__c:\n          r.properties['Follow-Up_By_Date'] &&\n          r.properties['Follow-Up_By_Date'] !== ''\n            ? r.properties['Follow-Up_By_Date']\n            : undefined,\n        Date__c: new Date(r.properties.date_opened).toISOString(),\n        Reason_for_Service__c: r.properties.Reason_for_Service,\n        Type_of_Service__c: r.properties.Type_of_Service,\n        Malaria_Status__c: r.properties.Malaria_Status,\n        Home_Treatment_Date__c: r.properties.home_treatment_date,\n        Malaria_Home_Test_Date__c: r.properties.malaria_test_date,\n        Home_ORS__c: r.properties.clinic_ors,\n        Home_Zinc__c: r.properties.clinic_zinc,\n        Height__c: r.properties.height,\n        Weight__c: r.properties.weight,\n        MUAC__c: r.properties.muac,\n        Nutrition_Status__c: r.properties.Nutrition_Status,\n        \n        //===== NEW MAPPINGS - JAN 14 ===========================//\n        Pregnancy_Danger_Signs__c: pregnancyDangerSigns,\n        Child_Danger_Signs__c: childDangerSigns,\n        Delayed_Milestone__c: delayedMilestone,\n        Serious_Symptoms__c: seriousSymptoms,\n        Other_Referral_Reasons__c: otherReferralReason,\n        Home_Based_Care_Rendered__c: homeBasedCareRendered,\n        PSBI_Visit__c:\n          r.properties.psbi_task && r.properties.psbi_task !== ''\n            ? `Day ${r.properties.psbi_task}`\n            : undefined,\n        Clinical_Services__c: r.properties.TT5_Clinical_Service\n          ? state.clinicalMap[r.properties.TT5_Clinical_Service]\n          : r.properties.TT5_Clinical_Service,\n        Referred_Facility__c: r.properties.referred_facility\n          ? state.facilityMap[r.properties.referred_facility]\n          : r.properties.referred_facility,\n        HAWI_Clinical_Services__c: r.properties.HAWI_Clinical_Service\n          ? state.serviceMap[r.properties.HAWI_Clinical_Service]\n          : r.properties.HAWI_Clinical_Service,\n        ECD_Clinical_Services__c: ecdClinicalService,\n        \n      };\n    });\n\n  return { ...state, services };\n});\n/* JSON logging of records\nfn(state => {\n  console.log('Services to upsert ::', JSON.stringify(state.services));\n  return state;\n});\n*/\n\nbulk(\n  'Service__c',\n  'upsert',\n  {\n    extIdField: 'Service_UID__c',\n    failOnError: true,\n    allowNoOp: true,\n  },\n  state => {\n    console.log('Bulk upserting service...');\n    return state.services;\n  }\n);\n")))}u.isMDXComponent=!0}}]);