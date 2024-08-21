"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[20118],{90339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>_,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(58168),o=(t(96540),t(15680));const a={title:"WF1-2 Bulk upsert HHs and HH Visits",sidebar_label:"\u2728 WF1-2 Bulk upsert HHs and HH Visits",id:"WF1-2-Bulk-upsert-HHs-and-HH-Visits-2023-05-19",keywords:["library","job","expression","salesforce","bulk","join","map","query","JSON"]},s=void 0,i={unversionedId:"library/jobs/auto/WF1-2-Bulk-upsert-HHs-and-HH-Visits-2023-05-19",id:"library/jobs/auto/WF1-2-Bulk-upsert-HHs-and-HH-Visits-2023-05-19",title:"WF1-2 Bulk upsert HHs and HH Visits",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/WF1-2-Bulk-upsert-HHs-and-HH-Visits-2023-05-19.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/WF1-2-Bulk-upsert-HHs-and-HH-Visits-2023-05-19",permalink:"/adaptors/library/jobs/auto/WF1-2-Bulk-upsert-HHs-and-HH-Visits-2023-05-19",draft:!1,tags:[],version:"current",frontMatter:{title:"WF1-2 Bulk upsert HHs and HH Visits",sidebar_label:"\u2728 WF1-2 Bulk upsert HHs and HH Visits",id:"WF1-2-Bulk-upsert-HHs-and-HH-Visits-2023-05-19",keywords:["library","job","expression","salesforce","bulk","join","map","query","JSON"]},sidebar:"adaptors",previous:{title:"\u2728 WF2-2 Bulk upsert Persons",permalink:"/adaptors/library/jobs/auto/WF2-2-Bulk-upsert-Persons-2023-05-19"},next:{title:"Q4 2022 Upsert Supervision - Household Spot Check",permalink:"/adaptors/library/jobs/auto/Q4-2022-Upsert-Supervision-Household-Spot-Check-2022-08-24"}},_={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],l={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,o.yg)("h2",{id:"metadata"},"Metadata"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Name: WF1-2 Bulk upsert HHs and HH Visits"),(0,o.yg)("li",{parentName:"ul"},"Adaptor: ",(0,o.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,o.yg)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,o.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v3.0.6"},(0,o.yg)("inlineCode",{parentName:"a"},"v3.0.6"))),(0,o.yg)("li",{parentName:"ul"},"Created over 1 year ago"),(0,o.yg)("li",{parentName:"ul"},"Updated 5 months ago"),(0,o.yg)("li",{parentName:"ul"},"Score: ",(0,o.yg)("b",null,"91")," (an ",(0,o.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.yg)("h2",{id:"key-functions"},"Key Functions"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"bulk"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"join"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"map"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"query"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"JSON")),(0,o.yg)("h2",{id:"expression"},"Expression"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"fn(state => {\n  if (state.payloads.length == 0)\n    return { ...state, housevisits: [], households: [] };\n\n  const owner_ids = state.payloads.map(data => data.properties.owner_id);\n  const uniq_owner_ids = [...new Set(owner_ids)];\n\n  return { ...state, uniq_owner_ids };\n});\n\n\nfn(state => {\n  if (state.payloads.length == 0) return state;\n\n  return query(\n    `SELECT CommCare_User_ID__c, Id village, Parent_Geographic_Area__c area, Parent_Geographic_Area__r.Name name, Parent_Geographic_Area__r.Parent_Geographic_Area__c catchment FROM Location__c catchment WHERE CommCare_User_ID__c IN ('${state.uniq_owner_ids.join(\n      \"','\"\n    )}') GROUP BY Id, CommCare_User_ID__c, Parent_Geographic_Area__c, Parent_Geographic_Area__r.Name, Parent_Geographic_Area__r.Parent_Geographic_Area__c`\n  )(state);\n});\n\nfn(state => {\n  if (state.payloads.length == 0) return state;\n\n  console.log('Done querying \u2705');\n\n  return state;\n});\n\nfn(state => {\n  if (state.payloads.length == 0) return state;\n\n  console.log(\n    'Filtering out unwanted users and applying mapping for households and housevisits'\n  );\n\n  const [reference] = state.references;\n\n  //HMN 06/11/2023\n // console.log(JSON.stringify(reference.records, null, 2));\n\n  const records = reference.records;\n  const fetchReference = (owner_id, arg) => {\n    const result =\n      records && records.length > 0\n        ? records.filter(record => record.CommCare_User_ID__c === owner_id)\n        : 0;\n\n    //TODO: Update default value for 'unknown location' before go-live\n    return result.length > 0\n      ? result[0][arg]\n      : 'a000800001tMobaAAC' /*unknown location*/;\n  };\n\n  const supervisorMap = {\n    community_health_nurse: 'Community Health Nurse',\n    chw_supervisor: 'CHW Supervisor',\n    chewschas: 'CHEWs/CHAs',\n    other: 'Other',\n    none: 'None',\n  };\n\n  const insuranceMap = {\n    nhif: 'NHIF',\n    Linda_mama: 'Linda mama',\n    other_please_specify_if_active: 'Other',\n    none: 'None',\n  };\n\n  const households = state.payloads\n    /* HMN 050723 \n    .filter(\n      h =>\n        h.properties.commcare_username !== 'openfn.test' &&\n        h.properties.commcare_username !== 'test.2021' &&\n        h.properties.test_user !== 'Yes'\n    )\n    */\n    .map(h => {\n      // Special calculations ==================================================\n      const insuranceStatus = h.properties.health_insurance;\n      const Health_insurance_type__c =\n        insuranceStatus && insuranceStatus === 'other_please_specify_if_active'\n          ? 'Other'\n          : insuranceStatus === 'nhif'\n          ? 'NHIF'\n          : insuranceStatus === 'Linda_mama' || 'linda_mama'\n          ? 'Linda mama'\n          : insuranceStatus;\n\n      const hhStatus = h.properties.Household_Status;\n      const Active_Household__c =\n        hhStatus && hhStatus === 'No'\n          ? false\n          : hhStatus === 'Yes'\n          ? true\n          : hhStatus;\n\n      const reason = h.properties.Reason_for_Inactive;\n      const Inactive_Reason__c = reason\n        ? reason.toString().replace(/_/g, ' ')\n        : null;\n //HMN 06/11/2023\n// console.log(JSON.stringify(h.properties, null, 2));\n     /*HMN remove this dependancy 07/07/2023\n     const chw = h.properties.CHW_ID;\n      const Household_CHW__c =\n        chw === 'a030800001zQrk' ? 'a030800001zQrk5' : chw ? chw : undefined;\n      // =======================================================================\n*/\n \n      return {\n        CommCare_Username__c: h.properties.commcare_username,\n        MOH_household_code__c: h.properties.moh_code,\n        CommCare_Code__c: h.case_id,\n        Source__c: true,\n        // TODO: Prod mapping to add back before go-live =======================\n        Household_CHW__c: h.properties.CHW_ID, // Uncomment me to go live!\n        //Household_CHW__c: 'a032400000GHpdsAAD', // Comment me OUT to go live!\n      //  Household_CHW__c: 'a03AW00000643nLYAQ',\n        // =====================================================================\n        Catchment__c: fetchReference(h.properties.owner_id, 'catchment'),\n        Area__c: fetchReference(h.properties.owner_id, 'area'),\n        Village__c: fetchReference(h.properties.owner_id, 'village'),\n        Household_Village__c: h.properties.village,\n        Deaths_in_the_last_6_months__c:\n          h.properties.deaths_in_past_6_months > 0 ? 'Yes' : 'No',\n        Access_to_safe_water__c: h.properties.Safe_Water,\n        Treats_Drinking_Water__c: h.properties.Treats_Drinking_Water,\n        Tippy_Tap__c: h.properties.Active_Handwashing_Station,\n        Pit_Latrine__c: h.properties.Functional_Latrine,\n        Rubbish_Pit__c: h.properties.Rubbish_Pit,\n        Drying_Rack__c: h.properties.Drying_Rack,\n        Kitchen_Garden__c: h.properties.Kitchen_Garden,\n        Cookstove__c: h.properties.Improved_Cooking_Method,\n        Clothe__c: h.properties.Clothesline,\n        WASH_Trained__c: h.properties.WASH_Trained,\n        Uses_ITNs__c: h.properties.ITNs,\n        Has_muac_tape__c: h.properties.family_muac_tape_available,\n        Health_insurance__c: h.properties.health_insurace_cover,\n        Health_insurance_active_status__c: h.properties.healthinsurance_active,\n        Health_insurance_type__c,\n        Other_Health_Insurance__c: h.properties.if_other_please_specify,\n        Work_with_TBA__c: h.properties.tba,\n        TBA_name__c: h.properties.which_tba,\n        Last_Modified_Date_CommCare__c: h.server_date_modified, //Need a case property,\n        Active_Household__c,\n        Inactive_Reason__c,\n        Active_in_Nutrition_Program__c:\n          h.properties.enrolled_in_a_lwala_nutrition_program,\n        lwala_nutrition_program_enrollment_date__c:\n          h.properties.lwala_nutrition_program_enrollment_date,\n        Trained_in_gardening__c: h.properties.household_trained_on_gardening,\n        household_trained_on_gardening_date__c:\n          h.properties.when_was_the_household_trained_on_gardening,\n        Seed_Input_Support__c:\n          h.properties.household_provided_with_seed_input_support,\n        household_provided_with_seed_input_suppo__c:\n          h.properties.when_was_the_household_provided_with_seed_input_support,\n        MIYCN_Trained__c: h.properties.household_trained_on_MIYC,\n        // TODO: @Aleksa to find out if Case_Closed_Date__c still exist\n         Case_Closed_Date__c: h.date_closed //&& h.date_closed == true\n             ? h.date_closed\n             : undefined \n      };\n    });\n\n  const housevisits = state.payloads\n  //HMN remove test user filters \n  /*\n    .filter(\n      h =>\n        h.properties.commcare_username !== 'openfn.test' &&\n        h.properties.commcare_username !== 'test.2021' &&\n        h.properties.test_user !== 'Yes'\n    )*/\n    .map(h => {\n      // Special calculations ==================================================\n    \n      \n      const visitIdC =\n        h.case_id + '_' + h.properties.last_form_opened_date_and_time;\n\n      const hVstatus = h.properties.Household_Status;\n      const Active_Household__c =\n        hVstatus === 'No' ? false : hVstatus === 'Yes' ? true : hVstatus;\n\n      const insuranceTypeC = () => {\n        let status = h.properties.health_insurance;\n\n        let value =\n          status && status !== ''\n            ? status\n                .replace(/ /gi, ';')\n                .split(';')\n                .map(value => {\n                  return insuranceMap[value] || value;\n                })\n            : undefined;\n        return value ? value.join(';') : undefined;\n      };\n\n      const openedC = () => {\n        const form_opened = h.properties.last_form_opened_date_and_time;\n\n        if (form_opened) {\n          const value1 = form_opened.split('-').slice(0, 2).join('-');\n          const value2 = form_opened.split('-').slice(2).join('-');\n          const formattedValue = [value1, value2].join(' ');\n          return new Date(formattedValue).toISOString();\n        }\n        return undefined;\n      };\n\n      return {\n        CommCare_Username__c: h.properties.commcare_username,\n        CommCare_Visit_ID__c: visitIdC,\n        Catchment__c: fetchReference(h.properties.owner_id, 'catchment'),\n        'Household__r.CommCare_Code__c': h.case_id,\n        Date__c: h.properties.Date,\n        Form_Submitted__c: h.properties.last_form_opened_name,\n        Active_Household__c: Active_Household__c,\n        Active_in_Nutrition_Program__c:\n          h.properties.enrolled_in_a_lwala_nutrition_program,\n        lwala_nutrition_program_enrollment_date__c:\n          h.properties.lwala_nutrition_program_enrollment_date,\n        Trained_in_gardening__c: h.properties.household_trained_on_gardening,\n        household_trained_on_gardening_date__c:\n          h.properties.when_was_the_household_trained_on_gardening,\n        Seed_Input_Support__c:\n          h.properties.household_provided_with_seed_input_support,\n        household_provided_with_seed_input_suppo__c:\n          h.properties.when_was_the_household_provided_with_seed_input_support,\n        MIYCN_Trained__c: h.properties.household_trained_on_MIYCN,\n        Kitchen_Garden__c: h.properties.Kitchen_Garden,\n        Access_to_safe_water__c: h.properties.Safe_Water,\n        Treats_Drinking_Water__c: h.properties.Treats_Drinking_Water,\n        Tippy_Tap__c: h.properties.Active_Handwashing_Station,\n        Pit_Latrine__c: h.properties.Functional_Latrine,\n        Rubbish_Pit__c: h.properties.Rubbish_Pit,\n        Drying_Rack__c: h.properties.Drying_Rack,\n        Cookstove__c: h.properties.Improved_Cooking_Method,\n        Clothe__c: h.properties.Clothesline,\n        WASH_Trained__c: h.properties.WASH_Trained,\n        Has_muac_tape__c: h.properties.family_muac_tape_available,\n        Uses_ITNs__c: h.properties.ITNs,\n        Supervisor_Visit__c: h.properties.supervisor_visit\n          ? supervisorMap[h.properties.supervisor_visit]\n          : null,\n        Health_insurance__c: h.properties.health_insurace_cover,\n        Health_insurance_active_status__c: h.properties.healthinsurance_active,\n        Health_insurance_type__c: insuranceTypeC(),\n\n        Other_Health_Insurance__c: h.properties.if_other_please_specify,\n        CommCare_Form_Opened__c: openedC(),\n        \n      };\n    });\n\n  return { ...state, households, housevisits, fetchReference };\n});\n\n//JSON logging of records\n//HMN 06/11/2023\n/*fn(state => {\n  console.log('HHs to upsert ::', JSON.stringify(state.households));\n  return state;\n});*/\n\n\nbulk(\n  'Household__c',\n  'upsert',\n  {\n    extIdField: 'CommCare_Code__c',\n    failOnError: true,\n    allowNoOp: true,\n  },\n  state => {\n    console.log('Bulk upserting households...');\n    return state.households;\n  }\n);\n\nfn(state => {\n  if (state.payloads.length == 0) return state;\n\n  console.log('house holds bulk upsert done');\n  return state;\n});\n\n// TODO clean up in QA used for troubleshooting\n// Uncomment this block to add cooldown\n// fn(state => {\n//   return new Promise((resolve, reject) => {\n//     setTimeout(() => {\n//       console.log('4 second cooldown finished.');\n//       resolve(state);\n//     }, 4000);\n//   });\n// });\n\nbulk(\n  'Visit__c',\n  'upsert',\n  {\n    extIdField: 'CommCare_Visit_ID__c',\n    failOnError: true,\n    allowNoOp: true,\n  },\n  state => {\n    console.log('Bulk upserting housevisits...');\n    return state.housevisits;\n  }\n);\n\nfn(state => {\n  if (state.payloads.length == 0) return state;\n  console.log('house visits bulk upsert done');\n  return state;\n});\n\n// TODO clean up in QA for troubleshooting\n// Uncomment this block to add cooldown\n// fn(state => {\n//   return new Promise((resolve, reject) => {\n//     setTimeout(() => {\n//       console.log('Final 4 second cooldown finished.');\n//       resolve(state);\n//     }, 4000);\n//   });\n// });\n")))}u.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>d});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var _=r.createContext({}),p=function(e){var n=r.useContext(_),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(_.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,_=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=p(t),h=o,d=c["".concat(_,".").concat(h)]||c[h]||u[h]||a;return t?r.createElement(d,s(s({ref:n},l),{},{components:t})):r.createElement(d,s({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=h;var i={};for(var _ in n)hasOwnProperty.call(n,_)&&(i[_]=n[_]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);