"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[66536],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),_=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=_(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=_(n),f=i,u=p["".concat(s,".").concat(f)]||p[f]||c[f]||r;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var _=2;_<r;_++)o[_]=n[_];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},75042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>_});var a=n(87462),i=(n(67294),n(3905));const r={title:"Malaria Testing Event Snapshot",sidebar_label:"Malaria Testing Event Snapshot",id:"Malaria-Testing-Event-Snapshot-2021-05-03",keywords:["library","job","expression","salesforce","dataValue","field","fields","upsert"]},o=void 0,l={unversionedId:"jobs/auto/Malaria-Testing-Event-Snapshot-2021-05-03",id:"jobs/auto/Malaria-Testing-Event-Snapshot-2021-05-03",title:"Malaria Testing Event Snapshot",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Malaria-Testing-Event-Snapshot-2021-05-03.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Malaria-Testing-Event-Snapshot-2021-05-03",permalink:"/library/jobs/auto/Malaria-Testing-Event-Snapshot-2021-05-03",draft:!1,tags:[],version:"current",frontMatter:{title:"Malaria Testing Event Snapshot",sidebar_label:"Malaria Testing Event Snapshot",id:"Malaria-Testing-Event-Snapshot-2021-05-03",keywords:["library","job","expression","salesforce","dataValue","field","fields","upsert"]},sidebar:"library",previous:{title:"HIV Testing Event Statistics",permalink:"/library/jobs/auto/HIV-Testing-Event-Statistics-2021-05-03"},next:{title:"Malaria Testing Event Statistics",permalink:"/library/jobs/auto/Malaria-Testing-Event-Statistics-2021-05-03"}},s={},_=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],d={toc:_};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name: Malaria Testing Event Snapshot"),(0,i.kt)("li",{parentName:"ul"},"Adaptor: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,i.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,i.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4"},(0,i.kt)("inlineCode",{parentName:"a"},"v2.7.4"))),(0,i.kt)("li",{parentName:"ul"},"Created over 1 year ago"),(0,i.kt)("li",{parentName:"ul"},"Updated 7 months ago"),(0,i.kt)("li",{parentName:"ul"},"Score: ",(0,i.kt)("b",null,"18")," (an ",(0,i.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,i.kt)("h2",{id:"key-functions"},"Key Functions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert")),(0,i.kt)("h2",{id:"expression"},"Expression"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// push to production\nupsert(\n  'Event__c',\n  'CommCare_Case_ID__c',\n  fields(\n    field('Name', dataValue('form.hidden_properties.event_name')),\n    field('Date__c', dataValue('form.basic_information.event_details.event_date')),\n    field('Testing_Partner_Contact_Persion__c', dataValue('form.event_information.testing_partner__contact_people')),\n    field('of_People_in_Attendance_Testing_Events__c', dataValue('form.event_information.number_in_attendance')),\n    field('Coordinator__c', dataValue('form.event_information.event_coordinator')),\n    field(\n      'Did_an_organization_discuss_Malaria__c',\n      dataValue('form.malaria_treatment_prevention.info_malaria_treatment')\n    ),\n    field('What_organization_s_What_topic_s__c', dataValue('form.malaria_treatment_prevention.which_organizations')),\n    field(\n      'How_was_the_information_presented__c',\n      dataValue('form.malaria_treatment_prevention.how_was_info_presented')\n    ),\n    //field('of_Participants__c', dataValue('form.malaria_treatment_prevention.how_many_total_participants')),\n    field(\n      'Did_other_organizations_conduct__c',\n      dataValue(\"form.skills_activities['did_other_organisations_eg_youth-friendly_clinic_ministry_of_health_etc_con']\")\n    ),\n    field(\n      'What_organization_s_What_topic_s__c',\n      dataValue('form.skills_activities.what_organisations_delivered_a_session_and_what_was_the_topic_of_the_sessio')\n    ),\n    field('Facilitator_1__c', dataValue('form.skills_activities.facilitators')),\n    field(\n      'How_many_people_attended_the_sessions__c',\n      dataValue('form.skills_activities.how_many_people_attended_the_sessions_in_total')\n    ),\n    field(\n      'How_many_people_attended_the_sessions_oh__c',\n      dataValue('form.skills_activities.how_many_people_attended_the_sessions_in_total')\n    ),\n    field(\n      'X2_Main_challenges__c',\n      dataValue('form.bed_net_distribution.please_describe_highlights_key_challenges_and_main_lessons_learned_from_thi')\n    ),\n    field(\n      'X1_Main_successes__c',\n      dataValue('form.bed_net_distribution.please_describe_highlights_key_challenges_and_main_lessons_learned_from_thi')\n    ),\n    field(\n      'Number_of_Bed_Nets_Distributed__c',\n      dataValue('form.bed_net_distribution.total_number_of_bed_nets_distributed')\n    ),\n    //field('Site__c', dataValue('form.event_information.site')),\n    //field('Venue__c', dataValue('form.event_information.venue')),\n    //field('Curriculum__c', dataValue('form.event_information.curriculum')),\n    field('X1_0_Intervention_Name__c', dataValue('form.event_information.intervention')),\n    //field('Coach_1__c', dataValue('form.hidden_properties.coach_name')),\n    field('CommCare_Case_ID__c', dataValue('form.case.@case_id')),\n    field('Date__c', dataValue('form.event_information.event_date')),\n    field('Testing_Partner_Contact_Persion__c', dataValue('form.event_information.testing_partner__contact_people')),\n    field('of_People_in_Attendance_Testing_Events__c', dataValue('form.event_information.number_in_attendance')),\n    field('Coordinator__c', dataValue('form.event_information.event_coordinator'))\n  )\n);\n\n")))}c.isMDXComponent=!0}}]);