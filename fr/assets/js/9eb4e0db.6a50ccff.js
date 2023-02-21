"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[24883],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),_=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=_(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=_(t),f=r,u=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?a.createElement(u,i(i({ref:n},c),{},{components:t})):a.createElement(u,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var _=2;_<o;_++)i[_]=t[_];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},73410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>_});var a=t(87462),r=(t(67294),t(3905));const o={title:"HIV Testing Event Snapshot",sidebar_label:"HIV Testing Event Snapshot",id:"HIV-Testing-Event-Snapshot-2021-05-03",keywords:["library","job","expression","salesforce","dataValue","field","fields","upsert"]},i=void 0,s={unversionedId:"library/jobs/auto/HIV-Testing-Event-Snapshot-2021-05-03",id:"library/jobs/auto/HIV-Testing-Event-Snapshot-2021-05-03",title:"HIV Testing Event Snapshot",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/HIV-Testing-Event-Snapshot-2021-05-03.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/HIV-Testing-Event-Snapshot-2021-05-03",permalink:"/fr/adaptors/library/jobs/auto/HIV-Testing-Event-Snapshot-2021-05-03",draft:!1,tags:[],version:"current",frontMatter:{title:"HIV Testing Event Snapshot",sidebar_label:"HIV Testing Event Snapshot",id:"HIV-Testing-Event-Snapshot-2021-05-03",keywords:["library","job","expression","salesforce","dataValue","field","fields","upsert"]},sidebar:"adaptors",previous:{title:"Malaria Testing Event Statistics",permalink:"/fr/adaptors/library/jobs/auto/Malaria-Testing-Event-Statistics-2021-05-03"},next:{title:"Coach Session Register",permalink:"/fr/adaptors/library/jobs/auto/Coach-Session-Register-2021-05-03"}},l={},_=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:_},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: HIV Testing Event Snapshot"),(0,r.kt)("li",{parentName:"ul"},"Adaptor: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,r.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,r.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4"},(0,r.kt)("inlineCode",{parentName:"a"},"v2.7.4"))),(0,r.kt)("li",{parentName:"ul"},"Created almost 2 years ago"),(0,r.kt)("li",{parentName:"ul"},"Updated 10 months ago"),(0,r.kt)("li",{parentName:"ul"},"Score: ",(0,r.kt)("b",null,"18")," (an ",(0,r.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.kt)("h2",{id:"key-functions"},"Key Functions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upsert")),(0,r.kt)("h2",{id:"expression"},"Expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// push to production\nupsert(\n  'Event__c',\n  'CommCare_Ext_ID__c',\n  fields(\n    field('Name', dataValue('form.basic_information.intervention')),\n    field('Venue__c', dataValue('form.basic_information.venue')),\n    field('Coach_A__c', dataValue('form.hidden_properties.coach_name')),\n    field('Date__c', dataValue('form.basic_information.event_date')),\n    field('Testing_Partner_Contact_Persion__c', dataValue('form.basic_information.testing_partner__contact_people')),\n    field('of_People_in_Attendance_Testing_Events__c', dataValue('form.basic_information.number_in_attendance')),\n    field('Event_Type__c', dataValue('form.basic_information.testing_event_type')),\n    field('Coordinator__c', dataValue('form.basic_information.event_coordinator')),\n    field(\n      'What_organization_discussed_VMMC__c',\n      dataValue('form.basic_information.question2.what_organisation_discussed_mmc')\n    ),\n    field(\n      'What_organization_s_What_topic_s__c',\n      dataValue(\n        'form.basic_information.information_sessions_other.what_organisations_delivered_a_session_and_what_was_the_topic_of_the_sessio'\n      )\n    ),\n    field(\n      'How_was_the_information_presented__c',\n      dataValue('form.basic_information.question2.how_was_this_information_presented_eg_lecture_individua_sessions_etc')\n    ),\n    field('how_many_people_attended_the_sessions__c', dataValue('form.basic_information.number_in_attendance')),\n    field(\n      'How_many_people_attended_the_sessions_oh__c',\n      dataValue('form.basic_information.question2.approximately_how_many_people_attended_the_sessions_in_total')\n    ),\n    field(\n      'Did_other_organizations_conduct__c',\n      dataValue(\n        'form.basic_information.information_sessions_other.did_other_organisations_eg_youth-friendly_clinic_ministry_of_health_etc_con'\n      )\n    ),\n    field(\n      'Testing_Key_Lesson_s_Learned__c',\n      dataValue('form.basic_information.event_overview.highlights_key_challenges')\n    ),\n    field(\n      'X2_Main_challenges__c',\n      dataValue(\n        'form.basic_information.event_overview.please_describe_highlights_key_challenges_and_main_lessons_learned_from_thi'\n      )\n    )\n  )\n);\n\n")))}d.isMDXComponent=!0}}]);