"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[70092],{15054:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(58168),t=(n(96540),n(15680));const i={title:"Q3 2022 Create Distribution & Referral in SF",sidebar_label:"Q3 2022 Create Distribution & Referral in SF",id:"Q3-2022-Create-Distribution-Referral-in-SF-2020-06-19",keywords:["library","job","expression","salesforce","dataValue","field","fields","join","map","relationship","upsert"]},o=void 0,l={unversionedId:"library/jobs/auto/Q3-2022-Create-Distribution-Referral-in-SF-2020-06-19",id:"library/jobs/auto/Q3-2022-Create-Distribution-Referral-in-SF-2020-06-19",title:"Q3 2022 Create Distribution & Referral in SF",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Q3-2022-Create-Distribution-Referral-in-SF-2020-06-19.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Q3-2022-Create-Distribution-Referral-in-SF-2020-06-19",permalink:"/adaptors/library/jobs/auto/Q3-2022-Create-Distribution-Referral-in-SF-2020-06-19",draft:!1,tags:[],version:"current",frontMatter:{title:"Q3 2022 Create Distribution & Referral in SF",sidebar_label:"Q3 2022 Create Distribution & Referral in SF",id:"Q3-2022-Create-Distribution-Referral-in-SF-2020-06-19",keywords:["library","job","expression","salesforce","dataValue","field","fields","join","map","relationship","upsert"]},sidebar:"adaptors",previous:{title:"Q4 2022 Upsert Supervision - Accompaniment",permalink:"/adaptors/library/jobs/auto/Q4-2022-Upsert-Supervision-Accompaniment-2022-08-22"},next:{title:"Upsert Team or Group Name",permalink:"/adaptors/library/jobs/auto/Upsert-Team-or-Group-Name-2021-04-28"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p},d="wrapper";function c(e){let{components:r,...n}=e;return(0,t.yg)(d,(0,a.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,t.yg)("h2",{id:"metadata"},"Metadata"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Name: Q3 2022 Create Distribution & Referral in SF"),(0,t.yg)("li",{parentName:"ul"},"Adaptor: ",(0,t.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,t.yg)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,t.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,t.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,t.yg)("inlineCode",{parentName:"a"},"latest"))),(0,t.yg)("li",{parentName:"ul"},"Created over 4 years ago"),(0,t.yg)("li",{parentName:"ul"},"Updated about 2 months ago"),(0,t.yg)("li",{parentName:"ul"},"Score: ",(0,t.yg)("b",null,"0")," (an ",(0,t.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,t.yg)("h2",{id:"key-functions"},"Key Functions"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"fields"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"join"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"map"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"relationship"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"upsert")),(0,t.yg)("h2",{id:"expression"},"Expression"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"//Job to integrate CommCare 'Distribution & Referrals' form\nupsert(\n  'Family_Planning_community_Distribution__c',\n  'Commcare_Case_ID__c',\n  fields(\n    field('Commcare_Case_ID__c', dataValue('id')),\n    relationship('RecordType', 'Name', 'FP Community Distribution & Referrals'),\n    field('Distribute_Date__c', dataValue('form.date')),\n    field('Client_Name__c', dataValue('form.name')),\n    field('Client_Gender__c', dataValue('form.gender')),\n    field('Client_Age__c', dataValue('form.age')),\n    field('Client_currently_on_FP__c', dataValue('form.current_use')),\n    field('Referral_Date__c', dataValue('form.Referral_Date')),\n    field('Referral_Method__c', state => {\n      var method = dataValue('form.referral_method')(state);\n      var newMethod = method\n        ? method\n            .split(/_/g)\n            .map(\n              word =>\n                `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`\n            )\n            .join(' ')\n        : '';\n      return newMethod;\n    }),\n    field('Implant_Type__c', state => {\n      var type = dataValue('form.implant_type')(state);\n      var newType = '';\n      if (type) {\n        if (type === 'implanon') {\n          newType = '3-year Implanon';\n        } else {\n          newType = type === 'jadelle' ? '5-year Jadelle' : null;\n        }\n      }\n      return newType;\n    }),\n    field('Male_Condoms__c', dataValue('form.male_condoms_count')),\n    field('Female_Condoms__c', dataValue('form.female_condoms_count')),\n    field('POP__c', dataValue('form.POP_count')),\n    field('COC__c', dataValue('form.COC_count')),\n    field('Emergency_Pills__c', dataValue('form.emergency_pills_count')),\n    field(\n      'Pregnancy_test_positive__c',\n      dataValue('form.positive_pregnancy_tests')\n    ),\n    field('Pregnancy_referrals__c', dataValue('form.pregnancy_referrals')),\n    field(\n      'Contraception_referrals__c',\n      dataValue('form.family_planning_referrals')\n    )\n  )\n);\n\n")))}c.isMDXComponent=!0},15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>m});var a=n(96540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=a.createContext({}),p=function(e){var r=a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=t,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return n?a.createElement(m,o(o({ref:r},u),{},{components:n})):a.createElement(m,o({ref:r},u))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[d]="string"==typeof e?e:t,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);