"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[48783],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Designing a job"},i=void 0,s={unversionedId:"jobs/job-design-intro",id:"jobs/job-design-intro",title:"Designing a job",description:"A job defines the specific series of tasks or database actions to be performed when a triggering message is received (even-based) or a pre-scheduled (and recurring) time is reached. It's the series of instructions for handling the data coming from a source system and to be sent to the destination system, or in other words, mapping data elements from one system to the other.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/jobs/job-design-intro.md",sourceDirName:"jobs",slug:"/jobs/job-design-intro",permalink:"/fr/documentation/next/jobs/job-design-intro",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/job-design-intro.md",tags:[],version:"current",frontMatter:{title:"Designing a job"},sidebar:"docs",previous:{title:"Introduction aux Jobs",permalink:"/fr/documentation/next/build/jobs"},next:{title:"Un examen plus approfondi des jobs",permalink:"/fr/documentation/next/jobs/understanding"}},l={},p=[],d={toc:p},u="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A job defines the specific series of tasks or database actions to be performed when a triggering message is received (even-based) or a pre-scheduled (and recurring) time is reached. It's the series of instructions for handling the data coming from a source system and to be sent to the destination system, or in other words, mapping data elements from one system to the other."),(0,r.kt)("p",null,"Designing a job really just means clearly defining the \u201crules\u201d for data element mapping. We'll walk through the main steps using Kobo Toolbox as an example source system and a Postgres database as destination but check out the ",(0,r.kt)("a",{parentName:"p",href:"/documentation/design/design-quickstart/"},"integration design")," page for more details on data flow diagrams and mappings."),(0,r.kt)("p",null,"Step 1: Map your data flows"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Define your input(s). What data collection forms are used to collect data? How many forms? Are there different form versions?"),(0,r.kt)("li",{parentName:"ol"},"Define your output(s). Where should the data be stored? In what format? What are your analysis requirements?")),(0,r.kt)("p",null,"Step 2: Map your data elements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Export the metadata of your form (input) & destination DB (output)."),(0,r.kt)("li",{parentName:"ol"},"Paste the metadata into an Excel spreadsheet to create a mapping sheet:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sample mapping sheet",src:n(25303).Z,width:"1838",height:"448"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Map data elements & define rules for data cleaning and transformation a. How should the data collected be translated into your destination system\u2019s data model?\xa0 b. Does your destination system have data input & validation requirements?")),(0,r.kt)("p",null,"Step 3. Define your operations: insert, update, upsert..."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Find out or create the unique identifiers you will use to insert and update data (form ID, answer ID, or, case or patient ID etc.)."),(0,r.kt)("li",{parentName:"ol"},"Determine operations: e.g. insert, update, upsert, upsertMany"),(0,r.kt)("li",{parentName:"ol"},"Check the adaptor for helper functions. a. Example from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/language-postgresql"},"language-postgresql"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"insert(...)"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"insertMany(...)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"update(...)"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"updateMany(...)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"upsert(...)"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"upsertMany(...)")," \xa0\u2192 update if record exists or insert if it doesn\u2019t; references an external Id b. Example from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/language-dhis2"},"language-dhis2")," using Tracked Entity Instances (TEI)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"updateTEI(...)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"upsertTEI(...)"))))),(0,r.kt)("p",null,"Example upsert job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"upsert('mainDataTable', 'AnswerId', {\n\xa0 AnswerId: dataValue('\\_id'), //external Id for upsert\n\xa0\xa0column: dataValue('firstQuestion)'),\n\xa0\xa0LastUpdate: new Date().toISOString(),\n\xa0\xa0Participant: dataValue('participant'),\n\xa0\xa0Surveyor: dataValue('surveyor'),\n\xa0\xa0...\n});\n")))}c.isMDXComponent=!0},25303:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/data-element-mapping-3d88dbb0716af7d57c3e19c6c65eb336.png"}}]);