"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[17572],{58859:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>_,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var i=a(58168),n=(a(96540),a(15680));const s={title:"Malaria Testing Event Statistics",sidebar_label:"Malaria Testing Event Statistics",id:"Malaria-Testing-Event-Statistics-2021-05-03",keywords:["library","job","expression","salesforce","dataValue","field","fields","upsert"]},r=void 0,l={unversionedId:"library/jobs/auto/Malaria-Testing-Event-Statistics-2021-05-03",id:"library/jobs/auto/Malaria-Testing-Event-Statistics-2021-05-03",title:"Malaria Testing Event Statistics",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Malaria-Testing-Event-Statistics-2021-05-03.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Malaria-Testing-Event-Statistics-2021-05-03",permalink:"/adaptors/library/jobs/auto/Malaria-Testing-Event-Statistics-2021-05-03",draft:!1,tags:[],version:"current",frontMatter:{title:"Malaria Testing Event Statistics",sidebar_label:"Malaria Testing Event Statistics",id:"Malaria-Testing-Event-Statistics-2021-05-03",keywords:["library","job","expression","salesforce","dataValue","field","fields","upsert"]},sidebar:"adaptors",previous:{title:"Attendance Non Skillz",permalink:"/adaptors/library/jobs/auto/Attendance-Non-Skillz-2021-06-14"},next:{title:"HIV Testing Event Statistics",permalink:"/adaptors/library/jobs/auto/HIV-Testing-Event-Statistics-2021-05-03"}},_={},o=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:o},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,i.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.yg)("h2",{id:"metadata"},"Metadata"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Name: Malaria Testing Event Statistics"),(0,n.yg)("li",{parentName:"ul"},"Adaptor: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,n.yg)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,n.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4"},(0,n.yg)("inlineCode",{parentName:"a"},"v2.7.4"))),(0,n.yg)("li",{parentName:"ul"},"Created almost 4 years ago"),(0,n.yg)("li",{parentName:"ul"},"Updated 2 months ago"),(0,n.yg)("li",{parentName:"ul"},"Score: ",(0,n.yg)("b",null,"0")," (an ",(0,n.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.yg)("h2",{id:"key-functions"},"Key Functions"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"fields"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"upsert")),(0,n.yg)("h2",{id:"expression"},"Expression"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"// push to production\nupsert(\n  'Event__c',\n  'CommCare_Case_ID__c',\nfields(\n  field('Name', dataValue('form.event_information.event_name')),\n  field('CommCare_Case_ID__c', dataValue('form.case.@case_id')),\n  field(\n    'Tested_Negative_Males_0_9__c',\n    dataValue('form.table_1_testing_results_malaria.male_malaria_negative.question2')\n  ),\n  field(\n    'Tested_Negative_Males_10_14__c',\n    dataValue('form.table_1_testing_results_malaria.male_malaria_negative.question7')\n  ),\n  field(\n    'Tested_Negative_Males_15_19__c',\n    dataValue('form.table_1_testing_results_malaria.male_malaria_negative.question13')\n  ),\n  field(\n    'Tested_Negative_Males_20_24__c',\n    dataValue('form.table_1_testing_results_malaria.male_malaria_negative.question18')\n  ),\n  field(\n    'Tested_Negative_Males_25_49__c',\n    dataValue('form.table_1_testing_results_malaria.male_malaria_negative.question28')\n  ),\n  field(\n    'Tested_Negative_Males_50__c',\n    dataValue('form.table_1_testing_results_malaria.male_malaria_negative.question32')\n  ),\n  field('Tested_Positive_Males_0_9__c', dataValue('form.table_1_testing_results_malaria.question33.question36')),\n  field('Tested_Positive_Males_10_14__c', dataValue('form.table_1_testing_results_malaria.question33.question41')),\n  field('Tested_Positive_Males_15_19__c', dataValue('form.table_1_testing_results_malaria.question33.question45')),\n  field('Tested_Positive_Males_20_24__c', dataValue('form.table_1_testing_results_malaria.question33.question50')),\n  field('Tested_Positive_Males_25_49__c', dataValue('form.table_1_testing_results_malaria.question33.question56')),\n  field('Tested_Positive_Males_50__c', dataValue('form.table_1_testing_results_malaria.question33.question60')),\n  field('Tested_Negative_Females_0_9__c', dataValue('form.table_1_testing_results_malaria.question61.question65')),\n  field('Tested_Negative_Females_10_14__c', dataValue('form.table_1_testing_results_malaria.question61.question69')),\n  field('Tested_Negative_Females_15_19__c', dataValue('form.table_1_testing_results_malaria.question61.question73')),\n  field('Tested_Negative_Females_20_24__c', dataValue('form.table_1_testing_results_malaria.question61.question78')),\n  field('Tested_Negative_Females_25_49__c', dataValue('form.table_1_testing_results_malaria.question61.question84')),\n  field('Tested_Negative_Females_50__c', dataValue('form.table_1_testing_results_malaria.question61.question88')),\n  field('Tested_Positive_Females_0_9__c', dataValue('form.table_1_testing_results_malaria.question89.question92')),\n  field('Tested_Positive_Females_10_14__c', dataValue('form.table_1_testing_results_malaria.question89.question97')),\n  field('Tested_Positive_Females_15_19__c', dataValue('form.table_1_testing_results_malaria.question89.question101')),\n  field('Tested_Positive_Females_20_24__c', dataValue('form.table_1_testing_results_malaria.question89.question106')),\n  field('Tested_Positive_Females_25_49__c', dataValue('form.table_1_testing_results_malaria.question89.question112')),\n  field('Tested_Positive_Females_50__c', dataValue('form.table_1_testing_results_malaria.question89.question116'))\n));\n\n")))}m.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>f});var i=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var _=i.createContext({}),o=function(e){var t=i.useContext(_),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=o(e.components);return i.createElement(_.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,_=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=o(a),c=n,f=d["".concat(_,".").concat(c)]||d[c]||m[c]||s;return a?i.createElement(f,r(r({ref:t},u),{},{components:a})):i.createElement(f,r({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=c;var l={};for(var _ in t)hasOwnProperty.call(t,_)&&(l[_]=t[_]);l.originalType=e,l[d]="string"==typeof e?e:n,r[1]=l;for(var o=2;o<s;o++)r[o]=a[o];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);