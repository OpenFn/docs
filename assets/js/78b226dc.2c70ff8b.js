"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[82925],{74975:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>_,contentTitle:()=>i,default:()=>v,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=a(58168),n=(a(96540),a(15680));const s={title:"Upsert Service Referral 2",sidebar_label:"Upsert Service Referral 2",id:"Upsert-Service-Referral-2-2021-06-14",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","upsert"]},i=void 0,o={unversionedId:"library/jobs/auto/Upsert-Service-Referral-2-2021-06-14",id:"library/jobs/auto/Upsert-Service-Referral-2-2021-06-14",title:"Upsert Service Referral 2",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Upsert-Service-Referral-2-2021-06-14.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Upsert-Service-Referral-2-2021-06-14",permalink:"/adaptors/library/jobs/auto/Upsert-Service-Referral-2-2021-06-14",draft:!1,tags:[],version:"current",frontMatter:{title:"Upsert Service Referral 2",sidebar_label:"Upsert Service Referral 2",id:"Upsert-Service-Referral-2-2021-06-14",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","upsert"]},sidebar:"adaptors",previous:{title:"Upsert Service Referral",permalink:"/adaptors/library/jobs/auto/Upsert-Service-Referral-2021-04-30"},next:{title:"Upsert Risk and Vulnerability Assessment - Service Referral",permalink:"/adaptors/library/jobs/auto/Upsert-Risk-and-Vulnerability-Assessment-Service-Referral-2021-05-25"}},_={},l=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:l},p="wrapper";function v(e){let{components:r,...a}=e;return(0,n.yg)(p,(0,t.A)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.yg)("h2",{id:"metadata"},"Metadata"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Name: Upsert Service Referral 2"),(0,n.yg)("li",{parentName:"ul"},"Adaptor: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,n.yg)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,n.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4"},(0,n.yg)("inlineCode",{parentName:"a"},"v2.7.4"))),(0,n.yg)("li",{parentName:"ul"},"Created over 3 years ago"),(0,n.yg)("li",{parentName:"ul"},"Updated about 2 hours ago"),(0,n.yg)("li",{parentName:"ul"},"Score: ",(0,n.yg)("b",null,"0")," (an ",(0,n.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.yg)("h2",{id:"key-functions"},"Key Functions"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"alterState"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"fields"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"upsert")),(0,n.yg)("h2",{id:"expression"},"Expression"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"// push to production\nalterState(state => {\n  state.data.external_commcare_id = (\n    dataValue('form.hidden_properties.intervention_name')(state) +\n    dataValue('form.hidden_properties.participant_first_name')(state) +\n    dataValue('form.hidden_properties.participant_surname')(state)\n  )\n    .toString()\n    .toLowerCase()\n    .replace(/\\s/g, '')\n    .trim();\n\n  return state;\n});\n\nupsert(\n  'NewReferral__c',\n  'CommCare_Ext_ID__c',\n  fields(\n    field('Business_Unit_Site__c', state => {\n      const bu = dataValue('form.business_unit')(state);\n      return bu === 'X' ? 'GRS Zambia' : bu;\n    }),\n    field('CommCare_Ext_ID__c', dataValue('form.case.@case_id')),\n     field('HIV_Testing_Services_Service_Provider__c', state =>\n      Boolean(\n        dataValue('form.referral_services.hiv_support__care.check_services_label.hiv_support_care_option1')(state)\n      )\n    ),\n    field('TB_Screening_Service_Provider__c', state =>\n      Boolean(\n        dataValue('form.referral_services.hiv_support__care.check_services_label.hiv_support_care_option2')(state)\n      )\n    ),\n    field('VMMC_Service_Provider__c', state =>\n      Boolean(\n        dataValue('form.referral_services.hiv_support__care.check_services_label.hiv_support_care_option3')(state)\n      )\n    ),\n    field('Post_Exposure_Prophylaxis_Service_Provid__c', state =>\n      Boolean(\n        dataValue(\n          'form.referral_services.hiv_support__care.check_services_label.hiv_support_care_option4'\n        )(state)\n      )\n    ),\n    field('PrEP_Service_Provider__c', state =>\n      Boolean(\n        dataValue(\n          'form.referral_services.hiv_support__care.check_services_label.hiv_support_care_option5'\n        )(state)\n      )\n    ),\n    field('HIV_STI_PREVENTION_Other_Service_Provid__c', state =>\n      Boolean(\n        dataValue(\n          'form.referral_services.hiv_support__care.check_services_label.hiv_support_care_option6'\n        )(state)\n      )\n    ),\n    field('ART_Initiation_Service_Provider__c', state =>\n      Boolean(\n        dataValue('form.referral_services.art_support_services.art_services_group.art_services_option1')(\n          state\n        )\n      )\n    ),\n    field('SKILLZ_Plus_Club_Support_Service_Provid__c', state =>\n      Boolean(\n        dataValue('form.referral_services.art_support_services.art_services_group.art_services_option2')(\n          state\n        )\n      )\n    ),\n    \n    field(\n      'PMTCT_Service_Provider__c',\n      state =>\n        Boolean(\n          dataValue('form.referral_services.art_support_services.art_services_group.art_services_option3')(\n            state\n          )\n        )\n    ), \n    field('IPTG_Health_Facility__c', state =>\n      Boolean(\n        dataValue('form.referral_services.mental_health_services.confirmation_of_services_provided_label.mental_health_select_services_option1')(\n          state\n        )\n      )\n    ),    \n    field('IPTG_Specialized_to_SMZ__c', state =>\n      Boolean(\n        dataValue('form.referral_services.mental_health_services.confirmation_of_services_provided_label.mental_health_select_services_option2')(\n          state\n        )\n      )\n    ),   \n    \n      field('ART_Services_Other_Service_Provider__c', state =>\n        Boolean(\n          dataValue('form.referral_services.art_support_services.referred_art_support_services')(state)\n        )\n      ),\n      field(\n        'Victim_Friendly_Services_Service_Provide__c',\n        state =>\n          Boolean(\n            dataValue(\n              'form.referral_services.child_protection_support_services.copy-1-of-check_the_services_that_were_provided.child_protection_option1'\n            )(state)\n          ) ||\n          Boolean(\n            dataValue(\n              'form.referral_services.child_protection_support_services.copy-1-of-check_the_services_that_were_provided.child_protection_option2'\n            )(state)\n          ) ||\n          Boolean(\n            dataValue(\n              'form.referral_services.child_protection_support_services.copy-1-of-check_the_services_that_were_provided.child_protection_option3'\n            )(state)\n          )\n      ),\n      field('Legal_Services_Other_Service_Provider__c', state =>\n        Boolean(\n          dataValue(\n            'form.referral_services.other_legal_services.confirmation_of_services_provided_label.legal_services_option3'\n          )(state)\n        )\n      ),\n\n    field('STI_Screen_Testing_Service_Provider__c', state =>\n        Boolean(dataValue('form.referral_services.other_srhr_services.service_label.srhr_option1')(state))\n      ),\n    \n    field('Contraception_Family_Plan_Servi_Provider__c', state =>\n      Boolean(dataValue('form.referral_services.other_srhr_services.service_label.srhr_option2')(state))\n    ),\n    field('Cervical_Cancer_Screen_Servi_Provider__c', state =>\n      Boolean(dataValue('form.referral_services.other_srhr_services.service_label.srhr_option3')(state))\n    ),\n    field('HPV_vaccine_Service_Provider__c', state =>\n      Boolean(dataValue('form.referral_services.other_srhr_services.service_label.srhr_option4')(state))\n    ),\n    field('Antenatal_Care_ANC_Service_Provider__c', state =>\n      Boolean(dataValue('form.referral_services.other_srhr_services.service_label.srhr_option5')(state))\n    ),\n    field('Sexual_and_GBV_Abuse_Servi_Provider__c', state =>\n      Boolean(dataValue('form.referral_services.other_srhr_services.service_label.srhr_option6')(state))\n    ),\n    field(\n        'Psycho_Social_Support_Service_Provider__c',\n        state =>\n          Boolean(\n            dataValue(\n              'form.referral_services.other_srhr_services.service_label.srhr_option9'\n            )(state)\n          ) ||\n          Boolean(\n            dataValue(\n              'form.referral_services.other_srhr_services.service_label.srhr_option8'\n            )(state)\n          ) ||\n          Boolean(\n            dataValue(\n              'form.referral_services.other_srhr_services.service_label.srhr_option7'\n            )(state)\n          )\n      ),\n    field('Psycho_Social_Services_Other_Service_Pro__c', state =>\n      Boolean(dataValue('form.referral_services.other_srhr_services.service_label.srhr_option10')(state))\n    ),\n    field(\n        'Legal_Services_Other_Service_Provider__c',\n        state =>\n          Boolean(\n            dataValue('form.referral_services.other_legal_services.confirmation_of_services_provided_label.legal_referral_services')(state)\n          ) ||\n          Boolean(\n            dataValue('form.referral_services.other_legal_services.confirmation_of_services_provided_label.legal_services_option1')(state)\n          ) ||\n          Boolean(\n            dataValue('form.referral_services.other_legal_services.confirmation_of_services_provided_label.legal_services_option2')(state)\n          )\n      ),\n    \n  )\n);\n\n")))}v.isMDXComponent=!0},15680:(e,r,a)=>{a.d(r,{xA:()=>c,yg:()=>f});var t=a(96540);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function s(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?s(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var _=t.createContext({}),l=function(e){var r=t.useContext(_),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},c=function(e){var r=l(e.components);return t.createElement(_.Provider,{value:r},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,s=e.originalType,_=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(a),d=n,f=p["".concat(_,".").concat(d)]||p[d]||v[d]||s;return a?t.createElement(f,i(i({ref:r},c),{},{components:a})):t.createElement(f,i({ref:r},c))}));function f(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var _ in r)hasOwnProperty.call(r,_)&&(o[_]=r[_]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);