"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[38992],{38321:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(58168),n=(t(96540),t(15680));const l={title:"Upsert Register Skills plus Club",sidebar_label:"Upsert Register Skills plus Club",id:"Upsert-Register-Skills-plus-Club-2021-04-30",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","join","map","relationship","upsert"]},i=void 0,o={unversionedId:"library/jobs/auto/Upsert-Register-Skills-plus-Club-2021-04-30",id:"library/jobs/auto/Upsert-Register-Skills-plus-Club-2021-04-30",title:"Upsert Register Skills plus Club",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Upsert-Register-Skills-plus-Club-2021-04-30.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Upsert-Register-Skills-plus-Club-2021-04-30",permalink:"/adaptors/library/jobs/auto/Upsert-Register-Skills-plus-Club-2021-04-30",draft:!1,tags:[],version:"current",frontMatter:{title:"Upsert Register Skills plus Club",sidebar_label:"Upsert Register Skills plus Club",id:"Upsert-Register-Skills-plus-Club-2021-04-30",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","join","map","relationship","upsert"]},sidebar:"adaptors",previous:{title:"Upsert Register Participant Skillz",permalink:"/adaptors/library/jobs/auto/Upsert-Register-Participant-Skillz-2021-08-30"},next:{title:"Upsert Register Participant",permalink:"/adaptors/library/jobs/auto/Upsert-Register-Participant-2021-04-28"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p},c="wrapper";function d(e){let{components:r,...t}=e;return(0,n.yg)(c,(0,a.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.yg)("h2",{id:"metadata"},"Metadata"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Name: Upsert Register Skills plus Club"),(0,n.yg)("li",{parentName:"ul"},"Adaptor: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,n.yg)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,n.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4"},(0,n.yg)("inlineCode",{parentName:"a"},"v2.7.4"))),(0,n.yg)("li",{parentName:"ul"},"Created over 3 years ago"),(0,n.yg)("li",{parentName:"ul"},"Updated about 14 hours ago"),(0,n.yg)("li",{parentName:"ul"},"Score: ",(0,n.yg)("b",null,"0")," (an ",(0,n.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.yg)("h2",{id:"key-functions"},"Key Functions"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"alterState"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"fields"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"join"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"map"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"relationship"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"upsert")),(0,n.yg)("h2",{id:"expression"},"Expression"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"// push to production\nalterState((state) => {\n  \n  function clean(str) {\n    if (!!str)\n      return str\n        .split('_')\n        .map(word => {\n          let new_word = word.toString().toLowerCase();\n          return new_word.slice(0, 1).toUpperCase() + new_word.slice(1);\n        })\n        .join(' ');\n  }\n  \n  const coachFieldNames = ['Coach_A__r','Coach_B__r','Coach_C__r','Coach_D__r']\n \n  state.data.destinationCoachFields = state.data.form.coaches\n  .split(' ')\n  .reduce(\n    (accumulator, currentValue, currentIndex) => [\n      ...accumulator,\n      (currentIndex < coachFieldNames.length && !!currentValue\n        ? relationship(coachFieldNames[currentIndex], 'CommCare_Ext_ID__c', currentValue)\n        : []),\n    ],\n    []\n  );\n\n  return state; \n}); \n\n\n\nupsert(\n  'Event__c',\n  'CommCare_Case_ID__c',\n  state=>({\n  ...fields(\n      field('Name', dataValue('form.name_of_skillz_plus_club')),\n      field('CommCare_Ext_ID__c', dataValue('form.name_of_skillz_plus_club')),\n      field('CommCare_Case_ID__c', dataValue('form.case.@case_id')),\n      relationship('RecordType', 'Name', 'Intervention'),\n      relationship('Site__r', 'CommCare_Ext_ID__c', dataValue('form.skillz_plus_site')),\n      relationship('Venue__r', 'CommCare_Ext_ID__c', dataValue('form.skillz_plus_venue')),\n    ),\n    ...fields(...state.data.destinationCoachFields)\n  })\n);\n\n")))}d.isMDXComponent=!0},15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>y});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=n,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?a.createElement(y,i(i({ref:r},u),{},{components:t})):a.createElement(y,i({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);