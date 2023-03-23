"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[24067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={title:"Create Intervention",sidebar_label:"Create Intervention",id:"Create-Intervention-2021-04-08",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","join","map","relationship","upsert"]},i=void 0,l={unversionedId:"library/jobs/auto/Create-Intervention-2021-04-08",id:"library/jobs/auto/Create-Intervention-2021-04-08",title:"Create Intervention",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Create-Intervention-2021-04-08.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Create-Intervention-2021-04-08",permalink:"/fr/adaptors/library/jobs/auto/Create-Intervention-2021-04-08",draft:!1,tags:[],version:"current",frontMatter:{title:"Create Intervention",sidebar_label:"Create Intervention",id:"Create-Intervention-2021-04-08",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","join","map","relationship","upsert"]},sidebar:"adaptors",previous:{title:"\u2728 Attendance Non Skillz",permalink:"/fr/adaptors/library/jobs/auto/Attendance-Non-Skillz-2021-06-14"},next:{title:"\u2728 Upsert Post Challenges",permalink:"/fr/adaptors/library/jobs/auto/Upsert-Post-Challenges-2021-04-30"}},s={},d=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: Create Intervention"),(0,r.kt)("li",{parentName:"ul"},"Adaptor: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,r.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,r.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4"},(0,r.kt)("inlineCode",{parentName:"a"},"v2.7.4"))),(0,r.kt)("li",{parentName:"ul"},"Created almost 2 years ago"),(0,r.kt)("li",{parentName:"ul"},"Updated 9 months ago"),(0,r.kt)("li",{parentName:"ul"},"Score: ",(0,r.kt)("b",null,"18")," (an ",(0,r.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.kt)("h2",{id:"key-functions"},"Key Functions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"join"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"relationship"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upsert")),(0,r.kt)("h2",{id:"expression"},"Expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"alterState((state) => {\n  \n  function clean(str) {\n    if (!!str)\n      return str\n        .split('_')\n        .map(word => {\n          let new_word = word.toString().toLowerCase();\n          return new_word.slice(0, 1).toUpperCase() + new_word.slice(1);\n        })\n        .join(' ');\n  }\n  \n  state.data.form.delivery_method = clean(state.data.form.delivery_method);\n  \n  const coachFieldNames = ['Coach_A__r','Coach_B__r','Coach_C__r','Coach_D__r']\n \n  state.data.destinationCoachFields = state.data.form.coaches\n  .split(' ')\n  .reduce(\n    (accumulator, currentValue, currentIndex) => [\n      ...accumulator,\n      (currentIndex < coachFieldNames.length && !!currentValue\n        ? relationship(coachFieldNames[currentIndex], 'CommCare_Ext_ID__c', currentValue)\n        : []),\n    ],\n    []\n  );\n  \n  return state; \n}); \n\nupsert(\n  'Event__c',\n  'CommCare_Case_ID__c',\n  state=>({\n  ...fields(\n    field('Name', dataValue('form.name_of_intervention')),\n    field('CommCare_Ext_ID__c', state => {\n      return dataValue('form.name_of_intervention')(state).replace(/\\//gi, ''); \n    }),\n    field('CommCare_Case_ID__c', dataValue('form.case.@case_id')),\n    field('Grant_Text__c', dataValue('form.grant')),\n    relationship('RecordType', 'Name', 'Intervention'),\n    field('Business_Unit__c', state => {\n      const bu = dataValue('form.business_unit')(state); \n      return bu==='65680f0c4c144b03ad0f86bdc46c1ebc' ? 'GRS Zambia' : \n      bu==='04d98397e28046118fade28ced6b65cb' ? 'GRS Zimbabwe' : \n      bu==='ed125ab19ec34aacab79585e59eb76f4' ? 'GRS Partnerships': undefined ; \n    }),\n    relationship(\n      'Site__r',\n      'CommCare_Ext_ID__c',\n      dataValue('form.site')\n    ),\n    relationship(\n      'Venue__r',\n      'CommCare_Ext_ID__c',\n      dataValue('form.Venue')\n      \n    ),\n    relationship(\n      'Curriculum__r',\n      'CommCare_Ext_ID__c',\n      dataValue('form.curriculum_selection.curriculum')\n    ),\n    field('Delivery_Method__c', dataValue('form.delivery_method')),\n    field('Class_Group_Team__c', dataValue('form.class_grade')),\n    field('Pre_Post_Administered__c', dataValue('form.prepost_administered')),\n    field('Start_Date__c', dataValue('form.intervention_dates.start_date')),\n    field('End_Date__c', dataValue('form.intervention_dates.end_date'))\n  ),\n  ...fields(...state.data.destinationCoachFields)\n  })\n);\n")))}p.isMDXComponent=!0}}]);