"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[36949],{58603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={title:"Upsert Register Event",sidebar_label:"Upsert Register Event",id:"Upsert-Register-Event-2021-04-30",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","join","map","relationship","upsert"]},i=void 0,s={unversionedId:"library/jobs/auto/Upsert-Register-Event-2021-04-30",id:"library/jobs/auto/Upsert-Register-Event-2021-04-30",title:"Upsert Register Event",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Upsert-Register-Event-2021-04-30.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Upsert-Register-Event-2021-04-30",permalink:"/adaptors/library/jobs/auto/Upsert-Register-Event-2021-04-30",draft:!1,tags:[],version:"current",frontMatter:{title:"Upsert Register Event",sidebar_label:"Upsert Register Event",id:"Upsert-Register-Event-2021-04-30",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","join","map","relationship","upsert"]},sidebar:"adaptors",previous:{title:"Upsert Register Skills plus Club",permalink:"/adaptors/library/jobs/auto/Upsert-Register-Skills-plus-Club-2021-04-30"},next:{title:"Upsert Register Participant",permalink:"/adaptors/library/jobs/auto/Upsert-Register-Participant-2021-04-28"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,a.yg)("h2",{id:"metadata"},"Metadata"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Name: Upsert Register Event"),(0,a.yg)("li",{parentName:"ul"},"Adaptor: ",(0,a.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,a.yg)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,a.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4"},(0,a.yg)("inlineCode",{parentName:"a"},"v2.7.4"))),(0,a.yg)("li",{parentName:"ul"},"Created almost 4 years ago"),(0,a.yg)("li",{parentName:"ul"},"Updated 26 days ago"),(0,a.yg)("li",{parentName:"ul"},"Score: ",(0,a.yg)("b",null,"0")," (an ",(0,a.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.yg)("h2",{id:"key-functions"},"Key Functions"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"alterState"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"fields"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"join"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"map"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"relationship"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"upsert")),(0,a.yg)("h2",{id:"expression"},"Expression"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"alterState((state) => {\n  \n  function clean(str) {\n    if (!!str)\n      return str\n        .split('_')\n        .map(word => {\n          let new_word = word.toString().toLowerCase();\n          return new_word.slice(0, 1).toUpperCase() + new_word.slice(1);\n        })\n        .join(' ');\n  }\n  \n  const coachFieldNames = ['Coach_A__r','Coach_B__r','Coach_C__r','Coach_D__r']\n \n  state.data.destinationCoachFields = state.data.form.event_information.coaches\n  .split(' ')\n  .reduce(\n    (accumulator, currentValue, currentIndex) => [\n      ...accumulator,\n      (currentIndex < coachFieldNames.length && !!currentValue\n        ? relationship(coachFieldNames[currentIndex], 'CommCare_Ext_ID__c', currentValue)\n        : []),\n    ],\n    []\n  );\n  \n  const eventtype = state.data.form.event_information.event_type; \n  \n  const recordtype = eventtype==='community_health_event' || eventtype==='soccer_tournament' ? 'Testing Event' : 'Malaria Testing Event'; \n  console.log(recordtype)\n  \n  state.data.recordtype = recordtype; \n  \n  return state; \n}); \n\nupsert(\n  'Event__c',\n  'CommCare_Case_ID__c',\n  state=>({\n  ...fields(\n    field('Name', dataValue('form.event_information.Event_Name')),\n    relationship('RecordType', 'Name', dataValue('recordtype')),\n    field('CommCare_Ext_ID__c', state => {\n      var event = dataValue('form.event_information.Event_Name')(state);\n      return event ? event.replace(/\\//gi, '') : event;\n      }),\n    field('CommCare_Case_ID__c', dataValue('form.case.@case_id')),\n    field('Business_Unit__c', state => {\n      const bu = dataValue('form.event_information.business_unit')(state); \n      return bu==='65680f0c4c144b03ad0f86bdc46c1ebc' ? 'GRS Zambia' : \n      bu==='04d98397e28046118fade28ced6b65cb' ? 'GRS Zimbabwe' : \n      bu==='ed125ab19ec34aacab79585e59eb76f4' ? 'GRS Partnerships': undefined ; \n    }),\n    relationship('Site__r','CommCare_Ext_ID__c', dataValue('form.event_information.site')),\n    relationship('Venue__r', 'CommCare_Ext_ID__c',dataValue('form.event_information.Venue')),\n    field('Date__c', dataValue('form.event_information.event_date')),\n    field('Event_Type__c', dataValue('recordtype')),\n    field('Testing_Event_Type__c', state => {\n      const type = dataValue('form.event_information.event_type')(state); \n      return type.includes('malaria') ? 'Malaria Testing Event (General Event)' : 'Other';\n    }),\n    field('Coordinator__c', dataValue('form.event_information.event_coordinator')),\n  ),\n  ...fields(...state.data.destinationCoachFields)\n  })\n);\n\n")))}d.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);