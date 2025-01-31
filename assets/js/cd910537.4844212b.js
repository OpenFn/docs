"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[6379],{51839:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>_});var r=n(58168),t=(n(96540),n(15680));const o={title:"Q4 2022 Upsert Supervision - Accompaniment",sidebar_label:"Q4 2022 Upsert Supervision - Accompaniment",id:"Q4-2022-Upsert-Supervision-Accompaniment-2022-08-22",keywords:["library","job","expression","salesforce","dataValue","field","fields","relationship","upsert","upsertIf"]},i=void 0,c={unversionedId:"library/jobs/auto/Q4-2022-Upsert-Supervision-Accompaniment-2022-08-22",id:"library/jobs/auto/Q4-2022-Upsert-Supervision-Accompaniment-2022-08-22",title:"Q4 2022 Upsert Supervision - Accompaniment",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Q4-2022-Upsert-Supervision-Accompaniment-2022-08-22.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Q4-2022-Upsert-Supervision-Accompaniment-2022-08-22",permalink:"/adaptors/library/jobs/auto/Q4-2022-Upsert-Supervision-Accompaniment-2022-08-22",draft:!1,tags:[],version:"current",frontMatter:{title:"Q4 2022 Upsert Supervision - Accompaniment",sidebar_label:"Q4 2022 Upsert Supervision - Accompaniment",id:"Q4-2022-Upsert-Supervision-Accompaniment-2022-08-22",keywords:["library","job","expression","salesforce","dataValue","field","fields","relationship","upsert","upsertIf"]},sidebar:"adaptors",previous:{title:"Q4 2022 Upsert Supervision - Household Spot Check",permalink:"/adaptors/library/jobs/auto/Q4-2022-Upsert-Supervision-Household-Spot-Check-2022-08-24"},next:{title:"Q3 2022 Create Distribution & Referral in SF",permalink:"/adaptors/library/jobs/auto/Q3-2022-Create-Distribution-Referral-in-SF-2020-06-19"}},l={},_=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],s={toc:_},d="wrapper";function u(e){let{components:a,...n}=e;return(0,t.yg)(d,(0,r.A)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,t.yg)("h2",{id:"metadata"},"Metadata"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Name: Q4 2022 Upsert Supervision - Accompaniment"),(0,t.yg)("li",{parentName:"ul"},"Adaptor: ",(0,t.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,t.yg)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,t.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,t.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,t.yg)("inlineCode",{parentName:"a"},"latest"))),(0,t.yg)("li",{parentName:"ul"},"Created over 2 years ago"),(0,t.yg)("li",{parentName:"ul"},"Updated about 5 hours ago"),(0,t.yg)("li",{parentName:"ul"},"Score: ",(0,t.yg)("b",null,"0")," (an ",(0,t.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,t.yg)("h2",{id:"key-functions"},"Key Functions"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"fields"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"relationship"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"upsert"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"upsertIf")),(0,t.yg)("h2",{id:"expression"},"Expression"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"//Job to integrate CommCare 'Accompaniement' form from the Supervision App.\nfn(state => {\nstate.handleMultiSelect = function (state, multiField) {\n    return multiField\n      ? multiField\n          .replace(/ /g, ';')\n      : '';\n  };\n  \n    state.cleanChoice = function (state, choice) {\n    if (choice) {\n      return choice.charAt(0).toUpperCase() + choice.slice(1).replace('_', ' ');\n    } else {\n      return '';\n    }\n  }\n\n   return {\n    ...state\n  };\n  \n});\n\n\nupsert(\n  'Supervision_Forms__c',\n  'CommCare_Form_ID__c',\n  fields(\n    field('CommCare_Form_ID__c', dataValue('id')),\n    relationship('RecordType', 'Name', 'Accompanient Form'),\n    field('Supervisor_Name__c', dataValue('form.prologue.supervisor_sfid')),\n    field('CHW_Name__c', dataValue('form.prologue.chw_sfid')),\n      relationship(\n      'Village__r',\n      'CommCare_User_ID__c',\n      dataValue('form.prologue.chw_village')\n    ),\n    field('Form_Date__c',dataValue('form.Date')),\n    field('Fertile_Women_in_Household__c',dataValue('form.WRA_check')),\n    field('CHW_Asked_About_Family_Planning__c',dataValue('form.women_of_reproductive_age.fp_check')),\n    field('Contraception_Distributed__c', state => {\n      var choice = dataValue(\n        'form.women_of_reproductive_age.fp_resources_check'\n      )(state);\n      return state.handleMultiSelect(state, choice);\n    }),\n    \n    \n    field('Household_members_aware_of_CHW_SRH__c',dataValue('form.women_of_reproductive_age.srh_awareness_check')),\n    field('Pregnant_Women_in_HH__c',dataValue('form.pregnancy_check')),\n    field('CHW_Asked_About_ANC_Visits__c',dataValue('form.pregnant_women.anc_check')),\n    field('CHW_Counseled_On_Value_of_ANC_Visits__c',dataValue('form.pregnant_women.anc_counsel_check')),\n    field('CHW_Read_Each_Pregnancy_Danger_Sign__c',dataValue('form.pregnant_women.danger_sign_check')),\n    field('Household_aware_of_CHW_MCH_Services__c',dataValue('form.pregnant_women.pregnancy_support_awareness_check')),\n    field('Pregnant_Woman_Delivered__c',dataValue('form.pregnant_women.delivery_check')),\n    field('Used_MCH_Booklet__c',dataValue('form.delivery.vaccination_check')),\n    field('Counsel_on_vaccination_schedule__c',dataValue('form.delivery.vaccination_counsel_check')),\n    field('Counselled_on_Exclusive_Breastfeeding__c',dataValue('form.delivery.ebf_check')),\n    field('Children_Under_5_in_Household__c',dataValue('form.cu5_check')),\n    field('All_children_under_5_registered__c',dataValue('form.children_under_5.cu5_enrollment_check')),\n    field('MUAC_taken_for_all_children__c',dataValue('form.children_under_5.muac_check')),\n    field('Measured_MUAC_circumference_properly__c',dataValue('form.children_under_5.muac_method_check')),\n    //     field('Measured_MUAC_circumference_properly__c', state => {\n    //   var choice = dataValue(\n    //     'form.children_under_5.muac_method_check'\n    //   )(state);\n    //   return state.cleanChoice(state, choice);\n    // }),\n    field('HIV_Members_in_the_Household__c',dataValue('form.hiv_check')),\n    field('Recorded_HIV_Status_Information__c',dataValue('form.hiv_clients.hiv_info_check')),\n    field('Counselled_on_ART_Adherence_HIV_Services__c',dataValue('form.hiv_clients.hiv_counsel_check')),\n    field('Sick_Household_Members_at_Visit__c',dataValue('form.illness_check')),\n    field('Household_member_reported_fever__c',dataValue('form.illness_referrals.fever_check')),\n    field('Conducted_malaria_home_test__c', dataValue('form.illness_referrals.malaria_test_check')),\n    field('Malaria_test_protocol_followed__c',dataValue('form.illness_referrals.malaria_test_method_check')),\n    field('Sick_person_referred__c',dataValue('form.illness_referrals.referral_accompaniment_check')),\n    field('Referral_discussed_with_family__c',dataValue('form.illness_referrals.referral_followup_check')),\n    field('Distributed_treatments_medications__c',dataValue('form.distribution_check')),\n    field('Stock_is_full__c',dataValue('form.stocks_check')),\n    field('Missing_Stock__c', state => {\n      var choice = dataValue(\n        'form.missing_stocks_details'\n      )(state);\n      return state.handleMultiSelect(state, choice);\n    }),\n    field('Other_Missing_Stock__c',dataValue('form.missing_stocks_details_other')),\n    field('Demonstrated_active_listening__c',dataValue('form.chw_behavior.active_listening_check')),\n    field('Acted_with_respect_courtesy__c',dataValue('form.chw_behavior.respect_check')),\n    field('CHW_Rating__c',dataValue('form.chw_behavior.interview_technique_check')),\n    field('Tablet_used__c',dataValue('form.chw_behavior.tablet_use_check')),\n    field('Tablet_used_effectively__c',dataValue('form.chw_behavior.tablet_competency_check')),\n    field('Tablet_problem_observed__c', state => {\n      var choice = dataValue(\n        'form.chw_behavior.tablet_issues'\n      )(state);\n      return state.handleMultiSelect(state, choice);\n    }),\n    field('Visit_Length_Mins__c',dataValue('form.visit_length')),\n    field('Accompanient_components_covered__c', state => {\n        var choice = dataValue(\n          'form.feedback_type'\n           )(state);\n      return state.handleMultiSelect(state, choice);\n    }), \n    field('Other_comments__c',dataValue('form.supervisor_comments')),\n        field('Contraception_Distributed__c', state => {\n      var choice = dataValue(\n        'form.women_of_reproductive_age.fp_resources_check'\n      )(state);\n      return state.handleMultiSelect(state, choice);\n    }),\n     )\n);  \n\nupsertIf(\n  state.data.form.prologue.hh_code !== '' &&\n  state.data.form.prologue.hh_code !== null,\n  'Supervision_Forms__c',\n  'CommCare_Form_ID__c',\n  relationship('Household_Code__r', \n    'Name',\n    dataValue('form.prologue.hh_code')\n    )\n  );\n")))}u.isMDXComponent=!0},15680:(e,a,n)=>{n.d(a,{xA:()=>s,yg:()=>m});var r=n(96540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=r.createContext({}),_=function(e){var a=r.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},s=function(e){var a=_(e.components);return r.createElement(l.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=_(n),p=t,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return n?r.createElement(m,i(i({ref:a},s),{},{components:n})):r.createElement(m,i({ref:a},s))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c[d]="string"==typeof e?e:t,i[1]=c;for(var _=2;_<o;_++)i[_]=n[_];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);